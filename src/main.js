import * as THREE from 'https://threejs.org/build/three.module.js';
import { EffectComposer } from 'https://threejs.org/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'https://threejs.org/examples/jsm/postprocessing/RenderPass.js';
import { OutlinePass } from 'https://threejs.org/examples/jsm/postprocessing/OutlinePass.js';

console.log('main.js active');

// Your existing code for init, zoomCamera, light, loadBlueprint, loadSuzann, animate, windowResize, and onObjectClick functions
// ...

function onClick(event) {
    onObjectClick(event, suzannObj.initObj);
}

document.getElementById('threejs-container').addEventListener('click', onClick, false);
windowResize();
init();
initObjects();
