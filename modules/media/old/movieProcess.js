let movieData = []

for (let tray of movieRaw) {
    let results = []
    for (const movie of tray.data) results.push(movie.id)
    tray.results = results

    tray.elem = {
        // big: mediaElems.movie.row(results, tray.name, 'big'),
        // small: mediaElems.movie.row(results, tray.name, 'small'),
        // smart: mediaElems.movie.row(results, tray.name, 'smart'),
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

            if (movie.cast) for (const actor of movie.cast) if ((actor.actor.toUpperCase().includes(q)) || (actor.char ? actor.char.toUpperCase().includes(q) : false)) cast = true
            if (movie.info.tags) for (const tag of movie.info.tags) if (tag.toUpperCase().includes(q)) tags = true

            if ((name || cast || tags) && !results.includes(movie.id)) results.push(movie.id)
        }

        return results
    },
    resultCard: function (data) {
        let card = resultCard.base({
            name: 'TV & Movies',
            buttons: [{ icon: SFSymbols.tv.fill },],
            type: 'hstack',
            gap: 10,
        })
        for (const x of data) card.lastChild.append(movies.resultCardItem(movieDict[x]))
        return card
    },
    resultCardItem: function (movie) {
        let card = document.createElement('a')
        card.classList = 'result-movie result-media clickable-o'
        card.append(elems.thumb(`./media-image/TV/background/${movie.id}.${movie.style.poster.wide.type}`))
        card.append(elems.textbox(movie.name, movie.desc.full))
        card.onclick = function () { movie.detail() }
        return card
    },
    tags: {
        'himym': 'How I Met Your Mother',
        'mcu': 'Marvel Cinematic Universe',
        'standup': 'Stand Up',
        'bond': 'James Bond',
        'romcom': 'Romantic Comedy',
        'disney': 'Disney',
        'starwars': 'Star Wars',
        'David Attenborough': 'David Attenborough',
        'jurassic': 'Jurassic Park',
        'got': 'Game of Thrones',
    },
}


// consolelog(pods)
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