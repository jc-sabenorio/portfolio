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
      <div className="text-center mt-20">
        <h1 className="text-7xl">What I Do</h1>
        <p className="mt-3">Check out what I do below.</p>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-250 justify-center p-8 md:p-0 mt-5"
      >
        <CarouselContent>
          {roleData.map((data, idx) => {
            return (
              <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
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
