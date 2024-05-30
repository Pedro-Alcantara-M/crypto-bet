"use client";
import { Button } from "./button";
import sword from "../../assets/sword.svg";
import trophy from "../../assets/trophy.svg";
import config from "../../assets/configicon.svg";
import shortLogo from "../../assets/shortLogo.svg";
import menuAirDrop from "../../assets/menuAirDrop.svg";
import menuStart from "../../assets/menuStar.svg";
import menuLogo from "../../assets/menulogo.svg";
import sevenIcon from "../../assets/menuSeven.svg";
import menuRealeases from "../../assets/menuReleases.svg";
import menuTableGames from "../../assets/menuTableGames.svg";
import menuRoullete from "../../assets/menuRoullete.svg";
import menuBlackJack from "../../assets/menuBlackJack.svg";
import dice from "../../assets/dice.png";
import brazilFlag from "../../assets/brazilFlag.svg";
import contactUsSquare from "../../assets/contactUs.png";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowUpRightIcon, ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import classNames from "classnames";

const collapsedCss = " w-full bg-[#1F1423] border-[#251929]";
const collapsedContentCss =
  "flex w-full flex-row justify-between text-base font-bold px-6 py-4";

const SideMenu = () => {
  const [isOpenCassino, setIsOpenCassino] = useState(true);
  const [isOpenTrade, setIsOpenTrade] = useState(false);
  const [isOpenSports, setIsOpenSports] = useState(false);

  return (
    <div className="flex flex-col w-[260px] bg-[#170D19] border border-[#35243D]">
      <div className="flex justify-between bg-[#170D19] border border-[#35243D] rounded-xl gap-4 mx-6 my-3 p-1">
        <Button variant={"outline"} className="bg-radial-gradient-button">
          <Image src={sword} alt="Sword Icon" />
          Cassino
        </Button>

        <div className="flex items-center w-[41px]">
          <Image src={trophy} alt="Trophy Icon" />
        </div>

        <div className="flex items-center w-[41px]">
          <Image src={config} alt="Config Icon" />
        </div>
      </div>
      <div className="flex flex-row mt-5 gap-[10px] px-5">
        <Image src={shortLogo} alt="short logo icon" />

        <div className="w-full">
          <p className="text-base font-bold text-white">Pigmo Coin</p>

          <div className="flex flex-row justify-between w-full">
            <span className="text-[#826B8E] text-sm">$0.0000</span>
            <Badge variant="outline">
              <ArrowUpRightIcon size={16} className="translate-y-[-1px] p-0" />{" "}
              2.13%
            </Badge>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="flex flex-row mt-5 gap-[10px]">
          <Image src={menuAirDrop} alt="Menu Air Drop Icon" />
          <span className=" text-[#826B8E] text-base font-bol">
            $PIG Airdrop
          </span>
        </div>

            <div className="flex flex-row mt-2.5 gap-[10px] pb-2">
          <Image src={menuStart} alt="Menu start Icon" />
          <span className=" text-[#826B8E] text-base font-bol">
            NFT Staking
          </span>
        </div>
      </div>
      <Collapsible
        open={isOpenCassino}
        onOpenChange={setIsOpenCassino}
        className={classNames(collapsedCss, "mt-4", isOpenCassino ? "" : "bg-[#170D19]")}
      >
        <CollapsibleTrigger
        className={classNames(collapsedContentCss, {
          "bg-[#170D19]": !isOpenCassino,
          "bg-[#25192999]": isOpenCassino,
          "text-[#E90083]": isOpenCassino,
          "text-[#826B8E]": !isOpenCassino,
        })}
        >
          Cassino {isOpenCassino ? <ChevronUp /> : <ChevronDown />}
        </CollapsibleTrigger>
        <CollapsibleContent className="px-6">
          <div className="flex flex-row mt-2.5 gap-[10px] pb-2">
            <Image src={menuLogo} alt="Menu logo Icon" />
            <span className=" text-[#826B8E] text-base font-bol">
              Originals
            </span>
          </div>

              <div className="flex flex-row mt-2.5 gap-[10px] pb-2">
            <Image src={sevenIcon} alt="Menu gambling Icon" />
            <span className=" text-[#826B8E] text-base font-bol">
              Caça-Niqueis
            </span>
          </div>

              <div className="flex flex-row mt-2.5 gap-[10px] pb-2">
            <Image src={menuRealeases} alt="Menu realeases Icon" />
            <span className=" text-[#826B8E] text-base font-bol">
              Lançamentos
            </span>
          </div>

              <div className="flex flex-row mt-2.5 gap-[10px] pb-2">
            <Image src={menuTableGames} alt="Menu table games Icon" />
            <span className=" text-[#826B8E] text-base font-bol">
              Jogos de mesa
            </span>
          </div>

              <div className="flex flex-row mt-2.5 gap-[10px] pb-2">
            <Image src={menuRoullete} alt="Menu roullete Icon" />
            <span className=" text-[#826B8E] text-base font-bol">Roleta</span>
          </div>

              <div className="flex flex-row mt-2.5 gap-[10px] pb-2">
            <Image src={menuBlackJack} alt="Menu blackjack Icon" />
            <span className=" text-[#826B8E] text-base font-bol">
              BlackJack
            </span>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible
        open={isOpenTrade}
        onOpenChange={setIsOpenTrade}
        className={classNames(collapsedCss)}
      >
        <CollapsibleTrigger
          className={classNames(collapsedContentCss, {
            "bg-[#170D19]": !isOpenTrade,
            "bg-[#25192999]": isOpenTrade,
            "text-[#E90083]": isOpenTrade,
            "text-[#826B8E]": !isOpenTrade,
          })}
        >
          Trade {isOpenTrade ? <ChevronUp /> : <ChevronDown />}
        </CollapsibleTrigger>
        <CollapsibleContent className="px-6">
              <div className="flex flex-row mt-2.5 gap-[10px] pb-2">
            <Image src={menuLogo} alt="Menu logo Icon" />
            <span className=" text-[#826B8E] text-base font-bol">
              Originals
            </span>
          </div>

              <div className="flex flex-row mt-2.5 gap-[10px] pb-2">
            <Image src={sevenIcon} alt="Menu gambling Icon" />
            <span className=" text-[#826B8E] text-base font-bol">
              Caça-Niqueis
            </span>
          </div>

              <div className="flex flex-row mt-2.5 gap-[10px] pb-2">
            <Image src={menuRealeases} alt="Menu realeases Icon" />
            <span className=" text-[#826B8E] text-base font-bol">
              Lançamentos
            </span>
          </div>

              <div className="flex flex-row mt-2.5 gap-[10px] pb-2">
            <Image src={menuTableGames} alt="Menu table games Icon" />
            <span className=" text-[#826B8E] text-base font-bol">
              Jogos de mesa
            </span>
          </div>

              <div className="flex flex-row mt-2.5 gap-[10px] pb-2">
            <Image src={menuRoullete} alt="Menu roullete Icon" />
            <span className=" text-[#826B8E] text-base font-bol">Roleta</span>
          </div>

              <div className="flex flex-row mt-2.5 gap-[10px] pb-2">
            <Image src={menuBlackJack} alt="Menu blackjack Icon" />
            <span className=" text-[#826B8E] text-base font-bol">
              BlackJack
            </span>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible
        open={isOpenSports}
        onOpenChange={setIsOpenSports}
        className={collapsedCss}
      >
        <CollapsibleTrigger
          className={classNames(collapsedContentCss, {
            "bg-[#170D19]": !isOpenSports,
            "bg-[#25192999]": isOpenSports,
            "text-[#E90083]": isOpenSports,
            "text-[#826B8E]": !isOpenSports,
          })}
        >
          Esportes {isOpenSports ? <ChevronUp /> : <ChevronDown />}
        </CollapsibleTrigger>
        <CollapsibleContent className="px-6">
              <div className="flex flex-row mt-2.5 gap-[10px] pb-2">
            <Image src={menuLogo} alt="Menu logo Icon" />
            <span className=" text-[#826B8E] text-base font-bol">
              Originals
            </span>
          </div>

              <div className="flex flex-row mt-2.5 gap-[10px] pb-2">
            <Image src={sevenIcon} alt="Menu gambling Icon" />
            <span className=" text-[#826B8E] text-base font-bol">
              Caça-Niqueis
            </span>
          </div>

              <div className="flex flex-row mt-2.5 gap-[10px] pb-2">
            <Image src={menuRealeases} alt="Menu realeases Icon" />
            <span className=" text-[#826B8E] text-base font-bol">
              Lançamentos
            </span>
          </div>

              <div className="flex flex-row mt-2.5 gap-[10px] pb-2">
            <Image src={menuTableGames} alt="Menu table games Icon" />
            <span className=" text-[#826B8E] text-base font-bol">
              Jogos de mesa
            </span>
          </div>

              <div className="flex flex-row mt-2.5 gap-[10px] pb-2">
            <Image src={menuRoullete} alt="Menu roullete Icon" />
            <span className=" text-[#826B8E] text-base font-bol">Roleta</span>
          </div>

              <div className="flex flex-row mt-2.5 gap-[10px] pb-2">
            <Image src={menuBlackJack} alt="Menu blackjack Icon" />
            <span className="text-[#826B8E] text-base font-bol">BlackJack</span>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <div
        className="relative flex flex-col items-center text-[#826B8E] rounded-md mt-24 p-0 cursor-pointer px-3"
        style={{
          boxShadow: "0px 4px 24.9px 0px #FF00B812",
        }}
      >
        <Image
          src={contactUsSquare}
          alt="Contact Us Square"
          className="absolute r-0 t-0"
        />
        <span className="text-white text-sm font-bold translate-y-[10px] translate-x-[-40px]">
          Fale Conosco
        </span>
        <span className="text-[#826B8E] text-xs w-[50%] translate-y-[15px] translate-x-[-25px]">
          Se precisar de ajuda nós estamos aqui
        </span>

        <Image
          src={dice}
          alt="Dice"
          width={50}
          className="translate-y-[-40px] translate-x-[80px] rotate-[-45deg] z-100"
        />
      </div>

      <div className="flex justify-between px-3">
        <span className="text-white font-bold">Idioma</span>
        <Image src={brazilFlag} alt="Brazil flag Icon" />
      </div>
    </div>
  );
};

export default SideMenu;
