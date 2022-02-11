function workoutData() {
    const workoutDataRaw = [
        {
            name: 'Back Squat',
            complete: [
                false,
                false,
                false,
            ],
        },
        {
            name: 'Bench Press',
            complete: [
                false,
                false,
                false,
                false,
                false,
            ],
        },
        {
            name: 'Barbell Row',
            complete: [
                false,
                false,
            ],
        },
    ]

    if (!getCookie('workout')) {
        setCookie('workout', JSON.stringify(workoutDataRaw), 1)
    }

    return JSON.parse(getCookie('workout'))
}

function workoutCard() {
    let card = document.createElement('div')
    card.id = 'workout-card'
    card.classList = 'layer-0'

    for (let i = 0; i < workoutData().length; i++) {
        card.append(workoutItem(i))
        card.append(spacerElement(10))
    }
    card.lastElementChild.remove()

    return card

    
}

function workoutItem(i) {
    const data = workoutData()[i]
    let item = document.createElement('div')
    item.classList = 'item layer-1'
    item.id = `workout-${i}`

    let title = pElement(data.name)
    title.classList = 'title'

    let tray = document.createElement('div')
    tray.classList = 'tray'
    for (let j = 0; j < data.complete.length; j++) {
        let button = document.createElement('a')
        button.innerHTML = j + 1
        button.classList = 'blue clickable-o'
        button.id = `workout-${i}-${j}`
        if (data.complete[j]) { button.classList.add('done') }
        button.onclick = function () { updateWorkout(i, j) }

        tray.append(button)
        tray.append(spacerElement(5))
    }
    tray.lastChild.remove()

    item.append(title)
    item.append(tray)

    return item
}

function updateWorkout(i, j) {
    var data = JSON.parse(getCookie('workout'))
    data[i].complete[j] = !data[i].complete[j]
    setCookie('workout', JSON.stringify(data), 1)


    let button = document.getElementById(`workout-${i}-${j}`)
    button.classList.toggle('done')
}