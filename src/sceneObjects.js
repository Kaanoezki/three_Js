function loadSofa() {
    const loader = new THREE.GLTFLoader();
    loader.load('../assets/objects/sofa.glb', (gltf) => {
        const setPosition = new THREE.Vector3(0, 0, 0);
        const setScale = new THREE.Vector3(1, 1, 1);
        gltf.scene.name = 'sofa';

        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                let normalMap = new THREE.TextureLoader().load('../assets/materials/fabric_leather_normal.jpg');
                normalMap.repeat.set(4, 4);
                const material = new THREE.MeshPhongMaterial({
                    map: new THREE.TextureLoader().load('../assets/materials/fabric_leather.jpg'),
                    specularMap: new THREE.TextureLoader().load('../assets/materials/fabric_leather_spec.png'), 
                    
                    side: THREE.DoubleSide
                });
                child.material = material;
                
            }
        });

        sofaObj = new objectSpwn(gltf.scene, setPosition, setScale);
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
    console.log('Objects initialized');
}