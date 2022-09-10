import { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { loadSlim } from 'tsparticles-slim';

const SkillBackGround = (props) => {
  const options = useMemo(() => {
    return {}
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default SkillBackGround;
