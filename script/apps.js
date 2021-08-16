function apps(){
    productivityApps()
    noteApps()
    notionApps()
    // homeAppPopulate()
    // smartAppPopulate()
    // page2AppPopulate()
    // page3AppPopulate()
    // page4AppPopulate()
    // page5AppPopulate()
}

function productivityApps() {
    const appData = [
        {
            name: "Outlook",
            background: "outlook",
            link: "ms-outlook://",
            target: "_blank",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="1.5190010070800781 12.5775146484375 497.6650085449219 497.6650085449219"><path d="M432.828 23.637h-276.48c-18.325 0-33.176 14.851-33.176 33.18v22.117h342.832V56.816c0-18.328-14.852-33.18-33.176-33.18zm43.574 470.015c-6.304 3.54-13.714 5.532-21.457 5.532H134.23c-24.44 0-44.238-19.797-44.238-44.239V388.59h99.531c12.055 0 23.227-3.871 32.293-10.504zm22.782-170.53v131.823c0 7.965-2.102 15.485-5.973 22.008l-173.852-78.851zM366.473 101.05h99.53v77.414h-99.53zm-121.653 0h99.535v77.414H244.82zm121.653 99.535h99.53V278h-99.53zm-121.653 0h99.535V278H244.82zm99.535 99.531v63.59l-52.53 21.898-47.005-21.343v-64.145zm121.649 0v12.828l-99.531 41.582v-54.41zm-243.3-199.066v33.18c-9.18-6.97-20.68-11.06-33.18-11.06h-66.352v-22.12zm-33.18 265.422H34.694c-18.324 0-33.175-14.852-33.175-33.176V178.465c0-18.324 14.851-33.176 33.175-33.176h154.828c18.329 0 33.18 14.852 33.18 33.176v154.832c0 18.324-14.851 33.176-33.18 33.176zm-77.415-176.95c-38.882 0-62.304 29.707-62.304 66.356 0 36.652 23.332 66.355 62.304 66.355 38.985 0 62.309-29.703 62.309-66.343 0-36.66-23.422-66.368-62.309-66.368zm0 110.317c-22.062 0-35.242-19.672-35.242-43.95 0-24.273 13.246-43.949 35.242-43.949 22 0 35.258 19.688 35.258 43.95 0 24.265-13.203 43.949-35.258 43.949zm0 0"></path></svg>',
        },
        {
            name: "OneDrive",
            background: "onedrive hidden-mobile hidden-tablet",
            link: "https://purdue0-my.sharepoint.com",
            target: "_self",
            icon: '<svg data-bbox="0 9.594 50.023 30.407" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" data-type="shape"> <g> <path d="M27.406 9.594c-1.816 0-3.379.355-4.75 1.094-1.418.707-2.996 2.019-3.75 3.093-.281.375-.543.719-.718.938-2.086-.79-4.56-.89-6.282-.281-3.539 1.14-6.11 4.582-6.219 8.374 0 .215-.011.422-.03.594-.036.012-.087.02-.126.032-2.215.582-3.992 1.968-4.906 3.843C-.012 28.2 0 28.785 0 30.406c0 1.746-.004 2.153.594 3.219.93 1.973 2.976 3.695 4.937 4.156.516.145 2.801.196 4.969.219-.969-1.543-1.5-3.438-1.5-5.594 0-1.484.156-2.37.625-3.468 1.008-2.442 3.371-4.317 6.375-5.125.059-.192.113-.407.188-.594 1.015-2.899 2.917-5.309 5.093-6.469l.032-.031h.03c2.063-1.032 3.321-1.313 5.657-1.313 3.441 0 5.559.864 7.938 3.281.886-.23 1.78-.375 2.687-.375.309 0 .61.036.906.063-.09-.297-.18-.602-.281-.906-1.668-4.785-5.922-7.875-10.844-7.875zM27 17.406c-2.016 0-3 .203-4.781 1.094-1.754.934-3.309 3-4.157 5.438-.199.496-.347 1.039-.375 1.437-.113.05-.304.145-.687.25-2.633.57-4.715 2.082-5.531 4.063-.367.863-.469 1.511-.469 2.718 0 3.828 1.89 6.547 5.219 7.469.039.012.082.023.125.031.77.11 3.86.094 15.343.094H46a.94.94 0 0 0 .438-.094l.624-.312c1.657-.828 2.688-2.574 2.938-4.938.23-3.351-1.242-5.668-4.281-6.718l-.282-.094-.03-.532c-.36-4.046-3.637-7-7.782-7-.996 0-1.98.192-2.938.532l-.312.093-.656-.625C31.625 18.105 30 17.407 27 17.407z" /></g></svg>',
        },
        {
            name: "OneDrive",
            background: "onedrive hidden-desktop",
            link: "ms-onedrive://",
            target: "_self",
            icon: '<svg data-bbox="0 9.594 50.023 30.407" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" data-type="shape"> <g> <path d="M27.406 9.594c-1.816 0-3.379.355-4.75 1.094-1.418.707-2.996 2.019-3.75 3.093-.281.375-.543.719-.718.938-2.086-.79-4.56-.89-6.282-.281-3.539 1.14-6.11 4.582-6.219 8.374 0 .215-.011.422-.03.594-.036.012-.087.02-.126.032-2.215.582-3.992 1.968-4.906 3.843C-.012 28.2 0 28.785 0 30.406c0 1.746-.004 2.153.594 3.219.93 1.973 2.976 3.695 4.937 4.156.516.145 2.801.196 4.969.219-.969-1.543-1.5-3.438-1.5-5.594 0-1.484.156-2.37.625-3.468 1.008-2.442 3.371-4.317 6.375-5.125.059-.192.113-.407.188-.594 1.015-2.899 2.917-5.309 5.093-6.469l.032-.031h.03c2.063-1.032 3.321-1.313 5.657-1.313 3.441 0 5.559.864 7.938 3.281.886-.23 1.78-.375 2.687-.375.309 0 .61.036.906.063-.09-.297-.18-.602-.281-.906-1.668-4.785-5.922-7.875-10.844-7.875zM27 17.406c-2.016 0-3 .203-4.781 1.094-1.754.934-3.309 3-4.157 5.438-.199.496-.347 1.039-.375 1.437-.113.05-.304.145-.687.25-2.633.57-4.715 2.082-5.531 4.063-.367.863-.469 1.511-.469 2.718 0 3.828 1.89 6.547 5.219 7.469.039.012.082.023.125.031.77.11 3.86.094 15.343.094H46a.94.94 0 0 0 .438-.094l.624-.312c1.657-.828 2.688-2.574 2.938-4.938.23-3.351-1.242-5.668-4.281-6.718l-.282-.094-.03-.532c-.36-4.046-3.637-7-7.782-7-.996 0-1.98.192-2.938.532l-.312.093-.656-.625C31.625 18.105 30 17.407 27 17.407z" /></g></svg>',
        },
        {
            name: "Gmail",
            background: "google-red hidden-mobile",
            link: "https://mail.google.com/mail/u/0/#inbox",
            target: "_self",
            icon: '<svg data-bbox="1 7 48 36" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M5.5 7C3.02 7 1 9.02 1 11.5v.426L25 29l24-17.074V11.5C49 9.02 46.98 7 44.5 7zm.852 2h37.293L25 22zM1 14.027V38.5C1 40.98 3.02 43 5.5 43h39c2.48 0 4.5-2.02 4.5-4.5V14.027l-6 4.27V41H7V18.297z" /></g></svg>',
        },
        {
            name: "Google Drive",
            background: "google-green hidden-mobile",
            link: "https://drive.google.com/",
            target: "_self",
            icon: '<svg id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m323.303 31h-133.799c-5.361 0-10.313 2.856-12.993 7.5s-2.681 10.356 0 15l143.042 247.5h168.726l-151.998-262.515c-2.68-4.629-7.632-7.485-12.978-7.485z" /><path d="m154.034 75.947-152.011 262.538c-2.622 4.512-2.695 10.049-.22 14.648l64.805 120c2.578 4.775 7.544 7.793 12.979 7.866h.22c5.347 0 10.313-2.856 12.993-7.5l145.494-251.757z" /><path d="m509.88 338.31c-2.695-4.526-7.588-7.31-12.876-7.31h-286.41l-86.678 150h308.284c5.508 0 10.576-3.018 13.198-7.866l64.805-120c2.504-4.658 2.387-10.283-.323-14.824z" /></svg>',
        },
    ]

    actionPopulate(appData, "productivity-tray")
}

