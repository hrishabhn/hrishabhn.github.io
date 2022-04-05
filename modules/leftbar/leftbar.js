const leftbar = {
    load: function () {
        const elem = document.getElementById('leftbar')
        elem.append(elems.title(getFocus().name))

        let menuTray = document.createElement('div')
        menuTray.classList = 'menu-tray'

        for (const focusTray of focusMenuData()) {
            for (const focus of focusTray) {
                let but = elems.a(focus.icon, focus.name)
                but.classList = 'clickable-o'
                if (focus.name == getFocus().name) but.classList.add('active')
                but.firstChild.classList.add('blue-fg')
                but.onclick = function (e) { openApp(focus, e) }
                
                menuTray.append(but)
                
                console.log(focus.name == getFocus().name)
            }
            menuTray.append(elems.spacer(40))
        }




        elem.append(menuTray)
        elem.append(elems.grow())
    },
}