import React from 'react';
//import { experience } from "../portfolio";
import { Container, Row } from 'reactstrap';

import { Fade } from 'react-reveal';

import ExperienceCard from '../components/ExperienceCard';

const experience = [
  {
    role: 'Web app penetrattion Tester-Intern',
    company: 'Talakunchi',
    companylogo: '/img/talakunchi.jpg',
    date: 'June 2022 - July 2022',
    desc: 'Worked as a web app penetration tester and used various tools enabling us to check the apps authentication strength. ',
  },
];

const Experience = () => {
  return (
    <section className="section section-lg">
      <Container>
        <div className="d-flex p-4">
          <div>
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
              <i className="ni ni-briefcase-24 text-info" />
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-3 text-info">Experience</h4>
          </div>
        </div>
        <Row className="row-grid align-items-start">
          {experience.map((data, i) => {
            return <ExperienceCard key={i} data={data} />;
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
