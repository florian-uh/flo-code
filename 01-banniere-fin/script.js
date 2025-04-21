console.log('connecté'); 
// Je sélectionne par classe et je stocke
// le bouton .btn-success;

const btnSuccess = document.querySelector('.btn-success');

console.log(btnSuccess);
const cookies = document.querySelector('.cookies');
console.log(cookies);

btnSuccess.addEventListener('click', function(){
    console.log('bouton clique !');
    cookies.remove();
});