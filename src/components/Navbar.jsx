import { useEffect, useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Corrected to boolean

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav className="flex items-center justify-between h-12 md:pr-4 relative">
      <h2 className="text-[#FFD14C] font-bold text-2xl">Portfolio</h2>

      <div onClick={toggleMenu} className="md:hidden">
        {isOpen ? <RxCross1 size={24} /> : <CiMenuBurger size={24} />}
      </div>

      {/* MOBILE MENU */}
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } absolute h-[calc(100vh-50px)] w-full top-[48px] right-0 flex items-start pt-16 justify-center bg-[#25394F] z-50`}
      >
        <ul className="flex flex-col items-center justify-center gap-10">
          <li>
            <a onClick={closeMenu} href="#home">
              Home
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </div>

      {/* PC MENU */}
      <div className="hidden md:flex">
        <ul className="flex items-center gap-8">
          <li className="text-sm">
            <a href="#home">Home</a>
          </li>
          <li className="text-sm">
            <a href="#work">My Work</a>
          </li>
          <li className="text-sm">
            <a href="#about">About me</a>
          </li>
          <li className="text-sm">
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
