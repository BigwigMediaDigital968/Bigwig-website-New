import Image, { type StaticImageData } from "next/image";
import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Search,
  Send,
  Star,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

/**
 * Small illustrations of the work itself: a browser, a phone ad, a search result, a lead alert, reviews,
 * an inbox. Every size is in `em`, so a mock scales with the font size of whatever wraps it (the hero stage
 * sets it from its container width). They are pictures, so each one is aria-hidden; the section around them
 * describes what they show.
 */

const card =
  "rounded-[1em] bg-[var(--surface)] shadow-[0_1.5em_3em_-1.2em_rgba(1,28,64,0.35)] ring-1 ring-[var(--line)]";

export function BrowserFrame({
  url,
  src,
  width,
  height,
  scrollTo,
  hoverScroll = false,
  sizes,
  className = "",
}: {
  url: string;
  src: StaticImageData | string;
  width?: number;
  height?: number;
  /** auto-scroll the screenshot this far (e.g. "-60%"); omit for a still frame */
  scrollTo?: string;
  /** scroll the screenshot while the parent `.group` is hovered (mouse only) */
  hoverScroll?: boolean;
  sizes: string;
  className?: string;
}) {
  return (
    <div aria-hidden className={`overflow-hidden ${card} ${className}`}>
      <div className="flex items-center gap-[0.5em] border-b border-[var(--line)] bg-[var(--paper)] px-[0.9em] py-[0.6em]">
        <span className="flex gap-[0.35em]">
          <span className="h-[0.6em] w-[0.6em] rounded-full bg-[#ff5f57]" />
          <span className="h-[0.6em] w-[0.6em] rounded-full bg-[#febc2e]" />
          <span className="h-[0.6em] w-[0.6em] rounded-full bg-[#28c840]" />
        </span>
        <span className="mx-auto truncate rounded-full bg-[var(--surface)] px-[1em] py-[0.2em] text-[0.7em] text-[var(--muted)] ring-1 ring-[var(--line)]">
          {url}
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--paper)]">
        <Image
          src={src}
          alt=""
          width={width}
          height={height}
          sizes={sizes}
          style={
            scrollTo
              ? ({ "--scroll-to": scrollTo } as React.CSSProperties)
              : undefined
          }
          className={`block w-full ${scrollTo || hoverScroll ? "h-auto" : "h-full object-cover object-left-top"} ${scrollTo ? "site-scroll" : ""} ${
            hoverScroll
              ? "transition-transform duration-[6000ms] ease-[var(--ease-in-out)] motion-reduce:transition-none [@media(hover:hover)_and_(pointer:fine)]:group-hover:-translate-y-[70%]"
              : ""
          }`}
        />
      </div>
    </div>
  );
}

export function PhoneAd({
  img,
  brand,
  caption,
  cta,
  className = "",
}: {
  img: StaticImageData | string;
  brand: string;
  caption: string;
  cta: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`rounded-[2.2em] bg-[var(--ink)] p-[0.45em] shadow-[0_2em_4em_-1.5em_rgba(1,28,64,0.55)] ${className}`}
    >
      <div className="relative overflow-hidden rounded-[1.8em] bg-[var(--surface)]">
        <div className="absolute left-1/2 top-[0.5em] z-10 h-[1.1em] w-[32%] -translate-x-1/2 rounded-full bg-[var(--ink)]" />
        <div className="flex items-center gap-[0.5em] px-[0.8em] pb-[0.5em] pt-[2.2em]">
          <span className="flex h-[1.9em] w-[1.9em] items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--teal),var(--ink))] text-[0.75em] font-bold text-white">
            {brand.charAt(0)}
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-[0.72em] font-semibold">
              {brand}
            </span>
            <span className="block text-[0.62em] text-[var(--muted)]">
              Sponsored
            </span>
          </span>
          <MoreHorizontal className="ml-auto h-[1em] w-[1em] text-[var(--muted)]" />
        </div>
        <div className="relative aspect-square">
          <Image src={img} alt="" fill sizes="240px" className="object-cover" />
        </div>
        <div className="flex items-center justify-between bg-[var(--cyan)]/60 px-[0.8em] py-[0.55em] text-[0.7em] font-semibold">
          {cta}
          <span>›</span>
        </div>
        <div className="flex items-center gap-[0.7em] px-[0.8em] pt-[0.6em]">
          <Heart className="h-[1.05em] w-[1.05em] fill-[#ff3040] text-[#ff3040]" />
          <MessageCircle className="h-[1.05em] w-[1.05em]" />
          <Send className="h-[1.05em] w-[1.05em]" />
          <Bookmark className="ml-auto h-[1.05em] w-[1.05em]" />
        </div>
        <p className="px-[0.8em] pb-[1.1em] pt-[0.45em] text-[0.66em] leading-snug">
          <span className="font-semibold">{brand}</span> {caption}
        </p>
      </div>
    </div>
  );
}

