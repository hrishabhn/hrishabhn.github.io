function assistantFull() {
    let full = document.createElement('div')
    full.classList = 'siri-full'

    full.append(assistantTop())
    // full.append(spacerElement(10))
    full.append(assistantPinned())
    full.append(spacerElement(10))
    full.append(assistantContainer())

    return full
}

function assistantTop() {
    let container = document.createElement('div')
    container.classList = 'siri-top'

    // let logo = document.createElement('div')
    // logo.classList = 'logo'
    // logo.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 92"><path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/><path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/><path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/><path d="M225 3v65h-9.5V3h9.5z"/><path d="m262.02 54.48 7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98 19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/><path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/></svg>'
    // container.append(logo)

    // apps
    let tray = document.createElement('div')
    tray.classList = 'suggest-tray'

    // tray.append(growElement())

    for (let i = 0; i < currentFocus().apps.length; i++) {
        let appCont = document.createElement('div')
        appCont.classList = 'vstack'
    
        let appIcon = document.createElement('a')
        appIcon.classList = `icon ${currentFocus().apps[i].background} clickable`
        appIcon.href = currentFocus().apps[i].link
        appIcon.innerHTML = currentFocus().apps[i].icon
        appCont.append(appIcon)
    
        let appTextbox = document.createElement('div')
        appTextbox.style.setProperty('width','100%')

        let appText = document.createElement('p')
        appText.classList = 'app-text'
        appText.innerHTML = currentFocus().apps[i].name
        appTextbox.append(appText)
        appCont.append(appTextbox)
    
        tray.append(appCont)

        if (i < currentFocus().apps.length - 1) {
            tray.append(growElement())
        }
    }

    // tray.append(growElement())

    container.append(tray)

    container.append(tray)
    
    return container
}

