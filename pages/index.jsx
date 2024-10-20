import Head from "next/head";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Header from "./components/Header";
import ToolBox from "./components/ToolBox";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>
          DEV-TOOLKIT - Ferramentas Online para Desenvolvedores e Escritores
        </title>
        <meta
          name="description"
          content="Ferramentas online gratuitas desenvolvidas para facilitar o trabalho de desenvolvedores, escritores e usuários em geral. Explore funcionalidades como Border Radius Previewer, Contador de Caracteres, Gerador de Lorem Ipsum, Organizador de Texto e muito mais."
        />
        <meta
          name="keywords"
          content="ferramentas online, border-radius, contador de caracteres, gerador de lorem ipsum, organizador de texto, conversor de case"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>

      <div className="item_center">
        <div
          className={`${styles.page} ${geistSans.variable} ${styles.container}`}
        >
          <Header />

          <ToolBox title="Border Radius Previewer" href="./tools/border-radius">
            Uma ferramenta para ajustar border-radius de elementos.
          </ToolBox>

          <ToolBox title="Contador de Caracteres" href="./tools/count-characters">
          Conte o número de caracteres e palavras de qualquer texto.
          </ToolBox>

          <ToolBox title="Gerador de Lorem Ipsum" href="./tools/lorem-generator">
          Gere blocos de texto aleatório do tipo "Lorem Ipsum" para usar como placeholder em designs e protótipos.
          </ToolBox>

          <ToolBox title="Gerador de Borda CSS Interativo" href="./tools/border-generator">
          Personalize e copie bordas CSS com facilidade, ajustando cor, estilo e espessura em tempo real.
          </ToolBox>

          <ToolBox title="Ordenador de Texto" href="./tools/sort-text">
          Organize e copie textos em ordem alfabética com facilidade
          </ToolBox>

          <ToolBox title="Gerador de Números Aleatórios" href="./tools/random-num">
          Gere e copie números aleatórios personalizados de forma fácil para qualquer finalidade.
          </ToolBox>

          <ToolBox title="Cronômetro Simples" href="./tools/countdown">
          Controle o tempo com funções de iniciar, pausar e zerar
          </ToolBox>
        </div>
      </div>
    </>
  );
}
