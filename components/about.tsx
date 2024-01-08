'use client';
import React from 'react';
import Image from 'next/image';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '@/app/styles';
import { SectionWrapper } from '@/wrapper';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon, link }: any) => (
  <Tilt className="xs:w-[250px] w-full">
    <a href={`#${link}`}>
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card hover:shadow-md hover:shadow-purple-700"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <Image
            src={icon}
            alt="Skills"
            className="w-full h-full object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </a>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={styles.sectionHeadText}>Introduction</p>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-sm:text-[14px] max-w-5xl leading-[30px]"
      >
        I&apos;m a highly skilled full-stack developer specializing in TypeScript, JavaScript, Node.js, and WebAssembly. My approach involves close collaboration with clients to craft efficient, scalable, and user-friendly solutions that address real-world challenges. As a quick learner, I stay abreast of the latest developments in the software development industry, allowing me to offer innovative and effective solutions. I bring to each project a unique blend of technical expertise, collaborative skills, and a passion for innovation. Committed to delivering the highest-quality solutions, I aim to assist businesses in achieving their goals. <br />
        <a href={'/#contact'} className="text-[#915EFF]">
          Lets work together to bring your ideas to life!
        </a>
      </motion.p>

      <div className="mt-12 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
