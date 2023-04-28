'use client';
import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '@/app/styles';
import { technologies } from '@/constants';
import { SectionWrapper } from '@/wrapper';
import { fadeIn, textVariant } from '@/utils/motion';

const Tech = () => {
  const [techBubble, setTechBubble] = React.useState(false);
  const handleTechBubble = () => {
    const prevTechBubble = techBubble;
    setTechBubble(!prevTechBubble);
  };

  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={styles.sectionHeadText}>Techs</p>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-sm:text-[14px] max-w-5xl leading-[30px]"
      >
        I&apos;m a proficient in working with the following technologies :
      </motion.p>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10 max-sm:gap-14">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28 max-sm:h-20 max-sm:w-20 p-1"
            key={technology.name}
          >
            <div
              className="|green-pink-gradient| rounded-full p-2 shadowr-inner hover:shadow-md hover:shadow-purple-700 |border border-solid border-[#915EFF]|"
              onClick={handleTechBubble}
            >
              <Tilt>{technology.logo}</Tilt>
              {techBubble && technology.name && (
                <Tilt>
                  <div className="absolute flex w-24 h-24 flex-row flex-wrap justify-center gap-10 max-sm:gap-12">
                    <div onClick={handleTechBubble}>
                      <div className="absolute || top-[20px] right-[-17px] max-md:right-[-18px] max-sm:right-[14px] || w-36 max-sm:w-28 h-8 max-sm:h-10 || |green-pink-gradient| || rounded-full |border border-solid border-[#915EFF]| || transition-transform transform-scale-0 hover:transform-scale-100 ">
                        <div className="text-white h-full w-full rounded-full flex justify-center items-center overflow-hidden absolute shadow-md shadow-purple-700 p-[1px]">
                          <div className="flex flex-row max-sm:flex-col rounded-full space-x-2 max-sm:space-x-0  bg-[#151030] w-full h-full justify-center items-center text-center opacity-100">
                            <span className={`text-xs`}>
                              {technology.name}{' '}
                              <span className="max-sm:hidden">:</span>
                            </span>
                            <span className={`text-sm`}>
                              {technology.proficiency}
                            </span>
                          </div>
                          {/* TODO: Add Water SVG horizontally */}
                          {/* <div
                            className={`${technology.width} max-sm:w-16 absolute h-full left-0 overflow-hidden opacity-50`}
                          >
                            <svg
                              viewBox="0 0 100 100"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-32 max-sm:w-16 h-full z-[1]"
                            >
                              <path
                                d="M-10,50 c20,-15 40,-15 60,0 c20,15 40,15 60,0 v60 h-180z"
                                fill={`${technology.bgColor}`}
                                transform="rotate(90 60 50)"
                              >
                                <animate
                                  attributeName="d"
                                  dur="4s"
                                  repeatCount="indifinite"
                                  values="
            M-10,50 c20,-15 40,-15 60,0 c20,15 40,15 60,0 v60 h-180z;
            M-10,70 c20,-15 40,-15 60,0 c20,15 40,15 60,0 v40 h-180z;
            M-10,50 c20,-15 40,-15 60,0 c20,15 40,15 60,0 v60 h-180z;
          "
                                />
                              </path>
                            </svg>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
