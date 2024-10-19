import style from "@/styles/ToolBar.module.css";
import Link from "next/link";

export default function ToolBox({ title, children }) {
  return (
    <div className={`${style.tool_box} box_border`}>
      <Link href="/">
        <div className={style.action}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M5 12l6 6" />
            <path d="M5 12l6 -6" />
          </svg>
        </div>
      </Link>
      <div className={style.text_content}>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  );
}
