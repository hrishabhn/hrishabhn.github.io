function buses() {
    kmbWidget(1,"KMB","961","490F1A302D8C32FC",'AD97EA183A25102C')
    // kmbWidget("KMB","960","AD97EA183A25102C",2)
    // cityBusWidget("NWFB","970x","002231",3)
    // cityBusWidget("CTB","43m","002665",4)
}

function buttonSelect(n) {
    calendarDate();

    var busDest1 = document.getElementById("bus-dest-1")
    busDest1.innerHTML = '--';

    var busETA1 = document.getElementById("bus-eta-1")
    busETA1.innerHTML = '--';

    var busStop1 = document.getElementById("bus-stop-1")
    busStop1.innerHTML = '--';

    var busDest2 = document.getElementById("bus-dest-2")
    busDest2.innerHTML = '--';

    var busETA2 = document.getElementById("bus-eta-2")
    busETA2.innerHTML = '--';

    var busStop2 = document.getElementById("bus-stop-2")
    busStop2.innerHTML = '--';

    var busButton1 = document.getElementById("bus-route-1")
    var busButton2 = document.getElementById("bus-route-2")
    var busButton3 = document.getElementById("bus-route-3")
    var busButton4 = document.getElementById("bus-route-4")
    var busButton5 = document.getElementById("bus-route-5")
    // console.log(busButton4)

    busButton1.classList = "bus-number kmb-route";
    busButton2.classList = "bus-number kmb-route";
    busButton3.classList = "bus-number nwfb-route";
    busButton4.classList = "bus-number citybus-route";
    busButton5.classList = "bus-number nwfb-route";

    var busCard1 = document.getElementById("bus-card-1")
    busCard1.classList = ""

    var busCard2 = document.getElementById("bus-card-2")
    busCard2.classList = ""





    switch (n) {
        case 1:
            busButton1.classList = "bus-number kmb-route bus-current";
            break;
        case 2:
            busButton2.classList = "bus-number kmb-route bus-current"
            break;
        case 3:
            busButton3.classList = "bus-number nwfb-route bus-current"
            break;
        case 4:
            busButton4.classList = "bus-number citybus-route bus-current"
            break;
        case 5:
            busButton5.classList = "bus-number nwfb-route bus-current"
            break;
    }


    // busButton1.classList = "bus-number kmb-route bus-current"

}

function kmbWidget(n,company,route,stop1,stop2) {
    // var api = `https://data.etabus.gov.hk/v1/transport/kmb/stop/${stop}`;
    
    buttonSelect(n)
    var api = `https://data.etabus.gov.hk/v1/transport/kmb/eta/${stop1}/${route}/1`;
    fetch(api)
        .then(response => response.json())
        .then(data => {
            busAPIData(n,company,route,stop1,1,data)
        })

    // console.log(stop2)

    if (stop2) {
        var api = `https://data.etabus.gov.hk/v1/transport/kmb/eta/${stop2}/${route}/1`;
    fetch(api)
        .then(response => response.json())
        .then(data => {
            busAPIData(n,company,route,stop2,2,data)
        })
    } else {
        document.getElementById("bus-card-2").classList = "hidden-always"
    }

    
}


function cityBusWidget(n,company,route,stop1,stop2) {
    // var api = `https://rt.data.gov.hk/v1/transport/citybus-nwfb/route-stop/CTB/1/inbound`;
    // var api = `https://rt.data.gov.hk/v1/transport/citybus-nwfb/eta/NWFB/002236/970x`;

    // get bus stop list
    // var api = `https://rt.data.gov.hk/v1/transport/citybus-nwfb/route-stop/NWFB/970x/outbound`;

    // check bus stop no
    // var api = `https://rt.data.gov.hk/v1/transport/citybus-nwfb/stop/002231`;
    // var api = `https://rt.data.gov.hk/v1/transport/citybus-nwfb/stop/002236`;
    // var api = `https://rt.data.gov.hk/v1/transport/citybus-nwfb/stop/002314`;
    // var api = `https://rt.data.gov.hk/v1/transport/citybus-nwfb/route-stop/${company}/${route}/${direction}`;

    buttonSelect(n)
    var api = `https://rt.data.gov.hk/v1/transport/citybus-nwfb/eta/${company}/${stop1}/${route}`;
    fetch(api)
        .then(response => response.json())
        .then(data => {
            busAPIData(n,company,route,stop1,1,data)
        })

    // fetch(api)
    //     .then(response => response.json())
    //     .then(data => {
    //         busAPIData(n,company,route,stop2,2,data)
    //     })


    if (stop2) {
    var api = `https://rt.data.gov.hk/v1/transport/citybus-nwfb/eta/${company}/${stop2}/${route}`;
    fetch(api)
        .then(response => response.json())
        .then(data => {
            busAPIData(n,company,route,stop2,2,data)
        })
    } else {
        document.getElementById("bus-card-2").classList = "hidden-always"
    }
}

