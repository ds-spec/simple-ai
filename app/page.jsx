import BuilderSection from "@/components/BuilderSection";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import NextGen from "@/components/NextGen";

export default function Home() {
  return (
    <div
      style={{
        background: "url('/images/bg.png') no-repeat center center fixed",
        backgroundSize: "cover",
      }}
      className="flex flex-col items-start gap-20 w-full min-h-screen overflow-hidden"
    >
      <Navbar />
      <BuilderSection />
      <NextGen />
    </div>
  );
}
