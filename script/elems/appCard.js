function appCard(app) {
    let card = document.createElement('a')
    card.classList = 'app-card layer-1 clickable-o card-hover'
    card.target = '_blank'

    if (app.link) {
        card.href = app.link
    } else if (app.trigger) {
        card.onclick = function () { app.trigger() }
    }


    if (app.thumb) {
        var thumb = `<div class="thumb" style="background-image: url(./appThumb/${app.thumb});"></div>`
    } else if (app.icon) {
        var thumb = `<div class="thumb ${app.style}">${app.icon}</div>`

    }

    if (app.accent) {
        card.style.setProperty('--brand-col', `#${app.accent}`)
    } else if (app.style) {
        card.style.setProperty('--brand-col-dark', `var(--${app.style}-dark)`)
        card.style.setProperty('--brand-col-light', `var(--${app.style}-light)`)
    }




    card.innerHTML = `
        ${thumb}
        <div class="textbox">
            <p class="name">${app.name}</p>
            <p class="desc">${app.desc}</p>
        </div>
        `

    return card
}

function appCardSmall(app) {
    let card = document.createElement('a')
    card.classList = 'app-card-small layer-1 clickable-o card-hover'
    // card.target = '_blank'

    if (app.link) {
        card.href = app.link
    } else if (app.trigger) {
        card.onclick = function () { app.trigger() }
    }


    if (app.thumb) {
        var thumb = `<div class="thumb" style="background-image: url(./appThumb/${app.thumb});"></div>`
    } else if (app.icon) {
        var thumb = `<div class="thumb ${app.style}">${app.icon}</div>`

    }

    if (app.accent) {
        card.style.setProperty('--brand-col', `#${app.accent}`)
    } else if (app.style) {
        card.style.setProperty('--brand-col-dark', `var(--${app.style}-dark)`)
        card.style.setProperty('--brand-col-light', `var(--${app.style}-light)`)
    }




    card.innerHTML = thumb

    return card
}

function appCardSmallHover(app) {
    let hoverDetailElem = document.createElement('div')
    hoverDetailElem.classList = 'hover-detail layer-1'
    hoverDetailElem.innerHTML = app.name

    return hoverDetailElem
}