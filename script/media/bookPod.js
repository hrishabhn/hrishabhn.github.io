function bookTrayElement(a) {
    var tray = hscrollHuluElement()
    tray.append(spacerElement(100,'hidden-mobile'))
    tray.append(spacerElement(100,'hidden-mobile'))
    tray.append(spacerElement(20,'hidden-mobile'))
    tray.append(spacerElement(15,'only-mobile'))

    for (let b = 0; b < bookData[a].length; b++) {
        var bookCurrentData = bookData[a][b]

        var book = document.createElement('div')
        book.classList = 'media-card snap'
        book.innerHTML = `
        <a class="book poster clickable media-shadow" style="--poster: url('media-image/books/${bookCurrentData.id}.${bookCurrentData.coverType}');" href="${processLink(bookCurrentData.link)}" target="_blank"></a>
        <div class="info fill-width">
            <p>${bookCurrentData.progress}</p>
            <div class="grow"></div>
            <p class="secondary">${bookCurrentData.format}</p>
        </div>`
        
        tray.append(book)
        if (b < bookData[a].length - 1) {
            tray.append(spacerElement(10))
        }
    }
    tray.append(spacerElement(15,'only-mobile'))

    tray.append(spacerElement(100,'hidden-mobile'))
    tray.append(spacerElement(100,'hidden-mobile'))
    tray.append(spacerElement(80,'hidden-mobile'))
    tray.append(spacerElement(20,'hidden-mobile'))

    return tray
}

function podTrayElement(a) {
    var tray = hscrollHuluElement()
    tray.append(spacerElement(100,'hidden-mobile'))
    tray.append(spacerElement(100,'hidden-mobile'))
    tray.append(spacerElement(20,'hidden-mobile'))
    tray.append(spacerElement(15,'only-mobile'))

    for (let b = 0; b < podData[a].length; b++) {
        var podCurrentData = podData[a][b]

        var pod = document.createElement('div')
        pod.classList = 'media-card snap'
        pod.innerHTML = `
        <a class="pod poster clickable media-shadow" style="--poster: url('media-image/podcasts/${podCurrentData.id}.${podCurrentData.coverType}');" href="${processLink(podCurrentData.link)}" target="_blank"></a>
        <div class="info fill-width">
            <p>${podCurrentData.name}</p>
            <div class="grow"></div>
            <p class="secondary">${podCurrentData.author}</p>
        </div>`
        
        tray.append(pod)
        if (b < podData[a].length - 1) {
            tray.append(spacerElement(10))
        }
    }
    tray.append(spacerElement(15,'only-mobile'))

    tray.append(spacerElement(100,'hidden-mobile'))
    tray.append(spacerElement(100,'hidden-mobile'))
    tray.append(spacerElement(80,'hidden-mobile'))
    tray.append(spacerElement(20,'hidden-mobile'))

    return tray
}