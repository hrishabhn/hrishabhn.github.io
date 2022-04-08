const dnd = {
    load: function () {
        // if there is no existing cookie and current focus is 'work' set dnd true
        if (!getCookie('dnd')) if (focus.get().work) setCookie('dnd', true, 1)
    },
    active: function () {
        if (getCookie('dnd')) return JSON.parse(getCookie('dnd'))
        return false
    },
    toggle: function () {
        if (dnd.active()) setCookie('dnd', false, (1 / 1440))
        else setCookie('dnd', true, 1)
    },

}

