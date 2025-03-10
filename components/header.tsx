import { useTheme } from "../context/themeContext";
import { Switch } from "../components/ui/switch";
import ThemeIcon from "../components/themeIcon";

export default function Header() {
  const { theme, setTheme } = useTheme();

  const handleChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header>
      <div className="flex flex-row items-start justify-between">
        <div className="pt-10 flex flex-col items-start">
          <div className="max-w-md">
            <h1 className="font-sans text-2xl md:text-3xl pb-2 text-primary">
              Hi, I&apos;m
            </h1>
            <h2 className="font-mono text-6xl text-primary">Hannah.</h2>
          </div>
          <h2 className="font-sans sm:text-2xl md:text-3xl pt-4 pb-4 text-secondary">
            I enjoy making things with code. 👩🏻‍💻
          </h2>
        </div>
        <div className="flex flex-row items-center align-middle">
          {/* Theme switch toggle*/}
          <Switch
            aria-label="toggle light/dark theme"
            aria-checked={theme === "dark" ? "true" : "false"}
            checked={theme === "dark"}
            onCheckedChange={handleChange}
          />
          <ThemeIcon theme={theme} />
        </div>
      </div>
    </header>
  );
}
