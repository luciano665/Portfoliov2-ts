"use client"; //to activate framer morion since is using teh useeffect froom reatc

import React, { useEffect } from "react";
import img from "@/public/img.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      className="mb-28 mx-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
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
        className="mb-10 mt-4 px-4, text2x1 font-medium 
      !leading-[1.5] sm:text-4x1"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {" "}
        {/*The !leading is to overwrite the rules */}
        <span className="font-bold"> Hello there, My name Luciano</span>
        I'm a <span className="font-bold"> undergraduate student</span> pursuing
        a <span className="font-bold">Computer Science</span> major. I enjoy
        learning about new technologies and apply them into real life
        circustances and{" "}
        <span className="font-bold">solve problems with tech </span>
        Especially working with AI, specificly using{" "}
        <span className="font-bold">deeplearning and LLMs.</span> I have
        considerable proficiency using{" "}
        <span className="font-bold"> pyhton and Java.</span>
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
        {/* sm = small devices in tailwind */}
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex 
        items-center gap-2 rounded-full outline-none 
        focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
        transition"
        >
          Contact me header
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
        focus:scale-110 hover:scale-110  active:scale-105
        transition cursor-pointer border border-black/10"
          href=""
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-y transition" />
        </a>
        <a
          className=" bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 
        rounded-full focus:scale-110 hover:scale-110  active:scale-105
        transition cursor-pointer border border-black/10"
          href="https://www.linkedin.com/in/luciano-maldonado-2129a520b"
          target="blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 
        text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105
        transition cursor-pointer border border-black/10"
          href=""
          target="blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