function noteApps() {
    const appData = [
        {
            name: "Notion",
            background: "black",
            link: "https://www.notion.so/Homepage-2-0-ebdb7991969f49ffa7be6906f7685945",
            target: "_self",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="12 0.18999999999999906 487.619 510.941"><path d="M96.085 91.118c15.81 12.845 21.741 11.865 51.43 9.884l279.888-16.806c5.936 0 1-5.922-.98-6.906L379.94 43.686c-8.907-6.915-20.773-14.834-43.516-12.853L65.408 50.6c-9.884.98-11.858 5.922-7.922 9.883zm16.804 65.228v294.491c0 15.827 7.909 21.748 25.71 20.769l307.597-17.799c17.81-.979 19.794-11.865 19.794-24.722V136.57c0-12.836-4.938-19.758-15.84-18.77l-321.442 18.77c-11.863.997-15.82 6.931-15.82 19.776zm303.659 15.797c1.972 8.903 0 17.798-8.92 18.799l-14.82 2.953v217.412c-12.868 6.916-24.734 10.87-34.622 10.87-15.831 0-19.796-4.945-31.654-19.76l-96.944-152.19v147.248l30.677 6.922s0 17.78-24.75 17.78l-68.23 3.958c-1.982-3.958 0-13.832 6.921-15.81l17.805-4.935V210.7l-24.721-1.981c-1.983-8.903 2.955-21.74 16.812-22.736l73.195-4.934 100.889 154.171V198.836l-25.723-2.952c-1.974-10.884 5.927-18.787 15.819-19.767zM42.653 23.919l281.9-20.76c34.618-2.969 43.525-.98 65.283 14.825l89.986 63.247c14.848 10.876 19.797 13.837 19.797 25.693v346.883c0 21.74-7.92 34.597-35.608 36.564L136.64 510.14c-20.785.991-30.677-1.971-41.562-15.815l-66.267-85.978C16.938 392.52 12 380.68 12 366.828V58.495c0-17.778 7.922-32.608 30.653-34.576z" fill-rule="evenodd" /></svg>',
        },
        {
            name: "ClickUp",
            background: "clickup",
            link: "https://app.clickup.com/8450846/v/l/6-48362200-1",
            target: "_self",
            icon: '<svg data-bbox="2 0 20 24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-type="shape"><g><path d="M2 18.439l3.69-2.828c1.961 2.56 4.044 3.739 6.363 3.739 2.307 0 4.33-1.166 6.203-3.704L22 18.405C19.298 22.065 15.941 24 12.053 24 8.178 24 4.788 22.078 2 18.439zM12.04 6.15l-6.568 5.66-3.036-3.52L12.055 0l9.543 8.296-3.05 3.509z" /></g></svg>',
        },
        {
            name: "To do",
            background: "indigo",
            link: "ms-to-do://",
            target: "_self",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M18.04 24.97c.23-.24.46-.47.7-.71.23-.24.47-.48.7-.72l-7.18-7.28c-.52-.53-1.22-.83-1.96-.83s-1.44.3-1.96.83l-6.53 6.63a2.8 2.8 0 000 3.94l7.77 7.88c.06-.38.17-.74.32-1.09.14-.31.31-.61.53-.89.12-.18.27-.35.43-.52 1.51-1.54 3.02-3.06 4.54-4.58.88-.89 1.76-1.77 2.64-2.66zm30.17-10.44L41.59 7.8c-1.02-1.03-2.81-1.03-3.84 0L21.3 24.51c-.15.15-.29.3-.45.45v.01c-.23.24-.47.48-.7.71h-.01l-.7.71-1.26 1.28-1.37 1.37c-1.51 1.52-3.02 3.04-4.52 4.57-.17.17-.31.36-.43.57-.19.33-.31.7-.35 1.07-.02.23-.01.46.03.68.02.13.05.26.09.39.02.08.05.17.09.25.03.08.07.16.11.24.06.13.14.26.24.38.05.07.11.13.17.2l.17.19 6.47 6.57.05.05c.06.06.13.12.2.18.13.1.26.19.4.27.4.23.85.35 1.32.35.57 0 1.11-.18 1.56-.51.07-.05.13-.1.19-.15.06-.04.11-.09.16-.14l.04-.05 6.54-6.63 18.87-19.15a2.734 2.734 0 000-3.84z"/></svg>',
        },
    ]

    actionPopulate(appData, "note-tray")
}

