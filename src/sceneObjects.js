function loadSofa() {
    const loader = new THREE.GLTFLoader();
    loader.load('../assets/objects/sofa.glb', (gltf) => {
        const setPosition = new THREE.Vector3(0, 0.2, 0);
        const setScale = new THREE.Vector3(1, 1, 1);
        gltf.scene.name = 'sofa';

        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                let normalMap = new THREE.TextureLoader().load('../assets/materials/fabric_leather_normal.jpg');
                normalMap.repeat.set(4, 4);
                const material = new THREE.MeshPhongMaterial({
                    map: new THREE.TextureLoader().load('../assets/materials/fabric_leather.jpg'),
                    specularMap: new THREE.TextureLoader().load('../assets/materials/fabric_leather_spec.png'), 
                    flatShading: false,
                    side: THREE.DoubleSide
                });
                child.material = material;
                child.geometry.computeTangents();
                
            }
        });

        sofaObj = new objectSpwn(gltf.scene, setPosition, setScale);
        
    });
}
function loadTeppich() {
    const loader = new THREE.GLTFLoader();
    loader.load('../assets/objects/teppich.glb', (gltf) => {
        const setPosition = new THREE.Vector3(0, 0.001, 0);
        const setScale = new THREE.Vector3(1, 1, 1);
        gltf.scene.name = 'teppich';

        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                let normalMap = new THREE.TextureLoader().load('../assets/materials/teppich_normal.png');
                normalMap.repeat.set(10, 10);
                const material = new THREE.MeshPhongMaterial({
                    map: new THREE.TextureLoader().load('../assets/materials/teppich.png'),
                    specularMap: new THREE.TextureLoader().load('../assets/materials/teppich_spec.png'),
                    side: THREE.DoubleSide,
                    flatShading: false,
                });
                child.material = material;
                child.geometry.computeTangents();
                
            }
        });

        teppichObj = new objectSpwn(gltf.scene, setPosition, setScale);
    });
}
function loadFloor() {
    const loader = new THREE.GLTFLoader();
    loader.load('../assets/objects/Floor.glb', (gltf) => {
        const setPosition = new THREE.Vector3(0, 0.001, 0);
        const setScale = new THREE.Vector3(1, 1, 1);
        gltf.scene.name = 'teppich';

        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                let normalMap = new THREE.TextureLoader().load('../assets/materials/wood_normal.png');
                normalMap.repeat.set(10, 10);
                const material = new THREE.MeshPhongMaterial({
                    map: new THREE.TextureLoader().load('../assets/materials/wood.jpg'),
                    side: THREE.DoubleSide,
                    flatShading: false,
                });
                child.material = material;
                child.geometry.computeTangents();
                
            }
        });

        floorObj = new objectSpwn(gltf.scene, setPosition, setScale);
    });
}
function loadTable() {
    const loader = new THREE.GLTFLoader();
    loader.load('../assets/objects/Table.glb', (gltf) => {
        const setPosition = new THREE.Vector3(0, 0, 0);
        const setScale = new THREE.Vector3(1, 1, 1);
        gltf.scene.name = 'table';

        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                let normalMap = new THREE.TextureLoader().load('../assets/materials/table_normal.png');
                normalMap.repeat.set(2, 2);
                const material = new THREE.MeshPhongMaterial({
                    map: new THREE.TextureLoader().load('../assets/materials/table.jpg'),
                    specularMap: new THREE.TextureLoader().load('../assets/materials/table_spec.png'),
                    side: THREE.DoubleSide,
                    flatShading: false,
                    
                });
                child.material = material;
                child.geometry.computeTangents();
            }
        });

        tableObj = new objectSpwn(gltf.scene, setPosition, setScale);
    });
}
function loadWall() {
    const loader = new THREE.GLTFLoader();
    loader.load('../assets/objects/wall.glb', (gltf) => {
        const setPosition = new THREE.Vector3(0, 0, 0);
        const setScale = new THREE.Vector3(1, 1, 1);
        gltf.scene.name = 'wall';

        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                // Erstellen Sie ein MeshStandardMaterial ohne Texturen
                let normalMap = new THREE.TextureLoader().load('../assets/materials/wall_normal.png');
                normalMap.repeat.set(2, 2);
                const material = new THREE.MeshStandardMaterial({
                    map: new THREE.TextureLoader().load('../assets/materials/wallColor.jpg'),
                    // color: 0x00FFFF,  // Farbe des Materials
                    // metalness: 0.1,     // Setzen Sie die Metallheit auf 1 für ein metallisches Material
                    // roughness: 0.1,   // Optional: Passen Sie die Rauheit an
                    flatShading: false,
                });

                child.material = material;
                child.geometry.computeTangents();
            }
        });

                 wallObj = new objectSpwn(gltf.scene, setPosition, setScale);
            });
}
function loadLaptop() {
        const loader = new THREE.GLTFLoader();
        loader.load('../assets/objects/laptop.glb', (gltf) => {
            const setPosition = new THREE.Vector3(0, 0, -0.5 );
            const setScale = new THREE.Vector3(1, 1, 1);
            gltf.scene.name = 'laptop';

            gltf.scene.traverse((child) => {
                if (child.isMesh) {
                    let normalMap = new THREE.TextureLoader().load('../assets/materials/keyboard_normal.png');
            normalMap.repeat.set(2, 2);
                    // Erstellen Sie ein MeshStandardMaterial ohne Texturen
                    const material = new THREE.MeshStandardMaterial({
                        map: new THREE.TextureLoader().load('../assets/materials/keyboard.jpg'),
                        side: THREE.DoubleSide,
                        // color: 0x00FFFF,  
                        // // metalness: 5.1,     
                        // // roughness: 0.1,   
                        // flatShading: true,
                    });

                    child.material = material;
                }
            });

                        laptopObj = new objectSpwn(gltf.scene, setPosition, setScale);
                });
}
function loadMonitor() {
                    const loader = new THREE.GLTFLoader();
                    loader.load('../assets/objects/monitor.glb', (gltf) => {
                        const setPosition = new THREE.Vector3(-0.2, 0, 0);
                        const setScale = new THREE.Vector3(1, 1, 1);
                        gltf.scene.name = 'monitor';
                
                        gltf.scene.traverse((child) => {
                            if (child.isMesh) {
                                // Erstellen Sie ein MeshStandardMaterial ohne Texturen
                                const material = new THREE.MeshStandardMaterial({
                                    map: new THREE.TextureLoader().load('../assets/materials/screensaver.png'),
                                    side: THREE.DoubleSide,
                                    // color: 0x00FFFF,  
                                    // // metalness: 5.1,     
                                    // // roughness: 0.1,   
                                    // flatShading: true,
                                });
                
                                child.material = material;
                            }
                        });
                
                                 monitorObj = new objectSpwn(gltf.scene, setPosition, setScale);
                            });
}
        


class objectSpwn {
    constructor(initObj, setPosition, setScale) {
        this.initObj = initObj;
        this.setPosition = setPosition;
        this.setScale = setScale;
        this.initObj.position.set(this.setPosition.x, this.setPosition.y, this.setPosition.z);
        this.initObj.scale.set(this.setScale.x, this.setScale.y, this.setScale.z);
        scene.add(this.initObj);
    }
}
function initObjects() {
    const layer2 = document.getElementById('layer2');
    layer2.style.height = window.innerHeight / 2 + 'px';
    layer2.style.width = window.innerWidth / 2 + 'px';
    layer2.style.transform = `translate(${window.innerWidth / 4}px, ${window.innerHeight / 4}px)`;

    light();
    loadBlueprint();
    loadSuzann();
    loadSofa();
    loadTeppich();
    loadFloor();
    loadWall();
    loadTable();
    loadLaptop();
    loadMonitor();
    console.log('Objects initialized');
}
addOutlineObjFromLayer2();

