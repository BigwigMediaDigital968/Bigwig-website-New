export type Office = {
  city: string;
  label: string;
  address: string;
  phoneDisplay: string;
  phoneHref: string;
  mapUrl: string;
};

export const headOffice: Office & { mapEmbed: string } = {
  city: "Delhi",
  label: "Head office",
  address: "Plot # 2, Sanjay Nagar, Gulabi Bagh, Delhi 110007, India",
  phoneDisplay: "+91 96858 92813",
  phoneHref: "tel:+919685892813",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Bigwig+Media+Digital+Gulabi+Bagh+Delhi",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.322121979646!2d77.19070767529064!3d28.673932275642237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03586419b693%3A0x627bb399c7e86209!2sBigwig%20Media%20Digital%20-%20Digital%20Marketing%20Company!5e1!3m2!1sen!2in!4v1763114888587!5m2!1sen!2in",
};

export const branches: Office[] = [
  {
    city: "Bhopal",
    label: "Branch",
    address: "Plot Number 2, near Hanuman Mandir, Idgah Hills, Bhopal, Madhya Pradesh 462001",
    phoneDisplay: "+91 96858 92813",
    phoneHref: "tel:+919685892813",
    mapUrl:
      "https://www.google.com/maps/place/Bigwig+Digital/data=!4m2!3m1!1s0x0:0x39395dc0edfc0c60?sa=X&ved=1t:2428&hl=en-GB&ictx=111",
  },
  {
    city: "Goa",
    label: "Branch",
    address: "SF-15, Prabhu Chambers, Mapusa, Goa 403507",
    phoneDisplay: "+91 96858 92813",
    phoneHref: "tel:+919685892813",
    mapUrl:
      "https://www.google.com/maps/place/Bigwig+Digital/data=!4m2!3m1!1s0x0:0xa54bc66585ac168e?sa=X&ved=1t:2428&hl=en-GB&ictx=111",
  },
];
