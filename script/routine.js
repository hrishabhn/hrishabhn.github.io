const routineData = [
    {
        time: 'morning',
        icon: '<svg class="stroke" xmlns="http://www.w3.org/2000/svg" viewBox="1 1 28 28"><path d="M15 8a7 7 0 1 0 0 14 7 7 0 1 0 0-14Z"/><path stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M15 2v3m0 20v3m13-13h-3M5 15H2m22.192-9.192-2.121 2.121M7.929 22.071l-2.121 2.121m18.384 0-2.121-2.121M7.929 7.929 5.808 5.808"/></svg>',
        data: [
            {
                name: 'Get Ready',
                color: 'blue',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M22 0v7.281A17.204 17.204 0 0 1 25 7c1.027 0 2.027.11 3 .281V0Zm3 9c-6.605 0-12.129 4.273-13.594 10h27.188C37.129 13.273 31.605 9 25 9ZM10 21c-1.652 0-3 1.348-3 3s1.348 3 3 3h30c1.652 0 3-1.348 3-3s-1.348-3-3-3Zm7 9a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Zm8 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Zm8 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Zm-20 8a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Zm8 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Zm8 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Zm8 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4ZM9 46a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Zm8 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Zm8 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Zm8 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Zm8 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Z"/></svg>', 
            },
            {
                name: 'Emails',
                color: 'indigo',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 20 20"><path d="M4 4c-.93 0-1.7076875.6429063-1.9296875 1.5039062L12 11.726562l9.935547-6.2050776C21.719547 4.6504844 20.937 4 20 4H4zM2 7.734375V18c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7.7558594L12 14 2 7.734375z"/></svg>',
            },
            {
                name: 'Breakfast',
                color: 'green',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480.228 480.228"><path d="M239.63.113c-26.1.014-52.054 4.252-76.661 12.56-4.36 1.48-6.582 6.31-4.852 10.58 18.67 45.97-5.218 109.409-44.388 126.329a.203.203 0 0 0-.08.041c-19.81 8.49-52.642 6.78-81.622-10.78-4.11-2.49-9.47-.75-11.42 3.64-13.25 29.74-20.33 62.14-20.6 95.63-1.084 132.671 106.089 242.407 240.722 242 156.447-.468 271.86-148.841 231.242-301.925-.838-3.161-4.367-4.764-7.303-3.323-1.826.896-2.842 2.576-2.961 4.387-1.156 17.529-12.196 32.27-26.67 41.303-34.183 21.248-54.096-6.67-97.08 12.75-6.341 2.865-13.043 4.396-19.594 4.642-3.195.12-6.037 2.041-7.242 5.002a347.236 347.236 0 0 0-4.453 11.516c-5.635 15.342-21.257 17.239-33.4 14.37-5.328-1.257-10.326 3.115-9.766 8.56 1.107 10.756-.388 23.1-7.033 33.968-9.17 14.99-23.06 18.12-36.5 21.16-12.38 2.79-26.4 5.96-41.17 18.57-15.598 13.32-18.015 26.04-35.842 29.52-17.402 3.362-37.507-4.679-49.068-19.25-7.84-9.86-8.45-18.8-8.98-26.69-.46-6.72-.891-13.058-5.651-21.278-4.85-8.38-9.75-11.431-15.42-14.961-6.08-3.78-12.97-8.06-17.96-18.49-10.99-22.99-2.45-57.13 17.92-71.62 20.494-14.577 37.16-.722 52.43-12.17 5.97-4.47 7.69-9.3 9.86-15.42 2.47-6.97 5.54-15.63 15.54-23.01 17.73-13.08 49.68-15.83 65.89.08 18.664 18.295-.869 41.441 13.09 64.6 6.802 11.33 15.48 13.63 24.632 20.38 5.294 3.903 13.296 2.53 16.358-4.84 2.986-7.2 5.657-14.502 8.668-21.637.93-2.205.767-4.696-.323-6.828-5.414-10.587-7.109-22.902-4.406-35.045 4.586-20.606 1.386-33.25-4.35-49.52-4.5-12.77-10.11-28.66-2.99-48.12 5.696-15.498 17.514-29.222 33.635-34.173 2.574-.79 4.624-2.794 5.348-5.387 1.672-5.99 4.258-11.879 7.736-17.203 3.026-4.632.67-10.817-4.686-12.209a240.562 240.562 0 0 0-60.6-7.709zm-135.837.91C85.655.75 68.363 12.22 62.549 31.082c-23.478-11.533-51.627.535-59.352 25.531-3.35 10.84-2.268 22.33 3.022 32.37 23.152 43.836 74.917 57.21 101.119 45.93.01 0 .03-.01.04-.02 25.54-11.03 52.24-57.47 35.94-105.13-3.68-10.73-11.31-19.39-21.5-24.39-5.84-2.862-11.98-4.258-18.025-4.35zM412.527 8.94a58.007 58.007 0 0 0-16.298 2.264c-4.97 1.43-7.27 7.01-4.85 11.58 3.77 7.12 5.8 15.2 5.86 23.46.08 10.21-15.83 10.46-16-.12 0-35.11-47.262-46.58-64.702-14.36-2.37 4.38-.09 9.79 4.65 11.35 15.57 5.14 28.651 17.62 33.561 34.1 2.99 10.08-12.38 14.46-15.36 4.51-6.34-21.38-32.704-31.49-49.96-20.53-7.26 4.612-13.29 13.12-16.2 21.1-10.98 29.98 19.13 45.33 7.93 95.61-2.86 12.85 1.29 24.69 9.16 32.85a387.788 387.788 0 0 0-13.7 32.7 7.995 7.995 0 0 0 4.76 10.26c4.009 1.498 8.715-.517 10.26-4.76 20.353-55.43 52.656-104.457 98.18-145.68 4.524-4.057 5.528-4.85 6.37-5.6 3.4-2.91 8.54-2.44 11.39 1.02 2.76 3.37 2.31 8.31-1 11.15-34.394 29.519-61.506 64.475-81.295 102.438-2.036 3.907 1.959 8.295 5.977 6.49 47.325-21.252 68.27 5.016 95.328-11.808 26.02-16.29 23.81-44.73 3.8-58.73 0-.01-.01-.01-.01-.01-4.95-3.46-10.62-5.62-16.75-6.15-10.53-.88-9.2-16.82 1.28-15.95 17.23 1.45 32.08 11.77 40.22 25.88 2.54 4.39 8.38 5.4 12.23 2.1 26.06-22.3 9.48-62.64-22.39-60.87-2.39.09-4.59.539-5.03.599-10.17 1.99-13.61-13.589-3.39-15.629 7.93-1.59 16.27-1.34 24.2.95 4.95 1.43 9.94-1.99 10.3-7.13 2.493-34.718-25.805-62.916-58.52-63.084zM176.793 162.857c-8.953-.035-18.669 2.581-25.666 7.743-6.057 4.469-7.78 9.327-9.963 15.478-2.452 6.913-5.504 15.516-15.342 22.885-11.67 8.74-22.97 8.4-32.052 8.129-7.881-.237-14.1-.423-20.7 4.271-13.848 9.85-20.286 35.932-12.756 51.682 2.967 6.206 6.55 8.433 11.971 11.803 6.223 3.869 13.967 8.685 20.82 20.525 6.623 11.442 7.254 20.744 7.762 28.217.485 7.143.807 11.86 5.545 17.824 7.852 9.882 22.25 15.684 33.486 13.492 10.573-2.06 12.172-12.02 28.508-25.976 33.397-28.53 62.528-16.49 74.414-35.916 6.826-11.157 5.898-26 1.948-35.76-3.422-8.458-8.506-11.545-15.541-15.815-6.897-4.187-15.481-9.397-22.332-20.78-16.576-27.547.145-50.917-10.58-61.438-4.318-4.235-11.623-6.332-19.522-6.364zm-23.586 59.836c20.05.072 38.261 13.622 43.412 33.967 6.091 24.053-8.522 48.577-32.576 54.668-24.16 6.117-48.605-8.624-54.67-32.576-6.091-24.055 8.522-48.58 32.576-54.67a45.182 45.182 0 0 1 11.258-1.389zm-.252 16a29.196 29.196 0 0 0-7.076.9c-15.538 3.935-24.931 19.691-20.996 35.231 3.925 15.501 19.73 24.92 35.23 20.994 7.51-1.9 13.83-6.613 17.795-13.267 8.206-13.768 3.704-31.552-10.066-39.758-4.58-2.73-9.698-4.117-14.887-4.1zm241.813.057a22.095 22.095 0 0 1 15.064 6.46l22.15 22.151c9.38 9.381 8.466 24.951-2.056 32.953a24.129 24.129 0 0 0-9.336 16.47c-2.081 18.733-16.62 33.27-35.354 35.353-11.243 1.249-19.967 9.972-21.216 21.215-2.082 18.733-16.619 33.27-35.352 35.351-6.503.722-12.506 4.128-16.47 9.34-7.995 10.51-23.565 11.444-32.954 2.055l-22.148-22.15c-6.552-6.553-8.323-16.54-4.407-24.852 5.885-12.49 18.064-21.194 31.786-22.719 11.243-1.25 19.967-9.975 21.216-21.217 2.081-18.733 16.618-33.271 35.352-35.353 11.243-1.25 19.968-9.972 21.217-21.215 1.525-13.722 10.23-25.9 22.719-31.785a21.668 21.668 0 0 1 9.789-2.057zm-.338 15.99a5.727 5.727 0 0 0-2.631.54c-7.495 3.531-12.722 10.841-13.637 19.077-2.08 18.733-16.618 33.271-35.353 35.352-11.242 1.25-19.966 9.975-21.215 21.217-2.081 18.733-16.62 33.27-35.354 35.351-8.236.915-15.547 6.14-19.078 13.635-1.049 2.225-.548 4.927 1.246 6.72l22.15 22.151c2.495 2.494 6.74 2.417 8.905-.428 6.603-8.68 16.603-14.35 27.437-15.552 11.242-1.25 19.967-9.974 21.217-21.217 2.081-18.733 16.619-33.273 35.354-35.354 11.242-1.25 19.966-9.973 21.215-21.216 1.203-10.833 6.871-20.834 15.552-27.438 2.826-2.15 2.944-6.391.43-8.904l-22.15-22.149a6.07 6.07 0 0 0-4.088-1.785z"/></svg>',
            },
            {
                name: 'Look Over Agenda',
                color: 'red',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="4 4 22 22"><path d="M24 4H6a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM7 23a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-1-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-5H6V6h18v4z"></path></svg>',
            },
        ],
    },
    {
        time: 'night',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 0.73597693 25.01425171 25.01425171"><path d="M21.984375 2.4863281A1.0001 1.0001 0 0 0 21 3.5V4h-.5a1.0001 1.0001 0 1 0 0 2h.5v.5a1.0001 1.0001 0 1 0 2 0V6h.5a1.0001 1.0001 0 1 0 0-2H23v-.5a1.0001 1.0001 0 0 0-1.015625-1.0136719zM8.5136719 6.046875a1.0001 1.0001 0 0 0-.0800781.0039062C5.3980951 6.3391319 3 8.8892308 3 12c0 1.574112.6175159 3.00727 1.6171875 4.080078C3.6339019 16.899532 3 18.11811 3 19.5 3 21.985 5.015 24 7.5 24h15c2.485 0 4.5-2.015 4.5-4.5 0-1.965-1.268438-3.618422-3.023438-4.232422C23.853562 12.892578 21.906 11 19.5 11c-.486 0-.944812.096281-1.382812.238281C16.991187 9.3032812 14.9 8 12.5 8c-1.290021 0-2.488548.3801109-3.4980469 1.0292969C9.0018572 9.019295 9 9.0100264 9 9c0-.5241267.1462539-1.010175.4003906-1.4609375a1.0001 1.0001 0 0 0-.8867187-1.4921875zM25.984375 7.9863281A1.0001 1.0001 0 0 0 25 9a1.0001 1.0001 0 1 0 0 2 1.0001 1.0001 0 1 0 2 0 1.0001 1.0001 0 1 0 0-2 1.0001 1.0001 0 0 0-1.015625-1.0136719zm-18.8476562.5078125C7.1156199 8.674507 7 8.8132397 7 9c0 2.749516 2.2504839 5 5 5 .18676 0 .325493-.11562.505859-.136719C11.84329 15.131864 10.539523 16 9 16c-2.2203746 0-4-1.779625-4-4 0-1.539523.8681356-2.8432898 2.1367188-3.5058594z"/></svg>',
        data: [
            {
                name: 'Dinner',
                color: 'green',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 46 46"><path d="M25 2C12.318 2 2 12.317 2 25s10.318 23 23 23 23-10.317 23-23S37.682 2 25 2zm-10.2 9h2.206a1 1 0 0 0-.006.1V19a1 1 0 1 0 2 0v-7.9a1 1 0 0 0-.004-.1H21.006a1 1 0 0 0-.006.1V19a1 1 0 1 0 2 0v-7.9a1 1 0 0 0-.004-.1H25.1s.9 4.7.9 8c0 5.7-4.3 4.8-4.3 7s1.3 4.2 1.3 9-1.7 6-3 6-3-.9-3-6 1.3-6.8 1.3-9-4.3-1.4-4.3-7c0-5 .8-8 .8-8zM30 11c5.1 2.5 6 7 6 9.6 0 4.4-3 6.5-3 9.4 0 1.7 1 3 1 6s-.5 5-2 5-2-1.2-2-6V11z"/></svg>',
            },
            {
                name: 'Clean Room',
                color: 'blue',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M46.4375.03125c-.898437.0078125-1.742187.367188-2.21875 1.09375L36.625 15.40625c.5625.195313 1.828125.757813 6.03125 2.65625l.0625.03125c.726563.328125 1.28125.5625 1.5.65625.074219.035156.144531.089844.21875.125l5.53125-15.3125c.347656-1.210937-.519531-2.605469-1.90625-3.15625-.515625-.257812-1.085937-.3789062-1.625-.375ZM4 8c-2.207031 0-4 1.792969-4 4 0 2.207031 1.792969 4 4 4 2.207031 0 4-1.792969 4-4 0-2.207031-1.792969-4-4-4Zm9 3c-1.105469 0-2 .894531-2 2s.894531 2 2 2 2-.894531 2-2-.894531-2-2-2Zm19.15625 5.625c-1.933594.144531-3.617187 1.105469-4.8125 2.78125.753906 1.269531 2.074219 2.820313 3.9375 2.78125.492188-.019531.90625.335938 1 .8125.378906.589844 2.707031 1.636719 3.375 1.375.28125-.109375.582031-.085937.84375.0625.261719.148438.449219.390625.5.6875.039063.164063.476563.738281 1.375 1.15625.707031.328125 1.394531.410156 1.78125.21875.25-.125.523438-.128906.78125-.03125.261719.097656.488281.304688.59375.5625.675781 1.648438 3.761719 1.769531 5.875 1.59375.308594-1.339844.226563-2.734375-.25-4.03125-.660156-1.785156-1.96875-3.195312-3.75-4-.1875-.082031-.792969-.371094-1.5625-.71875-3.5625-1.609375-5.574219-2.484375-5.96875-2.59375-1.304687-.515625-2.558594-.742187-3.71875-.65625ZM11.5 18C8.46875 18 6 20.46875 6 23.5S8.46875 29 11.5 29s5.5-2.46875 5.5-5.5-2.46875-5.5-5.5-5.5Zm14.78125 3.40625c-.3125.742188-.667969 1.4375-1.03125 2.09375.429688 1.046875 1.699219 3.472656 4.03125 2.9375.269531-.0625.554688-.027344.78125.125.230469.152344.359375.386719.40625.65625.066406.375.507813.820313 1.125 1.15625.875.472656 1.820313.578125 2.21875.40625.261719-.113281.554688-.121094.8125 0 .257813.121094.453125.351563.53125.625.140625.476563.632813.964844 1.3125 1.3125.800781.40625 1.714844.554688 2.3125.34375.460938-.160156.953125.035156 1.1875.46875C40.851563 33.167969 43.75 33.34375 46 33.1875c.285156-.8125.550781-1.648437.8125-2.53125-.269531.015625-.550781.03125-.84375.03125-2.09375 0-4.597656-.414062-5.84375-2.125-.84375.113281-1.8125-.070312-2.78125-.5625-.703125-.359375-1.476562-.910156-1.9375-1.59375-1.273437 0-2.738281-.707031-3.46875-1.15625-.566406-.347656-1.007812-.691406-1.28125-1.0625-1.984375-.183594-3.402344-1.476562-4.375-2.78125ZM24 25.46875c-6.199219 8.613281-16.785156 8.359375-16.90625 8.34375-.394531-.035156-.78125.175781-.96875.53125-.1875.355469-.160156.78125.09375 1.09375 1.785156 2.203125 3.703125 4.066406 5.65625 5.65625.921875.183594 6.722656 1.003906 12.46875-5.65625.359375-.417969.988281-.453125 1.40625-.09375.417969.359375.453125.988281.09375 1.40625-4.007812 4.644531-8.234375 6.097656-11.1875 6.40625 2.46875 1.664063 4.957031 2.921875 7.28125 3.875 1.476563-.308594 6.429688-1.789062 10.8125-8.46875.304688-.460937.945313-.617187 1.40625-.3125.460938.304688.585938.945313.28125 1.40625-3.304687 5.035156-6.921875 7.398438-9.46875 8.5C30.167969 49.839844 34.046875 49.988281 34.375 50h.03125c.1875 0 .371094-.054687.53125-.15625.28125-.175781 6.070313-3.957031 10.3125-14.59375-.164062.003906-.332031.03125-.5.03125-2.1875 0-4.714844-.441406-6.09375-2.15625-.96875.117188-2.078125-.105469-3.09375-.625-.828125-.425781-1.484375-.996094-1.90625-1.65625-1.0625.089844-2.210937-.292969-3-.71875-.8125-.441406-1.449219-.996094-1.8125-1.625-2.300781.121094-3.898437-1.445312-4.84375-3.03125Z"/></svg>',
            },
            {
                name: 'Emails',
                color: 'indigo',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 20 20"><path d="M4 4c-.93 0-1.7076875.6429063-1.9296875 1.5039062L12 11.726562l9.935547-6.2050776C21.719547 4.6504844 20.937 4 20 4H4zM2 7.734375V18c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7.7558594L12 14 2 7.734375z"/></svg>',
            },
            {
                name: 'Vitamins',
                color: 'purple',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M44.910156 5.085938C42.273438 2.453125 38.769531 1 35.039063 1c-3.726563 0-7.230469 1.453125-9.871094 4.089844-.792969.796875-19.246094 19.25-20.082031 20.082031-5.437501 5.441406-5.437501 14.296875 0 19.738281C7.726563 47.546875 11.230469 49 14.960938 49c3.726562 0 7.230468-1.449219 9.871093-4.089844.675782-.679687 19.238282-19.242187 20.082032-20.082031 5.441406-5.441406 5.4375-14.296875-.003907-19.742187ZM43.5 23.410156c-.367187.371094-4.152344 4.152344-8.339844 8.335938L18.25 14.835938c4.195313-4.195313 7.984375-7.984375 8.335938-8.332032C28.847656 4.242188 31.847656 3 35.039063 3c3.195312 0 6.199218 1.242188 8.457031 3.503906 4.660156 4.660157 4.664062 12.25.003906 16.90625Z"/></svg>',
            },
            {
                name: "Tomorrow's Agenda",
                color: 'red',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="4 4 22 22"><path d="M24 4H6a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM7 23a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-1-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-5H6V6h18v4z"></path></svg>',
            },
            {
                name: 'Read',
                color: 'orange',
                icon: '<svg viewBox="0 -40 448 448" xmlns="http://www.w3.org/2000/svg"><path d="m408 319.929688v-319.929688l-12.207031 1.023438c-48.957031 4.046874-96.976563 15.75-142.304688 34.6875l-21.488281 8.921874v318.664063l15.648438-6.503906c46.90625-19.515625 96.570312-31.589844 147.199218-35.792969zm0 0"></path><path d="m448 47.296875h-24v280c.015625 4.171875-3.183594 7.65625-7.34375 8l-20.488281 1.679687c-5.914063.488282-11.8125 1.09375-17.6875 1.816407-1.90625.230469-3.800781.535156-5.695313.800781-3.960937.527344-7.914062 1.0625-11.855468 1.6875-2.296876.367188-4.578126.796875-6.867188 1.199219-3.527344.617187-7.0625 1.230469-10.582031 1.925781-2.402344.480469-4.800781 1.019531-7.25 1.539062-3.351563.710938-6.703125 1.4375-10.03125 2.230469-2.496094.59375-4.984375 1.222657-7.464844 1.855469-3.238281.800781-6.460937 1.664062-9.679687 2.5625-2.503907.6875-5.007813 1.414062-7.503907 2.148438-3.199219.945312-6.351562 1.90625-9.511719 2.914062-2.472656.800781-4.949218 1.601562-7.414062 2.398438-3.164062 1.066406-6.3125 2.167968-9.449219 3.304687-2.398437.871094-4.800781 1.746094-7.253906 2.664063-1.097656.417968-2.1875.863281-3.28125 1.289062h183.359375zm0 0"></path><path d="m52.207031 1.023438-12.207031-1.023438v319.953125l14.199219 1.207031c50.597656 4.230469 100.21875 16.378906 147.046875 36l14.753906 6.136719v-318.664063l-21.464844-8.914062c-45.332031-18.941406-93.359375-30.648438-142.328125-34.695312zm0 0"></path><path d="m0 47.296875v320h183.488281c-.984375-.386719-1.96875-.800781-2.960937-1.167969-2.289063-.871094-4.597656-1.703125-6.902344-2.542968-3.25-1.179688-6.496094-2.328126-9.769531-3.425782-2.367188-.800781-4.742188-1.578125-7.121094-2.335937-3.246094-1.066407-6.503906-2.070313-9.765625-3.007813-2.402344-.703125-4.800781-1.410156-7.199219-2.082031-3.289062-.910156-6.585937-1.773437-9.890625-2.621094-2.398437-.617187-4.800781-1.234375-7.253906-1.808593-3.351562-.800782-6.722656-1.535157-10.089844-2.257813-2.398437-.519531-4.800781-1.046875-7.199218-1.527344-3.488282-.6875-6.992188-1.304687-10.496094-1.917969-2.296875-.402343-4.59375-.800781-6.894532-1.210937-3.867187-.613281-7.746093-1.132813-11.625-1.65625-1.960937-.261719-3.90625-.574219-5.863281-.796875-5.867187-.710938-11.734375-1.316406-17.601562-1.816406l-21.535157-1.824219c-4.152343-.355469-7.335937-3.835937-7.320312-8v-280zm0 0"></path></svg>',
            },
        ],
    },
]

