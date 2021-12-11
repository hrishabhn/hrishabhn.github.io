
function globalSearchResults(query) {
    var results = [
        {
            name: 'Focus',
            results: globalSearchFocus(query),
        },
        {
            name: 'Apps',
            results: globalSearchApps(query),
        },
        {
            name: 'Notion',
            results: secureSearch(globalSearchNotion(query)),
        },
        {
            name: 'School',
            results: secureSearch(globalSearchSchool(query)),
        },
        {
            name: 'Trips',
            results: secureSearch(globalSearchTrip(query)),
        },
        {
            name: 'Flights',
            results: secureSearch(globalSearchFlight(query)),
        },
        {
            name: 'Buses',
            results: secureSearch(globalSearchBus(query)),
        },
        {
            name: 'TV & Movies',
            results: globalSearchMovie(query),
        },
        {
            name: 'Books',
            results: globalSearchBook(query),
        },
        {
            name: 'Podcasts',
            results: globalSearchPod(query),
        },
        {
            name: 'Reddit',
            results: globalSearchReddit(query),
        },
        {
            name: 'Twitter',
            results: globalSearchTwitter(query),
        },
        {
            name: 'Search Websites',
            results: globalSearchEngine(query),
        },
    ]

    return results
}

function globalSearchBus(query) {
    var results = []

    for (let i = 0; i < busData.length; i++) {
        const bus = busData[i]
        const airline = bus.airline.name.toUpperCase().includes(query.toUpperCase())
        const number = bus.number.toUpperCase().includes(query.toUpperCase())
        const org = bus.dep.city.toUpperCase().includes(query.toUpperCase())
        const des = bus.arr.city.toUpperCase().includes(query.toUpperCase())

        if (airline || number || org || des) {

            var container = document.createElement('a')
            container.classList = 'result clickable'
            container.onclick = function() { openModal(flightDetail(bus,'bus')) }
        
            var image = document.createElement('div')
            image.classList = 'logo bus'
            image.style.setProperty('--darkCol',`#${bus.airline.icon.darkCol}`)
            image.style.setProperty('--lightCol',`#${bus.airline.icon.lightCol}`)
            image.innerHTML = bus.airline.icon.svg
        
            container.append(image)
        
            container.append(spacerElement(15))
        
            var info = document.createElement('div')
            info.classList = 'info'
            
            var text = document.createElement('p')
            text.classList = 'text'
            text.innerHTML = `${bus.airline.name}`
            info.append(text)

            var subtext = document.createElement('p')
            subtext.classList = 'subtext'
            subtext.innerHTML = `${bus.dep.airport} &#8594 ${bus.arr.airport}`
            info.append(subtext)

            container.append(info)

            var data = document.createElement('div')
            data.classList = 'data'



            var big = document.createElement('p')
            big.classList = 'big'
            big.innerHTML = bus.dep.date.getDate()
            data.append(big)

            var small = document.createElement('p')
            small.classList = 'small'
            small.innerHTML = processMonth(bus.dep.date.getMonth(),'short')
            data.append(small)

            container.append(data)

            results.push(container)
        }
    }

    return results
}
function globalSearchFlight(query) {
    var results = []

    for (let i = 0; i < flightData.length; i++) {
        const flight = flightData[i]
        const airline = flight.airline.name.toUpperCase().includes(query.toUpperCase())
        const number = flight.number.toUpperCase().includes(query.toUpperCase())
        const org = flight.dep.city.toUpperCase().includes(query.toUpperCase())
        const des = flight.arr.city.toUpperCase().includes(query.toUpperCase())

        if (airline || number || org || des) {

            var container = document.createElement('a')
            container.classList = 'result clickable'
            container.onclick = function() { openModal(flightDetail(flight,'flight')) }
        
            var image = document.createElement('div')
            image.classList = 'logo flight'
            image.style.setProperty('--darkCol',`#${flight.airline.icon.darkCol}`)
            image.style.setProperty('--lightCol',`#${flight.airline.icon.lightCol}`)
            image.innerHTML = flight.airline.icon.svg
        
            container.append(image)
        
            container.append(spacerElement(15))
        
            var info = document.createElement('div')
            info.classList = 'info'
            
            var text = document.createElement('p')
            text.classList = 'text'
            text.innerHTML = `${flight.airline.name} ${flight.number}`
            info.append(text)

            var subtext = document.createElement('p')
            subtext.classList = 'subtext'
            subtext.innerHTML = `${flight.dep.airport} &#8594 ${flight.arr.airport}`
            info.append(subtext)

            container.append(info)

            var data = document.createElement('div')
            data.classList = 'data'



            var big = document.createElement('p')
            big.classList = 'big'
            big.innerHTML = flight.dep.date.getDate()
            data.append(big)

            var small = document.createElement('p')
            small.classList = 'small'
            small.innerHTML = processMonth(flight.dep.date.getMonth(),'short')
            data.append(small)

            container.append(data)

            results.push(container)
        }
    }

    return results
}
function globalSearchTrip(query) {
    var results = []

    for (let i = 0; i < tripData.length; i++) {
        const name = tripData[i].name.toUpperCase().includes(query.toUpperCase())
        const subhead = tripData[i].subhead.toUpperCase().includes(query.toUpperCase())

        if (name || subhead) {
            var container = document.createElement('a')
            container.classList = 'result clickable'
            container.onclick = function() { openModal(tripCard(i)) }
        
            var image = document.createElement('div')
            image.classList = 'image trip'
            image.style.setProperty('background-image',`url(${tripData[i].image})`)
        
            container.append(image)
        
            container.append(spacerElement(15))
        
            var info = document.createElement('div')
            info.classList = 'info'
            
            var text = document.createElement('p')
            text.classList = 'text'
            text.innerHTML = tripData[i].name
            info.append(text)

            var subtext = document.createElement('p')
            subtext.classList = 'subtext'
            subtext.innerHTML = tripData[i].subhead
            info.append(subtext)

            container.append(info)

            results.push(container)
        }
    }

    return results
}
function globalSearchMovie(query) {
    var results = []

    for (let i = 0; i < movieData.length; i++) {
        for (let j = 0; (j < movieData[i].length) && (results.length < 5); j++) {
            const name = movieData[i][j].name.toUpperCase().includes(query.toUpperCase())
            const genre = containsGenre(i,j,query)
            const actor = containsActor(i,j,query)

            if (name || genre || actor) {
                var container = document.createElement('a')
                container.classList = 'result clickable'
                container.onclick = function() { tvPopupShow(i,j) }
            
                var image = document.createElement('div')
                image.classList = 'image movie'
                image.style.setProperty('background-image',`url("media-image/TV/background/${movieData[i][j].id}.${movieData[i][j].style.posterType}")`)
            
                container.append(image)
            
                container.append(spacerElement(15))
            
                var info = document.createElement('div')
                info.classList = 'info'
                
                var text = document.createElement('p')
                text.classList = 'text'
                text.innerHTML = movieData[i][j].name
                info.append(text)

                var subtext = document.createElement('p')
                subtext.classList = 'subtext'
                subtext.innerHTML = movieData[i][j].info.location
                info.append(subtext)


                container.append(info)
                // container.append(growElement())



                results.push(container)
            }
        }
    }

    return results
}
function globalSearchBook(query) {
    var results = []

    for (let i = 0; i < bookData.length; i++) {
        for (let j = 0; j < bookData[i].length; j++) {
            const name = bookData[i][j].name.toUpperCase().includes(query.toUpperCase())
            const author = bookData[i][j].author.toUpperCase().includes(query.toUpperCase())

            if (name || author) {
                var container = document.createElement('a')
                container.classList = 'result clickable'
                // container.onclick = function() { globalResultHide() }
                container.href = processLink(bookData[i][j].link)
                container.target = '_blank'
            
                var image = document.createElement('div')
                image.classList = 'image book'
                image.style.setProperty('background-image',`url("media-image/books/${bookData[i][j].id}.${bookData[i][j].coverType}")`)
            
                container.append(image)
            
                container.append(spacerElement(15))
            
                var info = document.createElement('div')
                info.classList = 'info'
                
                var text = document.createElement('p')
                text.classList = 'text'
                text.innerHTML = bookData[i][j].name
                info.append(text)

                var subtext = document.createElement('p')
                subtext.classList = 'subtext'
                subtext.innerHTML = bookData[i][j].author
                info.append(subtext)

                container.append(info)

                results.push(container)
            }
        }
    }

    return results
}
function globalSearchPod(query) {
    var results = []

    for (let i = 0; i < podData.length; i++) {
        for (let j = 0; j < podData[i].length; j++) {
            const name = podData[i][j].name.toUpperCase().includes(query.toUpperCase())
            const author = podData[i][j].author.toUpperCase().includes(query.toUpperCase())

            if (name || author) {
                var container = document.createElement('a')
                container.classList = 'result clickable'
                // container.onclick = function() { globalResultHide() }
                container.href = processLink(podData[i][j].link)
                container.target = '_blank'
            
                var image = document.createElement('div')
                image.classList = 'image pod'
                image.style.setProperty('background-image',`url("media-image/podcasts/${podData[i][j].id}.${podData[i][j].coverType}")`)
            
                container.append(image)
            
                container.append(spacerElement(15))
            
                var info = document.createElement('div')
                info.classList = 'info'
                
                var text = document.createElement('p')
                text.classList = 'text'
                text.innerHTML = podData[i][j].name
                info.append(text)

                var subtext = document.createElement('p')
                subtext.classList = 'subtext'
                subtext.innerHTML = podData[i][j].author
                info.append(subtext)

                container.append(info)

                results.push(container)
            }
        }
    }

    return results
}


