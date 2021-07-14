function buses() {
    kmbWidget("961","490F1A302D8C32FC",1)
    kmbWidget("960","AD97EA183A25102C",2)
    cityBusWidget("NWFB","970x","002231",3)
    cityBusWidget("CTB","43m","002665",4)
}

function kmbWidget(route,stop,n) {
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
            busETAPopulate(route,stop,n,eta)
        })
}


function cityBusWidget(company,route,stop,n) {
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

            busETAPopulate(route,stop,n,eta)
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

function busETAPopulate(route,stop,n,eta) {
    // console.log(eta)

    if (!eta) {
        var busCard = document.getElementById("bus-card-".concat(n))
        busCard.classList = "hidden-always"
    }



    var busRoute = document.getElementById("bus-route-".concat(n))
    busRoute.innerHTML = route;


    var busETA = document.getElementById("bus-eta-".concat(n))
    busETA.innerHTML = eta;

    var busStop = document.getElementById("bus-stop-".concat(n))
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