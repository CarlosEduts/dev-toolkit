import Return from "../components/Return";
import style from "@/styles/Tools.module.css";
import { useState } from "react";
import Head from "next/head";

export default function CountCharacters() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Função para contar o número de palavras
  const countWords = (text) => {
    const words = text.trim().split(/\s+/); // Remove espaços extras
    return text.trim() === "" ? 0 : words.length;
  };

  return (
    <>
      <Head>
        <title>DEV-TOOLKIT - Contador de Caracteres e Palavras</title>
        <meta
          name="description"
          content="Conte facilmente caracteres e palavras em qualquer texto. Basta colar ou digitar o texto na ferramenta, e ela exibirá a contagem de caracteres e palavras em tempo real."
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
          <Return title="Contador de Caracteres">
            Conte o número de caracteres e palavras de qualquer texto.
          </Return>

          <div className={`box_border`}>
            <textarea
              value={text}
              onChange={handleChange}
              rows="10"
              style={{ width: "100%", padding: "10px" }}
              placeholder="Digite seu texto aqui..."
            />
            <div style={{ marginTop: "10px", fontSize: "18px" }}>
              Caracteres: {text.length} <br />
              Palavras: {countWords(text)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
