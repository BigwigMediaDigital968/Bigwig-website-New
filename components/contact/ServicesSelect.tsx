"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, X } from "lucide-react";
import { focusRing } from "../ui";

/** Multi-select dropdown: a button summarising the picks, opening a checkable list. */
export default function ServicesSelect({
  id,
  options,
  value,
  onChange,
  placeholder = "Choose services",
}: {
  id: string;
  options: string[];
  value: string[];
  onChange: (next: string[]) => void;
  placeholder?: string;
}) {
  const listId = `${useId()}-list`;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const toggle = (s: string) => onChange(value.includes(s) ? value.filter((x) => x !== s) : [...value, s]);

  const close = (refocus = true) => {
    setOpen(false);
    if (refocus) buttonRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    listRef.current?.focus();
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  useEffect(() => {
    if (open) listRef.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, options.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Home") {
      e.preventDefault();
      setActive(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActive(options.length - 1);
    } else if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggle(options[active]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "Tab") {
      close(false);
    }
  };

  const summary =
    value.length === 0
      ? null
      : value.length <= 2
        ? value.join(", ")
        : `${value.slice(0, 2).join(", ")} +${value.length - 2}`;

  return (
    <div ref={rootRef} className="relative">
      <div className="relative">
        <button
          ref={buttonRef}
          id={id}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          onClick={() => (open ? close() : setOpen(true))}
          onKeyDown={(e) => {
            if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
              e.preventDefault();
              setOpen(true);
            }
          }}
          className={`flex h-12 w-full items-center gap-2 rounded-2xl bg-[var(--paper)] pl-4 text-left text-[0.95rem] ring-1 ring-inset transition-shadow cursor-pointer ${
            value.length ? "pr-20" : "pr-10"
          } ${open ? "ring-2 ring-[var(--link)]" : "ring-[var(--line)] hover:ring-[var(--line-strong)]"} ${focusRing}`}
        >
          <span className={`min-w-0 flex-1 truncate ${summary ? "text-[var(--ink)]" : "text-[var(--muted)]/70"}`}>
            {summary ?? placeholder}
          </span>
          <span className="sr-only">{value.length ? `, ${value.length} selected` : ""}</span>
        </button>
        {value.length > 0 && (
          <button
            type="button"
            onClick={() => onChange([])}
            aria-label="Clear selected services"
            className={`absolute right-9 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-[var(--muted)] hover:bg-white hover:text-[var(--ink)] cursor-pointer ${focusRing}`}
          >
            <X className="h-3.5 w-3.5" aria-hidden />
          </button>
        )}
        <ChevronDown
          aria-hidden
          className={`pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98, transition: { duration: 0.12 } }}
            transition={{ duration: 0.18 }}
            style={{ transformOrigin: "top" }}
            className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-[20px] bg-[var(--surface)] shadow-[0_24px_60px_-20px_rgba(1,28,64,0.35)] ring-1 ring-[var(--line)]"
          >
            <ul
              ref={listRef}
              id={listId}
              role="listbox"
              aria-multiselectable="true"
              aria-label="Services"
              tabIndex={-1}
              aria-activedescendant={`${listId}-${active}`}
              onKeyDown={onListKey}
              className="max-h-64 overflow-y-auto p-1.5 focus:outline-none"
            >
              {options.map((s, i) => {
                const on = value.includes(s);
                return (
                  <li
                    key={s}
                    id={`${listId}-${i}`}
                    data-index={i}
                    role="option"
                    aria-selected={on}
                    onMouseEnter={() => setActive(i)}
                    onMouseDown={(e) => e.preventDefault()} // keep focus on the list
                    onClick={() => toggle(s)}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-[0.95rem] ${
                      i === active ? "bg-[var(--paper)]" : ""
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md transition-colors ${
                        on ? "bg-[var(--ink)] text-[var(--cyan)]" : "ring-1 ring-inset ring-[var(--line-strong)]"
                      }`}
                    >
                      {on && <Check className="h-3.5 w-3.5" />}
                    </span>
                    <span className={on ? "font-semibold" : ""}>{s}</span>
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center justify-between border-t border-[var(--line)] px-4 py-2.5 text-sm">
              <span className="text-[var(--muted)]">{value.length ? `${value.length} selected` : "Pick any"}</span>
              <button
                type="button"
                onClick={() => close()}
                className={`rounded-full bg-[var(--ink)] px-4 py-1.5 font-semibold text-white hover:bg-[var(--ink-2)] cursor-pointer ${focusRing}`}
              >
                Done
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