function notionApps() {
    const appData = [
        {
            name: "Accounts",
            background: "orange",
            link: "https://www.notion.so/Accounts-ec9ee8a777504363a574706d8c820b99",
            target: "_self",
            icon: '<svg viewBox="-42 0 512 512.002" xmlns="http://www.w3.org/2000/svg"><path d="M210.352 246.633c33.882 0 63.222-12.153 87.195-36.13 23.973-23.972 36.125-53.304 36.125-87.19 0-33.876-12.152-63.211-36.129-87.192C273.566 12.152 244.23 0 210.352 0c-33.887 0-63.22 12.152-87.192 36.125s-36.129 53.309-36.129 87.188c0 33.886 12.156 63.222 36.133 87.195 23.977 23.969 53.313 36.125 87.188 36.125zm0 0M426.129 393.703c-.692-9.976-2.09-20.86-4.149-32.351-2.078-11.579-4.753-22.524-7.957-32.528-3.308-10.34-7.808-20.55-13.37-30.336-5.774-10.156-12.555-19-20.165-26.277-7.957-7.613-17.699-13.734-28.965-18.2-11.226-4.44-23.668-6.69-36.976-6.69-5.227 0-10.281 2.144-20.043 8.5a2711.03 2711.03 0 01-20.879 13.46c-6.707 4.274-15.793 8.278-27.016 11.903-10.949 3.543-22.066 5.34-33.039 5.34-10.972 0-22.086-1.797-33.047-5.34-11.21-3.622-20.296-7.625-26.996-11.899-7.77-4.965-14.8-9.496-20.898-13.469-9.75-6.355-14.809-8.5-20.035-8.5-13.313 0-25.75 2.254-36.973 6.7-11.258 4.457-21.004 10.578-28.969 18.199-7.605 7.281-14.39 16.12-20.156 26.273-5.558 9.785-10.058 19.992-13.371 30.34-3.2 10.004-5.875 20.945-7.953 32.524-2.059 11.476-3.457 22.363-4.149 32.363A438.821 438.821 0 000 423.949c0 26.727 8.496 48.363 25.25 64.32 16.547 15.747 38.441 23.735 65.066 23.735h246.532c26.625 0 48.511-7.984 65.062-23.734 16.758-15.946 25.254-37.586 25.254-64.325-.004-10.316-.351-20.492-1.035-30.242zm0 0"/></svg>',
        },
        {
            name: "To do",
            background: "red",
            link: "https://www.notion.so/Task-Manager-DRAFT-2b44780c1f9647719b6374cc7cb30abf",
            target: "_self",
            icon: '<svg viewBox="0 0 405.272 405.272" xml:space="preserve"><g><path d="M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836 c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064 c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z" /></g></svg>',
        },
        {
            name: "Travel",
            background: "cathay",
            link: "https://www.notion.so/Travel-798b2161bfef4ec7b4c93f4ce98fdffa",
            target: "_self",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.535 14.465c-19.569-19.568-51.395-19.241-70.557.726L322.092 124.488 66.131 39.781 12.4 93.513l213.352 131.365-107.956 112.494-69.231-11.366L0 374.571l101.78 35.649L137.429 512l48.565-48.565-11.366-69.231 112.494-107.955L418.487 499.6l53.732-53.732-84.706-255.961L496.808 85.022c19.968-19.162 20.295-50.988.727-70.557z"/></svg>',
        },
        {
            name: "Habits",
            background: "clickup-purple",
            link: "https://app.clickup.com/8450846/v/l/81wry-329",
            target: "_self",
            icon: '<svg viewBox="0 0 511.979 511.979" xml:space="preserve"><g><g><g><path d="M341.552,85.334c-0.077-0.001-0.152-0.012-0.229-0.012H222.159l27.582-27.582c8.331-8.331,8.331-21.839,0-30.17 c-8.331-8.331-21.839-8.331-30.17,0l-64,64c-0.497,0.497-0.967,1.02-1.413,1.563c-0.202,0.246-0.378,0.506-0.568,0.759 c-0.228,0.304-0.463,0.601-0.674,0.917c-0.203,0.303-0.379,0.618-0.564,0.929c-0.171,0.286-0.351,0.566-0.509,0.861 c-0.169,0.317-0.313,0.643-0.465,0.966c-0.145,0.308-0.299,0.611-0.43,0.926c-0.13,0.314-0.235,0.635-0.349,0.953 c-0.122,0.338-0.251,0.672-0.356,1.018c-0.096,0.318-0.167,0.642-0.248,0.964c-0.089,0.353-0.188,0.701-0.259,1.061 c-0.074,0.372-0.118,0.748-0.171,1.122c-0.045,0.314-0.104,0.622-0.136,0.94c-0.068,0.693-0.105,1.388-0.105,2.084 c0,0.007-0.001,0.014-0.001,0.021c0,0.008,0.001,0.015,0.001,0.023c0.001,0.695,0.037,1.39,0.105,2.082 c0.031,0.318,0.091,0.627,0.136,0.941c0.054,0.375,0.097,0.75,0.171,1.122c0.071,0.36,0.17,0.708,0.259,1.061 c0.081,0.322,0.151,0.645,0.248,0.963c0.105,0.346,0.235,0.68,0.356,1.019c0.114,0.318,0.219,0.638,0.348,0.951 c0.131,0.316,0.285,0.619,0.43,0.927c0.152,0.323,0.296,0.649,0.465,0.965c0.158,0.295,0.338,0.576,0.51,0.862 c0.185,0.31,0.361,0.625,0.564,0.928c0.212,0.317,0.448,0.615,0.676,0.919c0.189,0.252,0.364,0.512,0.566,0.757 c0.446,0.544,0.916,1.067,1.413,1.564l64,64c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17l-27.582-27.582 h118.984c0.057,0,0.112,0.009,0.169,0.009c70.778,0,128,57.222,128,128c0,31.068-12.408,60.299-34.121,82.031 c-8.328,8.335-8.322,21.842,0.013,30.17c8.335,8.328,21.842,8.322,30.17-0.013c29.612-29.637,46.605-69.67,46.605-112.188 C511.979,161.736,435.783,85.464,341.552,85.334z" /><path d="M358.39,418.083c0.227-0.303,0.462-0.6,0.673-0.915c0.203-0.304,0.379-0.619,0.565-0.931 c0.171-0.286,0.35-0.565,0.507-0.859c0.17-0.318,0.314-0.645,0.467-0.97c0.145-0.306,0.298-0.608,0.428-0.922 c0.13-0.315,0.236-0.637,0.35-0.957c0.121-0.337,0.25-0.669,0.354-1.013c0.097-0.32,0.168-0.646,0.249-0.969 c0.089-0.351,0.187-0.698,0.258-1.055c0.074-0.375,0.118-0.753,0.173-1.13c0.044-0.311,0.104-0.617,0.135-0.932 c0.138-1.4,0.138-2.811,0-4.211c-0.031-0.316-0.09-0.622-0.135-0.933c-0.054-0.377-0.098-0.755-0.172-1.13 c-0.071-0.358-0.169-0.705-0.258-1.056c-0.081-0.323-0.152-0.648-0.249-0.968c-0.104-0.345-0.234-0.677-0.355-1.014 c-0.115-0.32-0.22-0.642-0.35-0.957c-0.13-0.314-0.283-0.615-0.428-0.921c-0.153-0.325-0.297-0.653-0.468-0.971 c-0.157-0.293-0.336-0.572-0.506-0.857c-0.186-0.312-0.363-0.628-0.566-0.932c-0.211-0.315-0.445-0.611-0.671-0.913 c-0.191-0.255-0.368-0.516-0.571-0.764c-0.439-0.535-0.903-1.05-1.392-1.54c-0.007-0.008-0.014-0.016-0.021-0.023l-64-64 c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17l27.582,27.582H170.836c-0.057,0-0.112-0.009-0.169-0.009 c-70.778,0-128-57.222-128-128c0-31.068,12.408-60.299,34.121-82.031c8.328-8.335,8.322-21.842-0.013-30.17 c-8.335-8.328-21.842-8.322-30.17,0.013C16.993,173.43,0,213.463,0,255.981c0,94.262,76.196,170.534,170.427,170.664 c0.077,0.001,0.152,0.012,0.229,0.012h119.163l-27.582,27.582c-8.331,8.331-8.331,21.839,0,30.17 c8.331,8.331,21.839,8.331,30.17,0l64-64c0.004-0.004,0.007-0.008,0.011-0.012c0.492-0.493,0.959-1.012,1.402-1.551 C358.024,418.597,358.2,418.337,358.39,418.083z" /></g></g></g></svg>',
        },
    ]

    linkPopulate(appData, "notion-tray", "Notes")
}


