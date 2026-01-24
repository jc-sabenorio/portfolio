import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import Contact from "./Contact";

export default function Greeting() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      id="profile"
      className="text-center lg:mt-15 overflow-y-scroll hide-scrollbar"
    >
      <img
        className="mx-auto rounded-full max-w-72 aspect-square object-cover"
        src="/images/formal.JPG"
        alt="formal image"
      />
      <div id="name-intro">
        <div className="big-text font-bold mb-3 mt-3">
          <p id="myName">
            <span
              className={`${isDarkMode ? "text-blue-400" : "text-blue-800"}`}
            >
              John Carlo
            </span>{" "}
            Sabenorio
          </p>
        </div>
      </div>

      <p id="dev-role" className="text-xl mt-3 titan-one-bold">
        Software Developer
      </p>
      <Contact />
    </div>
  );
}
