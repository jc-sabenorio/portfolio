import "./App.css";
import "./styles/navbar.css";
// import Navbar from "./components/Navbar/Navbar";
import IntroSection from "./components/Introduction/IntroSection";
import { useState, useEffect } from "react";
import RoleSection from "./components/Role/RoleSection";
import ProjectsSection from "./components/Projects/ProjectsSection";
import SkillsSection from "./components/Skills/SkillsSection";
import ExperienceSection from "./components/experience/ExperienceSection";
import Footer from "./components/Footer/Footer";
import { sectionContext } from "@/contexts/sectionContext.ts";
import { ThemeContext } from "@/contexts/ThemeContext";
import useLocalStorage from "@/hooks/useLocalStorage";
import Navbar from "./components/Navbar/Navbar";
// import ActionButton from "./components/ActionButton";

function App() {
  const [activeSection, setActiveSection] = useState("intro-section");
  const [isDarkMode, setIsDarkMode] = useLocalStorage("isDarkMode", false);
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("active:", entry.target.id);
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
  }, []);
  return (
    <>
      <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <sectionContext.Provider value={{ activeSection, setActiveSection }}>
          <main
            className={`${
              isDarkMode ? "bg-gray-800" : "bg-amber-50"
            } transition-colors duration-300 min-h-screen relative`}
          >
            <div className="flex flex-col md:flex-row h-full justify-center gap-3">
              <div className="w-full sticky top-0 md:hidden">
                <Navbar />
              </div>
              <IntroSection />
              <div className="flex flex-col scroll-smooth basis-1/2 p-3 mx-4">
                {/* Intro Div */}

                <RoleSection />

                <ProjectsSection />

                <SkillsSection />

                <ExperienceSection />
                <Footer />
              </div>
            </div>
          </main>
          {/* <ActionButton /> */}
        </sectionContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
