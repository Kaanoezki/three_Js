// glb exporter zum testen von glb, ob es richtig exportiert wurden ist function exportGLTF(scene, fileName) {
    const exporter = new THREE.GLTFExporter();

    exporter.parse(scene, (gltf) => {
        const output = JSON.stringify(gltf, null, 2);
        saveString(output, fileName);
    }, {});


function saveString(text, filename) {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}