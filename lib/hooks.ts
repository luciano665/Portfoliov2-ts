import { useActiveSectionContext } from "@/context/active-section";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react"
import { SectionName } from "./types";



export function useSectionInView(sectionName: SectionName, threshold=0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
