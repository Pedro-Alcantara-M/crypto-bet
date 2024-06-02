"use client";
import Image from "next/image";
import { useState } from "react";

interface SportsCardProps {
  image: string;
  title: string;
  whiteImage: string;
}

export function SportsCard({ image, title, whiteImage }: SportsCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col justify-center items-center cursor-pointer w-44 h-[150px] border border-[#35243D] text-[#826B8E] rounded-md gap-[21px] ease-in duration-300 ${
        isHovered ? "bg-gradient-to-hover shadow-to-hover text-white" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={isHovered ? whiteImage : image}
        alt={title}
        width={40}
        height={40}
      />
      <span className="font-bold text-sm">{title.toLocaleUpperCase()}</span>
    </div>
  );
}

export default SportsCard;
