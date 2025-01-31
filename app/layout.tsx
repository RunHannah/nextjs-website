import type { Metadata } from "next";
import { REM, Roboto_Flex, Zen_Tokyo_Zoo } from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "I'm Hannah.",
  description: "Personal website of Hannah.",
};

const rem = REM({
  subsets: ['latin'],
  variable: '--font-rem',
})

const roboto_flex = Roboto_Flex({
  subsets: ['latin'],
  weight: "200",
  variable: '--font-roboto-flex',
})

const zen_tokyo_zoo = Zen_Tokyo_Zoo({
  subsets: ['latin'],
  weight: "400",
  variable: '--font-zen-tokyo-zoo',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rem.variable} ${zen_tokyo_zoo.variable} ${roboto_flex.variable} $ max-w-3xl mx-auto p-5 bg-gray-200`}
      >
        <header>
          <div className="pt-10 flex flex-col items-start">
            <div className="max-w-md">
              <h1 className="font-sans sm:text-2xl pb-2 text-pink-900">
                Hi, I&apos;m
              </h1>
              <h2 className="font-mono sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-pink-900">
                Hannah.
              </h2>
            </div>
            <h2 className="font-sans sm:text-2xl md:text-3xl pt-4 pb-4 text-gray-900">
              I enjoy making things with code. 👩🏻‍💻
            </h2>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
