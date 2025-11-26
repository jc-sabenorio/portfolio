import { useContext } from "react";
import resumeFile from "/files/Sabenorio_Resume.pdf";
import { ThemeContext } from "@/contexts/ThemeContext";
export default function DownloadButton() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <a
      href={resumeFile}
      className="hidden md:block mt-3"
      download={resumeFile}
      target="_blank"
    >
      <button
        className={`${
          isDarkMode ? "bg-gray-500" : "bg-gray-800"
        } transition-all text-white cursor-pointer p-3 px-5 rounded-md font-semibold hover:scale-125 duration-300`}
      >
        <div className="flex items-center justify-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="w-8 h-8 fill-white"
          >
            <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
          </svg>
          <p className="text-3xl">My Resume</p>
        </div>
      </button>
    </a>
  );
}
