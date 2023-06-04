import attendify from "@public/assets/attendify.svg";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "@components/hamburger/Hamburger";
import Socials from "@components/socials/Socials"

function Header() {
  return (
    <header className="w-[90%] mx-auto py-5 h-[15vh] md:h-[25vh] flex flex-col justify-around">
      <Socials isFooter={false}/>
      <div className="flex items-center justify-between h-full md:h-[50%]">
        <Link href="/">
          <Image src={attendify} alt="attendify-logo" className="w-[70%] md:w-full object-cover"/>
        </Link>
        <Hamburger />
      </div>
    </header>
  );
}

export default Header;
