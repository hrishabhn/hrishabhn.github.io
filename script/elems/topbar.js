function topbarLoad() {
    const topbarElem = document.getElementById('topbar')
    topbarElem.append(topbar.left())
    topbarElem.append(topbar.middle())
    // topbarElem.append(topbarRight())
    topbarElem.append(topbar.right())
}

const topbar = {
    left: function () {
        const apps = [
            {
                name: 'Refresh',
                link: 'shortcuts://run-shortcut?name=Refresh%20Dashboard',
                icon: SFSymbols.arrow.triangle.circlepath,
            },
            {
                name: 'Do Not Disturb',
                id: 'dnd',
                trigger: function () { toggleDND() },
                icon: SFSymbols.moon.fill,
            },
            {
                name: 'Calendar',
                trigger: function (e) { modal.topbar(widgetCal(), e) },
                icon: SFSymbols.calendar,
            },
            {
                name: 'Idea',
                trigger: function (e) { modal.topbar(widgetIdeas(), e) },
                icon: SFSymbols.lightbulb.fill,
            },
            {
                name: 'Morning Habits',
                trigger: function (e) { modal.topbar(widgets.routine.card('morning'), e) },
                icon: SFSymbols.sunrise.fill,
            },
            {
                name: 'Night Habits',
                trigger: function (e) { modal.topbar(widgets.routine.card('night'), e) },
                icon: SFSymbols.sunset.fill,
            },

        ]

        // console.log(SFSymbols.sunrise)

        let tray = appCard.topbar.tray(apps)
        tray.classList = 'side'
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
                name: 'Spark',
                link: 'readdle-spark://',
                desc: 'Email',
                icon: SFSymbols.envelope.fill,
                style: 'blue',
                distract: false,
            },
            {
                name: 'OneDrive',
                link: 'https://purdue0-my.sharepoint.com',
                desc: 'Files',
                icon: SFSymbols.folder.fill,
                accent: colorData['onedrive'],
                distract: false,

            },
            {
                name: 'Notion',
                link: 'https://www.notion.so/Homepage-2-0-ebdb7991969f49ffa7be6906f7685945',
                desc: 'Notes',
                icon: SFSymbols.note.text,
                style: 'secondary',
                distract: false,
            },
            {
                name: 'TickTick',
                link: 'ticktick://',
                desc: 'To do list',
                icon: SFSymbols.checklist,
                style: 'blue',
                distract: false,
            },
        ]

        let tray = appCard.topbar.tray(apps)
        tray.classList = 'quick-apps'

        return tray
    },
    right: function () {
        const focus = getFocus()
        const app = {
            name: focus.name,
            trigger: function (e) { context.show(focusMenuData(), e) },
            icon: focus.icon ?? SFSymbols.creditcard.fill,
        }

        let tray = document.createElement('div')
        tray.classList = 'side'
        tray.append(elems.grow())
        tray.append(appCard.topbar.card(app))

        return tray
    }
}

// function topbarRight() {
//     // focus
//     let focus = getFocus()
//     let focusAppElem = appCardSmall({
//         thumb: focus.thumb,
//         style: focus.style,
//     })

    

//     focusAppElem.onclick = function (e) {
//         context.show(focusMenuData(), e)
//     }

//     let right = document.createElement('div')
//     right.classList = 'side'

//     right.append(focusAppElem)
//     right.prepend(elems.grow())

//     return right
// }

function topbarItemElem() {
    let item = document.createElement('a')
    item.classList = 'item layer-hover'

    return item
}