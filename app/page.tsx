"use client";

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <>
      <Head>
        <title>Comprehensive Software Solutions - YenkoDev</title>
        <meta
          name="description"
          content="YenkoDev offers cutting-edge software solutions tailored to meet the diverse needs of our clients. Specializing in web, mobile, desktop app development, AI/ML, and custom software solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Comprehensive Software Solutions - YenkoDev"
        />
        <meta
          property="og:description"
          content="YenkoDev offers cutting-edge software solutions tailored to meet the diverse needs of our clients. Specializing in web, mobile, desktop app development, AI/ML, and custom software solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yenkodev.com" />
        <meta
          property="og:image"
          content="https://www.yenkodev.com/images/default-thumbnail.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
      </main>
    </>
  );
};

export default Home;
