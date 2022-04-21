const tasks = {
    data: tasks_all,
    load: function () {
        let data = {}
        if (getCookie('task-status')) {
            const old = JSON.parse(getCookie('task-status'))
            for (const key in old) data[key] = old[key]
        }
        for (const task of tasks.data) if (!data[task]) data[task] = false
        setCookie('task-status', JSON.stringify(data), 1)
    },
    update: function (task) {
        const data = JSON.parse(getCookie('task-status'))
        data[task] = !data[task]
        setCookie('task-status', JSON.stringify(data), 1)
    },
    cookie: function () { return JSON.parse(getCookie('task-status')) },
    widget: function () {
        tasks.load()
        let card = widgetCardBase('div')
        card.id = 'tasks'
        card.classList.add('list')
        card.append(elems.title('Tasks'))
        card.append(elems.spacer(5))

        let icon = elems.icon(SFSymbols.checklist)
        icon.classList = 'top-icon'
        card.append(icon)

        if (tasks.data.length) {
            for (const task of tasks.data) {
                let elem = document.createElement('a')
                elem.classList = 'task clickable-o'
                if (tasks.cookie()[task]) elem.classList.add('done')
                elem.onclick = function () {
                    elem.classList.toggle('done')
                    tasks.update(task)
                }

                elem.append(elems.a(iconData.tick, null))
                elem.append(elems.p(task))
                elem.append(elems.grow())

                card.append(elem)
                card.append(elems.hlineList(20))
            }
            card.lastChild.remove()
        } else
            card.append(elems.subtitle('No more tasks today'))

        return card
    },
}