function processLink(linkItem) {
    // console.log(linkItem)

    if (linkItem.netflix) {
        return `https://www.netflix.com/title/${linkItem.netflix}`
    } else if (linkItem.amazon) {
        return linkItem.amazon
    } else if (linkItem.applePod) {
        return `https://podcasts.apple.com/podcast/${linkItem.applePod}`
    } else if (linkItem.youtube) {
        return `https://www.youtube.com/c/${linkItem.youtube}/videos`
    } else if (linkItem.primeVideo) {
        // return `https://watch.amazon.com/detail?asin=${linkItem.primeVideo}`
        return `primevideo://detail?asin=${linkItem.primeVideo}`
    } else if (linkItem.audible) {
        return `audible://view?section=discover&asin=${linkItem.audible}`
    } else {
        return linkItem
    }
}

function processDesc(movie, type) {
    if (movie.info.description) {
        return movie.info.description
    } else if (movie.info.desc) {
        var descItem = movie.info.desc
        var descString = ``

        if (!type) {
            if (descItem.genre) {
                descString = `${processDescGenre(descItem)}`
            }

            if (descItem.seasons) {
                descString = `${descString} &#149 ${processDescSeasons(descItem)}`
            }

            if ((descItem.year) || (descItem.yearStart)) {
                descString = `${descString} &#149 ${processDescYear(descItem)}`
            }

            // console.log(yearString)
        } else if (type == 'genre') {
            if (descItem.genre) {
                descString = `${processDescGenre(descItem)}`
            }
        }

        return (descString)
    }
}

function processDescGenre(descItem) {
    var genreString = ``

    for (let i = 0; i < descItem.genre.length; i++) {
        genreString = `${genreString}${descItem.genre[i]}`

        if (i < descItem.genre.length - 1) {
            genreString = `${genreString} &#149 `
        }
    }

    return genreString
}

function processDescSeasons(descItem) {
    if (descItem.seasons > 1) {
        var seasonString = `${descItem.seasons} seasons`
    } else {
        var seasonString = `${descItem.seasons} season`
    }

    return seasonString
}

function processDescYear(descItem) {
    if (descItem.yearStart) {
        var yearString = `${descItem.yearStart}`

        if (descItem.yearEnd) {
            var yearString = `${yearString} - ${descItem.yearEnd}`
        } else {
            var yearString = `${yearString} - Present`
        }
    } else if (descItem.year) {
        var yearString = `${descItem.year}`
    }


    return yearString
}

function movieApps(movie) {
    const appBases = {
        tvTimeID: {
            name: 'TV Time',
            link: 'https://www.tvtime.com/en/show/',
            thumb: 'tvtime.jpeg',
        },
        reelgoodLink: {
            name: 'Reelgood',
            link: '',
            thumb: 'reelgood.jpeg',
        },
        imdbID: {
            name: 'IMDb',
            link: 'https://www.imdb.com/title/',
            thumb: 'imdb.jpeg',
        },
        subReddit: {
            name: 'Reddit',
            link: 'https://www.reddit.com/r/',
            thumb: 'reddit.jpeg',
        },
    }

    let results = []

    for (const app in movie.apps) {
        let result = appBases[app]
        result.link = `${result.link}${movie.apps[app]}`
        result.type = 'thumb'
        results.push(result)
    }

    return results
}