function routineLoad() {
    const time = timeOfDay()

    if ((time == 2) || (time == 3)) {
        var n = 0
    } else if ((time == 6) || (time == 7) || (time == 0)) {
        var n = 1
    }

    if (n + 1) {
        return routineTrayElement(n)
    } else {

        var tray = document.createElement('div')
        tray.classList = 'tray'
        tray.append(rightbarTitleElement('Routines'))
        tray.append(routineOtherContainer(null))
        tray.append(spacerElement(15))

        return tray
    }

}
function routineCookieLoad(i,j) {
    // clearAllCookies()

    if (!getCookie(`routine-${i}-${j}`)) {
        var newData = []
        for (let k = 6; k >= 0; k--) {
            var dateItem = new Date((new Date).getTime() - 86400000 * k)

            const item = {
                date: `${processMonth(dateItem.getMonth(),'short')} ${dateItem.getDate()}, ${dateItem.getFullYear()}`,
                done: false,
            }

            newData.push(item)
        }
        setCookie(`routine-${i}-${j}`,JSON.stringify(newData),7)
    } else {
        var oldData = JSON.parse(getCookie(`routine-${i}-${j}`))

        const lastDate = new Date(oldData[oldData.length - 1].date)
        const updatedToday = lastDate.getDate() == (new Date()).getDate()

        if (!updatedToday) {
            oldData.shift()

            dateItem = new Date()
            const item = {
                date: `${processMonth(dateItem.getMonth(),'short')} ${dateItem.getDate()}, ${dateItem.getFullYear()}`,
                done: false,
            }
            oldData.push(item)
            console.log(oldData)
        }
        setCookie(`routine-${i}-${j}`,JSON.stringify(oldData),7)
    }
}

