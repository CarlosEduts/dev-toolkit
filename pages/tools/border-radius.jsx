import Return from "../components/Return";
import style from "@/styles/Tools.module.css";
import { useState } from "react";
import CopyButton from "../components/CopyButton";
import Head from "next/head";

export default function BorderRadius() {
  const [unit, setUnit] = useState("px"); // Estado para a unidade de medida
  const [borderRadius, setBorderRadius] = useState({
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  });

  const handleChange = (corner, value) => {
    setBorderRadius((prev) => ({
      ...prev,
      [corner]: value,
    }));
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const handleCopy = () => {
    const borderRadiusStyle = `${borderRadius.topLeft}${unit} ${borderRadius.topRight}${unit} ${borderRadius.bottomRight}${unit} ${borderRadius.bottomLeft}${unit}`;
    navigator.clipboard.writeText(`border-radius: ${borderRadiusStyle};`);
  };

  const borderRadiusStyle = `${borderRadius.topLeft}${unit} ${borderRadius.topRight}${unit} ${borderRadius.bottomRight}${unit} ${borderRadius.bottomLeft}${unit}`;

  return (
    <>
      <Head>
        <title>DEV-TOOLKIT - Editor de Border Radius</title>
        <meta
          name="description"
          content="Use os controles para modificar cada canto e veja o resultado ao vivo. Basta copiar o código gerado para seu projeto!"
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
          <Return title="Border Radius Previewer">
            Uma ferramenta para ajustar border-radius de elementos.
          </Return>

          <div className={`box_border`}>
            <div className={style.border_radius}>
              {/* Caixa de pré-visualização */}
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "#3498db",
                  borderRadius: borderRadiusStyle,
                }}
              ></div>

              {/* Controles para ajustar o border-radius */}
              <div>
                <div>
                  <label>Top Left: </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={borderRadius.topLeft}
                    onChange={(e) => handleChange("topLeft", e.target.value)}
                  />
                  <span>
                    [ {borderRadius.topLeft}
                    {unit} ]
                  </span>
                </div>

                <div>
                  <label>Top Right: </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={borderRadius.topRight}
                    onChange={(e) => handleChange("topRight", e.target.value)}
                  />
                  <span>
                    [ {borderRadius.topRight}
                    {unit} ]
                  </span>
                </div>

                <div>
                  <label>Bottom Right: </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={borderRadius.bottomRight}
                    onChange={(e) =>
                      handleChange("bottomRight", e.target.value)
                    }
                  />
                  <span>
                    [ {borderRadius.bottomRight}
                    {unit} ]
                  </span>
                </div>

                <div>
                  <label>Bottom Left: </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={borderRadius.bottomLeft}
                    onChange={(e) => handleChange("bottomLeft", e.target.value)}
                  />
                  <span>
                    [ {borderRadius.bottomLeft}
                    {unit} ]
                  </span>
                </div>

                {/* Seleção de unidade */}
                <div style={{ marginTop: "20px" }}>
                  <label>Unidade: </label>
                  <select value={unit} onChange={handleUnitChange}>
                    <option value="px">px</option>
                    <option value="%">%</option>
                    <option value="em">em</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Exibição do código CSS gerado */}
            <div className={style.border_radius}>
              <pre>{`border-radius: ${borderRadiusStyle};`}</pre>
              <CopyButton onClick={handleCopy}>Copiado</CopyButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
