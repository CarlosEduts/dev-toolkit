import { useState } from "react";

export default function CopyButton({ onClick, children }) {
  const [text, setText] = useState("Copiar!");
  function click() {
    onClick();
    setText(children);

    setTimeout(() => {
      setText("Copiar!");
    }, 2000);
  }

  return (
    <>
      <button onClick={click}>{text}</button>
    </>
  );
}
