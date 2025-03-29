"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <>
      <div className="flex flex-row justify-center bg-gray-100">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "text-lg font-semibold p-5 align-middle",
                isActive
                  ? "text-blue-500"
                  : "text-gray-700 hover:text-blue-500",
              )}
            >
              <p>{link.name}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}
