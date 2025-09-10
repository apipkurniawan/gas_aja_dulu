import "./globals.css";
import type { Metadata } from "next";
import { Great_Vibes, Playfair_Display } from "next/font/google";

// Font untuk nama mempelai
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes", // optional pakai CSS variable
});

// Font untuk detail acara
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // bisa pilih beberapa varian
  variable: "--font-playfair",
});

export const metadata = {
  title: "Undangan Pernikahan",
  description: "Website Undangan Apip Kurniawan & Nandara Apriliya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${greatVibes.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
