function openApp(data, e, force) {
    if (!(data.distract && dnd.active() && !force)) {
        if (data.link) {
            let link
            if (typeof data.link === 'string') link = data.link
            else {
                if (!isMobile()) link = data.link.desktop
                else link = data.link.mobile
            }
            // new tab
            if (e ? !e.metaKey : true) window.open(link, '_self')
            else window.open(link, '_blank')
        } else if (data.trigger) data.trigger(e)
    } else {
        modal.add(distractModal(data, e))
        document.getElementById('distract-input').focus()
    }
}

function distractModal(data, e) {
    let card = document.createElement('div')
    card.classList = 'distract-modal layer-0 card-shadow'

    card.append(elems.textbox('Enter code to proceed', 'This is a time wasting app. Get back to work or enter code if necessary.'))

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
