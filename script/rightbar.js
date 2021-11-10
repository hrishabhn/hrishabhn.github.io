function rightbarRender() {
    const righbarElement = document.getElementById('rightbar')

    for (const content of rightBarContent) {
        righbarElement.append(content.render())
    }
}

const rightBarContent = [
    // {
    //     render: function() {
    //         return routineTrayElement(0)
    //     }
    // },
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