import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
    <section className="mb-[9.37rem]">
      <Carousel
        opts={{
          align: "center",
		  loop: true,
		  slidesToScroll: 3,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((item, i) => (
            <CarouselItem key={i} className="basis-1/5.5 pl-[1.25rem]">
              <Image
                src={`/images/gallery/${item}`}
                width={325}
                height={495}
                alt="image"
                className="rounded-[1.87rem]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
