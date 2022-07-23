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