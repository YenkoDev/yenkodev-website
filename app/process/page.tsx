"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

const Process = () => {
  return (
    <>
      <Head>
        <title>Process - YenkoDev</title>
        <meta
          name="description"
          content="Discover the YenkoDev process for delivering cutting-edge software solutions. We specialize in web, mobile, desktop app development, AI/ML, and custom software solutions, following a structured approach to ensure quality and efficiency."
        />
        <meta property="og:title" content="Process - YenkoDev" />
        <meta
          property="og:description"
          content="Discover the YenkoDev process for delivering cutting-edge software solutions. We specialize in web, mobile, desktop app development, AI/ML, and custom software solutions, following a structured approach to ensure quality and efficiency."
        />
        <meta property="og:url" content="https://www.yenkodev.com/process" />
      </Head>
      <main className="p-4 max-w-7xl mx-auto overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="p-4 container mx-auto overflow-hidden"
        >
          <div className="relative flex justify-center items-center flex-col overflow-hidden w-full">
            <div className="max-w-7xl w-full">
              <h1 className="py-8 text-3xl font-bold">Process</h1>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default Process;
