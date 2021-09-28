function mediaPopulate() {
    bookBigPopulate(0)
    bookBigPopulate(1)
    bookBigPopulate(2)
    bookBigPopulate(3)
    bookBigPopulate(4)


    podBigPopulate(0)
    podBigPopulate(1)
    podBigPopulate(2)
    podBigPopulate(3)


    movieHTML(0, 'up-next-tray-2')
    movieHTML(1, 'weekly-tray-2')
    movieHTML(2, 'my-list-tray-2')
    movieHTML(3, 'movie-tray-2')
    movieHTML(4, 'new-show-tray-2')
    movieHTML(5, 'paused-tray-2')
    movieHTML(6, 'soon-tray-2')
    movieHTML(7, 'rewatch-tray-2')

    tvPreview(0,0)
    mediaPageSwitch(0)
}

// function pullWidgy() {
//   let n = 0
//   let image
//   fetch('https://hrishabhn.github.io/script/widgy.json')
//     .then(response => response.json())
//     .then(data => {
//         image = `https://hrishabhn.github.io/TV/background/${data[n]['id']}.webp`
//         return image
//     });
//
//     return image
// }

function scrollTVPreview(i) {

    for (j = 0; j < movieData[i].length; j++) {
        var element = document.getElementById(`tv-card-${i}-${j}`).getBoundingClientRect()

        if ((element.x < 40) && (element.x > 0)){
            tvPreview(i,j)
        }


        console.log(element.x)
    }



}

function tvPreview(i,j) {
    // console.log(movieData[i][j])
    const movie = movieData[i][j]

    const headerElement = document.getElementById('media-page-header')
    const headerText = document.getElementById('media-page-header-text')
    const posterElement = document.getElementById('tv-preview-poster')
    const titleElement = document.getElementById('tv-preview-title')
    const descElement = document.getElementById('tv-preview-description')
    // const linkElement = document.getElementById('tv-preview-link')
    const body = document.getElementById('body')

    headerElement.style.setProperty('--color',`#${movie.style.color}`)
    body.classList = ''
    body.style.setProperty('--color',`#${movie.style.color}`)
    headerText.innerHTML = movie.name
    posterElement.style.setProperty('--poster',`url('TV/background/${movie.id}.${movie.style.posterType}')`)
    titleElement.style.setProperty('--title',`url('TV/title/${movie.id}.${movie.style.titleType}')`)
    titleElement.classList = movie.style.titleSize

    if (movie.info.description) {
        descElement.innerHTML = movie.info.description
        descElement.classList.remove('hidden-always')
    } else {
        descElement.classList.add('hidden-always')
    }



    // linkElement.href = movie.link

    // const tvBigTitle = document.getElementById('tv-big-title')
    // const tvBigPlay = document.getElementById('tv-big-play')
    // // var tvBigName = document.getElementById('tv-big-name')
    // // var tvBigDescription = document.getElementById('tv-big-desc')
    // tvBigElement.classList = id + '-poster'
    // tvBigTitle.classList = id + '-title'

    // tvBigPlay.href = link
}

var tvModal = document.getElementById("tv-popup-modal");
var bgBlur = document.getElementById("background-blur");

