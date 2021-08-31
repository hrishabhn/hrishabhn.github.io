// var userLocale;

function getUserLocale() {
    document.getElementById("district").innerHTML = '----';

    const successCallback = (position) => {
        // console.log(timeOfDay)
        // var afternoon = ;
        // var evening = (hourNow > 16) && (hourNow < 21);
        // var night = (hourNow > 20) || (hourNow < 6);
    

        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        // lat = 40.434 
        // lon = -86.925

        // console.log(lat + ", " + lon)
    
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



        const stew = (lat > 40.4246) && (lat < 40.4255) && (lon > -86.9136) && (lon < -86.9118);
        const frny = (lat > 40.4291) && (lat < 40.4299) && (lon > -86.9145) && (lon < -86.9134);
        const walc = (lat > 40.4268) && (lat < 40.4278) && (lon > -86.9136) && (lon < -86.9127);
        const rawls = (lat > 40.4234) && (lat < 40.4240) && (lon > -86.9104) && (lon < -86.9092);



        const walmart = (lat > 40.4565) && (lat < 40.4592) && (lon > -86.9352) && (lon < -86.9312);
        const zbt = (lat > 40.4337) && (lat < 40.4344) && (lon > -86.9255) && (lon < -86.9248);
        const grantStation = (lat > 40.4191) && (lat < 40.4203) && (lon > -86.9103) && (lon < -86.9096);
    
        // console.log(stew)
    
        var userLocale = "West Lafayette"
        
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
        

        if (stew) {
            userLocale = "Stewart Center"
        }
        if (frny) {
            userLocale = "Forney Hall"
        }
        if (walc) {
            userLocale = "WALC"
        }
        if (rawls) {
            userLocale = "Rawls Hall"
        }

        if (walmart) {
            userLocale = "Walmart"
        }
        if (zbt) {
            userLocale = "ZBT"
        }
        if (grantStation) {
            userLocale = "Grant Street Station"
        }






        // userLocale = "West Highway"

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
