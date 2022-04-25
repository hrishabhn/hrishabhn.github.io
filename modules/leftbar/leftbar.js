const leftbar = {
    load: function () {
        const elem = document.getElementById('leftbar')

        // header and search
        elem.append(elems.title('Dashboard'))
        let searchTray = leftbar.elems.tray()
        searchTray.append(spotlight.create())
        elem.append(searchTray)

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
                active: routine.now() && !routine.done(),
                trigger: function() {
                    document.getElementById('routine').classList.toggle('hidden-always')
                }
            },
        ]

        let controlTray = leftbar.elems.tray()
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
        controlTray.append(elems.subtitle('control centre'))
        controlTray.append(control)
        controlTray.append(elems.spacer(10))
        elem.append(controlTray)

        // routine
        if (routine.now()) {
            let routineTray = leftbar.elems.tray()
            routineTray.id = 'routine'
            if (routine.done()) routineTray.classList.add('hidden-always')
            routineTray.append(elems.hline())
            routineTray.append(elems.subtitle('routine'))
            routineTray.append(routine.leftbar(timeOfDay()))
            elem.append(routineTray)
        }



        // pages
        for (const focusTray of focus.data) {
            let menuTray = leftbar.elems.tray()
            menuTray.classList.add('menu')
            menuTray.append(elems.hline())
            menuTray.append(elems.subtitle(focusTray.name))

            for (const item of focusTray.data) {
                let but = elems.a(item.icon, item.name)
                but.classList = 'clickable-o'
                if (item.name == focus.get().name) but.classList.add('active')
                but.onclick = function (e) { openApp(item, e) }

                menuTray.append(but)
            }
            elem.append(menuTray)
        }
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