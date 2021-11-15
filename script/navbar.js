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
    container.classList = 'side right hidden-mobile'

    var user = document.createElement('a')
    user.classList = 'user item clickable layer-2'
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
