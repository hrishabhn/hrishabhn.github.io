const leftbar = {
    load: function () {
        const elem = document.getElementById('leftbar')

        const inputBox = document.createElement('div')
        inputBox.classList = 'input layer-0'

        const input = document.createElement('input')
        input.placeholder = 'Search'

        inputBox.append(elems.icon(SFSymbols.magnifyingglass))
        inputBox.append(input)

        // header and search
        elem.append(elems.title(getFocus().name))
        elem.append(elems.spacer(10))
        elem.append(inputBox)

        const controlData = [
            {
                name: 'DND',
                icon: SFSymbols.moon.fill,
            },
            {
                name: 'Calendar',
                icon: SFSymbols.calendar,
            },
            {
                name: 'Idea',
                icon: SFSymbols.lightbulb.fill,
            },
            {
                name: 'Routine',
                icon: SFSymbols.sunrise.fill,
            },
        ]


        let control = document.createElement('div')
        control.classList = 'control-centre'
        for (const data of controlData) {
            let toggle = document.createElement('div')

            let a = elems.a(data.icon, data.name)
            a.classList.add('clickable-o')
            a.firstChild.firstChild.classList.add('layer-0')
            a.onclick = function () {
                a.classList.toggle('active')
            }

            toggle.append(a)
            control.append(toggle)
        }

        // control centre
        elem.append(elems.subtitle('control centre'))
        elem.append(control)
        elem.append(elems.spacer(10))
        elem.append(elems.hline())

        // pages
        for (const focusTray of focusMenuData()) {
            let menuTray = document.createElement('div')
            menuTray.classList = 'menu-tray'
            menuTray.append(elems.subtitle('focus x'))


            for (const focus of focusTray) {
                let but = elems.a(focus.icon, focus.name)
                but.classList = 'clickable-o'
                if (focus.name == getFocus().name) but.classList.add('active')
                but.firstChild.classList.add('blue-fg')
                but.onclick = function (e) { openApp(focus, e) }

                menuTray.append(but)

                console.log(focus.name == getFocus().name)
            }
            menuTray.append(elems.hline())
            elem.append(menuTray)
        }
        if (elem.lastChild.lastChild.classList == 'hline') elem.lastChild.lastChild.remove()



        elem.append(elems.grow())
    },
    elems: {
        tray: function () {
            let tray = document.createElement('div')
            tray.classList = 'leftbar-tray'
            return tray
        },
    }
}