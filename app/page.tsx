import Image from "next/image";
import WeddingCard from "./WeddingCard";
import { rougeScript } from "./layout";

export default function Home() {
  return (
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
      </div>
    </div>
  );
}
