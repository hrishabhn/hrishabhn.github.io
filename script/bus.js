function buses(userLocale) {
    busTray(userLocale)
    resetBusCards()
    // kmbWidget(1,"KMB","961","490F1A302D8C32FC",'AD97EA183A25102C')
    // kmbWidget("KMB","960","AD97EA183A25102C",2)
    // cityBusWidget("NWFB","970x","002231",3)
    // cityBusWidget("CTB","43m","002665",4)
}

function busTray(userLocale) {
    // console.log("hmm")
    var busNoTray = document.getElementById("bus-number-tray")

    const _43m = '<div id="bus-route-4" class="bus-number citybus-route" onclick="cityBusWidget(4,\'CTB\',\'43m\',\'002665\',\'001083\',\'002314\')">43m</div>'
    const _43m_pfl = '<div id="bus-route-4" class="bus-number citybus-route" onclick="cityBusWidget(4,\'CTB\',\'43m\',\'002665\')">43m</div>'
    const _43m_ktown = '<div id="bus-route-4" class="bus-number citybus-route" onclick="cityBusWidget(4,\'CTB\',\'43m\',\'001083\')">43m</div>'

    const _904nwfb = '<div id="bus-route-6" class="bus-number nwfb-route" onclick="cityBusWidget(6,\'NWFB\',\'904\',\'001629\')">904</div>'
    const _904kmb = '<div id="bus-route-7" class="bus-number kmb-route" onclick="kmbWidget(7,\'KMB\',\'904\',\'0F5CEC693FD6EB66\')">904</div>'

    const _960 = '<div id="bus-route-2" class="bus-number kmb-route" onclick="kmbWidget(2,\'KMB\',\'960\',\'AD97EA183A25102C\',\'25BC743BF6EB726E\')">960</div>'
    const _960_icc_n = '<div id="bus-route-2" class="bus-number kmb-route" onclick="kmbWidget(2,\'KMB\',\'960\',\'AD97EA183A25102C\')">960</div>'
    const _960_tm_n = '<div id="bus-route-2" class="bus-number kmb-route" onclick="kmbWidget(2,\'KMB\',\'960\',\'25BC743BF6EB726E\')">960</div>'
    
    const _961 = '<div id="bus-route-3" class="bus-number kmb-route" onclick="kmbWidget(3,\'KMB\',\'961\',\'AD97EA183A25102C\',\'490F1A302D8C32FC\',\'466111DE1A3E4656\')">961</div>'
    // const _961_N = '<div id="bus-route-3" class="bus-number kmb-route" onclick="kmbWidget(3,\'KMB\',\'961\',\'AD97EA183A25102C\')">961</div>'
    const _961_icc_n = '<div id="bus-route-3" class="bus-number kmb-route" onclick="kmbWidget(3,\'KMB\',\'961\',\'AD97EA183A25102C\')">961</div>'
    const _961_icc_s = '<div id="bus-route-3" class="bus-number kmb-route" onclick="kmbWidget(3,\'KMB\',\'961\',\'466111DE1A3E4656\')">961</div>'
    const _961_tm = '<div id="bus-route-3" class="bus-number kmb-route" onclick="kmbWidget(3,\'KMB\',\'961\',\'490F1A302D8C32FC\')">961</div>'

    const _970x = '<div id="bus-route-1" class="bus-number nwfb-route" onclick="cityBusWidget(1,\'NWFB\',\'970x\',\'002231\',\'001113\',\'001629\')">970x</div>'
    const _970x_pfl = '<div id="bus-route-1" class="bus-number nwfb-route" onclick="cityBusWidget(1,\'NWFB\',\'970x\',\'002231\',\'001113\',\'001628\')">970x</div>'
    const _970x_icc = '<div id="bus-route-1" class="bus-number nwfb-route" onclick="cityBusWidget(1,\'NWFB\',\'970x\',\'001629\')">970x</div>'
    
    const _971 =       '<div id="bus-route-5" class="bus-number nwfb-route" onclick="cityBusWidget(5,\'NWFB\',\'971\',\'001629\',\'002665\',\'001083\')">971</div>'
    const _971_icc = '<div id="bus-route-5" class="bus-number nwfb-route" onclick="cityBusWidget(5,\'NWFB\',\'971\',\'001629\')">971</div>'
    const _971_pfl =   '<div id="bus-route-5" class="bus-number nwfb-route" onclick="cityBusWidget(5,\'NWFB\',\'971\',\'002665\')">971</div>'
    const _971_ktown = '<div id="bus-route-5" class="bus-number nwfb-route" onclick="cityBusWidget(5,\'NWFB\',\'971\',\'001083\')">971</div>'
    
    

    switch (userLocale) {
            // var busOrder = _970x + _960 + _961 + _43m + _971 + _904nwfb + _904kmb;
        case "Pok Fu Lam":
        case "Baguio Villa":
            var busOrder = _970x_pfl + _971_pfl + _43m_pfl;
            break;
        case "Kennedy Town":
            var busOrder = _971_ktown + _43m_ktown;
            break;
        case "West Kowloon":
            if (timeOfDay == "morning") {
                var busOrder = _960_icc_n + _961_icc_n
            } else if ((timeOfDay == "afternoon") || (timeOfDay == "evening")){
                var busOrder = _971_icc + _970x_icc + _904nwfb + _904kmb
            } else {
                var busOrder = _960 + _961 + _971 + _904nwfb + _904kmb + _970x
            }
            break;
        case "Tuen Mun":
        case "Office":
            var busOrder = _961_tm
            break;
        case "West Highway":
            if (timeOfDay == "morning") {
                var busOrder = _960_tm_n
            } else {
                var busOrder = _961_icc_s + _971_icc + _970x_icc + _904nwfb + _904kmb
            }
            break
        case "All":
        default:
            busOrder = _43m + _904nwfb + _904kmb + _960 + _961 + _970x + _971;
            resetBusCards()

    }

    busNoTray.innerHTML = busOrder
    // console.log(busNoTray)
    
}

