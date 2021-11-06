function calTest() {
    fetchText()
}

async function fetchText() {
    let response = await fetch('calendar/event1.json');
    let data = await response.text();
    console.log(data);
}