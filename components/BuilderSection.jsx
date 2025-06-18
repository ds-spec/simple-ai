import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function BuilderSection() {
  const avatars = [
    "avatar-01.jpg",
    "avatar-02.jpg",
    "avatar-03.jpg",
    "avatar-04.jpg",
    "avatar-05.jpg",
    "avatar-06.jpg",
  ];
  return (
    <div className="w-full h-full">
      <Image
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-0 z-0"
        src="/images/stripes.svg"
        width={780}
        height={500}
        alt="border-stripes-bg"
      />
      <section className="w-full h-full flex flex-col gap-6 justify-center items-center z-10 relative">
        <div className="min-w-5xl flex justify-center border-image">
          <div className="flex items-center">
            {avatars.map((avatar, index) => (
              <Image
                key={index}
                className="-mr-3 rounded-full border-2 border-white"
                src={`/images/${avatar}`}
                width={38}
                height={38}
                alt="avatars"
              />
            ))}
          </div>
        </div>
        <h1 className="font-inter text-6xl max-w-4xl font-semibold border-image text-black text-center">
          The website builder you're looking for
        </h1>
        <p className="font-inter text-lg text-[#374151] text-center max-w-3xl">
          Simple is a modern website builder powered by AI that changes how
          companies create user interfaces together.
        </p>
        <div className="flex items-center gap-3 border-image min-w-5xl justify-center">
          <button className="flex items-center gap-1 group bg-gradient-to-tl from-[#377ef4] via-[#2563eb] to-[#3b82f6] hover:brightness-110 px-4 py-3 font-inter font-medium text-sm rounded-lg shadow-lg cursor-pointer">
            Start Free Trial
            <ArrowRight
              className="group-hover:translate-x-2 transition-all duration-300"
              size={"1em"}
              color="#92c5fd"
            />
          </button>
          <button className="bg-white px-4 py-3 text-black font-inter text-sm shadow-lg font-medium rounded-lg cursor-pointer hover:bg-gray-50">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
