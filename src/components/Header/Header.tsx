import { headerIcon, headerNav } from "../../../static/data";
import attendify from "@public/assets/attendify.svg";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "@components/hamburger/Hamburger";

function Header() {
  return (
    <header className="p-6 md:p-12 lg:p-12">
      <div className="hidden md:justify-end md:space-x-6 mb-4 md:flex lg:flex justify-end space-x-2">
        {headerIcon.map((icon, index) => {
          return (
            <Link href={icon.link} key={index}>
              {icon.icon}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <Image src={attendify} alt="attendify-logo" />
          </Link>
        </div>
        <Hamburger />
      </div>
    </header>
  );
}

export default Header;
