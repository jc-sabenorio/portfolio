import Greeting from "./Greeting";
import "../../styles/IntroSection.css";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import Navbar from "../Navbar/Navbar";
export default function IntroSection() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <section
      id="intro-section"
      className={`flex flex-col items-center ${
        isDarkMode && "dark"
      } basis-1/2 max-h-screen lg:sticky md:top-0`}
    >
      <div className="hidden lg:block w-full">
        <Navbar />
      </div>
      <Greeting />

      {/* Contacts */}
    </section>
  );
}
