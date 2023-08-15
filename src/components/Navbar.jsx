import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaIntercom,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineLockClosed, HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };
  const navLinks = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Destination",
    },
    {
      id: 3,
      name: "Travel",
    },
    {
      id: 4,
      name: "Views",
    },
    {
      id: 5,
      name: "Book",
    },
  ];
  return (
    <div className="flex justify-between items-center h-20 px-4 bg-transparent absolute z-[10] text-white w-full">
      <div>
        <h1 className={logo ? "hidden duration-[.5s]" : "block duration-[.5s]"}>
          BEACHES
        </h1>
      </div>
      <ul className="hidden md:flex ">
        {navLinks.map(({ id, name }) => (
          <li className="" key={id}>
            {name}
          </li>
        ))}
      </ul>
      <div className="hidden md:flex">
        <BiSearch size={20} />
        <BsPerson size={20} />
      </div>
      {/* Hamburger */}

      <div className="md:hidden" onClick={handleNav}>
        {nav || <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile Menu DropDown */}
      <div
        className={
          nav
            ? "absolute left-0 duration-[.5s] top-0 w-full bg-gray-300/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%] duration-[.5s] top-0 w-full bg-gray-300/90 px-4 py-7 flex flex-col "
        }
        onClick={handleNav}
      >
        <ul>
          <div className="flex justify-between ">
            <h1>BEACHES</h1>
            {nav && <AiOutlineClose size={20} />}
          </div>
          {navLinks.map(({ id, name }) => (
            <li className="border-b text-black border-black/50" key={id}>
              {name}
            </li>
          ))}
          <div className="flex flex-col ">
            <button className="my-6">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6 ">
            <FaFacebook size={20} />
            <FaTwitter size={20} />
            <FaYoutube size={20} />
            <FaPinterest size={20} />
            <FaInstagram size={20} />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
