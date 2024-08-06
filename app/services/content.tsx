"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BentoGrid, BentoGridItem } from "../../components/ui/ServicesGrid";
import { TechStackMovingCard } from "@/components/ui/TechStackMovingCard";


// import { services } from "@/constants";
import { useContentfulContext } from '@/context/ContenfulContext';
import Image from 'next/image';
import { placeholderImage } from '@/assets';

import {
  frontEndStack,
  backendStack,
  aiMlStack,
  embeddedStack,
  noCodeStack,
} from "@/constants";

const tabs = [
  { title: "Front-End" },
  { title: "Back-End" },
  { title: "AI/ML" },
  { title: "Embedded Systems" },
  { title: "No Code Tools" },
];

const tabContentVariants = {
  initial: { opacity: 0, x: 50, scale: 0.95 },
  animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, x: -50, scale: 0.95, transition: { duration: 0.6 } },
};

const tabButtonVariants = {
  initial: { backgroundColor: "#3b82f6", color: "#ffffff", scale: 1 },
  active: {
    backgroundColor: "#ffffff",
    color: "#3b82f6",
    scale: 1.1,
    transition: { type: "spring", stiffness: 300 },
  },
};

function TechstackGroup({
  techStack,
  direction,
  speed,
}: {
  techStack: any[];
  direction: string;
  speed: string;
}) {
  return (
    <div className="bg-blue-light rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <TechStackMovingCard items={techStack} direction="left" speed="fast" />
    </div>
  );
}

const TabComponent = ({
  tabs,
  activeTab,
  setActiveTab,
  tabContentVariants,
}: {
  tabs: { title: string }[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabContentVariants: any;
}) => (
  <>
    <div className="relative overflow-x-auto no-scrollbar px-4">
      <div className="flex md:justify-center justify-start items-center mb-4 whitespace-nowrap my-4">
        {tabs.map((tab) => (
          <motion.button
            key={tab.title}
            onClick={() => setActiveTab(tab.title)}
            initial="initial"
            animate={activeTab === tab.title ? "active" : "initial"}
            variants={tabButtonVariants}
            className={`px-4 py-2 mr-4 rounded-lg text-sm font-bold relative z-10`}
          >
            {tab.title}
          </motion.button>
        ))}
      </div>
    </div>
    <div className="text-white-light flex justify-center items-center">
      <AnimatePresence mode="wait">
        {activeTab === "Front-End" && (
          <motion.div
            key="front-end"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={tabContentVariants}
          >
            <TechstackGroup
              techStack={frontEndStack}
              direction="left"
              speed="fast"
            />
          </motion.div>
        )}
        {activeTab === "Back-End" && (
          <motion.div
            key="back-end"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={tabContentVariants}
          >
            <TechstackGroup
              techStack={backendStack}
              direction="left"
              speed="fast"
            />
          </motion.div>
        )}
        {activeTab === "AI/ML" && (
          <motion.div
            key="ai-ml"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={tabContentVariants}
          >
            <TechstackGroup
              techStack={aiMlStack}
              direction="left"
              speed="fast"
            />
          </motion.div>
        )}
        {activeTab === "Embedded Systems" && (
          <motion.div
            key="embedded-systems"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={tabContentVariants}
          >
            <TechstackGroup
              techStack={embeddedStack}
              direction="left"
              speed="fast"
            />
          </motion.div>
        )}
        {activeTab === "No Code Tools" && (
          <motion.div
            key="no-code-tools"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={tabContentVariants}
          >
            <TechstackGroup
              techStack={noCodeStack}
              direction="left"
              speed="fast"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </>
);

const Content = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].title);
  const { services } = useContentfulContext();
  return (
    <main className="pb-8">
      <section className="section-layout mx-auto justify-center items-center flex-col overflow-hidden w-full rounded-bl-xl rounded-br-xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2 text-black-light">Services</h1>
          <p className="text-sm text-custom-gray max-w-4xl">
            Discover YenkoDev&rsquo;s range of customized software solutions
            designed to meet your business needs.
          </p>
        </motion.div>

        <BentoGrid className="mx-auto mb-8">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 10 + i * 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 + i * 0.1, type: "spring" }}
            >
              <BentoGridItem
                title={item.fields.serviceTitle}
                description={item.fields.description}
                header={item.fields.coverImage ? (
                  <div className="relative w-full min-h-24">
                    {item.fields.coverImage.map((image: any) => (
                      <Image
                        key={image.fields.file.url}
                        src={`https:${image.fields.file.url}`}
                        alt={image.fields.title}
                        fill
                        style={{ objectFit: 'contain' }}
                        className="rounded-lg"
                      />
                    ))}
                  </div>
                ) : (
                  <div className="relative w-full min-h-24">
                    <Image
                      src={placeholderImage}
                      alt="placeholder image"
                      fill
                      style={{ objectFit: "contain" }}
                      className="rounded-lg"
                      priority
                    />
                  </div>
                )}
                // icon={item.icon}
              />
            </motion.div>
          ))}
        </BentoGrid>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="bg-blue-light py-8 max-w-7xl mx-auto rounded-xl"
      >
        <section className="section-layout mx-auto justify-center items-center flex-col overflow-hidden w-full">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold mb-2 text-white-light">
              Technologies We Use
            </h1>
            <p className="text-sm max-w-4xl text-white-light mb-4">
              Our tech stack includes the latest frameworks, tools, and
              platforms to ensure robust, efficient, and innovative results.
            </p>
          </motion.div>

          <TabComponent
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabContentVariants={tabContentVariants}
          />
        </section>
      </motion.div>
    </main>
  );
};

export default Content;
