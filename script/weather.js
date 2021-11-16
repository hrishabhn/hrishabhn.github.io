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
    const icon = weatherIcon(data.weather[0].icon)
    // console.log(icon)

    document.getElementById('temp').innerHTML = `${Math.round(temp)}&#0176`
}

function weatherIcon(code) {
    var svg



    // console.log(code)
    


    switch (code) {
        case '01d':
            svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 26 26"><circle cx="15" cy="15" r="6"/><path d="M15 6a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zm0 22a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zM5 16H3a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zm22 0h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zM6.51 24.49a1 1 0 0 1-.7-.3 1 1 0 0 1 0-1.41l1.41-1.42a1 1 0 0 1 1.42 1.42l-1.42 1.41a1 1 0 0 1-.71.3zM22.07 8.93a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42l1.42-1.41a1 1 0 0 1 1.41 1.41l-1.41 1.42a1 1 0 0 1-.71.29zm1.42 15.56a1 1 0 0 1-.71-.3l-1.42-1.41a1 1 0 0 1 1.42-1.42l1.41 1.42a1 1 0 0 1 0 1.41 1 1 0 0 1-.7.3zM7.93 8.93a1 1 0 0 1-.71-.29L5.81 7.22a1 1 0 0 1 1.41-1.41l1.42 1.41a1 1 0 0 1 0 1.42 1 1 0 0 1-.71.29z"/></svg>'
            break
        case '01n':
            svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M18.984375-.01367188A1.0001 1.0001 0 0 0 18 1v1h-1a1.0001 1.0001 0 1 0 0 2h1v1a1.0001 1.0001 0 1 0 2 0V4h1a1.0001 1.0001 0 1 0 0-2h-1V1a1.0001 1.0001 0 0 0-1.015625-1.01367188zm-6.59375 3.30664068C7.019625 4.4859687 3 9.27 3 15c0 6.627 5.373 12 12 12 5.73 0 10.514031-4.019625 11.707031-9.390625C25.171031 18.489375 23.397 19 21.5 19 15.701 19 11 14.299 11 8.5c0-1.897.510625-3.6710312 1.390625-5.2070312zM25 7c-.552 0-1 .448-1 1v1c0 .552-.448 1-1 1h-1c-.552 0-1 .448-1 1s.448 1 1 1h1c.552 0 1 .448 1 1v1c0 .552.448 1 1 1s1-.448 1-1v-1c0-.552.448-1 1-1h1c.552 0 1-.448 1-1s-.448-1-1-1h-1c-.552 0-1-.448-1-1V8c0-.552-.448-1-1-1z"/></svg>'
            break
        case '02d':
            svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M8.984375 1.9863281A1.0001 1.0001 0 0 0 8 3v1a1.0001 1.0001 0 1 0 2 0V3a1.0001 1.0001 0 0 0-1.015625-1.0136719zM3.3320312 4.3320312a1.0001 1.0001 0 0 0-.6953124 1.71875l.7070312.7070313A1.0001 1.0001 0 1 0 4.7578125 5.34375l-.7070313-.7070312a1.0001 1.0001 0 0 0-.71875-.3046876zm11.3046878.0019532a1.0001 1.0001 0 0 0-.6875.3027344l-.707031.7070312a1.0001 1.0001 0 0 0 .615234 1.71875 1.0001 1.0001 0 0 0 .101562.0019531 1.0001 1.0001 0 0 0 .697266-.3066406l.707031-.7070313a1.0001 1.0001 0 0 0-.726562-1.7167968zM9 7c-2.209 0-4 1.791-4 4 0 1.903 1.3313281 3.488578 3.1113281 3.892578 1.049-1.573 2.7644689-2.634937 4.7304689-2.835937C12.934797 11.718641 13 11.368 13 11c0-2.209-1.791-4-4-4zm-8 3a1.0001 1.0001 0 1 0 0 2h1a1.0001 1.0001 0 1 0 0-2H1zm19.5 1a6.5 6.5 0 0 0-5.607422 3.224609A4.5 4.5 0 0 0 13.5 14a4.5 4.5 0 0 0-4.4882812 4.259766A4.5 4.5 0 0 0 6 22.5a4.5 4.5 0 0 0 4.5 4.5h15a4.5 4.5 0 0 0 4.5-4.5 4.5 4.5 0 0 0-3.046875-4.253906A6.5 6.5 0 0 0 27 17.5a6.5 6.5 0 0 0-6.5-6.5zM4.03125 14.939453a1.0001 1.0001 0 0 0-.6875.302735l-.7070312.707031a1.0001 1.0001 0 1 0 1.4140624 1.414062l.7070313-.707031a1.0001 1.0001 0 0 0-.7265625-1.716797z"/></svg>'
            break
        case '02n':
            svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 0.73597693 25.01425171 25.01425171"><path d="M21.984375 2.4863281A1.0001 1.0001 0 0 0 21 3.5V4h-.5a1.0001 1.0001 0 1 0 0 2h.5v.5a1.0001 1.0001 0 1 0 2 0V6h.5a1.0001 1.0001 0 1 0 0-2H23v-.5a1.0001 1.0001 0 0 0-1.015625-1.0136719zM8.5136719 6.046875a1.0001 1.0001 0 0 0-.0800781.0039062C5.3980951 6.3391319 3 8.8892308 3 12c0 1.574112.6175159 3.00727 1.6171875 4.080078C3.6339019 16.899532 3 18.11811 3 19.5 3 21.985 5.015 24 7.5 24h15c2.485 0 4.5-2.015 4.5-4.5 0-1.965-1.268438-3.618422-3.023438-4.232422C23.853562 12.892578 21.906 11 19.5 11c-.486 0-.944812.096281-1.382812.238281C16.991187 9.3032812 14.9 8 12.5 8c-1.290021 0-2.488548.3801109-3.4980469 1.0292969C9.0018572 9.019295 9 9.0100264 9 9c0-.5241267.1462539-1.010175.4003906-1.4609375a1.0001 1.0001 0 0 0-.8867187-1.4921875zM25.984375 7.9863281A1.0001 1.0001 0 0 0 25 9a1.0001 1.0001 0 1 0 0 2 1.0001 1.0001 0 1 0 2 0 1.0001 1.0001 0 1 0 0-2 1.0001 1.0001 0 0 0-1.015625-1.0136719zm-18.8476562.5078125C7.1156199 8.674507 7 8.8132397 7 9c0 2.749516 2.2504839 5 5 5 .18676 0 .325493-.11562.505859-.136719C11.84329 15.131864 10.539523 16 9 16c-2.2203746 0-4-1.779625-4-4 0-1.539523.8681356-2.8432898 2.1367188-3.5058594z"></path></svg>'
            break
        case '03d':
        case '03n':
        case '04d':
        case '04n':
            svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M18 5a8 8 0 0 0-7.121094 4.3691406A5 5 0 0 0 9 9a5 5 0 0 0-4.9492188 4.333984A6 6 0 0 0 0 19a6 6 0 0 0 6 6h18a6 6 0 0 0 6-6 6 6 0 0 0-4.017578-5.654297A8 8 0 0 0 26 13a8 8 0 0 0-8-8z"/></svg>'
            break
        case '09d':
        case '09n':
        case '10d':
        case '10n':
            svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 26 26"><path d="M17.5 3c-2.4 0-4.491188 1.3032813-5.617188 3.2382812C11.444813 6.0962813 10.986 6 10.5 6c-2.33 0-4.222125 1.777875-4.453125 4.046875C3.777875 10.277875 2 12.17 2 14.5 2 16.985 4.015 19 6.5 19h17c2.485 0 4.5-2.015 4.5-4.5 0-2.323-1.767344-4.212172-4.027344-4.451172C23.987656 9.8678281 24 9.685 24 9.5 24 5.91 21.09 3 17.5 3zM7.984375 20.986328A1.0001 1.0001 0 0 0 7 22v1a1.0001 1.0001 0 1 0 2 0v-1a1.0001 1.0001 0 0 0-1.015625-1.013672zm10 0A1.0001 1.0001 0 0 0 17 22v1a1.0001 1.0001 0 1 0 2 0v-1a1.0001 1.0001 0 0 0-1.015625-1.013672zm-5 2A1.0001 1.0001 0 0 0 12 24v1a1.0001 1.0001 0 1 0 2 0v-1a1.0001 1.0001 0 0 0-1.015625-1.013672zm10 0A1.0001 1.0001 0 0 0 22 24v1a1.0001 1.0001 0 1 0 2 0v-1a1.0001 1.0001 0 0 0-1.015625-1.013672z"></path></svg>'
            break
        case '11d':
        case '11n':
            svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 26 26"><path d="M17.5 3c-2.4 0-4.491188 1.3032813-5.617188 3.2382812C11.444813 6.0962813 10.986 6 10.5 6c-2.33 0-4.222125 1.777875-4.453125 4.046875C3.777875 10.277875 2 12.17 2 14.5 2 16.985 4.015 19 6.5 19h4.351562l2.351563-5.488281c.396-.919 1.295969-1.513672 2.292969-1.513672.172 0 .344765.018734.509765.052734C17.160859 12.289781 18 13.32 18 14.5V17h.5c.847 0 1.629031.422187 2.082031 1.117188.18.271.284656.572812.347657.882812H23.5c2.485 0 4.5-2.015 4.5-4.5 0-2.323-1.767344-4.212172-4.027344-4.451172C23.987656 9.8678281 24 9.685 24 9.5 24 5.91 21.09 3 17.5 3zm-2.074219 11.003906c-.169359.024281-.316219.135328-.386719.298828l-3 7c-.064999.155-.050031.331657.042969.472657.092.14.249969.224609.417969.224609H15v4.5c0 .237.166437.442234.398438.490234C15.433437 26.997234 15.467 27 15.5 27c.197 0 .380937-.115734.460938-.302734l3-7c.064999-.155.050031-.332657-.042969-.472657C18.825969 19.083609 18.668 19 18.5 19H16v-4.5c0-.237-.166437-.442234-.398438-.490234-.05975-.0125-.119328-.013954-.175781-.00586zm-9.441406 6.982422A1.0001 1.0001 0 0 0 5 22v1a1.0001 1.0001 0 1 0 2 0v-1a1.0001 1.0001 0 0 0-1.015625-1.013672zm18 2A1.0001 1.0001 0 0 0 23 24v1a1.0001 1.0001 0 1 0 2 0v-1a1.0001 1.0001 0 0 0-1.015625-1.013672z"></path></svg>'
            break
        case '13d':
        case '13n':
            svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M24.970703-.02734375A2.0002 2.0002 0 0 0 23 2v4.171875L21.109375 4.28125a2.0002 2.0002 0 0 0-1.435547-.6074219A2.0002 2.0002 0 0 0 18.28125 7.109375L23 11.828125v9.707031l-8.40625-4.851562-1.732422-6.464844a2.0002 2.0002 0 0 0-1.892578-1.5097656 2.0002 2.0002 0 0 0-1.9707031 2.5449216l.6953125 2.59961-3.6328125-2.097657a2.0002 2.0002 0 0 0-.9492188-.28125 2.0002 2.0002 0 0 0-1.0507812 3.746094l3.6328125 2.097656-2.5703125.6875a2.0002 2.0002 0 1 0 1.0351562 3.863282l6.4335939-1.722657 8.429687 4.865235-8.414062 4.845703-6.3984376-1.712891a2.0002 2.0002 0 0 0-.5917969-.076172 2.0002 2.0002 0 0 0-.4433594 3.939453l2.5273438.675782L4.0625 34.779297a2.0002 2.0002 0 1 0 1.9960938 3.466797l3.6328124-2.09375-.6699218 2.505859a2.000724 2.000724 0 1 0 3.8652346 1.035156l1.703125-6.361328L23 28.488281v9.683594l-4.679688 4.679687a2.0002 2.0002 0 1 0 2.828126 2.828126L23 43.828125V48a2.0002 2.0002 0 1 0 4 0v-4.171875l1.875 1.875A2.0002 2.0002 0 1 0 31.703125 42.875L27 38.171875v-9.707031l8.40625 4.851562 1.732422 6.464844a2.0002 2.0002 0 1 0 3.863281-1.035156l-.697265-2.601563 3.632812 2.097657a2.0002 2.0002 0 1 0 2-3.462891l-3.632812-2.097656 2.554687-.683594a2.0002 2.0002 0 0 0-.503906-3.939453 2.0002 2.0002 0 0 0-.53125.076172l-6.417969 1.71875-8.376953-4.835938 8.431641-4.857422 6.375 1.708985a2.0002 2.0002 0 1 0 1.035156-3.863282l-2.503906-.671875 3.568359-2.054687a2.0002 2.0002 0 0 0-.90625-3.746094 2.0002 2.0002 0 0 0-1.089844.28125l-3.650391 2.101563.697266-2.59961a2.0002 2.0002 0 0 0-2.03125-2.5429685 2.0002 2.0002 0 0 0-1.832031 1.5078125l-1.732422 6.455078L27 21.570312v-9.742187l4.71875-4.71875a2.0002 2.0002 0 1 0-2.828125-2.828125L27 6.171875V2a2.0002 2.0002 0 0 0-2.029297-2.02734375z"/></svg>'
            break
        case '50d':
        case '50n':
            svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="3.985748529434204 3.9857492446899414 22.02850341796875 22.02850341796875"><path d="M8 5a1.0001 1.0001 0 1 0 0 2h3a1.0001 1.0001 0 1 0 0-2H8zm7 0a1.0001 1.0001 0 1 0 0 2h3a1.0001 1.0001 0 1 0 0-2h-3zm7 0a1.0001 1.0001 0 1 0 0 2h3a1.0001 1.0001 0 1 0 0-2h-3zM5 11a1.0001 1.0001 0 1 0 0 2h3a1.0001 1.0001 0 1 0 0-2H5zm7 0a1.0001 1.0001 0 1 0 0 2h3a1.0001 1.0001 0 1 0 0-2h-3zm7 0a1.0001 1.0001 0 1 0 0 2h3a1.0001 1.0001 0 1 0 0-2h-3zM8 17a1.0001 1.0001 0 1 0 0 2h3a1.0001 1.0001 0 1 0 0-2H8zm7 0a1.0001 1.0001 0 1 0 0 2h3a1.0001 1.0001 0 1 0 0-2h-3zm7 0a1.0001 1.0001 0 1 0 0 2h3a1.0001 1.0001 0 1 0 0-2h-3zM5 23a1.0001 1.0001 0 1 0 0 2h3a1.0001 1.0001 0 1 0 0-2H5zm7 0a1.0001 1.0001 0 1 0 0 2h3a1.0001 1.0001 0 1 0 0-2h-3zm7 0a1.0001 1.0001 0 1 0 0 2h3a1.0001 1.0001 0 1 0 0-2h-3z"></path></svg>'
            break

    }

    return svg
}