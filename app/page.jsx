import BuilderSection from "@/components/BuilderSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-20 w-full min-h-screen bg-[#f1f3f6] overflow-hidden">
      <Navbar />
      <BuilderSection />
    </div>
  );
}