function globalSearchNotion(query) {
    var results = []

    for (let i = 0; i < notionSearchData.length; i++) {
        const notion = notionSearchData[i]
        const name = notion.name.toUpperCase().includes(query.toUpperCase())

        if (name) {
            results.push(spotlightAppElement(notion))
        }
    }

    return results
}
function globalSearchReddit(query) {
    var results = []

    for (let i = 0; i < redditSearchData.length; i++) {
        const subReddit = redditSearchData[i]
        const name = `r/${subReddit}`.toUpperCase().includes(query.toUpperCase())

        if (name) {
            const data = {
                name: `r/${subReddit}`,
                background: 'reddit',
                link: `https://www.reddit.com/r/${subReddit}`,
                icon: '<svg data-bbox="1.959 3 46.082 42" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M29 3c-2.105 0-4.566 1.652-4.938 9.031.313-.008.622-.031.938-.031.352 0 .715.02 1.063.031C26.3 7.598 27.355 5 29 5c.703 0 1.102.383 1.844 1.188.867.94 2 2.164 4.218 2.625A6.215 6.215 0 0 1 35 8c0-.422.043-.82.125-1.219-1.375-.375-2.102-1.168-2.813-1.937C31.52 3.984 30.61 3 29 3zm12 1c-2.207 0-4 1.797-4 4 0 2.203 1.793 4 4 4s4-1.797 4-4c0-2.203-1.793-4-4-4zM25 14C12.867 14 3 20.18 3 29s9.867 16 22 16 22-7.18 22-16-9.867-15-22-15zm-17.5.938c-1.46 0-2.848.597-3.906 1.656-1.723 1.722-2.078 4.199-1.094 6.25 1.512-2.926 4.113-5.422 7.469-7.282-.762-.386-1.606-.624-2.469-.624zm35 0c-.863 0-1.707.238-2.469.624 3.356 1.86 5.957 4.356 7.469 7.282.984-2.051.629-4.528-1.094-6.25-1.058-1.059-2.445-1.657-3.906-1.657zM17 23a3 3 0 1 1-.002 6.002A3 3 0 0 1 17 23zm16 0a3 3 0 1 1-.002 6.002A3 3 0 0 1 33 23zM16.062 34c.25.043.497.184.657.406.105.149 2.449 3.282 8.281 3.282 5.91 0 8.258-3.22 8.281-3.25.317-.45.953-.57 1.407-.25.449.316.535.921.218 1.374-.117.168-2.968 4.126-9.906 4.126-6.941 0-9.79-3.958-9.906-4.126-.317-.453-.235-1.058.219-1.374.226-.16.5-.231.75-.188z"></path></g></svg>',
            }

            results.push(spotlightSocialElement(data))
        }
    }

    return results
}
function globalSearchTwitter(query) {
    var results = []

    for (let i = 0; i < twitterSearchData.length; i++) {
        const handle = twitterSearchData[i]
        const name = `@${handle}`.toUpperCase().includes(query.toUpperCase())

        if (name) {
            const data = {
                name: `@${handle}`,
                background: 'twitter',
                link: `https://www.twitter.com/${handle}`,
                icon: '<svg data-bbox="-0.059 5.617 50.122 40.729" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M50.063 10.438a20.57 20.57 0 0 1-5.91 1.62 10.309 10.309 0 0 0 4.523-5.687 20.648 20.648 0 0 1-6.531 2.492 10.258 10.258 0 0 0-7.504-3.246c-5.68 0-10.286 4.602-10.286 10.281 0 .805.094 1.59.27 2.344-8.547-.43-16.121-4.523-21.195-10.746a10.243 10.243 0 0 0-1.39 5.172c0 3.566 1.812 6.715 4.573 8.562a10.274 10.274 0 0 1-4.66-1.289v.13c0 4.984 3.547 9.136 8.246 10.085a10.29 10.29 0 0 1-4.644.172c1.312 4.082 5.11 7.063 9.605 7.145A20.613 20.613 0 0 1 2.39 41.87c-.831 0-1.648-.047-2.449-.144a29.053 29.053 0 0 0 15.762 4.62c18.914 0 29.258-15.667 29.258-29.253 0-.446-.012-.895-.027-1.332a20.904 20.904 0 0 0 5.129-5.325z"></path></g></svg>',
            }

            results.push(spotlightSocialElement(data))
        }
    }

    return results
}

