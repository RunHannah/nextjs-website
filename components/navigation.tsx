import React from "react";
import Link from "next/link";

export default function Navigation() {
  const links = [
    { name: "work", url: "/work"},
    { name: "posts", url: "/posts"},
    { name: "github", url: "https://github.com/RunHannah" },
    { name: "linkedin", url: "https://www.linkedin.com/in/hannahlee1" },
  ];

  return (
    <nav className="font-bold">
      <ul className="flex justify-between pt-4">
        {links.map((link) => (
          <li key={link.name}>
            <Link className="font-sans text-primary" href={link.url}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
