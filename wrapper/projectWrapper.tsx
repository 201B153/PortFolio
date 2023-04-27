import { motion } from 'framer-motion';

import { staggerContainer } from '../utils/motion';
import { styles } from '../app/styles';

const ProjectWrapper = (Component: any, idName: any) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-4"
      >
        <span className="" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default ProjectWrapper;
