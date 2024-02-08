// Funktion zum Anzeigen der Sprechblase
function showSpeechBubble() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('speechBubble').style.display = 'block';
}

// Funktion zum Schließen der Sprechblase
function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('speechBubble').style.display = 'none';
}
