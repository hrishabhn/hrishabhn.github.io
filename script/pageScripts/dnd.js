function dndLoad() {
    // if there is no existing cookie and current focus is 'work' set dnd true
    if (!getCookie('dnd')) if (getFocus().work) setCookie('dnd', true, 1)
}

function isDND() {
    if (getCookie('dnd')) return JSON.parse(getCookie('dnd'))
    return false
}

function toggleDND() {
    let dndElem = document.getElementById('dnd')

    if (isDND()) {
        setCookie('dnd', false, (1 / 1440))
        dndElem.firstChild.classList.remove('blue-fg')
    } else {
        setCookie('dnd', true, 1)
        dndElem.firstChild.classList.add('blue-fg')
    }
}