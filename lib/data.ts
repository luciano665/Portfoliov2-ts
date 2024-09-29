import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import dinning from "@/public/didi.png";
import insurance from "@/public/insurance.png";
import portfolio from "@/public/portfolio.png"


//Array of links
//Const will not change 
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const; //Typescript feature, able to be more precise, it should be specifically this strings

export const experiencesData = [
  {
    title: "Software Engineer Intern ",
    location: "La Paz, Bolivia",
    description:
      "Develop an RESTFulAPI for task managment system and report generation for departaments across the company uisng Java, develop algorithm for automatic remote work assignation using python and consume endpoint from dispatch to generate automatic Excel reports based of specific requiements.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2024 - July 2024",
  },
  {
    title: "Undergradute Research assistant",
    location: "Morgantown, WV",
    description:
      "Implment a different Machine Learning algorithms for private-key generation based on ECG signals converted in bio-bits. At the same time implement 'masking' using different Deeplearning architectures.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  },
  {
    title: "Tutor of Engineering",
    location: "Morgantown, WV",
    description:
      "Helpin students with science based courses in the Engineering learning center, mainly Calculus 1 through 3 and Introduction to CS and data structure and algorithms.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Dinning review RESTFul API",
    description:
      "Engineered and launched a RESTful API to enhance user experiences in restaurant selection and review management. ",
    tags: ["Java", "Springframework", "H2 database", "Postman"],
    imageUrl: dinning,
  },
  {
    title: "US Insurance cost analysis",
    description:
      "Using csv file from kaggle we explore how gender, smoking status, BMI, the number of children, and regional differences impact insurance premiums",
    tags: ["Python", "Numpy", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    imageUrl: insurance,
  },
  {
    title: "This portfolio",
    description:
      "A portfolio website to show my journey to the internet.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: portfolio,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "PostgreSQL",
  "Python",
  "Java",
  "Tensorflow", 
  "Scikit-learn",
  "Pytorch",
  "Numpy",
  "Pandas", 
  "Mathplotlib",
  "Springframework",
  "Framer Motion",
] as const;