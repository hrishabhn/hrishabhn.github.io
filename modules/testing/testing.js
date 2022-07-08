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



        let notion = new XMLHttpRequest()
        notion.open("POST", 'https://api.notion.com/v1/pages')

        notion.setRequestHeader('Authorization', 'Bearer secret_zVLgWAg0YcDJ9BR7udmdKzP5NLPcrulTFUGwEYr0kAO')
        notion.setRequestHeader('Notion-Version', '2021-05-13')
        notion.setRequestHeader('Content-Type', 'application/json')

        notion.onload = function () {
            console.log(notion.responseText)
        }

        let data = {
            "parent": { "database_id": "28ae6e9e63c64e9eb92dc6877ee1cb01" },
            "properties": {
                "Name": { "title": [{ "text": { "content": "Lorem" } }] },
                "Tags": { "multi_select": [{ "name": "Vegetable" }, { "name": "Fruit" }] }
            }
        }

        notion.send(JSON.stringify(data))

        // xhr.setRequestHeader("Accept", "application/json");
        // xhr.setRequestHeader("Content-Type", "application/json");

        // xhr.onload = () => console.log(xhr.responseText);

        // let data = `{
        //     "Id": 78912,
        //     "Customer": "Jason Sweet",
        // }`;

        // xhr.send(data);
    },
}