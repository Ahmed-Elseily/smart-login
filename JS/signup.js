console.log("hello");
let nameInput = document.querySelector("#nameInput");
let emailInput = document.querySelector("#emailInput");
let passwordInput = document.querySelector("#passwordInput");
let signupBtn = document.querySelector("#signupBtn")
let passwordError = document.querySelector("#passwordError")
let alreadyEx = document.querySelector("#alreadyEx")
let usersData;

if (localStorage.getItem("user") == null) {
    usersData = [];
}
else {
    usersData = JSON.parse(localStorage.getItem("user"))
}


// console.log(user);

signupBtn.addEventListener("click", function () {
    signup()
})


function signup() {
    if ((valitdateNameInput() == true) && (valitdateEmailInput() == true) && (valitdatePasswordInput() == true) && (userExisted() == false)) {
        let userInfo = {
            username: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
        };
        usersData.push(userInfo);
        localStorage.setItem("user", JSON.stringify(usersData))
        clearInputs()
        window.location.href = "login.html";
        console.log(usersData);
    }

}

nameInput.addEventListener("input", function () {
    valitdateNameInput()
})
function valitdateNameInput() {
    let nameInputRgx = /^[a-zA-Z0-9_-]{3,15}$/
    if (nameInputRgx.test(nameInput.value) == true) {
        nameInput.classList.add("is-valid")
        nameInput.classList.remove("is-invalid")
        return true
    }
    else {
        nameInput.classList.remove("is-valid")
        nameInput.classList.add("is-invalid")
        return false
    }

}


emailInput.addEventListener("input", function () {
    valitdateEmailInput()
})
function valitdateEmailInput() {
    let emailInputRgx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    if (emailInputRgx.test(emailInput.value) == true) {
        emailInput.classList.add("is-valid")
        emailInput.classList.remove("is-invalid")
        return true
    }
    else {
        emailInput.classList.remove("is-valid")
        emailInput.classList.add("is-invalid")
        return false
    }

}
passwordInput.addEventListener("input", function () {
    valitdatePasswordInput()
})
function valitdatePasswordInput() {
    let passwordInputRgx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    if (passwordInputRgx.test(passwordInput.value) == true) {
        passwordInput.classList.add("is-valid")
        passwordInput.classList.remove("is-invalid")
        return true
    }
    else {
        passwordInput.classList.remove("is-valid")
        passwordInput.classList.add("is-invalid")
        return false
    }

}

function clearInputs() {
    nameInput.value = null;
    emailInput.value = null;
    passwordInput.value = null;
    passwordInput.classList.remove("is-valid", "is-invalid")
    emailInput.classList.remove("is-valid", "is-invalid")
    nameInput.classList.remove("is-valid", "is-invalid")

}

function userExisted() {
    for (i = 0; i < usersData.length; i++) {
        if (usersData[i].email == emailInput.value) {
            alreadyEx.classList.remove("d-none")
            return true
        }

    }
    return false
}























