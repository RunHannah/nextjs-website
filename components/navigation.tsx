import React from "react";
import NavLink from "./navLink";

export default function Navigation() {
  const links = [
    { name: "home", url: "/" },
    { name: "work", url: "/work" },
    { name: "blog", url: "/blog" },
    { name: "github", url: "https://github.com/RunHannah" },
    { name: "linkedin", url: "https://www.linkedin.com/in/hannahlee1" },
  ];

  return (
    <nav className="font-bold">
      <ul className="flex justify-between pt-4">
        {links.map((link) => (
          <NavLink key={link.name} name={link.name} url={link.url} />
        ))}
      </ul>
    </nav>
  );
}