function popupTVShow() {
    tvModal.className = "modal tv-popup-open";
    popupAllShow()
}
function popupTVHide() {
    tvModal.className = "modal tv-popup-closed";
    popupAllHide()
}
function tvPopup(movie) {
    popupTVShow()

    var serviceText;

    if ((!(movie.info.service.includes('Coming Soon'))) &&(!(movie.info.service.includes('Returns')))) {
        serviceText = "Watch on " + movie.info.service
    } else {
        serviceText = movie.info.service
    }


    document.getElementById('card').style.setProperty('--color',`#${movie.style.color}`)
    // document.getElementById('grad').style.setProperty('--color',`#${movie.style.color}`)
    document.getElementById('grad').style.backgroundImage = `linear-gradient(#${movie.style.color}00,#${movie.style.color})`
    document.getElementById('poster').style.setProperty('--poster',`url('TV/background/${movie.id}.${movie.style.posterType}')`)
    document.getElementById('title').style.setProperty('--title',`url('TV/title/${movie.id}.${movie.style.titleType}')`)
    document.getElementById('title').classList = 'tv-popup-title'
    document.getElementById('title').classList.add(movie.style.titleSize)
    document.getElementById('service').innerHTML = serviceText;

    var descElement = document.getElementById("desc")
    if (movie.info.description) {
        descElement.innerHTML = movie.info.description;
    } else {
        descElement.innerHTML = "";
    }

    var linkElement = document.getElementById("tv-popup-link")
    var linkIcon = document.getElementById("tv-popup-button-icon")
    if (movie.link) {
        linkIcon.classList.remove("hidden-always")
        linkElement.href = processLinkTV(movie)
    } else {
        linkIcon.classList.add("hidden-always")
        linkElement.removeAttribute('href')
    }

    var tvTimeElement = document.getElementById("tv-popup-tv-time")
    var reelgoodElement = document.getElementById("tv-popup-reelgood")
    var imdbElement = document.getElementById("tv-popup-imdb")
    var redditElement = document.getElementById("tv-popup-reddit")

    var tvTimeSpacer = document.getElementById('tv-time-spacer')
    var reelgoodSpacer = document.getElementById('reelgood-spacer')
    var imdbSpacer = document.getElementById('imdb-spacer')
    var redditSpacer = document.getElementById('reddit-spacer')

    if (movie.apps) {
        if (movie.apps.tvTimeID) {
            tvTimeElement.href = "https://www.tvtime.com/en/show/" + movie.apps.tvTimeID;
            tvTimeElement.classList.remove("hidden-always")

            tvTimeSpacer.classList.remove('hidden-always')
        } else {
            tvTimeElement.classList.add("hidden-always")

            tvTimeSpacer.classList.add('hidden-always')
        }

        if (movie.apps.reelgoodLink) {
            reelgoodElement.href = movie.apps.reelgoodLink;
            reelgoodElement.classList.remove("hidden-always")

            reelgoodSpacer.classList.remove('hidden-always')
        } else {
            reelgoodElement.classList.add("hidden-always")

            reelgoodSpacer.classList.add('hidden-always')
        }

        if (movie.apps.imdbID) {
            imdbElement.href = "https://www.imdb.com/title/" + movie.apps.imdbID;
            imdbElement.classList.remove("hidden-always")

            imdbSpacer.classList.remove('hidden-always')
        } else {
            imdbElement.classList.add("hidden-always")

            imdbSpacer.classList.add('hidden-always')
        }


        if (movie.apps.subreddit) {
            redditElement.href = `https://www.reddit.com/r/${movie.apps.subReddit}`
            redditElement.classList.remove("hidden-always")
        } else {
            redditElement.classList.add("hidden-always")
        }

        if (movie.apps.subReddit) {
            redditElement.href = `https://www.reddit.com/r/${movie.apps.subReddit}`
            redditElement.classList.remove("hidden-always")
        } else {
            redditElement.classList.add("hidden-always")
        }
    } else {
        tvTimeElement.classList.add("hidden-always")
        reelgoodElement.classList.add("hidden-always")
        imdbElement.classList.add("hidden-always")
        redditElement.classList.add("hidden-always")
    }

    var summaryElement = document.getElementById("tv-popup-summary")
    if (movie.info.summary) {
        summaryElement.innerHTML = movie.info.summary;
        summaryElement.classList.remove("hidden-always")
    } else {
        summaryElement.classList.add("hidden-always")
    }






    // document.getElementById("tv-popup-tv-time-rating").innerHTML = tvTimeRate;
    // document.getElementById("tv-popup-reelgood-rating").innerHTML = reelgoodRate;
    // document.getElementById("tv-popup-imdb-rating").innerHTML = imdbRate;
}

function processLinkTV(movie) {
    if (movie.link.netflix) {
        return `https://www.netflix.com/title/${movie.link.netflix}`
    } else if (movie.link.amazon) {
        return movie.link.amazon
    } else {
        return movie.link
    }
}

function processLinkPod(link) {
    if (link.apple) {
        return `https://podcasts.apple.com/podcast/${link.apple}`
    } else if (link.youtube) {
        return `https://www.youtube.com/c/${link.youtube}/videos`
    } else {
        return link
    }
}

function popupAllShow() {
    bgBlur.className = "background-blur background-blur-show";
    // busBlur.className = "bus-blur bus-blur-show";
    //   mainContainer.classList.add("sheetback")
}

function popupAllHide() {
    bgBlur.className = "background-blur background-blur-hide";
    //   busBlur.className = "bus-blur bus-blur-hide";
    //   mainContainer.classList.remove("sheetback")
}



