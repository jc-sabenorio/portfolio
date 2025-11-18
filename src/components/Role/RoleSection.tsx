import roleData from "@/data/roles.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card.tsx";
import RoleIcon from "./RoleIcon";
import SectionSeparator from "../SectionSeparator";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
export default function RoleSection() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full justify-center p-8 md:p-0 mt-5"
        id="roles-section"
      >
        <SectionSeparator
          header="What I Do"
          desc="Check out what I do as a developer!"
        />
        <CarouselContent>
          {roleData.map((data, idx) => {
            return (
              <CarouselItem key={idx} className="md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card
                    className={`${
                      isDarkMode && "bg-gray-500 text-white fill-white"
                    }`}
                  >
                    <CardContent className="flex flex-col justify-center aspect-square items-center text-center p-6">
                      <RoleIcon icon={data.icon} />
                      <span className="text-3xl font-semibold">
                        {data.task}
                      </span>
                      <p>{data.phrase}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <div className="flex justify-center mt-5 gap-3">
          <CarouselPrevious
            className={`relative cursor-pointer ${
              isDarkMode && "bg-gray-500 text-white fill-white"
            }`}
          />
          <CarouselNext
            className={`relative cursor-pointer ${
              isDarkMode && "bg-gray-500 text-white fill-white"
            }`}
          />
        </div>
      </Carousel>
    </>
  );
}
