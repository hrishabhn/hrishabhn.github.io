const dnd = {
    load: function () {
        // if there is no existing cookie and current focus is 'work' set dnd true
        if (!getCookie('dnd')) if (focus.get().work) setCookie('dnd', true, 1)
    },
    elemLoad: function () {
        if (dnd.active()) document.getElementById('dnd').classList.add('active')
    },
    active: function () {
        if (getCookie('dnd')) return JSON.parse(getCookie('dnd'))
        return false
    },
    toggle: function () {
        let dndElem = document.getElementById('dnd')

        if (dnd.active()) {
            setCookie('dnd', false, (1 / 1440))
            dndElem.classList.remove('active')
        } else {
            setCookie('dnd', true, 1)
            dndElem.classList.add('active')
        }
    },

}

