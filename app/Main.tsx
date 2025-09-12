"use client";

import Image from "next/image";
import WeddingCard from "./WeddingCard";
import { rougeScript } from "./layout";
import { useRef } from "react";

export default function Main() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  const handleScroll = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen w-screen overflow-hidden snap-y snap-mandatory overflow-y-scroll">
      {/* Section 1 */}
      <div
        ref={section1Ref}
        className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#dcc5b2] to-[#8A784E] snap-start"
      >
        <div className="flex relative items-center justify-center h-screen w-screen">
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
              className={`${rougeScript.className} flex flex-col justify-center items-center mb-14`}
            >
              <h1 className="text-[#f5a7b8] text-center drop-shadow-[2px_1px_0px_green] text-2xl">
                Nandara Apriliya
              </h1>
              <h2 className="text-[#f5a7b8] text-center drop-shadow-[2px_1px_0px_green]">
                &
              </h2>
              <h1 className="text-[#f5a7b8] text-center drop-shadow-[2px_1px_0px_green] text-2xl">
                Apip Kurniawan
              </h1>
            </div>

            {/* card */}
            <WeddingCard />

            <button
              onClick={() => handleScroll(section2Ref)}
              className="mt-6 px-6 py-3 bg-white/30 text-white rounded-lg shadow-lg backdrop-blur hover:bg-white/50"
            >
              Next ⬇️
            </button>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div
        ref={section2Ref}
        className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-200 to-teal-400 snap-start"
      >
        <h1 className="text-4xl font-bold text-white">About Section</h1>
        <button
          onClick={() => handleScroll(section3Ref)}
          className="mt-6 px-6 py-3 bg-white/30 text-white rounded-lg shadow-lg backdrop-blur hover:bg-white/50"
        >
          Next ⬇️
        </button>
      </div>

      {/* Section 3 */}
      <div
        ref={section3Ref}
        className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-300 to-violet-500 snap-start"
      >
        <h1 className="text-4xl font-bold text-white">Contact Section</h1>
        <p className="mt-4 text-lg text-white">Thanks for scrolling!</p>
      </div>
    </div>
  );
}
