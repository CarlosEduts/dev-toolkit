// Este é um modelo para usar nas Páginas de tools

import Return from "../components/Return";
import style from "@/styles/Tools.module.css";
import { useState } from "react";
import Head from "next/head";

export default function CountCharacters({title, description}) {
// Script JavaScript

  return (
    <>
      <Head>
        <title>DEV-TOOLKIT - {title}</title>
        <meta
          name="description"
          content={description}
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
          <Return title={title}>
            {description}
          </Return>

          <div className={`box_border`}>
            {/* Ferramenta JSX */}
            
          </div>
        </div>
      </div>
    </>
  );
}