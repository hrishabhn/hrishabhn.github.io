function assistantContainer() {
    let container = document.createElement('div')
    container.classList = 'siri-container layer-1'
    container.append(assistantInputElement())
    container.append(assistantResultElement())
    return container
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
    
    console.log(resultElement)
    const results = globalSearchResults(query)
    console.log(results)
    
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