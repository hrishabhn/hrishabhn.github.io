function behindPass() {
    if (!checkPass()) {
        getPass()
    }
}

function checkPass() {
    return (!!getCookie('verified'))
}

function getPass() {
    var pass = prompt('Enter password:')

    while (pass != 'pass') {
        pass = prompt('Wrong password, try again:')
    }

    setCookie('verified',true,14)
    console.log(getCookie('verified'))
}