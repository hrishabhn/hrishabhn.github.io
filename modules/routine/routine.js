const routine = {
    data: {
        morning: [
            { name: 'Check Emails', },
            { name: 'Clear Notifications', },
            { name: 'Get Ready', },
        ],
        night: [
            { name: 'Accounting', },
            { name: 'Dry Clothes', },
            { name: 'Clean Up Room', },
            { name: 'Prepare for Tomorrow', },
            { name: 'Self Care', },
        ],
    },
    widget: function (key) {
        let card = widgetCardBase('div')
        card.classList.add('routine')
        card.append(elems.title('Habits'))

        for (const item of routine.data[key]) item.done = false

        // removeCookie('routine')
        if (!getCookie('routine')) setCookie('routine', JSON.stringify(routine.data), 1 / 2)

        let data = JSON.parse(getCookie('routine'))

        for (const task of data[key]) {
            let elem = document.createElement('a')
            elem.classList = 'task clickable-o'
            if (task.done) elem.classList.add('done')
            elem.onclick = function (key) {
                task.done = !task.done
                setCookie('routine', JSON.stringify(data), 1 / 2)
                if (task.done) elem.classList.add('done')
                else elem.classList.remove('done')
            }

            elem.append(elems.a(iconData.tick, null))
            elem.append(elems.p(task.name))
            elem.append(elems.grow())

            card.append(elem)
            card.append(elems.hlineList(30))
        }
        card.lastChild.remove()

        return card
    }
}