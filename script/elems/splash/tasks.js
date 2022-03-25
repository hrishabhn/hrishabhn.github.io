
function tasksCard() {
    let tasksCard = widgetelems.item('div')
    tasksCard.id = 'tasks-card'

    let title = elems.title('Ideas')
    title.classList.add('yellow-fg')
    tasksCard.append(title)
    tasksCard.append(elems.spacer(5))

    if (getCookie('task-list')) {
        var taskData = JSON.parse(getCookie('task-list'))
    } else {
        var taskData = []
    }
    taskData.push('')


    for (const data of taskData) {
        let item = document.createElement('div')
        item.classList = 'item'

        let check = document.createElement('a')
        check.classList = 'clickable-o layer-fg'

        let input = document.createElement('input')
        input.value = data
        input.placeholder = 'New'
        input.onkeyup = function (e) {
            setTasks()

            if (e.key == 'Enter') {
                refreshTasks()
            }

            if (e.key == 'ArrowUp') {
                e.preventDefault()
                if (item.previousElementSibling) {
                    item.previousElementSibling.lastChild.focus()
                }
            }
            if (e.key == 'ArrowDown') {
                e.preventDefault()
                if (item.nextElementSibling) {
                    item.nextElementSibling.lastChild.focus()
                }
            }
        }

        item.append(check)
        item.append(elems.spacer(5))
        item.append(input)

        tasksCard.append(item)
    }

    return tasksCard
}

function setTasks() {
    let tasksCard = document.getElementById('tasks-card')
    
    let nodes = Array.from(tasksCard.childNodes)
    nodes.shift()
    nodes.shift()

    let data = []


    for (let i = 0; i < nodes.length; i++) {
        let value = nodes[i].lastChild.value

        if (value) {
            data.push(value)
        }
    }

    setCookie('task-list', JSON.stringify(data), 7)
}

function refreshTasks() {
    let old = document.getElementById('tasks-card')
    let newCard = tasksCard()
    old.parentNode.replaceChild(newCard, old)
    newCard.lastChild.lastChild.focus()
}