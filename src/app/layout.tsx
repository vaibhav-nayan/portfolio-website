import type { Metadata } from "next";
import { Inter, Calistoga} from 'next/font/google'
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Toaster } from "react-hot-toast";

const inter = Inter({subsets: ['latin'], variable: "--font-sans"})
const calistoga = Calistoga({subsets: ['latin'], variable: "--font-serif", weight: ["400"]})

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Renders my performance and statistics in front of you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}><Toaster position="bottom-right" />{children}</body>
    </html>
  );
}
