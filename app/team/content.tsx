"use client";

import React from "react";
import { motion } from "framer-motion";

const Content = () => {
  return (
    <main className="section-layout">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold w-full">Team</h1>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mt-8">
          <h2 className="text-2xl w-full text-red-500">In progress...</h2>
        </div>
      </motion.div>
    </main>
  );
};

export default Content;
