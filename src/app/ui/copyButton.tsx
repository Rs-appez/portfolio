"use client";

import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";

export default function CopyButton({ text }: { text: string }) {
  const [tooltipText, setTooltipText] = useState("Copy to clipboard");

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setTooltipText("Copied!");
    setTimeout(() => setTooltipText("Copy to clipboard"), 2000);
  };

  return (
    <div className="relative group inline-flex ">
      <span
        className={clsx(
          "absolute left-1/2 transform -translate-x-1/2 top-0 mb-1 hidden w-max rounded px-2 py-1 text-xs text-white group-hover:block",
          tooltipText === "Copied!" ? "bg-green-700" : "bg-gray-700",
        )}
      >
        {tooltipText}
      </span>
      <Image
        src="/copyButton.svg"
        alt="Copy"
        width={20}
        height={20}
        className="ml-2 cursor-pointer dark:invert"
        onClick={handleCopy}
      />
    </div>
  );
}
