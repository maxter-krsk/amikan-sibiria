import Link from "next/link";
import Image from "next/image";
import t from "@/app/styles/modules/typography.module.css";
import { Button } from "@/app/components/ui/Button";
export default function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <div className="container">
        <div>
          <h1 id="hero-title">Сибирь, которую стоит увидеть</h1>
          <p>
            Отдых и рыбалка на Саяно-Шушенском водохранилище и Саянской реке
            Кантегир
          </p>
        </div>
        <div aria-describedby="cta-hint">
          <Button type="button">
            Получить программу тура
          </Button>
          <p id="cta-hint">Оставьте контакты — мы пришлем подробное описание</p>
        </div>
        <ul>
          <li>
            <p>
              <strong>
                Премиальный тур для тех, кто хочет насладиться природой и
                отдохнуть в комфортных условиях
              </strong>
            </p>
            <p>
              Панорамные виды, тёплая база, авторская кухня. Заезд на
              музей-усадьбу В.И. Ленина и экскурсия по окрестностям
            </p>
          </li>

          <li>
            <p>
              <strong>
                Приезжайте семьей, в компании друзей или коллег — будет
                интересно и уютно
              </strong>
            </p>
            <p>
              <Link href="/" aria-label="Узнать больше о туре">
                Узнать больше
              </Link>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}