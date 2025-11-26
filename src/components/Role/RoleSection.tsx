import roleData from "@/data/roles.json";

import RoleIcon from "./RoleIcon";
import SectionSeparator from "../SectionSeparator";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import "@/styles/RoleSection.css";
import Description from "../Introduction/Description";
export default function RoleSection() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <div
        id="roles-section"
        className={`section w-full p-3 md:p-0" ${
          isDarkMode ? "text-white " : "text-black"
        }`}
      >
        <SectionSeparator header="About" desc="" />

        <div className={`${isDarkMode ? "text-white " : "text-black"}`}>
          <Description />

          <h1 className="text-xl font-semibold mt-3">What I Do:</h1>
          <ul className="flex flex-col gap-3 mt-3">
            {roleData.map((data, idx) => {
              return (
                <li key={idx} className={`flex flex-wrap items-center gap-1`}>
                  <RoleIcon icon={data.icon} />
                  <span className="font-semibold text-center">
                    {data.task}:
                  </span>

                  <p className="text-center">{data.phrase}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}