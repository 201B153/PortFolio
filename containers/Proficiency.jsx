import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Fade } from 'react-reveal';
import { Badge } from 'reactstrap';
// import Table from 'react-bootstrap/Table';

const Proficiency = () => {
  return (
    <MDBContainer className="bg-prof section section-lg">
      <Fade bottom duration={2000}>
        <div className="pl-4">
          <h4 className="display-3 text-white">🌍 Proficiency</h4>
          <br />
        </div>
        <MDBRow>
          <MDBCol size="4">
            <div className="box">
              <div className="proficiency-topic">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Badge color="info" className="mr-1">
                  MERN
                </Badge>
              </div>
              <div className="green">
                <div className="progress">
                  <div className="inner">
                    <div className="percent">
                      <span>&nbsp;&nbsp;90</span>%
                    </div>
                    <div className="water"></div>
                    <div className="glare"></div>
                  </div>
                </div>
              </div>
            </div>
          </MDBCol>
          <MDBCol size="4">
            <div className="box">
              <div className="proficiency-topic">
                &nbsp;
                <Badge color="info" className="mr-1">
                  BlockChain
                </Badge>
              </div>
              <div className="orange">
                <div className="progress">
                  <div className="inner">
                    <div className="percent">
                      <span>&nbsp;&nbsp;60</span>%
                    </div>
                    <div className="water"></div>
                    <div className="glare"></div>
                  </div>
                </div>
              </div>
            </div>
          </MDBCol>
          <MDBCol size="4">
            <div className="box">
              <div className="proficiency-topic">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Badge color="info" className="mr-1">
                  Rust
                </Badge>
              </div>
              <div className="green">
                <div className="progress">
                  <div className="inner">
                    <div className="percent">
                      <span>&nbsp;&nbsp;80</span>%
                    </div>
                    <div className="water"></div>
                    <div className="glare"></div>
                  </div>
                </div>
              </div>
            </div>
          </MDBCol>
          <MDBCol size="4">
            <div className="box">
              <div className="proficiency-topic">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Badge color="info" className="mr-1">
                  Cloud
                </Badge>
              </div>
              <div className="green">
                <div className="progress">
                  <div className="inner">
                    <div className="percent">
                      <span>&nbsp;&nbsp;70</span>%
                    </div>
                    <div className="water"></div>
                    <div className="glare"></div>
                  </div>
                </div>
              </div>
            </div>
          </MDBCol>
          <MDBCol size="4">
            <div className="box">
              <div className="proficiency-topic">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Badge color="info" className="mr-1">
                  CP
                </Badge>
              </div>
              <div className="orange">
                <div className="progress">
                  <div className="inner">
                    <div className="percent">
                      <span>&nbsp;&nbsp;60</span>%
                    </div>
                    <div className="water"></div>
                    <div className="glare"></div>
                  </div>
                </div>
              </div>
            </div>
          </MDBCol>
          <MDBCol size="4">
            <div className="box">
              <div className="proficiency-topic">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Badge color="info" className="mr-1">
                  Kali
                </Badge>
              </div>
              <div className="green">
                <div className="progress">
                  <div className="inner">
                    <div className="percent">
                      <span>&nbsp;&nbsp;90</span>%
                    </div>
                    <div className="water"></div>
                    <div className="glare"></div>
                  </div>
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </Fade>
    </MDBContainer>
  );
};

export default Proficiency;
