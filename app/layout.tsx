import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Curso de d Next JS",
  description: "By SofiDev",
};
console.log(metadata.title);
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} antialiased`}>
        <header className="flex items-center justify-between gap-20 w-full px-10 max-w-[1200px] mx-auto bg-gray-900 rounded-3xl sticky top-0 mt-5">
          <Link href="/">logo</Link>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
