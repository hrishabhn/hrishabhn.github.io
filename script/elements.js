function contentTitleHTML(title) {
    var titleHTML = `<div class="content-container"><div class="content-title">${title}</div></div><div class="spacer-15"></div>`
    return titleHTML
}

function hstackEmbed(html) {
    html = `<div class="hstack">${html}</div>`
    return html
}

function scrollEmbed(html) {
    html = `<div class="scroll">${html}</div>`
    return html
}

function appendSpacer(html,n) {
    html = `${html}<div class="spacer-${n}"></div>`
    return html
}

function clearElement(id) {
    document.getElementById(id).innerHTML = null
}