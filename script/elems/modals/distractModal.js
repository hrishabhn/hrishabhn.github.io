function distractModal(data, e) {
    let card = document.createElement('div')
    card.classList = 'distract-modal layer-0 card-shadow'

    card.append(textboxBase('Enter code to proceed', 'This is a time wasting app. Get back to work or enter code if necessary.'))

    const code = Math.floor(Math.random() * 900000) + 100000
    let codeElem = elems.p(code)
    codeElem.classList = 'code'
    card.append(codeElem)

    let input = document.createElement('input')
    input.id = 'distract-input'
    card.append(input)


    input.onkeyup = function () {
        if (input.value == code) {
            openApp(data, e, true)
            modal.remove()
        }
    }

    return card
}
