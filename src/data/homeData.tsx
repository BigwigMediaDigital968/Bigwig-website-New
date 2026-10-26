// Shared homepage data: client logos, services, and the growth-process steps.
import { AboutClientList, type Client, clients } from "./clients";

// Client logos shown in the Clients marquee and the About/Stats section
/**
 * Clients on the home page, from the shared list in data/clients. Ordered white, navy, white / navy, white, navy
 * so the 3-column grid reads as a chessboard (each logo sits on the colour it reads on).
 */
export const clientLogos = AboutClientList;

export const services = [
  {
    title: "Website Designing & Development",
    slug: "/services/website-development-company-in-delhi",
    desc: (
      <>
        As a trusted{" "}
        <span className="text-[var(--color3)] font-medium underline decoration-[var(--color4)]/60 underline-offset-4">
          website development company in Delhi,
        </span>{" "}
        we build fast, responsive, and conversion-focused websites that support
        your digital marketing goals.
      </>
    ),
  },
  {
    title: "Search Engine Optimization (SEO)",
    slug: "/services/search-engine-optimization",
    desc: (
      <>
        Our expert{" "}
        <span className="text-[var(--color3)] font-medium underline decoration-[var(--color4)]/60 underline-offset-4">
          SEO company in Delhi
        </span>{" "}
        improves your search rankings, organic traffic, and local visibility
        through technical SEO, keyword strategy, on-page optimization, and
        authority building.
      </>
    ),
  },
  {
    title: "Social Media Management",
    slug: "/services/social-media-optimization",
    desc: "Optimize your social profiles to improve discoverability, engagement, and brand consistency across platforms.",
  },
  // {
  //   title: "Social Media Management (SMM)",
  //   slug: "/services/social-media-marketing",
  //   desc: (
  //     <>
  //       We are a creative{" "}
  //       <span className="text-[var(--color3)] font-medium underline decoration-[var(--color4)]/60 underline-offset-4">
  //         social media marketing agency in Delhi
  //       </span>{" "}
  //       helping brands grow across Instagram, Facebook, LinkedIn, and YouTube
  //       using strategic content and targeted advertising.
  //     </>
  //   ),
  // },
  {
    title: "Performance Marketing",
    slug: "/services/performance-marketing",
    desc: (
      <>
        As a results-driven{" "}
        <span className="text-[var(--color3)] font-medium underline decoration-[var(--color4)]/60 underline-offset-4">
          performance marketing agency in Delhi
        </span>{" "}
        we run optimized Google Ads and Meta Ads campaigns to generate
        high-quality leads, improve conversions, and scale revenue.
      </>
    ),
  },
  {
    title: "Online Reputation Management (ORM)",
    slug: "/services/online-reputation-management",
    desc: (
      <>
        Protect and enhance your brand image with professional{" "}
        <span className="text-[var(--color3)] font-medium underline decoration-[var(--color4)]/60 underline-offset-4">
          online reputation management services
        </span>{" "}
        including review monitoring and reputation strategy.
      </>
    ),
  },
  {
    title: "Influencer Marketing",
    slug: "/services/influencer-marketing",
    desc: "Strategic influencer collaborations that expand brand reach and build credibility within your target audience.",
  },
  {
    title: "Email Marketing",
    slug: "/services/email-marketing",
    desc: "Personalized and automated email marketing campaigns designed to nurture leads, improve retention, and increase customer lifetime value.",
  },
  {
    title: "Graphic Designing & Video Editing",
    slug: "/services/graphic-designing",
    desc: "Creative visuals and high-converting videos developed to strengthen your brand identity and campaign performance.",
  },
  {
    title: "Affiliate Marketing",
    slug: "/services/affiliate-marketing",
    desc: "Scale revenue through a structured, performance-based affiliate marketing network that drives consistent sales growth.",
  },
  {
    title: "Content Marketing",
    slug: "/services/content-marketing",
    desc: "We create SEO-optimized blogs, landing pages, and brand storytelling content that strengthens authority and supports long-term digital growth.",
  },


];

export type Service = (typeof services)[number];

export type StepItem = {
  num: string;
  title: string;
  desc: string;
};

