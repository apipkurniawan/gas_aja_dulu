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
        alt: "Apip & Sinta Wedding",
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
      <body
        className={`${greatVibes.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
