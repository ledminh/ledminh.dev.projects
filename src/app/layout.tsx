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
        <div className="p-8 grid gap-8">
          <header className="grid gap-4">
            <h1>PROJECTS</h1>
            <h6 className="bg-gray-700 pl-4">
              An exhaustive list of my projects
            </h6>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
