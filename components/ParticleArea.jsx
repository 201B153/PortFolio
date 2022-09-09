import React from 'react'

import Particles from 'react-particles-js'

import ParticlesData from '../constants/particle.json'
// import Particle from '../pages/Particle'

const ParticleArea = () => {
  return (
    <div className='particle-area' id='/'>
      {/* @ts-ignore */}
      <Particles className='particles-js' params={ParticlesData} />
    </div>
  )
}

export default ParticleArea