import React, { Suspense } from "react";
import Content from "./content";

export const metadata = {
  title: "Projects - YenkoDev",
  description:
    "Explore the sample works and projects by YenkoDev, showcasing our expertise in web, mobile, desktop app development, AI/ML, and custom software solutions.",
  metadataBase: new URL("https://www.yenkodev.com"),
  openGraph: {
    title: "Projects - YenkoDev",
    description:
      "Explore the sample works and projects by YenkoDev, showcasing our expertise in web, mobile, desktop app development, AI/ML, and custom software solutions.",
    type: "website",
    url: "https://www.yenkodev.com/projects",
    images: [
      {
        url: "/yenkoDevLogoNoBg.png",
      },
    ],
  },
};

const Projects = () => {
  return (
    <Suspense>
      <Content />;
    </Suspense>
  );
};

export default Projects;
