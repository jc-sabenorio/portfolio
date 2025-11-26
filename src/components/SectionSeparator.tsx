import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
export default function SectionSeparator({
  header,
  desc,
}: {
  header: string;
  desc: string;
}) {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className={`${isDarkMode ? "text-white" : "text-black"}`}>
      <div className="flex items-center gap-2">
        <h1 className="text-3xl font-bold">{header}</h1>
        <div
          className={`flex-1 h-[1px] ${isDarkMode ? "bg-white" : "bg-black"}`}
        ></div>
      </div>
      <p className="mt-3 ml-3">{desc}</p>
    </div>
  );
}
