"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import AIEngineDashboard from "./AIEngine";

export default function BuilderSection() {
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);
  const avatars = [
    "avatar-01.jpg",
    "avatar-02.jpg",
    "avatar-03.jpg",
    "avatar-04.jpg",
    "avatar-05.jpg",
    "avatar-06.jpg",
  ];

  const handleCursorMovement = (e) => {
    console.log(e.clientX, e.clientY);
    setClientX(e.clientX - 155);
    setClientY(e.clientY - 155);
  };

  return (
    <div className="w-full h-full px-36 cursor-none">
      <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(#3846638c_1px,transparent_1px)] [background-size:16px_16px]" />
      <section
        onMouseMove={(e) => handleCursorMovement(e)}
        className="w-full min-h-[80vh] bg-[#141414] rounded-lg flex flex-col gap-6 px-8 py-12 z-10 relative "
      >
        <div
          style={{
            position: "absolute",
            top: `${clientY}px`,
            left: `${clientX}px`,
            pointerEvents: "none",
          }}
          className="cursor"
        />
        <div className="flex z-10 w-full items-center gap-8 ">
          <div className="flex flex-col max-w-md gap-6 w-full">
            <h1 className="font-grotesk-regular text-6xl font-semibold text-white">
              Impactful Stories. Made effortlessly.
            </h1>
            <p className="font-grotesk-light text-lg text-white">
              Simple is a modern website builder powered by AI that changes how
              companies create user interfaces together.
            </p>
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
            <div className="flex items-center gap-3 min-w-5xl">
              <button className="flex items-center gap-1 group bg-gradient-to-tl from-[#377ef4] via-[#2563eb] to-[#3b82f6] hover:brightness-110 px-4 py-3 font-grotesk-medium font-medium text-sm rounded-lg shadow-lg cursor-none">
                Start Free Trial
                <ArrowRight
                  className="group-hover:translate-x-2 transition-all duration-300"
                  size={"1em"}
                  color="#92c5fd"
                />
              </button>
              <button className="bg-white px-4 py-3 text-black font-grotesk-medium text-sm shadow-lg font-medium rounded-lg cursor-none hover:bg-gray-50">
                Learn More
              </button>
            </div>
          </div>

          <div className="w-full h-full flex justify-center py-4 border-image">
            {/* <div className="bg-[#101827] w-full h-full rounded-2xl">
              <div className="flex justify-between items-center w-full h-10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4b5563]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4b5563]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4b5563]" />
                </div>
                <p className="font-inter text-sm text-white">nexlify.ai</p>
                <div />
              </div>
              <div className="mt-4 px-4">
                <p className="font-roboto text-sm">
                  npm login{" "}
                  <span className="text-[#6b7280]">
                    --registry=https://npm.pkg.github.com
                  </span>{" "}
                  <br />
                  <span className="text-[#6b7280]">
                    --scope=@phanatic Successfully logged-in.
                  </span>{" "}
                  <p className="font-roboto text-sm mt-6">
                    npm publish <br />
                    <span className="text-[#6b7280]">Package published.</span>
                  </p>
                </p>
              </div>
            </div> */}
            <AIEngineDashboard />
          </div>
        </div>
      </section>
    </div>
  );
}
