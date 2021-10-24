function appRender(type,data,title,devices) {
    var dataLength = data.length
    var htmlString = '';

    if (type == 'link-tray') {
        htmlString = appendSpacer(htmlString,15)

        for (let i = 0; i < dataLength; i++) {
            var trigger = ``
    
            if (data[i].link) {
                trigger += `href="${data[i].link}" target="_${data[i].target}"`
            }
            if (data[i].function) {
                trigger += `onclick="${data[i].function}"`
            }
    
            // var appHTML = `
            // <a class="clickable-fg link-button ${data[i].background}" ${trigger}>
            //     <div class="link-icon">${data[i].icon}</div>
            //     <div class="spacer"></div>
            //     <p>${data[i].name}</p>
            // </a>`
    

            var appHTML = `
            <a class="app-small clickable ${data[i].background}" ${trigger}>
                <div class="icon">${data[i].icon}</div>
                <div class="spacer-x" style="--size: 10px;"></div>
                <p>${data[i].name}</p>
            </a>`


            if (i < dataLength - 1) {
                appHTML = appendSpacer(appHTML,8)
            }
    
            // if (data[i].devices) {
            //     appHTML = `<div class="hstack ${data[i].devices}">${appHTML}</div>`
            // } else {
            //     appHTML = `<div class="hstack">${appHTML}</div>`
            // }
    
            htmlString = `${htmlString}${appHTML}`
        }
    
        htmlString = appendSpacer(htmlString,15)
        htmlString = appendSpacer(htmlString,'scroll')

        var scroll = document.createElement('div')
        scroll.classList = 'hscroll'
        scroll.innerHTML = htmlString

        // htmlString = scrollEmbed(htmlString,15)
    
        var titleElement = contentTitleElement(title)
        // var titleString = contentTitleHTML(title)
        // titleString = appendSpacer(titleString,8)
        // htmlString = `${titleString}${htmlString}`
        // htmlString = contentContainerEmbed(htmlString)

        var container = contentContainerElement(null)

        // var container = document.createElement('div')
        // container.classList = ('content-container layer2')
        container.append(titleElement)
        container.append(spacerElement(8))
        container.append(scroll)
        return container

    } else if (type == 'app-big-tray') {
        htmlString = appendSpacer(htmlString,15)
        for (let i = 0; i < dataLength; i++) {
            var trigger = ``
    
            if (data[i].link) {
                trigger += `href="${data[i].link}" target="_${data[i].target}"`
            }
            if (data[i].function) {
                trigger += `onclick="${data[i].function}"`
            }
    
            // var appHTML = `<a class="clickable action ${data[i].background}" ${trigger}><div class="action-icon">${data[i].icon}</div><div class="spacer"></div><p class="action-text">${data[i].name}</p></a>`
            
            var appHTML = `
            <a class="app-big clickable ${data[i].background}" ${trigger}>
                <div class="icon">${data[i].icon}</div>
                <div class="grow"></div>
                <p>${data[i].name}</p>
            </a>`

            if (i < dataLength - 1) {
                appHTML = appendSpacer(appHTML,10)
            }
    
            htmlString = `${htmlString}${appHTML}`
        }
        htmlString = appendSpacer(htmlString,15)

        // if (title) {
        //     var titleHTML = contentTitleHTML(title)
        //     titleHTML = contentContainerEmbed(titleHTML)
        //     titleHTML = appendSpacer(titleHTML,15)
        // } else {
        //     var titleHTML = ``
        // }

        // htmlString = `${titleHTML}<div class="hscroll">${htmlString}</div>`

        var container = document.createElement('div')
        container.classList = ('hscroll')
        container.innerHTML = htmlString
        return container
    }
}
function bookmarkRenderOLD(content) {
    const data = content.data
    var htmlString = ``

    for (let i = 0; i < data.length; i++) {
        var trigger = ``

        if (data[i].link) {
            trigger += `href="${data[i].link}" target="_${data[i].target}"`
        }
        if (data[i].function) {
            trigger += `onclick="${data[i].function}"`
        }

        var appHTML = `
        <div class="app-container ${data[i].devices}">
            <div class="vstack">
                <a class="icon ${data[i].background}" ${trigger} target="_${data[i].target}">${data[i].icon}</a>
                <div class="spacer-x" style="--size: 4px;"></div>
                <p>${data[i].name}</p>
            </div>
            <div class="spacer-x" style="--size: 10px;"></div>
        </div>`

        htmlString = `${htmlString}${appHTML}`
    }

    // console.log(appHTML)

    var container = document.createElement('div')
    container.classList = ('hscroll')
    container.innerHTML = htmlString
    return container
}
function appListTrayRender(appListTray) {
    var element = document.createElement('div')
    element.classList = 'app-list-tray'
    element.append(spacerElement(40,'hidden-mobile'))

    for (let i = 0; i < appListTray.content.length; i++) {
        // console.log(appListTray.content[i])
        element.append(appListRender(appListTray.content[i]))

        if (i < appListTray.content.length - 1) {
            element.append(spacerAppListElement())
        }
    }
    element.append(spacerElement(40,'hidden-mobile'))

    return element
}
function appListRender(content) {
    var list = document.createElement('div')
    list.classList = 'app-list layer-1 card-shadow'

    var title = document.createElement('div')
    title.classList = 'title'
    title.innerHTML = content.title

    list.append(title)
    list.append(spacerElement(10))
    list.append(hlineElement())
    // list.append(spacerElement(6))

    for (let i = 0; i < content.data.length; i++) {
        var vstack = document.createElement('div')
        vstack.classList = `vstack ${content.data[i].devices}`

        // vstack.append(spacerElement(2))

        var button = document.createElement('a')
        button.classList = `item button-fg`
        button.href = content.data[i].link
        button.target = `_${content.data[i].target}`


        button.innerHTML = `
        <div class="icon  ${content.data[i].background}">${content.data[i].icon}</div>
        <div class="spacer-x" style="--size: 15px;"></div>
        <p> ${content.data[i].name}</p>
        `

        vstack.append(button)

        if (i < content.data.length - 1) {
            vstack.append(hlineListElement())
        }

        list.append(vstack)
    }

    return list
}

