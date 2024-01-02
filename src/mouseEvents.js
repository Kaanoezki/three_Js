console.log('mouseevent.js active')
function onMouseMove(event) {
    // Calculate normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    // Update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects([tableObj.initObj], true);

    if (intersects.length > 0) {
        // Change color or apply the desired effect when the mouse is over the object
        console.log('raycast active');
    //     const movementSpeed = 0.1;
    //     tableObj.setPosition.x += movementSpeed;
    //     tableObj.setPosition.y += movementSpeed;
    //     tableObj.initObj.position.copy(tableObj.setPosition);
    } 
   
}
document.addEventListener('mousemove', onMouseMove, false);