function routineModal(i) {
    var card = document.createElement('div')
    card.classList = 'routine-modal layer-0-trans'
    card.append(routineTrayElement(i))
    return card
}

function routineTrayElement(i) {
    var tray = document.createElement('div')
    tray.classList = 'tray'
    tray.append(rightbarTitleElement(`Good ${routineData[i].time}.`))
    
    for (let j = 0; j < routineData[i].data.length; j++) {
        routineCookieLoad(i,j)
        tray.append(routineCardElement(i,j))
        tray.append(spacerElement(10))
    }

    tray.append(routineOtherContainer(i))
    tray.append(spacerElement(15))



    return tray
}

function routineCardElement(i,j) {
    var item = document.createElement('div')
    item.classList = 'routine-card layer-1-trans'
    item.id = `routine-${i}-${j}`
    if (JSON.parse(getCookie(`routine-${i}-${j}`))[6].done) {
        item.classList.add('today-done')
    } else {
        item.classList.remove('today-done')
    }

    item.innerHTML = `
    <div class="hstack fill-width">
        <div class="info">
            <p class="text">${routineData[i].data[j].name}</p>
            <div class="spacer-x" style="--size: 2px;"></div>
            <p class="subtext">${calcStreak(i,j)}</p>
        </div>
        <div class="grow"></div>
        <div id="routine-${i}-${j}-icon" class="icon ${routineData[i].data[j].color}">
            ${routineData[i].data[j].icon}
        </div>
        <div class="check layer-fg card-shadow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="65.19 65.191 174.621 174.621" style="enable-background:new 0 0 305.002 305.002" xml:space="preserve"><path d="m218.473 93.97-90.546 90.547-41.398-41.398c-4.882-4.881-12.796-4.881-17.678 0-4.881 4.882-4.881 12.796 0 17.678l50.237 50.237a12.465 12.465 0 0 0 8.839 3.661c3.199 0 6.398-1.221 8.839-3.661l99.385-99.385c4.881-4.882 4.881-12.796 0-17.678-4.882-4.882-12.797-4.882-17.678-.001z"/></svg></div>
    </div>
    <div class="spacer-x" style="--size: 10px;"></div>`

    item.append(routineItemDaysElement(i,j))

    return item
}

