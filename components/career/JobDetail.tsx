"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import ApplicationForm from "../ApplicationForm";
import { PillLink, Reveal, fadeUp, focusRing, maskUp, stagger } from "../ui";
import { JOBS_API, formatPosted, type Job } from "./jobs";

type Status = "loading" | "ready" | "missing" | "error";

export default function JobDetail({ id }: { id: string }) {
  const [job, setJob] = useState<Job | null>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    let alive = true;
    // the API answers malformed ids with a 500, so don't ask it
    if (!/^[a-f0-9]{24}$/i.test(id)) {
      setStatus("missing");
      return;
    }
    fetch(`${JOBS_API}/jobs/${id}`)
      .then(async (res) => {
        if (res.status === 404) return null;
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return (await res.json()) as Job;
      })
      .then((data) => {
        if (!alive) return;
        if (data?._id) {
          setJob(data);
          setStatus("ready");
        } else {
          setStatus("missing");
        }
      })
      .catch((err) => {
        console.error("Failed to fetch job:", err);
        if (alive) setStatus("error");
      });
    return () => {
      alive = false;
    };
  }, [id]);

  return (
    <main>
      <title>{job ? `${job.title} | Careers at Bigwig Media Digital` : "Careers at Bigwig Media Digital"}</title>

      <div className="wrap pt-10 md:pt-14">
        <Link
          href="/career#openings"
          className={`inline-flex items-center gap-2 rounded-sm text-[0.95rem] font-medium text-[var(--link)] hover:underline ${focusRing}`}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          All openings
        </Link>
      </div>

      {status === "loading" ? (
        <Skeleton />
      ) : status !== "ready" || !job ? (
        <div className="wrap py-20 md:py-28">
          <div className="rounded-[28px] bg-[var(--surface)] px-6 py-16 text-center">
            <p className="text-xl font-semibold">
              {status === "missing" ? "This role isn’t open anymore." : "We couldn’t load this role right now."}
            </p>
            <p className="mx-auto mt-2 max-w-md text-[var(--muted)]">
              {status === "missing"
                ? "It may have been filled. Have a look at our other openings."
                : "Please refresh in a moment, or browse our other openings."}
            </p>
            <div className="mt-6 flex justify-center">
              <PillLink href="/career#openings" tone="ink">
                See open roles
              </PillLink>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* ---------- header ---------- */}
          <section className="pb-14 pt-8 md:pb-20 md:pt-10">
            <motion.div className="wrap" initial="hidden" animate="show" variants={stagger(0.1, 0.1)}>
              <motion.p variants={fadeUp} className="text-[0.95rem] text-[var(--muted)]">
                Open role{job.createdAt && <>, posted <time dateTime={job.createdAt}>{formatPosted(job.createdAt)}</time></>}
              </motion.p>
              <h1 className="mt-4 max-w-5xl text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
                <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
                  <motion.span variants={maskUp} className="block">
                    {job.title}
                  </motion.span>
                </span>
              </h1>
              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-between gap-6">
                <ul className="flex flex-wrap gap-2" aria-label="Role details">
                  {[job.location, job.jobType, job.workMode].filter(Boolean).map((tag, i) => (
                    <li
                      key={`${i}-${tag}`}
                      className="rounded-full bg-[var(--surface)] px-4 py-2 text-[0.95rem] font-medium ring-1 ring-inset ring-[var(--line)]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <PillLink href="#apply" tone="ink" className="lg:hidden">
                  Apply now
                </PillLink>
              </motion.div>
            </motion.div>
          </section>

          {/* ---------- details + form ---------- */}
          <section className="border-t border-[var(--line)] pb-24 pt-14 md:pb-32 md:pt-20">
            <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="space-y-14 lg:col-span-7">
                <Reveal>
                  <Block title="About the role">
                    <p className="text-lg leading-relaxed text-[var(--muted)]">{job.jd}</p>
                  </Block>
                </Reveal>
                {job.responsibilities?.length > 0 && (
                  <Reveal>
                    <Block title="What you’ll do">
                      <List items={job.responsibilities} />
                    </Block>
                  </Reveal>
                )}
                {job.requirements?.length > 0 && (
                  <Reveal>
                    <Block title="What we’re looking for">
                      <List items={job.requirements} />
                    </Block>
                  </Reveal>
                )}
              </div>

              <aside id="apply" className="scroll-mt-28 lg:col-span-5">
                <Reveal className="lg:sticky lg:top-28">
                  <div className="rounded-[28px] bg-[var(--surface)] p-6 md:p-8">
                    <p className="text-[0.95rem] font-medium text-[var(--link)]">Apply for this role</p>
                    <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-tight md:text-3xl">{job.title}</h2>
                    <div className="mt-6">
                      <ApplicationForm />
                    </div>
                  </div>
                </Reveal>
              </aside>
            </div>
          </section>
        </>
      )}
    </main>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="border-t border-[var(--line)]">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4 border-b border-[var(--line)] py-4 leading-relaxed">
          <span aria-hidden className="mt-[0.7em] h-1.5 w-4 shrink-0 rounded-full bg-[var(--teal)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Skeleton() {
  return (
    <div aria-busy="true" aria-label="Loading role" className="wrap pb-24 pt-8 md:pt-10">
      <div className="h-4 w-48 animate-pulse rounded-full bg-[var(--line)]" />
      <div className="mt-6 h-14 w-2/3 animate-pulse rounded-full bg-[var(--line)] md:h-20" />
      <div className="mt-8 flex gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-10 w-24 animate-pulse rounded-full bg-[var(--line)]" />
        ))}
      </div>
      <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-4 lg:col-span-7">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-5 w-full animate-pulse rounded-full bg-[var(--line)]" />
          ))}
        </div>
        <div className="h-[420px] animate-pulse rounded-[28px] bg-[var(--line)] lg:col-span-5" />
      </div>
    </div>
  );
}
