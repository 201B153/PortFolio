'use client';
import React, { useEffect, useState } from 'react';
import { logo } from '../assets';
import Link from 'next/link';
import Image from 'next/image';
import { BsArrowUpSquare } from '@/constants';
import { motion } from 'framer-motion';

const Footer = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`relative w-full flex items-center py-1 z-20`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4">
        <div
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <Image src={logo} alt="logo" className="w-12 h-12 object-contain rounded-full" />
          <div className="text-white flex flex-col my-2 max-sm:my-4">
            <span
              className={`text-3xl my-auto max-sm:text-xl max-xs:text-[14px] font-bold text-white`}
            >
              mstomar698 &nbsp;
            </span>
            <span
              className={`small_link sm:text-[16px] text-[14px] tracking-wider text-secondary`}
            >
              Made with 💖 by{' '}
              <Link
                href={'https://github.com/mstomar698'}
                className="text-white font-bold"
                target="_blank"
              >
                mstomar698 &nbsp;
              </Link>
            </span>
          </div>
        </div>
        <div>
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.0,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className={`rounded-sm object-contain hover:shadow-2xl hover:shadow-purple-700 z-20 ${
              scrolled ? 'fixed bottom-8 hover:bottom-10 right-6' : 'relative'
            }`}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
              y: [0, 36, 5],
            }}
          >
            <BsArrowUpSquare
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="text-3xl lg:text-5xl font-bold"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
