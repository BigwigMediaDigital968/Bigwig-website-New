"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Search } from "lucide-react";
import { focusRing } from "../ui";

export type Country = { iso: string; name: string; dial: string };

export const COUNTRIES: Country[] = [
  { iso: "in", name: "India", dial: "+91" },
  { iso: "ae", name: "UAE", dial: "+971" },
  { iso: "sa", name: "Saudi Arabia", dial: "+966" },
  { iso: "qa", name: "Qatar", dial: "+974" },
  { iso: "om", name: "Oman", dial: "+968" },
  { iso: "bh", name: "Bahrain", dial: "+973" },
  { iso: "kw", name: "Kuwait", dial: "+965" },
  { iso: "jp", name: "Japan", dial: "+81" },
  { iso: "cn", name: "China", dial: "+86" },
  { iso: "pk", name: "Pakistan", dial: "+92" },
  { iso: "np", name: "Nepal", dial: "+977" },
  { iso: "bd", name: "Bangladesh", dial: "+880" },
  { iso: "lk", name: "Sri Lanka", dial: "+94" },
  { iso: "gb", name: "United Kingdom", dial: "+44" },
  { iso: "de", name: "Germany", dial: "+49" },
  { iso: "fr", name: "France", dial: "+33" },
  { iso: "it", name: "Italy", dial: "+39" },
  { iso: "es", name: "Spain", dial: "+34" },
  { iso: "au", name: "Australia", dial: "+61" },
  { iso: "nz", name: "New Zealand", dial: "+64" },
  { iso: "us", name: "United States", dial: "+1" },
  { iso: "ca", name: "Canada", dial: "+1" },
  { iso: "ye", name: "Yemen", dial: "+967" },
];

export const countryByIso = (iso: string) => COUNTRIES.find((c) => c.iso === iso) ?? COUNTRIES[0];

// Flag images: Windows doesn't render flag emoji, so they'd show as letters.
function Flag({ iso }: { iso: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://flagcdn.com/w40/${iso}.png`}
      alt=""
      width={20}
      height={15}
      loading="lazy"
      className="h-[15px] w-5 shrink-0 rounded-[3px] object-cover ring-1 ring-black/5"
    />
  );
}

/** Country dial-code picker: a button that opens a searchable listbox. */
export default function CountrySelect({
  value,
  onChange,
  className = "",
}: {
  value: string;
  onChange: (iso: string) => void;
  className?: string;
}) {
  const id = useId();
  const listId = `${id}-list`;
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selected = countryByIso(value);
  const q = query.trim().toLowerCase();
  const results = q
    ? COUNTRIES.filter((c) => c.name.toLowerCase().includes(q) || c.dial.includes(q.replace(/^\+?/, "+")))
    : COUNTRIES;

  const openList = () => {
    setQuery("");
    setActive(Math.max(0, COUNTRIES.findIndex((c) => c.iso === value)));
    setOpen(true);
  };

  const close = (refocus = true) => {
    setOpen(false);
    if (refocus) buttonRef.current?.focus();
  };

  const choose = (c: Country) => {
    onChange(c.iso);
    close();
  };

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  // keep the highlighted option in view while arrowing through the list
  useEffect(() => {
    if (open) listRef.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Home") {
      e.preventDefault();
      setActive(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActive(results.length - 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[active]) choose(results[active]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "Tab") {
      close(false);
    }
  };

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Country code: ${selected.name} ${selected.dial}`}
        onClick={() => (open ? close() : openList())}
        onKeyDown={(e) => {
          if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
            e.preventDefault();
            openList();
          }
        }}
        className={`flex h-12 w-full items-center gap-2 rounded-2xl bg-[var(--paper)] pl-4 pr-3 text-[0.95rem] font-medium text-[var(--ink)] ring-1 ring-inset transition-shadow cursor-pointer ${
          open ? "ring-2 ring-[var(--link)]" : "ring-[var(--line)] hover:ring-[var(--line-strong)]"
        } ${focusRing}`}
      >
        <Flag iso={selected.iso} />
        <span className="tabular-nums">{selected.dial}</span>
        <ChevronDown
          aria-hidden
          className={`ml-auto h-4 w-4 text-[var(--muted)] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98, transition: { duration: 0.12 } }}
            transition={{ duration: 0.18 }}
            style={{ transformOrigin: "top left" }}
            className="absolute left-0 top-full z-30 mt-2 w-[min(18rem,calc(100vw-4rem))] overflow-hidden rounded-[20px] bg-[var(--surface)] shadow-[0_24px_60px_-20px_rgba(1,28,64,0.35)] ring-1 ring-[var(--line)]"
          >
            <div className="relative border-b border-[var(--line)] p-2">
              <Search
                aria-hidden
                className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]"
              />
              <input
                ref={inputRef}
                type="text"
                role="combobox"
                aria-expanded="true"
                aria-controls={listId}
                aria-activedescendant={results[active] ? `${id}-${results[active].iso}` : undefined}
                aria-label="Search countries"
                placeholder="Search country or code"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={onKeyDown}
                className="h-10 w-full rounded-xl bg-[var(--paper)] pl-9 pr-3 text-sm text-[var(--ink)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--link)]"
              />
            </div>

            <ul ref={listRef} id={listId} role="listbox" aria-label="Countries" className="max-h-64 overflow-y-auto p-1.5">
              {results.length === 0 && <li className="px-3 py-4 text-center text-sm text-[var(--muted)]">No matches</li>}
              {results.map((c, i) => {
                const isSelected = c.iso === value;
                return (
                  <li
                    key={c.iso}
                    id={`${id}-${c.iso}`}
                    data-index={i}
                    role="option"
                    aria-selected={isSelected}
                    onMouseEnter={() => setActive(i)}
                    onMouseDown={(e) => e.preventDefault()} // keep focus in the search box
                    onClick={() => choose(c)}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-[0.95rem] ${
                      i === active ? "bg-[var(--paper)]" : ""
                    } ${isSelected ? "font-semibold" : ""}`}
                  >
                    <Flag iso={c.iso} />
                    <span className="min-w-0 flex-1 truncate">{c.name}</span>
                    <span className="tabular-nums text-[var(--muted)]">{c.dial}</span>
                    <Check
                      aria-hidden
                      className={`h-4 w-4 shrink-0 text-[var(--link)] ${isSelected ? "opacity-100" : "opacity-0"}`}
                    />
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
