"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatedWrapper } from "./ui/AnimatedWrapper";

import { yenkoDevWhiteLogo } from "@/assets";
import { navLinks } from "@/constants";

const WorkWithUsButton = () => {
  return (
    <a
      href="#contact"
      className="bg-gray-800 text-white hover:bg-gray-900 px-4 py-2 rounded-2xl"
    >
      Work With Us
    </a>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <nav className="w-full">
      <div className="flex justify-between items-center max-w-7xl m-auto py-8 px-4">
        <AnimatedWrapper
          animation="slideIn"
          direction="up"
          delay={0.1}
          duration={1}
        >
          <div className="flex items-center justify-center lg:justify-start">
            <a href="/" className="cursor-pointer">
              <Image
                src={yenkoDevWhiteLogo}
                alt="yenkodev logo"
                height={45}
                objectFit="contain"
                className="mb-4"
              />
            </a>
          </div>
        </AnimatedWrapper>

        <div className="hidden lg:flex gap-8 text-gray-500 tracking-tight">
          {navLinks.map((navLink, index) => (
            <AnimatedWrapper
              key={index}
              animation="slideIn"
              direction="up"
              delay={(index + 1) / 10 + 0.1}
              duration={1}
            >
              <li className="cursor-pointer list-none font-semimedium">
                <a href={navLink.href}>{navLink.title}</a>
              </li>
            </AnimatedWrapper>
          ))}
        </div>

        <div className="hidden lg:block">
          <AnimatedWrapper
            animation="slideIn"
            direction="up"
            delay={0.7}
            duration={1}
          >
            <WorkWithUsButton />
          </AnimatedWrapper>
        </div>

        <div className="lg:hidden">
          <AnimatedWrapper
            animation="slideIn"
            direction="right"
            delay={0.1}
            duration={1}
          >
            <button onClick={toggleMenu}>
              {isOpen ? (
                <FaTimes size={24} className="text-gray-900" />
              ) : (
                <FaBars size={24} className="text-gray-900" />
              )}
            </button>
          </AnimatedWrapper>
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
                <AnimatedWrapper
                  key={index}
                  animation="slideIn"
                  direction="up"
                  delay={(index + 1) / 10 + 0.1}
                  duration={1}
                >
                  <li className="cursor-pointer list-none font-semimedium">
                    <a href={navLink.href}>{navLink.title}</a>
                  </li>
                </AnimatedWrapper>
              ))}
            </ul>

            <div className="mt-16" onClick={toggleMenu}>
              <AnimatedWrapper
                animation="slideIn"
                direction="up"
                delay={0.7}
                duration={1}
              >
                <WorkWithUsButton />
              </AnimatedWrapper>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;