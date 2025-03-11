"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ImageData } from "@/lib/projects";

interface ImageCarouselProps {
  images: ImageData[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handlePrevious = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const handleNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Carousel without the default navigation arrows */}
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent className="transition-all duration-0">
          {images.map((image) => (
            <CarouselItem key={image.src}>
              <div className="p-1">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full object-contain aspect-[3/2]"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Navigation controls below the carousel */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-primary"
          onClick={handlePrevious}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Navigation dots */}
        <div className="flex items-center gap-1">
          {Array.from({ length: count }).map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={cn(
                "h-2 w-2 p-0 rounded-full hover:bg-primary",
                current === index ? "bg-primary" : "bg-muted"
              )}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={current === index ? "true" : "false"}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-primary"
          onClick={handleNext}
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