function resetBusCards() {
    var busIcon = document.getElementById("bus-icon")
    busIcon.classList = "bus-icon bus-icon-hide"


    var busDest1 = document.getElementById("bus-dest-1")
    busDest1.innerHTML = '--';
    var busDest2 = document.getElementById("bus-dest-2")
    busDest2.innerHTML = '--';
    var busDest3 = document.getElementById("bus-dest-3")
    busDest3.innerHTML = '--';

    var busETA1 = document.getElementById("bus-eta-1")
    busETA1.innerHTML = '--';
    var busETA2 = document.getElementById("bus-eta-2")
    busETA2.innerHTML = '--';
    var busETA3 = document.getElementById("bus-eta-3")
    busETA3.innerHTML = '--';

    var busStop1 = document.getElementById("bus-stop-1")
    busStop1.innerHTML = '--';
    var busStop2 = document.getElementById("bus-stop-2")
    busStop2.innerHTML = '--';
    var busStop3 = document.getElementById("bus-stop-3")
    busStop3.innerHTML = '--';

    document.getElementById("bus-card-1").classList.add("hidden-always")
    document.getElementById("bus-card-2").classList.add("hidden-always")
    document.getElementById("bus-card-3").classList.add("hidden-always")

}

function buttonSelect(n) {
    calendarDate();

    resetBusCards();

    

    // for (i = 1, )

    var busButton1 = document.getElementById("bus-route-1")
    var busButton2 = document.getElementById("bus-route-2")
    var busButton3 = document.getElementById("bus-route-3")
    var busButton4 = document.getElementById("bus-route-4")
    var busButton5 = document.getElementById("bus-route-5")
    var busButton6 = document.getElementById("bus-route-6")
    var busButton7 = document.getElementById("bus-route-7")
    // console.log(busButton4)

    if (busButton1) {
        busButton1.classList.remove("bus-current");
    }
    if (busButton2) {
        busButton2.classList.remove("bus-current");
    }
    if (busButton3) {
        busButton3.classList.remove("bus-current");
    }
    if (busButton4) {
        busButton4.classList.remove("bus-current");
    }
    if (busButton5) {
        busButton5.classList.remove("bus-current");
    }
    if (busButton6) {
        busButton6.classList.remove("bus-current");
    }
    if (busButton7) {
        busButton7.classList.remove("bus-current");
    }


    // busButton4.classList.remove("bus-current");
    // busButton5.classList.remove("bus-current");
    // busButton6.classList.remove("bus-current");
    // busButton7.classList.remove("bus-current");


    var busCard1 = document.getElementById("bus-card-1")
    busCard1.classList = "bus-card"

    var busCard2 = document.getElementById("bus-card-2")
    busCard2.classList = "bus-card"

    var busCard3 = document.getElementById("bus-card-3")
    busCard3.classList = "bus-card"





    switch (n) {
        case 1:
            busButton1.classList.add("bus-current");
            break;
        case 2:
            busButton2.classList.add("bus-current");
            break;
        case 3:
            busButton3.classList.add("bus-current");
            break;
        case 4:
            busButton4.classList.add("bus-current");
            break;
        case 5:
            busButton5.classList.add("bus-current");
            break;
        case 6:
            busButton6.classList.add("bus-current");
            break;
        case 7:
            busButton7.classList.add("bus-current");
            break;
    }


    // busButton1.classList = "bus-number kmb-route bus-current"

}

function kmbWidget(n,company,route,stop1,stop2,stop3) {
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
        document.getElementById("bus-card-2").classList.add("hidden-always")
    }

    if (stop3) {
        var api = `https://data.etabus.gov.hk/v1/transport/kmb/eta/${stop3}/${route}/1`;
    fetch(api)
        .then(response => response.json())
        .then(data => {
            busAPIData(n,company,route,stop3,3,data)
        })
    } else {
        document.getElementById("bus-card-3").classList.add("hidden-always")
    }

    
}

