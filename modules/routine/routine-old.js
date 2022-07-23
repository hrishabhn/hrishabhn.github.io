
const routine = {
    // widget: function (key) {
    //     let card = widgetCardBase('div')
    //     card.classList.add('routine')
    //     card.append(elems.title('Habits'))

    //     let icon = elems.icon(SFSymbols.arrow.triangle.circlepath)
    //     icon.classList = 'top-icon'
    //     icon.onclick = function () {
    //         removeCookie('routine')
    //         location.reload()
    //     }
    //     icon.style.setProperty('cursor', 'pointer')
    //     icon.classList.add('clickable-b')
    //     card.append(icon)

    //     let data = routineNew.data

    //     for (const task of data[key]) {
    //         let elem = document.createElement('a')
    //         elem.classList = 'task clickable-o'
    //         if (task.done) elem.classList.add('done')
    //         elem.onclick = function (key) {
    //             task.done = !task.done
    //             setCookie('routine', JSON.stringify(data), 1 / 2)
    //             if (task.done) elem.classList.add('done')
    //             else elem.classList.remove('done')
    //         }

    //         elem.append(elems.a(iconData.tick, null))
    //         elem.append(elems.p(task.name))
    //         elem.append(elems.grow())

    //         card.append(elem)
    //         card.append(elems.hlineList(30))
    //     }
    //     card.lastChild.remove()

    //     return card
    // },
    // leftbar: function (key) {
    //     if (!routineNew.data[key]) key = 'morning'
    //     let card = document.createElement('div')
    //     card.classList = 'routine'

    //     let tog = document.createElement('div')
    //     tog.classList = 'switch layer-0'

    //     for (const time in routineNew.data) {
    //         let a = elems.a(null, time)
    //         a.classList = 'clickable-o'
    //         if (time == key) a.classList.add('layer-1')
    //         a.onclick = function () {
    //             for (const child of tog.childNodes) child.classList.remove('layer-1')
    //             a.classList.add('layer-1')
    //             setRoutineList(time)
    //         }
    //         tog.append(a)
    //     }

    //     card.append(tog)
    //     setRoutineList(key)

    //     function setRoutineList(k) {
    //         while (card.childNodes.length > 1) card.lastChild.remove()

    //         let data = routineNew.data

    //         for (const task of data[k]) {
    //             let elem = document.createElement('a')
    //             elem.classList = 'task clickable-o'
    //             if (task.done) elem.classList.add('done')
    //             elem.onclick = function (k) {
    //                 task.done = !task.done
    //                 setCookie('routine', JSON.stringify(data), 1 / 2)
    //                 if (task.done) elem.classList.add('done')
    //                 else elem.classList.remove('done')
    //             }

    //             let a = document.createElement('a')
    //             a.append(document.createElement('div'))

    //             elem.append(a)
    //             elem.append(elems.p(task.name))
    //             elem.append(elems.grow())

    //             card.append(elem)
    //             card.append(elems.hline())
    //         }
    //         card.lastChild.remove()
    //     }

    //     return card
    // },
    splashCard: function (key) {
        if (!key) key = timeOfDay()

        // base card
        let card = oldSplashCardBase(
            'Routine',
            [
                {
                    name: 'Close',
                    icon: SFSymbols.plus,
                    trigger: function () { routine.splashCardSet(null, body) },
                },
                {
                    name: 'Morning',
                    icon: SFSymbols.sunrise.fill,
                    trigger: function () { routine.splashCardSet('morning', body) },
                },
                {
                    name: 'Night',
                    icon: SFSymbols.moon.fill,
                    trigger: function () { routine.splashCardSet('night', body) },
                },
            ]
        )
        card.id = 'routine'
        card.style.setProperty('max-width', '950px')

        let body = document.createElement('div')
        body.classList = 'body'

        // set list
        if (key && routine.now() && !routine.done()) routine.splashCardSet(key, body)

        card.append(body)
        return card
    },
    splashCardSet: function (key, body) {
        while (body.childNodes.length) body.lastChild.remove()
        if (key) {
            let data = routineNew.data
            for (const task of data[key]) {
                let item = document.createElement('div')
                item.classList = 'task clickable-o'
                if (task.done) item.classList.add('done')
                item.onclick = function (key) {
                    task.done = !task.done
                    setCookie('routine', JSON.stringify(data), 1 / 2)
                    if (task.done) item.classList.add('done')
                    else item.classList.remove('done')
                }

                let a = document.createElement('a')
                a.append(document.createElement('div'))

                item.append(a)
                item.append(elems.p(task.name))
                item.append(elems.grow())

                body.append(item)
                body.append(elems.hlineList(30))
            }
            body.lastChild.remove()
        }
    },
    now: function () { return routineNew.data[timeOfDay()] },
    done: function () { return routine.now().map(x => x.done).every(Boolean) },
    active: function () { return routine.now() && !routine.done() },
}




// let switchData = [
//     {
//         icon: SFSymbols.sunrise.fill,
//         trigger: function () { routine.splashCardSet('morning', body) },
//         active: key == 'morning',
//     },
//     {
//         icon: SFSymbols.moon.fill,
//         trigger: function () { routine.splashCardSet('night', body) },
//         active: key == 'night',
//     },
// ]



// let s = switchElem(switchData)
// s.classList.add('layer-1')
// body.append(s)


// function switchElem(data) {
//     let elem = document.createElement('div')
//     elem.classList = 'switch'

//     for (let i = 0; i < data.length; i++) {
//         let a = elems.a(data[i].icon, data[i].name)
//         a.classList = 'clickable-o'
//         if (data[i].active) a.classList.add('active')
//         a.onclick = function () {
//             for (const node of elem.childNodes) node.classList.remove('active')
//             a.classList.add('active')
//             data[i].trigger()
//         }


//         elem.append(a)
//     }
//     return elem
// }

function oldSplashCardBase(title, buttons) {

    let card = document.createElement('div')
    card.classList = 'splash-card layer-1'

    let header = document.createElement('div')
    header.classList = 'header'
    header.append(elems.p(title))
    header.append(elems.grow())
    if (buttons) for (const b of buttons)
        header.append(appObject.bw({
            name: b.name,
            icon: b.icon,
            trigger: function () { if (b.trigger) b.trigger() }
        }))




    card.append(header)


    return card
}