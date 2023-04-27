import * as THREE from 'three';
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const loadPCDFile = (containerRef: React.RefObject<HTMLDivElement>) => {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(
    containerRef.current?.clientWidth ?? 0,

    containerRef.current?.clientHeight ?? 0
  );
  renderer.setClearColor(0x000000, 0);
  containerRef.current?.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(30, 1, 0.01, 40);
  camera.position.set(0, 0.2, 1);
  scene.add(camera);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', () => {
    renderer.render(scene, camera);
  });
  controls.minDistance = 0.5;
  controls.maxDistance = 10;

  const loader = new PCDLoader();
  loader.load('/Zaghetto.pcd', (points) => {
    points.geometry.center();
    points.geometry.rotateX(Math.PI);

    const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.001 });
    points.material = material;

    points.name = 'Zaghetto.pcd';
    scene.add(points);

    renderer.render(scene, camera);
  });

  return containerRef;
};

export default loadPCDFile;
