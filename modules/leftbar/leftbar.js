const leftbar = {
    load: function () {
        const elem = document.getElementById('leftbar')
        if (focus.get().style) {
            elem.style.setProperty('--col-dark', `var(--${focus.get().style}-dark)`)
            elem.style.setProperty('--col-light', `var(--${focus.get().style}-light)`)
        }

        // header and search
        elem.append(elems.title('Dashboard'))
        elem.append(spotlight.create())

        const controlData = [
            {
                name: 'DND',
                icon: SFSymbols.moon.fill,
                id: 'dnd',
                active: dnd.active(),
                trigger: function () { dnd.toggle() },
            },
            {
                name: 'Calendar',
                icon: SFSymbols.calendar,
                active: false,
            },
            {
                name: 'Idea',
                icon: SFSymbols.lightbulb.fill,
                active: false,
            },
            {
                name: 'Routine',
                icon: SFSymbols.arrow.triangle.circlepath,
                active: (routine.data()[timeOfDay()]) && (!(routine.data()[timeOfDay()].map(x => x.done).every(Boolean))),
            },
        ]


        let control = document.createElement('div')
        control.classList = 'control-centre'
        for (const data of controlData) {
            let toggle = document.createElement('div')

            let a = elems.a(data.icon, data.name)
            if (data.id) a.id = data.id
            a.classList.add('clickable-o')
            if (data.active) a.classList.add('active')
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

        // routine
        if (routine.data()[timeOfDay()])
            if (!(routine.data()[timeOfDay()].map(x => x.done).every(Boolean))) {
                elem.append(elems.subtitle('routine'))
                elem.append(routine.leftbar(timeOfDay()))
                elem.append(elems.hline())
            }


        // pages
        for (const focusTray of focus.data) {
            let menuTray = document.createElement('div')
            menuTray.classList = 'menu-tray'
            menuTray.append(elems.subtitle(focusTray.name))

            for (const item of focusTray.data) {
                let but = elems.a(item.icon, item.name)
                but.classList = 'clickable-o'
                if (item.name == focus.get().name) but.classList.add('active')
                but.onclick = function (e) { openApp(item, e) }

                menuTray.append(but)
            }
            elem.append(menuTray)
            elem.append(elems.hline())
        }
        elem.lastChild.remove()
        // if (elem.lastChild.lastChild.classList == 'hline') elem.lastChild.lastChild.remove()

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