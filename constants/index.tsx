import {
  FaLaptopCode,
  FaMobileAlt,
  FaDesktop,
  FaCogs,
  FaBrain,
  FaMicrochip,
} from "react-icons/fa";

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
} from "@/assets";

// Navbar contents.
export const navLinks = [
  { title: "Services", href: "/services" },
  { title: "Process", href: "/process" },
  { title: "Projects", href: "/projects" },
  { title: "Testimonials", href: "/testimonials" },
  { title: "Team", href: "/team" },
];

// Services page contents.
const Skeleton = () => <></>; // Placeholder for service header.

export const services = [
  {
    title: "Web Development",
    description:
      "Creating responsive and dynamic websites tailored to your needs. We optimize for performance, SEO, and user experience.",
    header: <Skeleton />,
    icon: <FaLaptopCode className="h-8 w-8 text-neutral-500" />,
  },
  {
    title: "Mobile Development",
    description:
      "Building seamless and user-friendly mobile apps for both iOS and Android. Our apps are visually appealing and intuitive.",
    header: <Skeleton />,
    icon: <FaMobileAlt className="h-8 w-8 text-neutral-500" />,
  },
  {
    title: "Desktop Development",
    description:
      "Developing robust and efficient desktop applications for various platforms. We ensure your applications are secure and scalable.",
    header: <Skeleton />,
    icon: <FaDesktop className="h-8 w-8 text-neutral-500" />,
  },
  {
    title: "AI/ML Development",
    description:
      "Leveraging AI and machine learning to create innovative solutions. We build predictive models, NLP, and computer vision applications.",
    header: <Skeleton />,
    icon: <FaBrain className="h-8 w-8 text-neutral-500" />,
  },
  {
    title: "Embedded Systems",
    description:
      "Developing advanced embedded systems using platforms like Arduino and Raspberry Pi. We handle hardware design and system integration.",
    header: <Skeleton />,
    icon: <FaMicrochip className="h-8 w-8 text-neutral-500" />,
  },
  {
    title: "Custom Software Development",
    description:
      "Designing custom software solutions to meet your unique business requirements. We collaborate closely with you to achieve your goals.",
    header: <Skeleton />,
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
  { title: "Python", image: "" },
  { title: "TensorFlow", image: "" },
  { title: "OpenCV", image: "" },
  { title: "YOLO", image: "" },
  { title: "Mediapipe", image: "" },
];

export const embeddedStack = [
  { title: "C++", image: "" },
  { title: "Arduino", image: "" },
  { title: "Raspberry Pi", image: "" },
  { title: "ESP32", image: "" },
];

export const noCodeStack = [
  { title: "Shopify", image: "" },
  { title: "Bubble IO", image: "" },
  { title: "Zapier", image: "" },
];
