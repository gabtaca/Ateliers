// Fonction pour changer la couleur de fond en fonction de la taille de l'écran
function changeBackgroundColor() {
    if (window.innerWidth < 768) {
        document.body.style.backgroundColor = 'violet';
    } else {
        document.body.style.backgroundColor = 'green';
    }
}

// Fonction pour ajouter le bouton en fonction de la taille de l'écran
function addButton() {
    const button = document.getElementById('responsive-button');
    if (!button) {
        const newButton = document.createElement('button');
        newButton.id = 'responsive-button';
        newButton.textContent = 'Click Me';
        if (window.innerWidth >= 1024) {
            document.body.appendChild(newButton);
        }
    }
}

// Appeler les fonctions au chargement de la page
window.addEventListener('DOMContentLoaded', () => {
    changeBackgroundColor();
    addButton();
});

// Écouter les événements de redimensionnement de l'écran et réagir en conséquence
window.addEventListener('resize', () => {
    changeBackgroundColor();
    addButton();
});