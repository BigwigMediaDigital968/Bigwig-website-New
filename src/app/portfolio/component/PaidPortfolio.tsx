"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Search,
  X,
  Layers,
} from "lucide-react";

export interface CampaignBreakdownItem {
  name: string;
  results: number | null;
  resultType: string;
  reach: number | null;
  frequency: number | null;
  costPerResult: string;
  amountSpent: string;
}

export interface PerformanceMetrics {
  totalCampaigns: number;
  totalSpend: string;
  totalReach: number | null;
  averageFrequency: number | null;
  currency: string;
}

export interface ProjectAnalysis {
  summary: string;
  keyHighlights: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  url: string;
  category: string;
  description: string;
  media: {
    image: string;
  };
  performanceMetrics: PerformanceMetrics;
  campaignBreakdown: CampaignBreakdownItem[];
  analysis: ProjectAnalysis;
}

// Provided dataset
const portfolioData: ProjectData[] = [
  {
    id: "project-01",
    title: "Eldearly Donation Campaign",
    url: "https://giving.classy.org/campaign/605198/donate",
    category: "Non-Profit & Social Impact",
    description:
      "A fundraising campaign hosted on the Classy platform designed to support Eldearly’s mission, allowing supporters to donate securely toward impactful social causes that help underserved communities.",
    media: {
      image: "image_70529f.jpg",
    },
    performanceMetrics: {
      totalCampaigns: 33,
      totalSpend: "$26,069.37",
      totalReach: 1060933,
      averageFrequency: 2.12,
      currency: "USD",
    },
    campaignBreakdown: [
      {
        name: "Eldearly Donation Campaign | 13/11/2025",
        results: 21,
        resultType: "Website purchases",
        reach: 349719,
        frequency: 1.74,
        costPerResult: "$48.17",
        amountSpent: "$3,420.03",
      },
      {
        name: "Eldearly | Lookalike Donation Campaign | 02/12...",
        results: null,
        resultType: "Website purchases",
        reach: 2264,
        frequency: 1.24,
        costPerResult: "$83.20",
        amountSpent: "$83.20",
      },
      {
        name: "Eldearly | Retargeting Donation Campaign | 27/...",
        results: 2,
        resultType: "Website purchases",
        reach: 3325,
        frequency: 1.82,
        costPerResult: "$76.68",
        amountSpent: "$153.35",
      },
      {
        name: "Eldearly Donation Campaign | 08/10/2025",
        results: 2,
        resultType: "Website purchases",
        reach: 31704,
        frequency: 1.26,
        costPerResult: "$403.03",
        amountSpent: "$806.05",
      },
      {
        name: "Charity Gala 2025 | Instant form Lead Campai...",
        results: 172,
        resultType: "Leads (Form)",
        reach: 15472,
        frequency: 1.98,
        costPerResult: "$5.54",
        amountSpent: "$953.58",
      },
      {
        name: "Awareness | 23 Nov",
        results: 51219,
        resultType: "Reach",
        reach: 51219,
        frequency: 1.07,
        costPerResult: "$1.37 per 1,000 reach",
        amountSpent: "$70.34",
      },
    ],
    analysis: {
      summary:
        "High-reach international cause-driven campaign utilizing multi-angle funnels including direct donation, lookalikes, retargeting, and high-volume lead capture.",
      keyHighlights: [
        "Generated 172 leads at an efficient cost per lead of $5.54 for the Charity Gala 2025 campaign.",
        "Over 1.06M unique accounts reached across all 33 campaigns.",
      ],
    },
  },
  {
    id: "project-02",
    title: "Vital Hope Foundation",
    url: "https://vitalhopefoundation.com/",
    category: "Philanthropy & Education",
    description:
      "A philanthropic organisation focused on improving health, education, and welfare outcomes for vulnerable populations.",
    media: {
      image: "image_6fe242.png",
    },
    performanceMetrics: {
      totalCampaigns: 52,
      totalSpend: "₹938,423.10",
      totalReach: 2260933,
      averageFrequency: 3.78,
      currency: "INR",
    },
    campaignBreakdown: [
      {
        name: "New 1% lookalike - Copy",
        results: 47,
        resultType: "Website purchases",
        reach: null,
        frequency: null,
        costPerResult: "₹138.21",
        amountSpent: "₹6,495.92",
      },
      {
        name: "NS Sales - Meena J Yash - Copy 3 Using 3% A..",
        results: 41,
        resultType: "Website purchases",
        reach: null,
        frequency: null,
        costPerResult: "₹251.10",
        amountSpent: "₹10,295.24",
      },
      {
        name: "NS Sales - Kalpana - Copy",
        results: 150,
        resultType: "Website purchases",
        reach: null,
        frequency: null,
        costPerResult: "₹121.58",
        amountSpent: "₹18,237.15",
      },
      {
        name: "Babulal",
        results: 51,
        resultType: "Website purchases",
        reach: null,
        frequency: null,
        costPerResult: "₹267.66",
        amountSpent: "₹13,650.45",
      },
      {
        name: "New 1% lookalike",
        results: 197,
        resultType: "Website purchases",
        reach: null,
        frequency: null,
        costPerResult: "₹198.68",
        amountSpent: "₹39,140.73",
      },
      {
        name: "NS Sales - Meena J Yash - Copy",
        results: 33,
        resultType: "Website purchases",
        reach: null,
        frequency: null,
        costPerResult: "₹507.82",
        amountSpent: "₹16,757.95",
      },
    ],
    analysis: {
      summary:
        "Large-scale donation/sales driving initiative relying on targeted audience segments like 1% lookalikes and personalized creative variations.",
      keyHighlights: [
        "1% Lookalike campaigns drove strong results with costs per purchase as low as ₹138.21.",
        "Scaled sales conversions up to 197 website purchases in a single top-performing audience set.",
      ],
    },
  },
  {
    id: "project-03",
    title: "SHEOWS",
    url: "https://sheows.org/",
    category: "Non-Profit & Elderly Care",
    description:
      "A non-profit organization dedicated to providing free shelter, food, medical care, and dignity to abandoned and destitute elderly individuals through its old age homes in Delhi NCR and Uttar Pradesh.",
    media: {
      image: "image_6fe208.jpg",
    },
    performanceMetrics: {
      totalCampaigns: 51,
      totalSpend: "₹564,870.38",
      totalReach: 18875844,
      averageFrequency: 2.31,
      currency: "INR",
    },
    campaignBreakdown: [
      {
        name: "Sheows India | Advantage+ Donation Campai...",
        results: 1,
        resultType: "Purchase",
        reach: 14611,
        frequency: 1.23,
        costPerResult: "₹1,462.41",
        amountSpent: "₹1,462.41",
      },
      {
        name: "Sheows India | Retargeting Donation Campai...",
        results: 80,
        resultType: "Purchase",
        reach: 96212,
        frequency: 3.05,
        costPerResult: "₹435.70",
        amountSpent: "₹34,855.79",
      },
      {
        name: "Instagram post: Each elder at SHEOWS has a...",
        results: 62,
        resultType: "Instagram profile visits",
        reach: 11483,
        frequency: 1.2,
        costPerResult: "₹7.82",
        amountSpent: "₹484.85",
      },
      {
        name: "Instagram post: The rain brings memories, an...",
        results: 65,
        resultType: "Instagram profile visits",
        reach: 20597,
        frequency: 1.25,
        costPerResult: "₹7.39",
        amountSpent: "₹480.29",
      },
      {
        name: "Instagram post: Not all kindness shines in the...",
        results: 1240,
        resultType: "Instagram profile visits",
        reach: 54783,
        frequency: 1.69,
        costPerResult: "₹2.83",
        amountSpent: "₹3,511.62",
      },
      {
        name: "Instagram post: At SHEOWS, we care for tha...",
        results: 76,
        resultType: "Instagram profile visits",
        reach: 17693,
        frequency: 1.22,
        costPerResult: "₹6.55",
        amountSpent: "₹497.43",
      },
    ],
    analysis: {
      summary:
        "Extensive awareness and retargeting ecosystem achieving over 18.8 Million total reach across Delhi NCR and Uttar Pradesh.",
      keyHighlights: [
        "Retargeting campaigns lowered purchase/donation acquisition costs down to ₹435.70 per transaction.",
        "Social content engagement yielded ultra-low traffic acquisition cost as low as ₹2.83 per Instagram profile visit.",
      ],
    },
  },
  {
    id: "project-04",
    title: "PopupKids",
    url: "https://popupkids.in/",
    category: "E-Commerce & Retail",
    description:
      "A kids-focused ecommerce and lifestyle brand offering products designed for children and parents.",
    media: {
      image: "image_6fdf3f.png",
    },
    performanceMetrics: {
      totalCampaigns: 175,
      totalSpend: "₹325,915.70",
      totalReach: 2361298,
      averageFrequency: 1.41,
      currency: "INR",
    },
    campaignBreakdown: [
      {
        name: "Popup Kids | Sales Campaign | 13/01/2026",
        results: 1,
        resultType: "Website purchase",
        reach: 1526,
        frequency: 1.39,
        costPerResult: "₹1,116.28",
        amountSpent: "₹1,116.28",
      },
      {
        name: "Popup Kids | Colouring Sales Campaign | 30/1...",
        results: 20,
        resultType: "Website purchases",
        reach: 13278,
        frequency: 1.78,
        costPerResult: "₹719.67",
        amountSpent: "₹14,393.43",
      },
      {
        name: "Instagram post: Popup Kids brings little festiv...",
        results: 200,
        resultType: "Instagram profile visits",
        reach: 29502,
        frequency: 1.06,
        costPerResult: "₹1.81",
        amountSpent: "₹361.40",
      },
      {
        name: "Popup Kids | Wooden Toys Sales Campaign | 0...",
        results: 2,
        resultType: "Website purchases",
        reach: 3500,
        frequency: 1.4,
        costPerResult: "₹1,413.77",
        amountSpent: "₹2,827.54",
      },
      {
        name: "Popup Kids | Jersey Sales Campaign | 25/12/2...",
        results: 2,
        resultType: "Website purchases",
        reach: 5507,
        frequency: 1.25,
        costPerResult: "₹892.26",
        amountSpent: "₹1,784.51",
      },
      {
        name: "Popup Kids | Magna Tiles Sales Campaign | 18...",
        results: 3,
        resultType: "Website purchases",
        reach: 5521,
        frequency: 1.56,
        costPerResult: "₹1,507.57",
        amountSpent: "₹4,522.71",
      },
    ],
    analysis: {
      summary:
        "Product-specific e-commerce targeting across various child lifestyle segments (Colouring, Wooden Toys, Jerseys, Magna Tiles).",
      keyHighlights: [
        "Colouring Sales Campaign delivered solid sales scale at ₹719.67 cost per purchase.",
        "Social content campaign acquired top-of-funnel traffic at ₹1.81 per visit.",
      ],
    },
  },
  {
    id: "project-05",
    title: "Creative Packers",
    url: "https://creativepackers.shop/",
    category: "B2B & Packaging Logistics",
    description:
      "Creative Packers offers professional packing and moving solutions, helping individuals and businesses relocate safely with tailored packing services and logistics support.",
    media: {
      image: "image_6fdf18.jpg",
    },
    performanceMetrics: {
      totalCampaigns: 32,
      totalSpend: "₹228,239.37",
      totalReach: 2281515,
      averageFrequency: 2.04,
      currency: "INR",
    },
    campaignBreakdown: [
      {
        name: "Creative Packers | WhatsApp Wholesale Lead Generation Ca...",
        results: 175,
        resultType: "Messaging conversations",
        reach: 68318,
        frequency: 1.1,
        costPerResult: "₹7.21",
        amountSpent: "₹1,262.55",
      },
      {
        name: "Creative Packers | WhatsApp Lead Generation Campaign | 3...",
        results: 4169,
        resultType: "Messaging conversations",
        reach: 418527,
        frequency: 1.51,
        costPerResult: "₹2.01",
        amountSpent: "₹8,379.52",
      },
      {
        name: "Creative Packers | WhatsApp SriLanka Wholesale Lead Gene...",
        results: 70,
        resultType: "Messaging conversations",
        reach: 5325,
        frequency: 1.56,
        costPerResult: "₹7.62",
        amountSpent: "₹533.11",
      },
      {
        name: "Creative Packers | Website Sales Campaign | 06/01/2026",
        results: 12,
        resultType: "Website purchases",
        reach: 40822,
        frequency: 1.61,
        costPerResult: "₹316.19",
        amountSpent: "₹3,794.25",
      },
      {
        name: "Sales",
        results: 23,
        resultType: "Website purchases",
        reach: 37364,
        frequency: 1.86,
        costPerResult: "₹143.57",
        amountSpent: "₹3,302.20",
      },
    ],
    analysis: {
      summary:
        "High-efficiency lead generation combining direct-to-WhatsApp B2B messaging funnels with direct website e-commerce sales.",
      keyHighlights: [
        "Generated over 4,100 direct messaging leads at an ultra-low cost of ₹2.01 per conversation.",
        "Successfully expanded lead funnel internationally (Sri Lanka Wholesale) at ₹7.62 per lead.",
      ],
    },
  },
  {
    id: "project-06",
    title: "Rashi Jain Jyotish",
    url: "https://rashijainjyotish.com/",
    category: "Astrology & Consultations",
    description:
      "Rashi Jain Jyotish delivers astrological guidance and horoscope services, blending traditional Vedic astrology with personalized consultation offerings for life insights.",
    media: {
      image: "image_6fde9f.jpg",
    },
    performanceMetrics: {
      totalCampaigns: 24,
      totalSpend: "₹156,069.65",
      totalReach: 2060933,
      averageFrequency: 2.89,
      currency: "INR",
    },
    campaignBreakdown: [
      {
        name: "Rashi Jain Jyotish | Instant Form Lead Camp...",
        results: null,
        resultType: "Lead (Form)",
        reach: null,
        frequency: null,
        costPerResult: "₹6.94",
        amountSpent: "₹6.94",
      },
      {
        name: "Rashi Jain Jyotish | Lead Campaign | 05/01/2...",
        results: 49,
        resultType: "Messaging conversations",
        reach: null,
        frequency: null,
        costPerResult: "₹18.30",
        amountSpent: "₹896.55",
      },
      {
        name: "Rashi Jain Jyotish | Lead Campaign | 26/12/2...",
        results: 647,
        resultType: "Messaging conversations",
        reach: null,
        frequency: null,
        costPerResult: "₹17.30",
        amountSpent: "₹11,193.56",
      },
      {
        name: "Rashi Jain Jyotish | Instant Form Lead Camp...",
        results: 19,
        resultType: "Leads (Form)",
        reach: null,
        frequency: null,
        costPerResult: "₹34.34",
        amountSpent: "₹652.43",
      },
      {
        name: "Rashi Jain Jyotish | Lead Campaign | 29/11/2...",
        results: 680,
        resultType: "Messaging conversations",
        reach: null,
        frequency: null,
        costPerResult: "₹18.92",
        amountSpent: "₹12,868.59",
      },
    ],
    analysis: {
      summary:
        "Conversion-focused lead generation utilizing WhatsApp messaging funnels and instant forms to schedule appointments.",
      keyHighlights: [
        "Consistently drove consultation leads via messaging campaigns at a steady ~₹17 - ₹18 per lead.",
        "A single campaign scaled to 680 high-intent consultation conversations.",
      ],
    },
  },
  {
    id: "project-07",
    title: "OFY Clinics",
    url: "https://www.ofyclinics.com/",
    category: "Healthcare & Clinical Care",
    description:
      "OFY Clinics is a healthcare service provider that connects patients with clinical care solutions, focusing on accessible treatments and patient-centric medical support.",
    media: {
      image: "image_6fde61.png",
    },
    performanceMetrics: {
      totalCampaigns: 27,
      totalSpend: "₹119,845.27",
      totalReach: 1560933,
      averageFrequency: 2.78,
      currency: "INR",
    },
    campaignBreakdown: [
      {
        name: "OFY Lead Generation | Hydra Fa...",
        results: 25,
        resultType: "Messaging conversations",
        reach: null,
        frequency: null,
        costPerResult: "₹59.62",
        amountSpent: "₹1,490.50",
      },
      {
        name: "OFY Lead Generation | Skin Whi...",
        results: 45,
        resultType: "Messaging conversations",
        reach: null,
        frequency: null,
        costPerResult: "₹39.98",
        amountSpent: "₹1,799.19",
      },
      {
        name: "OFY Lead Generation | Skin Whi...",
        results: 265,
        resultType: "Messaging conversations",
        reach: null,
        frequency: null,
        costPerResult: "₹37.39",
        amountSpent: "₹9,909.17",
      },
      {
        name: "OFY Lead Generation | Hair Red...",
        results: 6,
        resultType: "Messaging conversations",
        reach: null,
        frequency: null,
        costPerResult: "₹92.60",
        amountSpent: "₹555.61",
      },
      {
        name: "OFY Lead Generation | Hydra Fa...",
        results: 165,
        resultType: "Messaging conversations",
        reach: null,
        frequency: null,
        costPerResult: "₹58.61",
        amountSpent: "₹9,671.39",
      },
      {
        name: "OFY lead generation X Fly Medi...",
        results: 18,
        resultType: "Messaging conversations",
        reach: null,
        frequency: null,
        costPerResult: "₹17.11",
        amountSpent: "₹307.92",
      },
    ],
    analysis: {
      summary:
        "Service-specific patient lead acquisition campaigns (Skin Whitening, Hydra Facial, Hair Reduction).",
      keyHighlights: [
        "Acquired high-intent healthcare leads at average costs between ₹37.39 and ₹59.62.",
        "Scaled Skin Whitening inquiries to 265 conversations per campaign wave.",
      ],
    },
  },
  {
    id: "project-08",
    title: "Quackapo",
    url: "https://quackapo.com/",
    category: "Entertainment & Lifestyle",
    description:
      "Quackapo is a homegrown entertainment & lifestyle brand that sells playful products like the Road Trip card game, combining fun and social engagement for families and friends.",
    media: {
      image: "image_6fdb9a.png",
    },
    performanceMetrics: {
      totalCampaigns: 14,
      totalSpend: "₹76,232.23",
      totalReach: 2127918,
      averageFrequency: 1.56,
      currency: "INR",
    },
    campaignBreakdown: [
      {
        name: "Instagram post: Limitless playability clubbed...",
        results: 722,
        resultType: "Instagram profile visits",
        reach: 60968,
        frequency: 1.53,
        costPerResult: "₹9.29",
        amountSpent: "₹6,707.26",
      },
      {
        name: "Instagram post: One wrong card can turn you...",
        results: 11273,
        resultType: "Instagram profile visits",
        reach: 417040,
        frequency: 1.71,
        costPerResult: "₹1.37",
        amountSpent: "₹15,395.48",
      },
      {
        name: "Instagram post: Every card reveal = mini hear...",
        results: 470,
        resultType: "Instagram profile visits",
        reach: 54052,
        frequency: 1.25,
        costPerResult: "₹1.61",
        amountSpent: "₹758.77",
      },
      {
        name: "Instagram post: From laughter to friendly...",
        results: 3023,
        resultType: "Link Clicks",
        reach: 209273,
        frequency: 1.44,
        costPerResult: "₹1.24",
        amountSpent: "₹3,754.37",
      },
    ],
    analysis: {
      summary:
        "Viral social engagement and traffic campaign strategy tailored for lifestyle products and board/card games.",
      keyHighlights: [
        "Generated over 11,200 profile visits from a single post campaign at ₹1.37 per visit.",
        "Achieved ₹1.24 per outbound link click driving high-intent store visitors.",
      ],
    },
  },
  {
    id: "project-09",
    title: "Gangasagar Tourism",
    url: "https://www.gangasagar.in/",
    category: "Tourism & Cultural Pilgrimage",
    description:
      "Gangasagar.in promotes pilgrimage and spiritual tourism to the Gangasagar region, highlighting its cultural significance and providing information on events, accommodations, and travel.",
    media: {
      image: "image_6fdb75.jpg",
    },
    performanceMetrics: {
      totalCampaigns: 52,
      totalSpend: "₹70,088.44",
      totalReach: 3566805,
      averageFrequency: 1.27,
      currency: "INR",
    },
    campaignBreakdown: [
      {
        name: "Gangasagar Mela L...",
        results: 2748819,
        resultType: "Reach",
        reach: 2748819,
        frequency: 1.21,
        costPerResult: "₹1.96 per 1,000 reach",
        amountSpent: "₹5,385.95",
      },
      {
        name: "Post: 'Bulls in is at...",
        results: 1935,
        resultType: "Link Clicks",
        reach: 37047,
        frequency: 1.55,
        costPerResult: "₹0.50",
        amountSpent: "₹973.55",
      },
      {
        name: "Post: 'Discover th...",
        results: 2348,
        resultType: "Link Clicks",
        reach: 46712,
        frequency: 1.34,
        costPerResult: "₹0.42",
        amountSpent: "₹979.67",
      },
      {
        name: "Post: 'Discover th...",
        results: 2431,
        resultType: "Link Clicks",
        reach: 76618,
        frequency: 1.12,
        costPerResult: "₹0.46",
        amountSpent: "₹1,115.68",
      },
    ],
    analysis: {
      summary:
        "Massive scale promotional awareness and web traffic drive for cultural event tourism.",
      keyHighlights: [
        "Reached over 3.5 Million unique individuals across target regions.",
        "Achieved extremely low Link Click costs starting at ₹0.42 to ₹0.50 per click.",
      ],
    },
  },
  {
    id: "project-10",
    title: "Sukham Hospital (Uttarakhand Ayurved)",
    url: "https://www.uttarakhandayurved.co.in/serviceprivate/sukham-hospital%3A-cancer-%26-surgical-centre",
    category: "Healthcare & Integrative Oncology",
    description:
      "Sukham Hospital, part of Uttarakhand Ayurved, operates as a cancer and surgical care centre, providing integrative medical treatments and patient support in specialized health services.",
    media: {
      image: "image_6fdb1f.png",
    },
    performanceMetrics: {
      totalCampaigns: 9,
      totalSpend: "₹41,354.07",
      totalReach: 2060933,
      averageFrequency: 2.09,
      currency: "INR",
    },
    campaignBreakdown: [
      {
        name: "Sukham Hospital DehradunLead Campaign | 25/12/20...",
        results: 2,
        resultType: "Leads (Form)",
        reach: null,
        frequency: null,
        costPerResult: "₹353.38",
        amountSpent: "₹706.75",
      },
      {
        name: "Sukham Hospital | Meerut Lead Campaign | 25/12/2025",
        results: 12,
        resultType: "Leads (Form)",
        reach: null,
        frequency: null,
        costPerResult: "₹208.31",
        amountSpent: "₹2,499.67",
      },
      {
        name: "Sukham Hospital | English Lead Campaign | 24/12/2025",
        results: 103,
        resultType: "Leads (Form)",
        reach: null,
        frequency: null,
        costPerResult: "₹87.04",
        amountSpent: "₹8,965.37",
      },
      {
        name: "Sukham Hospital | New Lead Campaign | 10/12/2025",
        results: 193,
        resultType: "Leads (Form)",
        reach: null,
        frequency: null,
        costPerResult: "₹115.91",
        amountSpent: "₹22,370.92",
      },
      {
        name: "Instagram post: Roz Khana khane ke baad gas...",
        results: 165,
        resultType: "Link Clicks",
        reach: null,
        frequency: null,
        costPerResult: "₹2.62",
        amountSpent: "₹432.08",
      },
    ],
    analysis: {
      summary:
        "Geotargeted medical lead generation capturing patients seeking specialized Ayurvedic cancer and surgical care across Dehradun, Meerut, and broader regions.",
      keyHighlights: [
        "Generated 193 qualified consultation leads in a single campaign at ₹115.91 per lead.",
        "English language targeted campaigns achieved optimized CPA of ₹87.04 per lead.",
      ],
    },
  },
];