function routineItemDaysElement(i,j) {
    const data = JSON.parse(getCookie(`routine-${i}-${j}`))

    var container = document.createElement('div')
    container.classList = 'alldays'

    for (let k = 0; k < 7; k++) {
        const date = new Date(data[k].date)
        const done = data[k].done

        var day = document.createElement('a')
        day.classList = 'item clickable'
        day.id = `routine-${i}-${j}-${k}`
        day.onclick = function() { toggleCookie(i,j,k); toggleDay(i,j,k) }
        
        day.innerHTML = `
        <p class="day">${processDay(date.getDay(),'short')}</p>
        <div class="spacer-x" style="--size: 2px;"></div>
        `
        var num = document.createElement('p')
        if (done) {
            num.classList = `num done ${routineData[i].data[j].color}`
        } else {
            num.classList = 'num image-border'
        }
        num.innerHTML = date.getDate()
        day.append(num)

        container.append(day)

        if (k < 6) {
            container.append(growElement())
        }
    }

    return container
}

function routineOtherContainer(i) {
    var container = document.createElement('div')
    container.classList = 'routine-other-container'

    if (i == 0) {
        container.append(routineOtherButton(1))
    } else if (i == 1) {
        container.append(routineOtherButton(0))
    } else {
        container.append(routineOtherButton(0))
        container.append(spacerElement(10))
        container.append(routineOtherButton(1))
    }


    // `<div class="routine-other-container">
    //     <a class="layer-1 clickable">
    //         <div class="icon">
    //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 28 28"><path d="M15 8a7 7 0 1 0 0 14 7 7 0 1 0 0-14Z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M15 2v3m0 20v3m13-13h-3M5 15H2m22.192-9.192-2.121 2.121M7.929 22.071l-2.121 2.121m18.384 0-2.121-2.121M7.929 7.929 5.808 5.808"/></svg>
    //         </div>
    //         <div class="spacer-x" style="--size: 5px;"></div>
    //         <p>Morning</p>
    //     </a>
    //     <div class="spacer-x" style="--size: 5px;"></div>
    //     <a class="layer-1 clickable">
    //         <p>Night</p>
    //     </a>
    // </div>`


    return container
}

