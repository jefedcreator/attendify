import React from "react";
import { company, socials, headerIcon } from "../../static/data";

function Footer() {
  return (
    <footer className="bg-footer p-4  lg:p-12 lg:flex lg:justify-around">
      <div>
        <a href="/">
          <img src="/assets/attendify.svg" alt="attendify-logo" />
        </a>
        <p className="text-gray-400 font-jarkata font-semibold mt-2">
          Reach out for partnership
        </p>
        <span>
          <a className="text-gray-400 font-jarkata mt-2" href="mailto:xyz.com">
            Attendify.poap@gmail.com
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
      <div>
        <p className="text-gray-400 font-jarkata font-semibold mb-2">
          Join our online communities
        </p>
        <div className="flex lg:justify-end space-x-2">
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
