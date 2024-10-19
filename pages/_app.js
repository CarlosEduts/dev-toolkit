import { Analytics } from '@vercel/analytics/react';
import "@/styles/globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Analytics />
      <Footer />
    </>
  );
}
