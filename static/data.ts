//@ts-nocheck
import { ILink } from "src/utils/types/types";
import icon1 from '@public/assets/icon1.svg'

export const headerNav: ILink[] = [
  {
    value: "Create an Event",
    link: "create",
  },
  {
    value: "Events",
    link: "/events",
  },
  {
    value: "About",
    link: "#about",
  },
];

export const company: ILink[] = [
  {
    value: "white paper",
    link: "#",
  },
  {
    value: "roadmap",
    link: "#",
  },
  {
    value: "faqs",
    link: "#",
  },
];

// export const socials = [
//   {
//     value: "twitter",
//     link: "#",
//   },

//   {
//     value: "instagram",
//     link: "#",
//   },
//   {
//     value: "telegram",
//     link: "#",
//   },
//   {
//     value: "discord",
//     link: "#",
//   },

//   {
//     value: "youtube",
//     link: "#",
//   }
// ];

export const dropdownItem: ILink[] = [
  {
    value: "My Dashboard",
    link: "/user",
  },
  // {
  //   value: "Browse Event",
  //   link: "/recent",
  // },
  {
    value: "Favourites",
    link: "/user/favorites",
  },
  // {
  //   value:'Contact Us',
  //   link:'#'
  // },

  {
    value: "Manage my Events",
    link: "/user/created",
  },
];

