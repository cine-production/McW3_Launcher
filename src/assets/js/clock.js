// S'assurer que le code s'exécute après que la page ait été chargée
document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour obtenir l'heure actuelle
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}`;

        // Mettre à jour le contenu de la div
        document.getElementById('clock').textContent = timeString;
    }

    // Mettre à jour l'horloge toutes les secondes
    setInterval(updateClock, 1000);

    // Appeler la fonction immédiatement pour afficher l'heure sans délai
    updateClock();
});