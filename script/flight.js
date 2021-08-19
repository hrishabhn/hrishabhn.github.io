function flightPull() {
    var api = `http://api.aviationstack.com/v1/flights?access_key=d522684e79577a51d55352e99848f7f0&flight_iata=KE608`;
    fetch(api)
        .then(response => response.json())
        .then(data => {
            const flightData = {
                depCode: data["data"][0]["departure"]["iata"],
                arrCode: data["data"][0]["arrival"]["iata"],
                depTime: data["data"][0]["departure"]["estimated"],
                arrTime: data["data"][0]["arrival"]["estimated"],
                flightNo: data["data"][0]["flight"]["iata"],
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

    flightTimeProcess(flightData.depTime)
    
}

function flightTimeProcess(time) {
    // time = Date.parse(time)
    // time = moment.utc(time).format("HH:mm")
    const processedTime = new Date(time)
    result = processedTime.getHours()
    console.log(result)

}