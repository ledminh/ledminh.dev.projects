"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  screenshot: {
    src: string;
    alt: string;
  };
};

export default function ScreenshotItem({ screenshot }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center ${
          isModalOpen ? "block" : "hidden"
        }`}
      >
        <div className="bg-slate-500 p-4 rounded-lg max-w-4xl">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-2 right-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            className="max-h-[90vh] object-contain"
            width={800}
            height={800}
          />
        </div>
      </div>
      <button
        className="border border-gray-100 rounded-lg w-20 h-20 overflow-hidden hover:-translate-y-1 hover:scale-110 transition-transform duration-300 ease-in-out"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          width={200}
          height={200}
        />
      </button>
    </>
  );
}