export const processSteps: StepItem[] = [
  {
    num: "01",
    title: "Brand Awareness",
    desc: "Let’s spread the word!",
  },
  {
    num: "02",
    title: "Traffic & Engagement",
    desc: "Make your audience fall in love with your product",
  },
  {
    num: "03",
    title: "Advertise & Retarget",
    desc: "Chase your customers across the internet",
  },
  {
    num: "04",
    title: "Retention",
    desc: "Keep making your customers come back to you",
  },
  {
    num: "05",
    title: "Consistent Business Growth",
    desc: "Get busy collecting revenue 365 days",
  },
];

// Homepage FAQs: rendered by Faq.tsx and emitted as FAQPage JSON-LD by page.tsx
export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "How to choose a digital marketing agency for small businesses?",
    answer:
      "To choose the right digital marketing agency in Delhi, look for a proven portfolio, transparent pricing, and a clear ROI-driven marketing strategy. The agency should have experience in small business digital marketing and expertise in SEO, PPC, social media marketing, and website development. Bigwig Media Digital, a trusted digital marketing agency in Delhi, provides customized marketing plans tailored to small-business budgets and growth goals.",
  },
  {
    question:
      "How does digital marketing help businesses promote their services and products?",
    answer:
      "A professional digital marketing agency in Delhi helps businesses increase brand visibility through SEO, generate traffic and leads through Google Ads and Meta Ads, improve engagement via social media marketing, and boost conversions using landing pages and email marketing. Strategic online marketing services ensure your products and services reach the right audience at the right time.",
  },
  {
    question:
      " What are the benefits of hiring a digital marketing company in India?",
    answer:
      "Hiring a digital marketing company in India offers cost-effective marketing solutions, access to skilled SEO experts and PPC specialists, and better ROI through scalable packages. Agencies like Bigwig Media Digital provide professional SEO services, Google Ads management, and social media marketing at competitive pricing with dedicated support.",
  },
  {
    question:
      "What are the best and result-oriented digital marketing activities?",
    answer:
      "The most result-driven digital marketing services include Search Engine Optimization (SEO), Google Ads (PPC), social media marketing, content marketing, website design with conversion rate optimization, email marketing automation, and online reputation management. These activities improve rankings, traffic, brand authority, and overall conversions.",
  },
  {
    question: "What is the process for starting a project with your agency?",
    answer:
      "As a structured digital marketing agency in Delhi, our process includes an initial consultation, competitor analysis, strategic planning, customized marketing plan development, campaign execution across SEO and performance marketing, and regular reporting with optimization. We ensure transparency and consistent performance improvement.",
  },
  {
    question: "How do you measure the success of your campaigns?",
    answer:
      "As a data-driven performance marketing agency, we measure website traffic, keyword rankings, leads and conversions, CTR, CPC, CPA, ROI, and social media engagement. Using tools like Google Analytics, Search Console, SEMrush, and Meta Insights, we provide detailed reports and actionable insights.",
  },
  {
    question: "Why should I hire you for digital marketing?",
    answer:
      "Bigwig Media Digital is a trusted digital marketing agency in Delhi offering customized and affordable digital marketing solutions. Our experienced team specializes in SEO, PPC, social media marketing, and content strategy. We focus on transparency, data-driven execution, and long-term ROI-driven growth.",
  },
  {
    question: "Why are digital marketing agencies important?",
    answer:
      "A professional digital marketing agency in Delhi provides expertise in modern marketing strategies, access to advanced analytics tools, strategic campaign management, and consistent brand growth. Businesses save time and achieve better ROI with expert online marketing support.",
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "SEO services typically take 3–6 months to show strong organic growth, especially in competitive markets like Delhi. Paid ads such as Google Ads can generate results quickly, while social media marketing usually shows measurable growth within 30–60 days with consistent efforts.",
  },
  {
    question: "How can I achieve the best SEO services in a budget?",
    answer:
      "You can achieve affordable SEO services by choosing a reliable SEO company in Delhi like Bigwig Media Digital. Our budget-friendly SEO packages include keyword optimization, technical SEO, local SEO services, and authority building strategies to help you rank higher without overspending.",
  },
  {
    question:
      "How can Bigwig Media Digital help increase your website traffic?",
    answer:
      "As a performance-driven digital marketing agency in Delhi, Bigwig Media Digital increases website traffic through strategic SEO, content marketing, paid advertising campaigns, social media promotion, Google Business Profile optimization, and technical website improvements. Our data-backed approach ensures steady organic growth and qualified leads.",
  },
];

