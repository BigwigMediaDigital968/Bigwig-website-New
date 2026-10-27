"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "harsh@gmail.com" && password === "Harsh@0502") {
      sessionStorage.setItem("login", "true");
      await Swal.fire("Success", "Welcome, Admin!", "success");
      router.push("/admin");
    } else {
      Swal.fire("Error", "Incorrect email or password!", "error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-[var(--line-strong)] bg-white px-4 py-3 text-base text-[var(--ink)] placeholder:text-[var(--muted)]/60 transition-[border-color,box-shadow] duration-200 focus:border-[var(--link)] focus:outline-none focus:ring-4 focus:ring-[var(--teal)]/25";

  return (
    <div className="grid min-h-screen bg-[var(--paper)] lg:grid-cols-2">
      {/* Brand panel */}
      <aside className="relative hidden flex-col justify-between overflow-hidden bg-[var(--night)] p-12 text-white lg:flex">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--teal)]/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-[var(--link)]/30 blur-3xl"
        />
        <div className="relative flex items-center gap-3">
          <Image src="/Bigwig_logo_icon.png" alt="" width={791} height={909} className="h-14 w-auto" priority />
          <Image src="/Bigwig_brandname.png" alt="BigWig Media Digital" width={791} height={909} className="h-10 w-auto" priority />
        </div>
        <div className="relative max-w-md">
          <h1 className="text-4xl font-semibold leading-tight">
            Run the site from one place.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Manage blogs, jobs, applications, leads and offers from the admin
            panel.
          </p>
        </div>
        <p className="relative text-sm text-white/50">
          © {new Date().getFullYear()} BigWig Media Digital
        </p>
      </aside>

      {/* Form */}
      <main className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          <Image
            src="/Bigwig_logo.png"
            alt="BigWig Media Digital"
            width={791}
            height={909}
            className="mb-6 h-12 w-auto lg:hidden"
            priority
          />
          <h2 className="text-3xl font-semibold text-[var(--ink)]">
            Admin login
          </h2>
          <p className="mt-2 text-[var(--muted)]">
            Sign in to continue to the dashboard.
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-[var(--ink-2)]"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                autoComplete="username"
                className={inputClass}
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-[var(--ink-2)]"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  className={`${inputClass} pr-12`}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg text-[var(--muted)] transition-colors hover:text-[var(--link)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--teal)]/25"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[var(--ink)] py-3 text-base font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-[var(--ink-2)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--teal)]/40"
            >
              Log in
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