function routineOtherButton(i) {


    var button = document.createElement('a')
    button.classList = 'layer-1-trans clickable-text'
    button.onclick = function() { openModal(routineModal(i)) }
    button.innerHTML = `
    <div class="icon">
        ${routineData[i].icon}
    </div>
    <div class="spacer-x" style="--size: 5px;"></div>
    <p>${routineData[i].time}</p>
    
    
    `



    return button
}


function toggleDay(i,j,k) {
    const complete = JSON.parse(getCookie(`routine-${i}-${j}`))[k].done
    const audio = new Audio('audio/complete.m4a')
    console.log(complete)

    var dayNum = document.getElementById(`routine-${i}-${j}-${k}`).childNodes[5]
    if (complete) {
        dayNum.classList = `num done ${routineData[i].data[j].color}`
        audio.play()
    } else {
        dayNum.classList = `num image-border`
    }

    if (k == 6) {
        var card = document.getElementById(`routine-${i}-${j}`)
        if (JSON.parse(getCookie(`routine-${i}-${j}`))[6].done) {
            card.classList.add('today-done')
        } else {
            card.classList.remove('today-done')
        }
    }
}
function toggleCookie(i,j,k) {
    var cookieData = JSON.parse(getCookie(`routine-${i}-${j}`))
    cookieData[k].done = !cookieData[k].done
    setCookie(`routine-${i}-${j}`,JSON.stringify(cookieData),7)
}

