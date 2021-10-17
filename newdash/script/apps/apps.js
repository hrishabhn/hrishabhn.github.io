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
        button.classList = `item button-text`
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
    container.classList = `bookmark-tray layer-1 card-shadow ${content.devices}`

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