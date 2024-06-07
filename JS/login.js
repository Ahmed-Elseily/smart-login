let nameInput = document.querySelector("#nameInput");
let emailInput = document.querySelector("#emailInput");
let passwordInput = document.querySelector("#passwordInput");
let signupBtn = document.querySelector("#signupBtn")
let passwordError = document.querySelector("#passwordError")
let alreadyEx = document.querySelector("#alreadyEx")
let loginBtn = document.querySelector("#loginBtn")
let loginError = document.querySelector("#loginError")
let usersData;

if (localStorage.getItem("user") == null) {
    usersData = [];
}
else {
    usersData = JSON.parse(localStorage.getItem("user"))
}
console.log(usersData);

loginBtn.addEventListener("click", function(){
    login()
})
function login(){
if (emailCorrect() == true && passwordCorrect() == true ){
    window.location.href = "home.html";

}
else{
    loginError.classList.remove("d-none")
}
}


function emailCorrect(){
    for (i=0 ; i<usersData.length; i++){
        if (usersData[i].email == emailInput.value){
            // console.log("hello");
            return true
        }
    }
}
function passwordCorrect(){
    for (i=0 ; i<usersData.length; i++){
        if (usersData[i].password == passwordInput.value){
            return true
        }
    }
}