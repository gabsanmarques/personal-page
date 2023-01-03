import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { hoobankBanner, personalBanner } from "../assets";
import { SiGmail } from "react-icons/si";

export const navLinks = [
    {
      id: "home",
      title: "HOME",
    },
    {
      id: "about",
      title: "ABOUT",
    },
    {
      id: "projects",
      title: "PROJECTS",
    },
    {
      id: "contact",
      title: "CONTACT",
    },
  ];

export const socialMedia = [
    {
      id: "social-media-github",
      icon: AiFillGithub,
      link: "https://github.com/gabsanmarques",
    },
    {
      id: "social-media-twitter",
      icon: AiFillLinkedin,
      link: "https://www.linkedin.com/in/gabsanmarques/",
    },
    {
      id: "social-media-linkedin",
      icon: AiOutlineTwitter,
      link: "https://github.com/gabsanmarques",
    },
    {
      id: "social-media-gmail",
      icon: SiGmail,
      link: "mailto:gabrielsmdev@gmail.com",
    },
  ];

export const projects = [
  {
    id: "hookbank-page",
    title: "HooBank (ficticious) Landing Page",
    link: "https://gabsanmarques.github.io/react-landing-page-01/",
    banner: hoobankBanner,
    desc: "A modern, responsive landing page made with React and Tailwind CSS."
  },
  {
    id: "personal-page",
    title: "Personal Portfolio Page",
    link: "",
    banner: personalBanner,
    desc: "A responsive and smoothly animated portfolio page made with React and Tailwind CSS."
  },
]
  