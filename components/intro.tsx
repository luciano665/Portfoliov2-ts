"use client"; // to activate framer motion since it is using the useEffect from React

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/img.jpg"
              alt="Luciano portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover 
              border-[0.35rem] shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium 
      !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {" "}
        {/* The !leading is to overwrite the rules */}
        <span className="font-bold">Hello there, my name is Luciano.</span> I am
        an <span className="font-bold">undergraduate student</span> pursuing a{" "}
        <span className="font-bold">Computer Science</span> major. I enjoy
        learning about new technologies and applying them to real-life scenarios
        and <span className="font-bold">solving problems with tech.</span>{" "}
        Especially working with AI, specifically using{" "}
        <span className="font-bold">deep learning and LLMs.</span> I have
        considerable proficiency using{" "}
        <span className="font-bold">Python and Java.</span>
      </motion.h1>

      <motion.div
        className="group flex flex-col sm:flex-row items-center 
      justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {" "}
        {/* sm = small devices in Tailwind */}
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex 
        items-center gap-2 rounded-full outline-none 
        focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
        transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
        focus:scale-110 hover:scale-110 active:scale-105
        transition cursor-pointer border-black dark:bg-white/10"
          href="https://drive.google.com/file/d/1SmYn1LMmXwnn7nqYxOMIFgJUJy-NJEoR/view?usp=sharing"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 
        rounded-full focus:scale-110 hover:scale-110 active:scale-105
        transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/luciano-maldonado-2129a520b"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 
        text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105
        transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"
          href="https://github.com/luciano665"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
