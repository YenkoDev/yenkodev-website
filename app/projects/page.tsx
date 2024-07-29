"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects - YenkoDev</title>
        <meta
          name="description"
          content="Explore the sample works and projects by YenkoDev, showcasing our expertise in web, mobile, desktop app development, AI/ML, and custom software solutions."
        />
        <meta property="og:title" content="Projects - YenkoDev" />
        <meta
          property="og:description"
          content="Explore the sample works and projects by YenkoDev, showcasing our expertise in web, mobile, desktop app development, AI/ML, and custom software solutions."
        />
        <meta property="og:url" content="https://www.yenkodev.com/project" />
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
              <h1 className="py-8 text-3xl font-bold">Projects</h1>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default Projects;
