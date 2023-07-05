let login = document.getElementById("login")
let pass = document.getElementById("password")
let signIn = document.querySelector(".signIn")


signIn.addEventListener("click", (e) => {
    e.preventDefault()
    if (login.value !== "" && pass.value !== "") {
        let localLogin = localStorage.getItem("login")
        let localPass = localStorage.getItem("pass")
        if (login.value == localLogin && pass.value == localPass) {
            login.value = ""
            pass.value = ""
            alert("success")
        }
        else {
            alert("wrong")
        }
    }
})