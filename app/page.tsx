import Main from "./component/Main";
import type { Metadata } from "next";

export const metadata: Metadata = {
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

export default function Home() {
  return <Main />;
}
