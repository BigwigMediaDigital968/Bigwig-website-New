// Pushes lead events to the GTM dataLayer (GTM is loaded in app/layout.tsx).
// lead_cta_click: a CTA opened the lead form. lead_submitted: a lead was saved.
// lead_source says which CTA or form it came from, e.g. "hero", "footer".

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export const trackLeadEvent = (
  event: "lead_cta_click" | "lead_submitted",
  source: string,
) => {
  try {
    window.dataLayer?.push({ event, lead_source: source });
  } catch {
    // analytics must never break a form
  }
};
