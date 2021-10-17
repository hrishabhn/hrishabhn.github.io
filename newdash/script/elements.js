function appendSpacer(html,n) {
    html = `${html}<div class="spacer-x" style="--size: ${n}px;"></div>`
    return html
}

function scrollEmbed(html,margin) {
    html = `<div class="scroll margin-${margin}">${html}</div>`
    return html
}

function contentTitleHTML(title) {
    // var titleHTML = `<div class="content-container"><div class="content-title">${title}</div></div><div class="spacer-15"></div>`
    var titleHTML = `<div class="content-title">${title}</div>`
    return titleHTML
}

function contentContainerEmbed(html) {
    html = `<div class="content-container layer1">${html}</div>`
    return html
}

// 

function contentTitleElement(title) {
    var element = document.createElement('div')
    element.classList = 'content-title'
    element.innerHTML = title
    return element
}

function spacerElement(x,devices) {
    var spacer = document.createElement('div')
    spacer.classList = 'spacer-x'
    spacer.style.setProperty('--size',`${x}px`)

    if (devices) {
        spacer.classList.add(devices)
    }

    return spacer
}

function spacerAppListElement() {
    var spacerAppList = document.createElement('div')
    spacerAppList.classList = 'spacer-app-list'
    return spacerAppList
}

function hlineElement() {
    var hline = document.createElement('div')
    hline.classList = 'hline'
    return hline
}
function hlineContentElement() {
    var hline = document.createElement('div')
    hline.classList = 'hline-content'
    return hline
}

function hscrollElement(child) {
    var hscroll = document.createElement('div')
    hscroll.classList = 'hscroll'
    return hscroll
}

function contentContainerElement(child) {
    var container = document.createElement('div')
    container.classList = 'content-container layer1'
    
    if (child) {
        container.append(child)
    }
    return container
}

function searchElement(contentItem) {
    // console.log(contentItem)
    var element = document.createElement('a')
    element.id = 'search'
    element.href = contentItem.link
    element.target = '_blank'
    element.classList = 'layer-1 button-text card-shadow clickable'
    element.innerHTML = contentItem.engine
    // console.log(element)

    return element
}