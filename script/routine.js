function routineLoad() {
    const time = timeOfDay()

    if ((time == 2) || (time == 3)) {
        var i = 0
    } else if ((time == 6) || (time == 7) || (time == 0)) {
        var i = 1
    }


    for (let i = 0; i < routineData.length; i++) {
        for (let j = 0; j < routineData[i].length; j++) {
            routineCookies(i, j)
        }
    }

    if (i) {
        return routineTray(i)
    } else {
        var spacer  = document.createElement('div')
        spacer.classList = 'spacer-content neg'
        return spacerContentNegElement()
    }
}

function routineCookies(i, j) {
    // console.log(i, j)
    if (!(getCookie(`routine-${i}-${j}`))) {
        setCookie(`routine-${i}-${j}`, 0, 1 / 3)
    }
}

const routineData = [
    {
        greeting: 'Good morning.',
        data: [
            {
                name: 'Brush & Shower',
                complete: parseInt(getCookie('routine-0-0')),
                color: 'blue',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M22 0v7.281A17.204 17.204 0 0 1 25 7c1.027 0 2.027.11 3 .281V0Zm3 9c-6.605 0-12.129 4.273-13.594 10h27.188C37.129 13.273 31.605 9 25 9ZM10 21c-1.652 0-3 1.348-3 3s1.348 3 3 3h30c1.652 0 3-1.348 3-3s-1.348-3-3-3Zm7 9a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Zm8 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Zm8 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Zm-20 8a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Zm8 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Zm8 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Zm8 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4ZM9 46a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Zm8 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Zm8 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Zm8 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Zm8 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Z"/></svg>',
                
            },
            {
                name: 'Breakfast',
                complete: parseInt(getCookie('routine-0-1')),
                color: 'green',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480.228 480.228"><path d="M239.63.113c-26.1.014-52.054 4.252-76.661 12.56-4.36 1.48-6.582 6.31-4.852 10.58 18.67 45.97-5.218 109.409-44.388 126.329a.203.203 0 0 0-.08.041c-19.81 8.49-52.642 6.78-81.622-10.78-4.11-2.49-9.47-.75-11.42 3.64-13.25 29.74-20.33 62.14-20.6 95.63-1.084 132.671 106.089 242.407 240.722 242 156.447-.468 271.86-148.841 231.242-301.925-.838-3.161-4.367-4.764-7.303-3.323-1.826.896-2.842 2.576-2.961 4.387-1.156 17.529-12.196 32.27-26.67 41.303-34.183 21.248-54.096-6.67-97.08 12.75-6.341 2.865-13.043 4.396-19.594 4.642-3.195.12-6.037 2.041-7.242 5.002a347.236 347.236 0 0 0-4.453 11.516c-5.635 15.342-21.257 17.239-33.4 14.37-5.328-1.257-10.326 3.115-9.766 8.56 1.107 10.756-.388 23.1-7.033 33.968-9.17 14.99-23.06 18.12-36.5 21.16-12.38 2.79-26.4 5.96-41.17 18.57-15.598 13.32-18.015 26.04-35.842 29.52-17.402 3.362-37.507-4.679-49.068-19.25-7.84-9.86-8.45-18.8-8.98-26.69-.46-6.72-.891-13.058-5.651-21.278-4.85-8.38-9.75-11.431-15.42-14.961-6.08-3.78-12.97-8.06-17.96-18.49-10.99-22.99-2.45-57.13 17.92-71.62 20.494-14.577 37.16-.722 52.43-12.17 5.97-4.47 7.69-9.3 9.86-15.42 2.47-6.97 5.54-15.63 15.54-23.01 17.73-13.08 49.68-15.83 65.89.08 18.664 18.295-.869 41.441 13.09 64.6 6.802 11.33 15.48 13.63 24.632 20.38 5.294 3.903 13.296 2.53 16.358-4.84 2.986-7.2 5.657-14.502 8.668-21.637.93-2.205.767-4.696-.323-6.828-5.414-10.587-7.109-22.902-4.406-35.045 4.586-20.606 1.386-33.25-4.35-49.52-4.5-12.77-10.11-28.66-2.99-48.12 5.696-15.498 17.514-29.222 33.635-34.173 2.574-.79 4.624-2.794 5.348-5.387 1.672-5.99 4.258-11.879 7.736-17.203 3.026-4.632.67-10.817-4.686-12.209a240.562 240.562 0 0 0-60.6-7.709zm-135.837.91C85.655.75 68.363 12.22 62.549 31.082c-23.478-11.533-51.627.535-59.352 25.531-3.35 10.84-2.268 22.33 3.022 32.37 23.152 43.836 74.917 57.21 101.119 45.93.01 0 .03-.01.04-.02 25.54-11.03 52.24-57.47 35.94-105.13-3.68-10.73-11.31-19.39-21.5-24.39-5.84-2.862-11.98-4.258-18.025-4.35zM412.527 8.94a58.007 58.007 0 0 0-16.298 2.264c-4.97 1.43-7.27 7.01-4.85 11.58 3.77 7.12 5.8 15.2 5.86 23.46.08 10.21-15.83 10.46-16-.12 0-35.11-47.262-46.58-64.702-14.36-2.37 4.38-.09 9.79 4.65 11.35 15.57 5.14 28.651 17.62 33.561 34.1 2.99 10.08-12.38 14.46-15.36 4.51-6.34-21.38-32.704-31.49-49.96-20.53-7.26 4.612-13.29 13.12-16.2 21.1-10.98 29.98 19.13 45.33 7.93 95.61-2.86 12.85 1.29 24.69 9.16 32.85a387.788 387.788 0 0 0-13.7 32.7 7.995 7.995 0 0 0 4.76 10.26c4.009 1.498 8.715-.517 10.26-4.76 20.353-55.43 52.656-104.457 98.18-145.68 4.524-4.057 5.528-4.85 6.37-5.6 3.4-2.91 8.54-2.44 11.39 1.02 2.76 3.37 2.31 8.31-1 11.15-34.394 29.519-61.506 64.475-81.295 102.438-2.036 3.907 1.959 8.295 5.977 6.49 47.325-21.252 68.27 5.016 95.328-11.808 26.02-16.29 23.81-44.73 3.8-58.73 0-.01-.01-.01-.01-.01-4.95-3.46-10.62-5.62-16.75-6.15-10.53-.88-9.2-16.82 1.28-15.95 17.23 1.45 32.08 11.77 40.22 25.88 2.54 4.39 8.38 5.4 12.23 2.1 26.06-22.3 9.48-62.64-22.39-60.87-2.39.09-4.59.539-5.03.599-10.17 1.99-13.61-13.589-3.39-15.629 7.93-1.59 16.27-1.34 24.2.95 4.95 1.43 9.94-1.99 10.3-7.13 2.493-34.718-25.805-62.916-58.52-63.084zM176.793 162.857c-8.953-.035-18.669 2.581-25.666 7.743-6.057 4.469-7.78 9.327-9.963 15.478-2.452 6.913-5.504 15.516-15.342 22.885-11.67 8.74-22.97 8.4-32.052 8.129-7.881-.237-14.1-.423-20.7 4.271-13.848 9.85-20.286 35.932-12.756 51.682 2.967 6.206 6.55 8.433 11.971 11.803 6.223 3.869 13.967 8.685 20.82 20.525 6.623 11.442 7.254 20.744 7.762 28.217.485 7.143.807 11.86 5.545 17.824 7.852 9.882 22.25 15.684 33.486 13.492 10.573-2.06 12.172-12.02 28.508-25.976 33.397-28.53 62.528-16.49 74.414-35.916 6.826-11.157 5.898-26 1.948-35.76-3.422-8.458-8.506-11.545-15.541-15.815-6.897-4.187-15.481-9.397-22.332-20.78-16.576-27.547.145-50.917-10.58-61.438-4.318-4.235-11.623-6.332-19.522-6.364zm-23.586 59.836c20.05.072 38.261 13.622 43.412 33.967 6.091 24.053-8.522 48.577-32.576 54.668-24.16 6.117-48.605-8.624-54.67-32.576-6.091-24.055 8.522-48.58 32.576-54.67a45.182 45.182 0 0 1 11.258-1.389zm-.252 16a29.196 29.196 0 0 0-7.076.9c-15.538 3.935-24.931 19.691-20.996 35.231 3.925 15.501 19.73 24.92 35.23 20.994 7.51-1.9 13.83-6.613 17.795-13.267 8.206-13.768 3.704-31.552-10.066-39.758-4.58-2.73-9.698-4.117-14.887-4.1zm241.813.057a22.095 22.095 0 0 1 15.064 6.46l22.15 22.151c9.38 9.381 8.466 24.951-2.056 32.953a24.129 24.129 0 0 0-9.336 16.47c-2.081 18.733-16.62 33.27-35.354 35.353-11.243 1.249-19.967 9.972-21.216 21.215-2.082 18.733-16.619 33.27-35.352 35.351-6.503.722-12.506 4.128-16.47 9.34-7.995 10.51-23.565 11.444-32.954 2.055l-22.148-22.15c-6.552-6.553-8.323-16.54-4.407-24.852 5.885-12.49 18.064-21.194 31.786-22.719 11.243-1.25 19.967-9.975 21.216-21.217 2.081-18.733 16.618-33.271 35.352-35.353 11.243-1.25 19.968-9.972 21.217-21.215 1.525-13.722 10.23-25.9 22.719-31.785a21.668 21.668 0 0 1 9.789-2.057zm-.338 15.99a5.727 5.727 0 0 0-2.631.54c-7.495 3.531-12.722 10.841-13.637 19.077-2.08 18.733-16.618 33.271-35.353 35.352-11.242 1.25-19.966 9.975-21.215 21.217-2.081 18.733-16.62 33.27-35.354 35.351-8.236.915-15.547 6.14-19.078 13.635-1.049 2.225-.548 4.927 1.246 6.72l22.15 22.151c2.495 2.494 6.74 2.417 8.905-.428 6.603-8.68 16.603-14.35 27.437-15.552 11.242-1.25 19.967-9.974 21.217-21.217 2.081-18.733 16.619-33.273 35.354-35.354 11.242-1.25 19.966-9.973 21.215-21.216 1.203-10.833 6.871-20.834 15.552-27.438 2.826-2.15 2.944-6.391.43-8.904l-22.15-22.149a6.07 6.07 0 0 0-4.088-1.785z"/></svg>',
            },
            {
                name: 'Look Over Agenda',
                complete: parseInt(getCookie('routine-0-2')),
                color: 'red',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="4 4 22 22"><path d="M24 4H6a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM7 23a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-1-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-5H6V6h18v4z"></path></svg>',
            },
        ],
    },
    {
        greeting: 'Good night.',
        data: [
            {
                name: 'Dinner',
                complete: parseInt(getCookie('routine-1-0')),
                color: 'green',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 46 46"><path d="M25 2C12.318 2 2 12.317 2 25s10.318 23 23 23 23-10.317 23-23S37.682 2 25 2zm-10.2 9h2.206a1 1 0 0 0-.006.1V19a1 1 0 1 0 2 0v-7.9a1 1 0 0 0-.004-.1H21.006a1 1 0 0 0-.006.1V19a1 1 0 1 0 2 0v-7.9a1 1 0 0 0-.004-.1H25.1s.9 4.7.9 8c0 5.7-4.3 4.8-4.3 7s1.3 4.2 1.3 9-1.7 6-3 6-3-.9-3-6 1.3-6.8 1.3-9-4.3-1.4-4.3-7c0-5 .8-8 .8-8zM30 11c5.1 2.5 6 7 6 9.6 0 4.4-3 6.5-3 9.4 0 1.7 1 3 1 6s-.5 5-2 5-2-1.2-2-6V11z"/></svg>',
            },
            {
                name: "Tomorrow's Agenda",
                complete: parseInt(getCookie('routine-1-1')),
                color: 'red',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="4 4 22 22"><path d="M24 4H6a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM7 23a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-1-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-5H6V6h18v4z"></path></svg>',
            },
        ],
    },
]

