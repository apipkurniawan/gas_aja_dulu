"use client";

import { useRef } from "react";
import MapsSection from "./Maps";
import Cover from "./Cover";
import Weddings from "./Weddings";

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
      <div ref={section1Ref} className="h-screen flex snap-start">
        <Cover onNext={() => handleScroll(section2Ref)} />
      </div>

      {/* Section 2 */}
      <div ref={section2Ref} className="h-screen snap-start">
        <Weddings onNext={() => handleScroll(section3Ref)} />
      </div>

      {/* Section 3 */}
      <div
        ref={section3Ref}
        className="h-screen flex flex-col gap-6 items-center justify-center snap-start"
      >
        <h1 className="text-2xl font-bold text-white">
          Lokasi Akad Nikah & Resepsi
        </h1>

        <MapsSection />
      </div>
    </div>
  );
}