function movieHTML(n, tray) {
    const data = movieData[n]

    var dataLength = data.length

    var htmlString = "";
    htmlString = appendSpacer(htmlString, 35)

    for (let i = 0; i < dataLength; i++) {
        if ((data[i].link !== null) && (data[i].link !== undefined)) {
            var htmlLink = `href="${processLinkTV(data[i])}"`
        } else {
            var htmlLink = ``
        }

        // var movieCardHTML = `<div class="tv-small-poster ${data[i].id}-poster"><div class="tv-small-gradient"><div class="tv-small-title ${data[i].titleSize} ${data[i].id}-title"></div></div><a class="tv-play-container" target="_blank"${htmlLink} onmouseover="tvBig('${data[i].id}','${data[i].link}')"><svg class="tv-play-icon" data-bbox="15.49 8.193 132.882 147.475" viewBox="0 0 163.861 163.861" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M39.564 11.445C26.27 3.818 15.49 10.065 15.49 25.388v113.074c0 15.338 10.78 21.577 24.075 13.958l98.832-56.68c13.3-7.629 13.3-19.99 0-27.617L39.564 11.445z" xmlns="http://www.w3.org/2000/svg"></path></g></svg></a></div>`


        // <div class="tv-card" target="_blank" href="${htmlLink}">


        // <a class="tv-info" onclick='tvPopup("${data[i].id}", "${data[i].link}", "${data[i].service}", "${data[i].description}", "${data[i].summary}", "${data[i].titleSize}", "${data[i].tvTimeID}", "${data[i].tvTimeRate}", "${data[i].reelgoodLink}", "${data[i].reelgoodRate}", "${data[i].imdbID}", "${data[i].imdbRate}", "${data[i].redditLink}")'><div class="tv-textbox"><p class="tv-heading">${data[i].name}</p><p class="tv-subheading">${data[i].service}</p></div><div class="tv-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384"><circle cx="192" cy="42.667" r="42.667"></circle><circle cx="192" cy="192" r="42.667"></circle><circle cx="192" cy="341.333" r="42.667"></circle></svg></div></a></div>



        // var movieCardHTML = `<div class="tv-card" target="_blank" href="${htmlLink}"><div class="tv-card-bg ${data[i].id}-poster"><div class="tv-card-fg"></div></div><div class="tv-card-poster ${data[i].id}-poster"><div class="tv-gradient"><div class="tv-title ${data[i].titleSize} ${data[i].id}-title"></div></div><a class="tv-play-container" target="_blank"${htmlLink}><svg class="tv-play-icon" data-bbox="15.49 8.193 132.882 147.475" viewBox="0 0 163.861 163.861" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M39.564 11.445C26.27 3.818 15.49 10.065 15.49 25.388v113.074c0 15.338 10.78 21.577 24.075 13.958l98.832-56.68c13.3-7.629 13.3-19.99 0-27.617L39.564 11.445z" xmlns="http://www.w3.org/2000/svg"></path></g></svg></a></div><a class="tv-info" onclick='tvPopup("${data[i].id}", "${data[i].link}", "${data[i].service}", "${data[i].description}", "${data[i].summary}", "${data[i].titleSize}", "${data[i].tvTimeID}", "${data[i].tvTimeRate}", "${data[i].reelgoodLink}", "${data[i].reelgoodRate}", "${data[i].imdbID}", "${data[i].imdbRate}", "${data[i].redditLink}")'><div class="tv-textbox"><p class="tv-heading">${data[i].name}</p><p class="tv-subheading">${data[i].service}</p></div><div class="tv-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384"><circle cx="192" cy="42.667" r="42.667"></circle><circle cx="192" cy="192" r="42.667"></circle><circle cx="192" cy="341.333" r="42.667"></circle></svg></div></a></div>`


        // var movieCardHTML = `<div class="movie-card"><div class="movie-poster ${data[i].id}-poster"><div class="movie-gradient"><div class="movie-title ${data[i].titleSize} ${data[i].id}-title"></div></div><a class="movie-play-container" target="_blank"${htmlLink}><svg class="movie-play-icon" data-bbox="15.49 8.193 132.882 147.475" viewBox="0 0 163.861 163.861" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M39.564 11.445C26.27 3.818 15.49 10.065 15.49 25.388v113.074c0 15.338 10.78 21.577 24.075 13.958l98.832-56.68c13.3-7.629 13.3-19.99 0-27.617L39.564 11.445z" xmlns="http://www.w3.org/2000/svg"></path></g></svg></a></div><a class="movie-info" onclick='tvPopup("${data[i].id}", "${data[i].link}", "${data[i].service}", "${data[i].description}", "${data[i].summary}", "${data[i].titleSize}", "${data[i].tvTimeID}", "${data[i].tvTimeRate}", "${data[i].reelgoodLink}", "${data[i].reelgoodRate}", "${data[i].imdbID}", "${data[i].imdbRate}")'><div class="movie-textbox"><p class="movie-heading">${data[i].name}</p><p class="movie-subheading">${data[i].service}</p></div><div class="movie-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384"><circle cx="192" cy="42.667" r="42.667"/><circle cx="192" cy="192" r="42.667"/><circle cx="192" cy="341.333" r="42.667"/></svg></div></a></div>`

        // var movieCardHTML = `<div class="tv-card" target="_blank" href="${htmlLink}"><div class="tv-card-poster ${data[i].id}-poster image-border"><div class="tv-gradient"><div class="tv-title ${data[i].titleSize} ${data[i].id}-title"></div></div><a class="tv-play-container" target="_blank"${htmlLink}><svg class="tv-play-icon" data-bbox="15.49 8.193 132.882 147.475" viewBox="0 0 163.861 163.861" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M39.564 11.445C26.27 3.818 15.49 10.065 15.49 25.388v113.074c0 15.338 10.78 21.577 24.075 13.958l98.832-56.68c13.3-7.629 13.3-19.99 0-27.617L39.564 11.445z" xmlns="http://www.w3.org/2000/svg"></path></g></svg></a></div><a class="tv-info clickable" onclick='tvPopup(movieData[${n}][${i}])'><div class="tv-textbox"><p class="tv-heading">${data[i].name}</p><p class="tv-subheading secondary-fg">${data[i].service}</p></div><div class="tv-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384"><circle cx="192" cy="42.667" r="42.667"></circle><circle cx="192" cy="192" r="42.667"></circle><circle cx="192" cy="341.333" r="42.667"></circle></svg></div></a></div>`

        // var movieCardHTML = `<div class="tv-card ${data[i].id}-solid" target="_blank" href="${htmlLink}"><div class="tv-card-poster ${data[i].id}-poster"><div class="tv-gradient ${data[i].id}-gradient"><div class="tv-title ${data[i].titleSize} ${data[i].id}-title"></div></div><a class="tv-play-container" target="_blank"${htmlLink}><svg class="tv-play-icon" data-bbox="15.49 8.193 132.882 147.475" viewBox="0 0 163.861 163.861" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M39.564 11.445C26.27 3.818 15.49 10.065 15.49 25.388v113.074c0 15.338 10.78 21.577 24.075 13.958l98.832-56.68c13.3-7.629 13.3-19.99 0-27.617L39.564 11.445z" xmlns="http://www.w3.org/2000/svg"></path></g></svg></a></div><a class="tv-info clickable" onclick='tvPopup(movieData[${n}][${i}])'><div class="tv-textbox"><p class="tv-heading">${data[i].name}</p><p class="tv-subheading secondary-fg">${data[i].service}</p></div><div class="tv-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384"><circle cx="192" cy="42.667" r="42.667"></circle><circle cx="192" cy="192" r="42.667"></circle><circle cx="192" cy="341.333" r="42.667"></circle></svg></div></a></div>`

        var movieCardHTML = `<div id="tv-card-${n}-${i}" class="tv-card" target="_blank" href="${htmlLink}"><div class="tv-card-poster image-border" style="--poster: url('TV/background/${data[i].id}.${data[i].style.posterType}');"><div class="tv-gradient"><div class="tv-title ${data[i].style.titleSize}" style="--title: url('TV/title/${data[i].id}.${data[i].style.titleType}');"></div></div><a class="tv-play-container" target="_blank"${htmlLink} onmouseover="tvPreview(${n},${i})"><svg class="tv-play-icon" data-bbox="15.49 8.193 132.882 147.475" viewBox="0 0 163.861 163.861" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M39.564 11.445C26.27 3.818 15.49 10.065 15.49 25.388v113.074c0 15.338 10.78 21.577 24.075 13.958l98.832-56.68c13.3-7.629 13.3-19.99 0-27.617L39.564 11.445z" xmlns="http://www.w3.org/2000/svg"></path></g></svg></a></div><a class="tv-info clickable" onclick='tvPopup(movieData[${n}][${i}])'><div class="tv-textbox"><p class="tv-heading">${data[i].name}</p><p class="tv-subheading">${data[i].info.service}</p></div><div class="tv-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384"><circle cx="192" cy="42.667" r="42.667"></circle><circle cx="192" cy="192" r="42.667"></circle><circle cx="192" cy="341.333" r="42.667"></circle></svg></div></a></div>`


        htmlString = `${htmlString}${movieCardHTML}`
        if (i < dataLength - 1) {
            htmlString = appendSpacer(htmlString, 8)
        }
    }

    htmlString = appendSpacer(htmlString, 35)
    htmlString = appendSpacer(htmlString, 'n')
    // htmlString = hstackEmbed(htmlString)
    htmlString = `<div class="scroll margin-35" onscroll="scrollTVPreview(${n})">${htmlString}</div>`

    // htmlString = scrollEmbed(htmlString, 35)

    var trayElement = document.getElementById(tray)
    trayElement.innerHTML = htmlString
}