function calcStreak(i,j) {
    const cookieData = JSON.parse(getCookie(`routine-${i}-${j}`))
    // console.log(cookieData)

    var streak = 0

    for (let k = 0; k < cookieData.length; k++) {
        const item = cookieData[k]
        console.log(item.done)
        if (item.done) {
            streak++ 
        } else {
            streak = 0
            // if (!(k == cookieData.length - 1)) {
            //     streak = 0
            // }
        }
    }

    if (streak) {
        if (streak == 7) {
            return `7 day streak. Keep it up!`
        }
        return `${streak} day streak.`
    } else {
        return 'No streak, keep trying!'
    }
}

// function routineTest() {
//     var i = 1
//     for (let j = 0; j < routineData[i].data.length; j++){
//         updateRoutineItem(i,j)
//     }
// }


// function refreshRoutineCookie(i,j) {
//     // console.log(JSON.parse(getCookie(`routine-${i}-${j}`)))
//     // removeCookie(`routine-${i}-${j}`)

//     if (!getCookie(`routine-${i}-${j}`)) {
//         var data = []

//         for (let p = 0; p < 7; p++) {
//             var day = new Date((new Date).valueOf() - (86400000 * p))

//             var item = {
//                 date: `${processMonth(day.getMonth(),'short')} ${day.getDate()}, ${(day.getFullYear())}`,
//                 done: false,
//             }

