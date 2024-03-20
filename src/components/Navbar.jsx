import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaYoutube,
  FaSpotify,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import Logo from "../assets/Filigran.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div style={{ transition: "transform 0.3s ease" }}></div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contents">Contents</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
        style={{ zIndex: 9999 }}
      >
        <li className="py-6 text-4xl">
          <a href="/">Home</a>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <a href="/about">About</a>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <a href="/contents">Contents</a>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <a href="/blog">Blog</a>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <a href="/contact">Contact</a>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FF0000]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.youtube.com/@EuphorResmi"
            >
              Youtube <FaYoutube size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1db954]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://open.spotify.com/show/7y8NBMSz8ZHgwI8lgS0r7X?si=f6c24a3b99d144eb"
            >
              Spotify <FaSpotify size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2f269e]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.instagram.com/euphorresmi/"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#14171A]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://twitter.com/euphorresmi"
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
