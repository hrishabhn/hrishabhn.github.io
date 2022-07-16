const testing = {
    content: document.getElementById('testing').firstChild,
    add: function (text) {
        let c = testing.card(text)
        testing.content.append(c)
        let x = setTimeout(() => { c.remove() }, 5000);
    },
    card: function (text) {
        let card = document.createElement('div')
        card.classList = 'item accent-bg clickable-o card-shadow'
        card.innerText = text
        return card
    },
    load: function () {
        // SF.render.ios2(SFSymbols.tram.fill, Colors.red.dark)
        // SF.render.ios2(SFSymbols.waveform, Colors.indigo.dark)
        // colorModal()
        // movieDict['himym'].detail()

        // date script testing


        // let data = {
        //     "parent": { "database_id": "28ae6e9e63c64e9eb92dc6877ee1cb01" },
        //     "properties": {
        //         "Name": { "title": [{ "text": { "content": "Lorem" } }] }
        //         // "Tags": { "multi_select": [{ "name": "Vegetable" }, { "name": "Fruit" }] }
        //     }
        // }


        // const res = await fetch('https://api.notion.com/v1/pages', {
        //     method: 'POST',
        //     mode: 'cors',
        //     headers: {
        //         'Authorization': 'Bearer secret_zVLgWAg0YcDJ9BR7udmdKzP5NLPcrulTFUGwEYr0kAO',
        //         'Notion-Version': '2021-05-13',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // });

        // console.log(res)


        // let notion = new XMLHttpRequest()
        // notion.open("POST", 'https://api.notion.com/v1/pages')

        // notion.setRequestHeader('Authorization', 'Bearer secret_zVLgWAg0YcDJ9BR7udmdKzP5NLPcrulTFUGwEYr0kAO')
        // notion.setRequestHeader('Notion-Version', '2021-05-13')
        // notion.setRequestHeader('Content-Type', 'application/json')

        // notion.onload = function () {
        //     console.log(notion.responseText)
        // }


        // notion.send(JSON.stringify(data))

    },
}