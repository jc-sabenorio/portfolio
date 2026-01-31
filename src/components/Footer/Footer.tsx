import { useContext } from "react";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import { ThemeContext } from "@/contexts/ThemeContext";

export default function Footer() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`p-3 border-t-2 mt-8 flex items-center justify-between lg:justify-center ${
        isDarkMode ? "fill-white text-white" : "fill-black text-black"
      }`}
    >
      <h1>© 2025 JC Sabenorio. All Rights Reserved.</h1>

      <div className="lg:hidden">
        <SocialMediaIcons />
      </div>
    </div>
  );
}
