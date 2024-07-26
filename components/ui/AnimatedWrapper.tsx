"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const animations: {
  [key: string]: (
    direction?: string,
    delay?: number,
    duration?: number
  ) => Variants;
} = {
  slideIn: (direction = "up", delay = 0, duration = 1) => ({
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: delay,
        duration: duration,
      },
    },
  }),
  fadeIn: (direction = "up", delay = 0, duration = 1) => ({
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  }),
  zoomIn: (_direction = "", delay = 0, duration = 1) => ({
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  }),
};

type AnimationType = keyof typeof animations;

interface AnimatedWrapperProps {
  animation: AnimationType;
  direction?: string;
  delay?: number;
  duration?: number;
  children: React.ReactNode;
}

export const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  animation,
  direction,
  delay,
  duration,
  children,
}) => {
  const variants = animations[animation](direction, delay, duration);
  return (
    <motion.div initial="hidden" animate="show" variants={variants}>
      {children}
    </motion.div>
  );
};
