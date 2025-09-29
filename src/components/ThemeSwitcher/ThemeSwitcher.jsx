import { useState, useEffect, useRef } from "react";
import "./ThemeSwitcher.css";

export default function ThemeSwitcher() {
  const fieldsetRef = useRef(null);
  const previousRef = useRef(null);

  // Estado para saber si estamos inicializando
  const [isInitializing, setIsInitializing] = useState(true);
  const [theme, setTheme] = useState("light");

  // Sincroniza el tema con localStorage antes de mostrar el switcher
  useEffect(() => {
    document.body.classList.add("theme-initializing");
    const saved = localStorage.getItem("theme");
    const initialTheme = (saved === "dark" || saved === "light") ? saved : "light";
    setTheme(initialTheme);
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(`theme-${initialTheme}`);
    // Espera un tick para quitar la clase y mostrar el switcher
    setTimeout(() => {
      document.body.classList.remove("theme-initializing");
      setIsInitializing(false);
    }, 0);
  }, []);

  const handleChange = (themeValue, cOption) => {
    setTheme(themeValue);
    if (fieldsetRef.current) {
      fieldsetRef.current.setAttribute("c-previous", previousRef.current ?? "");
    }
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(`theme-${themeValue}`);
    previousRef.current = cOption;
    localStorage.setItem("theme", themeValue);
  };

  // No renderizar el switcher hasta que el tema esté sincronizado
  if (isInitializing) return null;

  return (
    <fieldset className="switcher" ref={fieldsetRef}>
      <legend className="switcher__legend">Choose theme</legend>

      <label className="switcher__option">
        <input
          className="switcher__input"
          type="radio"
          name="theme"
          value="light"
          c-option="1"
          checked={theme === "light"}
          onChange={() => handleChange("light", "1")}
        />
        <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_24_23)">
            <path d="M24 2V6M24 42V46M8.44 8.44L11.28 11.28M36.72 36.72L39.56 39.56M2 24H6M42 24H46M8.44 39.56L11.28 36.72M36.72 11.28L39.56 8.44M34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_24_23">
              <rect width="48" height="48" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </label>

      <label className="switcher__option">
        <input
          className="switcher__input"
          type="radio"
          name="theme"
          value="dark"
          c-option="2"
          checked={theme === "dark"}
          onChange={() => handleChange("dark", "2")}
        />
        <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M42 25.58C41.6854 28.9844 40.4077 32.2288 38.3165 34.9336C36.2253 37.6383 33.407 39.6916 30.1914 40.8531C26.9758 42.0146 23.496 42.2362 20.159 41.4922C16.822 40.7481 13.766 39.0691 11.3484 36.6516C8.9309 34.234 7.25186 31.178 6.5078 27.841C5.76374 24.504 5.98542 21.0242 7.14691 17.8086C8.30839 14.593 10.3616 11.7747 13.0664 9.68351C15.7712 7.59228 19.0156 6.31461 22.42 6C20.4268 8.69653 19.4677 12.0189 19.717 15.3628C19.9664 18.7068 21.4077 21.8501 23.7788 24.2212C26.1499 26.5923 29.2932 28.0336 32.6372 28.2829C35.9811 28.5323 39.3034 27.5732 42 25.58Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </label>
    </fieldset>
  );
}