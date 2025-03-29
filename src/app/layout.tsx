import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavBar from "@/app/ui/nav-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen flex flex-col`}
      >
        <NavBar />
        <main className="flex-grow"> {children}</main>
      </body>
    </html>
  );
}
