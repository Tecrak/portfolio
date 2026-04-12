import { useTheme } from "next-themes";

export default function ThemeSwitchBttn() {
  const { theme, setTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <span className="slider round"></span>
    </label>
  );
}
