"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useNavigation } from "@/context/NavigationContext";

import { HoverBorderGradient } from "../components/ui/HoverBorderGradient";
import { TypewriterEffectSmooth } from "../components/ui/TypewriterEffect";
import { BentoGrid, BentoGridItem } from "@/components/ui/HomeGrid";

import { motion } from "framer-motion";

import { yenkoYLogoNoBg, heroCover } from "@/assets";

const heroHeadline = [
  {
    text: "Comprehensive",
  },
  {
    text: "Software",
    className: "text-orange-light",
  },
  {
    text: "Solutions",
    className: "text-blue-light",
  },
];

const Content = () => {
  return (
    <main>
      <Hero />
      <About />
      {/* <Testimonials /> */}
    </main>
  );
};

const Hero = () => {
  const { handleNavigation } = useNavigation();
  const words = "Comprehensive Software Solutions";

  return (
    <section className="section-layout h-hero-height">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -1000, opacity: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute md:inset-0 bottom-5 z-0 overflow-hidden"
      >
        <Image
          src={heroCover}
          alt="background image"
          style={{ objectFit: "cover" }}
          quality={100}
          className="opacity-[5%]"
          priority
        />
      </motion.div>

      <div className="z-20 max-w-5xl m-auto lg:mt-32 md:24 sm:mt-16 mt-8">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ delay: 0.8, duration: 1, type: "spring" }}
        >
          <div className="flex justify-center items-center w-full mb-8">
            <Image src={yenkoYLogoNoBg} alt="hero image" height={45} priority />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
        >
          <h1 className="md:block hidden lg:text-5xl md:text-4xl text-3xl font-bold mb-4 text-center tracking-wide">
            <TypewriterEffectSmooth words={heroHeadline} />
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
          className="md:hidden"
        >
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-4 text-center tracking-wide">
            Comprehensive <span className="text-orange-light">Software</span>
            <span className="text-orange-light">
              {" "}
              <span className="text-blue-light">Solutions</span>
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
        >
          <p className="md:text-lg text-sm  m-auto text-center text-custom-gray md:max-w-4xl max-w-sm mb-16">
            YenkoDev offers cutting-edge software solutions tailored to meet the
            diverse needs of our clients. Specializing in web, mobile, desktop
            app development, AI/ML, and custom software solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ delay: 1, duration: 1, type: "spring" }}
        >
          <div className="flex items-center justify-center">
            <HoverBorderGradient>
              <a href="#about" className="font-bold ">
                LEARN MORE
              </a>
            </HoverBorderGradient>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <div id="about" className="flex items-center justify-center">
      <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="z-20 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="section-layout">
              <BentoGrid className="mx-auto">
                {items.map((item, i) => (
                  <BentoGridItem
                    key={i}
                    title={item.title}
                    header={item.header}
                    description={item.description}
                    className={item.className}
                  />
                ))}
              </BentoGrid>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Skeleton = () => <div className=""></div>;

const items = [
  {
    title: "How It Started",
    description:
      "YenkoDev was founded by a group of freelance students passionate about software development. What began as a series of freelance projects has grown into a dynamic software development company. Initially serving local clients, we have expanded our reach to include international clients, providing cutting-edge solutions across the globe.",
    header: <Skeleton />,
    className: "md:col-span-3",
  },
  {
    title: "We Are Diverse",
    description:
      "YenkoDev pride ourselves on our versatility and ability to excel in multiple areas of technology. Our diverse expertise allows us to deliver comprehensive solutions that cater to a wide range of industries and technological needs.",
    header: <Skeleton />,
    className: "md:col-span-2",
  },
  {
    title: "Our Vision",
    description:
      "YenkoDev vision to be a global leader in software development, recognized for our commitment to excellence, innovation, and the ability to deliver exceptional results. We aim to empower businesses by transforming ideas into cutting-edge software solutions that drive growth and efficiency.",
    header: <Skeleton />,
    className: "md:col-span-2",
  },
  {
    title: "End-to-End Support",
    description:
      "YenkoDev provide comprehensive support throughout the entire lifecycle of your project. From initial consultation and planning to development, deployment, and ongoing maintenance, our dedicated team ensures that your software solutions continue to meet your evolving needs and drive your business success.",
    header: <Skeleton />,
    className: "md:col-span-3",
  },
];

const Testimonials = () => {
  return <div id="testimonials" className="h-screen"></div>;
};

export default Content;