function bookPopulate(bookData, tray) {
    var dataLength = bookData.length

    var htmlString = "";
    htmlString = appendSpacer(htmlString, 35)

    for (let i = 0; i < dataLength; i++) {
        // var bookCardHTML = `<a class="book-card clickable" target="_blank" href="${bookData[i].link}"><div class="book-card-bg ${bookData[i].id}-cover"><div class="book-card-fg"></div></div><div class="book-poster ${bookData[i].id}-cover"></div><div class="book-info"><div class="book-textbox"><p class="book-heading">${bookData[i].name}</p><p class="book-subheading">${bookData[i].author}</p></div></div></a>`
        var bookCardHTML = `<a class="media-card clickable" target="_blank" onclick="showMediaPopup('book',${i})"><div class="media-poster book-poster image-border" style="--poster: url('media-image/books/${bookData[i].id}.${bookData[i].coverType}');"></div><div class="book-info"><div class="book-textbox"><p class="book-heading">${bookData[i].name}</p><p class="book-subheading secondary-fg">${bookData[i].author}</p></div></div></a>`

        htmlString = `${htmlString}${bookCardHTML}`
        if (i < dataLength - 1) {
            htmlString = appendSpacer(htmlString, 10)
        }
    }

    htmlString = appendSpacer(htmlString, 35)
    htmlString = hstackEmbed(htmlString)
    htmlString = scrollEmbed(htmlString, 35)

    var trayElement = document.getElementById(tray)
    trayElement.innerHTML = htmlString
}

