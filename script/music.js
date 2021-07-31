// function albumPause() {
//     var album = document.getElementById("locale-image")
//     album.classList.toggle("locale-paused")
// }

function albumLocale(userLocale) {
    // userLocale = "Cyberport"

    var localeBlock = document.getElementById("back-block");
    var localeBack = document.getElementById("back-image");
    var localeImage = document.getElementById("locale-image");
    var albumBlock = document.getElementById("locale-block");
    var localeText = document.getElementById("locale-text")
    switch (userLocale) {
        case "Cyberport":
            localeImage.classList = "locale-load cyberport";
            localeBack.classList = "cyberport";
            break
        case "Baguio Villa":
        case "Pok Fu Lam":
            localeImage.classList = "locale-load pokfulam";
            localeBack.classList = "pokfulam";
            console.log("success");
            break
        case "West Kowloon":
            localeImage.classList = "locale-load westkowloon";
            localeBack.classList = "westkowloon";
            console.log("success");
            break
        case "Office":
        case "Tuen Mun":
            localeImage.classList = "locale-load tuenmun";
            localeBack.classList = "tuenmun";
            break
        case "Causeway Bay":
            localeImage.classList = "locale-load causeway";
            localeBack.classList = "causeway";
            break
        default:
            console.log("fail");
    }

    localeBlock.classList = "back-block-hide";
    albumBlock.classList = "locale-block-hide";
    localeText.innerHTML = userLocale
    localeText.classList = "locale-text-load"
}






// var userLocale;

function getUserLocale() {
    const successCallback = (position) => {
        // console.log(timeOfDay)
        // var afternoon = ;
        // var evening = (hourNow > 16) && (hourNow < 21);
        // var night = (hourNow > 20) || (hourNow < 6);
    

        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        // lat = 51.5
        // lon = 0

        // console.log(lat)
        // console.log(lon)
    
        const pokFuLam = (lat > 22.252) && (lat < 22.273) && (lon > 114.121) && (lon < 114.135);
        const cyberport = (lat > 22.260) && (lat < 22.264) && (lon > 114.127) && (lon < 114.131);
        const home = (lat > 22.260) && (lat < 22.264) && (lon > 114.131) && (lon < 114.135);
    
        const tuenMun = (lat > 22.37) && (lat < 22.41) && (lon > 113.96) && (lon < 113.985);
        const work = (lat > 22.3905) && (lat < 22.392) && (lon > 113.9695) && (lon < 113.971);
       
        const ktown = (lat > 22.279) && (lat < 22.285) && (lon > 114.125) && (lon < 114.130);
        const central = (lat > 22.281) && (lat < 22.290) && (lon > 114.156) && (lon < 114.159);
        const causeway = (lat > 22.270) && (lat < 22.283) && (lon > 114.180) && (lon < 114.190);
        const westKowloon = (lat > 22.298) && (lat < 22.308) && (lon > 114.154) && (lon < 114.165);
        const westHighway = (lat > 22.308) && (lat < 22.37) && (lon > 113.960) && (lon < 114.165);
        const tsimShaTsui = (lat > 22.292) && (lat < 22.303) && (lon > 114.165) && (lon < 114.177);
    
        const london = (lat > 51.2) && (lat < 51.7) && (lon > -0.5) && (lon < 0.3);


        // 22.273,114.121 top left
        // 22.252,114.135 borrom right
    
    
        var userLocale = "Hong Kong"
        
        if (london) {
            userLocale = "London (GGG Exclusive DLC)"
        }

        if (pokFuLam) {
            userLocale = "Pok Fu Lam"
        }
        if (cyberport) {
            userLocale = "Cyberport"
        }
        if (home) {
            userLocale = "Baguio Villa"
        }
    
        if (tuenMun) {
            userLocale = "Tuen Mun"
        }
        if (work) {
            userLocale = "Office"
        }
    
    
        if (ktown) {
            userLocale = "Kennedy Town"
        }
        if (central) {
            userLocale = "Central"
        }
        if (causeway) {
            userLocale = "Causeway Bay"
        }
        if (westKowloon) {
            userLocale = "West Kowloon"
        }
        if (westHighway) {
            userLocale = "West Highway"
        }
        if (tsimShaTsui) {
            userLocale = "Tsim Sha Tsui"
        }
        
        // userLocale = "West Highway"

        albumLocale(userLocale);

    
    
    
        console.log(userLocale)
        // returnUserLocale(userLocale);
    
    }
    
    if (navigator.geolocation.getCurrentPosition) {
        // console.log(navigator.geolocation.getCurrentPosition)
        // console.log('location real')
        navigator.geolocation.getCurrentPosition(successCallback);
    } else {
        userLocale = "no location"
        // console.log('location false')
        // userLocale = "Kennedy Town"
        locationBasedLoad(userLocale);
    }
}