// Client reviews: rendered by the testimonials carousel
export interface Testimonial {
  name: string;
  review: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Chetan Pandey",
    review:
      "We have been working with Bigwig Media Digital for nearly a year, and their SEO + PPC strategy is delivering consistent growth. Their performance marketing approach truly sets them apart as a reliable digital marketing agency in Delhi.",
    rating: 5,
    image: "",
  },
  {
    name: "Aparajita Pandey",
    review:
      "What impressed me most was their in-depth competitor research before creating a strategy. Their local SEO services helped our restaurant rank higher on Google. If you’re looking for an experienced SEO company in Delhi, they’re highly recommended.",
    rating: 5,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjV9LGaNpHLRB9zgIuu3-FQAitUeRxKhF-XS986Ll8-SphirLA7CrA=w90-h90-p-rp-mo-br100",
  },
  {
    name: "Eshaan Aggarwal",
    review:
      "They didn’t offer a generic plan. The strategy was completely customized for my startup’s growth goals. It’s rare to find the best digital marketing agency in Delhi that focuses this deeply on performance and scalability.",
    rating: 5,
    image: "",
  },
  {
    name: "Amit Paal Siingh",
    review:
      "As a business owner based in Australia, I was initially hesitant to work with an overseas agency. But Bigwig Media Digital exceeded expectations with professional communication, affordable pricing, and outstanding digital marketing results.",
    rating: 5,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVxYdkNjf2_Uda0TFgK4Mt9fA3uftsVT9eAb6YTljLckk_immAXJw=w90-h90-p-rp-mo-ba2-br100",
  },
  {
    name: "Piyush Paswan",
    review:
      "I was struggling with content marketing for my online business. Their team built and executed a strong content strategy that increased engagement by 60%. A dependable digital marketing agency in Delhi for real growth.",
    rating: 5,
    image: "",
  },
  {
    name: "Chanchal Sikha",
    review:
      "I own a fashion label and needed help with Instagram growth. Their social media marketing team created a reel strategy that went viral twice in one month. Truly a results-driven social media marketing agency in Delhi.",
    rating: 5,
    image: "",
  },
  {
    name: "Manjot Singh",
    review:
      "Creative, professional, and performance-focused. We hired them as our performance marketing agency and generated more leads in one month than we had in three months with our previous agency.",
    rating: 5,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjWocBrIQukTEUH6FyQY-OHikb2HnSX5lb2cg68rB_OW1zUapt_IXw=w90-h90-p-rp-mo-br100",
  },
  {
    name: "Kashvi Chhabra",
    review:
      "They redesigned our outdated website and significantly improved page speed and SEO structure. If you're searching for a website development company in Delhi that understands both design and search engine optimization, Bigwig is a great choice.",
    rating: 5,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVZZS5xpnWcD6qeivGWgPcOxB9vmVoBiGuvRREcL8JdNDsNZNG1AQ=w90-h90-p-rp-mo-br100",
  },
];

// Case studies: rendered by the case study cards
export const cases = [
  {
    image:
      "/home/ecom-growth.png",
    title: "Driving 75% Growth in E-commerce",
    description:
      "We implemented a comprehensive SEO and performance marketing strategy for an e-commerce brand, boosting conversions by 75% and significantly increasing revenue.",
    tags: ["SEO", "Performance Marketing", "E-commerce"],
  },
  {
    image:
      "/home/social-growth.png",
    title: "Social Media Engagement Growth",
    description:
      "For a fashion brand, we leveraged influencer marketing and compelling content to increase social media engagement and drive brand awareness from scratch.",
    tags: ["Social Media Management", "Influencer Marketing"],
  },
  {
    image:
      "/home/lead-growth.png",
    title: "Scaling Lead Generation by 60%",
    description:
      "We boosted lead generation by 60% for a SaaS company by optimizing their website for SEO, running targeted ads, and delivering personalized content marketing strategies.",
    tags: ["SEO", "Lead Generation", "Content Marketing"],
  },
];