//             data.unshift(item)
//         }
//         return data
//     } else {
//         var data = JSON.parse(getCookie(`routine-${i}-${j}`))

//         const lastDate = new Date(data[data.length - 1].date)
//         const updatedToday = lastDate.getDate() == (new Date()).getDate()

//         if (!updatedToday) {
//             data.shift()
//             const today = {
//                 date: `${processMonth((new Date()).getMonth(),'short')} ${(new Date()).getDate()}, ${(new Date().getFullYear())}`,
//                 done: false,
//             }
//             data.push(today)
//         }

//         return data
//     }
// }


// function routineItem(i, j) {
//     // const data = routineData[i].data[j]

//     var item = document.createElement('div')
//     item.classList = 'routine-card layer-2'

//     item.id = `routine-${i}-${j}`
//     // item.onclick = function () { routineSwitchToggle(i, j) }
//     item.append(routineItemContent(i,j))

//     return item
// }
// function routineItemContent(i,j) {
//     const cookieData = JSON.parse(getCookie(`routine-${i}-${j}`))

//     var item = document.createElement('div')
//     item.classList = 'vstack fill-width'

//     if (cookieData[cookieData.length - 1].done) {
//         item.classList.add('todaydone')
//     }

//     item.innerHTML = `
//     <div class="hstack fill-width">
//         <div class="info">
//             <p class="text">${routineData[i].data[j].name}</p>
//             <div class="spacer-x" style="--size: 2px;"></div>
//             <p class="subtext">${calcStreak(i,j)}</p>
//         </div>
//         <div class="grow"></div>
//         <div class="icon ${routineData[i].data[j].color}">
//             ${routineData[i].data[j].icon}
//             <div class="check layer-fg card-shadow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="65.19 65.191 174.621 174.621" style="enable-background:new 0 0 305.002 305.002" xml:space="preserve"><path d="m218.473 93.97-90.546 90.547-41.398-41.398c-4.882-4.881-12.796-4.881-17.678 0-4.881 4.882-4.881 12.796 0 17.678l50.237 50.237a12.465 12.465 0 0 0 8.839 3.661c3.199 0 6.398-1.221 8.839-3.661l99.385-99.385c4.881-4.882 4.881-12.796 0-17.678-4.882-4.882-12.797-4.882-17.678-.001z"/></svg></div>
//         </div>
//     </div>
//     <div class="spacer-x" style="--size: 10px;"></div>`

//     item.append(routineItemDays(i,j,cookieData))

//     return item
// }



// function updateRoutineItem(i,j) {
//     var item = document.getElementById(`routine-${i}-${j}`)
//     removeAllChildNodes(item)
//     item.append(routineItemContent(i,j))
// }
// function routineItemDays(i,j,cookieData) {
//     var alldays = document.createElement('div')
//     alldays.classList = 'alldays'
    
//     for (let k = 0; k < cookieData.length; k++) {
//         // console.log(cookieData[i].date)
//         const date = new Date(cookieData[k].date)
//         const done = cookieData[k].done

