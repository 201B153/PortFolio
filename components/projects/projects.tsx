'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';
import { styles } from '@/app/styles';
import { SectionWrapper } from '@/wrapper';
import Fsd_proj from './fsd_proj';
import Go_proj from './go_proj';
import Rust_proj from './rust_proj';

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Below are the projects that highlight my skills and knowledge in
          utilizing the latest technologies to tackle intricate problems. These
          projects serve as a demonstration of my proficiency in this area.
        </motion.p>
      </div>
      <div className="mt-10 overflow-hidden">
        <Fsd_proj />
        <Go_proj />
        <Rust_proj />
      </div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
