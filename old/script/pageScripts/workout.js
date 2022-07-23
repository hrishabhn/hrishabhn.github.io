function workoutData() {
    const workoutDataRaw = [
        {
            name: 'Back Squat (x5)',
            style: 'red',
            complete: [
                false,
                false,
                false,
            ],
        },
        {
            name: 'Bench Press (x5)',
            style: 'blue',
            complete: [
                false,
                false,
                false,
            ],
        },
        {
            name: 'Barbell Row (x5) OR',
            style: 'green',
            complete: [
                false,
                false,
                false,
            ],
        },
        {
            name: 'Deadlift (x5) OR',
            style: 'purple',
            complete: [
                false,
            ],
        },
        {
            name: 'Standing Press (x5)',
            style: 'orange',
            complete: [
                false,
                false,
                false,
            ],
        },
        {
            name: 'Barbell Curl (x2)',
            style: 'cyan',
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
    card.classList = 'layer-1'

    let header = document.createElement('div')
    header.classList = 'header'

    let headerText = elems.p('Workout')

    let reset = document.createElement('a')
    reset.classList = 'blue-fg clickable-o'
    reset.textContent = 'Reset'
    reset.onclick = function () {
        removeCookie('workout')
        let oldCard = document.getElementById('workout-card')
        oldCard.parentElement.replaceChild(workoutCard(),oldCard)
    }

    header.append(headerText)
    header.append(elems.grow())
    header.append(reset)

    card.append(header)


    for (let i = 0; i < workoutData().length; i++) {
        card.append(workoutItem(i))
        card.append(elems.spacer(10))
    }
    card.lastElementChild.remove()

    return card


}

function workoutItem(i) {
    const data = workoutData()[i]
    let item = document.createElement('div')
    item.classList = 'item layer-2'
    item.id = `workout-${i}`

    let title = document.createElement('div')
    title.classList = 'title'

    let icon = document.createElement('a')
    icon.classList = 'icon clickable'
    icon.innerHTML = 'missing icon'
    icon.href = googleSearch(data.name)
    icon.target = '_blank'

    title.append(elems.p(data.name))
    title.append(elems.grow())
    title.append(icon)

    let tray = document.createElement('div')
    tray.classList = 'tray'
    for (let j = 0; j < data.complete.length; j++) {
        let button = document.createElement('a')
        button.textContent = j + 1
        button.classList = `${workoutData()[i].style} clickable-o`
        button.id = `workout-${i}-${j}`
        if (data.complete[j]) { button.classList.add('done') }
        button.onclick = function () { updateWorkout(i, j) }

        tray.append(button)
        tray.append(elems.spacer(5))
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