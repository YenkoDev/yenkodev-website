"use client";

import React from "react";
import { motion } from "framer-motion";

const Content = () => {
  return (
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
            <h1 className="text-3xl font-bold">Team</h1>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Content;
