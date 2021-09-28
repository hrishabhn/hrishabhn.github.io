function apps(){
    appType('action',productivityApps,'productivity-tray',null,null)
    appType('action',noteApps,'note-tray',null,null)
    appType('link',pinnedHomeApps,'pinned-home-tray','Pinned',null)
    appType('link',notionApps,'notion-tray','Notion',null)

    appType('action',shoppingApps,'shopping-tray',null,null)
    appType('link',pinnedBookmarksApps,'pinned-bookmarks-tray','Pinned',null)
    appType('link',designApps,'design-tray','Design',null)
    appType('link',apartmentApps,'apartment-tray','Apartment',null)

    appType('action',iosSystemApps,'ios-system-tray',null,'hidden-desktop')
    appType('action',financeApps,'finance-tray','Finance','only-mobile')
    appType('action',learningApps,'learning-tray','Learning',null)
    appType('action',socialApps,'social-tray','Social',null)
    appType('link',pinnedAppsApps,'pinned-social-tray','Pinned',null)

    appType('action',schoolApps,'school-1-tray',null,null)

    appType('link',newsApps,'news-app-tray','News',null)
    appType('link',audioApps,'audio-tray','Audio',null)
    appType('link',videoApps,'video-tray','TV & Video',null)

    appType('link',videoApps,'video-tray-2','TV & Video',null)
}

function appType(type, appData, dest, title, devices) {
    if (type == "action") {
        actionPopulate(appData, dest, title, devices)
    } else {
        linkPopulate(appData, dest, title, devices)
    }
}

function actionPopulate(data, tray, title, devices) {
    // console.log(data, tray, title)
    var dataLength = data.length

    var htmlString = "";

    for (i = 0; i < dataLength; i++) {
        var trigger = ``

        if (data[i].link) {
            trigger += `href="${data[i].link}" target="_${data[i].target}"`
        }
        if (data[i].function) {
            trigger += `onclick="${data[i].function}"`
        }

        var appHTML = `<a class="clickable action ${data[i].background}" ${trigger}><div class="action-icon">${data[i].icon}</div><div class="spacer"></div><p class="action-text">${data[i].name}</p></a>`

        htmlString = `${htmlString}${appHTML}`
    }

    if (title) {
        var titleHTML = contentTitleHTML(title)
        titleHTML = contentContainerEmbed(titleHTML)
        titleHTML = appendSpacer(titleHTML,15)
    } else {
        var titleHTML = ``
    }

    htmlString = `${titleHTML}<div class="action-tray">${htmlString}</div>`
    var container = document.getElementById(tray)
    container.classList.add(devices)
    container.innerHTML = htmlString
}

function linkPopulate(data, tray, title, devices) {
    var dataLength = data.length

    var htmlString = "";
    htmlString = appendSpacer(htmlString,15)

    for (i = 0; i < dataLength; i++) {
        var trigger = ``

        if (data[i].link) {
            trigger += `href="${data[i].link}" target="_${data[i].target}"`
        }
        if (data[i].function) {
            trigger += `onclick="${data[i].function}"`
        }

        var appHTML = `<a class="clickable-fg link-button ${data[i].background}" ${trigger}><div class="link-icon">${data[i].icon}</div><div class="spacer"></div><p>${data[i].name}</p></a>`

        if (i < dataLength - 1) {
            appHTML = appendSpacer(appHTML,8)
        }

        if (data[i].devices) {
            appHTML = `<div class="hstack ${data[i].devices}">${appHTML}</div>`
        } else {
            appHTML = `<div class="hstack">${appHTML}</div>`
        }

        htmlString = `${htmlString}${appHTML}`
    }

    htmlString = appendSpacer(htmlString,15)
    htmlString = appendSpacer(htmlString,'scroll')
    htmlString = scrollEmbed(htmlString,15)

    var titleString = contentTitleHTML(title)
    titleString = appendSpacer(titleString,8)
    htmlString = `${titleString}${htmlString}`

    htmlString = contentContainerEmbed(htmlString)
    var container = document.getElementById(tray)
    container.classList.add(devices)
    container.innerHTML = htmlString
}

