// Dubai photography for the Dubai page. Unsplash (images.unsplash.com is allowed in next.config).

export const dubaiPhotos = {
  /** Downtown skyline and Burj Khalifa at dusk, Sheikh Zayed Road interchange in front */
  heroSkyline: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=80",
  /** client meeting over campaign charts in a glass-walled high-rise office */
  clientMeeting: "https://images.unsplash.com/photo-1758691737568-a1572060ce5a?auto=format&fit=crop&w=1400&q=80",
  /** Dubai Marina towers lit up at night over the water */
  marinaNight: "https://images.unsplash.com/photo-1642184453004-86fd10fbcfef?auto=format&fit=crop&w=2400&q=80",
};

/** Row background per service (shown on hover), keyed by the service page link in dubaiData. */
export const servicePreviews: Record<string, { src: string; alt: string }> = {
  "/digital-marketing-agency-dubai-uae/seo-services-in-dubai-uae": {
    src: "https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&fit=crop&w=1600&q=80",
    alt: "Museum of the Future on Sheikh Zayed Road",
  },
  "/digital-marketing-agency-dubai-uae/social-media-marketing-services-in-dubai-uae": {
    src: "https://images.unsplash.com/photo-1528702748617-c64d49f918af?auto=format&fit=crop&w=1600&q=80",
    alt: "Camels on JBR beach in front of the Dubai Marina towers",
  },
  "/digital-marketing-agency-dubai-uae/ppc-services-in-dubai-uae": {
    src: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=1600&q=80",
    alt: "Light trails on Sheikh Zayed Road at twilight",
  },
  "/digital-marketing-agency-dubai-uae/content-marketing-services-in-dubai-uae": {
    src: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1600&q=80",
    alt: "Burj Khalifa above the Dubai Fountain terraces",
  },
  "/digital-marketing-agency-dubai-uae/website-designing-services-in-dubai-uae": {
    src: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=1600&q=80",
    alt: "Burj Khalifa rising above Downtown Dubai",
  },
  "/digital-marketing-agency-dubai-uae/email-marketing-services-in-dubai-uae": {
    src: "https://images.unsplash.com/photo-1603783032802-460a687c4eef?auto=format&fit=crop&w=1600&q=80",
    alt: "Lit palm trees along a Downtown Dubai promenade at dusk",
  },
  "/digital-marketing-agency-dubai-uae/social-media-optimization-services-in-dubai-uae": {
    src: "https://images.unsplash.com/photo-1642245115909-d0991c4a9a80?auto=format&fit=crop&w=1600&q=80",
    alt: "Dubai Marina promenade at night",
  },
  "/digital-marketing-agency-dubai-uae/graphic-designing-services-in-dubai-uae": {
    src: "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1600&q=80",
    alt: "Burj Al Arab from Jumeirah beach",
  },
  "/digital-marketing-agency-dubai-uae/affiliate-marketing-services-in-dubai-uae": {
    src: "https://images.unsplash.com/photo-1489516408517-0c0a15662682?auto=format&fit=crop&w=1600&q=80",
    alt: "Atlantis resort on the Palm Jumeirah from the air",
  },
  "/digital-marketing-agency-dubai-uae/influencer-marketing-services-in-dubai-uae": {
    src: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=80",
    alt: "Burj Al Arab and the Palm Jumeirah from the air",
  },
  "/digital-marketing-agency-dubai-uae/orm-services-in-dubai-uae": {
    src: "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?auto=format&fit=crop&w=1600&q=80",
    alt: "Burj Khalifa lit up at night, seen from below",
  },
};
