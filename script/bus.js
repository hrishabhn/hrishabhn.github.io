function buses() {
    kmbWidget("KMB","961","490F1A302D8C32FC",1)
    // kmbWidget("KMB","960","AD97EA183A25102C",2)
    // cityBusWidget("NWFB","970x","002231",3)
    // cityBusWidget("CTB","43m","002665",4)
}

function buttonSelect(n) {
    var busButton1 = document.getElementById("bus-route-1")
    var busButton2 = document.getElementById("bus-route-2")
    var busButton3 = document.getElementById("bus-route-3")
    var busButton4 = document.getElementById("bus-route-4")
    // console.log(busButton4)

    busButton1.classList = "bus-number kmb-route";
    busButton2.classList = "bus-number kmb-route";
    busButton3.classList = "bus-number nwfb-route";
    busButton4.classList = "bus-number citybus-route";







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
            // console.log('huh')
            break;
    }


    // busButton1.classList = "bus-number kmb-route bus-current"

}

function kmbWidget(company,route,stop,n) {
    buttonSelect(n)

    // var api = `https://data.etabus.gov.hk/v1/transport/kmb/stop/${stop}`;
    // fetch(api)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         stop_1 = data['data']['name_en'];
    //         // busETAPopulate(eta_1,1)
    //     })

    var api = `https://data.etabus.gov.hk/v1/transport/kmb/eta/${stop}/${route}/1`;
    fetch(api)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            // console.log(data['data'][0]['eta'])
            var eta = Date.parse(data['data'][0]['eta']);

            
            // console.log(eta)
            // if (!eta) {
            //     console.log("rip")
            // } else {
            //     console.log("norip")
            // }
            // console.log(eta)

            eta = processETA(eta);

            // if (!eta) {
            //     eta = "-";
            //     display = "hidden-always"
            //     console.log("idk man")
            // }

            switch(stop) {
                case "490F1A302D8C32FC":
                    stop = "Tuen Mun Fire Station"
                    break
                case "AD97EA183A25102C":
                    stop = "Western Harbour Tunnel"
                    break
            }

            // console.log(eta)
            busETAPopulate(company,route,stop,n,eta)
        })
}


function cityBusWidget(company,route,stop,n) {
    buttonSelect(n)

    // var api = `https://rt.data.gov.hk/v1/transport/citybus-nwfb/route-stop/CTB/1/inbound`;
    // var api = `https://rt.data.gov.hk/v1/transport/citybus-nwfb/eta/NWFB/002236/970x`;

    // get bus stop list
    // var api = `https://rt.data.gov.hk/v1/transport/citybus-nwfb/route-stop/NWFB/970x/outbound`;

    // check bus stop no
    // var api = `https://rt.data.gov.hk/v1/transport/citybus-nwfb/stop/002231`;
    // var api = `https://rt.data.gov.hk/v1/transport/citybus-nwfb/stop/002236`;
    // var api = `https://rt.data.gov.hk/v1/transport/citybus-nwfb/stop/002314`;
    // var api = `https://rt.data.gov.hk/v1/transport/citybus-nwfb/route-stop/${company}/${route}/${direction}`;

    var api = `https://rt.data.gov.hk/v1/transport/citybus-nwfb/eta/${company}/${stop}/${route}`;
    fetch(api)
        .then(response => response.json())
        .then(data => {
            // console.log(data)

            var eta = Date.parse(data['data'][0]['eta']);
            eta = processETA(eta);
            // eta = eta - fullDate;
            // console.log(eta)



            switch(stop) {
                case "002665":
                    stop = "Lower Baguio"
                    break
                case "002231":
                    stop = "Queen Mary Hospital"
                    break
            }

            busETAPopulate(company,route,stop,n,eta)
        })
}




function processETA(eta) {
    eta = eta - fullDate;
    eta = eta / 60000;
    eta = Math.round(eta);

    if (eta < 1) {
        eta = "Now";
    }

    if (eta < 0) {
        eta = "-"
    }

    return eta;
}

function busETAPopulate(company,route,stop,n,eta) {
    // console.log(eta)
    var busCard = document.getElementById("bus-card-".concat(n))
    // busCard.classList = "bus-info-card kmb"

    if (!eta) {
        busCard.classList = "hidden-always"
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

    switch(stop) {
        case "002665":
            stop = "Lower Baguio"
            break
        case "002231":
            stop = "Queen Mary Hospital"
            break
    }

    // var busRoute = document.getElementById("bus-route-".concat(n))
    // busRoute.innerHTML = route;
    // busRoute.classList = numberClass;


    var busETA = document.getElementById("bus-eta")
    busETA.innerHTML = eta;

    var busStop = document.getElementById("bus-stop")
    busStop.innerHTML = stop;
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