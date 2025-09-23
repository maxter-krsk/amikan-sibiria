import Link from "next/link";
import t from "@/app/styles/modules/typography.module.css"

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <h1 className={`${t.heading} text-center`}>Контакты</h1>
      </div>
    </footer>
  );
}
