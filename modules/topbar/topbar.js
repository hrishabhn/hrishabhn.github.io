const topbar = {
    left: function () {
        const apps = [
            {
                name: 'Do Not Disturb',
                id: 'topbar-dnd',
                trigger: function () { dnd.toggle() },
                icon: SFSymbols.moon.fill,
                active: dnd.active(),
            },
            {
                name: 'Calendar',
                id: 'topbar-cal',
                trigger: function (e) { modal.topbar(calendar.topCard(), document.getElementById(this.id)) },
                icon: SFSymbols.calendar,
            },
            {
                name: 'Tasks & Ideas',
                id: 'topbar-tasks',
                trigger: function (e) { modal.topbar(tasks.topCard(), document.getElementById(this.id)) },
                icon: SFSymbols.list.bullet,
            },
            // {
            //     name: 'Idea',
            //     trigger: function (e) { modal.topbar(ideas.widget(), e) },
            //     icon: SFSymbols.lightbulb.fill,
            // },
            // {
            //     name: 'Morning Habits',
            //     trigger: function (e) { modal.topbar(widgets.routine.card('morning'), e) },
            //     icon: SFSymbols.sunrise.fill,
            // },
            // {
            //     name: 'Night Habits',
            //     trigger: function (e) { modal.topbar(widgets.routine.card('night'), e) },
            //     icon: SFSymbols.sunset.fill,
            // },
        ]

        let tray = topbar.app.tray(apps)
        tray.classList.add('side')
        tray.style.setProperty('justify-content', 'flex-start')
        tray.append(elems.grow())

        return tray

        // // weather
        // let temp = topbarItemElem()

        // let tempIcon = elems.icon('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M8.984375 1.9863281A1.0001 1.0001 0 0 0 8 3v1a1.0001 1.0001 0 1 0 2 0V3a1.0001 1.0001 0 0 0-1.015625-1.0136719zM3.3320312 4.3320312a1.0001 1.0001 0 0 0-.6953124 1.71875l.7070312.7070313A1.0001 1.0001 0 1 0 4.7578125 5.34375l-.7070313-.7070312a1.0001 1.0001 0 0 0-.71875-.3046876zm11.3046878.0019532a1.0001 1.0001 0 0 0-.6875.3027344l-.707031.7070312a1.0001 1.0001 0 0 0 .615234 1.71875 1.0001 1.0001 0 0 0 .101562.0019531 1.0001 1.0001 0 0 0 .697266-.3066406l.707031-.7070313a1.0001 1.0001 0 0 0-.726562-1.7167968zM9 7c-2.209 0-4 1.791-4 4 0 1.903 1.3313281 3.488578 3.1113281 3.892578 1.049-1.573 2.7644689-2.634937 4.7304689-2.835937C12.934797 11.718641 13 11.368 13 11c0-2.209-1.791-4-4-4zm-8 3a1.0001 1.0001 0 1 0 0 2h1a1.0001 1.0001 0 1 0 0-2H1zm19.5 1a6.5 6.5 0 0 0-5.607422 3.224609A4.5 4.5 0 0 0 13.5 14a4.5 4.5 0 0 0-4.4882812 4.259766A4.5 4.5 0 0 0 6 22.5a4.5 4.5 0 0 0 4.5 4.5h15a4.5 4.5 0 0 0 4.5-4.5 4.5 4.5 0 0 0-3.046875-4.253906A6.5 6.5 0 0 0 27 17.5a6.5 6.5 0 0 0-6.5-6.5zM4.03125 14.939453a1.0001 1.0001 0 0 0-.6875.302735l-.7070312.707031a1.0001 1.0001 0 1 0 1.4140624 1.414062l.7070313-.707031a1.0001 1.0001 0 0 0-.7265625-1.716797z"></path></svg>')
        // tempIcon.id = 'weather-icon'

        // let tempText = elems.p('14&#176')
        // tempText.id = 'weather-temp'

        // temp.append(tempIcon)
        // temp.append(elems.spacer(5))
        // temp.append(tempText)
    },
    middle: function () {
        const apps = [
            {
                name: 'OneDrive',
                link: 'https://purdue0-my.sharepoint.com',
                icon: SFSymbols.icloud.fill,
                distract: false,
            },
            {
                name: 'Notion',
                link: 'https://www.notion.so/Homepage-2-0-ebdb7991969f49ffa7be6906f7685945',
                icon: SFSymbols.note.text,
                distract: false,
            },
            {
                name: 'Task Dashboard',
                link: 'https://www.notion.so/hrishabhn/8c39216b144643269dcab62c039973e4?v=b4fecd9c96e94552b7f73d385ee18373',
                icon: SFSymbols.align.horizontal.left.fill,
                distract: false,
            },
            {
                name: 'Task Queue',
                link: 'https://www.notion.so/hrishabhn/8c39216b144643269dcab62c039973e4?v=a8d35c7618314c9ea1eb292c40aee699',
                icon: SFSymbols.checklist,
                distract: false,
            },
            {
                name: 'Inbox',
                link: 'https://www.notion.so/hrishabhn/28ae6e9e63c64e9eb92dc6877ee1cb01?v=e0bbba29b6be41a4a6ab2ab60ff1f8f1',
                icon: SFSymbols.trayAndArrow.down.fill,
                distract: false,
            },
            {
                name: 'Projects',
                link: 'https://www.notion.so/hrishabhn/9159029f31614382bf98b669e01fbba7?v=9a4f3769a43e468d8885738fcbe71809',
                icon: SFSymbols.arrow.triangle.circlepath,
                distract: false,
            },
            // {
            //     name: 'ClickUp',
            //     link: 'https://app.clickup.com/8450846/v/l/6-182481617-1',
            //     desc: 'To do list',
            //     icon: SFSymbols.checklist,
            //     distract: false,
            // },
        ]

        return topbar.app.tray(apps)
    },
    right: function () {
        let apps = [
            {
                name: focus.get().name,
                trigger: function (e) { context.show(focus.menuData(), e) },
                icon: focus.get().icon,
            },
        ]

        if (focus.get().id !== 'default') apps.unshift({
            name: 'End Focus',
            trigger: function (e) { focus.set(0, 0) },
            icon: SFSymbols.xmark,
        })




        // offline warning
        if (!navigator.onLine) apps.unshift({
            name: 'Not Connected',
            icon: SFSymbols.wifi,
            big: true,
            color: Colors.red,
        })

        // current task
        if (getCookie('current-task')) apps.unshift({
            name: getCookie('current-task'),
            trigger: function (e) {
                removeCookie('current-task')
                location.reload()
            },
            icon: SFSymbols.checklist,
            big: true,
            color: Colors.blue,
        })


        let tray = topbar.app.tray(apps)
        tray.classList.add('side')
        tray.style.setProperty('justify-content', 'flex-end')
        tray.prepend(elems.grow())

        return tray
    },
    app: {
        card: function (app) {
            let card = document.createElement('a')
            // id + class
            if (app.id) card.id = app.id
            card.classList = 'item'

            // if active
            if (app.active) card.classList.add('on')

            // onclick
            card.onclick = function (e) { openApp(app, e) }
            if (app.link) card.style.setProperty('cursor', 'pointer')

            // icon
            card.append(elems.icon(app.icon))

            // text big or hover
            if (app.big) {
                card.classList.add('big')
                let text = elems.p(app.name)
                text.classList = 'big-text'
                card.append(text)
            } else {
                card.append(appObject.hover(app))
            }

            // color or basic
            if (app.color) {
                let bg = elems.bg()
                bg = cardCol(bg, { color: app.color })
                card.classList.add('clickable-o')
                card.prepend(bg)
            } else card.classList.add('layer-hover')

            return card
        },
        tray: function (apps) {
            let tray = document.createElement('div')
            tray.classList = 'tray'
            for (const app of apps) tray.append(this.card(app))
            return tray
        },
    },
    elem: function () { return document.getElementById('topbar') },
    load: function () {
        topbar.elem().append(topbar.left())
        topbar.elem().append(topbar.middle())
        topbar.elem().append(topbar.right())
    },
    hotkeys: {
        // 'c': function () {
        //     const b = document.getElementById('topbar-cal')
        //     if (b) b.onclick()
        // },
        // 'd': function () {
        //     dnd.toggle()
        // },
        // 't': function () {
        //     const b = document.getElementById('topbar-tasks')
        //     if (b) {
        //         b.onclick()
        //         const lastinput = document.getElementById('task').lastChild.lastChild.lastChild
        //         lastinput.focus()
        //     }
        // },
    },
}