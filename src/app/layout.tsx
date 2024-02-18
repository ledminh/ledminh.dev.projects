import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Project List",
  description: "An exhaustive list of my projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>PROJECTS</h1>
        <h6>An exhaustive list of my projects</h6>
        <p>
          Hello, I have a passion for coding, particularly in web development.
          Over seven years of learning and experimenting with it, I have created
          numerous projects but have not always prioritized maintaining or
          showcasing them. As a result, I have a collection of small projects
          scattered around. The ones featured in my portfolio are the best ones
          I have created recently, showcasing my current skills. However, there
          are many more and I am in the process of listing all of them here. The
          goal is to demonstrate my progress over the years. I plan to keep this
          list updated as I continue to develop new projects.
        </p>
        {children}
      </body>
    </html>
  );
}