function routineTray(i) {
    var container = document.createElement('div')
    container.id = 'routine-container'
    container.classList = 'routine-container page-width layer-1 card-shadow '
    
    var title = document.createElement('a')
    title.classList = 'title'
    title.onclick = function() {routineAllToggle()}
    title.innerHTML = `
    <p>${routineData[i].greeting}</p>
    <div class="grow"></div>
    <div class="full-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.071 12 9.25 8.179a1.061 1.061 0 0 1 1.5-1.5l4.614 4.614a.999.999 0 0 1 0 1.414l-4.614 4.614a1.061 1.061 0 0 1-1.5-1.5L13.071 12z"></path></svg>
    </div>`
    container.append(title)
    container.append(spacerElement(15))

    // var tray = hscrollHuluElement()
    // var tray = document.createElement('div')
    // tray.classList = 'routine-tray'
    var tray = hscrollElement()
    tray.append(spacerElement(20))

    var product = 1

    for (let j = 0; j < routineData[i].data.length; j++) {
        tray.append(routineItem(i, j))
        tray.append(spacerElement(20))

        product = product * routineData[i].data[j].complete
    }

    if (product) {
        container.classList.add('all-done')
    }

    tray.append(growElement())
    container.append(tray)
    container.append(spacerElement(20))
    return container
}

