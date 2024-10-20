import Return from "../components/Return";
import style from "@/styles/Tools.module.css";
import { useState } from "react";
import Head from "next/head";
import CopyButton from "../components/CopyButton";

export default function SortText() {
  const [texto, setTexto] = useState("");
  const [textoOrdenado, setTextoOrdenado] = useState("");

  // Função para ordenar o texto
  const ordenarTexto = () => {
    const linhas = texto.split("\n");
    const linhasOrdenadas = linhas.sort((a, b) => a.localeCompare(b));
    setTextoOrdenado(linhasOrdenadas.join("\n"));
  };

  // Função para copiar o texto ordenado
  const copiarTexto = () => {
    navigator.clipboard.writeText(textoOrdenado);
  };

  return (
    <>
      <Head>
        <title>DEV-TOOLKIT - Ordenador de Texto</title>
        <meta
          name="description"
          content="Organize e copie textos em ordem alfabética com facilidade"
        />
        <meta
          name="keywords"
          content="ferramentas online, border-radius, contador de caracteres, gerador de lorem ipsum, organizador de texto, conversor de case"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>

      <div className="item_center">
        <div className={`${style.container} ${style.tool}`}>
          <Return title="Ordenador de Texto">
            Organize e copie textos em ordem alfabética com facilidade
          </Return>

          <div className={`box_border`}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <textarea
                rows="10"
                cols="50"
                placeholder="Digite cada item em uma nova linha"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
              ></textarea>
              <br />
              <button onClick={ordenarTexto}>Ordenar</button>
              <br />
              <textarea
                rows="10"
                cols="50"
                readOnly
                placeholder="Texto ordenado aparecerá aqui..."
                value={textoOrdenado}
              ></textarea>
              <br />
              <CopyButton onClick={copiarTexto}>Texto Copiado!</CopyButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
