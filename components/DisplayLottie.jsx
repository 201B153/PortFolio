import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../public/lottie/web-dev.json';
import codingAnimation from '../public/lottie/new-lottie/coding.json';

const GreetingLottie = ({ animationPath }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  return (
    <div onClick={() => null}>
      <Lottie options={defaultOptions} />
    </div>
  );
};

const lottieMaker = ({ animation }) => {
  let animations = {
    animationData,
    codingAnimation,
  };

  return {
    loop: true,
    autoplay: true,
    animationData: animations[animation],
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
};

export default GreetingLottie;
lottieMaker;
