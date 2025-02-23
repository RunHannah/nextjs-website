"use client";

import { useTheme } from "../context/themeContext";
import { Switch } from "../components/ui/switch";
import ThemeIcon from "../components/themeIcon";

function HomeContent() {
  const { theme, setTheme } = useTheme();

  const handleChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <p className="font-body font-bold text-base pt-4 leading-[1.8] text-gray-800 dark:text-white text-center">
        * Due to company restructuring, I am exploring 👀 new opportunities in
        Fullstack and Frontend roles. *
      </p>
      <p className="font-body text-sm md:text-base pt-4 leading-[1.8] text-gray-800 dark:text-white">
        I&apos;m a software engineer based in Los Angeles ☀️ with expertise in
        Typescript, React, Next.js, Node, PostgreSQL, MongoDB, REST APIs, and
        other fun stuff. Passionate about building robust web apps and always
        learning new technologies. Former public sector professional bringing a
        unique, problem-solving mindset to tech!
      </p>
      <p className="font-body text-sm md:text-base pt-4 leading-[1.8] text-gray-800 dark:text-white">
        This site is a work in progress. I plan to update it with projects, so
        stay tuned!
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
    </>
  );
}

export default function Home() {
  return <HomeContent />;
}
