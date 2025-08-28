import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

// IMAGES\
const dinning = "/didi.png";
const ML = "/ML-churn.png";
const resnet = "/resnet.png";
const agent = "/AI-AGENT.png";
const rag = "/RAG-CODEBASE-APP-PORTFOLIO.png";
const todo = "/AI-TODO-LIST.png";

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
    title: "Student at West Virginia University",
    location: "Morgantown, WV",
    description:
      "Majoring in Computer Science with a minor in Applied Mathematics",
    icon: LuGraduationCap,
    date: "2023 - Present",
  },

  {
    title: "Undergraduate Teaching assistant",
    location: "Morgantown, WV",
    description:
      "Help instructors from the Communication Deparment for the class 'Group Communication'. Assist student with a comprehensive evaluation for projects, providing detailed feedback, and helping with any concerns regarding the subject",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },

  {
    title: "Software Engineer Intern ",
    location: "La Paz, Bolivia",
    description:
      "Develop an RESTFulAPI for task managment system and report generation for departaments across the company uisng Java, develop algorithm for automatic remote work assignation using python and consume endpoint from dispatch to generate automatic Excel reports based of specific requiements.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },

  {
    title: "Undergradute Research assistant",
    location: "Morgantown, WV",
    description:
      "Implement different Machine Learning algorithms and Deeplearning techniques for private-key generation based on ECG signals converted in bio-bits. Custom architecture inspired on ResNet from Stanford ML group.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  },
  {
    title: "Tutor of Engineering",
    location: "Morgantown, WV",
    description:
      "Helping students with science based courses in the Engineering learning center, mainly Calculus 1 through 3 and Introduction to CS and data structure and algorithms.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
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
    title: "Customer Churn Prediction with ML",
    description:
      "Developed an end-to-end customer churn prediction system, incorporating machine learning, a web app with real-time inference, LLM-based insights, personalized email generation, and scalable AWS deployment with Docker.",
    tags: ["Numpy", "Pandas", "Streamlit", "Grok-API", "AWS", "Docker"],
    imageUrl: ML,
  },
  {
    title: "Brain tumor classification",
    description:
      "In this project, I developed a deep learning-based system for brain tumor classification using medical image data to accurately identify and categorize tumor types,",
    tags: ["Tensorflow", "Scikit-learn", "Stremalit", "Python", "Gemini-Flash"],
    imageUrl: resnet,
  },

  {
    title: "AI-AGENT Repository Analyzer",
    description:
      "Implement a pyhton parser to examine Pull request using Abstract Syntax Tree (AST) parsing. In order to give the AI more insightful input, the parser determines the greatest enclosing context for code suggestions.",
    tags: ["Typescript", "Next.js", "Tree-sitter", "GitHub-apps"],
    imageUrl: agent,
  },

  {
    title: "Codebase Analysis Web App",
    description:
      "Developed a scalable web app for dynamic repository cloning, code analysis with Tree-sitter, embedding storage via Pinecone, and RAG workflows.",
    tags: ["Gradio", "Tree-sitter", "FastAPI", "Pinecone", "Hugging Face"],
    imageUrl: rag,
  },

  {
    title: "AI To-Do List Application",
    description:
      "A Next.js-based to-do list app with user authentication and dynamic task management.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Convex", "React"],
    imageUrl: todo,
  },
  {
    title: "Agentic AI customer support",
    description:
      "Developed an agentic AI customer support system using Python, Langchain, and OpenAI to provide real-time, context-aware responses to customer inquiries.",
    tags: ["Python", "Langchain", "OpenAI", "FastAPI", "LangGraph"],
    imageUrl: agent,
  }
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
  "H2 data base engine",
] as const;
