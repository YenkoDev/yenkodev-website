"use client";

import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { ContentfulContext } from "@/context/ContenfulContext";

const Content: React.FC = () => {
  const { projects, categories } = useContext(ContentfulContext);
  const itemsPerPage = 3; // Adjust the number of items per page here
  const [currentPage, setCurrentPage] = useState(1);

  console.log(categories);

  // Calculate the total number of pages
  const totalPages = Math.ceil(projects.length / itemsPerPage);

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

  return (
    <main className="section-layout p-4">
 
   
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {paginatedProjects.map((project: any, index: number) => (
            <motion.div
              key={project.sys.id}
              className="project-item bg-white shadow-lg rounded-lg overflow-hidden"
            
      
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y:100}}
              transition={{ duration: 0.5 + index/10  }}
            
            >
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{project.fields.title}</h2>
                <p className="text-gray-700 mb-4">{project.fields.shortText}</p>
                {project.fields.coverImage && (
                  <div className="mb-4">
                    {project.fields.coverImage.map((image: any) => (
                      <img
                        key={image.sys.id}
                        src={image.fields.file.url}
                        alt={image.fields.title}
                        className="w-full h-48 object-cover rounded"
                      />
                    ))}
                  </div>
                )}
                {/* <div className="mb-4">
                  <h3 className="font-bold">Clients</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {project.fields.clients?.map((client: string, index: number) => (
                      <li key={index}>{client}</li>
                    ))}
                  </ul>
                </div> */}
                {/* <div className="mb-4">
                  <h3 className="font-bold">Category</h3>
                  <p className="text-gray-700">{project.fields.category}</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold">Objectives / Goals / Purpose</h3>
                  <p className="text-gray-700">{project.fields.objectivesGoalsPurpose}</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold">Technologies Used</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {project.fields.technologiesUsed?.map((tech: string, index: number) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div> */}
                <div className="mb-4">
                  {/* <h3 className="font-bold">Description</h3> */}
                  <p className="text-gray-700">{project.fields.description}</p>
                </div>
              </div>
            </motion.div >
          
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <nav className="inline-flex">
            <button
              className="px-3 py-1 mx-1 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                className={`px-3 py-1 mx-1 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  currentPage === page ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => page !== "..." && setCurrentPage(page as number)}
              >
                {page}
              </button>
            ))}
            <button
              className="px-3 py-1 mx-1 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </nav>
        </div>
   
    </main>
  );
};

export default Content;
