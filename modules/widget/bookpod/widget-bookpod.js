function widgetBookPod(data, type) {
    let card = document.createElement('a')
    card.classList = `widget-card layer-1 clickable bookpod ${type}`
    card.style.setProperty('--thumb', `url(../../../media-image/books/${data.id}.${data.coverType})`)

    let bg = bgElement()
    let blur = document.createElement('div')
    blur.classList = 'blur'


    card.append(bg)
    card.append(blur)
    card.append(thumbElement())
    card.append(growElement())
    card.append(textboxBase(data.name, data.author))

    return card
}