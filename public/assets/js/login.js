const loginEl = document.getElementById("login-form");

function sendLoginInfo(event) {
    event.preventDefault()

    const usernameAttempt = document.getElementById("username").value
    const passwordAttempt = document.getElementById("password").value

    const loginObj = {
        email: usernameAttempt,
        passwordHash: passwordAttempt
    }

    fetch("/api/login-routes/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginObj)
    }).then(response => response.json())
        .then(data => {
            window.location.replace("/api/login-routes/profile")
        })
}

loginEl.addEventListener("submit", sendLoginInfo)