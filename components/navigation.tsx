import React from "react";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="font-bold">
      <ul className="flex justify-between pt-4">
        <li>
          <Link className="font-sans text-primary" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="font-sans text-primary" href="https://github.com/RunHannah">
            Github
          </Link>
        </li>
        <li>
          <Link
            className="font-sans text-primary"
            href="https://www.linkedin.com/in/hannahlee1/"
          >
            LinkedIn
          </Link>
        </li>
      </ul>
    </nav>
  );
}
