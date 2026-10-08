// Client logos for the /clients page, shown as a chessboard of white and navy squares.
// `square`: which colour the logo reads well on. Light/white logos must be "navy",
// dark logos must be "white"; gold and mid-tone logos can go either way.
// The page interleaves the two groups, so keep them roughly equal in size.
// `link` is optional: logos without one aren't clickable.
export type Client = { name: string; img: string; link?: string; square: "white" | "navy" };

export const clients: Client[] = [
  { name: "Rehnoor Jewels", square: "white", img: "https://www.rehnoorjewels.com/rehnoor-jewels-svg-logo.svg", link: "https://www.rehnoorjewels.com/" },
  { name: "RPH Realty", square: "white", img: "/RPH-logo.png", link: "https://rphrealty.com/" },
  { name: "Fortune Asia", square: "navy", img: "/fortuneasia.png", link: "https://www.fortuneasia.ae/" },
  { name: "Marketrixa", square: "navy", img: "/logo-marketrixa.webp", link: "https://www.marketrixa.com/" },
  {
    name: "Granth Dream Homes", square: "navy",
    img: "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759493003/Granth_logo_6_kyrd5s.png",
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
    name: "Stellar Binge", square: "white",
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1765346115/logo_2_qiiitb.webp",
    link: "https://www.stellarbinge.com",
  },
  {
    name: "Integrated Lognet", square: "navy",
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1764826183/iln_logo_1_-By-pImIc_lgxxky.png",
    link: "https://www.integratedlognet.com/",
  },
  {
    name: "Riverfront", square: "navy",
    img: "https://riverfront.vercel.app/assets/Logo%20for%20riverfront%20-CAIVvev0.png",
    link: "https://riverfront.vercel.app/",
  },
  {
    name: "Destiny by Numbers", square: "navy",
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1763112478/DBN_logo_x7wjzx.webp",
    link: "https://www.destinybynumberrs.com/",
  },
  {
    name: "Ethical Infrastructures", square: "white",
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1763112443/logo_1_tnncgd.webp",
    link: "https://www.ethicalinfrastructures.com/",
  },
  {
    name: "Crown Point Estates", square: "navy",
    img: "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769074373/CPE_LOGO_FINAL__wb2eiw.png",
    link: "https://www.crownpointestates.com/",
  },
  { name: "The Stellar Gymkhana", square: "navy", img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1764826338/logo_fz6mbq.png" },
  {
    name: "Gear Tek", square: "white",
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1764826497/Gear_Tek_Logo-removebg-preview_j5p3wc-removebg-preview_x7urfm.png",
  },
  {
    name: "Dr. Himanshu Verma", square: "white",
    img: "https://res.cloudinary.com/dyum0r6gf/image/upload/v1769074730/logo-removebg-preview_ti521v.webp",
    link: "https://www.drhimanshuverma.com/",
  },
  { name: "Global Technologies India", square: "white", img: "/global-tech-logo.png", link: "https://www.globaltechnologiesindia.com/" },
  { name: "Homes and Land Goa", square: "white", img: "/homes-land-goa-logo.png", link: "https://www.homesandlandgoa.com" },
  { name: "AVF Care Workshop", square: "white", img: "/avfcare-logo.png", link: "https://avfcareworkshop.com/" },
];

export const dubaiClients: Client[] = [
  { name: "Fortune Asia", square: "navy", img: "/fortuneasia.png", link: "https://www.fortuneasia.ae/" },
  {
    name: "Riverfront", square: "navy",
    img: "https://riverfront.vercel.app/assets/Logo%20for%20riverfront%20-CAIVvev0.png",
    link: "https://riverfront.vercel.app/",
  },
  {
    name: "Mondus Properties", square: "white",
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1764826620/logo_mondus_new_4_-TMoOETTP_drjizb.gif",
    link: "https://www.mondusproperties.ae/",
  },
  {
    name: "Stellar Binge", square: "white",
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1765346115/logo_2_qiiitb.webp",
    link: "https://www.stellarbinge.com",
  },
   {
    name: "Billion Dollar FX", square: "navy",
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1764826680/bdfx_zvjbi6.gif",
    link: "https://www.billiondollarfx.com",
  },
];