function assistantPinned() {
    let pinned = document.createElement('div')
    pinned.classList = 'siri-pinned layer-1'


    var focus = document.createElement('a')

    if (currentFocus().name != 'None') {
        focus.classList = 'focus item'
        // focus.classList.add(`${currentFocus().color}-fg`)
        focus.onclick = function() { focusMenuToggle() }

        let focusIcon = document.createElement('div')
        focusIcon.classList = 'icon'
        focusIcon.innerHTML = currentFocus().icon
        focus.append(focusIcon)
        
        focus.append(spacerElement(8))

        let focusText = document.createElement('p')
        focusText.innerHTML = currentFocus().name
        focus.append(focusText)
    }

    let todo = document.createElement('a')
    todo.classList = 'basic item'
    todo.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 405.272 405.272"><path d="M393.401 124.425 179.603 338.208c-15.832 15.835-41.514 15.835-57.361 0L11.878 227.836c-15.838-15.835-15.838-41.52 0-57.358 15.841-15.841 41.521-15.841 57.355-.006l81.698 81.699L336.037 67.064c15.841-15.841 41.523-15.829 57.358 0 15.835 15.838 15.835 41.514.006 57.361z"/></svg>'
    todo.href = 'https://app.clickup.com/8450846/v/l/6-48362200-1'

    let hwk = document.createElement('a')
    hwk.classList = 'basic item'
    hwk.innerHTML = '<svg viewBox="0 -40 448 448" xmlns="http://www.w3.org/2000/svg"><path d="m408 319.929688v-319.929688l-12.207031 1.023438c-48.957031 4.046874-96.976563 15.75-142.304688 34.6875l-21.488281 8.921874v318.664063l15.648438-6.503906c46.90625-19.515625 96.570312-31.589844 147.199218-35.792969zm0 0"></path><path d="m448 47.296875h-24v280c.015625 4.171875-3.183594 7.65625-7.34375 8l-20.488281 1.679687c-5.914063.488282-11.8125 1.09375-17.6875 1.816407-1.90625.230469-3.800781.535156-5.695313.800781-3.960937.527344-7.914062 1.0625-11.855468 1.6875-2.296876.367188-4.578126.796875-6.867188 1.199219-3.527344.617187-7.0625 1.230469-10.582031 1.925781-2.402344.480469-4.800781 1.019531-7.25 1.539062-3.351563.710938-6.703125 1.4375-10.03125 2.230469-2.496094.59375-4.984375 1.222657-7.464844 1.855469-3.238281.800781-6.460937 1.664062-9.679687 2.5625-2.503907.6875-5.007813 1.414062-7.503907 2.148438-3.199219.945312-6.351562 1.90625-9.511719 2.914062-2.472656.800781-4.949218 1.601562-7.414062 2.398438-3.164062 1.066406-6.3125 2.167968-9.449219 3.304687-2.398437.871094-4.800781 1.746094-7.253906 2.664063-1.097656.417968-2.1875.863281-3.28125 1.289062h183.359375zm0 0"></path><path d="m52.207031 1.023438-12.207031-1.023438v319.953125l14.199219 1.207031c50.597656 4.230469 100.21875 16.378906 147.046875 36l14.753906 6.136719v-318.664063l-21.464844-8.914062c-45.332031-18.941406-93.359375-30.648438-142.328125-34.695312zm0 0"></path><path d="m0 47.296875v320h183.488281c-.984375-.386719-1.96875-.800781-2.960937-1.167969-2.289063-.871094-4.597656-1.703125-6.902344-2.542968-3.25-1.179688-6.496094-2.328126-9.769531-3.425782-2.367188-.800781-4.742188-1.578125-7.121094-2.335937-3.246094-1.066407-6.503906-2.070313-9.765625-3.007813-2.402344-.703125-4.800781-1.410156-7.199219-2.082031-3.289062-.910156-6.585937-1.773437-9.890625-2.621094-2.398437-.617187-4.800781-1.234375-7.253906-1.808593-3.351562-.800782-6.722656-1.535157-10.089844-2.257813-2.398437-.519531-4.800781-1.046875-7.199218-1.527344-3.488282-.6875-6.992188-1.304687-10.496094-1.917969-2.296875-.402343-4.59375-.800781-6.894532-1.210937-3.867187-.613281-7.746093-1.132813-11.625-1.65625-1.960937-.261719-3.90625-.574219-5.863281-.796875-5.867187-.710938-11.734375-1.316406-17.601562-1.816406l-21.535157-1.824219c-4.152343-.355469-7.335937-3.835937-7.320312-8v-280zm0 0"></path></svg>'
    hwk.href = 'https://app.clickup.com/8450846/v/l/4-20137584-1'
    
    let idea = document.createElement('a')
    idea.classList = 'basic item'
    idea.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="4 4 40 40"><path d="M16.415 31.906 16.88 34h14.24l.465-2.094c.315-1.417.988-2.752 2.041-3.751C36.395 25.53 38 21.864 38 18c0-7.718-6.283-13.975-14-13.978-7.717.003-14 6.26-14 13.978 0 3.864 1.605 7.53 4.373 10.155 1.054.999 1.727 2.334 2.042 3.751z"/><path d="m17.547 37 .946 4.259C18.849 42.861 20.27 44 21.91 44h4.18c1.64 0 3.061-1.139 3.417-2.741L30.453 37H17.547z"/></svg>'
    idea.href = 'https://www.notion.so/Inbox-90dd1c97df2d4bee8c605c27dfb5fb54'

    pinned.append(focus)
    pinned.append(growElement())
    pinned.append(todo)
    pinned.append(spacerElement(2))
    pinned.append(hwk)
    pinned.append(spacerElement(2))
    pinned.append(idea)

    return pinned
}

function assistantContainer() {
    let container = document.createElement('div')
    container.classList = 'siri-container layer-1'
    container.append(assistantInputElement())
    container.append(assistantResultElement())
    return container
}

function assistantInputClear() {
    var input = document.getElementById('siri-search')
    console.log(input)
    input.value = ''
    input.focus()
    siriSearch()
}

