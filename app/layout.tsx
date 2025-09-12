import "./globals.css";
import { Comic_Relief, Rouge_Script } from "next/font/google";

/* global font */
const comicRelief = Comic_Relief({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// Font untuk nama mempelai
export const rougeScript = Rouge_Script({
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
