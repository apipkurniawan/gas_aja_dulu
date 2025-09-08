import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Image
        src="/foto1.jpeg"
        alt="wedding"
        className="object-cover w-full h-full"
        width={100}
        height={200}
        priority
        unoptimized
      />
    </div>
  );
}