function bookBigPopulate(n) {
    var dataLength = bookData[n].length

    var htmlString = '';
    htmlString = appendSpacer(htmlString, 35)

    for (let i = 0; i < dataLength; i++) {
        // var bookCardHTML = `<a class="book-card clickable" target="_blank" href="${bookData[i].link}"><div class="book-card-bg ${bookData[i].id}-cover"><div class="book-card-fg"></div></div><div class="book-poster ${bookData[i].id}-cover"></div><div class="book-info"><div class="book-textbox"><p class="book-heading">${bookData[i].name}</p><p class="book-subheading">${bookData[i].author}</p></div></div></a>`
        // var bookCardHTML = `<a class="media-card clickable" target="_blank" onclick="showMediaPopup('book',${i})"><div class="media-poster book-poster image-border" style="--poster: url('media-image/books/${bookData[i].id}.${bookData[i].coverType}');"></div><div class="book-info"><div class="book-textbox"><p class="book-heading">${bookData[i].name}</p><p class="book-subheading secondary-fg">${bookData[i].author}</p></div></div></a>`
        // var bookCardHTML = `
        // <div class="media-big-card hstack content1">
        //     <a class="media-big-poster book-big-poster clickable" style="--poster: url('media-image/books/${bookData[i].id}.${bookData[i].coverType}');" target="_blank" href="${bookData[i].link}"></a>
        //     <div class="spacer-15"></div>
        //     <div class="vstack fill-parent">
        //         <div class="spacer fill-parent"></div>
        //         <div class="media-big-title">${bookData[i].name}</div>
        //         <div class="media-big-subtitle">${bookData[i].author}</div>
        //     </div>
        //     <div class="spacer"></div>
        // </div>`

        var bookCardHTML = `<a class="media-page-card book image-border clickable" style="--poster: url('media-image/books/${bookData[n][i].id}.jpg');" href="${bookData[n][i].link}"></a>`

        htmlString = `${htmlString}${bookCardHTML}`
        if (i < dataLength - 1) {
            htmlString = appendSpacer(htmlString, 15)
        }
    }

    htmlString = appendSpacer(htmlString, 35)
    htmlString = appendSpacer(htmlString, 'n')
    htmlString = `<div class="scroll margin-35">${htmlString}</div>`

    var trayElement = document.getElementById(`book-tray-${n}`)
    trayElement.innerHTML = htmlString
}

