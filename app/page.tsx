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
      </header>
      <Navigation />
      <main className={theme}>
        <p className="font-body font-bold text-base pt-4 leading-[1.8] text-gray-800 dark:text-white">
          * Due to company restructuring, I am exploring 👀
          opportunities in Fullstack and Frontend roles. *
        </p>
        <p className="font-body text-sm md:text-base pt-4 leading-[1.8] text-gray-800 dark:text-white">
          I&apos;m a software engineer based in Los Angeles ☀️ with expertise in
          Typescript, React, Next.js, Node, PostgreSQL, MongoDB, REST APIs, and
          other fun stuff. Passionate about building robust web apps and always
          learning new technologies. Former public sector professional bringing
          a unique, problem-solving mindset to tech!
        </p>
        <p className="font-body text-sm md:text-base pt-4 leading-[1.8] text-gray-800 dark:text-white">
          This site is currently work in progress. I plan to update it with
          projects, so stay tuned!
        </p>
        <div className="flex flex-row items-center align-middle mt-6">
          <Switch
            aria-label="toggle light/dark theme"
            aria-checked={theme === "dark" ? "true" : "false"}
            checked={theme === "dark"}
            onCheckedChange={handleChange}
          />
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
