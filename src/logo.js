// // Einzelner Container für beide Szenen
// var sceneContainer2 = document.getElementById('scene-container2');

// // Szene 1 ohne Würfel
// var scene1 = new THREE.Scene();
// var camera1 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// var renderer1 = new THREE.WebGLRenderer();
// renderer1.setSize(window.innerWidth / 2, window.innerHeight); // Teile den Renderer-Bereich für beide Szenen
// sceneContainer2.appendChild(renderer1.domElement);

// // Kamera-Position setzen
// camera1.position.z = 5;

// // Licht hinzufügen (könnte auch zu loadLogo verschoben werden)
// const ambientLight1 = new THREE.AmbientLight(0xffffff, 1.0);
// scene1.add(ambientLight1);

// // Animations- oder Render-Loop
// function animate1() {
//     requestAnimationFrame(animate1);
//     renderer1.render(scene1, camera1);
// }

// animate1();

// // Szene 2 mit 3D-Modell (assetPlacerTool)
// var scene2 = new THREE.Scene();
// var camera2 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// var renderer2 = new THREE.WebGLRenderer();
// renderer2.setSize(window.innerWidth / 2, window.innerHeight); // Teile den Renderer-Bereich für beide Szenen
// sceneContainer2.appendChild(renderer2.domElement);

// // Licht hinzufügen (könnte auch zu loadLogo verschoben werden)
// const ambientLight2 = new THREE.AmbientLight(0xffffff);
// scene2.add(ambientLight2);

// function loadLogo() {
//     const loader = new THREE.GLTFLoader();
//     loader.load('../assets/objects/assetPlacerTool.glb', (gltf) => {
//         const setPosition = new THREE.Vector3(0, 0, 0);
//         const setScale = new THREE.Vector3(1, 1, 1);
//         gltf.scene.name = 'assetPlacerTool';

//         gltf.scene.traverse((child) => {
//             if (child.isMesh) {
//                 const originalMaterial = child.material;
//                 const map = originalMaterial.map ? originalMaterial.map : null;
//                 const normalMap = originalMaterial.normalMap ? originalMaterial.normalMap : null;
//                 const displacementMap = originalMaterial.displacementMap ? originalMaterial.displacementMap : null;

//                 const newMaterial = new THREE.MeshStandardMaterial({
//                     map: map,
//                     normalMap: normalMap,
//                     displacementMap: displacementMap,
//                     side: THREE.DoubleSide,
//                 });

//                 child.material = newMaterial;
//             }
//         });

//         const assetPlacerTool = new objectSpwn2(gltf.scene, setPosition, setScale);
//         scene2.add(assetPlacerTool.initObj); // Füge das initObj zur Szene hinzu
//     });
// }

// // Objekterzeugungsklasse
// class objectSpwn2 {
//     constructor(initObj, setPosition, setScale) {
//         this.initObj = initObj;
//         this.setPosition = setPosition;
//         this.setScale = setScale;
//         this.initObj.position.set(this.setPosition.x, this.setPosition.y, this.setPosition.z);
//         this.initObj.scale.set(this.setScale.x, this.setScale.y, this.setScale.z);
//     }
// }
