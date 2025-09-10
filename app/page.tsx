import Image from "next/image";
import WeddingCard from "./WeddingCard";

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
        <div className="flex gap-24 mb-14">
          <h1 className="text-[#f5a7b8] drop-shadow-[2px_1px_0px_green] text-2xl font-bold">
            Nandara Apriliya
          </h1>
          <h1 className="text-[#f5a7b8] drop-shadow-[2px_1px_0px_green] text-2xl font-bold">
            Apip Kurniawan
          </h1>
        </div>

        {/* card */}
        <WeddingCard />
      </div>
    </div>
  );
}
