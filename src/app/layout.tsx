import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crochet Arts - Handcrafted with Love",
  description: "Discover unique crochet creations made with passion and skill. Each piece tells a story of creativity and craftsmanship.",
  keywords: "crochet, handmade, blankets, toys, accessories, home decor, amigurumi",
  authors: [{ name: "Crochet Arts" }],
  openGraph: {
    title: "Crochet Arts - Handcrafted with Love",
    description: "Discover unique crochet creations made with passion and skill.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
