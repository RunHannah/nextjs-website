"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  name: string;
  url: string;
}

export default function NavLink({ name, url }: NavLinkProps) {
  const pathname = usePathname();
  let isActive: boolean;

  if (url === "/") {
    isActive = pathname === url;
  } else {
    isActive = pathname.startsWith(url);
  }

  return (
    <li key={name}>
      <Link
        className={`font-sans text-primary ${
          isActive ? "underline decoration-4" : "hover:underline decoration-4"
        }`}
        href={url}
      >
        {name}
      </Link>
    </li>
  );
}