function podBigPopulate(n) {
    var dataLength = podData[n].length

    var htmlString = '';
    htmlString = appendSpacer(htmlString, 35)

    for (let i = 0; i < dataLength; i++) {
        const link = processLinkPod(podData[n][i].link)

        var podCardHTML = `<a class="media-page-card pod image-border clickable" style="--poster: url('media-image/podcasts/${podData[n][i].id}.${podData[n][i].coverType}');" href="${link}" target="_blank"></a>`

        htmlString = `${htmlString}${podCardHTML}`
        if (i < dataLength - 1) {
            htmlString = appendSpacer(htmlString, 15)
        }
    }

    htmlString = appendSpacer(htmlString, 35)
    htmlString = appendSpacer(htmlString, 'n')
    htmlString = `<div class="scroll margin-35">${htmlString}</div>`

    var trayElement = document.getElementById(`pod-tray-${n}`)
    trayElement.innerHTML = htmlString
}

function podPopulate(podData, tray) {


    var dataLength = podData.length

    var htmlString = "";
    htmlString = appendSpacer(htmlString, 35)


    for (let i = 0; i < dataLength; i++) {
        const link = processLinkPod(podData[i].link)

        // var bookCardHTML = `<a class="book-card clickable" target="_blank" href="${podData[i].link}"><div class="book-card-bg ${podData[i].id}-cover"><div class="book-card-fg"></div></div><div class="pod-poster ${podData[i].id}-cover"></div><div class="book-info"><div class="book-textbox"><p class="book-heading">${podData[i].name}</p><p class="book-subheading">${podData[i].author}</p></div></div></a>`
        // var bookCardHTML = `<a class="media-card clickable" target="_blank" onclick="showMediaPopup('pod',${i})"><div class="media-poster pod-poster image-border" style="--poster: url('media-image/podcasts/${podData[i].id}.${podData[i].coverType}');"></div><div class="book-info"><div class="book-textbox"><p class="book-heading">${podData[i].name}</p><p class="book-subheading secondary-fg">${podData[i].author}</p></div></div></a>`
        var bookCardHTML = `<a class="media-card clickable" target="_blank" href="${link}""><div class="media-poster pod-poster image-border" style="--poster: url('media-image/podcasts/${podData[i].id}.${podData[i].coverType}');"></div><div class="book-info"><div class="book-textbox"><p class="book-heading">${podData[i].name}</p><p class="book-subheading secondary-fg">${podData[i].author}</p></div></div></a>`

        htmlString = `${htmlString}${bookCardHTML}`
        if (i < dataLength - 1) {
            htmlString = appendSpacer(htmlString, 10)
        }
    }

    htmlString = appendSpacer(htmlString, 35)
    htmlString = hstackEmbed(htmlString)
    htmlString = scrollEmbed(htmlString, 35)

    var trayElement = document.getElementById(tray)
    trayElement.innerHTML = htmlString
}



const newsData = [
    {
        name: "Morning Brew",
        bg: "white",
        fg: "brew-fg",
        link: "https://www.morningbrew.com/daily/issues/latest",
    },
    {
        name: "SCMP",
        bg: "scmp-bg",
        fg: null,
        link: "https://www.scmp.com",
    },
    {
        name: "No Mercy/No Malice",
        bg: "nomercy-bg",
        fg: null,
        link: "https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fwww.profgalloway.com%2Ffeed",
    },
    {
        name: "CityLab",
        bg: "gray1",
        fg: "citylab-fg",
        link: "https://www.bloomberg.com/citylab",
    },
    {
        name: "Emerging Tech Brew",
        bg: "white",
        fg: 'techbrew-fg',
        link: "https://www.morningbrew.com/emerging-tech/issues/latest",
    },
    {
        name: "Sidekick",
        bg: "sidekick-bg",
        fg: "sidekick-fg",
        link: "https://www.morningbrew.com/sidekick/issues/latest",
    },
]

