const form = document.querySelector("#loginForm");
const username = document.querySelector("#usernameInput");
const password = document.querySelector("#passwordInput");



const handleSubmit = async e =>{
    e.preventDefault()
    await fetch('/login/auth', {
        
    })
}


form.addEventListener('submit', handleSubmit)