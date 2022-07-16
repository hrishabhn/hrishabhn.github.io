const tasks = {
    // data: tasks_all,
    ideas: {
        data: function () {
            if (getCookie('ideas')) return JSON.parse(getCookie('ideas'))
            return []
        },
        set: function () {
            let data = []

            // for children of body
            for (node of document.getElementById('task').lastChild.childNodes)
                // if node is not hline
                if (!node.classList.contains('hline'))
                    // if node is input
                    if (node.childNodes[1].tagName == 'INPUT')
                        // if input has value
                        if (node.childNodes[1].value)
                            // send to data
                            data.push(node.childNodes[1].value)

            setCookie('ideas', JSON.stringify(data), 10)
        },
        refresh: function () {
            const old = document.getElementById('task')
            old.parentNode.replaceChild(tasks.splashCard(), old)
        },
    },
    splashCard: function () {
        // base card with header
        let card = leftbar.cardBase('Tasks & Ideas', [{ icon: SFSymbols.list.bullet }])
        card.id = 'task'

        let body = document.createElement('div')
        body.classList = 'body'

        let blank = true

        // if (tasks.data.length) {
        //     blank = false
        //     for (const task of tasks.data) {
        //         body.append(tasks.taskItem(task))
        //         body.append(elems.hlineList(20))
        //     }
        // }

        if (tasks.ideas.data().length) {
            blank = false
            for (const idea of tasks.ideas.data()) {
                body.append(tasks.ideaItem(idea))
                body.append(elems.hlineList(20))
            }
        }

        body.append(tasks.ideaItem(''))

        card.append(body)
        return card
    },
    topCard: function () {
        // base card with header
        let card = leftbar.cardBase('Tasks & Ideas', [{ icon: SFSymbols.list.bullet }])
        card.classList.remove('splash-card')
        card.classList.add('top-card')
        card.id = 'task'

        let body = document.createElement('div')
        body.classList = 'body'

        if (tasks.data.length) for (const task of tasks.data) {
            body.append(tasks.taskItem(task))
            body.append(elems.hlineList(20))
        }

        if (tasks.ideas.data().length) for (const idea of tasks.ideas.data()) {
            body.append(tasks.ideaItem(idea))
            body.append(elems.hlineList(20))
        }

        body.append(tasks.ideaItem(''))

        card.append(body)
        return card
    },
    taskItem: function (data) {
        let elem = document.createElement('div')
        elem.classList = 'task'

        let a = document.createElement('a')
        a.classList = 'clickable-o'
        a.onclick = function () {
            setCookie('current-task', data, 1)
            location.reload()
        }

        elem.append(a)
        elem.append(elems.p(data))
        elem.append(elems.grow())
        return elem
    },
    ideaItem: function (data) {
        let elem = document.createElement('div')
        elem.classList = 'task'

        let a = document.createElement('a')
        a.classList = 'clickable-o'
        a.onclick = function () {
            setCookie('current-task', data, 1)
            location.reload()
        }

        let input = document.createElement('input')
        input.value = data
        input.placeholder = 'Add'
        input.onkeyup = function (e) {
            tasks.ideas.set()
            if (e.key == 'Enter') tasks.ideas.refresh()
        }

        elem.append(a)
        elem.append(input)
        return elem
    },
}

// ideas-list={"d":true};
// focus=[0,0];
// task-status={"Summer course":true,"Apartment Barcelona":true,"HK Quarantine + Flights":false,"June plans":false};
// routine={"morning":[{"name":"Check Emails","done":false},{"name":"Clear Notifications","done":false},{"name":"Get Ready","done":false},{"name":"Today's Tasks","done":false}],"night":[{"name":"Accounting","done":false},{"name":"Dry Clothes","done":false},{"name":"Clean Up Room","done":false},{"name":"Kitchen","done":false},{"name":"Prepare for Tomorrow","done":false},{"name":"Review Tasks","done":false},{"name":"Self Care","done":false},{"name":"Reflection","done":false}]};
// dnd=true