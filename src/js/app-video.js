import { getAuthForm, authWithEmailAndPassword  } from "./auth";
import { createModal } from "./utils";




function openModal() {
    createModal(title, getAuthForm())
    document.getElementById('auth-form')
        .addEventListener('submit', authFormHandler)
}

function authFormHandler(e) {
    e.preventDefault()

    const email = e.target.querySelector('#email').value
    const password = e.target.querySelector('#password').value

    authWithEmailAndPassword(email, password)
        .then(token => {
           console.log(token) 
        })
    
}