import Image from "next/image";
import bitCoin from "../../assets/bitcoin.svg";
import { Badge } from "./badge";
import { ArrowUpRightIcon, ArrowDownLeftIcon } from "lucide-react";

export function Card(props: { isPositive: boolean }) {
  return (
    <div
      className="flex flex-col w-44 h-[153px] border border-[#35243D] rounded-md p-3"
      style={{
        background:
          "linear-gradient(128.58deg, rgba(0, 0, 0, 0) 63.84%, rgba(204, 149, 215, 0.15) 96.69%)",
      }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center flex-row gap-2">
          <Image src={bitCoin} alt="bitCoin" />
          <span className="text-white">BTC</span>
        </div>

        <Badge
          variant="outline"
          className={!props.isPositive ? "border-[#DE3449] text-[#DE3449] shadow-red-light" : ""}
        >
          {props.isPositive ? (
            <ArrowUpRightIcon size={18} className="translate-y-[-1px]" />
          ) : (
            <ArrowDownLeftIcon className="translate-y-[-1px]" size={18} />
          )}{" "}
          2.59%
        </Badge>
      </div>

      <span className="h-[1px] w-full bg-[#35243D] my-[6px]"></span>

      <h3 className="font-semibold text-lg text-white leading-5">$ 60,390.85</h3>

      <span className="h-[1px] w-full bg-[#35243D] my-[6px]"></span>

      <div className="flex flex-col gap-2 mt-1">
        <div className="flex justify-between">
          <span className="font-semibold text-xs text-[#826B8E]">24 VOL</span>
          <span className="font-semibold text-xs text-white">$757M</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-xs text-[#826B8E]">LEVERAGE</span>
          <span className="font-semibold text-xs text-white">1000x</span>
        </div>
      </div>
    </div>
  );
}
