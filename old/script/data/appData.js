// //@ delete this page
// const appData = {
//     // 'main': [
//     //     {
//     //         name: 'Outlook',
//     //         link: 'ms-outlook://',
//     //         desc: 'Email',
//     //         thumb: 'outlook.jpeg',
//     //         accent: '0078d4',
//     //         distract: false,
//     //     },
//     //     {
//     //         name: 'Spark',
//     //         link: 'readdle-spark://',
//     //         desc: 'Email',
//     //         thumb: 'spark.jpeg',
//     //         color: Colors.blue,
//     //         distract: false,
//     //     },
//     //     commonApps.onedrive('https://purdue0-my.sharepoint.com'),
//     //     commonApps.notion('https://www.notion.so/Homepage-2-0-ebdb7991969f49ffa7be6906f7685945'),
//     //     {
//     //         name: 'TickTick',
//     //         link: 'ticktick://',
//     //         desc: 'To do list',
//     //         thumb: 'ticktick.jpeg',
//     //         color: Colors.blue,
//     //         distract: false,
//     //     },
//     //     {
//     //         name: 'Tasks',
//     //         link: 'https://app.clickup.com/8450846/v/l/6-48362200-1',
//     //         desc: 'Tasks',
//     //         thumb: 'double-check.png',
//     //         color: Colors.blue,
//     //         distract: false,
//     //     },
//     //     {
//     //         name: 'Homework',
//     //         link: 'https://app.clickup.com/8450846/v/l/4-54680096-1',
//     //         desc: 'Tasks',
//     //         thumb: thumbData['course'],
//     //         color: Colors.blue,
//     //         distract: false,
//     //     },
//     // ],
//     // 'notion': [
//     //     {
//     //         name: 'Inbox',
//     //         link: 'https://www.notion.so/Inbox-90dd1c97df2d4bee8c605c27dfb5fb54',
//     //         desc: 'Ideas & Notes',
//     //         thumb: 'inbox.png',
//     //         accent: 'F4B459',
//     //         distract: false,
//     //     },
//     //     {
//     //         name: 'College',
//     //         link: 'https://www.notion.so/College-fe3b0260a5944eb9a88f36efb2f69123',
//     //         desc: 'School, Clubs & Courses',
//     //         thumb: thumbData['tv'],
//     //         accent: 'F4B459',
//     //         distract: false,
//     //     },
//     //     {
//     //         name: 'Spain',
//     //         link: 'https://www.notion.so/UC3M-946102702eb24209a3ce657c170e27f0',
//     //         desc: 'Study Abroad & Paperwork',
//     //         thumb: thumbData['spain'],
//     //         color: Colors.yellow,
//     //         distract: false,
//     //     },
//     //     {
//     //         name: 'Reflect',
//     //         link: 'https://www.notion.so/hrishabhn/Reflection-af521d25d2954a29b3945d3afb1f3849',
//     //         desc: 'Thoughts & Ideas',
//     //         thumb: thumbData['thought'],
//     //         color: Colors.cyan,
//     //         distract: false,
//     //     },
//     // ],
//     // 'school': [
//     //     {
//     //         name: 'Homework',
//     //         link: 'https://app.clickup.com/8450846/v/l/4-20137584-1',
//     //         desc: 'Assignments',
//     //         thumb: thumbData['book'],
//     //         color: Colors.red,
//     //         distract: false,
//     //     },
//     // ],
//     // 'shopping': [
//     //     {
//     //         name: 'Amazon',
//     //         link: 'https://www.amazon.es',
//     //         desc: 'Shopping',
//     //         thumb: 'amazon.jpeg',
//     //         accent: 'bea977',
//     //         distract: false,
//     //     },
//     //     {
//     //         name: 'Apple',
//     //         link: 'https://www.apple.com',
//     //         desc: 'Online Store',
//     //         thumb: 'apple.png',
//     //         accent: '555555',
//     //         distract: false,
//     //     },
//     //     {
//     //         name: 'ASOS',
//     //         link: 'https://www.asos.com',
//     //         desc: 'Clothes',
//     //         thumb: 'asos.jpeg',
//     //         color: Colors.secondary,
//     //         distract: false,
//     //     },
//     // ],
//     'bookmarks': [
//         {
//             name: 'Old',
//             link: 'file:///Users/hrishabh/Documents/GitHub/oldDash/index.html',
//             desc: 'Previous Version',
//             thumb: thumbData['more'],
//             color: Colors.secondary,
//             distract: false,
//         },
//         {
//             name: 'Numberbarn',
//             link: 'https://www.numberbarn.com/account/messages',
//             desc: 'Text Messages',
//             icon: SFSymbols.phone.fill,
//             color: Colors.indigo,
//             distract: false,
//         },
//         {
//             name: 'Version 6.4',
//             link: 'file:///Users/hrishabh/Downloads/dashboard%206.4/index.html',
//             desc: 'Old Version',
//             thumb: thumbData['more'],
//             color: Colors.secondary,
//             distract: false,
//         },
//         {
//             name: 'Gmail',
//             link: 'https://mail.google.com/mail/u/0/#inbox',
//             desc: 'Email',
//             thumb: 'gmail.jpeg',
//             accent: colorData['google'].red,
//             distract: false,
//         },
//         {
//             name: 'Google Maps',
//             link: 'https://www.google.com/maps',
//             searchBase: 'https://www.google.com/maps/search/?api=1&query=',
//             desc: 'Navigation & Transportation',
//             thumb: 'google_maps.jpeg',
//             accent: colorData['google'].green,
//             distract: false,
//         },
//         {
//             name: 'Apple Maps',
//             link: 'maps://',
//             desc: 'Navigation & Transportation',
//             thumb: 'apple_maps.jpeg',
//             color: Colors.green,
//             distract: false,
//         },
//         {
//             name: 'Citymapper',
//             link: 'https://citymapper.com',
//             desc: 'Navigation & Transportation',
//             thumb: 'citymapper.jpeg',
//             accent: '2dc922',
//             distract: false,
//         },
//         {
//             name: 'Pirate Bay',
//             link: 'https://thepiratebay.org',
//             desc: 'Movies & TV Shows',
//             thumb: 'pirate.png',
//             accent: 'a4724e',
//             distract: false,
//         },
//         {
//             name: 'RARBG',
//             link: 'https://rarbg.to',
//             desc: 'Movies & TV Shows',
//             thumb: 'download.png',
//             color: Colors.blue,
//             distract: false,
//         },
//         // to delete
//         {
//             name: 'Password Generator',
//             link: 'https://passwordsgenerator.net/?length=15&symbols=0&numbers=1&lowercase=1&uppercase=1&similar=1&ambiguous=1&client=1&autoselect=0',
//             desc: 'Secure Passwords',
//             thumb: 'key.png',
//             color: Colors.yellow,
//             distract: false,
//         },
//         {
//             name: 'Glovo',
//             link: 'https://glovoapp.com/es/en/madrid',
//             searchBase: 'https://glovoapp.com/es/en/madridsearch-glovo/',
//             desc: 'Food Delivery',
//             thumb: 'glovo.jpeg',
//             accent: 'ffc244',
//             distract: false,
//         },
//         {
//             name: 'Symbolab',
//             link: 'https://www.symbolab.com',
//             desc: 'Calculator',
//             thumb: 'symbolab.jpeg',
//             accent: 'e02342',
//             distract: false,
//         },
//     ],
//     // 'video': [
//     //     {
//     //         name: 'Up next',
//     //         link: 'https://www.youtube.com/playlist?list=PLGSQnvawXkTgJjsn_zoXdJf5pZR-qxLiH',
//     //         desc: 'YouTube Queue',
//     //         icon: SFSymbols.list.bullet,
//     //         color: Colors.indigo,
//     //         distract: true,
//     //     },
//     // ],
//     // 'travel': [
//     //     {
//     //         name: 'Flighty',
//     //         link: 'flighty://',
//     //         desc: 'Flight Log & Status',
//     //         thumb: 'flighty.jpeg',
//     //         color: Colors.secondary,
//     //         distract: false,
//     //     },
//     //     // {
//     //     //     name: 'Tenerife',
//     //     //     trigger: function () { modal.add(trip.card('tenerife')) },
//     //     //     desc: 'Easter Break Trip',
//     //     //     thumb: 'flighty.jpeg',
//     //     // color: Colors.secondary,
//     //     //     distract: false,
//     //     // },
//     //     // commonApps.flight('mad-tfs'),
//     //     // commonApps.flight('tfs-mad'),
//     // ],
//     // 'design': [
//     //     {
//     //         name: 'Visual Studio Code',
//     //         link: 'vscode://',
//     //         desc: 'Code',
//     //         thumb: 'vscode.png',
//     //         accent: '0098FF',
//     //         distract: true,
//     //         tags: [
//     //             'vscode',
//     //         ],
//     //     },
//     // ],
// }