function actionPopulate(data, tray) {
    var dataLength = data.length

    var htmlString = "";

    for (i = 0; i < dataLength; i++) {
        var appHTML = `<a class="clickable action ${data[i].background}" href="${data[i].link}" target="${data[i].target}"><div class="action-icon">${data[i].icon}</div><div class="spacer"></div><p>${data[i].name}</p></a>`

        htmlString = `${htmlString}${appHTML}`
    }

    var container = document.getElementById(tray)
    container.classList.add("action-tray")
    container.innerHTML = htmlString
}

function linkPopulate(data, tray, title) {
    var dataLength = data.length

    var htmlString = "";

    for (i = 0; i < dataLength; i++) {
        // var appHTML = `<a class="clickable action ${data[i].background}" href="${data[i].link}" target="${data[i].target}"><div class="action-icon">${data[i].icon}</div><div class="spacer"></div><p>${data[i].name}</p></a>`
        var appHTML = `<a class="clickable link-container ${data[i].background}" href="${data[i].link}" target="${data[i].target}"><div class="link-icon">${data[i].icon}</div><p>${data[i].name}</p></a>`

        htmlString = `${htmlString}${appHTML}`
    }

    htmlString = `<div class="content-title">${title}</div><div class="link-tray">${htmlString}</div>`
    var container = document.getElementById(tray)
    container.classList.add("content-container")
    container.innerHTML = htmlString
}

