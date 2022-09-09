import React from 'react';
import { Icon } from '@iconify/react';
import { Button } from 'reactstrap';

//import { socialLinks } from '../portfolio';

const socialLinks = {
  instagram: 'https://www.instagram.com/mstomar698/',
  github: 'https://github.com/201b153',
  linkedin: 'https://www.linkedin.com/in/mayank-tomar-726187205/',
};

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg">
        <div className="media-icons">
            <a href={socialLinks.linkedin}>
              <i className="fa fa-linkedin"></i>
            </a>
            &nbsp;&nbsp;
            <a href={socialLinks.github}>
              <i className="fa fa-github"></i>
            </a>
            &nbsp;&nbsp;
            <a href={socialLinks.instagram}>
              <i className="fa fa-instagram"></i>
            </a>
            &nbsp;&nbsp;
        </div>
    </div>
  );
};

export default SocialLinks;
