import React from "react";
import Content from "./content";

export const metadata = {
  title: "Testimonials - YenkoDev",
  description:
    "Read sample testimonials from clients who have experienced the exceptional software solutions provided by YenkoDev.",
  metadataBase: new URL("https://www.yenkodev.com"),
  openGraph: {
    title: "Testimonials - YenkoDev",
    description:
      "Read sample testimonials from clients who have experienced the exceptional software solutions provided by YenkoDev.",
    type: "website",
    url: "https://www.yenkodev.com/testimonials",
    images: [
      {
        url: "/yenkoDevLogoNoBg.png",
      },
    ],
  },
};

const Testimonials = () => {
  return <Content />;
};

export default Testimonials;
