"use client";
import Image from "next/image";
import sublogo from "../../assets/sublogo.svg";
import discord from "../../assets/discord.svg";
import telegram from "../../assets/telegram.svg";
import twitter from "../../assets/twitter.svg";
import letter from "../../assets/letter.svg";
import { useState } from "react";

const linksCss =
  "text-[#826B8E] text-sm pl-0 group-hover:font-bold group-hover:pl-4 group-hover:text-[#E90083] transition-all cursor-pointer";

const titlesCss = "text-white text-base font-bold";

function square() {
  return (
    <span className="pr-2 absolute hidden group-hover:inline-block group-hover:text-[#E90083]">
      &#9632;
    </span>
  );
}

export function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className="flex flex-col w-full h-full justify-evenly items-center bg-[#120B14] border border-[#35243D] text-white">
      <div className="px-[220px]  py-10">
        <div className="flex gap-12">
          <div className="flex justify-center items-center h-full">
            <Image src={sublogo} alt="logo" />
          </div>

          <div>
            <h6 className={titlesCss}>PLATAFORM</h6>
            <div className="flex flex-col gap-3 mt-3">
              <p className="relative group">
                {square()}
                <span className={linksCss}>About</span>
              </p>

              <p className="relative group">
                {square()}
                <span className={linksCss}>Support</span>
              </p>
              <p className="relative group">
                {square()}
                <span className={linksCss}>Provably Fair</span>
              </p>
            </div>
          </div>

          <div>
            <h6 className={titlesCss}>POLICY</h6>
            <div className="flex flex-col gap-2 mt-3">
              <p className="relative group">
                {square()}
                <span className={linksCss}>Terms of Service</span>
              </p>
              <p className="relative group">
                {square()}
                <span className={linksCss}>Privacy Policy</span>
              </p>
              <p className="relative group">
                {square()}
                <span className={linksCss}>License</span>
              </p>
            </div>
          </div>

          <div>
            <h6 className={titlesCss}>COMMUNITY</h6>
            <div className="flex gap-12">
              <div className="flex flex-col gap-2 mt-3">
                <p className="relative group">
                  {square()}
                  <span className={linksCss}>Twitter</span>
                </p>
                <p className="relative group">
                  {square()}
                  <span className={linksCss}>Instagram</span>
                </p>
                <p className="relative group">
                  {square()}
                  <span className={linksCss}>Facebook</span>
                </p>
              </div>

              <div className="flex flex-col gap-2 mt-3">
                <p className="relative group">
                  {square()}
                  <span className={linksCss}>Telegram</span>
                </p>
                <p className="relative group">
                  {square()}
                  <span className={linksCss}>Discord</span>
                </p>
                <p className="relative group">
                  {square()}
                  <span className={linksCss}>Zealy</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-3 mt-10">
          <div className="flex cursor-pointer items-center justify-center w-[392px] h-[90px] rounded-[10px] bg-combined-pink-gradient shadow-pink-box-shadow ">
            <Image
              src={discord}
              alt="Discord icon"
              className="translate-y-[24px]"
            />
            <span className="w-[67%] break-all">
              Join <strong>{"Discord's largest community"}</strong> of players
              now!
            </span>
          </div>

          <div className="flex cursor-pointer items-center w-[392px] h-[90px] rounded-[10px] bg-blue-gradient shadow-blue-box-shadow px-6">
            <Image src={telegram} alt="Telegram icon" />
            <span className="w-[67%] break-all pl-6">
              Pigmo is also on Telegram.
              <strong>Discover more now</strong>
            </span>
          </div>

          <div className="flex cursor-pointer items-center justify-center w-[392px] h-[90px] rounded-[10px] bg-black-gradient shadow-black-box-shadow px-6 border border-[#35243D]">
            <Image src={twitter} alt="Twitter icon" />
            <span className="w-[67%] break-all pl-6">
              <strong>Follow us on X</strong> and keep up everything about us
            </span>
          </div>
        </div>
      </div>

      <div className="flex w-full border-t border-[#35243D] bg-[#170D19] justify-between items-center px-[230px] py-6 mt-auto">
        <div>
          <span className="text-[#826B8E]">
            <span className="text-white font-bold">@2024 Pigmo</span> - All
            rights reserved. Pigmo is licensed and authorized, operating under
            the Game Service Provider Master License.
          </span>
        </div>

        <div className="flex flex-row gap-4 text-[#826B8E]">
          <Image src={letter} alt="Letter icon" />
          CONTACT US
        </div>
      </div>
    </footer>
  );
}
