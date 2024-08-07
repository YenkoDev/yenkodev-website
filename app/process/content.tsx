"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Content = () => {
  return (
    <main className="mb-4">
      <section className="section-layout mx-auto justify-center items-center flex-col overflow-hidden w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2 text-black-light">
            Our Process
          </h1>
          <p className="text-sm text-custom-gray max-w-4xl">
            At YenkoDev, we believe in a structured yet flexible approach to
            software development. Our five-step process ensures that we deliver
            high-quality, customized solutions that meet your business needs.
          </p>
        </motion.div>

        <ProcessGrid />
      </section>
    </main>
  );
};

function ProcessGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {ourProcess.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          key={`content-${index}`}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="bg-black-light font-bold text-white rounded-full text-sm w-fit px-4 py-1 mb-4 flex items-center">
            {item.icon} Step {index + 1}
          </h2>

          <h3 className="font-bold text-black-light text-lg mb-2">
            {item.title}
          </h3>

          <div className="text-sm prose prose-sm dark:prose-invert text-custom-gray mb-4">
            <p>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const ourProcess = [
  {
    title: "Initial Consultation",
    description:
      "We start with an initial consultation to understand your business requirements and objectives. During this meeting, we discuss your project ideas, goals, and any specific needs you may have. This helps us gain a clear understanding of your vision and how we can help bring it to life.",
    icon: "💬",
    image: "/images/consultation.jpg", // Replace with the actual path to your image
  },
  {
    title: "Planning & Proposal",
    description:
      "After understanding your requirements, our team conducts a thorough analysis and creates a detailed project plan. This includes timelines, milestones, and a cost estimate. We then present you with a comprehensive proposal outlining the project scope, deliverables, and development strategy.",
    icon: "📝",
    image: "/images/planning.jpg", // Replace with the actual path to your image
  },
  {
    title: "Design & Development",
    description:
      "Once the proposal is approved, our talented designers and developers get to work. We create intuitive and visually appealing designs that align with your brand identity. Our development team then builds robust, scalable, and secure software using the latest technologies and best practices.",
    icon: "🎨",
    image: "/images/development.jpg", // Replace with the actual path to your image
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Quality is a top priority at YenkoDev. We conduct rigorous testing throughout the development process to ensure the software is free of bugs and performs optimally. Our quality assurance team performs various tests, including functional, usability, performance, and security testing, to deliver a flawless product.",
    icon: "🔍",
    image: "/images/testing.jpg", // Replace with the actual path to your image
  },
  {
    title: "Deployment & Support",
    description:
      "After thorough testing and your final approval, we deploy the software to your desired platform. Our team ensures a smooth and seamless transition. Post-deployment, we provide ongoing support and maintenance to address any issues, perform updates, and ensure the software continues to meet your evolving needs.",
    icon: "🚀",
    image: "/images/deployment.jpg", // Replace with the actual path to your image
  },
];

export default Content;
