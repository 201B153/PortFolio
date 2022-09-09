import React from 'react';

//import { projects } from '../portfolio';
import { Container, Row } from 'reactstrap';
import ProjectsCard from '../components/ProjectsCard';
import { Fade } from 'react-reveal';

const projects = [
	{
	  name: 'Ecommerce',
	  desc: 'The Ecommerce web app works on MERN and allows users to make purchase using Paypal and also provides admin panel for better control',
	  link: 'https://ecommerce-shop-201b153.herokuapp.com/',
	},
	{
	  name: 'NFT-Marketplace',
	  desc: 'The market place is made using Nextjs and nginx as tunnel provider for web3 app it uses Metamask as authenticator and provides marketplace for selling and buying NFTs',
	  link: 'https://nextjsblockchain-opensea.herokuapp.com/',
	},
	{
	  name: 'ThreeJs-BoilerPlates',
	  desc: 'The boilerplates provide basic setup required for making a website using ThreeJs or using a 3d model in a web app',
	  link: 'https://react-three-boilerplate-gkovzsiqm-201b153.vercel.app/',
	},
	{
	  name: 'Pixel-Editor',
	  desc: 'The editor provides a frame in which we can change each pixel color to our requirement. the editor use Web Assembly to convert Rust and JS to provide Smooth func.',
	  link: 'https://github.com/201B153/pixel-editor',
	},
  ];
  

const Projects = () => {
  return (
    <section className="section section-lg">
      <Container>
        <div className="d-flex p-4">
          <div>
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
              <i className="ni ni-laptop text-info" />
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-3 text-info"> Projects</h4>
          </div>
        </div>
        <Row className="row-grid align-items-center">
          {projects.map((data, i) => {
            return <ProjectsCard key={i} data={data} />;
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
