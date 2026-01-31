import Navlogo from "./Navlogo";
import Navlinks from "./Navlinks";
import Navdropdown from "./Navdropdown";
import { useContext, useEffect, useState } from "react";
import { sectionContext } from "@/contexts/sectionContext";
export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { setActiveSection } = useContext(sectionContext);
  const [isAtTop, setIsAtTop] = useState(window.pageYOffset == 0);

  function handleScroll() {
    setIsAtTop(window.pageYOffset == 0);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isAtTop) {
      setActiveSection("intro-section");
    }
  }, [isAtTop]);

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
      className={`sticky transition-all duration-300 rounded-md p-3 ${!isAtTop && "backdrop-blur-lg"} ${!isAtTop && "lg:bg-transparent lg:backdrop-blur-none"} z-50 top-0 w-full pt-5 mb-3`}
    >
      <div className="nav-flex justify-between px-3">
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
