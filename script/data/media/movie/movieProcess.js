let movieData = []

for (let tray of movieRaw) {
    let results = []
    for (const movie of tray.data) results.push(movie.id)
    tray.results = results

    tray.elem = {
        big: mediaElems.movie.new.row(results, tray.name, 'big'),
        small: mediaElems.movie.new.row(results, tray.name, 'small'),
        smart: mediaElems.movie.new.row(results, tray.name, 'smart'),
        oldSmall: mediaElems.movie.small.row(results, tray.name),
        oldBig: mediaElems.movie.big.row(results, tray.name),
    }

    movieData.push(tray.data)
}

const movies = {
    rows: movieRaw,
    search: function (q) {
        let results = []

        for (const row of this.rows) for (const movie of row.data) if (results.length < len) {
            const name = movie.name.toUpperCase().includes(q)
            let cast = false
            let tags = false

            if (movie.cast) for (const actor of movie.cast) if ((actor.actor.toUpperCase().includes(q)) || (actor.char.toUpperCase().includes(q))) cast = true
            if (movie.info.tags) for (const tag of movie.info.tags) if (tag.toUpperCase().includes(q)) tags = true

            if ((name || cast || tags) && !results.includes(movie.id)) results.push(movie.id)
        }

        return results
    },
    searchRow: function (q) { return mediaElems.movie.new.row(this.search(q), 'TV & Movies', 'smart') },
    tags: {
        'himym': 'How I Met Your Mother',
        'mcu': 'Marvel Cinematic Universe',
        'standup': 'Stand Up',
        'bond': 'James Bond',
        'romcom': 'Romantic Comedy',
        'disney': 'Disney',
    },
}


// console.log(pods)
// console.log(movies)


// const testsckjnlk = {
//     rows: [
//         {
//             name: 'Name of Row',
//             result: null,
//             data: 'data',
//             elem: null,
//         },
//     ],


//     search: null,
//     searchRow: null,
// }