'use client';
import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { BsFillPlayCircleFill, FaGithubAlt } from '@/constants';
import { fadeIn } from '../../utils/motion';
import Image from 'next/image';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}: any) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <div className="bg-tertiary p-5 mx-2 rounded-2xl h-[486px] max-sm:h-[450px] w-[360px] max-sm:w-[300px] active:shadow-sm active:shadow-[#915EFF]">
        <Tilt className="relative w-full h-[240px] max-sm:h-[200px] hover:shadow-md hover:shadow-[#915EFF] rounded-2xl">
          <Image
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div>
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, '_blank')}
                className="bg-primary hover:shadow-md hover:shadow-[#915EFF] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <FaGithubAlt className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
            <div className="absolute inset-0 flex justify-end mt-14 mr-3 card-img_hover">
              <div
                onClick={() => window.open(live_demo_link, '_blank')}
                className="bg-primary hover:shadow-md hover:shadow-[#915EFF] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <BsFillPlayCircleFill className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          </div>
        </Tilt>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag: any) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
