'use client';
import { styles } from '@/app/styles';
import { StarsCanvas, loadPCDFile } from '@/canvas';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import Link from 'next/link';
import { Tilt } from 'react-tilt';
import { BsArrowDownSquare, socialLinks } from '@/constants';
import { useEffect, useRef, useState } from 'react';
import LazyLoadComponent from '@/wrapper/lazyLoading';

const Hero = () => {
  const containerRef: any = useRef<HTMLDivElement>(null);
  const flatContainerRef: any = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (containerRef.current) {
      loadPCDFile(containerRef);
    }
    if (flatContainerRef.current) {
      loadPCDFile(flatContainerRef);
    }
  }, [containerRef]);
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row max-md:flex-col items-start gap-5 md:gap-2 lg:gap-8 overflow-hidden justify-between z-10`}
      >
        <div className="flex flex-row ">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-60 h-52 violet-gradient" />
          </div>
          <div className="px-2">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I&apos;m <span className="text-[#915EFF]">Mayank</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2`}>
              <span className="text-secondary pr-1">A</span>
              <br className="sm:block hidden" />
              <span className="text-white font-bold">
                Full-stack developer
              </span>{' '}
              <span className="text-secondary">from India .</span>
            </p>
            <div
              className={` mt-4 lg:mt-8 h-[44px] max-sm:h-[40px] w-max lg:h-[80px] flex flex-row space-x-2 justify-evenly px-2 max-sm:px-0 max-md:px-1`}
            >
              {socialLinks.map((item, index) => (
                <div key={item.id}>
                  <div className="|border border-solid border-[#915EFF]| bg-[#151030] rounded-lg w-full h-full justify-center flex items-center hover:shadow-md hover:shadow-purple-700 |green-pink-gradient|">
                    <motion.div
                      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
                    >
                      <Link
                        href={`${item.link}`}
                        title={item.name}
                        target="_blank"
                      >
                        <div className="flex flex-row h-full w-full text-center items-center justify-evenly p-1 space-x-2">
                          {item.icons}
                          <span className={`${styles.heroSubText}`}>
                            {item.name}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-1 sm:h-60 h-52 violet-gradient-reverse" />
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          </div>
        </div>
        <Tilt>
          <div
            ref={containerRef}
            className="modelS z-10 relative overflow-hidden w-[400px] h-[440px] mx-auto active:shadow-inner active:shadow-[#915EFF] rounded-xl"
          ></div>
        </Tilt>
        <Tilt>
          <div
            ref={flatContainerRef}
            className="modelF z-10 relative overflow-hidden max-sm:w-[340px] sm:w-[500px] h-[240px] mx-auto my-auto mb-24 active:shadow-inner active:shadow-[#915EFF] rounded-xl"
          ></div>
        </Tilt>
      </div>
      <LazyLoadComponent>
        <StarsCanvas />
      </LazyLoadComponent>

      <div className="absolute xs:bottom-8 bottom-24 sm:bottom-16 max-sm:bottom-8 w-full flex justify-center items-center z-10 ">
        <a href="#about" title="about">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="mb-1 mr-1 hover:shadow-purple-700 hover:shadow-2xl"
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
              y: [0, 0, 0],
            }}
          >
            <BsArrowDownSquare className="|green-pink-gradient| text-3xl lg:text-5xl font-bold" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