function busAPIData(n,company,route,stop,stopN,data) {
    // console.log(data)

    var eta1 = null;
    var eta2 = null;
    var eta3 = null;

    var eta1 = Date.parse(data['data'][0]['eta']);
    eta1 = processETA(eta1);


    if (data['data'][1]) {
        var eta2 = Date.parse(data['data'][1]['eta']);
        eta2 = processETA(eta2);
    }
    if (data['data'][2]) {
        var eta3 = Date.parse(data['data'][2]['eta']);
        eta3 = processETA(eta3);
    }

    var dest = data['data'][0]['dest_en'];

    switch(stop) {
        case "490F1A302D8C32FC":
            stop = "Tuen Mun Fire Station"
            break
        case "AD97EA183A25102C":
            stop = "Western Harbour Tunnel"
            break
        case "002665":
            stop = "Lower Baguio"
            break
        case "002231":
            stop = "Queen Mary Hospital"
            break
        case "001629":
            stop = "Western Harbour Tunnel"
            break
    }

    switch(dest) {
        case "WAN CHAI (HKCECE)":
            dest = "Wan Chai"
            break
        case "TUEN MUN (KIN SANG ESTATE)":
            dest = "Tuen Mun"
            break
        case "TUEN MUN (SHAN KING ESTATE)":
            dest = "Tuen Mun"
            break
        case "Cheung Sha Wan (Kom Tsun Street)":
            dest = "Cheung Sha Wan"
            break
        case "Shek Pai Wan":
            dest = "Aberdeen"
            break
    }

    if (stopN == 1) {
        busETAPopulate1(n,company,route,stop,eta1,eta2,eta3,dest)
    }
    if (stopN == 2) {
        busETAPopulate2(n,company,route,stop,eta1,eta2,eta3,dest)
    }
}




function processETA(eta) {    
    eta = eta - fullDate;
    eta = eta / 60000;
    eta = Math.round(eta);

    // console.log(eta)

    if (eta < 1) {
        eta = "Now";
    }

    if (eta < 0) {
        eta = "-"
    }

    return eta;
}

function busETAPopulate1(n,company,route,stop,eta1,eta2,eta3,dest) {
    // console.log(dest)
    // var busCard = document.getElementById("bus-card-".concat(n))
    // busCard.classList = "bus-info-card kmb"

    if (!eta1) {
        eta1 = "Last Bus Departed"
        // busCard.classList = "hidden-always"
    }

    etaAll = eta1
    
    if (eta2) {
        etaAll = etaAll + ', ' + eta2;
    }
    if (eta3) {
        etaAll = etaAll + ', ' + eta3;
    }

    switch (company) {
        case "KMB":
            var numberClass = "bus-number kmb-route";
            break;
        case "CTB":
            var numberClass = "bus-number citybus-route";
            break;
        case "NWFB":
            var numberClass = "bus-number nwfb-route";
            break;
        default:
            var numberClass = "bus-number";

    }

    

    // var busRoute = document.getElementById("bus-route-".concat(n))
    // busRoute.innerHTML = route;
    // busRoute.classList = numberClass;
    var busDest1 = document.getElementById("bus-dest-1")
    busDest1.innerHTML = ("To: ").concat(dest);

    var busETA1 = document.getElementById("bus-eta-1")
    busETA1.innerHTML = etaAll;

    var busStop1 = document.getElementById("bus-stop-1")
    busStop1.innerHTML = stop;
}

function busETAPopulate2(n,company,route,stop,eta1,eta2,eta3,dest) {
    // console.log(dest)
    // var busCard = document.getElementById("bus-card-".concat(n))
    // busCard.classList = "bus-info-card kmb"

    if (!eta1) {
        eta1 = "Last Bus Departed"
        // busCard.classList = "hidden-always"
    }

    etaAll = eta1
    
    if (eta2) {
        etaAll = etaAll + ', ' + eta2;
    }
    if (eta3) {
        etaAll = etaAll + ', ' + eta3;
    }

    switch (company) {
        case "KMB":
            var numberClass = "bus-number kmb-route";
            break;
        case "CTB":
            var numberClass = "bus-number citybus-route";
            break;
        case "NWFB":
            var numberClass = "bus-number nwfb-route";
            break;
        default:
            var numberClass = "bus-number";

    }

    

    // var busRoute = document.getElementById("bus-route-".concat(n))
    // busRoute.innerHTML = route;
    // busRoute.classList = numberClass;
    var busDest2 = document.getElementById("bus-dest-2")
    busDest2.innerHTML = ("To: ").concat(dest);

    var busETA2 = document.getElementById("bus-eta-2")
    busETA2.innerHTML = etaAll;

    var busStop2 = document.getElementById("bus-stop-2")
    busStop2.innerHTML = stop;
}


// function showWidgets(){
//     console.log("bruh")
//     var widget1 = document.getElementById("weather-widget");
//     var widget2 = document.getElementById("cal-widget");
//     console.log("bruh")

//     widget1.classList = "widget-container";
//     widget2.classList = "widget-container";
//     console.log("bruh")

// }