//         var day = document.createElement('a')
//         day.onclick = function() { toggleCookie(i,j,k); updateRoutineItem(i,j) }
//         day.classList = 'item clickable'
        
//         var num = document.createElement('p')
//         num.classList = 'num image-border'
//         num.innerHTML = date.getDate()
//         if (done) {
//             num.classList = `num done ${routineData[i].data[j].color}`
//         } else {
//             num.classList = 'num image-border'
//         }

//         day.innerHTML = `
//         <p class="day">${processDay(date.getDay(),'short')}</p>
//         <div class="spacer-x" style="--size: 2px;"></div>
//         ${num.outerHTML}
//         `
//         alldays.append(day)

//         if (k < cookieData.length - 1) {
//             alldays.append(growElement())
//         }
//     }

//     return alldays
// }


// function routineLoad() {
//     const time = timeOfDay()

//     if ((time == 2) || (time == 3)) {
//         var n = 0
//     } else if ((time == 6) || (time == 7) || (time == 0)) {
//         var n = 1
//     }

//     for (let i = 0; i < routineData.length; i++) {
//         for (let j = 0; j < routineData[i].length; j++) {
//             routineCookies(i, j)
//         }
//     }

//     if (n + 1) {
//         return routineTray(n)
//     } else {
//         var spacer  = document.createElement('div')
//         spacer.classList = 'spacer-content neg'
//         return spacerContentNegElement()
//     }
// }

// function routineCookies(i, j) {
//     // console.log(i, j)
//     if (!(getCookie(`routine-${i}-${j}`))) {
//         setCookie(`routine-${i}-${j}`, 0, 1 / 3)
//     }
// }


// function routineTray(i) {
//     var tray = document.createElement('div')
//     tray.classList = 'tray'
//     // container.id = 'routine-container'
//     // container.classList = 'routine-container page-width layer-1 card-shadow '
    

//     // title.onclick = function() {routineAllToggle()}
//     // title.innerHTML = `
//     // <p>${routineData[i].greeting}</p>
//     // <div class="grow"></div>
//     // <div class="full-icon">
//     //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.071 12 9.25 8.179a1.061 1.061 0 0 1 1.5-1.5l4.614 4.614a.999.999 0 0 1 0 1.414l-4.614 4.614a1.061 1.061 0 0 1-1.5-1.5L13.071 12z"></path></svg>
//     // </div>`
//     tray.append(rightbarTitleElement('Good night.'))

//     // var tray = hscrollHuluElement()
//     // var tray = document.createElement('div')
//     // tray.classList = 'routine-tray'
//     // var tray = hscrollElement()
//     // tray.append(spacerElement(20))

//     var product = 1

//     for (let j = 0; j < routineData[i].data.length; j++) {
//         tray.append(routineItem(i, j))
//         tray.append(spacerElement(10))

//         product = product * routineData[i].data[j].complete
//     }

//     if (product) {
//         container.classList.add('all-done')
//     }

//     // tray.append(growElement())
//     // container.append(tray)
//     // container.append(spacerElement(20))
//     return tray
// }

// function routineItem(i, j) {
//     const data = routineData[i].data[j]
//     // console.log(data)

//     var item = document.createElement('div')
//     item.classList = 'routine-card clickable'

//     item.id = `routine-${i}-${j}`
//     item.onclick = function () { routineSwitchToggle(i, j) }


//     item.innerHTML = `
//     <div class="icon layer-1 card-shadow ${data.color}">${data.icon}</div>
//     <div class="spacer-x" style="--size: 10px;"></div>
//     <p>${data.name}</p>
//     <div class="check layer-fg card-shadow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="65.19 65.191 174.621 174.621" style="enable-background:new 0 0 305.002 305.002" xml:space="preserve"><path d="m218.473 93.97-90.546 90.547-41.398-41.398c-4.882-4.881-12.796-4.881-17.678 0-4.881 4.882-4.881 12.796 0 17.678l50.237 50.237a12.465 12.465 0 0 0 8.839 3.661c3.199 0 6.398-1.221 8.839-3.661l99.385-99.385c4.881-4.882 4.881-12.796 0-17.678-4.882-4.882-12.797-4.882-17.678-.001z"/></svg></div>`

//     if (data.complete) {
//         item.classList.add('done')
//     } else {
//         item.classList.add('undone')
//     }
//     return item
// }

// function routineSwitchToggle(i, j) {
//     const element = document.getElementById(`routine-${i}-${j}`)
//     const complete = parseInt(getCookie(`routine-${i}-${j}`))
//     const audioPass = new Audio('audio/complete.m4a')
//     // console.log(complete)

//     if (complete) {
//         setCookie(`routine-${i}-${j}`, 0, 1 / 6)
//         element.classList.remove('done')
//         element.classList.add('undone')
//     } else {
//         setCookie(`routine-${i}-${j}`, 1, 1 / 6)
//         element.classList.add('done')
//         element.classList.remove('undone')
//         audioPass.play()
//     }
// }

// function routineAllToggle() {
//     const element = document.getElementById('routine-container')
//     element.classList.toggle('all-done')
// }