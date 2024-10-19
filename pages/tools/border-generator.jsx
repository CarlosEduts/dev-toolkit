import Return from "../components/Return";
import style from "@/styles/Tools.module.css";
import { useState } from "react";
import Head from "next/head";
import CopyButton from "../components/CopyButton";

export default function BorderGenerator() {
  // Estados para armazenar as propriedades da borda
  const [borderColor, setBorderColor] = useState("#3498db");
  const [borderStyle, setBorderStyle] = useState("solid");
  const [borderWidth, setBorderWidth] = useState(1);

  // Função para gerar o estilo da borda
  const borderStyleCss = `${borderWidth}px ${borderStyle} ${borderColor}`;

  // Função para copiar o estilo CSS para a área de transferência
  const copyToClipboard = () => {
    const css = `border: ${borderStyleCss};`;
    navigator.clipboard.writeText(css);
  };

  // Função para resetar os valores de estilo da borda
  const resetValues = () => {
    setBorderColor("#3498db");
    setBorderStyle("solid");
    setBorderWidth(1);
  };

  return (
    <>
      <Head>
        <title>DEV-TOOLKIT - Gerador de Borda CSS Interativo</title>
        <meta
          name="description"
          content="Personalize e copie bordas CSS com facilidade, ajustando cor, estilo e espessura em tempo real."
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
          <Return title="Gerador de Borda CSS Interativo">
            Personalize e copie bordas CSS com facilidade, ajustando cor, estilo
            e espessura em tempo real.
          </Return>

          <div
            className={`box_border`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ padding: "20px", maxWidth: "400px" }}>
              {/* Caixa de demonstração da borda */}
              <div
                style={{
                  marginTop: "20px",
                  width: "100%",
                  height: "100px",
                  border: borderStyleCss,
                }}
              >
                <p style={{ textAlign: "center", paddingTop: "35px" }}>
                  Exemplo de Borda
                </p>
              </div>

              <br />
              <hr />

              {/* Seletor de cor da borda */}
              <label>Cor: </label>
              <input
                type="color"
                value={borderColor}
                onChange={(e) => setBorderColor(e.target.value)}
              />

              <br />

              {/* Seletor de estilo da borda */}
              <label>Estilo: </label>
              <select
                value={borderStyle}
                onChange={(e) => setBorderStyle(e.target.value)}
              >
                <option value="solid">Solid</option>
                <option value="dashed">Dashed</option>
                <option value="dotted">Dotted</option>
                <option value="double">Double</option>
                <option value="groove">Groove</option>
                <option value="ridge">Ridge</option>
                <option value="inset">Inset</option>
                <option value="outset">Outset</option>
              </select>

              <br />

              {/* Seletor de espessura da borda */}
              <label>Espessura (px): </label>
              <input
                type="number"
                value={borderWidth}
                onChange={(e) => setBorderWidth(e.target.value)}
                min="1"
              />
              <hr />
              <br />

              {/* Mostra o código CSS gerado */}
              <pre>border: {borderStyleCss};</pre>

              {/* Botões para copiar o CSS e resetar os valores */}
              <div className={style.actions}>
                <CopyButton onClick={copyToClipboard}>Copiado!</CopyButton>
                <button onClick={resetValues}>Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
