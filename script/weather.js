async function weatherPopulate() {
    fetchCoordsWeather()
}

async function fetchCoordsWeather() {
    navigator.geolocation.getCurrentPosition((position) => { weatherPop(position) })

    // let response = await fetch(`https://hrishabhn.github.io/calendar/event${i + 1}.json`);
    // let data = JSON.parse(await response.text())
}

async function weatherPop(input) {
    const lat = input.coords.latitude
    const lon = input.coords.longitude
    const key = '2c11424ffd5a3ed7be3f73e6b9960fbe'

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
    let data = JSON.parse(await response.text())
    const temp = data.main.temp

    document.getElementById('temp').innerHTML = `${Math.round(temp)}&#0176`
}