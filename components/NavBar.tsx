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
  additionalClassName = "",
}: {
  handleLinkClick: (
    e:
      | React.MouseEvent<HTMLImageElement, MouseEvent>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string
  ) => void;
  additionalClassName: string;
}) => {
  return (
    <Link
      href="/contact"
      onClick={(e) => handleLinkClick(e, "/contact")}
      className={`bg-blue-light text-white-light hover:bg-blue-dark px-4 py-2 rounded-full ${additionalClassName}`}
    >
      Work With Us
    </Link>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleNavigation } = useNavigation();

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
    <nav className="flex justify-between items-center max-w-7xl mx-auto md:px-8 py-8 px-4 overflow-hidden">
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

      <div className="hidden lg:flex gap-8 text-custom-gray tracking-tight">
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
            className="cursor-pointer list-none text-lg"
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
          <WorkWithUsButton
            handleLinkClick={handleLinkClick}
            additionalClassName=""
          />
        </motion.div>
      </div>

      <div className="lg:hidden">
        {!isOpen && (
          <button onClick={toggleMenu}>
            <FaBars size={24} className="text-black-light mr-2" />
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 100, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ delay: 0, duration: 1, type: "spring" }}
        >
          <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-white-light">
            <button
              className="absolute top-12 right-6 text-custom-gray"
              onClick={toggleMenu}
            >
              <FaTimes size={24} />
            </button>
            <ul className="flex flex-col items-center gap-8 text-custom-gray text-2xl tracking-tight">
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
                <WorkWithUsButton
                  handleLinkClick={handleLinkClick}
                  additionalClassName="text-xl"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
