import React from "react";
import Content from "./content";

export const metadata = {
  title: "Services - YenkoDev",
  description:
    "Discover the range of services offered by YenkoDev, including web, mobile, desktop app development, AI/ML, and custom software solutions.",
  metadataBase: new URL("https://www.yenkodev.com"),
  openGraph: {
    title: "Services - YenkoDev",
    description:
      "Discover the range of services offered by YenkoDev, including web, mobile, desktop app development, AI/ML, and custom software solutions.",
    type: "website",
    url: "https://www.yenkodev.com/service",
    images: [
      {
        url: "/yenkoDevLogoNoBg.png",
      },
    ],
  },
};

const Service = () => {
  return <Content />;
};

export default Service;
