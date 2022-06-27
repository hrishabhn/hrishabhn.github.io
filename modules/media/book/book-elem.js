const bookElem = {
    shelf: function (data) {
        let cont = document.createElement('div')
        cont.classList = 'bookshelf-container'

        let shelf = document.createElement('div')
        shelf.classList = 'bookshelf'

        for (const x of data.data) shelf.append(bookElem.card(x))

        cont.append(elems.title(data.name))
        cont.append(shelf)

        return cont
    },
    card: function(data) {
        let card = document.createElement('a')
        card.classList = 'book-card clickable-o'

        let thumb = elems.thumb(`./media-image/books/${data.id}.jpg`)
card.append(thumb)

        return card
    }
}