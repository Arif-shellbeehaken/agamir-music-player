import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { logo, L3 } from "../assets";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item, id) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row text-lg justify-start items-center 
        my-8 font-semibold font-medium text-white hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);
const Sidebar = () => {
  const [mobileMenuOpen, setMobilMenuOpen] = useState(false);
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px]py-10 px-4 bg-[#161632]">
        <img src={L3} alt="logo" className="w-full h-28 object-contain" />
        <NavLinks />
      </div>

      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobilMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobilMenuOpen(true)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <img src={L3} alt="logo" className="w-full h-28 object-contain" />
        <NavLinks handleClick={() => setMobilMenuOpen(true)} />
      </div>
    </>
  );
};

export default Sidebar;
