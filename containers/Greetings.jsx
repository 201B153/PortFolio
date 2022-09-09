import React, { useState, useEffect } from 'react';
//import { greetings } from "../portfolio";

import { Button, Container, Row, Col } from 'reactstrap';

import GreetingLottie from '../components/DisplayLottie';
import lottieMaker from '../components/DisplayLottie';
import SocialLinks from '../components/SocialLinks';

const greetings = {
  name: '201b153',
  title: "Hi👋, I'm Mayank Singh Tomar",
  description:
    "I'm a passionate full-stack Web developer and a web app penetration tester.",
  description2:
    'I love creating new web-apps and webpages using new techs and experimenting with them.',
  description3:
    "I'm also an open source contributor and loves participating in hackathons.",
  resumeLink:
    'https://drive.google.com/file/d/1Jj4QvvMMhRZQrxngrvlhmuTLhgcisaAp/view?usp=sharing',
};

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  });
  const webdevLottie = lottieMaker('animationData');
  const blockChainLottie = lottieMaker('blockChainanimation');
  const [servises, setServises] = useState([
    {
      id: 1,
      logo: lottieMaker('codingAnimation'),
      header: 'Software Development',
      details:
        'Our designers always aim for high quality website designs for bringing the ultimate user experience ...',
    },
    {
      id: 2,
      logo: lottieMaker('searchEngineAnimation'),
      header: 'Digital Marketing',
      details:
        'We create smooth & customized application specifically for Android operatingsystem. Simplifying the complex requirements & ensuring reliable app delivery isour priority. ',
    },
    // {
    //   id: 3,
    //   logo: lottieMaker('recruitmentAnimation'),
    //   header: 'HRMS',
    //   details:
    //     'Building a product without cleverly designed UI/UX is not worth it. Our dedicated team design & develop cognitively straightforward design which makes the layout ',
    // },
    // {
    //   id: 4,
    //   logo: blockChainLottie,
    //   header: 'WEB 3.0',
    //   details:
    //     'Our Industry leading minds analyze every step you take to succeed in yourbusiness by eliminating workflow pain points. Our dedicated team Implement newtechnology and consolidate.',
    // },
    // {
    //   id: 5,
    //   logo: blockChainLottie,
    //   header: "QA & Testing",
    //   details:
    //     "We perform thorough, comprehensive, multi-stage testing and auditing of newly developed or already developed software."
    // }
  ]);
  return (
    <main>
      <div className="position-relative background-greetings-section">
        <section className="section section-lg section-shaped pb-250">
          <div className="shape shape-style-1 bg-gradient-info">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="6">
                  <h1 className="display-3 text-white">
                    {greetings.title + ' '}
                  </h1>
                  <p className="lead text-white">
                    {greetings.description}
                    <br />
                    {greetings.description2}
                    <br />
                    {greetings.description3}
                  </p>
                  <SocialLinks />
                  <div className="btn-wrapper my-4">
                    <Button
                      className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                      color="default"
                      href={greetings.resumeLink}
                    >
                      <span className="btn-inner--icon mr-1">
                        <i className="fa fa-file" />
                      </span>
                      <span className="btn-inner--text">See My CV</span>
                    </Button>
                  </div>
                </Col>
                <Col lg="6">
                  <lottieMaker
                    style={{ flex: 3, minWidth: '500px', minHeight: '300px' }}
                    options={webdevLottie}
                    height={550}
                  />
                  <GreetingLottie animationPath="/lottie/web-dev.json" />
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        {/* 1st Hero Variation */}
      </div>
    </main>
  );
};

export default Greetings;
