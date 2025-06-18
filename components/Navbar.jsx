import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="max-w-[1100px] mx-auto mt-6 ">
      <div className="flex justify-between items-center bg-[#feffff] shadow-sm p-3 rounded-2xl">
        <Image
          src="/images/logo.svg"
          width={28}
          height={28}
          alt="simple-logo"
        />
        <div className="flex items-center gap-12">
          <a className="text-black text-sm font-inter font-normal" href="#">
            Pricing
          </a>
          <a className="text-black text-sm font-inter font-normal" href="#">
            Customers
          </a>
          <a className="text-black text-sm font-inter font-normal" href="#">
            Blogs
          </a>
          <a className="text-black text-sm font-inter font-normal" href="#">
            Docs
          </a>
          <a className="text-black text-sm font-inter font-normal" href="#">
            Extra
          </a>
        </div>
        <div className="flex items-center gap-3">
          <button className="border-[.5px] border-gray-100 px-3 py-1.5 rounded-lg text-sm text-black font-inter cursor-pointer shadow-sm hover:bg-gray-50">
            Login
          </button>
          <button className="bg-black px-3 py-1.5 rounded-lg text-sm text-white font-inter cursor-pointer shadow-xs">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}
