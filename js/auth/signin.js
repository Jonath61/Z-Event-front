const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");
import fs from 'fs';
const data = JSON.parse(fs.readFileSync('../../json/data.json', 'utf-8'));

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    var mail = input.value;
    var password = input.value;

    var CanConnect = false;

    data.utilisateur.forEach(element => {
        if(element.email == mail && element.password == password){
            canConnect = true;
        }
    })

    //Ici, il faudra appeler l'API pour vérifier les credentials en BDD

    //for(var i = 0; i < Data["utilisateur"],lenght; i++)
    
    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){
        //Il faudra récupérer le vrai token
        const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
        setToken(token);
        //placer ce token en cookie

        setCookie(RoleCookieName, "admin", 7);
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}