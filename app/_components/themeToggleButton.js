'use client';

import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggle}
      className="p-1 rounded bg-gray-800 text-black dark:text-white w-10 h-10"
    >
      {theme === 'dark' ? <img src="/images/bulb-on.png" alt="Dark theme toggle"/> : <img src="/images/bulb-off.png" alt="Light theme toggle"/>}
    </button>
  );
}
