for (const event of events_all) {
    event.hex = eventColor(event.calendar)
}

function eventColor(calendar) {
    const data = {
        'Personal': 'FF9200',
        'Travel': '0E61B9',
        'Key Dates': 'FFFF0B',
        'Work': '005392',
        'Errands': 'FF40FF',
        'Outings': 'FB0207',
        'HP': '0096d6',
        'Calendar': '0096d6',
    }

    if (data[calendar]) {
        return data[calendar]
    } else {
        return '000'
    }
}