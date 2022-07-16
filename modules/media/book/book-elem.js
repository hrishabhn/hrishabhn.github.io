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
    card: function (data) {
        let card = document.createElement('a')
        card.classList = 'book-card clickable-o'
        card.append(elems.thumb(`./media-image/books/${data.id}.jpg`))

        let info = document.createElement('info')
        info.classList = 'info'
        info.append(elems.textbox(data.author, data.name))
        card.append(info)

        return card
    },
    search: function (q) {
        let results = []
        for (const tray of books.data) for (const book of tray.data) if (results.length < len) {
            const name = book.name.toUpperCase().includes(q)
            const author = book.author.toUpperCase().includes(q)
            if (name || author) results.push(book.id)
        }
        return results
    },
    resultCard: function (data) {
        let card = resultCard.base({
            name: 'Books',
            buttons: [{ icon: SFSymbols.book.fill },],
            type: 'hstack',
            gap: 10,
        })
        for (const x of data) card.lastChild.append(bookElem.resultCardItem(allBooks[x]))
        return card
    },
    resultCardItem: function (book) {
        let card = document.createElement('a')
        card.classList = 'result-book result-media clickable-o'
        card.append(elems.thumb(`./media-image/books/${book.id}.${book.coverType}`))
        card.append(elems.textbox(book.name, book.author))
        // card.onclick = function () { movie.detail() }
        return card
    },
}