// blender scene
// test code 
import * as THREE from 'three';

import { GLTFLoader } from '/three/examples/jsm/loaders/GLTFLoader.js';
// scene & camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
// scene loader
const loader = new THREE.GLTFLoader();

loader.load('./asset/cube.glb', (gltf) => {
    const model = gltf.scene;
    model.position.set(0, 0, 0); // Positionieren Sie das Modell im Zentrum der Szene
    scene.add(model);
});
camera.position.z = 5;


function animate() {
    requestAnimationFrame(animate);
    // Hier kannst du Animationen oder Kamerabewegungen hinzufügen
    renderer.render(scene, camera);
  }
  
  animate();


