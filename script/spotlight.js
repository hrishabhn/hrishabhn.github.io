function spotlightShow() {
    const container = document.getElementById('spotlight-container')
    container.classList.remove('hide')
    container.classList.add('show')

    document.getElementById('spotlight-search').onkeyup = function(e) { spotlightSearch(e) }
}
function spotlightHide() {
    const container = document.getElementById('spotlight-container')
    container.classList.add('hide')
    container.classList.remove('show')
}

// var spotlightPosition
// var totalResults

function spotlightSearch(e) {
    const input = document.getElementById('spotlight-search')
    const query = input.value
    const resultElement = document.getElementById('spotlight-result')
    

    // console.log(document.getElementById('result-0'))

    if (e) {
        // console.log(e.key)
        if (e.key == 'Enter') {
            // window.open(`http://www.google.com/search?q=${query}`,'_blank')
            const currentResult = document.getElementById(`result-0`)
            if (currentResult) {
                if (currentResult.onclick) {
                    currentResult.onclick()
                } else if (currentResult.href) {
                    window.open(currentResult.href,'_blank')
                }
            }

        // } else if (e.key == 'ArrowDown') {
            
        //     if (spotlightPosition > -1) {
        //         const oldFocus = document.getElementById(`result-${spotlightPosition}`)
        //         oldFocus.classList.remove('focus')
        //     }
        //     if (spotlightPosition < totalResults - 1) {
        //         spotlightPosition++
        //     }
        //     const newFocus = document.getElementById(`result-${spotlightPosition}`)
        //     newFocus.classList.add('focus')
        // } else if (e.key == 'ArrowUp') {
        //     const oldFocus = document.getElementById(`result-${spotlightPosition}`)
        //     oldFocus.classList.remove('focus')
        //     if (spotlightPosition < totalResults) {
        //         spotlightPosition--
        //     }
        //     if (spotlightPosition > -1 && spotlightPosition < totalResults) {
        //         const newFocus = document.getElementById(`result-${spotlightPosition}`)
        //         newFocus.classList.add('focus')
        //     }
        } else {
            // spotlightPosition = -1

            if (query) {
                resultElement.classList.remove('hidden-always')
            } else {
                resultElement.classList.add('hidden-always')
            }
        
            const results = globalSearchResults(query)
        
            removeAllChildNodes(resultElement)
            var n = 0
            for (let i = 0; i < results.length; i++) {
                if (results[i].results.length) {
                    if (n) {
                        resultElement.append(spotlightDividerElement(20))
                    }
        
                    resultElement.append(spotlightResultTitle(results[i]))
                    var subtray = document.createElement('div')
                    subtray.classList = 'subtray vstack fill-width'
        
                    for (let j = 0; ((j < results[i].results.length) && (j < 5)); j++) {
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
            // totalResults = n
        }
    }


}


function spotlightResultTitle(resultItem) {
    var title = document.createElement('p')
    title.classList = 'title'
    title.innerHTML = resultItem.name
    return title
}
function spotlightDividerElement(size) {
    var divider = document.createElement('div')
    divider.classList = 'divider layer-1-trans'
    return divider
}