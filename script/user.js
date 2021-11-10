function behindPass(n) {
    if (!checkPass()) {
        getPass(n)
    }
}

function checkPass() {
    return (!!getCookie('verified'))
}

function getPass(n) {
    openModal(passCard(n))
}

function checkInput(n) {
    const input = document.getElementById('password-field').value
    console.log(input)
    if (input == 'nice') {
        closeModal()
        setCookie('verified',true,14)
        openPage(n)
    }
}

function passCard(n) {
    var container = document.createElement('div')
    container.classList = 'login-container'

    var card = document.createElement('div')
    card.classList = 'login-card layer-1 card-shadow'
    card.innerHTML = `
    <div class="vstack">
    <div class="icon blue-fg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="4 4 42 42"><path d="M10 4c-3.3016254 0-6 2.6983746-6 6v5a1.0001 1.0001 0 1 0 2 0v-5c0-2.2203746 1.7796254-4 4-4h5a1.0001 1.0001 0 1 0 0-2h-5zm25 0a1.0001 1.0001 0 1 0 0 2h5c2.220375 0 4 1.7796254 4 4v5a1.0001 1.0001 0 1 0 2 0v-5c0-3.3016254-2.698375-6-6-6h-5zM15.984375 17.986328A1.0001 1.0001 0 0 0 15 19v3a1.0001 1.0001 0 1 0 2 0v-3a1.0001 1.0001 0 0 0-1.015625-1.013672zm10 0A1.0001 1.0001 0 0 0 25 19v8c0 .56503-.43497 1-1 1h-1a1.0001 1.0001 0 1 0 0 2h1c1.64497 0 3-1.35503 3-3v-8a1.0001 1.0001 0 0 0-1.015625-1.013672zm8 0A1.0001 1.0001 0 0 0 33 19v3a1.0001 1.0001 0 1 0 2 0v-3a1.0001 1.0001 0 0 0-1.015625-1.013672zm-29 15A1.0001 1.0001 0 0 0 4 34v6c0 3.301625 2.6983746 6 6 6h5a1.0001 1.0001 0 1 0 0-2h-5c-2.2203746 0-4-1.779625-4-4v-6a1.0001 1.0001 0 0 0-1.015625-1.013672zm26.005859 0a1.0001 1.0001 0 0 0-.697265.306641s-.359492.372128-1.240235.8125C28.171991 34.54584 26.833333 35 25 35s-3.171991-.45416-4.052734-.894531c-.880743-.440372-1.240235-.8125-1.240235-.8125a1.0001 1.0001 0 0 0-.716797-.302735 1.0001 1.0001 0 0 0-.697265 1.716797s.640508.627872 1.759765 1.1875C21.171991 36.45416 22.833333 37 25 37s3.828009-.54584 4.947266-1.105469c1.119257-.559628 1.759765-1.1875 1.759765-1.1875a1.0001 1.0001 0 0 0-.716797-1.720703zm13.994141 0A1.0001 1.0001 0 0 0 44 34v6c0 2.220375-1.779625 4-4 4h-5a1.0001 1.0001 0 1 0 0 2h5c3.301625 0 6-2.698375 6-6v-6a1.0001 1.0001 0 0 0-1.015625-1.013672z"/></svg></div>
    <div class="spacer-x" style="--size: 30px;"></div>
    <p class="prompt">Please enter password.</p>
    <div class="spacer-x" style="--size: 20px;"></div>
    <input type="text" id="password-field" class="image-border" placeholder="Password" onkeyup="checkInput(${n})">
    </div>`

    container.append(card)
    return container
}

function secureElement(element) {
    if (checkPass()) {
        return element
    } else { return(spacerContentNegElement()) }
}