function globalSearchApps(query) {
    var results = []

    for (let i = 0; i < (appSearchData.length) && (results.length < 5); i++) {
        const data = appSearchData[i]
        const name = data.name.toUpperCase().includes(query.toUpperCase())

        if (name) {
            results.push(spotlightAppElement(data))
        }
    }

    return results
}
function globalSearchFocus(query) {
    var results = []

    for (let i = 0; (i < focusData.length) && (results.length < 5); i++) {
        const data = focusData[i]
        const name = data.name.toUpperCase().includes(query.toUpperCase())

        if (name) {
            // results.push(spotlightAppElement({
            //     name: data.name,
            //     background: data.color,
            //     action: function() { data.action() },
            //     icon: data.icon,
            // }))
            results.push(spotlightAppElement(data))
        }
    }

    return results
}

function globalSearchSchool(query) {
    var results = []

    for (let i = 0; i < schoolSearchData.length; i++) {
        const data = schoolSearchData[i]
        const name = schoolSearchData[i].name.toUpperCase().includes(query.toUpperCase())
        // console.log(name)

        if (name) {
            results.push(spotlightTrayElement(data))
        }
    }

    return results
}

function spotlightSocialElement(data) {
    var container = document.createElement('a')
    container.classList = 'result clickable'
    container.href = data.link
    container.target = '_blank'

    var icon = document.createElement('div')
    icon.classList = 'icon social'
    icon.classList.add(data.background)
    icon.innerHTML = data.icon
    container.append(icon)

    container.append(spacerElement(15))

    var info = document.createElement('div')
    info.classList = 'info'

    var text = document.createElement('p')
    text.classList = 'text'
    text.innerHTML = data.name
    info.append(text)

    container.append(info)
    
    return container
}
function spotlightAppElement(data) {
    var container = document.createElement('a')
    container.classList = 'result clickable'

    if (data.link) {
        container.href = data.link
        container.target = '_blank'
    } else if (data.action) {
        container.onclick = function() { data.action() }
    }


    var icon = document.createElement('div')
    icon.classList = 'icon'
    icon.classList.add(data.background)
    icon.innerHTML = data.icon
    container.append(icon)

    container.append(spacerElement(15))

    var info = document.createElement('div')
    info.classList = 'info'

    var text = document.createElement('p')
    text.classList = 'text'
    text.innerHTML = data.name
    info.append(text)

    container.append(info)
    
    return container
}
function spotlightTrayElement(data) {
    let container = document.createElement('div')
    container.classList = 'result'

    let vstack = document.createElement('div')
    vstack.classList = 'vstack fill-width'
    vstack.style.setProperty('align-items','flex-start')
    // console.log(data)

    let header = document.createElement('p')
    header.classList = 'text'
    header.innerHTML = data.name
    vstack.append(header)

    vstack.append(spacerElement(8))

    let hscroll = hscrollElement()

    for (let i = 0; i < data.apps.length; i++) {
        const app = data.apps[i]

        let appStack = document.createElement('div')
        appStack.classList = 'vstack'

        let appIcon = document.createElement('a')
        appIcon.classList = `icon ${app.background} clickable`
        appIcon.innerHTML = app.icon
        appIcon.href = app.link
        appIcon.target = '_blank'
        appStack.append(appIcon)

        let textbox = document.createElement('div')
        textbox.style.setProperty('width','100%')

        let appText = document.createElement('p')
        appText.classList = 'app-text'
        appText.innerHTML = app.name
        textbox.append(appText)
        appStack.append(textbox)

        hscroll.append(appStack)
        hscroll.append(spacerElement(10))
    }

    hscroll.append(growElement())
    vstack.append(hscroll)
    container.append(vstack)
    
    return container
}

