// Fonction pour vérifier le code d'accès
function checkCode() {
    const code = document.getElementById("access-code").value;
    const errorMessage = document.getElementById("error-message");

    // Remplace "1234" par le code que tu veux utiliser
    if (code === "1234") {
        window.location.href = "ressources-bts.html#unlocked";
    } else {
        errorMessage.textContent = "Code incorrect. Réessayez.";
    }
}


// Animation pour le canvas (optionnel)
document.addEventListener("DOMContentLoaded", function() {
    // Tu peux ajouter ici une animation pour le canvas si tu veux
});
