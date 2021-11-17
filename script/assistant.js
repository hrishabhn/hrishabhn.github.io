function assistantTop() {
    let container = document.createElement('div')
    container.classList = 'siri-top layer-1'


    let todo = document.createElement('a')
    todo.classList = 'basic item'
    todo.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M13 42c-.527344 0-1.039062-.210937-1.414062-.585937l-11-11c-.781251-.78125-.781251-2.046875 0-2.828125.78125-.78125 2.046875-.78125 2.828125 0l9.445312 9.445312L35.460938 9.726563c.703125-.855469 1.964843-.972657 2.8125-.265625.851562.703125.972656 1.964843.265625 2.8125l-24 29c-.355469.4375-.882813.699218-1.445313.722656C13.0625 42 13.03125 42 13 42Zm11.09375-.003906c.5625-.023438 1.085938-.285156 1.445313-.722656l24-29c.707031-.847657.585937-2.109375-.265625-2.8125-.847657-.707032-2.109375-.585938-2.8125.265625L23.859375 37.03125l-.445312-.445312c-.78125-.78125-2.046875-.78125-2.828125 0s-.78125 2.046875 0 2.828125l2 2c.375.375.886718.585937 1.414062.585937.03125 0 .0625 0 .09375-.003906Z"/></svg>'
    todo.href = 'https://app.clickup.com/8450846/v/l/6-48362200-1'

    let hwk = document.createElement('a')
    hwk.classList = 'basic item'
    hwk.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M28.232422 2c-.4525 0-.905.1725781-1.25.5175781l-.525391.5253907 2.5 2.5.525391-.5253907c.69-.69.69-1.81 0-2.5-.345-.345-.7975-.5175781-1.25-.5175781zM6 4c-1.105 0-2 .895-2 2v18c0 1.105.895 2 2 2h18c1.105 0 2-.895 2-2V11.328125l-2 2V24H6V10h10.671875l6-6H6zm19.042969.4570312L14.474609 15.025391 14 18l2.974609-.474609 10.56836-10.5683598-2.5-2.5z"/></svg>'
    hwk.href = 'https://app.clickup.com/8450846/v/l/4-20137584-1'
    
    let idea = document.createElement('a')
    idea.classList = 'basic item'
    idea.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="4 4 40 40"><path d="M16.415 31.906 16.88 34h14.24l.465-2.094c.315-1.417.988-2.752 2.041-3.751C36.395 25.53 38 21.864 38 18c0-7.718-6.283-13.975-14-13.978-7.717.003-14 6.26-14 13.978 0 3.864 1.605 7.53 4.373 10.155 1.054.999 1.727 2.334 2.042 3.751z"/><path d="m17.547 37 .946 4.259C18.849 42.861 20.27 44 21.91 44h4.18c1.64 0 3.061-1.139 3.417-2.741L30.453 37H17.547z"/></svg>'
    idea.href = 'https://www.notion.so/Inbox-90dd1c97df2d4bee8c605c27dfb5fb54'
    
    let pinned = document.createElement('div')
    pinned.classList = 'pinned'
    pinned.append(growElement())
    pinned.append(todo)
    pinned.append(spacerElement(2))
    pinned.append(hwk)
    pinned.append(spacerElement(2))
    pinned.append(idea)
    container.append(pinned)

    let logo = document.createElement('div')
    logo.classList = 'logo'
    logo.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 92"><path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/><path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/><path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/><path d="M225 3v65h-9.5V3h9.5z"/><path d="m262.02 54.48 7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98 19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/><path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/></svg>'
    container.append(logo)


    let header = document.createElement('div')
    header.classList = 'header'

    if (currentFocus().name != 'None') {
        let focus = document.createElement('p')
        focus.classList = 'layer-2 clickable'
        focus.classList.add(`${currentFocus().color}-fg`)
        focus.onclick = function() { focusMenuToggle() }
        focus.innerHTML = currentFocus().name
    
        header.append(focus)
    }
    
    container.append(header)

    // apps
    let tray = document.createElement('div')
    tray.classList = 'suggest-tray'

    tray.append(growElement())

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

    tray.append(growElement())

    container.append(tray)

    container.append(tray)
    
    return container
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