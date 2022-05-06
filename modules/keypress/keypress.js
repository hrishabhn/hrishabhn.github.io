document.addEventListener('keydown', keyPress)

function keyPress(e) {
    // console.log(e)

    // tv modal
    if (tvModal.hasChildNodes()) {
        // info
        let infoElem
        for (const node of tvModal.childNodes[1].childNodes) if (node.classList.contains('info')) infoElem = node

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
            else if (playElem.href) window.open(playElem.href, '_blank ')
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
            hideTVDetail()
        }
    } else {
        if (e.key == '/') {
            if (!(document.activeElement == spotlight.elem())) {
                e.preventDefault()
                spotlight.elem().focus()
            }
        } else if (e.key == 'Tab') {
            if (document.activeElement == spotlight.elem()) {
                e.preventDefault()
            }
        } else if (e.key == 'Escape') {
            e.preventDefault()
        } else if (e.key == 'Enter') {
        }
    }
}