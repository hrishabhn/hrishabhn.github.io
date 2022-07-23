const workout = {
    load: function () {
        // removeCookie('work-new')
        if (!getCookie('work-new')) {
            const rawData = [
                {
                    name: 'Back Squat',
                    sets: 5,
                },
                {
                    name: 'Bench Press',
                    sets: 5,
                },
                {
                    name: 'Barbell Row',
                    sets: 5,
                },
                {
                    name: 'Standing Press',
                    sets: 5,
                },
                {
                    name: 'Barbell Curl',
                    sets: 2,
                },
            ]

            for (const x of rawData) {
                x.done = randomNumber(x.sets + 1) //@}
                x.color = randColor()
            }

            setCookie('work-new', JSON.stringify(rawData), 1)
        }
        workout.data = JSON.parse(getCookie('work-new'))
    },
    data: null,
    update: function () {
        setCookie('work-new', JSON.stringify(workout.data), 1)
    },
    resultCard: function () {
        let card = resultCard.base({
            name: 'Workout',
            buttons: [{
                icon: SFSymbols.xmark,
                name: 'Reset',
                // trigger: function () { modal.add(budget.modal()) },
            }],
            type: 'vstack',
            gap: 10,
        })

        for (const x of workout.data) card.lastChild.append(workout.resultCardItem(x))

        return card
    },
    resultCardItem: function (x) {
        console.log(x)

        let item = document.createElement('div')
        item.classList = 'workout-item'
        item = cardCol(item, { color: x.color })

        let top = document.createElement('div')
        top.classList = 'fill-width'

        top.append(elems.textbox(x.name, `${x.done} out of ${x.sets} complete`))
        top.append(elems.grow())
        // add buttons

        let prog = document.createElement('div')
        prog.classList = 'prog'
        prog.style.setProperty('grid-template-columns', `repeat(${x.sets}, 1fr)`)

        for (let i = 0; i < x.sets; i++) {
            let b = document.createElement('div')

            if (i < x.done) b.classList = 'brand-bg'
            else b.classList = 'layer-0'

            if ((i == 0) || (i == x.sets - 1)) {
                b.classList.add('clickable-o')
                b.onclick = function () {
                    if (i == 0) { if (x.done > 0) x.done-- }
                    else if (i == x.sets - 1) { if (x.done < x.sets) x.done++ }
                    item.replaceWith(workout.resultCardItem(x))
                    workout.update()
                }
            }


            prog.append(b)
        }

        item.append(top)
        item.append(prog)



        return item
    },
}

workout.load()