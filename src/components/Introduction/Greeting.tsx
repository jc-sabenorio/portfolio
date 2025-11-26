import { gsap } from "gsap";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import Contact from "./Contact";

export default function Greeting() {
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      "#profile",
      { opacity: 0 }, // starting position
      { opacity: 1, duration: 3, ease: "back" } // end position
    );
  }, []);

  return (
    <div id="profile" className="text-center lg:mt-15">
      <img
        className="flex-1 mx-auto rounded-full max-w-72 aspect-square object-cover"
        src="/images/formal.JPG"
      />
      <div id="name-intro">
        <div className="big-text font-bold mb-3 mt-3">
          <p id="myName">
            <span
              className={`${isDarkMode ? "text-blue-500" : "text-blue-800"}`}
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
