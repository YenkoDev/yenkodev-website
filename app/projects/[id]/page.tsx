"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useContext } from 'react';
import { ContentfulContext } from '@/context/ContenfulContext';
import { placeholderImage } from '@/assets';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa'; // Importing an icon for the back button

const ProjectDetails: React.FC = () => {
  const router = useRouter();
  const { id } = useParams();
  const { projects } = useContext(ContentfulContext);

  const project = projects.find((project) => project.sys.id === id);

  if (!project) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p className="text-lg text-red-500">Project not found</p>
        <button
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 bg-blue-light text-white rounded-full shadow-lg hover:bg-blue-dark transition duration-200 flex items-center"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>
      </div>
    );
  }

  const techBadges = (project.fields.technologiesUsed || []).map((tech: string, index: number) => (
    <motion.span 
      key={index} 
      className="bg-blue-light text-white rounded-full text-xs px-3 py-1 mr-2 mb-2 inline-block"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      {tech}
    </motion.span>
  ));

  return (
    <div className="section-layout mx-auto p-4 sm:p-6">
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 bg-blue-light text-white rounded-full shadow-lg hover:bg-blue-dark transition duration-200 flex items-center"
      >
        <FaArrowLeft className="mr-2" />
        Back
      </button>
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg space-y-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            className="relative w-full h-60 sm:h-80 lg:h-96"
          >
            {project.fields.coverImage ? (
              <div className="mb-4 relative w-full h-full">
                {project.fields.coverImage.map((image) => (
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
              <div className="mb-4 relative w-full h-full">
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
          </motion.div>

          <div className="space-y-4 flex flex-col justify-start items-left">
            <motion.h1 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.4 }} 
              className="text-2xl sm:text-4xl font-extrabold text-gray-800 dark:text-white"
            >
              {project.fields.title}
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.6 }} 
              className="bg-black-light text-white rounded-full text-xs w-fit px-4 py-1 uppercase tracking-wider"
            >
              {project.fields.category}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.8 }} 
              className="text-sm text-custom-gray dark:text-gray-300 mb-4"
            >
              {project.fields.description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5, delay: 1 }} 
              className="mt-4"
            >
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Technologies Used</h3>
              <div className="flex flex-wrap">
                {techBadges}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;