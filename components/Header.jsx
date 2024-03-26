import { BellRing } from "lucide-react";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div>
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex gap-1 items-center justify-center">
          <div>
            <Image
              src="/images/moses.png"
              alt=""
              width={1080}
              height={1080}
              className="w-16 h-16 rounded-full"
            />
          </div>
          <div>
            <h2>Name</h2>
            <p>Nirmar Kumar</p>
          </div>
        </div>
        <span>
          <BellRing className="text-2xl" />
        </span>
      </div>
    </div>
  );
}

export default Header;
