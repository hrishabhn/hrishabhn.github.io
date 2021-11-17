function widgetbarRender() {
    const righbarElement = document.getElementById('widgetbar')

    for (const content of widgetbarContent) {
        righbarElement.append(content.render())
    }
}

function widgetbarToggle() {
    const righbarElement = document.getElementById('widgetbar')
    righbarElement.classList.toggle('hide')
    righbarElement.classList.toggle('show')
}

const widgetbarContent = [
    {
        render: function() {
            var close = document.createElement('a')
            close.classList = 'close only-mobile'
            close.onclick = function () { widgetbarToggle() }
            return close
        }
    },
    {
        render: function() {
            return secureElement(routineLoad())
        }
    },
    {
        render: function() {
            return secureElement(calendarTrayRender())
        }
    },
    {
        render: function() { return secureElement(widgetBarHomecardTray()) }
    },
]

function widgetbarTitleElement(text) {
    var title = document.createElement('div')
    title.classList = 'section-title'
    title.innerHTML = text
    return title
}

function widgetBarHomecardTray() {
    var tray = document.createElement('div')
    tray.classList = 'tray'
    tray.append(widgetbarTitleElement('Travel'))

    tray.append(homeCardTrip({type: 'trip', n: 0}))
    tray.append(spacerElement(10))
    tray.append(homeCardFlight({type: 'bus', n: 0}))
    tray.append(spacerElement(10))
    tray.append(homeCardFlight({type: 'flight', n: 0}))
    tray.append(spacerElement(10))
    tray.append(homeCardFlight({type: 'flight', n: 1}))

    return tray
}