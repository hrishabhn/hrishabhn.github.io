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
]

function widgetbarTitleElement(text) {
    var title = document.createElement('div')
    title.classList = 'section-title'
    title.innerHTML = text
    return title
}