function assistantInputElement() {
    var container = document.createElement('div')
    container.classList = 'siri-input-container'
    container.innerHTML = `
        <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966"><path d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"></path></svg></div>
        <div class="spacer-x" style="--size: 8px;"></div>`

    var input = document.createElement('input')
    input.id = 'siri-search'
    input.autocomplete = 'off'
    input.autocorrect = false
    input.autocapitalize = 'off'
    input.spellcheck = false
    input.onkeyup = function(e) { siriSearch(e) }
    container.append(input)

    var clear = document.createElement('div')
    clear.classList = 'clear layer-1-trans clickable'
    clear.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m14.8 16.2-7-7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l7 7c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0z"></path><path d="m7.8 14.8 7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4z"></path></svg>'
    clear.onclick = function() { assistantInputClear() }
    container.append(clear)

    return container
}

function assistantResultElement() {
    var container = document.createElement('div')
    container.id = 'siri-result'
    return container
}

function siriSearch(e) {
    const input = document.getElementById('siri-search')
    const query = input.value
    const resultElement = document.getElementById('siri-result')
    
    // console.log(resultElement)
    const results = globalSearchResults(query)
    // console.log(results)
    
    // console.log(e)

    if (e.key == 'Enter') {
        const currentResult = document.getElementById(`result-0`)
        if (currentResult) {
            if (currentResult.onclick) {
                currentResult.onclick()
            } else if (currentResult.href) {
                window.open(currentResult.href,'_blank')
            }
        }
    } else {
        // return elements
        removeAllChildNodes(resultElement)
    
        if (query) {
            const results = globalSearchResults(query)
        
            var n = 0
            for (let i = 0; i < results.length; i++) {
                if (results[i].results.length) {
                    // if (n) {
                    resultElement.append(spotlightDividerElement(20))
                    // }
        
                    resultElement.append(spotlightResultTitle(results[i]))
                    var subtray = document.createElement('div')
                    subtray.classList = 'subtray vstack fill-width'
        
                    for (let j = 0; ((j < results[i].results.length) && (j < 10)); j++) {
                        var result = results[i].results[j]
                        result.id = `result-${n}`
        
                        subtray.append(hlineElement())
                        subtray.append(result)
                        n++
        
                        // if ((j < results[i].results.length - 1) && (j < 4)) {
                        //     subtray.append(hlineElement())
                        // }
                    }
                    resultElement.append(subtray)
                }
            }
        }
    }
}



function assistantExtraElement() {
    var container = document.createElement('div')
    container.id = 'siri-extra'
    container.onclick = function() { assistantExtraShow(oldPage,this) }



    var extra = document.createElement('a')
    // extra.classList = 'clickable'
    extra.innerHTML = '<svg viewBox="0 0 515.555 515.555" xmlns="http://www.w3.org/2000/svg"><path d="M496.679 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path><path d="M303.347 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path><path d="M110.014 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path></svg>'
    container.append(extra)

    return container

}

function assistantExtraShow() {
    const page = document.getElementById(`page-${oldPage}`)
    const extra = document.getElementById('siri-extra')
    // console.log(page.scrollTop)
    console.log(extra.offsetTop - 60)

    page.scrollTop = extra.offsetTop - 60

}

const siriExtraData = [
    { render: function() { return siriExtraWidgetTV(0,0) } },
    { render: function() { return siriExtraWidgetTV(0,1) } },
    { render: function() { return siriExtraWidgetWeather() } },
    { render: function() { return siriExtraWidgetTV(0,2) } },
    { render: function() { return siriExtraWidgetTV(1,5) } },
    // { render: function() { return siriExtraWidgetTV(0,2) } },
]

function siriExtraTray() {
    let tray = document.createElement('div')
    tray.classList = 'siri-extra-tray'

    for (let i = 0; i < siriExtraData.length; i++) {
        tray.append(siriExtraData[i].render())

        if (i < siriExtraData.length - 1) {
            tray.append(spacerElement(10))
        }
    }

    return tray
}

