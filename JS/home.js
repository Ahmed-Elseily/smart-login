let nameInput = document.querySelector("#nameInput");
let emailInput = document.querySelector("#emailInput");
let passwordInput = document.querySelector("#passwordInput");
let signupBtn = document.querySelector("#signupBtn")
let passwordError = document.querySelector("#passwordError")
let alreadyEx = document.querySelector("#alreadyEx")
let loginBtn = document.querySelector("#loginBtn")
let loginError = document.querySelector("#loginError")
let welcome = document.querySelector("#welcome")
let logoutBtn = document.querySelector("#logoutBtn")
let usersData;
let welcomeMessage;
if (localStorage.getItem("user") == null) {
    usersData = [];
}
else {
    usersData = JSON.parse(localStorage.getItem("user"))
}
console.log(usersData);

welcomeMessage = "";
for (i =0; i<usersData.length; i++){
    welcomeMessage = `Welcome ${usersData[i].username}`
    document.querySelector("#welcome").innerHTML = welcomeMessage;
}

logoutBtn.addEventListener("click", function(){
logout()
})
function logout(){
    window.location.href = "login.html";

}