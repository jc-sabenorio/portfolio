import Navlogo from "./Navlogo";
import Navlinks from "./Navlinks";
import Navdropdown from "./Navdropdown";
import { useState } from "react";
import DownloadButton from "./DownloadButton";
export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  function handleDropdownClick() {
    setShowDropdown((prev) => !prev);
  }
  return (
    <div className="p-3 px-5 sticky bg-gray-500/60 backdrop-blur-md z-50 text-white top-0 w-full">
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