function routineItem(i, j) {
    const data = routineData[i].data[j]
    // console.log(data)

    var item = document.createElement('div')
    item.classList = 'routine-card clickable'

    item.id = `routine-${i}-${j}`
    item.onclick = function () { routineSwitchToggle(i, j) }


    item.innerHTML = `
    <div class="icon layer-1 card-shadow ${data.color}">${data.icon}</div>
    <div class="spacer-x" style="--size: 10px;"></div>
    <p>${data.name}</p>
    <div class="check layer-fg card-shadow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="65.19 65.191 174.621 174.621" style="enable-background:new 0 0 305.002 305.002" xml:space="preserve"><path d="m218.473 93.97-90.546 90.547-41.398-41.398c-4.882-4.881-12.796-4.881-17.678 0-4.881 4.882-4.881 12.796 0 17.678l50.237 50.237a12.465 12.465 0 0 0 8.839 3.661c3.199 0 6.398-1.221 8.839-3.661l99.385-99.385c4.881-4.882 4.881-12.796 0-17.678-4.882-4.882-12.797-4.882-17.678-.001z"/></svg></div>`

    if (data.complete) {
        item.classList.add('done')
    } else {
        item.classList.add('undone')
    }
    return item
}

function routineSwitchToggle(i, j) {
    const element = document.getElementById(`routine-${i}-${j}`)
    const complete = parseInt(getCookie(`routine-${i}-${j}`))
    const audioPass = new Audio('audio/complete.m4a')
    // console.log(complete)

    if (complete) {
        setCookie(`routine-${i}-${j}`, 0, 1 / 6)
        element.classList.remove('done')
        element.classList.add('undone')
    } else {
        setCookie(`routine-${i}-${j}`, 1, 1 / 6)
        element.classList.add('done')
        element.classList.remove('undone')
        audioPass.play()
    }
}

function routineAllToggle() {
    const element = document.getElementById('routine-container')
    element.classList.toggle('all-done')
}