"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function BackToTop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = scrollY > 100 ? 100 : scrollY;
      if (ref.current) {
        ref.current.style.transition = "opacity 0.3s";
        ref.current.style.opacity = `${opacity / 100}`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="opacity-0 fixed bottom-0 left-0 w-full p-4 bg-gray-800 text-gray-300 text-center"
      ref={ref}
    >
      <Link
        href="#top"
        className="text-white font-semibold text-lg hover:text-blue-500"
      >
        Back to top
      </Link>
    </div>
  );
}
