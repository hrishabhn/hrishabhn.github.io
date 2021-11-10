function rightbarRender() {
    const righbarElement = document.getElementById('rightbar')

    for (const content of rightBarContent) {
        console.log(content.render())
        righbarElement.append(content.render())
    }
}

const rightBarContent = [
    {
        render: function() {
            return rightbarTitleElement('Up next')
        }
    },
    {
        type: 'calendar',
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