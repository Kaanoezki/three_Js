// // Füge dies in deinen bestehenden Code ein, nachdem die Szene initialisiert wurde
// const outlinerContainer = document.getElementById('outliner');
// if (isSceneInitialized) {
// } else {
//     // Füge einen Event-Listener hinzu, der die Outliner-Funktion aufruft, wenn die Szene initialisiert ist
//     window.addEventListener('sceneInitialized', createOutliner);
// }
//     createOutliner();
// function createOutliner() {
//     const objectsInScene = scene.children.filter(obj => obj.isMesh);

//     objectsInScene.forEach((obj, index) => {
//         const listItem = document.createElement('div');
//         listItem.textContent = `Object ${index + 1}: ${obj.name || 'Unnamed'}`;
//         listItem.classList.add('outliner-item');

//         listItem.addEventListener('click', () => {
//             // Füge hier die Logik hinzu, um auf das geklickte Objekt zu reagieren
//             console.log(`Object ${index + 1} clicked!`);
//         });

//         outlinerContainer.appendChild(listItem);
//     });
// }

// // Rufe die Funktion auf, nachdem Objekte zur Szene hinzugefügt wurden
// createOutliner();
