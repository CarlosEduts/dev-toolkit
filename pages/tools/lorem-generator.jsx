import Return from "../components/Return";
import style from "@/styles/Tools.module.css";
import { useState } from "react";
import Head from "next/head";
import CopyButton from "../components/CopyButton";

export default function LoremIpsumGenerator() {
  const LOREM_IPSUM =
    "Lorem ipsum dolor sit amet consectetur adipiscing elit".split(" ");
  const [numParagrafos, setNumParagrafos] = useState(1);
  const [numPalavras, setNumPalavras] = useState(10);
  const [textoGerado, setTextoGerado] = useState("");

  // Função para gerar Lorem Ipsum
  const gerarLoremIpsum = () => {
    let resultado = "";

    for (let i = 0; i < numParagrafos; i++) {
      let paragrafo = [];

      for (let j = 0; j < numPalavras; j++) {
        paragrafo.push(
          LOREM_IPSUM[Math.round(Math.random() * (LOREM_IPSUM.length - 1))]
        ); // Adiciona as palavras de maneira aleatória
      }

      resultado += paragrafo.join(" ") + ".\n\n";
    }

    setTextoGerado(resultado);
  };

  // Função para copiar o texto gerado
  const copiarParaClipboard = () => {
    navigator.clipboard.writeText(textoGerado).then(
      () => {},
      (err) => {
        alert("Falha ao copiar o texto", err);
      }
    );
  };

  return (
    <>
      <Head>
        <title>DEV-TOOLKIT - Gerador de Lorem Ipsum</title>
        <meta
          name="description"
          content="Gere blocos de texto aleatório do tipo Lorem Ipsum para usar como placeholder em designs e protótipos."
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
          <Return title="Gerador de Lorem Ipsum">
            Gere blocos de texto aleatório do tipo "Lorem Ipsum" para usar como
            placeholder em designs e protótipos.
          </Return>

          <div className={`box_border`}>
            <div style={{ marginBottom: "20px" }}>
              <label>Número de Parágrafos: </label>
              <input
                type="number"
                value={numParagrafos}
                onChange={(e) => setNumParagrafos(e.target.value)}
                min="1"
                style={{ marginBottom: "10px", padding: ".2rem" }}
              />
              <br />
              <label>Palavras por Parágrafo: </label>
              <input
                type="number"
                value={numPalavras}
                onChange={(e) => setNumPalavras(e.target.value)}
                min="1"
                style={{ padding: ".2rem" }}
              />
            </div>

            <div
              style={{
                margin: "1rem 0",
                whiteSpace: "pre-wrap",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "4px",
              }}
            >
              {textoGerado || "O texto gerado aparecerá aqui."}
            </div>

            <button onClick={gerarLoremIpsum} style={{ marginRight: "10px" }}>
              Gerar
            </button>

            <CopyButton onClick={copiarParaClipboard} disabled={!textoGerado}>
              {!textoGerado ? "Nada para Copiar" : "Texto Copiado!"}
            </CopyButton>
          </div>
        </div>
      </div>
    </>
  );
}
