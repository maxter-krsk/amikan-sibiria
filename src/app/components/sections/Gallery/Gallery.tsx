"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "fisherman-man.jpg",
    "mountains.jpg",
    "river.jpg",
    "pier.jpg",
    "barrel.jpg",
    "boat.jpg",
    "rainbow.jpg",
    "clouds.jpg",
    "autumn.jpg",
    "fisherman-woman.jpg",
    "view.jpg",
    "cottage.jpg",
    "many-fish.jpg",
    "tent-forest.jpg",
    "fish.jpg",
    "speedboat.jpg",
    "mountain-river.jpg",
    "dried-fish.jpg",
    "dog.jpg",
    "ice.jpg",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      id="gallery"
      className="mb-100 md:mb-120 desk:mb-150 scroll-mt-70"
    >
      <Carousel
        opts={{
          align: "center",
          loop: true,
          slidesToScroll: 1,
          breakpoints: {
            "(min-desk: 90rem)": { slidesToScroll: 2 },
            "(min-width: 64rem)": { slidesToScroll: 3 },
          },
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((item, i) => (
            <CarouselItem key={i} className="basis-1/5.5 pl-20">
              <Image
                src={`/images/gallery/${item}`}
                width={325}
                height={495}
                alt="image"
                quality={70}
                className="rounded-[0.625rem] md:rounded-[1.87rem] w-[20.31rem] h-[30.93rem]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </motion.section>
  );
}
