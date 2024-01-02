
function toggleOutline() {
    const objectsInScene = scene.children.filter(obj => obj.isMesh);
    outlinePass.selectedObjects = objectsInScene;
}

toggleOutline();