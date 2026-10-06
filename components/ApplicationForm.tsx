"use client";

import { useState } from "react";
import axios from "axios";
import { ArrowUpRight, Check, FileText, Upload, X } from "lucide-react";
import { focusRing } from "./ui";

type FormDataType = {
  fullName: string;
  email: string;
  mobileNumber: string;
  experience: string;
  cctc: string;
  ectc: string;
  noticePeriod: string;
  coverLetter: string;
};

const EMPTY: FormDataType = {
  fullName: "",
  email: "",
  mobileNumber: "",
  experience: "",
  cctc: "",
  ectc: "",
  noticePeriod: "",
  coverLetter: "",
};

const FIELDS: {
  name: Exclude<keyof FormDataType, "coverLetter">;
  label: string;
  type: string;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
}[] = [
  { name: "fullName", label: "Full name", type: "text", autoComplete: "name", required: true },
  { name: "email", label: "Email", type: "email", autoComplete: "email", required: true },
  { name: "mobileNumber", label: "Mobile number", type: "tel", autoComplete: "tel", required: true },
  { name: "experience", label: "Total experience", type: "text", placeholder: "e.g. 2 years" },
  { name: "cctc", label: "Current CTC", type: "text" },
  { name: "ectc", label: "Expected CTC", type: "text" },
  { name: "noticePeriod", label: "Notice period", type: "text", placeholder: "e.g. 30 days" },
];

const input =
  "w-full rounded-2xl bg-[var(--paper)] px-4 text-[0.95rem] text-[var(--ink)] ring-1 ring-inset ring-[var(--line)] placeholder:text-[var(--muted)]/70 transition-shadow focus:outline-none focus:ring-2 focus:ring-[var(--link)]";

const isPdf = (file: File) => file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormDataType>(EMPTY);
  const [resume, setResume] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const pickResume = (file?: File) => {
    if (!file) return;
    if (!isPdf(file)) {
      setError("Please upload your resume as a PDF.");
      return;
    }
    setError("");
    setResume(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!resume) {
      setError("Please upload your resume (PDF).");
      return;
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    data.append("resume", resume);

    try {
      setLoading(true);
      setError("");
      await axios.post("https://bigwigdigitalbackend.onrender.com/api/submit-job", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setFormData(EMPTY);
      setResume(null);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("We couldn’t submit your application. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div role="status" className="flex flex-col items-start gap-4 py-6">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--cyan)] text-[var(--ink)]">
          <Check className="h-6 w-6" aria-hidden />
        </span>
        <p className="text-2xl font-semibold tracking-tight">Application received.</p>
        <p className="leading-relaxed text-[var(--muted)]">
          Thanks for applying. Our team will review your profile and get in touch if it’s a match.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className={`mt-2 rounded-sm text-[0.95rem] font-semibold text-[var(--link)] hover:underline cursor-pointer ${focusRing}`}
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        {FIELDS.map((f) => (
          <div key={f.name} className={f.name === "fullName" ? "sm:col-span-2" : ""}>
            <label htmlFor={`apply-${f.name}`} className="mb-1.5 block text-sm font-medium">
              {f.label}
              {f.required && <span className="text-[var(--link)]"> *</span>}
            </label>
            <input
              id={`apply-${f.name}`}
              type={f.type}
              name={f.name}
              autoComplete={f.autoComplete}
              placeholder={f.placeholder}
              value={formData[f.name]}
              onChange={handleChange}
              required={f.required}
              className={`h-12 ${input}`}
            />
          </div>
        ))}

        <div className="sm:col-span-2">
          <label htmlFor="apply-coverLetter" className="mb-1.5 block text-sm font-medium">
            A short note <span className="font-normal text-[var(--muted)]">(optional)</span>
          </label>
          <textarea
            id="apply-coverLetter"
            name="coverLetter"
            rows={3}
            value={formData.coverLetter}
            onChange={handleChange}
            placeholder="Tell us why you’d be a great fit…"
            className={`resize-y py-3 ${input}`}
          />
        </div>

        <div className="sm:col-span-2">
          <p className="mb-1.5 text-sm font-medium" id="apply-resume-label">
            Resume <span className="text-[var(--link)]">*</span>
          </p>
          {resume ? (
            <div className="flex items-center gap-3 rounded-2xl bg-[var(--paper)] p-3 pl-4 ring-1 ring-inset ring-[var(--line)]">
              <FileText className="h-5 w-5 shrink-0 text-[var(--link)]" aria-hidden />
              <span className="min-w-0 flex-1 truncate text-[0.95rem] font-medium">{resume.name}</span>
              <button
                type="button"
                onClick={() => setResume(null)}
                aria-label="Remove resume"
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full hover:bg-white cursor-pointer ${focusRing}`}
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>
          ) : (
            <label
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragging(false);
                pickResume(e.dataTransfer.files?.[0]);
              }}
              className={`flex cursor-pointer flex-col items-center gap-2 rounded-2xl border-2 border-dashed px-4 py-7 text-center transition-colors focus-within:border-[var(--link)] ${
                dragging ? "border-[var(--link)] bg-[var(--cyan)]/30" : "border-[var(--line-strong)] hover:bg-[var(--paper)]"
              }`}
            >
              <Upload className="h-5 w-5 text-[var(--link)]" aria-hidden />
              <span className="text-[0.95rem] font-semibold">Upload your resume (PDF)</span>
              <span className="text-sm text-[var(--muted)]">Click to browse or drag and drop</span>
              <input
                type="file"
                accept="application/pdf,.pdf"
                aria-labelledby="apply-resume-label"
                className="sr-only"
                onChange={(e) => {
                  pickResume(e.target.files?.[0]);
                  e.target.value = "";
                }}
              />
            </label>
          )}
        </div>
      </div>

      {error && (
        <p role="alert" className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className={`group inline-flex h-12 w-full items-center justify-between gap-3 rounded-full bg-[var(--ink)] pl-6 pr-1.5 text-[0.95rem] font-semibold text-white transition-colors duration-300 hover:bg-[var(--ink-2)] cursor-pointer disabled:cursor-wait disabled:opacity-70 ${focusRing}`}
      >
        {loading ? "Submitting…" : "Submit application"}
        <span
          aria-hidden
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--cyan)] text-[var(--ink)] transition-transform duration-300 group-hover:rotate-45"
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </button>
    </form>
  );
}
