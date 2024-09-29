import About from "@/components/about";
import Intro from "@/components/intro";
import Projetcs from "@/components/projetcs";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main
      className="flex flex-col items-center 
    px-4"
    >
      <Intro />
      <SectionDivider />
      <About />
      <Projetcs />
      <Skills />
    </main>
  );
}
