import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { ProjectWrapper } from '@/wrapper';
import ProjectCard from './projectCard';
import { projects } from '@/constants';
import { textVariant } from '@/utils/motion';
import { styles } from '@/app/styles';

const Rust_Proj = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(carousel.current?.scrollWidth! - carousel.current?.offsetWidth!);
    }

    updateWidth();

    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className="">
      <motion.div variants={textVariant(0.5)}>
        <p className={`${styles.sectionSubText}`}>Rust Devlopment</p>
      </motion.div>
      <div className="mt-4 p-4 rounded-lg hover:shadow-inner hover:shadow-[#915EFF]">
        <motion.div
          ref={carousel}
          whileTap={{ cursor: 'grabbing' }}
          className="cursor-grab overflow-hidden"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex"
          >
            {projects.projects3.map((project, index) => (
              <motion.div
                className="min-w-max mr-6 min-h-max"
                key={`project-${index}`}
              >
                <ProjectCard index={index} {...project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectWrapper(Rust_Proj, 'rust_proj');
