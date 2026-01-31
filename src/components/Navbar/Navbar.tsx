import Navlogo from "./Navlogo";
import Navlinks from "./Navlinks";
import Navdropdown from "./Navdropdown";
import { useContext, useEffect, useState } from "react";
import { sectionContext } from "@/contexts/sectionContext";
import { ThemeContext } from "@/contexts/ThemeContext";
export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { setActiveSection } = useContext(sectionContext);
  const { isDarkMode } = useContext(ThemeContext);
  function handleDropdownClick() {
    setShowDropdown((prev) => !prev);
  }

  useEffect(() => {
    const hashName = window.location.hash;

    function checkHashName() {
      if (hashName == "#projects-section") {
        setActiveSection("projects-section");
      } else if (hashName == "#skills-section") {
        setActiveSection("skills-section");
      } else if (hashName == "#experience-section") {
        setActiveSection("experience-section");
      } else {
        setActiveSection("intro-section");
      }
    }
    checkHashName();
  }, []);

  return (
    <div
      className={`p-3 px-5 sticky transition-colors duration-300 ${isDarkMode ? "bg-gray-500" : "bg-gray-800"} rounded-3xl z-50 top-0 w-full mt-3 max-w-200 mx-auto mb-3`}
    >
      <div className="nav-flex justify-between">
        {/* Logo */}
        <Navlogo />

        {/* Nav links */}
        <Navlinks handleClick={handleDropdownClick} />
      </div>
      {/* Nav dropdown */}
      <Navdropdown showDropdown={showDropdown} />
    </div>
  );
}
