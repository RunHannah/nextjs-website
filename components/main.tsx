"use client";

import { unstable_ViewTransition as ViewTransition } from "react";
import { useTheme, ThemeProvider } from "../context/themeContext";
import Navigation from "../components/navigation";
import Header from "../components/header";

interface MainProps {
  children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  const { theme } = useTheme();

  return (
    <ThemeProvider>
      <Header />
      <Navigation />
      <ViewTransition>
        <main className={theme}>{children}</main>
      </ViewTransition>
    </ThemeProvider>
  );
}
