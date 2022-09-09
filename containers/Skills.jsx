import { Icon } from '@iconify/react';
import React, { Fragment } from 'react';
import { Fade } from 'react-reveal';
import { Col, Container, Row, UncontrolledTooltip } from 'reactstrap';
import DisplayLottie from '../components/DisplayLottie';
import emoji from 'react-easy-emoji';
//import { skillsSection } from '../portfolio';

const skillsSection = {
  title: 'Skils I have',
  subTitle: 'FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full-Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('🌍 Building responsive Web-Apps with MERN.'),
        emoji(
          '🌍 Building responsive static WebPages using Basic HTML, CSS, JS'
        ),
        emoji(
          '🌍 Building RESTful APIs in Django-Rest_Framework, Express &  GraphQL APIs'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'HTML',
          fontAwesomeClassname: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS',
          fontAwesomeClassname: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassname: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Django',
          fontAwesomeClassname: 'vscode-icons:file-type-django',
        },
        {
          skillName: 'Redux',
          fontAwesomeClassname: 'logos:redux',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('🌍 Experience of working on multiple cloud platforms'),
        emoji(
          '🌍 Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'AWS',
          fontAwesomeClassname: 'logos:aws',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassname: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassname: 'logos:postgresql',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassname: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassname: 'logos:github-actions',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '🌍 Building Scripts for automated testing & deployment of Smart Contracts using Infura'
        ),
        emoji(
          '🌍 Building Dapps with React.js & Next.js using Web3.js'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          fontAwesomeClassname: 'logos:ethereum',
        },
        {
          skillName: 'Web3js',
          fontAwesomeClassname: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          fontAwesomeClassname: 'logos:metamask-icon',
        },
      ],
    },
    {
      title: 'Cyber-Security & Ethical-Hacking',
      lottieAnimationFile: '/lottie/skills/cybersecurity.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '🌍 Building Scripts for automated testing & deployment of Smart Contracts using Infura'
        ),
        emoji(
          '🌍 Building Dapps with React.js & Next.js using Web3.js'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Kali',
          fontAwesomeClassname: 'simple-icons:kalilinux',
        },
        {
          skillName: 'ZAP',
          fontAwesomeClassname: 'bxs:zap',
        },
      ],
    },
  ],
};

const Skills = () => {
  return (
    <Container className="text-center my-5 section background-201b153 section-lg">
      <h1 className="h1">{skillsSection.title}</h1>
      <p className="lead">{skillsSection.subTitle}</p>
      {skillsSection.data.map((section, index) => {
        return (
          <Row className="my-5" key={index}>
            <Col lg="6" className="order-2 order-lg-1">
              <Fade left duration={2000}>
                <DisplayLottie animationPath={section.lottieAnimationFile} />
              </Fade>
            </Col>
            <Col lg="6" className="order-1 order-lg-2">
              <Fade right duration={2000}>
                <h3 className="h3 mb-2">{section.title}</h3>
                <div className="d-flex justify-content-center flex-wrap mb-2">
                  {section.softwareSkills.map((skill, i) => {
                    return (
                      <Fragment key={i}>
                        <div
                          className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                          id={skill.skillName.replace(/\s/g, '')}
                        >
                          <Icon
                            icon={skill.fontAwesomeClassname}
                            data-inline="false"
                          ></Icon>
                        </div>
                        <UncontrolledTooltip
                          delay={0}
                          placement="bottom"
                          target={skill.skillName.replace(/\s/g, '')}
                        >
                          {skill.skillName}
                        </UncontrolledTooltip>
                      </Fragment>
                    );
                  })}
                </div>
                <div>
                  {section.skills.map((skill, i) => {
                    return <p key={i}>{skill}</p>;
                  })}
                </div>
              </Fade>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default Skills;
