function todayCard() {
    let card = widgetItemElement('a')
    card.classList.add('today-card', 'clickable-o')
    card.href = 'ticktick://v1/show?smartlist=today'

    let title = elems.title('Today')
    title.classList.add('blue-fg')
    card.append(title)
    card.append(elems.spacer(5))

    if (tasks_all[0]) {
        for (const task of tasks_all) {
            let item = itemElement()

            let check = document.createElement('div')
            check.classList = 'check layer-fg'

            let text = elems.p(task)

            item.append(check)
            item.append(elems.spacer(5))
            item.append(text)

            card.append(item)
        }
    } else {
        card.append(elems.subtitle('No more tasks today'))
    }

    return card
}