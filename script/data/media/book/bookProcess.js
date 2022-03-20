let bookData = []

for (let tray of bookRaw) {
    let results = []
    for (const book of tray.data) results.push(book.id)
    tray.results = results

    tray.elem = searchBookPodRow(results, tray.name, 'book')

    bookData.push(tray)
}


const books = {
    data: bookData,
    search: function (q) {
        let results = []
        for (const tray of this.data) for (const book of tray.data) if (results.length < len) {
            const name = book.name.toUpperCase().includes(q)
            if (name) results.push(book.id)
        }
        return results
    },
    searchRow: function (q) { return searchBookPodRow(this.search(q), 'Books', 'book') }
}





// console.log(pods.data[0])

// const movies = {
//     data: movieData,
//     search: function (q) {
//         let results = []

//         for (const tray of this.data) for (const movie of tray) if (results.length < len) {
//             const key = movie.id

//             const name = allMovies[key].name.toUpperCase().includes(q)
//             let cast = false
//             let tags = false

//             if (movie.cast) for (const actor of movie.cast) if ((actor.actor.toUpperCase().includes(q)) || (actor.char.toUpperCase().includes(q))) cast = true
//             if (movie.info.tags) for (const tag of movie.info.tags) if (tag.toUpperCase().includes(q)) tags = true

//             if ((name || cast || tags) && !results.includes(key)) results.push(key)
//         }

//         return results
//     },
//     searchRow: function (q) { return searchMoviesNewRow(this.search(q), 'TV & Movies', 'smart') },
// }