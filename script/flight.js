function flightPull() {
    var api = `http://api.aviationstack.com/v1/flights?access_key=d522684e79577a51d55352e99848f7f0&flight_iata=KE37`;
    fetch(api)
        .then(response => response.json())
        .then(data => {
            const flightData = {
                depCode: data["data"][0]["departure"]["iata"],
                arrCode: data["data"][0]["arrival"]["iata"],
                depTime: data["data"][0]["departure"]["estimated"],
                arrTime: data["data"][0]["arrival"]["estimated"],
                flightNo: data["data"][0]["flight"]["iata"],
                depGate: data["data"][0]["departure"]["gate"],
                arrGate: data["data"][0]["arrival"]["gate"],
                depTerminal: data["data"][0]["departure"]["terminal"],
                arrTerminal: data["data"][0]["arrival"]["terminal"],
            }

            flightAPIData(flightData)
            // busAPIData(n,company,route,stop2,2,data)
        })
        // .catch(data => {
        //     console.log('nowifi')
        // })
}

function flightAPIData(flightData) {
    document.getElementById('dep-airport').innerHTML = flightData.depCode
    document.getElementById('arr-airport').innerHTML = flightData.arrCode
    document.getElementById('flight-no').innerHTML = flightData.flightNo

    if (flightData.depGate) {
        document.getElementById('dep-gate').innerHTML = 'Gate: ' + flightData.depGate
    }
    if (flightData.arrGate) {
        document.getElementById('arr-gate').innerHTML = 'Gate: ' + flightData.arrGate
    }
    document.getElementById('dep-terminal').innerHTML = 'Terminal: ' + flightData.depTerminal
    document.getElementById('arr-terminal').innerHTML = 'Terminal: ' + flightData.arrTerminal

    const depProcessed = flightTimeProcess(flightData.depTime)
    const arrProcessed = flightTimeProcess(flightData.arrTime)

    document.getElementById('dep-time').innerHTML = depProcessed
    document.getElementById('arr-time').innerHTML = arrProcessed
}

function flightTimeProcess(time) {
    // time = Date.parse(time)
    // time = moment.utc(time).format("HH:mm")
    const processedTime = new Date(time)
    const hours = processedTime.getHours() + (processedTime.getTimezoneOffset() / 60)
    const mins = processedTime.getMinutes()
    const result = hours + ':' + mins
    return result
}