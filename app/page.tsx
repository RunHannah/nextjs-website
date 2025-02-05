"use client";

import { useTheme, ThemeProvider } from "../context/themeContext";
import Navigation from "../components/navigation";
import { Switch } from "../components/ui/switch";
import ThemeIcon from "../components/themeIcon";

function HomeContent() {
  const { theme, setTheme } = useTheme();

  const handleChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header>
        <div className="pt-10 flex flex-col items-start">
          <div className="max-w-md text-primary">
            <h1 className="font-sans text-2xl md:text-3xl pb-2">
              Hi, I&apos;m
            </h1>
            <h2 className="font-mono text-6xl">Hannah.</h2>
          </div>
          <h2 className="font-sans sm:text-2xl md:text-3xl pt-4 pb-4 text-secondary">
            I enjoy making things with code. 👩🏻‍💻
          </h2>
        </div>
      </header>
      <Navigation />
      <main className={theme}>
        <p className="text-sm md:text-base pt-4 leading-[1.8]">
          I&apos;m a software engineer based in Los Angeles ☀️ with expertise in
          Typescript, React, Next.js, Node, PostgreSQL, MongoDB, REST APIs and
          other fun stuff. Passionate about building robust web apps and always
          learning new technologies. Former public sector professional bringing
          a unique, problem-solving mindset to tech!
        </p>
        <p className="text-sm md:text-base pt-4 leading-[1.8]">
          This site is a work in progress. I plan to update it with projects, so
          stay tuned!
        </p>
        <div className="flex flex-row items-center align-middle mt-6">
          <Switch checked={theme === "dark"} onCheckedChange={handleChange} />
          <ThemeIcon theme={theme} />
        </div>
      </main>
    </>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
}
