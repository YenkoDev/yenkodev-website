import React from "react";
import Content from "./content";

export const metadata = {
  title: "Team - YenkoDev",
  description:
    "Meet the talented team behind YenkoDev, committed to delivering exceptional software solutions.",
  metadataBase: new URL("https://www.yenkodev.com"),
  openGraph: {
    title: "Team - YenkoDev",
    description:
      "Meet the talented team behind YenkoDev, committed to delivering exceptional software solutions.",
    type: "website",
    url: "https://www.yenkodev.com/team",
    images: [
      {
        url: "/yenkoDevLogoNoBg.png",
      },
    ],
  },
};

const Team = () => {
  return <Content />;
};

export default Team;
