import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ambuj Singh | Frontend Engineer & Creative Developer",
  description: "Portfolio of Ambuj Singh, an IT Head, Frontend Developer, and Math & CS student at BHU building high-performance web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#07070C] text-slate-100 min-h-screen flex flex-col`}
      >
        <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none -z-10" />
        <Navbar />
        <main className="flex-grow flex flex-col relative w-full pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
