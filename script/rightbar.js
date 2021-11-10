function rightbarRender() {
    const righbarElement = document.getElementById('rightbar')

    for (const content of rightBarContent) {
        righbarElement.append(content.render())
    }
}

function rightBarToggle() {
    const righbarElement = document.getElementById('rightbar')
    righbarElement.classList.toggle('hide')
    righbarElement.classList.toggle('show')
}

const rightBarContent = [
    {
        render: function() {
            var close = document.createElement('a')
            close.classList = 'close only-mobile'
            close.onclick = function () { rightBarToggle() }
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

function rightbarTitleElement(text) {
    var title = document.createElement('div')
    title.classList = 'section-title'
    title.innerHTML = text
    return title
}