import React from "react";
import Content from "./content";

export const metadata = {
  title: "Contact Us - YenkoDev",
  description:
    "Contact YenkoDev for more information or inquiries about our software solutions. Specializing in web, mobile, desktop app development, AI/ML, and custom software solutions.",
  metadataBase: new URL("https://www.yenkodev.com"),
  openGraph: {
    title: "Contact Us - YenkoDev",
    description:
      "Contact YenkoDev for more information or inquiries about our software solutions. Specializing in web, mobile, desktop app development, AI/ML, and custom software solutions.",
    type: "website",
    url: "https://www.yenkodev.com/contact",
    images: [
      {
        url: "/yenkoDevLogoNoBg.png",
      },
    ],
  },
};

const ContactUs = () => {
  return <Content />;
};

export default ContactUs;
