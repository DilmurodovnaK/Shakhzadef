"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "@/components/icons"
import logo from "@/app/images/logo.jpg"
const Navbar: React.FC = () => {
  const [click, setClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setClick(!click);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar w-full xl:px-10 lg:px-4 md:px-5">
      <div className="nav-container flex">
        <a className="nav-logo">
        <img src={logo.src} alt="" width={100} height={100}/>
        </a>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a  href='#home' className="nav-links " onClick={handleClick}>
            Asosiy
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links" onClick={handleClick}>
            Men haqimda
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links" onClick={handleClick}>
             Servis
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links" onClick={handleClick}>
              Blog
            </a>
          </li>
           <li className="nav-item">
            <a className="nav-links" onClick={handleClick}>
             Контакты
            </a>
          </li>
        </ul>

        {/* Language Dropdown */}
        <div className={click ? 'nav-menu active' : 'nav-menu'} style={{ }}>

          {/* <button
            onClick={toggleDropdown}
            className="text-gray-700 dropdown bg-white border max-w-[300px] border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            type="button"
          >
            Til Tanlash
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button> */}

          {isOpen && (
            <div className="absolute z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
              <ul className="py-2 font-medium" role="menu">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        aria-hidden="true"
                        className="h-3.5 w-3.5 rounded-full mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 512 512">
  <rect y="170.67" width="512" height="170.67" fill="#fff"/>
  <rect y="341.33" width="512" height="170.67" fill="#1eb53a"/>
  <rect y="0" width="512" height="170.67" fill="#0099b5"/>
  <rect y="160" width="512" height="10.67" fill="#d52b1e"/>
  <rect y="341.33" width="512" height="10.67" fill="#d52b1e"/>
  <g fill="#fff">
    <circle cx="62" cy="85" r="28"/>
    <circle cx="72" cy="85" r="21.33" fill="#0099b5"/>
    <g transform="translate(110, 65)">
      <circle cx="20" cy="0" r="5"/>
      <circle cx="40" cy="0" r="5"/>
      <circle cx="60" cy="0" r="5"/>
      <circle cx="80" cy="0" r="5"/>
      <circle cx="100" cy="0" r="5"/>
      <circle cx="120" cy="0" r="5"/>
      
      <circle cx="10" cy="20" r="5"/>
      <circle cx="30" cy="20" r="5"/>
      <circle cx="50" cy="20" r="5"/>
      <circle cx="70" cy="20" r="5"/>
      <circle cx="90" cy="20" r="5"/>
      
      <circle cx="20" cy="40" r="5"/>
      <circle cx="40" cy="40" r="5"/>
      <circle cx="60" cy="40" r="5"/>
      <circle cx="80" cy="40" r="5"/>
      
      <circle cx="30" cy="60" r="5"/>
      <circle cx="50" cy="60" r="5"/>
      <circle cx="70" cy="60" r="5"/>
      
      <circle cx="40" cy="80" r="5"/>
      <circle cx="60" cy="80" r="5"/>
      
      <circle cx="50" cy="100" r="5"/>
    </g>
  </g>
</svg>
                      Uzbekskiy (UZ)
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        className="h-3.5 w-3.5 rounded-full mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 512 512">
  <rect width="512" height="170.67" fill="#fff"/>
  <rect width="512" height="341.33" y="170.67" fill="#0039a6"/>
  <rect width="512" height="512" y="341.33" fill="#d52b1e"/>
                      </svg>
                      Русскый (РУ)
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Hamburger Menu */}
        <div className="nav-icon" onClick={handleClick}>
          {click ? (
            <span className="icon">
              <HamburgetMenuClose />
            </span>
          ) : (
            <span className="icon">
            
               <HamburgetMenuOpen />
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