function newsPopulate(newsData) {
    var dataLength = newsData.length

    var htmlString = "";
    htmlString = appendSpacer(htmlString, 35)

    for (let i = 0; i < dataLength; i++) {

        if (newsData[i].fg) {
            var fgHTML = `<div class="news-image ${newsData[i].fg}"></div>`
        } else {
            var fgHTML = ``
        }

        var newsCardHTML = `
        <a class="news-card image-border clickable ${newsData[i].bg}" target="_blank" href="${newsData[i].link}">${fgHTML}</a>
        `

        htmlString = `${htmlString}${newsCardHTML}`
        if (i < dataLength - 1) {
            htmlString = appendSpacer(htmlString, 10)
        }
    }

    htmlString = appendSpacer(htmlString, 35)
    htmlString = appendSpacer(htmlString, 'n')
    htmlString = hstackEmbed(htmlString)
    htmlString = scrollEmbed(htmlString, 35)

    var tray = 'news-tray'
    var trayElement = document.getElementById(tray)
    trayElement.innerHTML = htmlString
}

const youtubeData = [
    {
        name: "Wendover Productions",
        bg: "wendover-bg",
        fg: null,
        link: "https://nebula.app/wendover",
    },
    {
        name: "Real Engineering",
        bg: "realeng-bg",
        fg: null,
        link: "https://nebula.app/realengineering",
    },
]

function youtubePopulate(youtubeData) {
    var dataLength = youtubeData.length

    var htmlString = "";
    htmlString = appendSpacer(htmlString, 35)

    for (let i = 0; i < dataLength; i++) {

        if (youtubeData[i].fg) {
            var fgHTML = `<div class="news-image ${youtubeData[i].fg}"></div>`
        } else {
            var fgHTML = ``
        }

        var newsCardHTML = `
        <a class="youtube-card image-border clickable ${youtubeData[i].bg}" target="_blank" href="${youtubeData[i].link}">${fgHTML}</a>
        `

        htmlString = `${htmlString}${newsCardHTML}`
        if (i < dataLength - 1) {
            htmlString = appendSpacer(htmlString, 10)
        }
    }

    htmlString = appendSpacer(htmlString, 35)
    htmlString = appendSpacer(htmlString, 'n')
    htmlString = hstackEmbed(htmlString)
    htmlString = scrollEmbed(htmlString, 35)

    var tray = 'youtube-tray'
    var trayElement = document.getElementById(tray)
    trayElement.innerHTML = htmlString
}

var sideModal = document.getElementById('side-popup-modal')

function showMediaPopup(type, n) {
    populateMediaPopup(type, n)
    sideModal.classList = 'show'
    popupAllShow()
}

function hideMediaPopup() {
    sideModal.classList = 'hide'
    popupAllHide()
}

function populateMediaPopup(type, n) {
    var mediaData;
    var mediaType;

    if (type == 'pod') {
        mediaData = podData[n]
        document.getElementById('side-popup-poster').classList = 'pod'
        mediaType = 'podcasts'
    } else if (type == 'book') {
        mediaData = bookData[n]
        document.getElementById('side-popup-poster').classList = 'book'
        mediaType = 'books'
    }

    // document.getElementById('poster').style.setProperty('--poster',`url('TV/background/${movie.id}.${movie.style.posterType}')`)


    document.getElementById('side-popup-bg').style.setProperty('--poster',`url('media-image/${mediaType}/${mediaData.id}.${mediaData.coverType}')`)
    document.getElementById('side-popup-poster').style.setProperty('--poster',`url('media-image/${mediaType}/${mediaData.id}.${mediaData.coverType}')`)


    // document.getElementById('side-popup-bg').classList = mediaData.id + '-cover'
    // document.getElementById('side-popup-poster').classList.add(mediaData.id + '-cover')
    document.getElementById('side-popup-title').innerHTML = mediaData.name
    document.getElementById('side-popup-subtitle').innerHTML = mediaData.author
    document.getElementById('side-popup-link').href = mediaData.link
}
