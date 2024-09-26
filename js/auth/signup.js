//Implémenter le JS de ma page

const inputUsername = document.getElementById("UsernameInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");

import fs from 'fs';
const data = JSON.parse(fs.readFileSync('../../json/data.json', 'utf-8'));

inputUsername.addEventListener("keyup", validateForme);
inputMail.addEventListener("keyup", validateForme);
inputPassword.addEventListener("keyup", validateForme);
inputValidationPassword.addEventListener("keyup", validateForme);

//Fonction de validation de formulaire
function validateForme(){
    const usernameOK = validateRequired(inputUsername);
    const mailOK = validateMail(inputMail);
    const passwordOK = validatePassword(inputPassword);
    const passwordConfirmOK = validateConfirmationPassword(inputPassword, inputValidationPassword);

    if(usernameOK && mailOK && passwordOK && passwordConfirmOK){
        btnValidation.disabled = false;
    }
    else{
        btnValidation.disabled = true;
    }
}

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

//Fonction de validation d'Email
function validateMail(input){
    // Définition du Regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mailUser = inputMail.value;
        if(mailUser.match(emailRegex)){
            input.classList.add("is-valid");
            input.classList.remove("is-invalid");
            return true;
        }
        else{
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
            return false;
    }
}

//Fonction de validation de mot de passe
function validatePassword(input){
// Définition du Regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = inputPassword.value;
    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

//Fonction de validation de confirmation de mot de passe
function validateConfirmationPassword(inputPwd, inputConfirmPwd){
        if(inputPwd.value == inputConfirmPwd.value){
            inputConfirmPwd.classList.add("is-valid");
            inputConfirmPwd.classList.remove("is-invalid");
            return true;
        }
        else{
            inputConfirmPwd.classList.add("is-invalid");
            inputConfirmPwd.classList.remove("is-valid");
            return false;
        }
    }