function todayCard() {
    let card = document.createElement('a')
    card.classList = 'today-card card-item clickable-o layer-1 card-shadow'
    card.href = 'ticktick://v1/show?smartlist=today'

    let title = titleElement('Today')
    title.classList.add('blue-fg')
    card.append(title)
    card.append(spacerElement(5))

    if (tasks_all[0]) {
        for (const task of tasks_all) {
            let item = itemElement()

            let check = document.createElement('div')
            check.classList = 'check layer-fg'

            let text = pElement(task)

            item.append(check)
            item.append(spacerElement(5))
            item.append(text)

            card.append(item)
        }
    } else {
        card.append(subtitleElement('No more tasks today'))
    }

    return card
}