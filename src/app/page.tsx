import Image from "next/image";
import banner from "../assets/banner.svg";
import solana from "../assets/solana.svg";
import google from "../assets/google.svg";
import metamask from "../assets/metamask.svg";
import hearts from "../assets/hearts.svg";
import seven from "../assets/seven.svg";
import nflBall from "../assets/nflball.svg";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { TopBar } from "@/components/layout/topBar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { coinsMocked } from "@/mock/coinsCards";
import { cassinoMocked } from "@/mock/cassinoCards";
import { SportsCard } from "@/components/ui/sportsCard";
import { sportingCards } from "@/mock/sportingCards";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center bg-[#170D19]">
      <TopBar />
      <section
        className="relative flex items-center h-[350px] w-[100%] border-b-[1px] border-[#35243D]"
        style={{
          background: "linear-gradient(89.89deg, #170D19 12.56%, #170D19 89%)",
        }}
      >
        <div className="flex flex-col pl-[280px] w-full transform">
          <h1 className="text-[2.625rem] font-bold text-slate-50">
            Boas vindas ao{" "}
            <span className="text-[#E90083] font-bold">Pigmo</span>!
          </h1>
          <span className="w-[320px] text-[#826B8E] font-xl font-semibold break-all">
            Jogue inteligente conosco. Crie sua conta ou entre agora para ganhar
            recompensas.
          </span>

          <div className="mt-[45px] gap-2 flex">
            <Button
              variant={"outline"}
              style={{
                boxShadow:
                  "0px -3px 0px 0px #170D1980 inset, " +
                  "0px 1px 0px 0px #FFA2A080 inset",
              }}
              className="w-[210px] bg-radial-gradient-button"
            >
              {"Quero me registrar".toLocaleUpperCase()}
            </Button>
            <Button variant={"icon"} className="p-2">
              <Image src={google} alt="Google Icon" />
            </Button>
            <Button variant={"icon"} className="p-2">
              <Image src={metamask} alt="Metamask Icon" />
            </Button>

            <Button variant={"icon"} className="p-2 cursor-pointer">
              <Image src={solana} alt="Solana Icon" />
            </Button>
          </div>
        </div>

        <Image
          src={banner}
          alt="Banner"
          className="absolute top-[-300px] right-[130px] w-[851px] h-[940px] z-10 scale-125 "
        />
      </section>

      <section className="bg-[#170D19] z-40 w-full flex flex-col items-center">
        <article className="flex w-full pt-[45px] pl-[280px] text-white gap-[65px] justify-start">
          <div className="flex items-center gap-1">
            <Image src={hearts} alt="Menu Icon" width={20} height={20} />
            <span className="text-base leading-4">CRIPTMOEDAS</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#826B8E]">
              {"Total 24h volume".toUpperCase()}:{" "}
              <span className="text-[#24D861]">$2.27B</span>
            </span>

            <Button
              variant={"outline"}
              className="p-0 m-0 rounded-lg h-6 px-2 bg-radial-gradient-button"
            >
              Trader
            </Button>
            <div className="flex gap-2 pl-2">
              <ChevronLeftIcon className="w-4 h-4" />
              <ChevronRightIcon className="w-4 h-4" />
            </div>
          </div>
        </article>

        <div className="flex mt-4 gap-2 pl-[10px]">
          {coinsMocked.map((coin) => (
            <Card isPositive={coin.isValuePositive} key={coin.id} />
          ))}
        </div>
      </section>

      <section className="bg-[#170D19] z-40 pt-10 w-full flex flex-col items-center">
        <div className="flex items-center gap-1 justify-start w-full pl-[280px]">
          <Image src={seven} alt="Menu Icon" width={20} height={20} />
          <span className="text-white text-base leading-4">CASSINO</span>

          <div className="flex gap-2 pl-2">
            <ChevronLeftIcon color="white" className="w-4 h-4" />
            <ChevronRightIcon color="white" className="w-4 h-4" />
          </div>
        </div>

        <div className="flex mt-4 gap-4 pl-[60px]">
          {cassinoMocked.map((item) => (
            <div
              key={item.id}
              className="hover:translate-y-[-8px] transition-all ease-linear cursor-pointer"
            >
              <Image className="rounded-lg" src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#170D19] z-40 pt-10 w-full flex flex-col items-center">
        <div className="flex items-center gap-1 w-full pl-[280px]">
          <Image src={nflBall} alt="NFL Ball Icon" width={20} height={20} />
          <span className="text-white text-base leading-4">ESPORTES</span>
        </div>
        <div className="flex mt-4 gap-2 pb-[134px] pl-[10px]">
          {sportingCards.map((item) => (
            <SportsCard
              image={item.image}
              whiteImage={item.whiteImage}
              title={item.title}
              key={item.id}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
