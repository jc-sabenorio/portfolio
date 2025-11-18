import Navlogo from "./Navlogo";
import Navlinks from "./Navlinks";
import Navdropdown from "./Navdropdown";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import DownloadButton from "./DownloadButton";
export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const { isDarkMode } = useContext(ThemeContext);

  function handleDropdownClick() {
    setShowDropdown((prev) => !prev);
  }

  function handleScroll() {
    setIsAtTop(window.pageYOffset == 0);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`p-3 px-5 sticky ${
        isAtTop
          ? `${
              showDropdown
                ? `${
                    isDarkMode ? "bg-gray-600/60" : "bg-gray-400/60"
                  } transition-colors duration-300`
                : "bg-transparent"
            }`
          : `${
              isDarkMode ? "bg-gray-600/60" : "bg-gray-400/60"
            } transition-colors duration-300`
      }  backdrop-blur-md z-50 top-0 w-full`}
    >
      <div className="nav-flex justify-between">
        {/* Logo */}
        <Navlogo />

        {/* Nav links */}
        <Navlinks handleClick={handleDropdownClick} />

        {/* Download Resume */}
        <DownloadButton />
      </div>
      {/* Nav dropdown */}
      <Navdropdown showDropdown={showDropdown} />
    </div>
  );
}
