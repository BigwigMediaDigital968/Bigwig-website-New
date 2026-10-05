// Blog categories, shared by the blog listing (client) and category page metadata (server).

export const blogCategories = [
  "Search Engine Optimization",
  "Social Media Marketing",
  "Performance Marketing",
  "Content Marketing",
  "Website Designing & Development",
  "Email Marketing",
  "Social Media Optimization",
  "Graphic Designing",
  "AI and CGI Marketing",
  "Landing Page Optimization",
  "Affiliate Marketing",
  "Video Shoot",
  "Public Relations",
  "Influencer Marketing",
  "Online Reputation Management",
  "Digital Marketing",
];

// Same slug format the category URLs have always used
export const categorySlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");
