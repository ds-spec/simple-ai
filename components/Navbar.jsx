import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full  mx-auto mt-6 sticky z-10 px-4">
      <div className="flex justify-between items-center p-3 rounded-2xl">
        <div className="flex items-center gap-12">
          <a className="text-white font-grotesk-light text-sm font-normal" href="#">
            Pricing
          </a>
          <a className="text-white font-grotesk-light text-sm font-normal" href="#">
            Customers
          </a>
          <a className="text-white font-grotesk-light text-sm font-normal" href="#">
            Blogs
          </a>
          <a className="text-white font-grotesk-light text-sm font-normal" href="#">
            Docs
          </a>
          <a className="text-white font-grotesk-light text-sm font-normal" href="#">
            Extra
          </a>
        </div>
        <Image
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="/images/logo.png"
          width={100}
          height={100}
          alt="nexlify-logo"
        />
        <div className="flex items-center gap-3">
          <button className="bg-white border-[.5px] border-gray-100 px-3 py-1.5 rounded-lg text-sm text-black font-grotesk-medium cursor-pointer shadow-sm hover:bg-gray-50">
            Login
          </button>
          <button className="bg-white px-3 py-1.5 rounded-lg text-sm text-black font-grotesk-medium cursor-pointer shadow-xs">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}
