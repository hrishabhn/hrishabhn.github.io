function spotlightShow() {
    const container = document.getElementById('spotlight-container')
    container.classList.remove('hide')
    container.classList.add('show')
    document.getElementById('spotlight-search').focus()

    document.getElementById('spotlight-search').onkeyup = function(e) { spotlightSearch(e) }
}
function spotlightHide() {
    const container = document.getElementById('spotlight-container')
    container.classList.add('hide')
    container.classList.remove('show')
    document.getElementById('spotlight-search').blur()
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

            // console.log(await wikiSearch(query))
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

// async function wikiSearch(query) {
//     // https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&titles=Curb+Your+Enthusiasm&list=&meta=&pithumbsize=1000
//    // https://www.mediawiki.org/w/api.php?action=query&format=json&prop=pageimages&titles=Curb%20Your%20Enthusiasm&list=&meta=

//     // get matching title
//     let url1 = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&origin=*&format=json`
//     let response1 = await fetch(url1)
//     let data1 = JSON.parse(await response1.text())
//     let title = data1.query.search[0].title

//     // get images on matching title page
//     let url2 = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=images&titles=${title.split(' ').join('%20')}&origin=*`
//     let response2 = await fetch(url2)
//     let data2 = JSON.parse(await response2.text())
//     let file = data2.query.pages
//     let images = file[Object.keys(file)[0]].images
//     let image = images[0].title

//     console.log(image)

//     // get url of images
//     let url3 = `https://en.wikipedia.org/w/api.php?action=query&titles=File:Tedlassotitlecard.jpg&prop=imageinfo&iiprop=url`




//     // var div = document.createElement('div')
//     // div.innerHTML = data.query.search[0].snippet



//     // console.log(query)
//     // return div.firstChild
// }