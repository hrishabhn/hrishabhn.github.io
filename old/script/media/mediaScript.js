function processBookPodLink(item) {
    if (item.audible) return `audible://view?section=discover&asin=${item.audible}`
    else return item.link
}



// function movieApps(movie) {
//     const appBases = {
//         tvTimeID: {
//             name: 'TV Time',
//             link: 'https://www.tvtime.com/en/show/',
//             thumb: 'tvtime.jpeg',
//         },
//         reelgoodLink: {
//             name: 'Reelgood',
//             link: '',
//             thumb: 'reelgood.jpeg',
//         },
//         imdbID: {
//             name: 'IMDb',
//             link: 'https://www.imdb.com/title/',
//             thumb: 'imdb.jpeg',
//         },
//         subReddit: {
//             name: 'Reddit',
//             link: 'https://www.reddit.com/r/',
//             thumb: 'reddit.jpeg',
//         },
//     }

//     let results = []

//     for (const app in movie.apps) {
//         let result = appBases[app]
//         result.link = `${result.link}${movie.apps[app]}`
//         result.type = 'thumb'
//         results.push(result)
//     }

//     return results
// }

