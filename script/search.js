
function globalSearchResults(query) {
    var results = [
        {
            name: 'Apps',
            results: globalSearchApps(query),
        },
        {
            name: 'Notion',
            results: secureSearch(globalSearchNotion(query)),
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
        for (let j = 0; j < movieData[i].length; j++) {
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

function globalSearchApps(query) {
    var results = []

    for (let i = 0; i < appSearchData.length; i++) {
        const data = appSearchData[i]
        const name = data.name.toUpperCase().includes(query.toUpperCase())

        if (name) {
            results.push(spotlightAppElement(data))
        }
    }

    return results
}

function spotlightAppElement(data) {
    var container = document.createElement('a')
    container.classList = 'result clickable'
    container.href = data.link
    container.target = '_blank'

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




                // container.onclick = function() { globalResultHide() }
            
                // image.style.setProperty('background-image',`url("media-image/podcasts/${podData[i][j].id}.${podData[i][j].coverType}")`)
            
                
            
                

                // var subtext = document.createElement('p')
                // subtext.classList = 'subtext'
                // subtext.innerHTML = podData[i][j].author
                // info.append(subtext)




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