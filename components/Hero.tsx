"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useNavigation } from "@/context/NavigationContext";

import { HoverBorderGradient } from "./ui/HoverBorderGradient";
import { AnimatedWrapper } from "./ui/AnimatedWrapper";
import { TypewriterEffectSmooth } from "./ui/TypewriterEffect";
import { motion } from "framer-motion";

import { yenkoYLogoNoBg, heroCover } from "@/assets";

const heroHeadline = [
  {
    text: "Comprehensive",
  },
  {
    text: "Software",
    className: "text-orange-400",
  },
  {
    text: "Solutions",
    className: "text-blue-400",
  },
];

const Hero = () => {
  const { handleNavigation } = useNavigation();

  const handleLinkClick = (
    e:
      | React.MouseEvent<HTMLImageElement, MouseEvent>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string
  ) => {
    e.preventDefault();
    handleNavigation(path);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="p-4 container mx-auto overflow-hidden"
    >
      <div className="absolute md:inset-0 bottom-5 z-0 overflow-hidden">
        <AnimatedWrapper animation="fadeIn" delay={0.9} duration={1}>
          <Image
            src={heroCover}
            alt="background image"
            style={{ objectFit: "cover" }}
            quality={100}
            className="opacity-[5%]"
            priority
          />
        </AnimatedWrapper>
      </div>

      <div className="relative hero-padding overflow-hidden">
        <div className="relative z-10 max-w-5xl m-auto lg:mt-32 md:24 sm:mt-16 mt-8">
          <AnimatedWrapper
            animation="slideIn"
            direction="up"
            delay={0.8}
            duration={1}
          >
            <div className="flex justify-center items-center w-full mb-8">
              <Image
                src={yenkoYLogoNoBg}
                alt="hero image"
                height={45}
                priority
              />
            </div>
          </AnimatedWrapper>

          <h1 className="md:block hidden hero-heading">
            <TypewriterEffectSmooth words={heroHeadline} />
          </h1>

          <AnimatedWrapper animation="fadeIn" delay={0.9} duration={1}>
            <h1 className="md:hidden block hero-heading">
              Comprehensive <span className="text-orange-400">Software</span>
              <span className="text-orange-400">
                {" "}
                <span className="text-blue-400">Solutions</span>
              </span>
            </h1>
          </AnimatedWrapper>

          <AnimatedWrapper animation="fadeIn" delay={0.9} duration={1}>
            <p className="hero-subheading md:max-w-4xl max-w-sm mb-16">
              YenkoDev offers cutting-edge software solutions tailored to meet
              the diverse needs of our clients. Specializing in web, mobile,
              desktop app development, AI/ML, and custom software solutions.
            </p>
          </AnimatedWrapper>

          <AnimatedWrapper
            animation="slideIn"
            direction="down"
            delay={1}
            duration={1}
          >
            <div className="flex items-center justify-center">
              <HoverBorderGradient>
                <Link
                  href="/services"
                  onClick={(e) => {
                    handleLinkClick(e, "/services");
                  }}
                  className="font-bold "
                >
                  View Our Services
                </Link>
              </HoverBorderGradient>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