function globalSearchEngine(query) {
    const engines = [
        {
            name: 'Google',
            link: `http://www.google.com/search?q=`
        },
        {
            name: 'YouTube',
            link: `http://www.youtube.com/search?q=`
        },
        {
            name: 'IMDb',
            link: `https://www.imdb.com/find?q=`
        },
        {
            name: 'Goodreads',
            link: `https://www.goodreads.com/search?q=`
        },
        {
            name: 'Walmart',
            link: `https://www.walmart.com/search?q=`
        },
        {
            name: 'Reddit',
            link: `http://www.google.com/search?q=site:reddit.com%20`
        },
    ]

    var results = []
    var general = true


    var firstWord = query.replace(/ .*/,'')
    // console.log(firstWord)

    for (let i = 0; i < engines.length; i++) {
        if (firstWord.toUpperCase().includes(engines[i].name.toUpperCase())) {
            general = false

            var container = document.createElement('a')
            container.classList = 'result clickable'
            container.href = `${engines[i].link}${query.substr(query.indexOf(" ") + 1)}`
            container.target = '_blank'

            var icon = document.createElement('div')
            icon.classList = 'search-icon'
            icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966"><path d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"></path></svg>'
            container.append(icon)

            container.append(spacerElement(15))

            var info = document.createElement('div')
            info.classList = 'info'

            var text = document.createElement('p')
            text.classList = 'text'
            text.innerHTML = engines[i].name
            info.append(text)

            container.append(info)
            
            results.push(container)
        }
    }

    if (general) {
        for (let i = 0; i < engines.length; i++) {
            var container = document.createElement('a')
            container.classList = 'result clickable'
            container.href = `${engines[i].link}${query}`
            container.target = '_blank'
    
            var icon = document.createElement('div')
            icon.classList = 'search-icon'
            icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966"><path d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"></path></svg>'
            container.append(icon)
    
            container.append(spacerElement(15))
    
            var info = document.createElement('div')
            info.classList = 'info'
    
            var text = document.createElement('p')
            text.classList = 'text'
            text.innerHTML = engines[i].name
            info.append(text)
    
            container.append(info)

            
            results.push(container)
        }
    }

    return results
}



