import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Fade } from 'react-reveal';

const Proficiency = () => {
  return (
    <MDBContainer className="background-201b153 section section-lg">
      <Fade bottom duration={2000}>
        <h1 className="proficiency-topic-heading">
          <strong>&nbsp;&nbsp;🌍 Proficiency</strong>
        </h1>
        <MDBRow>
          <MDBCol size="4">
            <div className="box">
              <div className="proficiency-topic">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MERN
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
                &nbsp;&nbsp;&nbsp;&nbsp;BlockChain
              </div>
              <div className="orange">
                <div className="progress">
                  <div className="inner">
                    <div className="percent">
                      <span>&nbsp;&nbsp;50</span>%
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
              <div className="proficiency-topic">&nbsp;&nbsp;&nbsp;&nbsp;Rust</div>
              <div className="green">
                <div className="progress">
                  <div className="inner">
                    <div className="percent">
                      <span>&nbsp;&nbsp;65</span>%
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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cloud
              </div>
              <div className="orange">
                <div className="progress">
                  <div className="inner">
                    <div className="percent">
                      <span>&nbsp;&nbsp;45</span>%
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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CP
              </div>
              <div className="orange">
                <div className="progress">
                  <div className="inner">
                    <div className="percent">
                      <span>&nbsp;&nbsp;55</span>%
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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kali
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
        </MDBRow>
      </Fade>
    </MDBContainer>
  );
};

export default Proficiency;
