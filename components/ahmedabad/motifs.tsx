/** A small kite-diamond (a nod to Uttarayan), for list markers. */
export function KiteMark({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`inline-block h-2 w-2 flex-none rotate-45 rounded-[1px] bg-[var(--teal)] ${className}`} />;
}
