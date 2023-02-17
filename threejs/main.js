import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.5, 300);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(100);
camera.position.setX(-50);;
camera.position.set(0, 0, 20);
renderer.render(scene, camera);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.intensity = 3;

pointLight.position.set(0, 0, 25);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const spaceTexture = new THREE.TextureLoader().load('Assets/energy.jpg');
scene.background = spaceTexture;



const proton = new THREE.Mesh(new THREE.SphereGeometry(0.5, 600, 600),  new THREE.MeshStandardMaterial({ color: 0Xffffff, metalness: 1, roughness: 0}));
const electron1 = new THREE.Mesh(new THREE.SphereGeometry(0.2, 200, 20), new THREE.MeshStandardMaterial({ color: 0Xffffff, metalness: 1, roughness: 0}));
const electron2 = new THREE.Mesh(new THREE.SphereGeometry(0.2, 200, 20), new THREE.MeshStandardMaterial({ color: 0Xffffff, metalness: 1, roughness: 0}));
const electron3 = new THREE.Mesh(new THREE.SphereGeometry(0.2, 200, 20), new THREE.MeshStandardMaterial({ color: 0Xffffff, metalness: 1, roughness: 0 }));


const atomo1 = new THREE.Mesh(new THREE.SphereGeometry(1, 600, 600),  new THREE.MeshStandardMaterial({ color: 0Xffffff, metalness: 1, roughness: 0}));
const atomo2 = new THREE.Mesh(new THREE.SphereGeometry(0.5, 600, 600),  new THREE.MeshStandardMaterial({ color: 0Xffffff, metalness: 1, roughness: 0}));
const atomo3 = new THREE.Mesh(new THREE.SphereGeometry(0.5, 600, 600),  new THREE.MeshStandardMaterial({ color: 0Xffffff, metalness: 1, roughness: 0}));
const atomo4 = new THREE.Mesh(new THREE.SphereGeometry(0.4, 600, 600),  new THREE.MeshStandardMaterial({ color: 0Xffffff, metalness: 1, roughness: 0}));
const atomo5 = new THREE.Mesh(new THREE.SphereGeometry(0.5, 600, 600),  new THREE.MeshStandardMaterial({ color: 0Xffffff, metalness: 1, roughness: 0}));
const atomo6 = new THREE.Mesh(new THREE.SphereGeometry(0.5, 600, 600),  new THREE.MeshStandardMaterial({ color: 0Xffffff, metalness: 1, roughness: 0}));

const atom1Trajectory = new THREE.Line(new THREE.BufferGeometry().setFromPoints([atomo1.position, atomo1.position]), new THREE.LineBasicMaterial({ color: 0x00ff00 }));
const atom2Trajectory = new THREE.Line(new THREE.BufferGeometry().setFromPoints([atomo1.position, atomo2.position]), new THREE.LineBasicMaterial({ color: 0x00ff00 }));
const atom3Trajectory = new THREE.Line(new THREE.BufferGeometry().setFromPoints([atomo1.position, atomo3.position]), new THREE.LineBasicMaterial({ color: 0x00ff00 }));
const atom4Trajectory = new THREE.Line(new THREE.BufferGeometry().setFromPoints([atomo1.position, atomo4.position]), new THREE.LineBasicMaterial({ color: 0x00ff00 }));
const atom5Trajectory = new THREE.Line(new THREE.BufferGeometry().setFromPoints([atomo1.position, atomo5.position]), new THREE.LineBasicMaterial({ color: 0x00ff00 }));
const atom6Trajectory = new THREE.Line(new THREE.BufferGeometry().setFromPoints([atomo1.position, atomo6.position]), new THREE.LineBasicMaterial({ color: 0x00ff00 }));
const electron1AngularSpeed = 0.1;
const electron2AngularSpeed = 0.1;
const electron3AngularSpeed = 0.1;
const electron1Position = electron1.position;  
const electron2Position = electron2.position;
const electron3Position = electron3.position;

const atomo1posicao = atomo1.position;
const atomo2posicao = atomo2.position;
const atomo3posicao = atomo3.position;
const atomo4posicao = atomo4.position;
const atomo5posicao = atomo5.position;
const atomo6posicao = atomo6.position;







proton.position.set(0, 0, 0);
electron1.position.set(2, 2, 0);
electron2.position.set(2, 0, 2);
electron3.position.set(0, 0, 2);
atomo1.position.set(0, 0, 10);//central
atomo2.position.set(0,-2, 10);
atomo3.position.set(1, 2, 10);
atomo4.position.set(-2, 2, 10);
atomo5.position.set(-2,0, 10);
atomo6.position.set(2,-1, 10);

scene.add(proton);
scene.add(electron1);
scene.add(electron2);
scene.add(electron3);
scene.add(atomo1);
scene.add(atomo2);
scene.add(atomo3);
scene.add(atomo4);
scene.add(atomo5);
scene.add(atomo6);

scene.add(atom1Trajectory);
scene.add(atom2Trajectory);
scene.add(atom3Trajectory);
scene.add(atom4Trajectory);
scene.add(atom5Trajectory);
scene.add(atom6Trajectory);


const terraTexture = new THREE.TextureLoader().load('Assets/earthmap.jpg');
const normalTexture = new THREE.TextureLoader().load('Assets/normal.jpg');

const terra = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: terraTexture,
    normalMap: normalTexture,
  })
);

scene.add(terra);
terra.position.set(-5,-1, 20);

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0001;
  camera.rotation.y = t * -0.000002;
  
  // terra.rotation.x += 0.05;
  // terra.rotation.y += 0.075;
  // terra.rotation.z += 0.05;
}

document.body.onscroll = moveCamera;
moveCamera();




function animate() {
  requestAnimationFrame(animate);
  terra.rotation.x += 0.005;
  
  
  atom1Trajectory.geometry.setFromPoints([atomo1.position, atomo1.position]);
  atom2Trajectory.geometry.setFromPoints([atomo1.position, atomo2.position]);
  atom3Trajectory.geometry.setFromPoints([atomo1.position, atomo3.position]);
  atom4Trajectory.geometry.setFromPoints([atomo1.position, atomo4.position]);
  atom5Trajectory.geometry.setFromPoints([atomo1.position, atomo5.position]);
  atom6Trajectory.geometry.setFromPoints([atomo1.position, atomo6.position]); 
       
   electron1Position.applyAxisAngle(new THREE.Vector3(0, 0, 1), electron1AngularSpeed);
   electron2Position.applyAxisAngle(new THREE.Vector3(0, 1, 0), electron2AngularSpeed);
   electron3Position.applyAxisAngle(new THREE.Vector3(1, 0, 0), electron3AngularSpeed);

  renderer.render(scene, camera);
}

animate();
