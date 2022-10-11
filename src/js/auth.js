export function getAuthForm() {
    return `
    <form action="" class="auth-form">
      <div class="texfield">
        <input type="text" id="email-input">
        <label for="email-input">E-mail</label>
      </div>
      <div class="texfield">
        <input type="text" id="password-input">
        <label for="password-input">Password</label>
      </div>
        <button
          type="submit"
          id="submit"
          class="submit-btn"
        >Log in</button>
      
    </form>
    `
}


export function authWithEmailAndPassword(email, password) {
    const apiKey = 'AIzaSyCHg4J_qzob1qjMAXidJJyR0ERxgFjrLiU'
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({
            email, password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
    .then(data => data.idToken)
}