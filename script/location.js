// var userLocale;

function getUserLocale() {
    const successCallback = (position) => {
        // console.log(timeOfDay)
        // var afternoon = ;
        // var evening = (hourNow > 16) && (hourNow < 21);
        // var night = (hourNow > 20) || (hourNow < 6);
    

        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        // lat = 22.418
        // lon = 114.206

        // console.log(lat)
        // console.log(lon)
    
        const pokFuLam = (lat > 22.252) && (lat < 22.273) && (lon > 114.121) && (lon < 114.135);
        const cyberport = (lat > 22.260) && (lat < 22.264) && (lon > 114.127) && (lon < 114.131);
        const home = (lat > 22.260) && (lat < 22.264) && (lon > 114.131) && (lon < 114.135);

        const westHighway = (lat > 22.308) && (lat < 22.37) && (lon > 113.96) && (lon < 114.165);
        const tuenMun = (lat > 22.37) && (lat < 22.41) && (lon > 113.96) && (lon < 113.985);
        const work = (lat > 22.3905) && (lat < 22.392) && (lon > 113.9695) && (lon < 113.971);
       
        const ktown = (lat > 22.279) && (lat < 22.285) && (lon > 114.125) && (lon < 114.130);
        const central = (lat > 22.281) && (lat < 22.290) && (lon > 114.156) && (lon < 114.159);
        const causeway = (lat > 22.270) && (lat < 22.283) && (lon > 114.180) && (lon < 114.190);
        const westKowloon = (lat > 22.298) && (lat < 22.308) && (lon > 114.154) && (lon < 114.165);
        const tsimShaTsui = (lat > 22.292) && (lat < 22.303) && (lon > 114.165) && (lon < 114.177);
        const cuhk = (lat > 22.410) && (lat < 22.426) && (lon > 114.200) && (lon < 114.217);
    
        const london = (lat > 51.2) && (lat < 51.7) && (lon > -0.5) && (lon < 0.3);

        // console.log(work)

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
        if (cuhk) {
            userLocale = "CUHK"
        }
        
        // userLocale = "Pok Fu Lam"

        locationBasedLoad(userLocale);

    
    
    
        // console.log(userLocale)
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

var globalLocale = null

function storeLocale(input) {
    globalLocale = input
    // console.log(globalLocale)
}
