"use client";
import  {ThemeContext}  from "../context/ThemeContext";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { useContext } from "react";

export const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  console.log(theme, "theme");

  return (
    <div
      className={styles.container}
      style={
        theme === "dark"
          ? { background: "white" }
          : { background: "#0f172a" }
      }
      onClick={toggle}>
      <Image src="/assets/moon.png" alt="moon"  className="moon" width={17} height={17} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }></div>
      <Image src="/assets/contrast.png" alt="sun" width={14} height={14} />
    </div>
  );
};
