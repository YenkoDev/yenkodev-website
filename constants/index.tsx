import {
  FaLaptopCode,
  FaMobileAlt,
  FaDesktop,
  FaCogs,
  FaBrain,
  FaMicrochip,
  FaDiscord,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { FaUpwork } from "react-icons/fa6";

import {
  javascriptLogo,
  reactLogo,
  reactNativeLogo,
  nextJSLogo,
  tailwindLogo,
  framerLogo,
  pythonLogo,
  nodeJSLogo,
  djangoLogo,
  fastAPILogo,
  firebaseLogo,
  supabaseLogo,
  tensorflowLogo,
  opencvLogo,
  cppLogo,
  arduinoLogo,
  raspberryPiLogo,
  esp32Logo,
  shopifyLogo,
  bubbleIOLogo,
  zapierLogo,
} from "@/assets";

// Navbar contents.
export const navLinks = [
  { title: "Services", href: "/services" },
  { title: "Process", href: "/process" },
  { title: "Projects", href: "/projects" },
  { title: "Testimonials", href: "/testimonials" },
  { title: "Team", href: "/team" },
];

// Homepage contents.
const AboutSkeleton = () => <div className=""></div>; // Placeholder for about header.

export const aboutList = [
  {
    title: "How It Started",
    description:
      "YenkoDev was founded by a group of freelance students passionate about software development. What began as a series of freelance projects has grown into a dynamic software development company. Initially serving local clients, we have expanded our reach to include international clients, providing cutting-edge solutions across the globe.",
    header: <AboutSkeleton />,
    className: "md:col-span-3",
  },
  {
    title: "We Are Diverse",
    description:
      "YenkoDev pride ourselves on our versatility and ability to excel in multiple areas of technology. Our diverse expertise allows us to deliver comprehensive solutions that cater to a wide range of industries and technological needs.",
    header: <AboutSkeleton />,
    className: "md:col-span-2",
  },
  {
    title: "Our Vision",
    description:
      "YenkoDev vision to be a global leader in software development, recognized for our commitment to excellence, innovation, and the ability to deliver exceptional results. We aim to empower businesses by transforming ideas into cutting-edge software solutions that drive growth and efficiency.",
    header: <AboutSkeleton />,
    className: "md:col-span-2",
  },
  {
    title: "End-to-End Support",
    description:
      "YenkoDev provide comprehensive support throughout the entire lifecycle of your project. From initial consultation and planning to development, deployment, and ongoing maintenance, our dedicated team ensures that your software solutions continue to meet your evolving needs and drive your business success.",
    header: <AboutSkeleton />,
    className: "md:col-span-3",
  },
];

// Services page contents.
const ServiceSkeleton = () => <></>; // Placeholder for service header.

export const services = [
  {
    title: "Web Development",
    description:
      "Creating responsive and dynamic websites tailored to your needs. We optimize for performance, SEO, and user experience.",
    header: <ServiceSkeleton />,
    icon: <FaLaptopCode className="h-8 w-8 text-neutral-500" />,
  },
  {
    title: "Mobile Development",
    description:
      "Building seamless and user-friendly mobile apps for both iOS and Android. Our apps are visually appealing and intuitive.",
    header: <ServiceSkeleton />,
    icon: <FaMobileAlt className="h-8 w-8 text-neutral-500" />,
  },
  {
    title: "Desktop Development",
    description:
      "Developing robust and efficient desktop applications for various platforms. We ensure your applications are secure and scalable.",
    header: <ServiceSkeleton />,
    icon: <FaDesktop className="h-8 w-8 text-neutral-500" />,
  },
  {
    title: "AI/ML Development",
    description:
      "Leveraging AI and machine learning to create innovative solutions. We build predictive models, NLP, and computer vision applications.",
    header: <ServiceSkeleton />,
    icon: <FaBrain className="h-8 w-8 text-neutral-500" />,
  },
  {
    title: "Embedded Systems",
    description:
      "Developing advanced embedded systems using platforms like Arduino and Raspberry Pi. We handle hardware design and system integration.",
    header: <ServiceSkeleton />,
    icon: <FaMicrochip className="h-8 w-8 text-neutral-500" />,
  },
  {
    title: "Custom Software Development",
    description:
      "Designing custom software solutions to meet your unique business requirements. We collaborate closely with you to achieve your goals.",
    header: <ServiceSkeleton />,
    icon: <FaCogs className="h-8 w-8 text-neutral-500" />,
  },
];

export const frontEndStack = [
  { title: "JavaScript", image: javascriptLogo },
  { title: "React", image: reactLogo },
  { title: "React Native", image: reactNativeLogo },
  { title: "Next JS", image: nextJSLogo },
  { title: "Tailwind", image: tailwindLogo },
  { title: "Framer", image: framerLogo },
];

export const backendStack = [
  { title: "Python", image: pythonLogo },
  { title: "Node JS", image: nodeJSLogo },
  { title: "Django", image: djangoLogo },
  { title: "Fast API", image: fastAPILogo },
  { title: "Firebase", image: firebaseLogo },
  { title: "Supabase", image: supabaseLogo },
];

export const aiMlStack = [
  { title: "Python", image: pythonLogo },
  { title: "TensorFlow", image: tensorflowLogo },
  { title: "OpenCV", image: opencvLogo },
];

export const embeddedStack = [
  { title: "C++", image: cppLogo },
  { title: "Python", image: pythonLogo },
  { title: "Arduino", image: arduinoLogo },
  { title: "Raspberry Pi", image: raspberryPiLogo },
  { title: "ESP32", image: esp32Logo },
];

export const noCodeStack = [
  { title: "Shopify", image: shopifyLogo },
  { title: "Bubble IO", image: bubbleIOLogo },
  { title: "Zapier", image: zapierLogo },
];

// Process page contents.
const process = [
  {
    title: "Initial Consultation",
    description:
      "We start with an initial consultation to understand your business requirements and objectives. During this meeting, we discuss your project ideas, goals, and any specific needs you may have. This helps us gain a clear understanding of your vision and how we can help bring it to life.",
  },
  {
    title: "Planning & Proposal",
    description:
      "After understanding your requirements, our team conducts a thorough analysis and creates a detailed project plan. This includes timelines, milestones, and a cost estimate. We then present you with a comprehensive proposal outlining the project scope, deliverables, and development strategy.",
  },
  {
    title: "Design & Development",
    description:
      "Once the proposal is approved, our talented designers and developers get to work. We create intuitive and visually appealing designs that align with your brand identity. Our development team then builds robust, scalable, and secure software using the latest technologies and best practices.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Quality is a top priority at YenkoDev. We conduct rigorous testing throughout the development process to ensure the software is free of bugs and performs optimally. Our quality assurance team performs various tests, including functional, usability, performance, and security testing, to deliver a flawless product.",
  },
  {
    title: "Deployment & Support",
    description:
      "After thorough testing and your final approval, we deploy the software to your desired platform. Our team ensures a smooth and seamless transition. Post-deployment, we provide ongoing support and maintenance to address any issues, perform updates, and ensure the software continues to meet your evolving needs.",
  },
];

// Footer contents.

export const socialMedia = [
  {
    href: "https://www.upwork.com/agencies/yenkodev/",
    icon: <FaUpwork />,
    alt: "Upwork",
  },
  {
    href: "https://discord.gg/aXqQhK3CjC",
    icon: <FaDiscord />,
    alt: "Discord",
  },
  { href: "https://linkedin.com", icon: <FaLinkedin />, alt: "LinkedIn" },
  { href: "https://github.com/YenkoDev", icon: <FaGithub />, alt: "GitHub" },
];

export const footerLinks = [
  { name: "Services", link: "/services" },
  { name: "Process", link: "/process" },
  { name: "Projects", link: "/projects" },
  { name: "Testimonials", link: "/testimonials" },
  { name: "Team", link: "/team" },
];
