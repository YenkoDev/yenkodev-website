"use client";

import React from "react";
import Image from "next/image";

import { HoverBorderGradient } from "./ui/HoverBorderGradient";
import { AnimatedWrapper } from "./ui/AnimatedWrapper";
import { TypewriterEffectSmooth } from "./ui/TypewriterEffect";

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
  return (
    <>
      <div className="absolute md:inset-0 bottom-5 z-0">
        <AnimatedWrapper animation="fadeIn" delay={0.9} duration={1}>
          <Image
            src={heroCover}
            alt="background image"
            objectFit="cover"
            quality={100}
            className="opacity-[5%]"
          />
        </AnimatedWrapper>
      </div>

      <div className="relative h-hero-height px-4">
        <div className="relative z-10 max-w-5xl m-auto lg:mt-32 md:24 mt-16">
          <AnimatedWrapper
            animation="slideIn"
            direction="up"
            delay={0.8}
            duration={1}
          >
            <div className="flex justify-center items-center w-full mb-8">
              <Image src={yenkoYLogoNoBg} alt="hero image" height={45} />
            </div>
          </AnimatedWrapper>

          <h1 className="md:block hidden lg:text-5xl md:text-4xl text-3xl font-bold mb-4 text-center tracking-wide">
            <TypewriterEffectSmooth words={heroHeadline} />
          </h1>

          <AnimatedWrapper animation="fadeIn" delay={0.9} duration={1}>
            <h1 className="md:hidden block lg:text-5xl md:text-4xl text-3xl font-bold mb-4 text-center tracking-wide">
              Comprehensive <span className="text-orange-400">Software</span>
              <span className="text-orange-400">
                {" "}
                <span className="text-blue-400">Solutions</span>
              </span>
            </h1>
          </AnimatedWrapper>

          <AnimatedWrapper animation="fadeIn" delay={0.9} duration={1}>
            <p className="md:text-lg text-sm max-w-2xl m-auto text-center text-gray-500 mb-16">
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
                <a href="#services" className="font-bold">
                  View Our Services
                </a>
              </HoverBorderGradient>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </>
  );
};

export default Hero;