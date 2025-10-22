import Image from "next/image";
import FeaturesCarousel from "./FeaturesCarousel";

type ImageCard = { id: number; image: string; alt?: string };
type ContentCard = {
  id: number;
  icon: string;
  title: string;
  description: string;
};
type Card = ImageCard | ContentCard;

export default function FeaturesCards() {
  const featuresCard: Card[] = [
    {
      id: 1,
      title: "Профессиональные повара",
      description: "Авторская кухня, свежая рыба, таежные блюда",
      icon: "/icons/ui/features-icons/bonfire.svg",
    },
    {
      id: 2,
      title: "Опытные гиды",
      description:
        "Легальные сертификаты, спутниковая связь и медицинская помощь обеспечивают безопасность",
      icon: "/icons/ui/features-icons/travel-bag.svg",
    },
    { id: 3, image: "/images/features/woman-fisherman.jpg" },
    {
      id: 4,
      title: "Комфортные условия",
      description: "Плавучая база с панорамными окнами и уютные таежные домики",
      icon: "/icons/ui/features-icons/umbrella.svg",
    },
    {
      id: 5,
      title: "Насыщенная программа",
      description:
        "Ежедневные маршруты на катере и аэролодке, посещение музея Ленина, прогулки на конях, возможность вертолетного тура к водопаду Кинзелюкский",
      icon: "/icons/ui/features-icons/air-balloon.svg",
    },
    { id: 6, image: "/images/features/premium-service.jpg" },
    {
      id: 7,
      title: "Премиальный сервис",
      description:
        "Группы от 4 человек, все включено: проживание, питание, трансфер, аренда оборудования, лучшие гиды",
      icon: "/icons/ui/features-icons/tent.svg",
    },
    { id: 8, image: "/images/features/beautiful-view.jpg" },
  ];

  return (
    <section id="features" className="bg-darkGreen py-50 scroll-mt-100 md:scroll-mt-120 desk:scroll-mt-150">
      <div className="h-full hidden md:block mx-auto container">
        <div className="md:grid md:grid-cols-3 desk:grid-cols-4 gap-20 auto-rows-auto">
          {featuresCard.map((item) => {
            const visibilityClasses =
              item.id === 3 || item.id === 6 ? "md:hidden desk:block" : "";
            const positionClasses =
              item.id === 8
                ? "md:col-start-2 md:row-start-2 desk:col-auto desk:row-auto"
                : "";

            if ("image" in item) {
              return (
                <div
                  key={item.id}
                  data-id={item.id}
                  className={`relative w-full h-full overflow-hidden rounded-3xl ${visibilityClasses} ${positionClasses}`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt ?? ""}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-400"
                  />
                </div>
              );
            }

            return (
              <div
                key={item.id}
                data-id={item.id}
                className={`min-h-[21.56rem] overflow-hidden md:rounded-3xl bg-beige md:px-20 desk:px-30 md:py-25 desk:py-[2rem] flex flex-col justify-center items-center gap-20 text-center ${visibilityClasses} ${positionClasses}`}
              >
                <Image
                  className="md:w-[3.50rem] md:h-[3.50rem] desk:w-[4.88rem] desk:h-[4.88rem]"
                  src={item.icon}
                  alt=""
                  width={78}
                  height={78}
                />
                <h2 className="uppercase md:text-14 desk:text-18 md:font-semibold text-darkGreen">
                  {item.title}
                </h2>
                <p className="md:text-14 desk:text-16 md:leading-[1.20] text-darkGreen">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <FeaturesCarousel />
    </section>
  );
}
