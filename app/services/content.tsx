"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BentoGrid, BentoGridItem } from "../../components/ui/BentoGrid";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

import { services } from "@/constants";
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
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const tabButtonVariants = {
  initial: { backgroundColor: "#3b82f6", color: "#ffffff" },
  active: { backgroundColor: "#ffffff", color: "#3b82f6" },
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
    <div className="bg-blue-light rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={techStack} direction="left" speed="fast" />
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
      <div className="flex md:justify-center justify-start items-center mb-4 whitespace-nowrap">
        {tabs.map((tab) => (
          <motion.button
            key={tab.title}
            onClick={() => setActiveTab(tab.title)}
            initial="initial"
            animate={activeTab === tab.title ? "active" : "initial"}
            variants={tabButtonVariants}
            className={`px-4 py-2 mr-2 rounded-lg text-sm font-bold relative z-10`}
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
          <motion.p
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
          </motion.p>
        )}
        {activeTab === "AI/ML" && (
          <motion.p
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
          </motion.p>
        )}
        {activeTab === "Embedded Systems" && (
          <motion.p
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
          </motion.p>
        )}
        {activeTab === "No Code Tools" && (
          <motion.p
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
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  </>
);

const Content = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].title);

  return (
    <main className="pb-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section className="section-layout mx-auto justify-center items-center flex-col overflow-hidden w-full rounded-bl-xl rounded-br-xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-black-light">
              Services
            </h1>
            <p className="text-sm text-custom-gray max-w-4xl">
              Discover YenkoDev&rsquo;s range of customized software solutions
              designed to meet your business needs.
            </p>
          </div>

          <BentoGrid className="mx-auto mb-8">
            {services.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </section>

        <div className="bg-blue-light py-8 max-w-7xl mx-auto rounded-xl">
          <section className="section-layout mx-auto justify-center items-center flex-col overflow-hidden w-full">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2 text-white-light">
                Technologies We Use
              </h1>
              <p className="text-sm max-w-4xl text-white-light mb-4">
                Our tech stack includes the latest frameworks, tools, and
                platforms to ensure robust, efficient, and innovative results.
              </p>
            </div>

            <TabComponent
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabContentVariants={tabContentVariants}
            />
          </section>
        </div>
      </motion.div>
    </main>
  );
};

export default Content;