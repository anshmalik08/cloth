import React from "react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const Links = [
  {
    id: 1,
    href: "https://www.linkedin.com/in/masab22922a/",
    icon: <LinkedinIcon />,
  },
  {
    id: 2,
    href: "https://www.instagram.com/masa2bz/",
    icon: <InstagramIcon />,
  },
  {
    id: 3,
    href: "https://twitter.com/had3ping",
    icon: <TwitterIcon />,
  },
  {
    id: 4,
    href: "https://github.com/Mas3Zia",
    icon: <GithubIcon />,
  },
];

const Credits = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 text-sm text-center sm:text-left">
          Made by{" "}
          <Link href="https://github.com/anshmalik08">
            <span className="text-bold underline">Ansh Malik</span>
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          {Links.map((link) => (
            <Link
              href={link.href}
              key={link.id}
              className="w-5 h-5 ml-3 text-gray-500"
            >
              {link.icon}
            </Link>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Credits;
