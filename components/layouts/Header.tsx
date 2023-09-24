import Image from "next/image";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import UserMenu from "./UserMenu";

function Header() {
  return (
    <header className="border-b sticky top-0 bg-white">
      <div className="flex justify-between gap-4 mx-auto max-w-5xl p-4">
        <Image src="/logo.svg" width={40} height={40} alt="Logo" />
        <div className="flex items-center gap-4">
          <Button className="flex gap-2" variant="outline">
            Settings
            <Settings className="h-4 w-4" />
          </Button>
          <UserMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
