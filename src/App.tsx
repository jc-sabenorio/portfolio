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
import { gsap } from "gsap";
import BokehBackgroundDemo from "./components/Background";

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
      { threshold: 0.4 },
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  useEffect(() => {
    gsap.fromTo(
      "#main-container",
      { opacity: 0 }, // starting position
      { opacity: 1, duration: 3, ease: "back" },
    );
  }, []);

  return (
    <>
      <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <sectionContext.Provider value={{ activeSection, setActiveSection }}>
          <main className="transition-colors duration-300 w-full h-full relative">
            {/* Background layer - z-0 */}
            <div className="fixed inset-0 z-0">
              <BokehBackgroundDemo />
            </div>

            {/* Content layer - z-10 */}
            <div
              id="main-container"
              className="relative z-10 flex flex-col lg:flex-row w-full h-full justify-center gap-3"
            >
              <div className="w-full sticky top-0 lg:hidden px-3">
                <Navbar />
              </div>
              <IntroSection />

              <div className="flex flex-col scroll-smooth basis-1/2 p-3 mx-4">
                <RoleSection />
                <ProjectsSection />
                <SkillsSection />
                <ExperienceSection />
                <Footer />
              </div>
            </div>
          </main>
        </sectionContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
