function mediaPopulate(){
    upNextPopulate()
    bookPopulate()
}

function upNextPopulate(){
    const upNextData = [
        {
            name: "Jojo's Bizzare Adventures",
            id: "jojo",
            link: "https://www.hulu.com/series/jojos-bizarre-adventure-3f2ffb64-2424-44a5-b229-4371dccb1d6f",
            service: "Hulu",
            description: "Animation &#149 Action &#149 Adventure &#149 4 Seasons &#149 2012 - Present",
            summary: "Jonathan Joestar, nicknamed JoJo, becomes involved in a battle against his stepbrother, Dio Brando, who is intent on taking control of the Joestar fortune. To do this, Dio uses the power of an ancient stone mask, which allows him to become a powerful vampire. The hybrid anime series takes pieces from such genres as paranormal, adventure, comedy, action and fantasy.",
            titleStyle: "tall",
        },
        {
            name: "It's Always Sunny in Philadelphia",
            id: "always",
            link: "https://www.hulu.com/series/its-always-sunny-in-philadelphia-2171423f-3326-4dfa-b193-b40494e60109",
            service: "Hulu",
            description: "Comedy &#149 14 Seasons &#149 2005 - Present",
            summary: "Four egocentric friends who run a neighborhood Irish pub in Philadelphia try to find their way through the adult world of work and relationships. Unfortunately, their warped views and precarious judgments often lead them to trouble, creating a myriad of uncomfortable situations that usually only get worse before they get better.",
            titleStyle: "tall",
        },
        {
            name: "The Grand Tour",
            id: "grandTour",
            link: "",
            service: "Prime Video",
            titleStyle: "mid",
        },
        {
            name: "What If?",
            id: "whatif",
            link: "https://www.disneyplus.com/series/what-if/7672ZVj1ZxU9",
            service: "Disney+",
            description: "Action &#149 Adventure &#149 Animation &#149 1 Season &#149 2021 - Present",
            summary: "Taking inspiration from the comic books of the same name, each episode explores a pivotal moment from the Marvel Cinematic Universe and turns it on its head, leading the audience into uncharted territory.",
            titleStyle: "mid",
        },
        {
            name: "Ted Lasso",
            id: "ted",
            link: "",
            service: "Apple TV+",
            titleStyle: "wide",
        },
        {
            name: "Rick and Morty",
            id: "rick",
            link: "",
            service: "Download",
            titleStyle: "wide",
        },
        
    ]

    movieHTML(upNextData, 1)
}

function movieHTML(data, n) {
    var dataLength = data.length

    var htmlString = "";

    for (i = 0; i < dataLength; i++) {
        var movieCardHTML = `<div class="movie-card"><div class="movie-poster ${data[i].id}-poster"><div class="movie-gradient"><div class="movie-title ${data[i].titleStyle} ${data[i].id}-title"></div></div><a class="movie-play-container" target="_blank" href="${data[i].link}"><svg class="movie-play-icon" data-bbox="15.49 8.193 132.882 147.475" viewBox="0 0 163.861 163.861" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M39.564 11.445C26.27 3.818 15.49 10.065 15.49 25.388v113.074c0 15.338 10.78 21.577 24.075 13.958l98.832-56.68c13.3-7.629 13.3-19.99 0-27.617L39.564 11.445z" xmlns="http://www.w3.org/2000/svg"></path></g></svg></a></div><div class="movie-info"><div class="movie-textbox"><p class="movie-heading">${data[i].name}</p><p class="movie-subheading">${data[i].service}</p></div><div class="movie-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384"><circle cx="192" cy="42.667" r="42.667"/><circle cx="192" cy="192" r="42.667"/><circle cx="192" cy="341.333" r="42.667"/></svg></div></div></div>`

        htmlString = `${htmlString}${movieCardHTML}`
    }

    document.getElementById("movie-tray-".concat(n)).innerHTML = htmlString
}

function bookPopulate(){
    const bookData = [
        {
            name: "No Rules Rules",
            id: "rules",
            link: "ibooks://",
            author: "Reed Hastings, Erin Meyer",
        },
        {
            name: "Never Split the Difference",
            id: "split",
            link: "ibooks://",
            author: "Chris Voss",
        },
        {
            name: "Gweilo: Memories of a Hong Kong Childhood",
            id: "gweilo",
            link: "ibooks://",
            author: "Martin Booth",
        },
        {
            name: "The Four",
            id: "four",
            link: "ibooks://",
            author: "Scott Galloway",
        },
        {
            name: "Homo Deus",
            id: "homodeus",
            link: "ibooks://",
            author: "Yuval Noah Harari",
        },
       
        
    ]

    var dataLength = bookData.length

    var htmlString = "";

    for (i = 0; i < dataLength; i++) {
        var bookCardHTML = `<a class="book-card clickable" target="_blank" href="${bookData[i].link}"><div class="book-card-bg ${bookData[i].id}-cover"><div class="book-card-fg"></div></div><div class="book-poster ${bookData[i].id}-cover"></div><div class="book-info"><div class="book-textbox"><p class="book-heading">${bookData[i].name}</p><p class="book-subheading">${bookData[i].author}</p></div></div></a>`

        htmlString = `${htmlString}${bookCardHTML}`
    }

    document.getElementById("book-tray").innerHTML = htmlString
}