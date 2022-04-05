const leftbar = {
    load: function () {
        const elem = document.getElementById('leftbar')
        
        // header and search
        elem.append(elems.title('Dashboard'))
        elem.append(spotlight.create())

        const controlData = [
            {
                name: 'DND',
                icon: SFSymbols.moon.fill,
                id: 'dnd',
                trigger: function () { dnd.toggle() },
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
            if (data.id) a.id = data.id
            a.classList.add('clickable-o')
            a.firstChild.firstChild.classList.add('layer-0')
            a.onclick = function () {
                a.classList.toggle('active')
                if (data.trigger) data.trigger()
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
        for (const focusTray of focus.data) {
            let menuTray = document.createElement('div')
            menuTray.classList = 'menu-tray'
            menuTray.append(elems.subtitle(focusTray.name))

            for (const item of focusTray.data) {
                let but = elems.a(item.icon, item.name)
                but.classList = 'clickable-o'
                if (item.name == focus.get().name) but.classList.add('active')
                but.firstChild.classList.add('blue-fg')
                but.onclick = function (e) { openApp(item, e) }

                menuTray.append(but)
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