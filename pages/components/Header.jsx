import style from "@/styles/Header.module.css";

export default function Header() {
  return (
    <div className={style.content}>
      <h1>
        DEV-
        <br />
        TOOLKIT
      </h1>
      <p>
        Este projeto reúne diversas ferramentas desenvolvidas para facilitar o
        dia a dia de desenvolvedores, escritores e usuários em geral. Cada
        ferramenta foi pensada para atender uma necessidade específica, e estão
        organizadas de forma acessível e intuitiva para que você possa usá-las
        facilmente.
      </p>
    </div>
  );
}