function containsGenre(i,j,query) {
    const movie = movieData[i][j]
    var result = false

    if (movie.info.desc) {
        if (movie.info.desc.genre) {
            for (let n = 0; n < movie.info.desc.genre.length; n++) {
                if (movie.info.desc.genre[n].toUpperCase().includes(query.toUpperCase())) {
                    result = true
                }
            }
        }
    }

    return result
}
function containsActor(i,j,query) {
    const movie = movieData[i][j]
    var result = false

    if (movie.cast) {
        for (let n = 0; n < movie.cast.length; n++) {
            if (movie.cast[n].actor.toUpperCase().includes(query.toUpperCase())) {
                result = true
            }
        }
    }

    return result
}

// function globalSearch(e) {
//     var query = document.getElementById('global-search').value
//     const resultElement = document.getElementById('global-result')

//     if (e) {
//         // console.log(e.key == 'Enter')
//         const enter = e.key == 'Enter'
//         if (enter) {
//             window.open(`http://www.google.com/search?q=${query}`,'_blank')
//         }
//     }

//     if (query) {
//         resultElement.classList.remove('hidden-always')
//     } else {
//         resultElement.classList.add('hidden-always')
//     }

//     const results = globalSearchResults(query)

//     removeAllChildNodes(resultElement)
//     for (let i = 0; i < results.length; i++) {
//         if (results[i].results.length) {
//             resultElement.append(spacerElement(10))