function cityBusWidget(n,company,route,stop1,stop2,stop3) {
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
        document.getElementById("bus-card-2").classList.add("hidden-always")
    }

    if (stop3) {
        var api = `https://rt.data.gov.hk/v1/transport/citybus-nwfb/eta/${company}/${stop3}/${route}`;
    fetch(api)
        .then(response => response.json())
        .then(data => {
            busAPIData(n,company,route,stop3,3,data)
        })
    } else {
        document.getElementById("bus-card-3").classList.add("hidden-always")
    }
}

function busAPIData(n,company,route,stop,stopN,data) {
    // console.log(data)

    var eta1 = null;
    var eta2 = null;
    var eta3 = null;

    // var eta1 = Date.parse(data['data'][0]['eta']);
    // eta1 = processETA(eta1);

    if (data['data'][0]) {
        var eta1 = Date.parse(data['data'][0]['eta']);
        eta1 = processETA(eta1);
        var dest = data['data'][0]['dest_en'];
    }
    if (data['data'][1]) {
        var eta2 = Date.parse(data['data'][1]['eta']);
        eta2 = processETA(eta2);
    }
    if (data['data'][2]) {
        var eta3 = Date.parse(data['data'][2]['eta']);
        eta3 = processETA(eta3);
    }

    

    switch(stop) {
        case "490F1A302D8C32FC":
            stop = "Tuen Mun Fire Station"
            break
        case "AD97EA183A25102C":
        case "0F5CEC693FD6EB66":
        case "466111DE1A3E4656":
        case "001629":
        case "001628":
            stop = "Western Harbour Tunnel"
            break
        case "25BC743BF6EB726E":
            stop = "Tuen Mun Town Plaza"
            break
        case "002665":
        case "002314":
            stop = "Lower Baguio"
            break
        case "002231":
            stop = "Queen Mary Hospital"
            break
        case "001113":
            stop = "HKU MTR Station"
            break
        case "001083":
            stop = "Sands Street"
            break
    }

    switch(dest) {
        case "WAN CHAI (HKCECE)":
            dest = "Wan Chai"
            break
        case "TUEN MUN (KIN SANG ESTATE)":
        case "TUEN MUN (SHAN KING ESTATE)":
            dest = "Tuen Mun"
            break
        case "Cheung Sha Wan (Kom Tsun Street)":
        case "Hoi Lai Estate":
            dest = "Kowloon"
            break
        case "Shek Pai Wan":
        case "Tin Wan Estate":
            dest = "Aberdeen"
            break
        case "KENNEDY TOWN (BELCHER BAY)":
        case "Kennedy Town (Belcher Bay) ":
        case "Shek Tong Tsui":
            dest = "Kennedy Town"
            break
    }

    // console.log('\''+ dest + '\'')

    if (dest) {
        dest = "To: " + dest;
    }

    busETAPopulate(n,company,route,stop,stopN,eta1,eta2,eta3,dest)

    // if (stopN == 1) {
    // }
    // if (stopN == 2) {
    //     busETAPopulate2(n,company,route,stop,eta1,eta2,eta3,dest)
    // }
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

function busETAPopulate(n,company,route,stop,stopN,eta1,eta2,eta3,dest) {
    // console.log(dest)
    // var busCard = document.getElementById("bus-card-".concat(n))
    // busCard.classList = "bus-info-card kmb"

    if ((!dest) || (!eta1)) {
        dest = "Last Bus Departed"
        eta1 = null;
        console.log(eta1)

        // busCard.classList = "hidden-always"
    }

    // console.log(dest)


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

    switch (stopN) {
        case 1:
            var busDest = document.getElementById("bus-dest-1")
            var busStop = document.getElementById("bus-stop-1")
            var busETA = document.getElementById("bus-eta-1")
            break;
        case 2:
            var busDest = document.getElementById("bus-dest-2")
            var busStop = document.getElementById("bus-stop-2")
            var busETA = document.getElementById("bus-eta-2")
            break;
        case 3:
            var busDest = document.getElementById("bus-dest-3")
            var busStop = document.getElementById("bus-stop-3")
            var busETA = document.getElementById("bus-eta-3")
            break;

    }

    var busIcon = document.getElementById("bus-icon")
    busIcon.classList = ("bus-icon bus-icon-" + company)
    

    // var busRoute = document.getElementById("bus-route-".concat(n))
    // busRoute.innerHTML = route;
    // busRoute.classList = numberClass;



    busDest.innerHTML = dest;
    busETA.innerHTML = etaAll;
    busStop.innerHTML = stop;
}


var busModal = document.getElementById("bus-popup-modal");
var busBlur = document.getElementById("bus-blur");
var bgBlur = document.getElementById("background-blur");

function popupBusShow(){
//   bgBlur.className = "background-blur background-blur-show";
  busBlur.className = "bus-blur bus-blur-show";
  busModal.className = "modal bus-popup-open";
}

function popupBusHide(){
//   bgBlur.className = "background-blur background-blur-hide";
  busBlur.className = "bus-blur bus-blur-hide";
  busModal.className = "modal bus-popup-closed";
}
