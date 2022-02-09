function defaultDash(customData,customName,customCol) {
    let row = rowBase()

    let box = document.createElement('div')
    box.classList = 'dash-box'
    box.classList.add('dash-box')

    box.append(defaultDashCard(appData['main'],'Apps','blue'))
    box.append(defaultDashCard(appData['notion'],'Notes','green'))
    box.append(defaultDashCard(appData['bookmarks'],'Bookmarks','yellow'))
    box.append(defaultDashCard(customData,customName,customCol))
    
    row.append(box)
    return row
}

function defaultDashCard(data,name,color) {
    let card = cardBase()
    card.classList.add('dash-box-card')
    card.classList.remove('card-hover')

    // card.style.setProperty('--brand-col-dark',`var(--${color}-dark)`)
    // card.style.setProperty('--brand-col-light',`var(--${color}-light)`)

    let bg = document.createElement('div')
    bg.classList = `grad ${color}`
    card.append(bg)

    let title = document.createElement('div')
    title.classList = 'title'
    title.innerHTML = name

    card.append(title)

    for(let i = 0; i < data.length; i++) {
        let item = appCard(data[i])
        item.classList.remove('card-hover','layer-1')

        card.append(item)
    }





    // card.innerHTML = `<a class="app-item layer-1 clickable-o" href="https://netflix.com" target="_blank" style="--brand-col: #e50914;">
    // <div class="thumb" style="background-image: url(./appThumb/netflix.jpeg);"></div>
    // <div class="textbox">
    //     <p class="name">Netflix</p>
    //     <p class="desc">Watch</p>
    // </div>
    // </a>`







    return card
}