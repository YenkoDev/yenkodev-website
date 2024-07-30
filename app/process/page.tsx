import React from "react";
import Content from "./content";

export const metadata = {
  title: "Process - YenkoDev",
  description:
    "Discover the YenkoDev process for delivering cutting-edge software solutions. We specialize in web, mobile, desktop app development, AI/ML, and custom software solutions, following a structured approach to ensure quality and efficiency.",
  metadataBase: new URL("https://www.yenkodev.com"),
  openGraph: {
    title: "Process - YenkoDev",
    description:
      "Discover the YenkoDev process for delivering cutting-edge software solutions. We specialize in web, mobile, desktop app development, AI/ML, and custom software solutions, following a structured approach to ensure quality and efficiency.",
    type: "website",
    url: "https://www.yenkodev.com/process",
    images: [
      {
        url: "/yenkoDevLogoNoBg.png",
      },
    ],
  },
};

const Process = () => {
  return <Content />;
};

export default Process;
