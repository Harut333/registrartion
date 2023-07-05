let userName = document.getElementById("name")
let email = document.getElementById("email")
let login = document.getElementById("login")
let pass = document.getElementById("password")
let signUp = document.querySelector(".signUp")


signUp.addEventListener("click", (e) => {
    e.preventDefault()
    if (userName.value !== ""
        && email.value !== ""
        && login.value !== ""
        && pass.value !== "") {
        localStorage.setItem("name", userName.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("login", login.value)
        localStorage.setItem("pass", pass.value)
        userName.value = ""
        email.value = ""
        login.value = ""
        pass.value = ""
        setTimeout(() => {
            window.location = "../index.html"
        }, 2000);

    }
})