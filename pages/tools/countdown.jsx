// Este é um modelo para usar nas Páginas de tools

import Return from "../components/Return";
import style from "@/styles/Tools.module.css";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function CountCharacters({
  title = "Cronômetro Simples",
  description = "Controle o tempo com funções de iniciar, pausar e zerar",
}) {
  // Script JavaScript
  const [tempo, setTempo] = useState(0); // tempo em segundos
  const [ativo, setAtivo] = useState(false); // controla se o cronômetro está rodando
  const [intervalId, setIntervalId] = useState(null);

  // useEffect para lidar com o intervalo de tempo
  useEffect(() => {
    let id;
    if (ativo) {
      id = setInterval(() => {
        setTempo((prevTempo) => prevTempo + 1);
      }, 1000); // Incrementa o tempo a cada 1 segundo
      setIntervalId(id);
    } else if (!ativo && intervalId) {
      clearInterval(intervalId);
    }

    return () => clearInterval(id); // Limpa o intervalo quando o componente desmonta ou o tempo é pausado
  }, [ativo]);

  // Função para formatar o tempo no formato mm:ss
  const formatarTempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${String(minutos).padStart(2, "0")}:${String(
      segundosRestantes
    ).padStart(2, "0")}`;
  };

  // Função para iniciar ou pausar o cronômetro
  const iniciarPausar = () => {
    setAtivo(!ativo);
  };

  // Função para zerar o cronômetro
  const zerar = () => {
    setAtivo(false);
    setTempo(0);
    clearInterval(intervalId);
  };

  return (
    <>
      <Head>
        <title>DEV-TOOLKIT - {title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="ferramentas online, border-radius, contador de caracteres, gerador de lorem ipsum, organizador de texto, conversor de case"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>

      <div className="item_center">
        <div className={`${style.container}`}>
          <Return title={title}>{description}</Return>

          <div className={`box_border`}>
            {/* Ferramenta JSX */}
            <div style={{ textAlign: "center" }}>
              <h1>{formatarTempo(tempo)}</h1>
              <div>
                <button onClick={iniciarPausar} style={{marginRight:"1rem"}}>
                  {ativo ? "Pausar" : "Iniciar"}
                </button>
                <button onClick={zerar}>Zerar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
