let bookData = []

for (let tray of bookRaw) {
    let results = []
    for (const book of tray.data) results.push(book.id)
    tray.results = results
    tray.elem = mediaElems.bookPod.row(results, tray.name, 'book')
    bookData.push(tray)
}


const books = {
    data: bookData,
    search: function (q) {
        let results = []
        for (const tray of this.data) for (const book of tray.data) if (results.length < len) {
            const name = book.name.toUpperCase().includes(q)
            const author = book.author.toUpperCase().includes(q)
            if (name || author) results.push(book.id)
        }
        return results
    },
    // searchRow: function (q) { return searchBookPodRow(this.search(q), 'Books', 'book') },
    searchRow: function (q) { return mediaElems.bookPod.row(this.search(q), 'Books', 'book') },
}