function bookmarkRender(content) {
    var container = document.createElement('div')
    container.classList = `bookmark-tray layer-1 card-shadow page-width ${content.devices}`

    var title = document.createElement('div')
    title.classList = 'title'
    title.innerHTML = content.title

    container.append(title)
    container.append(spacerElement(10))
    container.append(hlineElement())
    container.append(spacerElement(10))

    var hscroll = hscrollElement()

    for (let i = 0; i < content.data.length; i++) {
        var bookmark = document.createElement('div')
        bookmark.classList = 'bookmark-container'
        bookmark.innerHTML = `
        <div class="bookmark-container ${content.data[i].devices}">
            <div class="vstack">
                <a class="icon ${content.data[i].background}" href="${content.data[i].link}" target="_${content.data[i].target}">${content.data[i].icon}</svg></a>
                <div class="spacer-x" style="--size: 4px;"></div>
                <p>${content.data[i].name}</p>
            </div>
            <div class="spacer-x" style="--size: 10px;"></div>
        </div>`

        hscroll.append(bookmark)
        // console.log(content.data[i])
    }

    container.append(hscroll)
    // console.log(content.data)

    return container
}
function appLinkRender(content) {
    var container = document.createElement('div')
    container.classList = `bookmark-tray layer-1 card-shadow page-width ${content.devices}`

    var title = document.createElement('div')
    title.classList = 'title'
    title.innerHTML = content.title

    container.append(title)
    container.append(spacerElement(10))
    container.append(hlineElement())
    container.append(spacerElement(10))

    var hscroll = hscrollElement()
    hscroll.append(spacerElement(15))

    for (let i = 0; i < content.data.length; i++) {
        var link = document.createElement('div')
        link.classList = `${content.data[i].devices}`
        // link.innerHTML = `
        // <div class="bookmark-container ${content.data[i].devices}">
        //     <div class="vstack">
        //         <a class="icon ${content.data[i].background}" href="${content.data[i].link}" target="_${content.data[i].target}">${content.data[i].icon}</svg></a>
        //         <div class="spacer-x" style="--size: 4px;"></div>
        //         <p>${content.data[i].name}</p>
        //     </div>
        //     <div class="spacer-x" style="--size: 10px;"></div>
        // </div>`
        link.innerHTML = `
            <a class="link layer-1 clickable" href="${content.data[i].link}" target="_${content.data[i].target}">
                <div class="bg ${content.data[i].background}"></div>
                <div class="fg layer-1"></div>
                <div class="icon ${content.data[i].background}">${content.data[i].icon}</div>
                <div class="grow"></div>
                <p class="text button-fg">${content.data[i].name}</p>
            </a>
            <div class="spacer-x" style="--size: 10px;"></div>`

        hscroll.append(link)
        // console.log(content.data[i])
    }

    container.append(hscroll)
    // console.log(content.data)

    return container
}


function pageShortcutElement(n) {
    const page = pageData[n]

    var shortcut = document.createElement('a')
    shortcut.classList = 'shortcut layer-1 clickable card-shadow'
    shortcut.onclick = function() { pageData[n].open() }

    shortcut.innerHTML = `
    <div class="icon ${page.info.style}">${page.info.icon}</div>
    <div class="grow"></div>
    <p class="text">${page.info.name}</p>
    <p class="subtext">${page.info.subtext}</p>`

    return shortcut
}
function combineSubColElements(subCol1,subCol2) {
    var container = document.createElement('div')
    container.classList = 'fill-width'
    container.append(subCol1)
    container.append(spacerElement(15))
    container.append(spacerElement(5,'hidden-mobile'))
    container.append(subCol2)

    return container
}


// function appShortcutTrayRender(content) {
//     var tray = document.createElement('div')
//     tray.classList = 'shortcut-tray page-width'

//     tray.innerHTML = `
//     <div class="subtray">
//         ${appShortcutString(content.data[0])}
//         <div class="spacer-x" style="--size: 15px;"></div>
//         <div class="spacer-x hidden-mobile" style="--size: 5px;"></div>
//         ${appShortcutString(content.data[1])}
//     </div>
//     <div class="spacer-x" style="--size: 15px;"></div>
//     <div class="spacer-x hidden-mobile" style="--size: 5px;"></div>
//     <div class="subtray">
//         ${appShortcutString(content.data[2])}
//         <div class="spacer-x" style="--size: 15px;"></div>
//         <div class="spacer-x hidden-mobile" style="--size: 5px;"></div>
//         ${appShortcutString(content.data[3])}
//     </div>`

//     return tray
// }

// function appShortcutString(app) {
//     // console.log(page.info.style)

//     // var shortcut = document.createElement('a')
//     // shortcut.classList = 'shortcut layer-1 clickable card-shadow'
//     // shortcut.onclick = function() { pageData[page.info.id].open() }
    
//     // console.log(shortcut)

//     var htmlString = `
//     <a class="shortcut layer-1 clickable card-shadow" href="${app.link}" target="_${app.target}">
//         <div class="icon ${app.background}">${app.icon}</div>
//         <div class="grow"></div>
//         <p class="text button-fg">${app.name}</p>
//     </a>`

//     return htmlString
// }