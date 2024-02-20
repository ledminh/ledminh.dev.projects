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
        <main>{children}</main>
      </body>
    </html>
  );
}
