"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigation } from "@/context/NavigationContext";
import { motion } from "framer-motion";

import { yenkoDevWhiteLogo } from "@/assets";
import { navLinks } from "@/constants";

const WorkWithUsButton = ({
  handleLinkClick,
}: {
  handleLinkClick: (
    e:
      | React.MouseEvent<HTMLImageElement, MouseEvent>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string
  ) => void;
}) => {
  return (
    <Link
      href="/contact"
      onClick={(e) => handleLinkClick(e, "/contact")}
      className="bg-blue-400 text-white hover:bg-blue-600 px-4 py-2 rounded-full"
    >
      Work With Us
    </Link>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, handleNavigation } = useNavigation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = (
    e:
      | React.MouseEvent<HTMLImageElement, MouseEvent>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string
  ) => {
    e.preventDefault();
    handleNavigation(path);
  };

  return (
    <nav className="w-full">
      <div className="flex justify-between items-center max-w-7xl m-auto hero-padding">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ delay: 0.1, duration: 1, type: "spring" }}
        >
          <div className="flex items-center justify-center lg:justify-start">
            <Link
              href="/"
              onClick={(e) => handleLinkClick(e, "/")}
              className="cursor-pointer"
            >
              <Image
                src={yenkoDevWhiteLogo}
                alt="yenkodev logo"
                height={45}
                style={{ objectFit: "contain" }}
                className="mb-4"
                onClick={(e) => handleLinkClick(e, "/")}
                priority
              />
            </Link>
          </div>
        </motion.div>

        <div className="hidden lg:flex gap-8 text-gray-500 tracking-tight">
          {navLinks.map((navLink, index) => (
            <motion.li
              key={index}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{
                delay: (index + 1) / 10 + 0.1,
                duration: 1,
                type: "spring",
              }}
              className="cursor-pointer list-none font-semimedium"
            >
              <Link
                href={navLink.href}
                onClick={(e) => handleLinkClick(e, navLink.href)}
              >
                {navLink.title}
              </Link>
            </motion.li>
          ))}
        </div>

        <div className="hidden lg:block">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ delay: 0.7, duration: 1, type: "spring" }}
          >
            <WorkWithUsButton handleLinkClick={handleLinkClick} />
          </motion.div>
        </div>

        <div className="lg:hidden">
          <motion.button
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ delay: 0.1, duration: 1, type: "spring" }}
            onClick={toggleMenu}
          >
            {isOpen ? (
              <FaTimes size={24} className="text-gray-900 mr-2" />
            ) : (
              <FaBars size={24} className="text-gray-900 mr-2" />
            )}
          </motion.button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
            <button
              className="absolute top-8 right-8 text-gray-500"
              onClick={toggleMenu}
            >
              <FaTimes size={24} />
            </button>
            <ul className="flex flex-col items-center gap-8 text-gray-500 text-2xl tracking-tight">
              {navLinks.map((navLink, index) => (
                <motion.li
                  key={index}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{
                    delay: (index + 1) / 10 + 0.1,
                    duration: 1,
                    type: "spring",
                  }}
                  className="cursor-pointer list-none font-semimedium"
                  onClick={() => setIsOpen(false)}
                >
                  <Link
                    href={navLink.href}
                    onClick={(e) => handleLinkClick(e, navLink.href)}
                  >
                    {navLink.title}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="mt-16" onClick={toggleMenu}>
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ delay: 0.7, duration: 1, type: "spring" }}
              >
                <WorkWithUsButton handleLinkClick={handleLinkClick} />
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
