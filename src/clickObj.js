// Initialisiere Raycaster und Mausvektor
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let suzannObj;

function onclickeventSuzann(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // raycast camera
    raycaster.setFromCamera(mouse, camera);
    
    if (suzannObj){
    const intersects = raycaster.intersectObjects(suzannObj.children, true);

        if (intersects.length > 0) {
            const clickedObject = intersects[0].object;

            // Überprüfe, ob das geklickte Objekt suzann.gltf ist
            if (clickedObject.name === 'suzann.gltf') {
                // Aktionen spezifisch für suzann.gltf auslösen
                console.log('suzann.gltf wurde geklickt');
            }
        }
    }
}
document.getElementById('threejs-container').addEventListener('click', onclickeventSuzann);
