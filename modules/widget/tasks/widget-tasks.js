function widgetTaskItems() {
    let nodes = [spacerElement(5)]

    if (tasks_all[0]) {
        for (const task of tasks_all) {
            let item = itemElement()

            let check = document.createElement('div')
            check.classList = 'check layer-fg'

            let text = pElement(task)

            item.append(check)
            item.append(spacerElement(5))
            item.append(text)

            nodes.push(item)
        }
    } else {
        nodes.push(subtitleElement('No more tasks today'))
    }

    return nodes
}