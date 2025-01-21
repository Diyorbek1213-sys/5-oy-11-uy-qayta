const registerForm = document.getElementById('registerForm')
const registerButton = document.getElementById('registerButton')
const toast = document.getElementById('toast-danger')
const toastContainer = document.getElementById('toastContainer')
const username = document.getElementById('username')
const password = document.getElementById('password')

function validate(username, password) {
    if (username.value.length < 3) {
        username.focus()
        username.style.outlineColor = 'red'
        alert('username 3 tadan kam bo`lmasin')
        return false
    }

    if (password.value.length < 3) {
        password.focus()
        password.style.outlineColor = 'red'
        alert('parol 3 tadan kam bo`lmasin')
        return false
    }
} 

registerForm && registerForm.addEventListener('submit', function(event) {
    event.preventDefault()

    const user = {
        username: username.value,
        password: password.value
    }

    fetch('https://auth-rg69.onrender.com/api/auth/signin', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    .then(response => {
        if (response.status === 200) {
            return response.json()
        }
    })
    .then(data => {
        console.log(data)
        location.assign(`${window.location.origin}/login.html`)
       
    })
    .catch(error => {
        console.log(error)
    })
})