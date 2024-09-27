import React from "react";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <section className="mb-28 mx-w-[45rem] text-center leading-8 sm:sb-40">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Currently a student at West Viginia University{" "}
        <span className="font-medium">
          Computer Science Major and Applied Mathematics minor
        </span>
        , I decided to pursue my passion for computers and numbers. I'm
        constantly learning new technologies as well{" "}
        <span className="font-medium">
          applying this new knowledge in projects
        </span>
        . <span className="italic">I love </span> the problem-solving aspect.
        I'm <span className="underline">addicted</span> in a good way to the
        feeling of finally figuring out a solution to a problem. I'm proficient
        using <span className="font-medium">Python and Java.</span>
        Pyhton for ML applications and Java more for backend. I am also familiar
        with front-end development using TypeScript and Tailwind CSS.However, I
        am always looking to learn new technologies. I am currently looking for{" "}
        <span className="font-medium">
          interships for SWE, Research student or Data engineer.
        </span>{" "}
        I plan to become a ML engineer by continously researching and applpying
        new ideas to help my community.
      </p>
      <p>
        <span className="italic">When I have free time </span>, I enjoy playing
        video games, watching movies, and read books. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">
          {" "}
          more in depth workings of Deeplearning algorithms
        </span>
        . I'm also learning how GANs and GNNs work.
      </p>
    </section>
  );
}