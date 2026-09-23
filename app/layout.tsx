import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "John Gabriel | Full-Stack Developer & Aspiring Cloud Engineer",
  description:
    "Portfolio of John Gabriel - Full-Stack Developer specializing in React, Next.js, .NET, and Cloud Architecture.",
  keywords: [
    "John Gabriel",
    "Full-Stack Developer",
    "Cloud Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Philippines Developer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}