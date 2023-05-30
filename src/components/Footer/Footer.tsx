import Image from "next/image";
import { company, headerIcon} from "../../../static/data";
import attendify from "@public/assets/attendify.svg"
import Link from "next/link";
function Footer() {
  return (
    <footer className="bg-footer p-4  lg:p-12 lg:flex lg:justify-around">
      <div className="mb-12 md:mb-0 lg:mb-0">
        <Link href="/">
          <Image src={attendify} alt="attendify-logo" />
        </Link>
        <p className="text-gray-400 font-jarkata my-2">
          Discover events and communities that match your
          <br /> passion. Create events and issue NFTs for
          <br /> attendees easily on Attendify.
        </p>
        <p className="text-gray-400 font-jarkata font-semibold my-2">
          Reach out for partnership
        </p>
        <span>
          <Link className="text-gray-400 font-jarkata mt-2" href="mailto:xyz.com">
            Attendify@gmail.com
          </Link>
        </span>
      </div>
      <div className="my-4">
        <p className="text-gray-400 font-jarkata font-semibold mb-2">Company</p>
        <ul>
          {company.map((item, idx) => {
            return (
              <li key={idx} className="list-none text-gray-400 mb-4 capitalize">
                <Link href={item.link}>{item.value}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="hidden md:block lg:block my-4">
        <p className="text-gray-400 font-jarkata font-semibold mb-2">Socials</p>
        {/* <ul>
          {socials.map((item, idx) => {
            return (
              <li key={idx} className="list-none text-gray-400 mb-4 capitalize">
                <Link href={item.link}>{item.value}</Link>
              </li>
            );
          })}
        </ul> */}
      </div>
      <div className="hidden md:block lg:block">
        <p className="text-gray-400 font-jarkata font-semibold mb-2">Contact</p>
        <span>
          <Link className="text-gray-400 font-jarkata my-6" href="mailto:xyz.com">
            Attendify@gmail.com
          </Link>
        </span>
        <div className=" md:hidden lg:hidden flex lg:justify-end space-x-2">
          {headerIcon.map((icon, index) => {
            return (
              <Link href={icon.link} key={index}>
                {icon.icon}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="block md:hidden mt-12 lg:hidden">
        <p className="text-gray-400 font-jarkata font-semibold mb-2">
          Join Our Online Communities
        </p>
        <div className="flex lg:justify-end my-4 space-x-6">
          {headerIcon.map((icon, index) => {
            return (
              <Link href={icon.link} key={index}>
                {icon.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;