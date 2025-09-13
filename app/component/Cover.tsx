"use client";

import Image from "next/image";
import { funnelSans, rougeScript } from "../layout";
import { useSearchParams } from "next/navigation";

export default function Cover({ onNext }: { onNext: () => void }) {
  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  const address = searchParams.get("address");

  return (
    <div className="relative h-full flex justify-center">
      <Image
        src="/foto1.jpeg"
        alt="wedding"
        className="object-cover h-full"
        width={600}
        height={200}
        priority
        unoptimized
      />

      <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 bg-black/30">
        {/* name */}
        <div
          className={`${rougeScript.className} flex flex-col justify-center items-center mb-9`}
        >
          <h1 className="text-[#f5a7b8] text-center drop-shadow-[2px_1px_0px_green] text-4xl">
            Nandara Apriliya
          </h1>
          <h2 className="text-[#f5a7b8] text-center drop-shadow-[2px_1px_0px_green] text-2xl">
            &
          </h2>
          <h1 className="text-[#f5a7b8] text-center drop-shadow-[2px_1px_0px_green] text-4xl">
            Apip Kurniawan
          </h1>
        </div>

        {/* card tamu */}
        <div
          className={`${funnelSans.className} relative w-11/12 max-w-[380px] rounded-2xl p-6
        bg-white/20 backdrop-blur-[1px] shadow-xl flex flex-col items-center text-center space-y-3`}
        >
          <h2 className="text-base text-gray-200 drop-shadow-lg">
            Mengundang Anda
          </h2>

          <div className="w-full flex justify-center flex-col items-center p-4 rounded-xl bg-black/40 text-white">
            <div className="py-1 px-2 w-max rounded-md  tracking-wide">
              <h3 className="text-lg font-bold text-[#f5a7b8]">
                {name || "Nama Tamu"}
              </h3>
            </div>
            <p className="text-sm mt-1">di</p>
            <p className="text-base italic mt-1">{address || "Alamat Tamu"}</p>
          </div>
        </div>

        {/* next */}
        <button
          onClick={onNext}
          className="mt-6 px-6 py-3 bg-white/30 text-white rounded-lg shadow-lg backdrop-blur hover:bg-white/50"
        >
          Lihat Acara 💍
        </button>
      </div>
    </div>
  );
}
