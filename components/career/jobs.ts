import { useCallback, useEffect, useState } from "react";
import { whatsappHref } from "../ui";

export const CAREERS_WHATSAPP_HREF = whatsappHref(
  "Hi BigWig Media Digital! I'd like to know about career opportunities at Bigwig.",
);

export const JOBS_API = "https://bigwigdigitalbackend.onrender.com/api";

export interface Job {
  _id: string;
  title: string;
  location: string;
  jd: string;
  responsibilities: string[];
  requirements: string[];
  jobType: string;
  workMode: string;
  createdAt: string;
}

export const formatPosted = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

// One request shared by every component on the page that lists openings
let request: Promise<Job[]> | null = null;

function fetchJobs(fresh = false) {
  if (!request || fresh) {
    request = fetch(`${JOBS_API}/jobs`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<Job[]>;
      })
      .then((data) =>
        [...data].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
      );
    // a failed request shouldn't be reused
    request.catch(() => (request = null));
  }
  return request;
}

export type JobsStatus = "loading" | "ready" | "error";

/** Open roles, newest first. `reload` retries after an error. */
export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [status, setStatus] = useState<JobsStatus>("loading");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let alive = true;
    fetchJobs(attempt > 0)
      .then((data) => {
        if (!alive) return;
        setJobs(data);
        setStatus("ready");
      })
      .catch((err) => {
        console.error("Failed to fetch jobs:", err);
        if (alive) setStatus("error");
      });
    return () => {
      alive = false;
    };
  }, [attempt]);

  const reload = useCallback(() => {
    setStatus("loading");
    setAttempt((a) => a + 1);
  }, []);

  return { jobs, status, reload };
}
