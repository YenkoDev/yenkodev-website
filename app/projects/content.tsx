"use client";

import React, { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/ProjectsGrid";
import { ContentfulContext, useContentfulContext } from "@/context/ContenfulContext";

const Content: React.FC = () => {
  const { projects, categories } = useContentfulContext();
  const itemsPerPage = 6; // Adjust the number of items per page here
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setTotalPages(Math.ceil(projects.length / itemsPerPage));
  }, [projects]);

  // Get the projects for the current page
  const paginatedProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getPageNumbers = () => {
    const maxPagesToShow = 5;
    let pages = [];

    if (totalPages <= maxPagesToShow) {
      pages = [...Array(totalPages).keys()].map((n) => n + 1);
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, 4, "...", totalPages];
      } else if (currentPage >= totalPages - 2) {
        pages = [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      } else {
        pages = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
      }
    }

    return pages;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="section-layout mx-auto justify-center items-center flex-col overflow-hidden w-full mb-8">   
      <BentoGrid className="mx-auto mb-8">
        <AnimatePresence key={currentPage}>
          {paginatedProjects.map((item, i) => (
            <motion.div
              key={item.sys.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <BentoGridItem
                id={item.sys.id}
                title={item.fields.title}
                coverImage={item.fields.coverImage}
                description={item.fields.description}
                clients={item.fields.clients}
                category={item.fields.category}
                objectivesGoalsPurpose={item.fields.objectivesGoalsPurpose}
                technologiesUsed={item.fields.technologiesUsed}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </BentoGrid>
  
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <nav className="flex gap-2">
            {currentPage > 1 && (
              <button
                className="px-3 py-1 bg-blue-light rounded-md hover:bg-blue-dark text-white-light text-sm"
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                  scrollToTop();
                }}
              >
                Prev
              </button>
            )}
            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                className={`px-2 py-1 bg-white-light rounded-md hover:bg-blue-dark hover:text-white-light text-sm ${
                  currentPage === page ? "border-2 border-blue-light" : ""
                }`}
                onClick={() => {
                  if (page !== "...") {
                    setCurrentPage(page as number);
                    scrollToTop();
                  }
                }}
              >
                {page}
              </button>
            ))}
            {currentPage < totalPages && (
              <button
                className="px-3 py-1 bg-blue-light rounded-md hover:bg-blue-dark text-white-light text-sm"
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                  scrollToTop();
                }}
              >
                Next
              </button>
            )}
          </nav>
        </div>
      )}
    </main>
  );
};

export default Content;
