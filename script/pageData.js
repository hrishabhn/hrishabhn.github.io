function pageContent() {
    main1.render()
    main2.render()
    main3.render()
    main4.render()
    main5.render()
}

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
    render: function() {
        pageRender(this.content,1)
        
        appType('action',productivityApps,'productivity-tray',null,null)
        appType('action',noteApps,'note-tray',null,null)
        appType('link',pinnedHomeApps,'pinned-home-tray','Pinned',null)
        appType('link',notionApps,'notion-tray','Notion',null)
    }
}
const main2 = {
    content: [
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
    ],
    render: function() {
        pageRender(this.content,2)
        
        appType('action',shoppingApps,'shopping-tray',null,null)
        appType('link',pinnedBookmarksApps,'pinned-bookmarks-tray','Pinned',null)
        appType('link',designApps,'design-tray','Design',null)
        appType('link',apartmentApps,'apartment-tray','Apartment',null)
    }
}
const main3 = {
    content: [
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
    ],
    render: function() {
        pageRender(this.content,3)
        
        appType('action',iosSystemApps,'ios-system-tray',null,'hidden-desktop')
        appType('action',financeApps,'finance-tray','Finance','only-mobile')
        appType('action',learningApps,'learning-tray','Learning',null)
        appType('action',socialApps,'social-tray','Social',null)
        appType('link',pinnedAppsApps,'pinned-social-tray','Pinned',null)
    }
}
const main4 = {
    content: [
        {
            type: 'target',
            id:'school-1-tray',
        },
    ],
    render: function() {
        pageRender(this.content,4)
        
        appType('action',schoolApps,'school-1-tray',null,null)
    }
}
const main5 = {
    content: [
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
    ],
    render: function() {
        pageRender(this.content,5)
        
        appType('link',newsApps,'news-app-tray','News',null)
        appType('link',audioApps,'audio-tray','Audio',null)
        appType('link',videoApps,'video-tray','TV & Video',null) 
    }
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