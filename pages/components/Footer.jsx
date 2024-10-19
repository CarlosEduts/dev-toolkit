import style from "@/styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="item_center">
      <div className={style.footer}>
        <div>
          <Link href="/privacy-policy">Política de Privacidade</Link>
          <p>|</p>
          <Link href="/about">Sobre o Projeto</Link>
        </div>

        <p>
          © 2024 - Criado com &#x2764;&#xFE0F; por
          <a href="https://github.com/CarlosEduts"> Carlos Eduardo.</a>
        </p>
      </div>
    </div>
  );
}
