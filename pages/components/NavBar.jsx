import style from "@/styles/NavBar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="item_center">
      <div className={`${style.nav} box_border`}>
        <Link href="/" className={style.link}>
          DEV-TOOLKIT
        </Link>

        <div className={style.actions}>
          <Link href="/">Ferramentas</Link>
          <Link href="/about">Sobre</Link>
        </div>
      </div>
    </div>
  );
}
