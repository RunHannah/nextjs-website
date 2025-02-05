import React from "react";
import Image from "next/image";
import sun from "../public/sun.svg";
import moon from "../public/moon.svg";

interface ThemeIconProps {
  theme: "light" | "dark";
}

export default function ThemeIcon({ theme }: ThemeIconProps) {
  return (
    <div className="pl-2">
      {theme === "light" ? (
        <Image src={sun} alt="Sun icon" className="w-4 h-4" />
      ) : (
        <Image src={moon} alt="Moon icon" className="w-4 h-4" />
      )}
    </div>
  );
}
