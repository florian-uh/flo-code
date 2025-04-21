// Récupération des éléments du DOM
const form = document.getElementById("formulaire"); // Formulaire principal
const prenom = document.getElementById("prenom"); // Champ "Prénom"
const nom = document.getElementById("nom"); // Champ "Nom"
const email = document.getElementById("email"); // Champ "Email"
const message = document.getElementById("message"); // Champ "Message"
const msgError = document.querySelectorAll(".error"); // Tous les éléments avec la classe "error"
const titre = document.getElementById('titre'); // Élément pour afficher un message de remerciement

// Ajout d'un écouteur d'événement sur le formulaire pour détecter la soumission
form.addEventListener("submit", function(e) {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission
    console.log("formulaire envoyé"); // Log pour indiquer que le formulaire a été soumis

    // Récupération et nettoyage des valeurs des champs
    const nomValue = nom.value.trim(); // Supprime les espaces inutiles dans le champ "Nom"
    console.log(nomValue, "nom"); // Affiche la valeur du champ "Nom" dans la console
    const emailValue = email.value.trim(); // Supprime les espaces inutiles dans le champ "Email"
    console.log(emailValue, "email"); // Affiche la valeur du champ "Email" dans la console
    const messageValue = message.value.trim(); // Supprime les espaces inutiles dans le champ "Message"
    console.log(messageValue, "message"); // Affiche la valeur du champ "Message" dans la console

    // Création d'un objet utilisateur avec les données saisies
    const user = {
        prenom: prenom.value, // Valeur du champ "Prénom"
        nom: nom.value, // Valeur du champ "Nom"
        email: email.value // Valeur du champ "Email"
    };

    // Masque le formulaire après soumission
    form.style.display = "none";

    // Affiche un message de remerciement avec le prénom de l'utilisateur
    titre.innerHTML = "Merci" + " " + prenom.value;

    // Cache tous les messages d'erreur en ajoutant la classe "invisible"
    msgError.forEach(error => {
        error.classList.add("invisible");
    });

    // Validation des champs avec des conditions spécifiques
    if (prenom.value.trim().length < 2 || prenom.value.trim().length > 10) {
        // Vérifie si le prénom est trop court ou trop long
        console.log('erreur prenom'); // Log pour indiquer une erreur sur le prénom
        prenom.nextElementSibling.classList.remove('invisible'); // Affiche le message d'erreur associé au prénom
    } else if (nomValue.length < 3 || nomValue.length > 15) {
        // Vérifie si le nom est trop court ou trop long
        console.log("erreur nom"); // Log pour indiquer une erreur sur le nom
        nom.nextElementSibling.classList.remove('invisible'); // Affiche le message d'erreur associé au nom
    } else if (messageValue.length < 10 || messageValue.length > 100) {
        // Vérifie si le message est trop court ou trop long
        console.log('erreur message'); // Log pour indiquer une erreur sur le message
        message.nextElementSibling.classList.remove('invisible'); // Affiche le message d'erreur associé au message
    } else {
        // Si toutes les validations passent
        console.log("success"); // Log pour indiquer que tout est correct
    };
});