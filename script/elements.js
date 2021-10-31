function appendSpacer(html,n) {
    html = `${html}<div class="spacer-x" style="--size: ${n}px;"></div>`
    return html
}

function scrollEmbed(html,margin) {
    html = `<div class="scroll margin-${margin}">${html}</div>`
    return html
}

// function contentTitleHTML(title) {
//     // var titleHTML = `<div class="content-container"><div class="content-title">${title}</div></div><div class="spacer-15"></div>`
//     var titleHTML = `<div class="content-title">${title}</div>`
//     return titleHTML
// }

// function contentContainerEmbed(html) {
//     html = `<div class="content-container layer1">${html}</div>`
//     return html
// }

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

function spacerContentElement() {
    var spacerContent = document.createElement('div')
    spacerContent.classList = 'spacer-content'
    return spacerContent
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
function hlineListElement() {
    var hline = document.createElement('div')
    hline.classList = 'hline list'
    return hline
}

function hscrollElement(child) {
    var hscroll = document.createElement('div')
    hscroll.classList = 'hscroll'
    return hscroll
}
function hscrollMediaElement(child) {
    var hscroll = document.createElement('div')
    hscroll.classList = 'hscroll-media'
    return hscroll
}
function hscrollHuluElement(child) {
    var hscroll = document.createElement('div')
    hscroll.classList = 'hscroll-hulu'
    return hscroll
}

// function contentContainerElement(child) {
//     var container = document.createElement('div')
//     container.classList = 'content-container layer1'
    
//     if (child) {
//         container.append(child)
//     }
//     return container
// }

function searchElement(contentItem) {
    // console.log(contentItem)
    var element = document.createElement('a')
    element.id = 'search'
    element.href = contentItem.link
    // element.target = '_blank'
    element.classList = 'layer-1 button-fg card-shadow clickable page-width'

    var icon = document.createElement('div')
    icon.classList = 'icon'
    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966"><path d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"></path></svg>'
    element.append(icon)

    element.append(spacerElement(10))

    var text = document.createElement('p')
    text.innerHTML = contentItem.engine
    element.append(text)
    // console.log(element)

    return element
}


function colContainerRender(content1,content2) {
    var container = document.createElement('div')
    container.classList = 'col-container page-width'
    
    container.append(colRender(content1))
    container.append(spacerElement(15))
    container.append(spacerElement(5,'hidden-mobile'))
    container.append(colRender(content2))

    return container
}
function colRender(content) {
    var col = document.createElement('div')
    col.classList = 'col'
    col.append(content)

    // for (let i = 0; i < content.length; i++) {
    //     col.append(content[i])
    // }

    return col
}