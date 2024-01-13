    
    // outline wihtout extern
    function addOutlineToObject(object, creaseAngle = 80) {

        // Erstelle EdgesGeometry für die Kanten mit CreaseAngle, löscht sozusagen kurven 
        const edges = new THREE.EdgesGeometry(object.geometry, creaseAngle);
        const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000000}));
        line.position.copy(object.position);
        line.scale.copy(object.scale);
        line.rotation.copy(object.rotation);
        line.scale.multiplyScalar(1.002);
        // Füge die Linie zur Szene hinzu
        scene.add(line);
    }

    function loadRoom() {
        const loader = new THREE.GLTFLoader();
        loader.load('../assets/objects/room.glb', (gltf) => {
            const setPosition = new THREE.Vector3(0, 0, 0);
            const setScale = new THREE.Vector3(1, 1, 1);
            gltf.scene.name = 'room';
    
            gltf.scene.traverse((child) => {
                if (child.isMesh) {
                    // Extrahiere das Material aus dem GLTF-Modell
                    const originalMaterial = child.material;
    
                    // Verwende die im GLTF-Modell eingebettete Textur (wenn vorhanden)
                    const map = originalMaterial.map ? originalMaterial.map : null;
                    const normalMap = originalMaterial.normalMap ? originalMaterial.normalMap : null;
                    const displacementMap = originalMaterial.displacementMap ? originalMaterial.displacementMap : null;
    
                    // Erstelle ein neues Material mit den eingebetteten Texturen
                    const newMaterial = new THREE.MeshStandardMaterial({
                        map: map,
                        normalMap: normalMap,
                        displacementMap: displacementMap,
                        side: THREE.DoubleSide,
                        // Füge hier andere Einstellungen hinzu
                    });
                   
                    // Weise das neue Material dem Mesh zu
                    child.material = newMaterial;
    
                    // Füge die Outline hinzu (wie im Originalcode)
                    addOutlineToObject(child);
                }
            });
    
            roomObj = new objectSpwn(gltf.scene, setPosition, setScale);
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
        const layer2 = document.getElementById('layer1');
        layer2.style.height = window.innerHeight / 900 + 'px';
        layer2.style.width = window.innerWidth / 900 + 'px';
        layer2.style.transform = `translate(${window.innerWidth / 1}px, ${window.innerHeight / 1}px)`;

        light();
        loadRoom();
   
        console.log('Objects initialized');

    }