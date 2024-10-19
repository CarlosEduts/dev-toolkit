import style from "@/styles/About.module.css";
import Return from "./components/Return";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>DEV-TOOLKIT - Política de Privacidade</title>
        <meta
          name="description"
          content="Esta Política de Privacidade descreve como suas informações são coletadas, usadas e protegidas ao utilizar o Dev Toolkit."
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
          <Return title="Política de Privacidade - Dev Toolkit">
            Esta Política de Privacidade descreve como suas informações são
            coletadas, usadas e protegidas ao utilizar o Dev Toolkit.
          </Return>

          <div className={`${style.content} box_border`}>
            <p>
              <strong>1. Coleta de Informações</strong> <br />
              Utilizamos a ferramenta Vercel Web Analytics em nosso site para
              monitorar o tráfego e melhorar a experiência do usuário. Esta
              ferramenta coleta dados anônimos, como visitas e interações na
              página, sem identificar informações pessoais.
            </p>

            <p>
              <strong>2. Uso de Dados</strong> <br />
              Qualquer dado inserido em nossas ferramentas não é enviado para
              nenhum servidor. Todas as operações e cálculos são executados
              localmente no seu dispositivo, garantindo que suas informações
              permaneçam privadas.
            </p>

            <p>
              <strong>3. Transparência e Código Fonte</strong> <br />
              Para mais informações sobre como nossas ferramentas funcionam ou
              para revisar o código fonte do projeto, visite o repositório
              oficial no
              <a href="https://github.com/CarlosEduts/dev-toolkit"> GitHub.</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
