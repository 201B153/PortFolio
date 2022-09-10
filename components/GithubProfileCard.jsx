import React from 'react';

import { Card, Col, Row, Container, Button } from 'reactstrap';

import SocialLinks from '../components/SocialLinks';
import Image from 'next/image';

const GithubProfileCard = ({ prof }) => {
  return (
    <main className="bg-git">
      <div className="position-relative bg-git">
        <Card className=" section-lg  bg-git shadow-lg border-0">
          <Container className="bg-card">
            <div className="p-2">
              <Row className="">
                <Col className="order-lg-2" lg="4">
                  <img
                    src={prof.avatar_url}
                    style={{ width: '200px' }}
                    alt=""
                    className="rounded-circle img-right img-fluid shadow shadow-lg--hover mb-4"
                  />
                </Col>
                <Col lg="8" className="order-lg-1">
                  <p className="lead text-black mt-3">
                    Wanna discuss a project? or talk about anything?
                  </p>
                  <h2 className="text-black">Reach Out @</h2>
                  <Button
                    className="btn-icon shadow text-info"
                    color="transparent"
                    href="https://www.google.com/maps/place/Gwalior,+Madhya+Pradesh/@26.214088,78.0508148,11z/data=!3m1!4b1!4m5!3m4!1s0x3976c5d1792291fb:0xff4fb56d65bc3adf!8m2!3d26.2124007!4d78.1772053"
                    rel="noopener"
                    aria-label="Twitter"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-map-marker mr-2" />
                    </span>
                    <span className="nav-link-inner--text  ml-1">
                      {prof.location}
                    </span>
                  </Button>
                  &nbsp;
                  <Button
                    className="btn-icon shadow text-info"
                    color="transparent"
                    href="mailto:tomarm698@gmail.com"
                    rel="noopener"
                    aria-label="Twitter"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-envelope mr-2" />
                    </span>
                    <span className="nav-link-inner--text ml-1">Mail ME!</span>
                  </Button>
                  &nbsp;
                  <Button
                    className="icon-btn shadow text-info"
                    color="transparent"
                    href="#GithubProfileCard"
                    rel="noopener"
                    aria-label="Twitter"
                  >
                    <span className="icon-btn">
                      <SocialLinks />
                    </span>
                  </Button>
                </Col>
				
              </Row>
            </div>
          </Container>
        </Card>
      </div>
    </main>
  );
};

export default GithubProfileCard;
