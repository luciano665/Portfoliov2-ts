import About from "@/components/about";
import Intro from "@/components/intro";
import Project from "@/components/project";
import Projetcs from "@/components/projetcs";
import SectionDivider from "@/components/section-divider";

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
    </main>
  );
}
