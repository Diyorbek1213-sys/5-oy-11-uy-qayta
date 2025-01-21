function isRegistered() {
    const user = localStorage.getItem('user')

    if (user === null) {
        return false
    } else {
        return true
    }
}

window.addEventListener('load', function() {
    const is = isRegistered()

    if (!is) {
        window.location.pathname = '/pages/register.html'
    }
})