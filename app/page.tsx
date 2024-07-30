import React from "react";
import Hero from "@/components/Hero";

export const metadata = {
  title: "YenkoDev",
  description:
    "YenkoDev offers cutting-edge software solutions tailored to meet the diverse needs of our clients. Specializing in web, mobile, desktop app development, AI/ML, and custom software solutions.",
  metadataBase: new URL("https://www.yenkodev.com"),
  openGraph: {
    title: "Comprehensive Software Solutions - YenkoDev",
    description:
      "YenkoDev offers cutting-edge software solutions tailored to meet the diverse needs of our clients. Specializing in web, mobile, desktop app development, AI/ML, and custom software solutions.",
    type: "website",
    url: "https://www.yenkodev.com",
    images: [
      {
        url: "/yenkoDevLogoNoBg.png",
      },
    ],
  },
};

const Home = () => {
  return (
    <main>
      <Hero />
    </main>
  );
};

export default Home;
