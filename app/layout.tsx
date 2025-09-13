import "./globals.css";
import { Comic_Relief, Rouge_Script, Funnel_Sans } from "next/font/google";

/* global font */
const comicRelief = Comic_Relief({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

/* Nama mempelai */
export const rougeScript = Rouge_Script({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

/* Nama & alamat tamu */
export const funnelSans = Funnel_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

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
