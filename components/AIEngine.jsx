"use client";

import { ChevronRight, Search, Sparkle } from "lucide-react";

const SidebarItem = ({ icon, label, selected }) => (
  <div
    className={`flex font-grotesk-bold items-center gap-3 px-4 py-2 rounded-lg cursor-none ${
      selected ? "bg-blue-600 text-white" : "hover:bg-gray-700 text-gray-300"
    }`}
  >
    {icon}
    <span className="text-sm">{label}</span>
  </div>
);

const Card = ({ title, description, imageUrl, small }) => (
  <div
    className={`bg-gray-800 rounded-xl overflow-hidden shadow-md ${
      small ? "flex gap-4 p-4 items-center" : "p-4"
    } `}
  >
    <img
      src={imageUrl}
      alt={title}
      className={
        small
          ? "w-14 h-14 rounded-md object-cover"
          : "w-full h-40 object-cover rounded-md"
      }
    />
    <div>
      <h4 className="text-white font-semibold text-base">{title}</h4>
      <p className="text-gray-400 text-sm mt-1">{description}</p>
    </div>
  </div>
);

const AIEngineDashboard = () => {
  const searchIdeas = [
    "Why do cats hate cucumbers?",
    "Can AI write my homework?",
    "How to become a potato influencer?",
    "Is pineapple on pizza a crime?",
    "Why do we never see baby pigeons?",
  ];

  const cloudIdeas = [
    "Who is Sabrina Carpenter ?",
    "Will X be renamed as twitter ?",
    "Is AI going to take over the world ?",
  ];

  return (
    <div className=" text-white flex flex-col gap-3">
      <div className="flex flex-col gap-2 w-full py-3 px-5 border-[0.2px] bg-white rounded-3xl shadow-2xl shadow-purple/30">
        <div className="flex gap-2 items-center">
          <Sparkle color="#239AE4" size={".8em"} />
          <h3 className="text-sm text-[#239AE4] font-grotesk-medium">
            Ask Nexlify
          </h3>
        </div>
        <div className="flex w-full items-center gap-2 py-3 px-4 bg-[#F4F6F8] text-[#A3AAAC] rounded-xl">
          <div className="w-6 h-6 rounded-full bg-gradient-to-bl from-purple-400 via-blue-700 to-green-400" />
          <h3 className="font-grotesk-light">Ask me anything...</h3>
        </div>
        <div className="flex items-center gap-3 w-full">
          {cloudIdeas.map((idea, idx) => (
            <div
              key={idx}
              className="border border-gray-300 text-center w-full px-3 py-2 font-grotesk-light rounded-full text-gray-400 text-[0.8vw] whitespace-nowrap"
            >
              {idea}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full py-3 px-5 border-[0.2px] bg-white rounded-3xl shadow-2xl shadow-white/30">
        <h3 className="text-[#A3AAAC] font-grotesk-medium text-md">
          Recent Search
        </h3>
        <div className="w-full flex flex-col gap-4">
          {searchIdeas.map((idea, idx) => (
            <div key={idx} className="w-full flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Search color="#A3AAAC" size={"1em"} />
                <h3 className="font-grotesk-regular text-[#A3AAAC] text-sm">
                  {idea}
                </h3>
              </div>
              <ChevronRight color="#A3AAAC" size={"1em"} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIEngineDashboard;
