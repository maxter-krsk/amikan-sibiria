"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function FeaturesCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const card = [
    {
      title: "Профессиональные повара",
      description: "Авторская кухня, свежая рыба, таежные блюда",
      icon: "/icons/ui/features-icons/bonfire.svg",
    },
    {
      title: "Опытные гиды",
      description:
        "Легальные сертификаты, спутниковая связь и медицинская помощь обеспечивают безопасность",
      icon: "/icons/ui/features-icons/travel-bag.svg",
    },
    {
      title: "Комфортные условия",
      description: "Плавучая база с панорамными окнами и уютные таежные домики",
      icon: "/icons/ui/features-icons/umbrella.svg",
    },
    {
      title: "Насыщенная программа",
      description:
        "Ежедневные маршруты на катере и аэролодке, посещение музея Ленина, прогулки на конях, возможность вертолетного тура к водопаду Кинзелюкский",
      icon: "/icons/ui/features-icons/air-balloon.svg",
    },
    {
      title: "Премиальный сервис",
      description:
        "Группы от 4 человек, все включено: проживание, питание, трансфер, аренда оборудования, лучшие гиды",
      icon: "/icons/ui/features-icons/tent.svg",
    },
  ];

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        className="w-full md:hidden"
      >
        <CarouselContent className="px-10">
          {card.map((carditem, i) => (
            <CarouselItem key={i} className="basis-full">
              <div className="h-full bg-beige text-darkGreen rounded-10 py-40 px-25">
                <div className="flex flex-col gap-20 items-center text-center">
                  <Image
                    src={`${carditem.icon}`}
                    width={36}
                    height={50}
                    alt="Иконка преимущества"
                    className="w-[2.25rem] h-[3.12rem]"
                  />
                  <h2 className="uppercase text-16 font-semibold text-darkGreen">
                    {carditem.title}
                  </h2>
                  <p className="text-12 leading-[1.25] text-darkGreen">
                    {carditem.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="md:hidden flex justify-center mt-16 gap-5 md:gap-10">
        {card.map((_, i) => (
          <button
            key={i}
            className={`cursor-pointer w-[0.50rem] h-[0.50rem] rounded-full transition-colors ${
              i === currentSlide ? "bg-[#FFFFFF]" : "bg-[#A4A69B]"
            }`}
            onClick={() => api?.scrollTo(i)}
          />
        ))}
      </div>
    </>
  );
}
