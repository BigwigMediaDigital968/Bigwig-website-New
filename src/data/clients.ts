// Client logos for the /clients page, shown as a chessboard of white and navy squares.
// `square`: which colour the logo reads well on. Light/white logos must be "navy",
// dark logos must be "white"; gold and mid-tone logos can go either way.
// The page interleaves the two groups, so keep them roughly equal in size.
// `link` is optional: logos without one aren't clickable.
// `tile`: the square, evenly padded logo from public/clients-logo, used on the /clients wall. Strips elsewhere use `img`.
// `img` is the logo cropped to its edges; `aspect` (width ÷ height) lets strips give every logo the same visual weight.
export type Client = { name: string; img: string; aspect?: number; tile?: string; link?: string; square: "white" | "navy" };

export const clients: Client[] = [
  { name: "Rehnoor Jewels", square: "white", tile: "/clients-logo/rehnoorjewels.png", img: "/clients-logo/trimmed/rehnoorjewels.png", aspect: 1.8, link: "https://www.rehnoorjewels.com/" },
  { name: "RPH Realty", square: "white", tile: "/clients-logo/rphrealty.png", img: "/clients-logo/trimmed/rphrealty.png", aspect: 4.62, link: "https://rphrealty.com/" },
  { name: "Fortune Asia", square: "navy", tile: "/clients-logo/fortuneasiarealty.png", img: "/clients-logo/trimmed/fortuneasiarealty.png", aspect: 4.23, link: "https://www.fortuneasia.ae/" },
  { name: "Marketrixa", square: "navy", tile: "/clients-logo/marktrixa.png", img: "/clients-logo/trimmed/marktrixa.png", aspect: 5.99, link: "https://www.marketrixa.com/" },
  {
    name: "Granth Dream Homes", square: "navy", tile: "/clients-logo/granthdreamhomes.png",
    img: "/clients-logo/trimmed/granthdreamhomes.png", aspect: 2.25,
    link: "https://granthdreamhomes.co.in/",
  },
  {
    name: "Billion Dollar FX", square: "navy",
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1764826680/bdfx_zvjbi6.gif",
    link: "https://www.billiondollarfx.com",
  },
  {
    name: "Mondus Properties", square: "white",
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1764826620/logo_mondus_new_4_-TMoOETTP_drjizb.gif",
    link: "https://www.mondusproperties.ae/",
  },
  {
    name: "Stellar Binge", square: "white", tile: "/clients-logo/stellarbinge.png",
    img: "/clients-logo/trimmed/stellarbinge.png", aspect: 1.75,
    link: "https://www.stellarbinge.com",
  },
  {
    name: "Integrated Lognet", square: "navy", tile: "/clients-logo/integratedlogisticsnetwork.png",
    img: "/clients-logo/trimmed/integratedlogisticsnetwork.png", aspect: 1.57,
    link: "https://www.integratedlognet.com/",
  },
  {
    name: "Riverfront", square: "navy", tile: "/clients-logo/riverfront.png",
    img: "/clients-logo/trimmed/riverfront.png", aspect: 3.12,
    link: "https://riverfront.vercel.app/",
  },
  {
    name: "Destiny by Numbers", square: "navy", tile: "/clients-logo/destinybynumbbers.png",
    img: "/clients-logo/trimmed/destinybynumbbers.png", aspect: 1.83,
    link: "https://www.destinybynumberrs.com/",
  },
  {
    name: "Ethical Infrastructures", square: "white", tile: "/clients-logo/ethicalinfrastructure.png",
    img: "/clients-logo/trimmed/ethicalinfrastructure.png", aspect: 1.45,
    link: "https://www.ethicalinfrastructures.com/",
  },
  {
    name: "Crown Point Estates", square: "navy", tile: "/clients-logo/crownpointestates.png",
    img: "/clients-logo/trimmed/crownpointestates.png", aspect: 2.84,
    link: "https://www.crownpointestates.com/",
  },
  { name: "The Stellar Gymkhana", square: "navy", tile: "/clients-logo/thestellargymkhana.png", img: "/clients-logo/trimmed/thestellargymkhana.png", aspect: 2.51, },
  {
    name: "Gear Tek", square: "white", tile: "/clients-logo/gear-tek.png",
    img: "/clients-logo/trimmed/gear-tek.png", aspect: 1.51,
  },
  {
    name: "Dr. Himanshu Verma", square: "white", tile: "/clients-logo/dr.himanshu1.png",
    img: "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769074730/logo-removebg-preview_ti521v.webp",
    link: "https://www.drhimanshuverma.com/",
  },
  { name: "Global Technologies India", square: "white", tile: "/clients-logo/globaltechnologies.png", img: "/clients-logo/trimmed/globaltechnologies.png", aspect: 1.33, link: "https://www.globaltechnologiesindia.com/" },
  { name: "Homes and Land Goa", square: "white", tile: "/clients-logo/homesandlandgoa.png", img: "/clients-logo/trimmed/homesandlandgoa.png", aspect: 1.12, link: "https://www.homesandlandgoa.com" },
  { name: "AVF Care Workshop", square: "white", tile: "/clients-logo/avfcareworkshop.png", img: "/clients-logo/trimmed/avfcareworkshop.png", aspect: 1.93, link: "https://avfcareworkshop.com/" },
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
