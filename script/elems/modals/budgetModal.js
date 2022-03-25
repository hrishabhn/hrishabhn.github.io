function budgetModal() {
    let card = document.createElement('div')
    card.classList = 'budget-modal layer-0 card-shadow'

    card.append(titleElement('Create Transaction'))
    card.append(spacerElement(5))

    const inputTypes = [
        'Amount',
        'Name',
        'Category',
        'Date',
        'Hour',
        'Minute',
    ]

    for (const input of inputTypes) {
        card.append(elems.subtitle(input))
        card.append(budgetModalInput(input))

    }

    let create = document.createElement('a')
    create.classList = 'create clickable blue'
    create.innerHTML = 'Create JSON String'
    create.onclick = function () {
        let dateInputs = {
            date: document.getElementById('budget-modal-Date').value,
            hour: document.getElementById('budget-modal-Hour').value,
            min: document.getElementById('budget-modal-Minute').value,
        }

        if (!dateInputs.date.length) {
            dateInputs.date = new Date().getDate().toString()
        }


        for (const item in dateInputs) {
            while (dateInputs[item].length < 2) {
                console.log(dateInputs[item].length)
                dateInputs[item] = `0${dateInputs[item]}`
            }
        }

        let data = {
            amount: parseFloat(document.getElementById('budget-modal-Amount').value),
            name: document.getElementById('budget-modal-Name').value,
            category: document.getElementById('budget-modal-Category').value,
            date: `2022-03-${dateInputs.date}T${dateInputs.hour}:${dateInputs.min}:00+01:00`
        }

        alert(`${JSON.stringify(data)},`)

    }

    card.append(create)

    return card
}

function budgetModalInput(id) {
    let input = document.createElement('input')
    input.type = 'text'
    input.placeholder = id
    input.id = `budget-modal-${id}`

    return input
}