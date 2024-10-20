import Return from "../components/Return";
import style from "@/styles/Tools.module.css";
import { useState } from "react";
import Head from "next/head";

export default function RandomNum() {
  const [quantity, setQuantity] = useState(1);
  const [digits, setDigits] = useState(1);
  const [numbers, setNumbers] = useState([]);
  const [copied, setCopied] = useState(false);

  const generateNumbers = () => {
    const newNumbers = [];
    for (let i = 0; i < quantity; i++) {
      const randomNumber = Math.floor(Math.random() * Math.pow(10, digits))
        .toString()
        .padStart(digits, "0");
      newNumbers.push(randomNumber);
    }
    setNumbers(newNumbers);
    setCopied(false); // Reset copied status after generating new numbers
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(numbers.join(", "));
    setCopied(true);
  };
  return (
    <>
      <Head>
        <title>DEV-TOOLKIT - Gerador de Números Aleatórios</title>
        <meta
          name="description"
          content="Gere e copie números aleatórios personalizados de forma fácil para qualquer finalidade."
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
          <Return title="Gerador de Números Aleatórios">
            Gere e copie números aleatórios personalizados de forma fácil para
            qualquer finalidade.
          </Return>

          <div className={`box_border`}>
            <div>
              <label>
                Quantidade de números:
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  min="1"
                />
              </label>
              <br />
              <label>
                Digitos por número: 
                <input
                  type="number"
                  value={digits}
                  onChange={(e) => setDigits(parseInt(e.target.value))}
                  min="1"
                />
              </label>
              <br />
              <div>
                <h3>Números gerados:</h3>
                <p>{numbers.join(", ")}</p>
              </div>
              <button onClick={generateNumbers} style={{marginRight:"1rem"}}>Gerar</button>
              <button onClick={copyToClipboard} disabled={numbers.length === 0}>
                {copied ? "Copiado!" : "Copiar!"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
