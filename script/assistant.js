function assistantTop() {
    let container = document.createElement('div')
    container.classList = 'siri-top layer-1'
    // container.innerHTML = 'nice'

    let header = document.createElement('div')
    header.classList = 'header'
    
    let title1 = document.createElement('p1')
    title1.innerHTML = 'Your focus:'
    
    let title2 = document.createElement('p2')
    title2.innerHTML = currentFocus().name

    header.append(title1)
    header.append(title2)
    container.append(header)

    // apps
    let tray = document.createElement('div')
    tray.classList = 'suggest-tray'

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