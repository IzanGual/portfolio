import { useEffect, useRef } from "react";
import "./ThemeSwitcher.css";

/**
 * ThemeSwitcher
 * - Renderiza el control
 * - Mantiene c-previous en el fieldset para que el CSS anime correctamente
 * - Añade clase theme-light / theme-dark / theme-dim al <body>
 */
export default function ThemeSwitcher() {
  const fieldsetRef = useRef(null);
  const previousRef = useRef(null);

  // inicial: marca theme-light
  useEffect(() => {
    document.body.classList.add("theme-light");
    // inicializar c-previous con la opción marcada
    const initiallyChecked = fieldsetRef.current?.querySelector('input[type="radio"]:checked');
    if (initiallyChecked) {
      const val = initiallyChecked.getAttribute("c-option");
      previousRef.current = val;
      fieldsetRef.current?.setAttribute("c-previous", val);
    }
  }, []);

  // handler: aplica clase en body y actualiza c-previous como en tu JS original
  const handleChange = (themeValue, cOption) => {
  if (fieldsetRef.current) {
    fieldsetRef.current.setAttribute("c-previous", previousRef.current ?? "");
  }

  // quitar clases anteriores y añadir la nueva
  document.body.classList.remove("theme-light", "theme-dark");
  document.body.classList.add(`theme-${themeValue}`);

  previousRef.current = cOption;
};


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
          defaultChecked
          onChange={() => handleChange("light", "1")}
        />
        <svg className="switcher__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
         
          <circle cx="18" cy="18" r="6" fill="var(--c)"></circle>
        </svg>
      </label>

      <label className="switcher__option">
        <input
          className="switcher__input"
          type="radio"
          name="theme"
          value="dark"
          c-option="2"
          onChange={() => handleChange("dark", "2")}
        />
        <svg className="switcher__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
         
          <circle cx="18" cy="18" r="6" fill="var(--c)"></circle>
        </svg>
      </label>

      

      {/* SVG filter usado por backdrop-filter: url(#switcher) */}
      <svg className="switcher__filter" aria-hidden="true" width="0" height="0">
        <defs>
          <filter id="switcher" primitiveUnits="objectBoundingBox">
            
            <feTurbulence baseFrequency="0.02 0.01" numOctaves="3" result="turb" />
            <feGaussianBlur in="turb" stdDeviation="0.04" result="blur" />
            <feDisplacementMap in="SourceGraphic" in2="blur" scale="0.5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
    </fieldset>
  );
}
