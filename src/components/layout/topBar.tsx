import logo from "../../assets/logo.svg";
import { Button } from "../ui/button";
import Hamburger from "../../assets/hamburger.svg";
import Image from "next/image";

export function TopBar() {
  return (
    <header className="flex justify-between items-center w-full h-[72px] border border-[#35243D] bg-[#170D19] z-50 px-8">
      <div className="flex flex-row items-center gap-4">
        <Button variant={"link"} className="p-0 m-0">
          <Image
            src={Hamburger}
            alt="Menu Icon"
            width={25}
            height={16}
          />
        </Button>
        <Image src={logo} alt="logo" width={100} height={24} />
      </div>

      <div>
        <Button variant={"link"}>Login</Button>
        <Button
          variant={"outline"}
          className="bg-radial-gradient-button"
          style={{
            boxShadow: '0px -3px 0px 0px #170D1980 inset, ' + '0px 1px 0px 0px #FFA2A080 inset'
          }}
        >
          Register
        </Button>
      </div>
    </header>
  );
}
