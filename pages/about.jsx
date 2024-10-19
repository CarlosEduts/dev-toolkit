import style from "@/styles/About.module.css";
import Return from "./components/Return";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>DEV-TOOLKIT - Sobre o Projeto</title>
        <meta
          name="description"
          content="Simplifique suas tarefas com uma coleção de ferramentas intuitivas criadas para desenvolvedores, escritores e usuários em geral."
        />
        <meta
          name="keywords"
          content="ferramentas online, border-radius, contador de caracteres, gerador de lorem ipsum, organizador de texto, conversor de case"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <div className="item_center">
        <div className={`${style.container}`}>
          <Return title="Sobre o Projeto">
            Simplifique suas tarefas com uma coleção de ferramentas intuitivas
            criadas para desenvolvedores, escritores e usuários em geral.
          </Return>

          <div className={`${style.content} box_border`}>
            <p>
              <strong>Sobre o Criador:</strong> <br />
              Olá, eu sou Carlos Eduardo, desenvolvedor front-end com paixão por
              criar ferramentas que auxiliem as pessoas. Acredito que a
              tecnologia pode tornar o dia a dia mais fácil e produtivo, e estou
              sempre em busca de novas formas de contribuir para isso.
            </p>

            <p>
              <strong>Sobre o Projeto:</strong> <br />
              Este projeto reúne diversas ferramentas desenvolvidas para
              facilitar o cotidiano de desenvolvedores, escritores e usuários em
              geral. Cada ferramenta foi projetada para resolver uma necessidade
              específica, oferecendo uma interface acessível e intuitiva para
              garantir que você possa utilizá-las com facilidade.
            </p>

            <div className={style.links}>
              <strong>Links: </strong>
              <a href="https://github.com/CarlosEduts/dev-toolkit">
                GitHub do projeto
              </a>
              <a href="https://www.carlosdev.top/">Portfólio</a>
              <a href="https://blog.carlosdev.top/">Blog Pessoal</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
