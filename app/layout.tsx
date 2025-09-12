import "./globals.css";
import type { Metadata } from "next";
import { Comic_Relief, Rouge_Script } from "next/font/google";

// Font untuk nama mempelai
export const rougeScript = Rouge_Script({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Font untuk detail acara
const comicRelief = Comic_Relief({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Our Wedding - Apip & Nandara Apriliya",
  description: "Undangan Pernikahan Apip & Nandara Apriliya",
  openGraph: {
    title: "Undangan Pernikahan Apip & Nandara Apriliya",
    description: "Jangan lewatkan momen spesial kami 💍",
    url: "https://gas-aja-dulu-mbqizfl4u-apipkurniawans-projects.vercel.app",
    siteName: "Undangan Apip & Nandara Apriliya",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // taruh file di /public
        width: 1200,
        height: 630,
        alt: "Apip & Nandara Apriliya",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Undangan Pernikahan Apip & Nandara Apriliya",
    description: "Jangan lewatkan momen spesial kami 💍",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comicRelief.className} antialiased`}>{children}</body>
    </html>
  );
}
