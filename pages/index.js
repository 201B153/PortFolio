import PropTypes from 'prop-types';
import Navigation from '../components/Navigation.jsx';
import Greetings from 'containers/Greetings.jsx';
import Proficiency from 'containers/Proficiency';
import Skills from 'containers/Skills';
import Education from 'containers/Education';
import Experience from 'containers/Experience';
import Projects from 'containers/Projects';
import GithubProfileCard from '@components/GithubProfileCard';
// Effects
import IndexBackground from './IndexBackground.jsx';

const openSource = {
  githubUserName: '201b153',
};

export default function Home({ githubProfileData }) {
  return (
    <div>
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Projects />
      <IndexBackground id="tsparticles" />
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
