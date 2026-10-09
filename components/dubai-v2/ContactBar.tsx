"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE_OUT, PillLink, WhatsAppPill } from "../ui";
import { DUBAI_WHATSAPP_HREF } from "../dubai/DubaiHero";

/**
 * Desktop floating bar: WhatsApp and a jump to the contact form. Phones already get the site-wide dock with
 * WhatsApp and a quote button, so this stays lg-only. It stays out of the way while either enquiry form is on
 * screen: the hero (#hero) and the closing section (#contact).
 */
export default function ContactBar() {
  const [hidden, setHidden] = useState({ hero: true, contact: false });
  const reduce = useReducedMotion();

  useEffect(() => {
    const watch = (id: string, key: "hero" | "contact", threshold: number) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(([e]) => setHidden((h) => ({ ...h, [key]: e.isIntersecting })), {
        threshold,
      });
      io.observe(el);
      return io;
    };
    const observers = [watch("hero", "hero", 0), watch("contact", "contact", 0.15)];
    return () => observers.forEach((io) => io?.disconnect());
  }, []);

  return (
    <AnimatePresence>
      {!hidden.hero && !hidden.contact && (
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, transition: { duration: 0.18, ease: EASE_OUT } }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
          className="fixed bottom-6 left-1/2 z-40 hidden -translate-x-1/2 lg:block"
        >
          <div className="flex items-center gap-2 rounded-full bg-[var(--night)]/85 p-1.5 pl-6 text-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/15 backdrop-blur-xl">
            <p className="mr-3 whitespace-nowrap text-sm text-white/80">Talk to our Dubai team</p>
            <WhatsAppPill href={DUBAI_WHATSAPP_HREF} dark>
              WhatsApp
            </WhatsAppPill>
            <PillLink href="#contact" tone="cyan">
              Get in touch
            </PillLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
