import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("@/app/ui/nav-bar"));

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    let resumeUrl = "";
    const res = await fetch(`${process.env.API_URL}files/api/resume/latest/`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `${process.env.API_TOKEN}`,
        },
        cache: "no-store",
    });
    if (res.ok) {
        const data = await res.json();
        resumeUrl = data.file;
    }
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen flex flex-col`}
            >
                <NavBar resumeUrl={resumeUrl} />
                <main className="flex-grow"> {children}</main>
            </body>
        </html>
    );
}
