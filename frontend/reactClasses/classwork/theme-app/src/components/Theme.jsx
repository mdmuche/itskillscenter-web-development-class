import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Theme() {
    const { theme, toggleTheme } = useContext(ThemeContext)
  const styles = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    height: "100vh",
    padding: "20px",
    textAlign: "center"
  };
  return (
    <div style={styles}>
      <h1>{theme.toUpperCase()} MODE</h1>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  )
}

export default Theme