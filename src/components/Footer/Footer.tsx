import Image from "next/image";
import { company } from "../../../static/data";
import attendify from "@public/assets/attendify.svg";
import Link from "next/link";
import Socials from "@components/socials/Socials";

function Footer() {
  return (
    <footer className="w-[90%] h-[60vh] md:h-[50vh] mx-auto flex md:flex-row flex-col md:items-center items-start md:justify-start justify-center gap-5">
      <div className="flex flex-col h-[80%] gap-2">
        <Link href="/">
          <Image src={attendify} alt="attendify-logo" />
        </Link>
        <p className="text-[#9D94B8] font-jarkata text-sm leading-6 font-light">
          Discover events and communities that match your
          <br /> passion. Create events and issue NFTs for
          <br /> attendees easily on Attendify.
        </p>
        <p className="text-[#BDB7CF] text-sm leading-6 font-light">
          Reach out for partnership
        </p>
        <Link
          className="text-[#A48DF0] font-jarkata text-sm leading-6"
          href="mailto:xyz.com"
        >
          Attendify@gmail.com
        </Link>
      </div>
      <div className="flex flex-col h-[48%] gap-2">
        <p className="text-[#F9F8FB] font-jarkata font-semibold text-sm leading-6">
          Company
        </p>
        <ul>
          {company.map((item, idx) => {
            return (
              <li
                key={idx}
                className="list-none text-[#BBA9F4] text-sm leading-6 font-jarkata capitalize"
              >
                <Link href={item.link}>{item.value}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col h-[48%] gap-2">
        <p className="text-[#F9F8FB] font-jarkata font-semibold text-sm leading-6">
          Join Our Online Communities
        </p>
          <Socials isFooter={true}/>
      </div>
    </footer>
  );
}

export default Footer;
