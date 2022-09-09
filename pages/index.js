import PropTypes from 'prop-types';
import userData from '@constants/data';
//
// import { Particles } from 'react-particles';
// import { tsParticles, loadFull } from 'tsparticles-engine';
// import { useCallback } from 'react';
//
// import ParticleArea from '../components/ParticleArea.jsx';
//
import Navigation from '../components/Navigation.jsx';
import Greetings from 'containers/Greetings.jsx';
import Proficiency from 'containers/Proficiency';
import Skills from 'containers/Skills';
import Education from 'containers/Education';
import Experience from 'containers/Experience';
import Projects from 'containers/Projects';
import GithubProfileCard from '@components/GithubProfileCard';

const openSource = {
  githubUserName: '201b153',
};

export default function Home({ githubProfileData }) {
  //console.log(githubProfileData);

  //
  return (
    <div className="background-section">
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Projects />
      <GithubProfileCard prof={githubProfileData} />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};
export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
