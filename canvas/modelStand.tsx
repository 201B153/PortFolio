'use client';
import { Canvas } from '@react-three/fiber';
import { Preload, useGLTF } from '@react-three/drei';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const ModelStandCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: false }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Earth />
      <Preload all />
    </Canvas>
  );
};

export default ModelStandCanvas;
