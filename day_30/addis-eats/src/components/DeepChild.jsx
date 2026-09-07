import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.js";

function DeepChild() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Deep Child</h2>

      <p>Current theme: {theme}</p>

      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default DeepChild;
