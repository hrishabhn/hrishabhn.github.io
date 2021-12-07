const baseElements = [
    {
        id: 'navbar',
        render: function() {
            const element = document.getElementById(this.id)

            var time = document.createElement('div')
            time.classList = 'time hidden-mobile'
            time.innerHTML = processTime(new Date())

            var date = document.createElement('div')
            date.classList = 'date hidden-mobile'
            date.innerHTML = `${processDay(dateNow().day,'long')}, ${dateNow().date} ${processMonth(dateNow().month,'long')}`


            // console.log(processDay(dateNow().day,'long'))

            // element.append(time)
            // element.append(date)

            var left = document.createElement('div')
            left.classList = 'side'

            element.append(navbarLeft())
            element.append(growElement())
            element.append(menuTray())
            element.append(growElement())
            element.append(navbarRight())
            // element.append(navbarSearchChild())
        },
    }
]

function navbarLeft() {
    var container = document.createElement('div')
    container.classList = 'side left'

    var search = document.createElement('a')
    search.classList = 'basic item'
    search.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966"><path d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"></path></svg>'
    search.onclick = function() { spotlightShow() }
    container.append(search)
    container.append(spacerElement(5))

    var weather = document.createElement('a')
    weather.classList = 'weather item'
    
    var icon = document.createElement('div')
    icon.id = 'temp-icon'
    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 26 26"><path d="M17.5 3c-2.4 0-4.491188 1.3032813-5.617188 3.2382812C11.444813 6.0962813 10.986 6 10.5 6c-2.33 0-4.222125 1.777875-4.453125 4.046875C3.777875 10.277875 2 12.17 2 14.5 2 16.985 4.015 19 6.5 19h17c2.485 0 4.5-2.015 4.5-4.5 0-2.323-1.767344-4.212172-4.027344-4.451172C23.987656 9.8678281 24 9.685 24 9.5 24 5.91 21.09 3 17.5 3zM7.984375 20.986328A1.0001 1.0001 0 0 0 7 22v1a1.0001 1.0001 0 1 0 2 0v-1a1.0001 1.0001 0 0 0-1.015625-1.013672zm10 0A1.0001 1.0001 0 0 0 17 22v1a1.0001 1.0001 0 1 0 2 0v-1a1.0001 1.0001 0 0 0-1.015625-1.013672zm-5 2A1.0001 1.0001 0 0 0 12 24v1a1.0001 1.0001 0 1 0 2 0v-1a1.0001 1.0001 0 0 0-1.015625-1.013672zm10 0A1.0001 1.0001 0 0 0 22 24v1a1.0001 1.0001 0 1 0 2 0v-1a1.0001 1.0001 0 0 0-1.015625-1.013672z"></path></svg>'
    weather.append(icon)
    
    weather.append(spacerElement(5))

    var temp = document.createElement('p')
    temp.id = 'temp'
    temp.innerHTML = '-&#0176'
    weather.append(temp)

    container.append(weather)

    return container


    var container = document.createElement('div')
    container.classList = 'side left hidden-mobile'

    // var searchContainer = document.createElement('div')
    // searchContainer.classList = 'global-search-container'

    // var searchIcon = document.createElement('div')
    // searchIcon.classList = 'icon'
    // searchIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966"><path d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"></path></svg>'
    // searchContainer.append(searchIcon)

    // searchContainer.append(spacerElement(10))
    
    // var searchBox = document.createElement('input')
    // searchBox.id = 'global-search'
    // searchBox.onkeyup = function(e) { globalSearch(e) }
    // searchBox.onfocus = function() { globalSearch() }
    // // searchBox.onblur = function() {
    // //     // var x = MouseEvent.clientX, y = MouseEvent.clientY,
    // //     // elementMouseIsOver = document.elementFromPoint(x, y);
    // //     // console.log(elementMouseIsOver)

    // //     // document.getElementById('global-result').classList.add('hidden-always')
    // // }
    // searchContainer.append(searchBox)

    // var searchClose = document.createElement('a')
    // searchClose.classList = 'close clickable'
    // searchClose.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="7.5 7.5 9 9"><path d="m14.8 16.2-7-7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l7 7c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0z"></path><path d="m7.8 14.8 7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4z"></path></svg>`
    // searchClose.onclick = function() {
    //     document.getElementById('global-search').value = ''
    //     globalResultHide()
    // }
    // searchContainer.append(searchClose)

    // searchContainer.append(navbarSearchChild())

    // container.append(searchContainer)

    return container
}
function navbarRight() {
    var container = document.createElement('div')
    container.classList = 'side right'

    let count = document.createElement('a')
    count.classList = 'basic item'
    count.innerHTML = iconData['calendar']
    let countMenuData = [[]]
    for (let i = 0; i < countdownData.length; i++) {
        countMenuData[0].push({
            name: countdownData[i].name,
            data: [countdownProcess(countdownData[i].date,'short').num,countdownProcess(countdownData[i].date,'short').word],
            action: function() { showModal('Countdowns',allCountdownsElement()) }
        })
    }
    count.onclick = function(e) { contextModalShow(countMenuData,e) }
    container.append(count)
    container.append(spacerElement(5))

    let trip = document.createElement('a')
    trip.classList = 'basic item'
    trip.innerHTML = iconData['plane']
    let tripMenuData = [
            [{
            image: '',
            name: 'New York',
            subtext: '23 December',
        }]
    ]

    let tripNo = 1
    for (let i = 0; i < tripData[tripNo].sections.length; i++) {
        let section = tripData[tripNo].sections[i]
        let sectionData = [
            
        ]
        for (let j = 0; j < section.content.length; j++){
            
            if (section.content[j].type != 'transit') {
                let flight = section.content[j].data
                
                sectionData.push({
                    name: flightCardText(flight,section.content[j].type).line1,
                    subtext: flightCardText(flight,section.content[j].type).line2,
                    logo: `<div class="logo" style="--darkCol: #${flight.airline.icon.darkCol}; --lightCol: #${flight.airline.icon.lightCol};">${flight.airline.icon.svg}</div>`,
                    action: function() { openModal(flightDetail(flight,section.content[j].type) )}
                })
            }


        }
        tripMenuData.push(sectionData)
    }
    trip.onclick = function(e) { contextModalShow(tripMenuData,e) }
    container.append(trip)
    container.append(spacerElement(5))



    var focusContainer = document.createElement('div')
    
    var focus = document.createElement('a')
    focus.classList = 'basic item'
    focus.innerHTML = currentFocus().icon
    focus.onclick = function() { focusMenuToggle() }

    focusContainer.append(focus)
    focusContainer.append(focusMenuElement())

    

    container.append(focusContainer)
    container.append(spacerElement(5))

    var user = document.createElement('a')
    user.classList = 'user item'
    user.innerHTML = 'HN'
    container.append(user)


    return container
}

// function navbarSearchChild() {
//     var card = document.createElement('div')
//     card.id = 'global-result'
//     card.classList = 'layer-0-trans hidden-always'
//     return card
// }


function menuTray() {
    var tray = document.createElement('div')
    tray.classList = 'menu-tray'

    for (let i = 0; i < pageData.length; i++) {
        tray.append(renderMenuElement(pageData[i]))
    }

    return tray
}

function renderMenuElement(page) {
    var menuItem = document.createElement('div')
    menuItem.id = `menu-item-${page.info.id}`
    menuItem.classList = 'menu-item clickable'
    menuItem.onclick = function() { page.open() }

    if (!page.info.menuMobile) {
        menuItem.classList.add('hidden-mobile')
    }

    var menuItemContent = `
    <div class="grow"></div>
    <div class="icon">${page.info.icon}</div>
    <div class="spacer-x hidden-mobile" style="--size: 10px;"></div>
    <p>${page.info.name}</p>
    <div class="grow"></div>
    <div class="select-line blue"></div>
    `

    menuItem.innerHTML = menuItemContent
    return menuItem
}
