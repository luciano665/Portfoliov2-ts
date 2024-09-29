"use client";
import React, { createContext, useContext, useState } from "react";
import { SectionName } from "@/lib/types";
/*To get the active sectio automaticaly from scrool and update the navbar*/

//type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextProviderProps = { children: React.ReactNode };
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); //keep track of this to disable the observer temporarly onclick
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useactive section must be used within a ActiveSectionProvider"
    );
  }
  return context;
}