export function SearchCard({
  query,
  title,
  url,
  desc,
  className = "",
}: {
  query: string;
  title: string;
  url: string;
  desc: string;
  className?: string;
}) {
  return (
    <div aria-hidden className={`p-[1em] ${card} ${className}`}>
      <div className="flex items-center gap-[0.6em] rounded-full px-[0.9em] py-[0.55em] ring-1 ring-[var(--line-strong)]">
        <Search className="h-[0.95em] w-[0.95em] text-[var(--muted)]" />
        <span className="truncate text-[0.78em]">{query}</span>
      </div>
      <div className="mt-[0.9em]">
        <p className="text-[0.66em] font-semibold">Sponsored</p>
        <p className="mt-[0.15em] truncate text-[0.66em] text-[var(--muted)]">
          {url}
        </p>
        <p className="mt-[0.2em] text-[0.92em] font-medium leading-snug text-[#1a0dab]">
          {title}
        </p>
        <p className="mt-[0.25em] line-clamp-2 text-[0.7em] leading-snug text-[var(--muted)]">
          {desc}
        </p>
      </div>
    </div>
  );
}

export function LeadToast({
  title,
  body,
  className = "",
}: {
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`flex items-start gap-[0.7em] p-[0.85em] ${card} ${className}`}
    >
      <span className="flex h-[2.2em] w-[2.2em] flex-none items-center justify-center rounded-[0.7em] bg-[#25D366] text-[var(--ink)]">
        <FontAwesomeIcon icon={faWhatsapp} className="text-[1.2em]" />
      </span>
      <span className="min-w-0 leading-tight">
        <span className="flex items-baseline justify-between gap-[0.5em]">
          <span className="truncate text-[0.78em] font-semibold">{title}</span>
          <span className="text-[0.62em] text-[var(--muted)]">now</span>
        </span>
        <span className="mt-[0.25em] block text-[0.7em] leading-snug text-[var(--muted)]">
          {body}
        </span>
      </span>
    </div>
  );
}

export function ReviewMock({
  name,
  text,
  className = "",
}: {
  name: string;
  text: string;
  className?: string;
}) {
  return (
    <div aria-hidden className={`p-[1em] ${card} ${className}`}>
      <div className="flex items-center gap-[0.6em]">
        <span className="flex h-[2em] w-[2em] items-center justify-center rounded-full bg-[var(--cyan)] text-[0.8em] font-bold">
          {name.charAt(0)}
        </span>
        <span>
          <span className="block text-[0.78em] font-semibold leading-tight">
            {name}
          </span>
          <span className="flex text-[#fbbc04]">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="h-[0.8em] w-[0.8em] fill-current" />
            ))}
          </span>
        </span>
      </div>
      <p className="mt-[0.6em] line-clamp-3 text-[0.72em] leading-snug text-[var(--muted)]">
        {text}
      </p>
    </div>
  );
}

export function InboxMock({
  rows,
  className = "",
}: {
  rows: { from: string; subject: string }[];
  className?: string;
}) {
  return (
    <div aria-hidden className={`overflow-hidden ${card} ${className}`}>
      {rows.map((r, i) => (
        <div
          key={r.subject}
          className={`flex items-center gap-[0.7em] px-[1em] py-[0.7em] ${i ? "border-t border-[var(--line)]" : ""}`}
        >
          <span
            className={`h-[0.5em] w-[0.5em] flex-none rounded-full ${i === 0 ? "bg-[var(--teal)]" : "bg-transparent"}`}
          />
          <span className="min-w-0 leading-tight">
            <span
              className={`block truncate text-[0.72em] ${i === 0 ? "font-semibold" : ""}`}
            >
              {r.from}
            </span>
            <span className="block truncate text-[0.68em] text-[var(--muted)]">
              {r.subject}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

/** Rising bars, standing in for a campaign dashboard. Decorative: no values, no axes. */
export function TrendMock({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  const bars = [28, 36, 33, 48, 46, 62, 70, 84];
  return (
    <div aria-hidden className={`p-[1em] ${card} ${className}`}>
      <p className="text-[0.72em] font-semibold">{label}</p>
      <div className="mt-[0.8em] flex h-[4.5em] items-end gap-[0.35em]">
        {bars.map((h, i) => (
          <span
            key={i}
            style={{ height: `${h}%` }}
            className={`flex-1 rounded-t-[0.25em] ${i === bars.length - 1 ? "bg-[var(--teal)]" : "bg-[var(--cyan)]"}`}
          />
        ))}
      </div>
    </div>
  );
}
