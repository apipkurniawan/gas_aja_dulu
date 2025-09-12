"use client";

import { useEffect, useState } from "react";

export default function WeddingCard() {
  const targetDate = new Date("2025-12-20T10:00:00"); // tanggal pernikahan
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("Hari ini pernikahan 🎉💍");
        clearInterval(timer);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      if (days > 0) {
        setTimeLeft(`${days} hari lagi`);
      } else {
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        setTimeLeft(`${hours} jam ${minutes} menit lagi`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div
      className="relative w-full max-w-[380px] rounded-2xl p-6
        bg-white/20 backdrop-blur-[1px] shadow-xl border border-white/30
        flex flex-col items-center text-center space-y-3"
    >
      <h2 className="text-xl font-bold text-white drop-shadow-lg">
        💍 Pernikahan Kami
      </h2>

      {/* Acara Pria */}
      <div className="w-full p-4 rounded-xl bg-black/40 text-white">
        <p className="text-sm mt-1">Sabtu, 8 November 2025</p>
        <p className="text-sm">09:00 WIB - selesai</p>
        <p className="text-sm italic mt-1">Kp. Kramat Desa Cihaur</p>
      </div>

      {/* Akad Nikah & Resepsi */}
      <div className="w-full flex justify-center flex-col items-center p-4 rounded-xl bg-black/40 text-white">
        <div className="py-1 px-2 w-max bg-gradient-to-br from-[#f5a7b8] via-[#f7b1b3] to-[#e998a8] rounded-md bg-black/30 text-emerald-700 tracking-wide">
          <h3 className="text-base font-semibold">Akad Nikah & Resepsi</h3>
        </div>
        <p className="text-sm mt-1">Sabtu, 6 Desember 2025</p>
        <p className="text-sm">08:00 - 16:00 WIB</p>
        <p className="text-sm italic mt-1">
          Gedung Faletehan, Kramatwatu Serang
        </p>
      </div>

      {/* countdown */}
      <div className="flex justify-end w-full">
        <p className="text-xs text-gray-200 text-end">{timeLeft}</p>
      </div>
    </div>
  );
}
