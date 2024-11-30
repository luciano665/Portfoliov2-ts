"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 mx-w-[45rem] text-center leading-8 sm:sb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Currently a student at West Virginia University,{" "}
        <span className="font-medium">
          majoring in Computer Science and minoring in Applied Mathematics
        </span>
        , I decided to pursue my passion for computers and numbers. I am
        constantly learning new technologies as well as{" "}
        <span className="font-medium">
          applying this new knowledge in projects
        </span>
        . <span className="italic">I love</span> the problem-solving aspect. I
        am <span className="underline">addicted</span>, in a good way, to the
        feeling of finally figuring out a solution to a problem. I am currently
        looking for{" "}
        <span className="font-medium">
          internships as a Software Engineer, Research Intern, or Data Engineer.
        </span>{" "}
        I plan to become an ML Engineer by continuously researching and applying
        new ideas to help my community. During this year, I have found a passion
        for research, and I really want to pursue this passion in the upcoming
        years in academia and, in the near future, hopefully get a PhD.
      </p>
      <p>
        <span className="italic">When I have free time</span>, I enjoy playing
        video games, watching movies, and reading books. I'm also planning to
        start a technical blog soon about the things I'm learning. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">
          the more in-depth workings of deep learning algorithms
        </span>
        . I am also learning how GANs and GNNs work.
      </p>
    </motion.section>
  );
}