function siriExtraWidgetBase() {
    let widget = document.createElement('a')
    widget.classList = 'siri-extra-widget layer-1 clickable'
    // widget.append(homeCardData[0][1].render())
    return widget
}
function siriExtraWidgetBg(hex) {
    let elem = document.createElement('div')
    elem.classList = 'bg'
    elem.style.setProperty('background-color',`#${hex}`)
    return elem
}
function siriExtraWidgetInfo(text,subtext) {
    let elem = document.createElement('div')
    elem.classList = 'info'

    let textElem = document.createElement('p')
    textElem.classList = 'text'
    textElem.innerHTML = text

    let subtextElem = document.createElement('p')
    subtextElem.classList = 'subtext'
    subtextElem.innerHTML = subtext

    elem.append(textElem)
    elem.append(spacerElement(2))
    elem.append(subtextElem)

    return elem
}

function siriExtraWidgetTV(a,b) {
    const movie = movieData[a][b]
    // console.log(movie)

    let widget = siriExtraWidgetBase()
    widget.classList.add('tv')
    widget.append(siriExtraWidgetBg(movie.style.color))

    let poster = document.createElement('div')
    poster.classList = 'poster'
    poster.style.setProperty('background-image',`url('media-image/TV/background/${movie.id}.${movie.style.posterType}')`)
    widget.append(poster)

    let grow = growElement()
    grow.classList.add('fill-width')
    // grow.append(siriExtraWidgetInfo(movie.name,movie.info.location))
    widget.append(grow)

    return widget
}
function siriExtraWidgetWeather() {
    let widget = siriExtraWidgetBase()
    widget.classList.add('weather')

    let city = document.createElement('p')
    city.classList = 'city'
    city.innerHTML = 'Hong Kong'
    widget.append(city)

    let temp = document.createElement('p')
    temp.classList = 'temp'
    temp.innerHTML = '26&#0176'
    widget.append(temp)

    widget.append(growElement())

    let icon = document.createElement('div')
    icon.classList = 'icon yellow-fg'
    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 26 26"><circle cx="15" cy="15" r="6"/><path d="M15 6a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zm0 22a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zM5 16H3a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zm22 0h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zM6.51 24.49a1 1 0 0 1-.7-.3 1 1 0 0 1 0-1.41l1.41-1.42a1 1 0 0 1 1.42 1.42l-1.42 1.41a1 1 0 0 1-.71.3zM22.07 8.93a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42l1.42-1.41a1 1 0 0 1 1.41 1.41l-1.41 1.42a1 1 0 0 1-.71.29zm1.42 15.56a1 1 0 0 1-.71-.3l-1.42-1.41a1 1 0 0 1 1.42-1.42l1.41 1.42a1 1 0 0 1 0 1.41 1 1 0 0 1-.7.3zM7.93 8.93a1 1 0 0 1-.71-.29L5.81 7.22a1 1 0 0 1 1.41-1.41l1.42 1.41a1 1 0 0 1 0 1.42 1 1 0 0 1-.71.29z"/></svg>'
    widget.append(icon)

    let condition = document.createElement('p')
    condition.classList = 'condition'
    condition.innerHTML = 'Mostly Sunny'
    widget.append(condition)

    let hilo = document.createElement('p')
    hilo.classList = 'hilo'
    hilo.innerHTML = 'H: 26c L: 19'
    widget.append(hilo)

    // let poster = document.createElement('div')
    // poster.classList = 'poster'
    // poster.style.setProperty('background-image',`url('media-image/TV/background/${movie.id}.${movie.style.posterType}')`)
    // widget.append(poster)

    // let grow = growElement()
    // grow.classList.add('fill-width')
    // // grow.append(siriExtraWidgetInfo(movie.name,movie.info.location))
    // widget.append(grow)

    return widget
}