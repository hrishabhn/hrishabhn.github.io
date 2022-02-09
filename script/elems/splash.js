let splash = document.getElementById('splash')

function splashLoad() {
    let focus = document.createElement('div')
    focus.classList = 'focus limit'



    let taskCont = document.createElement('div')
    taskCont.classList = 'task-cont'

    let taskInput = document.createElement('input')
    taskInput.type = 'text'
    taskInput.placeholder = 'Current Task'
    taskInput.id = 'task'
    taskInput.onkeyup = function (e) { setCookie('task', taskInput.value, 1) }
    if (getCookie('task')) {
        taskInput.value = getCookie('task')
    } else {
        taskInput.value = getFocus().name
    }
    
    let taskClear = document.createElement('a')
    taskClear.classList = 'task-clear clickable-o'
    taskClear.innerHTML = 'Clear'
    taskClear.onclick = function() {
        taskInput.value = ''
        taskInput.focus()
        // taskInput.value = getFocus().name
        removeCookie('task')
    }
    
    taskCont.append(taskInput)
    taskCont.append(taskClear)
    
    
    let date = document.createElement('p')
    date.innerHTML = `${processDay(processDate(new Date).day,'short')}, ${new Date().getDate()} ${processMonth(processDate(new Date).month,'short')}`
    
    focus.append(taskCont)
    focus.append(date)

    let appTray = document.createElement('div')
    appTray.classList = 'focus-apps'

    appTray.append(growElement())
    for (const app of getFocus().apps) {
        appTray.append(appCard(app))
        appTray.append(spacerElement(10))
    }
    appTray.append(growElement())

    // appTray.append(appCard(appData['main'][0]))
    // appTray.append(appCard(appData['main'][1]))
    // appTray.append(appCard(appData['main'][2]))

    splash.append(growElement())
    splash.append(spacerElement(50))
    splash.append(focus)
    splash.append(spacerElement(20))
    splash.append(createSpotlight())
    splash.append(spacerElement(50))
    splash.append(growElement())
    splash.append(appTray)
}

function createSpotlight() {
    let tray = document.createElement('div')
    tray.classList = 'spotlight-tray limit'



    let container = document.createElement('div')
    container.classList = 'spotlight-container'


    let input = document.createElement('input')
    input.type = 'text'
    input.placeholder = 'Search'
    input.id = 'spotlight'
    input.onkeyup = function (e) { spotlightRun(e) }

    container.append(iconElement(iconData['search']))
    container.append(input)

    let result = document.createElement('div')
    result.id = 'results'


    tray.append(container)
    tray.append(result)

    return tray
}

function pElement(text) {
    let elem = document.createElement('p')
    elem.innerHTML = text
    return elem
}