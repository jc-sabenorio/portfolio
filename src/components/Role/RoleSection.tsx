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
export default function RoleSection() {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full justify-center p-8 md:p-0 mt-5"
      >
        <div className="mt-20">
          <h1 className="text-3xl">What I Do?</h1>
          <p className="mt-3 ml-3">Check out what I do as a developer!</p>
        </div>
        <CarouselContent>
          {roleData.map((data, idx) => {
            return (
              <CarouselItem key={idx} className="md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card className="">
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
          <CarouselPrevious className="relative cursor-pointer" />
          <CarouselNext className="relative cursor-pointer" />
        </div>
      </Carousel>
    </>
  );
}
