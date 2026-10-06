"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PillLink, SectionHead, fadeUp, focusRing, inView, stagger } from "../ui";
import { useJobs, type Job } from "./jobs";

export default function Openings() {
  const { jobs, status, reload } = useJobs();

  return (
    <section id="openings" className="scroll-mt-28 border-t border-[var(--line)] py-24 md:py-32">
      <div className="wrap">
        <SectionHead
          lead="Current openings"
          title="Choose a role and start your journey with us."
          actions={
            status === "ready" && jobs.length > 0 ? (
              <p className="text-[0.95rem] text-[var(--muted)]">
                <span className="serif mr-2 text-5xl leading-none text-[var(--ink)] tabular-nums">{jobs.length}</span>
                open {jobs.length === 1 ? "role" : "roles"}
              </p>
            ) : undefined
          }
        />

        <div className="mt-14 md:mt-16">
          {status === "loading" ? (
            <Skeleton />
          ) : status === "error" ? (
            <Notice
              title="We couldn’t load our openings right now."
              body="Our jobs board may be waking up. Try again in a moment, or send us your resume directly."
            >
              <button
                type="button"
                onClick={reload}
                className={`h-12 rounded-full bg-[var(--ink)] px-6 text-[0.95rem] font-semibold text-white hover:bg-[var(--ink-2)] cursor-pointer ${focusRing}`}
              >
                Try again
              </button>
              <PillLink href="/contact">Contact us</PillLink>
            </Notice>
          ) : jobs.length === 0 ? (
            <Notice
              title="No openings right now."
              body="We’re always glad to meet good people. Send your resume and we’ll keep it on file for future roles."
            >
              <PillLink href="/contact" tone="ink">
                Send your resume
              </PillLink>
            </Notice>
          ) : (
            <motion.ul
              {...inView}
              variants={stagger(0.08)}
              className="border-t border-[var(--line-strong)]"
            >
              {jobs.map((job, i) => (
                <motion.li key={job._id} variants={fadeUp} className="border-b border-[var(--line-strong)]">
                  <JobRow job={job} index={i} />
                </motion.li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>
    </section>
  );
}

function JobRow({ job, index }: { job: Job; index: number }) {
  return (
    <Link
      href={`/career/${job._id}`}
      className={`group -mx-4 grid gap-4 rounded-[20px] px-4 py-8 transition-colors duration-300 hover:bg-[var(--surface)] md:-mx-6 md:grid-cols-12 md:items-center md:gap-6 md:px-6 ${focusRing}`}
    >
      <span aria-hidden className="serif hidden text-4xl leading-none text-[var(--teal)] md:col-span-1 md:block">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="md:col-span-6">
        <h3 className="text-2xl font-semibold leading-tight tracking-[-0.02em] md:text-[2rem]">{job.title}</h3>
        <p className="mt-2 max-w-xl leading-relaxed text-[var(--muted)] line-clamp-2">{job.jd}</p>
      </div>

      <ul className="flex flex-wrap gap-2 md:col-span-4" aria-label="Role details">
        {[job.location, job.jobType, job.workMode].filter(Boolean).map((tag, i) => (
          <li
            key={`${i}-${tag}`}
            className="rounded-full bg-[var(--surface)] px-3.5 py-1.5 text-sm font-medium ring-1 ring-inset ring-[var(--line)] transition-colors group-hover:bg-[var(--paper)]"
          >
            {tag}
          </li>
        ))}
      </ul>

      <span className="flex items-center gap-3 text-[0.95rem] font-semibold md:col-span-1 md:justify-end">
        <span className="md:sr-only">View role &amp; apply</span>
        <span
          aria-hidden
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--ink)] text-[var(--cyan)] transition-transform duration-300 group-hover:rotate-45"
        >
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </span>
    </Link>
  );
}

function Notice({ title, body, children }: { title: string; body: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[28px] bg-[var(--surface)] px-6 py-16 text-center">
      <p className="text-xl font-semibold">{title}</p>
      <p className="mx-auto mt-2 max-w-md text-[var(--muted)]">{body}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">{children}</div>
    </div>
  );
}

function Skeleton() {
  return (
    <div aria-busy="true" aria-label="Loading openings" className="border-t border-[var(--line-strong)]">
      {[0, 1, 2].map((i) => (
        <div key={i} className="grid gap-4 border-b border-[var(--line-strong)] py-8 md:grid-cols-12 md:items-center md:gap-6">
          <div className="hidden h-9 w-12 animate-pulse rounded-full bg-[var(--line)] md:col-span-1 md:block" />
          <div className="space-y-3 md:col-span-6">
            <div className="h-8 w-2/3 animate-pulse rounded-full bg-[var(--line)]" />
            <div className="h-4 w-full animate-pulse rounded-full bg-[var(--line)]" />
          </div>
          <div className="flex gap-2 md:col-span-4">
            {[0, 1, 2].map((j) => (
              <div key={j} className="h-8 w-20 animate-pulse rounded-full bg-[var(--line)]" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
