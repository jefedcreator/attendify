import React from "react";
import { company, headerIcon } from "../../../static/data";

function Footer() {
  return (
    <footer className="bg-footer p-4  lg:p-12 lg:flex lg:justify-around">
      <div className="mb-12 md:mb-0 lg:mb-0">
        <a href="/">
          <img src="/assets/attendify.svg" alt="attendify-logo" />
        </a>
        <p className="text-gray-400 font-jarkata my-2">
        Discover events and communities that match your<br/> passion. Create events and issue NFTs for<br/> attendees easily on Attendify.
        </p>
        <p className="text-gray-400 font-jarkata font-semibold my-2">
          Reach out for partnership
        </p>
        <span>
          <a className="text-gray-400 font-jarkata mt-2" href="mailto:xyz.com">
            Attendify@gmail.com
          </a>
        </span>
      </div>
      <div className="my-4">
        <p className="text-gray-400 font-jarkata font-semibold mb-2">Company</p>
        <ul>
          {company.map((item, idx) => {
            return (
              <li key={idx} className="list-none text-gray-400 mb-4 capitalize">
                <a href={item.link}>{item.value}</a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* <div className="hidden md:block lg:block my-4">
        <p className="text-gray-400 font-jarkata font-semibold mb-2">Socials</p>
        <ul>
          {socials.map((item, idx) => {
            return (
              <li key={idx} className="list-none text-gray-400 mb-4 capitalize">
                <a href={item.link}>{item.value}</a>
              </li>
            );
          })}
        </ul>
      </div> */}
      <div className="hidden md:block lg:block">
        <p className="text-gray-400 font-jarkata font-semibold mb-2">
          Contact
        </p>
        <span>
          <a className="text-gray-400 font-jarkata my-6" href="mailto:xyz.com">
            Attendify@gmail.com
          </a>
        </span>
        <div className=" md:hidden lg:hidden flex lg:justify-end space-x-2">
          {headerIcon.map((icon, index) => {
            return (
              <a href={icon.link} key={index}>
                {icon.icon}
              </a>
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
              <a href={icon.link} key={index}>
                {icon.icon}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
