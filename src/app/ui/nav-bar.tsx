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

export default function NavBar({ resumeUrl }: { resumeUrl: string }) {
    const pathname = usePathname();
    return (
        <>
            <div className="flex flex-row justify-center bg-foreground">
                <div className="absolute right-4 text-background align-middle p-5">
                    <a
                        href={resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:text-selected"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-label="Open Resume in New Tab"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect x="4" y="2" width="16" height="20" rx="2" fill="#e0e0e0" />
                            <line
                                x1="7"
                                y1="6"
                                x2="17"
                                y2="6"
                                stroke="#888"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <line
                                x1="7"
                                y1="9"
                                x2="17"
                                y2="9"
                                stroke="#888"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <line
                                x1="7"
                                y1="12"
                                x2="13"
                                y2="12"
                                stroke="#888"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M15 7h4v4"
                                stroke="#1976d2"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M15 11l4-4"
                                stroke="#1976d2"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>
                <div className="flex flex-row justify-center">
                    {links.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    "text-lg font-semibold p-5 align-middle",
                                    isActive
                                        ? "text-selected"
                                        : "text-background hover:text-selected",
                                )}
                            >
                                <p>{link.name}</p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
