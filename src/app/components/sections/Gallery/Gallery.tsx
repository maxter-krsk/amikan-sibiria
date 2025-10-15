import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
    <section id="gallery" className="mb-100 scroll-mt-100 md:mb-120 md:scroll-mt-120 desk:mb-150 desk:scroll-mt-150">
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
                className="rounded-[0.625rem] md:rounded-[1.87rem] w-[20.31rem] h-[30.93rem]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
