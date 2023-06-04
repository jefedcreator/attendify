import Link from "next/link";
import Image from "next/image";
import icon1 from "@public/assets/icon1.svg";
import icon2 from "@public/assets/icon2.svg";
import icon3 from "@public/assets/icon3.svg";
import icon4 from "@public/assets/icon4.svg";
import icon5 from "@public/assets/icon5.svg";
import icon6 from "@public/assets/icon6.svg";
const Socials = () => {
  return (
    <div className="hidden md:justify-end gap-3 md:flex items-center h-[40%]">
      <Link href={"#"}>
        <Image src={icon1} alt="link icon" />
      </Link>
      <Link href={"#"}>
        <Image src={icon2} alt="link icon" width={32} height={32} />
      </Link>
      <Link href={"#"}>
        <Image src={icon3} alt="link icon" width={32} height={32} />
      </Link>
      <Link href={"#"}>
        <Image src={icon4} alt="link icon" width={32} height={32} />
      </Link>
      <Link href={"#"}>
        <Image src={icon5} alt="link icon" width={32} height={32} />
      </Link>
      <Link href={"#"}>
        <Image src={icon6} alt="link icon" width={32} height={32} />
      </Link>
    </div>
  );
};

export default Socials;
