'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '@/app/styles';
import { SectionWrapper } from '@/wrapper';
import { fadeIn, textVariant } from '@/utils/motion';
import { Tilt } from 'react-tilt';
import Link from 'next/link';
import { socials, FaCoffee, FaWhatsapp } from '@/constants';

const Social = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={`${styles.sectionSubText} `}>My presence</p>
        <h2 className={`${styles.sectionHeadText}`}>Socials</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-sm:text-[14px] max-w-5xl leading-[30px]"
      >
        These are few of the social platforms where I am active. Feel free to
        connect with me.
      </motion.p>
      <div className="flex flex-row flex-wrap justify-center gap-4 mt-10">
        {socials.map((social) => (
          <Link
            href={social.link}
            target="_blank"
            className="w-24 h-24 max-sm:h-16 max-sm:w-16 p-2"
            key={social.name}
          >
            <div className="|green-pink-gradient| rounded-full p-2 shadowr-2xl shadow-purple-700 hover:shadow-md hover:shadow-purple-700 |border border-solid border-[#915EFF]|">
              <Tilt className="text-white">{social.logo}</Tilt>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-6 h-full flex justify-center items-center flex-row max-md:flex-col max-md:space-x-0 space-x-4">
        <p className={`text-sm my-2`}>Liked my work ?</p>
        <Link href={'https://www.buymeacoffee.com/mstomar698'} className="|green-pink-gradient| bg-[#151030] text-white rounded-2xl p-2 hover:shadow-md hover:shadow-purple-700 |border border-solid border-[#915EFF]| w-[250px] h-[46px] flex flex-row" target='_blank'>
          <h2
            className={`text-center w-full text-xl flex flex-row justify-evenly`}
          >
            <FaCoffee className="text-2xl" />
            Buy me a Coffee
          </h2>
        </Link>
      </div>
      <div className="mt-6 h-full flex justify-center items-center flex-row max-md:flex-col max-md:space-x-0 space-x-4">
        <p className={`text-sm my-2`}>Wanna talk one on one ?</p>
        <Link href={'https://wa.me/+916265187023'} className="|green-pink-gradient| bg-[#151030] text-white rounded-2xl p-2 hover:shadow-md hover:shadow-purple-700 |border border-solid border-[#915EFF]| w-[250px] h-[46px] flex flex-row" target='_blank'>
          <h2
            className={`text-center w-full text-xl flex flex-row justify-center space-x-4`}
          >
            <FaWhatsapp className="text-2xl" />
            <span>Let&apos;s Chat</span>{' '}
          </h2>
        </Link>
      </div>
    </>
  );
};

export default SectionWrapper(Social, '');
