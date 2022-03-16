function dndLoad() {
    if (getFocus().work) setCookie('dnd', true, 1)
}

function isDND() {
    if (getCookie('dnd')) return JSON.parse(getCookie('dnd'))
    return false
}

function toggleDND() {
    let dndElem = document.getElementById('dnd')

    if (isDND()) {
        removeCookie('dnd')
        dndElem.firstChild.classList.remove('blue-fg')
    } else {
        setCookie('dnd', true, 1)
        dndElem.firstChild.classList.add('blue-fg')
    }
}