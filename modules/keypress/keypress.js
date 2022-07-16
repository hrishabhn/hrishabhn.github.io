document.addEventListener('keydown', keyPress)

function keyPress(e) {
    // console.log(e)

    // tv modal
    if (tvDetail.elem.hasChildNodes()) {
        // info
        let infoElem
        for (const node of tvDetail.elem.childNodes[1].childNodes) if (node.classList.contains('info')) infoElem = node

        // play button
        let playElem
        for (const node of infoElem.childNodes) if (node.classList.contains('play')) playElem = node

        // app tray
        let appTray = infoElem.lastChild
        let apps = []
        var n = -1
        for (const node of appTray.childNodes) if (node.classList.contains('app')) apps.push(node)
        for (let i = 0; i < apps.length; i++) if (apps[i].classList.contains('active')) n = i

        if (e.key == 'Enter') {
            if (apps[n]) window.open(apps[n].href, '_blank')
            else playElem.onclick()
        } else if (e.key == 'ArrowRight') {
            e.preventDefault()
            // old active
            if (apps[n]) apps[n].classList.remove('active')
            // process index
            if (n < 0) n = 0
            else if (n < apps.length - 1) n++
            // new active
            apps[n].classList.add('active')
        } else if (e.key == 'ArrowLeft') {
            e.preventDefault()
            // old active
            if (apps[n]) apps[n].classList.remove('active')
            // process index
            n--
            // new active
            if (apps[n]) apps[n].classList.add('active')
        } else if (e.key == 'Escape') {
            e.preventDefault()
            tvDetail.hide()
        }
    } else {
        if (hotkeys[e.key]) hotkeys[e.key](e)
        // else if (topbar.hotkeys[e.key]) {
        //     if (document.activeElement !== spotlight.elem())
        //         if (!modal.elem.hasChildNodes())
        //             topbar.hotkeys[e.key]()
        // }
    }
}

const hotkeys = {
    '/': function (e) {
        if (document.activeElement !== spotlight.elem()) {
            e.preventDefault()
            spotlight.elem().focus()
        }
    },
    'Tab': function (e) {
        if (document.activeElement === spotlight.elem()) e.preventDefault()
    },
    'Escape': function (e) {
        e.preventDefault()
        if (document.activeElement === spotlight.elem()) spotlight.elem().blur()
        modal.remove()
    },
    'd': function (e) {
        if (e.metaKey) {
            e.preventDefault()
            dnd.toggle()
        }
    },
}