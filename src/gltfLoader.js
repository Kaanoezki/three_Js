
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const loader = new GLTFLoader();

loader.load('..assets/suzann.glb', (gltf) => {
    // Position and add the loaded model to the scene
    gltf.scene.position.set(0, 0, -10); // Adjust the z position
    scene.add(gltf.scene);
  
});



loader.load('path/to/your/blendfile.blend', (gltf) => {
 const scene = new THREE.Scene();
 scene.add(gltf.scene);

 // Set up the camera, renderer, and controls...
}, undefined, (error) => {
 console.error('An error occurred while loading the blend file:', error);
});

const teapot = new THREE-GLTFLoader();
    loader.load('../assets/teaPot.glft',function(glft){
        gltf.scene.position.set(0, 0, 0);
        scene.add(glft.scene);
    // render scene
    renderer.render(scene,camera);
    });
camera.position.z = 5;

/*how do i implement blender files in my js
script to interact with on my website, im using node js ect? */
