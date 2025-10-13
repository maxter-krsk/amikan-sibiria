import Image from "next/image";

export default function MainFeatures() {
  const mainFeaturesCard = [
    {
      title: "Комфортное проживание",
      image: "/images/about/residence.jpg",
      description:
        "Плавучая база с панорамными окнами обеспечивает единение с природой, но не лишает современного уровня комфорта",
    },
    {
      title: "Отдых с близкими",
      image: "/images/about/relax.jpg",
      description:
        "Тур рассчитан на семьи, друзей и коллег. Можно приехать с близкими, родственниками или рабочим коллективом — программа подходит для всех возрастов",
    },
    {
      title: "Насыщенная программа и экскурсии",
      image: "/images/about/excursions.jpg",
      description:
        "В тур входит поездка в Шушенское — дом‑музей В. И. Ленина, джип‑тур на смотровую СШГЭС и вершину Гладенькой, вечерние прогулки по берегам Енисея",
    },
    {
      title: "Качественная рыбалка на чистых водоёмах",
      image: "/images/about/fishing.jpg",
      description:
        "Экскурсии в Саяно‑Шушенский биосферный заповедник и на реку Кантегир с ловлей хариуса. Рыбалка на окуня, щуку и хариуса на глубинах до 160 м",
    },
    {
      title: "Дикая природа",
      image: "/images/about/wildlife.jpg",
      description:
        "Возможность увидеть краснокнижных саянских козерогов, но акцент — на спокойной рыбалке в окружении природы",
    },
    {
      title: "Премиальный сервис  и безопасность",
      image: "/images/about/safety.jpg",
      description:
        "Профессиональные повара, сертифицированные гиды, спутниковая связь и медицинское сопровождение. Тур подходит участникам без специальной подготовки",
    },
  ];
  return (
    <section>
      <div className="container">
        <h1 className="mb-[1.87rem] font-bold uppercase text-[1.75rem] md:text-[2.5rem] desk:text-[4.37rem] text-darkGreen text-right md:text-left">
          Почему стоит поехать?
        </h1>
        <div className="md:grid md:grid-cols-2 md:grid-rows-3 md:gap-[1.25rem] desk:grid-cols-3 desk:grid-rows-2">
          {mainFeaturesCard.map((card) => (
            <div key={card.title} className="flex flex-col gap-[1.25rem] mb-[0.62rem] md:m-0 p-[1.25rem] rounded-[0.62rem] bg-lightGreen">
              <h2 className="uppercase text-center text-[1rem] text-beige font-semibold">{card.title}</h2>
              <Image
                src={card.image}
                alt={card.title}
                width={260}
                height={287}
                className="w-[16.25rem] h-[17.94rem] block w-full h-auto object-cover rounded-[0.62rem]"
              />
              <p className="text-center text-[0.75rem] md:text-[0.87rem] desk:text-[1rem] text-beige">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
