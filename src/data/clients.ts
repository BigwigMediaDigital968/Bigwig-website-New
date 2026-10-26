// Client logos for the /clients page, shown as a chessboard of white and navy squares.
// `square`: which colour the logo reads well on. Light/white logos must be "navy",
// dark logos must be "white"; gold and mid-tone logos can go either way.
// The page interleaves the two groups, so keep them roughly equal in size.
// `link` is optional: logos without one aren't clickable.
// `tile`: the square, evenly padded logo from public/clients-logo, used on the /clients wall. Strips elsewhere use `img`.
// `img` is the logo cropped to its edges; `aspect` (width ÷ height) lets strips give every logo the same visual weight.
export interface Client {
  name: string;
  square: "white" | "navy";
  tile?: string;
  img: string;
  aspect?: number;
  link?: string;
  industry?: string;
}

export const clients: Client[] = [
  // Healthcare
   {
    name: "Dr. Manish Aggarwal",
    square: "white",
    tile: "/clients-logo/drmanishaggarwal.png",
    img: "/clients-logo/trimmed/drmanishaggarwal.png",
    aspect: 1.93,
    link: "https://www.drmanishaggarwal.com/",
    industry: "Healthcare",
  },
  {
    name: "Dr. Himanshu Verma",
    square: "navy",
    tile: "/clients-logo/dr.himanshu1.png",
    img: "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769074730/logo-removebg-preview_ti521v.webp",
    link: "https://www.drhimanshuverma.com/",
    industry: "Healthcare",
  },
  {
    name: "Dr. Manish Aggarwal",
    square: "white",
    tile: "/clients-logo/msmc.png",
    img: "/clients-logo/trimmed/msmc.png",
    aspect: 1.93,
    industry: "Healthcare",
  },
  {
    name: "AVF Care Workshop",
    square: "navy",
    tile: "/clients-logo/avfcareworkshop.png",
    img: "/clients-logo/trimmed/avfcareworkshop.png",
    aspect: 1.93,
    link: "https://avfcareworkshop.com/",
    industry: "Healthcare",
  },
  
   

  // D2C
  {
    name: "Rehnoor Jewels",
    square: "navy",
    tile: "/clients-logo/rehnoorjewels.png",
    img: "/clients-logo/trimmed/rehnoorjewels.png",
    aspect: 1.8,
    link: "https://www.rehnoorjewels.com/",
    industry: "D2C",
  },
  {
    name: "Velaro India",
    square: "white",
    tile: "/clients-logo/velaroindia.png",
    img: "/clients-logo/trimmed/velaroindia.png",
    aspect: 1.75,
    link: "https://www.velaroindia.com",
    industry: "D2C",
  },
  {
    name: "Artitude",
    square: "navy",
    tile: "/clients-logo/artitude.png",
    img: "/clients-logo/trimmed/artitude.png",
    aspect: 1.8,
    link: "https://artitudeco.com/",
    industry: "D2C",
  },
  // {
  //   name: "Pearls India",
  //   square: "white",
  //   tile: "",
  //   img: "",
  //   aspect: 1.75,
  //   link: "https://pearlsindia.co.in/",
  //   industry: "D2C",
  // },
  {
    name: "Bajaj Chemicals",
    square: "white",
    tile: "/clients-logo/bajajchemicals.png",
    img: "/clients-logo/trimmed/bajajchemicals.png",
    aspect: 1.75,
    link: "https://www.bajajchemicals.co/",
    industry: "D2C",
  },

  // Real Estate
  {
    name: "RPH Realty",
    square: "white",
    tile: "/clients-logo/rphrealty.png",
    img: "/clients-logo/trimmed/rphrealty.png",
    aspect: 4.62,
    link: "https://rphrealty.com/",
    industry: "Real Estate",
  },
  {
    name: "Fortune Asia",
    square: "navy",
    tile: "/clients-logo/fortuneasiarealty.png",
    img: "/clients-logo/trimmed/fortuneasiarealty.png",
    aspect: 4.23,
    link: "https://www.fortuneasia.ae/",
    industry: "Real Estate",
  },
  {
    name: "Khalsa Property Dealers",
    square: "white",
    tile: "/clients-logo/kpd.png",
    img: "/clients-logo/trimmed/kpd.png",
    aspect: 4.23,
    link: "https://www.khalsapropertydealers.com/",
    industry: "Real Estate",
  },
  {
    name: "Granth Dream Homes",
    square: "navy",
    tile: "/clients-logo/granthdreamhomes.png",
    img: "/clients-logo/trimmed/granthdreamhomes.png",
    aspect: 2.25,
    link: "https://granthdreamhomes.co.in/",
    industry: "Real Estate",
  },
  {
    name: "Mondus Properties",
    square: "white",
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1764826620/logo_mondus_new_4_-TMoOETTP_drjizb.gif",
    link: "https://www.mondusproperties.ae/",
    industry: "Real Estate",
  },
  
  {
    name: "Riverfront",
    square: "navy",
    tile: "/clients-logo/riverfront.png",
    img: "/clients-logo/trimmed/riverfront.png",
    aspect: 3.12,
    link: "https://riverfront.vercel.app/",
    industry: "Real Estate",
  },
  {
    name: "Ethical Infrastructures",
    square: "white",
    tile: "/clients-logo/ethicalinfrastructure.png",
    img: "/clients-logo/trimmed/ethicalinfrastructure.png",
    aspect: 1.45,
    link: "https://www.ethicalinfrastructures.com/",
    industry: "Real Estate",
  },
  {
    name: "Crown Point Estates",
    square: "navy",
    tile: "/clients-logo/crownpointestates.png",
    img: "/clients-logo/trimmed/crownpointestates.png",
    aspect: 2.84,
    link: "https://www.crownpointestates.com/",
    industry: "Real Estate",
  },
  
  {
    name: "Brick&Bolt",
    square: "white",
    tile: "/clients-logo/bnb.png",
    img: "/clients-logo/trimmed/bnb.png",
    aspect: 1.12,
    link: "https://www.bricknbolt.com/",
    industry: "Real Estate",
  },
  {
    name: "Homes and Land Goa",
    square: "navy",
    tile: "/clients-logo/homesandlandgoa.png",
    img: "/clients-logo/trimmed/homesandlandgoa.png",
    aspect: 1.12,
    link: "https://www.homesandlandgoa.com",
    industry: "Real Estate",
  },

  // Astrology
  {
    name: "Destiny by Numbers",
    square: "navy",
    tile: "/clients-logo/destinybynumbbers.png",
    img: "/clients-logo/trimmed/destinybynumbbers.png",
    aspect: 1.83,
    link: "https://www.destinybynumberrs.com/",
    industry: "Astrology",
  },

  // Marketing
  {
    name: "Marketrixa",
    square: "navy",
    tile: "/clients-logo/marktrixa.png",
    img: "/clients-logo/trimmed/marktrixa.png",
    aspect: 5.99,
    link: "https://www.marketrixa.com/",
    industry: "Marketing",
  },

  // Forex & Trading
  {
    name: "Billion Dollar FX",
    square: "navy",
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1764826680/bdfx_zvjbi6.gif",
    link: "https://www.billiondollarfx.com",
    industry: "Forex & Trading",
  },

  // Logistics
  {
    name: "Integrated Lognet",
    square: "navy",
    tile: "/clients-logo/integratedlogisticsnetwork.png",
    img: "/clients-logo/trimmed/integratedlogisticsnetwork.png",
    aspect: 1.57,
    link: "https://www.integratedlognet.com/",
    industry: "Logistics",
  },

  // Engineering
  {
    name: "Gear Tek",
    square: "white",
    tile: "/clients-logo/gear-tek.png",
    img: "/clients-logo/trimmed/gear-tek.png",
    aspect: 1.51,
    industry: "Engineering",
  },
  {
    name: "Global Technologies India",
    square: "white",
    tile: "/clients-logo/globaltechnologies.png",
    img: "/clients-logo/trimmed/globaltechnologies.png",
    aspect: 1.33,
    link: "https://www.globaltechnologiesindia.com/",
    industry: "Engineering",
  },
  {
    name: "Stellar Binge",
    square: "white",
    tile: "/clients-logo/stellarbinge.png",
    img: "/clients-logo/trimmed/stellarbinge.png",
    aspect: 1.75,
    link: "https://www.stellarbinge.com",
    industry: "Others",
  },
  {
    name: "The Stellar Gymkhana",
    square: "navy",
    tile: "/clients-logo/thestellargymkhana.png",
    img: "/clients-logo/trimmed/thestellargymkhana.png",
    aspect: 2.51,
    link: "https://stellargym.co.in/",
    industry: "Others",
  },
];

