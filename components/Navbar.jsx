import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full mx-auto mt-6 sticky z-10 px-8">
      <div className="flex justify-between items-center p-3 rounded-2xl">
        <Image
          // className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="/images/logo.png"
          width={40}
          height={40}
          alt="nexlify-logo"
        />
        <div className="flex items-center gap-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a
            className="text-white font-grotesk-bold text-md bg-[#060708] hover:bg-white hover:text-black px-2 py-1.5 font-normal rounded-lg transition-all duration-300"
            href="#"
          >
            Pricing
          </a>
          <a
            className="text-white font-grotesk-bold text-md bg-[#060708] hover:bg-white hover:text-black px-2 py-1.5 font-normal rounded-lg transition-all duration-300"
            href="#"
          >
            Customers
          </a>
          <a
            className="text-white font-grotesk-bold text-md bg-[#060708] hover:bg-white hover:text-black px-2 py-1.5 font-normal rounded-lg transition-all duration-300"
            href="#"
          >
            Blogs
          </a>
          <a
            className="text-white font-grotesk-bold text-md bg-[#060708] hover:bg-white hover:text-black px-2 py-1.5 font-normal rounded-lg transition-all duration-300"
            href="#"
          >
            Docs
          </a>
        </div>

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