//             resultElement.append(globalResultTitle(results[i]))
//             var subtray = document.createElement('div')
//             subtray.classList = 'subtray layer-1-trans vstack fill-width'

//             for (let j = 0; ((j < results[i].results.length) && (j < 5)); j++) {
//                 subtray.append(results[i].results[j])


//                 if ((j < results[i].results.length - 1) && (j < 4)) {
//                     subtray.append(hlineElement())
//                 }
//             }
//             resultElement.append(subtray)
//         }
//     }


//     // document.getElementById('global-result').innerHTML = results[0]
// }

// function globalResultTitle(resultItem) {

//     var title = document.createElement('p')
//     title.classList = 'title'
//     title.innerHTML = resultItem.name
//     return title
// }

// function globalResultHide() {
//     document.getElementById('global-result').classList.add('hidden-always')
// }


// function globalSearchListElement(innerText,type,data) {
//     var container = document.createElement('a')
//     container.classList = 'result'

//     var image = document.createElement('div')
//     image.classList = 'image'

//     if (type == 'movie') {
//         image.classList.add('movie')
//         image.style.setProperty('background-image','url("media-image/TV/background/ghosts.webp")')
//     }

//     container.append(image)

//     container.append(spacerElement(5))

//     var text = document.createElement('p')
//     text.innerHTML = innerText
//     container.append(text)
//     container.append(growElement())

//     return container
// }



async function wikiSearch(query) {







    // https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&titles=Curb+Your+Enthusiasm&list=&meta=&pithumbsize=1000
   // https://www.mediawiki.org/w/api.php?action=query&format=json&prop=pageimages&titles=Curb%20Your%20Enthusiasm&list=&meta=

    // get matching title
    let url1 = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&origin=*&format=json`
    let response1 = await fetch(url1)
    let data1 = JSON.parse(await response1.text())
    let title = data1.query.search[0].title

    // get images on matching title page
    // let url2 = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=images&titles=${title.split(' ').join('%20')}&origin=*`

    // get page body
    let url2 = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${title.split(' ').join('%20')}&formatversion=2&exsentences=10&exlimit=1&explaintext=1&origin=*`
    // let url2 = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=explaintext&titles=${title.split(' ').join('%20')}&origin=*`
    let response2 = await fetch(url2)
    let data2 = JSON.parse(await response2.text())
    // let file = data2.query.pages
    // let images = file[Object.keys(file)[0]].images
    // let image = images[0].title

    // prop=extracts&exintro&explaintext

    // console.log(data1)

    let results = {
        title: title,
        body: data2.query.pages[0].extract
    }

    return results

    // get url of images
    // let url3 = `https://en.wikipedia.org/w/api.php?action=query&titles=File:Tedlassotitlecard.jpg&prop=imageinfo&iiprop=url`




    // var div = document.createElement('div')
    // div.innerHTML = data.query.search[0].snippet



    // console.log(query)
    // return div.firstChild
}

async function wikiSearchElement(query) {
    let results = await wikiSearch(query)

    var container = document.createElement('a')
    container.classList = 'result clickable'
    // container.onclick = function() { globalResultHide() }
    // container.href = processLink(podData[i][j].link)
    // container.target = '_blank'

    // var image = document.createElement('div')
    // image.classList = 'image pod'
    // image.style.setProperty('background-image',`url("media-image/podcasts/${podData[i][j].id}.${podData[i][j].coverType}")`)

    // container.append(image)

    // container.append(spacerElement(15))

    var info = document.createElement('div')
    info.classList = 'info'
    
    var text = document.createElement('p')
    text.classList = 'text'
    text.innerHTML = results.title
    info.append(text)

    var subtext = document.createElement('p')
    subtext.classList = 'subtext'
    subtext.innerHTML = results.body
    info.append(subtext)

    container.append(info)

    return container
}