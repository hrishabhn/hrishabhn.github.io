function pageContent() {
    pageRender(main1.content,1)
    pageRender(main2Content,2)
    pageRender(main3Content,3)
    pageRender(main4Content,4)
    pageRender(main5Content,5)
}

// const main1Content = 
const main2Content = [
    {
        type: 'target',
        id:'shopping-tray',
    },
    {
        type: 'target',
        id:'pinned-bookmarks-tray',
    },
    {
        type: 'target',
        id:'design-tray',
    },
    {
        type: 'target',
        id:'apartment-tray',
    },
    {
        type: 'target',
        id:'course-switch-content-tray',
    },
    {
        type: 'target',
        id:'media-switch-tray',
    },
    {
        type: 'target',
        id:'media-switch-content-tray',
    },
]
const main3Content = [
    {
        type: 'target',
        id:'ios-system-tray',
    },
    {
        type: 'target',
        id:'finance-tray',
    },
    {
        type: 'target',
        id:'learning-tray',
    },
    {
        type: 'target',
        id:'social-tray',
    },
    {
        type: 'target',
        id:'pinned-social-tray',
    },
]
const main4Content = [
    {
        type: 'target',
        id:'school-1-tray',
    },
]
const main5Content = [
    {
        type: 'target',
        id:'news-app-tray',
    },
    {
        type: 'target',
        id:'news-tray',
    },
    {
        type: 'media-title',
        title: 'YouTube',
    },
    {
        type: 'target',
        id:'youtube-tray',
    },
    {
        type: 'media-title',
        title: 'Books',
    },
    {
        type: 'target',
        id:'book-tray',
    },
    {
        type: 'target',
        id:'audio-tray',
    },
    {
        type: 'target',
        id:'news-tray',
    },
    {
        type: 'media-title',
        title: 'Podcasts',
    },
    {
        type: 'target',
        id:'pod-tray',
    },
    {
        type: 'target',
        id:'video-tray',
    },
]

const main1 = {
    content: [
        {
            type: 'target',
            id:'productivity-tray',
        },
        {
            type: 'target',
            id:'note-tray',
        },
        {
            type: 'target',
            id:'pinned-home-tray',
        },
        {
            type: 'target',
            id:'notion-tray',
        },
        {
            type: 'target',
            id:'course-switch-tray',
        },
        {
            type: 'target',
            id:'course-switch-content-tray',
        },
        {
            type: 'target',
            id:'media-switch-tray',
        },
        {
            type: 'target',
            id:'media-switch-content-tray',
        },
    ],
}


function pageRender(content,n) {
    const mainTarget = document.getElementById(`main-${n}`)
    mainTarget.innerHTML = ''

    for (i = 0; i < content.length; i++) {

        if (content[i].type == 'target') {
            var element = document.createElement('div')
            element.id = content[i].id
        } else if (content[i].type == 'media-title'){
            var element = document.createElement('div')
            element.classList = 'media-title'
            element.innerHTML = content[i].title
        }


        mainTarget.append(element)
    }




}