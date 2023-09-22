import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserMenu from "./UserMenu";

function Header() {
  return (
    <header className="p-4 border-b sticky top-0 bg-white">
      <div className="flex justify-between gap-4 px-4">
        <Image src="/logo.svg" width={40} height={40} alt="Logo" />
        <UserMenu />
      </div>
    </header>
  );
}

export default Header;
