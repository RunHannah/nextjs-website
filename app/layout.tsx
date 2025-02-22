import type { Metadata } from "next";
import { REM, Roboto_Flex, Zen_Tokyo_Zoo } from "next/font/google";
import { unstable_ViewTransition as ViewTransition } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "I'm Hannah.",
  description: "Personal website of Hannah.",
};

const rem = REM({
  subsets: ["latin"],
  variable: "--font-rem",
});

const roboto_flex = Roboto_Flex({
  subsets: ["latin"],
  weight: "200",
  variable: "--font-roboto-flex",
});

const zen_tokyo_zoo = Zen_Tokyo_Zoo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-zen-tokyo-zoo",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rem.variable} ${zen_tokyo_zoo.variable} ${roboto_flex.variable} max-w-3xl mx-auto p-5`}
      >
        <ViewTransition>{children}</ViewTransition>
      </body>
    </html>
  );
}
