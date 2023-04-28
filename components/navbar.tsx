'use client';
import React, { useEffect, useState } from 'react';
import { navLinks } from '../constants';
import { logo } from '../assets';
import { styles } from '@/app/styles';
import Link from 'next/link';
import Image from 'next/image';
import { BsMenuUp } from 'react-icons/bs';
import { FaWindowClose } from 'react-icons/fa';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        //TODO: make foggy navbar from transparent and darker fog later
        scrolled ? 'bg-primary' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={logo}
            alt="logo"
            className="w-9 h-9 object-contain rounded-full"
          />
          <p className="text-secondary text-[18px] font-bold cursor-pointer flex ">
            Mayank &nbsp;
            <span className="max-md:hidden lg:visible">
              Singh Tomar
            </span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 max-md:gap-6">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <>
              <FaWindowClose
                className={`${styles.sectionHeadText} h-[28px] w-[28px] object-contain`}
                onClick={() => setToggle(!toggle)}
              />
            </>
          ) : (
            <>
              <BsMenuUp
                className={`${styles.sectionHeadText} h-[28px] w-[28px] object-contain`}
                onClick={() => setToggle(!toggle)}
              />
            </>
          )}
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-2">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? 'text-white' : 'text-white/70'
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