export const dubaiClients: Client[] = [
  { name: "Fortune Asia", square: "navy", img: "/clients-logo/trimmed/fortuneasiarealty.png", aspect: 4.23, link: "https://www.fortuneasia.ae/" },
  {
    name: "Riverfront", square: "navy",
    img: "/clients-logo/trimmed/riverfront.png", aspect: 3.12,
    link: "https://riverfront.vercel.app/",
  },
  {
    name: "Mondus Properties", square: "white",
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1764826620/logo_mondus_new_4_-TMoOETTP_drjizb.gif",
    link: "https://www.mondusproperties.ae/",
  },
  {
    name: "Stellar Binge", square: "white",
    img: "/clients-logo/trimmed/stellarbinge.png", aspect: 1.75,
    link: "https://www.stellarbinge.com",
  },
  {
    name: "Billion Dollar FX", square: "navy",
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1764826680/bdfx_zvjbi6.gif",
    link: "https://www.billiondollarfx.com",
  },
];

export const AboutClientList: Client[] = [
  {
    name: "Rehnoor Jewels",
    square: "white",
    tile: "/clients-logo/rehnoorjewels.png",
    img: "/clients-logo/trimmed/rehnoorjewels.png",
    aspect: 1.8,
    link: "https://www.rehnoorjewels.com/",
    industry: "D2C",
  },
  {
    name: "Marketrixa",
    square: "navy",
    tile: "/clients-logo/marktrixa.png",
    img: "/clients-logo/trimmed/marktrixa.png",
    aspect: 5.99,
    link: "https://www.marketrixa.com/",
    industry: "Marketing",
  },
  {
    name: "RPH Realty",
    square: "white",
    tile: "/clients-logo/rphrealty.png",
    img: "/clients-logo/trimmed/rphrealty.png",
    aspect: 4.62,
    link: "https://rphrealty.com/",
    industry: "Real Estate",
  },
  {
    name: "Fortune Asia",
    square: "navy",
    tile: "/clients-logo/fortuneasiarealty.png",
    img: "/clients-logo/trimmed/fortuneasiarealty.png",
    aspect: 4.23,
    link: "https://www.fortuneasia.ae/",
    industry: "Real Estate",
  },
  {
    name: "AVF Care Workshop",
    square: "white",
    tile: "/clients-logo/avfcareworkshop.png",
    img: "/clients-logo/trimmed/avfcareworkshop.png",
    aspect: 1.93,
    link: "https://avfcareworkshop.com/",
    industry: "Healthcare",
  },

    {
    name: "Homes and Land Goa",
    square: "navy",
    tile: "/clients-logo/homesandlandgoa.png",
    img: "/clients-logo/trimmed/homesandlandgoa.png",
    aspect: 1.12,
    link: "https://www.homesandlandgoa.com",
    industry: "Real Estate",
  },
]