export default function PaidPortfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [campaignSearch, setCampaignSearch] = useState("");

  const categories = useMemo(() => {
    const cats = ["All"];
    portfolioData.forEach((item) => {
      if (!cats.includes(item.category)) {
        cats.push(item.category);
      }
    });
    return cats;
  }, []);

  const filteredData = useMemo(() => {
    if (selectedCategory === "All") return portfolioData;
    return portfolioData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const activeItem = filteredData[activeIndex] || filteredData[0];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredData.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + filteredData.length) % filteredData.length,
    );
  };

  const filteredCampaigns = useMemo(() => {
    if (!activeItem) return [];
    if (!campaignSearch.trim()) return activeItem.campaignBreakdown;
    return activeItem.campaignBreakdown.filter(
      (c) =>
        c.name.toLowerCase().includes(campaignSearch.toLowerCase()) ||
        c.resultType.toLowerCase().includes(campaignSearch.toLowerCase()),
    );
  }, [activeItem, campaignSearch]);

  return (
    <section className="min-h-screen bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8 font-sans selection:bg-gray-900 selection:text-white">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header Section */}
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            GALLERY
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Paid Media Showcase
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-lg mx-auto">
            See performance through our lens: live campaigns, audience reach,
            and real ROI metrics.
          </p>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 scrollbar-none px-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveIndex(0);
                }}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 shrink-0 cursor-pointer border ${
                  isActive
                    ? "bg-[#0b1220] text-white border-[#0b1220] shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 3D Stacked Card Carousel */}
        {filteredData.length > 0 && activeItem && (
          <div className="relative py-8 sm:py-12 overflow-hidden">
            <div className="relative h-[380px] sm:h-[480px] md:h-[520px] flex items-center justify-center">
              {filteredData.map((item, index) => {
                let offset = index - activeIndex;
                if (offset < -1) offset += filteredData.length;
                if (offset > 1) offset -= filteredData.length;

                const isCenter = offset === 0;
                const isLeft = offset === -1;
                const isRight = offset === 1;
                const isVisible = isCenter || isLeft || isRight;

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={item.id}
                    initial={false}
                    animate={{
                      x: isCenter ? "0%" : isLeft ? "-60%" : "60%",
                      scale: isCenter ? 1 : 0.82,
                      zIndex: isCenter ? 30 : 10,
                      opacity: isCenter ? 1 : 0.65,
                      rotateY: isCenter ? 0 : isLeft ? 8 : -8,
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => setActiveIndex(index)}
                    className={`absolute w-[380px] sm:w-[480px] md:w-[620px] h-[360px] sm:h-[450px] md:h-[490px] rounded-[32px] overflow-hidden shadow-2xl cursor-pointer border border-white/20 bg-gray-900 group ${
                      isCenter ? "shadow-2xl ring-1 ring-black/10" : ""
                    }`}
                  >
                    {/* Background Image */}
                    <img
                      src={item.media.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    {/* Card Content Overlay */}
                    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold tracking-wider uppercase text-white border border-white/20">
                          {item.category}
                        </span>

                        {isCenter && (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5 text-white" />
                          </a>
                        )}
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                          {item.title}
                        </h3>

                        {/* Metrics Bar inside Card */}
                        {isCenter && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="pt-2 space-y-3 border-t border-white/20"
                          >
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div>
                                <span className="text-gray-400 block text-[10px] uppercase">
                                  Total Spend
                                </span>
                                <span className="font-bold text-white text-sm">
                                  {item.performanceMetrics.totalSpend}
                                </span>
                              </div>
                              <div>
                                <span className="text-gray-400 block text-[10px] uppercase">
                                  Total Reach
                                </span>
                                <span className="font-bold text-white text-sm">
                                  {item.performanceMetrics.totalReach
                                    ? item.performanceMetrics.totalReach.toLocaleString()
                                    : "N/A"}
                                </span>
                              </div>
                            </div>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsModalOpen(true);
                              }}
                              className="w-full py-2.5 px-4 rounded-xl bg-white text-black font-semibold text-xs flex items-center justify-center gap-2 hover:bg-gray-100 transition-all cursor-pointer shadow-md"
                            >
                              <Layers className="w-3.5 h-3.5" />
                              <span>View Ad Set Breakdown</span>
                            </button>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Circular Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-gray-300 hover:border-gray-900 bg-white text-gray-800 flex items-center justify-center shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
                aria-label="Previous Slide"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-gray-300 hover:border-gray-900 bg-white text-gray-800 flex items-center justify-center shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
                aria-label="Next Slide"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal Detailed Breakdown */}
      <AnimatePresence>
        {isModalOpen && activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] z-10 border border-gray-100"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-100 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                    {activeItem.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {activeItem.title}
                  </h3>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="px-6 py-3 border-b border-gray-100 bg-gray-50 flex items-center gap-3">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Filter campaign ad sets..."
                  value={campaignSearch}
                  onChange={(e) => setCampaignSearch(e.target.value)}
                  className="w-full bg-transparent border-none text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                />
              </div>

              {/* Table Data */}
              <div className="p-6 overflow-y-auto flex-1">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 text-gray-500 font-semibold uppercase tracking-wider">
                      <th className="py-3 px-3">Ad Set Name</th>
                      <th className="py-3 px-3">Objective</th>
                      <th className="py-3 px-3">Results</th>
                      <th className="py-3 px-3">Cost / Result</th>
                      <th className="py-3 px-3 text-right">Amount Spent</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredCampaigns.map((camp, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-3 px-3 font-medium text-gray-900 max-w-[200px] truncate">
                          {camp.name}
                        </td>
                        <td className="py-3 px-3 text-gray-500">
                          {camp.resultType}
                        </td>
                        <td className="py-3 px-3 font-bold text-gray-900">
                          {camp.results !== null
                            ? camp.results.toLocaleString()
                            : "N/A"}
                        </td>
                        <td className="py-3 px-3 font-semibold text-gray-700">
                          {camp.costPerResult}
                        </td>
                        <td className="py-3 px-3 text-right font-bold text-gray-900">
                          {camp.amountSpent}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
