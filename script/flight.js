const airlineData = {
    frontier: {
        name: 'Frontier Airlines',
        color: '248168',
        logo: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="1.3459999561309814 1.4170002937316895 129.3050079345703 17.166000366210938"><path d="M23.495 1.725h6.259q3.982 0 5.713 1.726 1.28 1.277 1.28 3.38 0 4.517-4.978 5.865l2.56 5.58h-5.073l-2.205-5.013h-2.039l-1.351 5.012h-4.623zm5.097 7.944q1.565 0 2.49-.615.924-.614.924-1.678 0-.662-.427-1.112-.569-.567-2.039-.567h-2.489l-1.09 3.972z"/><path d="M45.543 18.583q-3.509 0-5.738-2.128-2.18-2.104-2.18-5.296 0-3.901 2.773-6.762 2.892-2.98 7.112-2.98 3.509 0 5.737 2.128Q55.43 5.65 55.43 8.842q0 3.9-2.774 6.762-2.893 2.979-7.112 2.979zm.403-4.114q2.086 0 3.485-1.726 1.303-1.56 1.303-3.547 0-1.631-.924-2.624-.996-1.04-2.703-1.04-2.062 0-3.485 1.702-1.304 1.608-1.304 3.57 0 1.631.925 2.625.996 1.04 2.703 1.04z"/><path d="M59.838 1.725h4.291l4.291 9.197 2.49-9.197h4.575l-4.457 16.55h-4.03l-4.481-9.528-2.56 9.528H55.38z"/><path d="M81.847 5.744h-4.979l1.09-4.02h14.533l-1.067 4.02h-4.978l-3.367 12.531h-4.623z"/><path d="M94.775 1.725h4.6l-4.458 16.55h-4.599z"/><path d="M101.539 1.725h13.3l-1.067 3.901h-8.724l-.688 2.506h7.918l-.972 3.618h-7.918l-.711 2.624h8.866l-1.043 3.901H97.082z"/><path d="M117.399 1.725h6.259q3.982 0 5.713 1.726 1.28 1.277 1.28 3.38 0 4.517-4.978 5.865l2.56 5.58h-5.073l-2.205-5.013h-2.039l-1.351 5.012h-4.623zm5.097 7.944q1.565 0 2.49-.615.924-.614.924-1.678 0-.662-.427-1.112-.569-.567-2.039-.567h-2.489l-1.09 3.972z"/><path d="M7.462 1.614c-.853 0-1.597.46-1.865 1.346L4.432 6.806c-.109.306.113.17.211.111a4.1 4.1 0 0 1 2.163-.58h11.197c1.44 0 2.25-.768 2.565-1.805l.886-2.918Z"/><path d="M5.751 7.665c-.853 0-1.597.46-1.865 1.347L2.72 12.858c-.109.306.114.169.211.11a4.1 4.1 0 0 1 2.164-.58h10.627c1.44 0 2.25-.768 2.564-1.805l.887-2.918z"/><path d="M7.175 18.361c1.44 0 2.25-.768 2.564-1.804l.887-2.919H4.232c-.853 0-1.597.46-1.866 1.347l-1.02 3.369z"/></svg>',
            darkCol: '248168',
            lightCol: '248168',
        },
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="1.3459999561309814 1.613999605178833 20.107999801635742 16.746999740600586"><path d="M7.462 1.614c-.853 0-1.597.46-1.865 1.346L4.432 6.806c-.109.306.113.17.211.111a4.1 4.1 0 0 1 2.163-.58h11.197c1.44 0 2.25-.768 2.565-1.805l.886-2.918Z"/><path d="M5.751 7.665c-.853 0-1.597.46-1.865 1.347L2.72 12.858c-.109.306.114.169.211.11a4.1 4.1 0 0 1 2.164-.58h10.627c1.44 0 2.25-.768 2.564-1.805l.887-2.918z"/><path d="M7.175 18.361c1.44 0 2.25-.768 2.564-1.804l.887-2.919H4.232c-.853 0-1.597.46-1.866 1.347l-1.02 3.369z"/></svg>',
        iconPad: '8px',
        iconfg: 'fff',
    },
    spirit: {
        name: 'Spirit Airlines',
        color: 'ffec00',
        logo: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.13193467259407043 0.13199999928474426 73.07206726074219 20.832996368408203"><path d="M62.808 4.399h2.494l.82-3.86h4.76l-.823 3.86h3.145l-.669 3.14h-3.143l-1.041 4.896c-.233 1.1.003 1.255 1.284 1.255.582 0 1.06-.022 1.694-.044l-.63 2.963c-.995.134-2.272.225-3.664.225-3.098 0-4.216-.762-3.657-3.39l1.257-5.904h-2.493Z"/><path d="M56.346 4.399h4.759l-2.586 12.167h-4.758Z"/><path d="M57.252.132h4.76L61.4 3.006H56.64Z"/><path d="m43.74 4.399-2.587 12.167h4.63L48.37 4.4z"/><path d="M53.847 3.858c-2.125 0-5.507 2.093-6.398 5.82l-.23.84h.08c.676-1.617 2.37-2.483 4.652-2.483.614 0 1.313.084 1.875.21l.925-4.344a10.447 10.447 0 0 0-.904-.043"/><path d="M37.022 4.399h4.758l-2.585 12.167h-4.759Z"/><path d="M37.928.132h4.759l-.61 2.874h-4.76Z"/><path d="M25.26 13.601c2.178 0 3.597-1.077 4.025-3.097.43-2.023-.53-3.098-2.707-3.098-2.223 0-3.648 1.211-4.048 3.098-.401 1.886.507 3.097 2.73 3.097M19.066 4.4h4.624l-.342 1.615h.044c1.273-1.235 3.105-1.93 5.036-1.93 4.31 0 6.61 2.378 5.712 6.6-.75 3.524-3.96 6.373-8.426 6.373-2.11 0-3.577-.696-4.196-1.593h-.045l-1.17 5.5h-4.758z"/><path d="M5.722 12.772c-.027.448.076.807.454 1.034.375.247.997.38 2.03.38 1.055 0 2.22-.202 2.407-1.078.138-.65-.296-.831-1.434-.965l-4.135-.516c-2.71-.337-3.915-1.325-3.475-3.39.7-3.3 3.749-4.332 8.305-4.332 3.233 0 7.194.582 6.73 4.04h-5.342c.064-.517-.202-.853-.635-1.033-.428-.2-1.042-.27-1.649-.27-1.369 0-2.243.315-2.42 1.146-.081.382.162.718 1.345.853l4.013.449c3.2.36 4.601 1.369 4.097 3.748-.612 2.873-3.636 4.218-8.686 4.218-3.368 0-7.798-.603-7.127-4.284z"/></svg>',
            darkCol: 'ffec00',
            lightCol: '1c1c1e',
        },
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.13193467259407043 0.13199999928474426 73.07206726074219 20.832996368408203"><path d="M62.808 4.399h2.494l.82-3.86h4.76l-.823 3.86h3.145l-.669 3.14h-3.143l-1.041 4.896c-.233 1.1.003 1.255 1.284 1.255.582 0 1.06-.022 1.694-.044l-.63 2.963c-.995.134-2.272.225-3.664.225-3.098 0-4.216-.762-3.657-3.39l1.257-5.904h-2.493Z"/><path d="M56.346 4.399h4.759l-2.586 12.167h-4.758Z"/><path d="M57.252.132h4.76L61.4 3.006H56.64Z"/><path d="m43.74 4.399-2.587 12.167h4.63L48.37 4.4z"/><path d="M53.847 3.858c-2.125 0-5.507 2.093-6.398 5.82l-.23.84h.08c.676-1.617 2.37-2.483 4.652-2.483.614 0 1.313.084 1.875.21l.925-4.344a10.447 10.447 0 0 0-.904-.043"/><path d="M37.022 4.399h4.758l-2.585 12.167h-4.759Z"/><path d="M37.928.132h4.759l-.61 2.874h-4.76Z"/><path d="M25.26 13.601c2.178 0 3.597-1.077 4.025-3.097.43-2.023-.53-3.098-2.707-3.098-2.223 0-3.648 1.211-4.048 3.098-.401 1.886.507 3.097 2.73 3.097M19.066 4.4h4.624l-.342 1.615h.044c1.273-1.235 3.105-1.93 5.036-1.93 4.31 0 6.61 2.378 5.712 6.6-.75 3.524-3.96 6.373-8.426 6.373-2.11 0-3.577-.696-4.196-1.593h-.045l-1.17 5.5h-4.758z"/><path d="M5.722 12.772c-.027.448.076.807.454 1.034.375.247.997.38 2.03.38 1.055 0 2.22-.202 2.407-1.078.138-.65-.296-.831-1.434-.965l-4.135-.516c-2.71-.337-3.915-1.325-3.475-3.39.7-3.3 3.749-4.332 8.305-4.332 3.233 0 7.194.582 6.73 4.04h-5.342c.064-.517-.202-.853-.635-1.033-.428-.2-1.042-.27-1.649-.27-1.369 0-2.243.315-2.42 1.146-.081.382.162.718 1.345.853l4.013.449c3.2.36 4.601 1.369 4.097 3.748-.612 2.873-3.636 4.218-8.686 4.218-3.368 0-7.798-.603-7.127-4.284z"/></svg>',
        iconPad: '4px',
        iconfg: '1c1c1e',
    },
    cathay: {
        cathay: 'Cathay Pacific',
        color: '005d63',
        logo: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="4.13 1.751 22.254 1.947"><path d="m6.974 1.75-.797 1.671c-.119.229-.25.234-.25.234l-.013.013h.546l-.013-.013s-.153-.03-.055-.234l.142-.294h.684l.138.294c.097.204-.055.234-.055.234l-.012.013h.751l-.013-.013s-.138-.001-.25-.234zm5.745 0-.797 1.671c-.12.229-.25.234-.25.234l-.013.013h.545l-.012-.013s-.153-.03-.056-.234l.143-.294h.683l.139.294c.097.204-.056.234-.056.234l-.012.013h.751l-.012-.013s-.139-.001-.251-.234zm-7.511.064c-.662 0-1.078.408-1.078.956 0 .441.343.928 1.05.928.267 0 .579-.106.579-.106l.143-.489-.016.01s-.232.382-.663.382c-.393 0-.663-.257-.663-.727s.263-.776.677-.776c.43 0 .584.334.584.334l.01.009V1.94s-.257-.126-.623-.126zm2.585.008-.001.364.012-.01s.098-.157.313-.157h.306v1.403c0 .216-.121.234-.121.234l-.013.012h.652l-.012-.012s-.122-.018-.122-.234l.001-1.403h.3c.214 0 .318.157.318.157l.012.01.001-.364s-.03.02-.245.02H8.038c-.215 0-.245-.02-.245-.02zm3.15.02.011.012s.123.016.123.231v.525h-.897v-.525c0-.215.123-.23.123-.23l.012-.012h-.652l.013.012s.121.015.121.23v1.337c0 .216-.121.234-.121.234l-.013.012h.652l-.012-.012s-.123-.018-.123-.234V2.79h.897v.633c0 .216-.121.234-.121.234l-.013.012h.653l-.013-.012s-.122-.018-.122-.234V2.085c0-.215.12-.23.12-.23l.014-.012zm2.416 0 .012.013s.109.018.251.233c.06.091.365.518.53.767v.567c0 .216-.122.234-.122.234l-.013.012h.652l-.012-.012s-.122-.018-.122-.234v-.567c.164-.25.469-.674.53-.765.14-.215.303-.235.303-.235l.012-.012h-.572l.013.012s.161.045.04.235c-.06.092-.24.35-.403.598-.164-.249-.341-.508-.4-.6-.122-.19.04-.233.04-.233l.012-.012zm-6.468.537.257.593h-.539zm5.744 0 .257.593h-.538z"/><path d="m17.92 2.972.282-.593.257.593zm1.168.45-.802-1.671-.797 1.67c-.12.229-.25.234-.25.234l-.013.013h.545l-.012-.013s-.153-.03-.056-.234l.143-.294h.683l.139.294c.097.204-.056.234-.056.234l-.012.013h.75l-.012-.013s-.138-.001-.25-.234z"/><path d="m24.416 1.854.012-.011h-.652l.012.011s.122.019.122.234v1.337c0 .215-.122.233-.122.233l-.012.012h.652l-.012-.012s-.122-.018-.122-.233V2.088c0-.215.122-.234.122-.234"/><path d="M20.352 3.495c-.392 0-.663-.257-.663-.727s.263-.776.678-.776c.429 0 .584.334.584.334l.01.009V1.94s-.258-.126-.624-.126c-.662 0-1.077.408-1.077.956 0 .441.343.928 1.05.928.267 0 .578-.106.578-.106l.143-.49-.016.011s-.232.382-.663.382"/><path d="m22.257 1.843.012.012s.122.018.122.233v1.337c0 .215-.122.233-.122.233l-.012.012h.652l-.013-.012s-.121-.018-.121-.233v-.647h.385c.214 0 .232.094.232.094l.013.013v-.392l-.013.012s-.018.094-.232.094h-.385v-.584h.462c.215 0 .305.123.305.123l.012.01v-.326s-.03.02-.246.02z"/><path d="m21.907 1.854.012-.011h-.653l.013.011s.122.019.122.234v1.337c0 .215-.122.233-.122.233l-.013.012h.653l-.012-.012s-.123-.018-.123-.233V2.088c0-.215.123-.234.123-.234"/><path d="M26.368 3.113s-.231.382-.663.382c-.392 0-.664-.257-.664-.727s.264-.776.678-.776a.64.64 0 0 1 .585.334l.01.009V1.94s-.258-.127-.624-.127c-.662 0-1.078.41-1.078.957 0 .441.343.928 1.051.928.267 0 .578-.106.578-.106l.143-.49z"/><path d="M16.536 2.088v-.07h.086c.105 0 .213 0 .279.02.172.052.259.183.259.39 0 .169-.108.42-.404.42a.573.573 0 0 1-.22-.055zm.347.935c.402 0 .642-.305.642-.6 0-.162-.06-.452-.467-.555a1.34 1.34 0 0 0-.324-.025h-.716l.012.011s.122.019.122.234v1.337c0 .215-.122.233-.122.233l-.012.012h.652l-.012-.012s-.122-.018-.122-.233v-.466a.854.854 0 0 0 .347.064z"/></svg>',
            darkCol: 'fff',
            lightCol: '005d63',
        },
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="19.315 19.631 19.445 23.689"><path d="M19.465 19.63c-.922 4.785 2.469 13.847 8.598 17.796h.002c.7.439 1.08.568 1.08.568.09.037.027.103-.018.131l-7.906 5.06c-.026.017-.087.064-.063.114.02.038.1.015.121.008 6.345-2.23 10.95-4.064 13.764-5.4 2.854-1.356 3.813-2.13 3.709-2.516-.099-.363-1.157-.208-2.03-.287a12.382 12.382 0 0 1-3.035-.641c-4.575-1.617-8.645-3.676-14.222-14.832Z"/></svg>',
        iconPad: '8px',
        iconfg: 'fff',
    },
}

const flightData = [
    {
        number: 'F9 2039',
        dep: {
            airport: 'IND',
            city: 'Indianapolis',
            time: '1:28pm',
            terminal: '-',
            gate: '-',
        },
        arr: {
            airport: 'LAS',
            city: 'Las Vegas',
            time: '2:42pm',
        },
        seat: '-',
        duration: '4h 14m',
        date: 'Sat, 20 Nov 2021',
        airline: airlineData.frontier,
    },
    {
        number: 'F9 2129',
        dep: {
            airport: 'LAS',
            city: 'Las Vegas',
            time: '3:59pm',
            terminal: '3',
            gate: '-',
        },
        arr: {
            airport: 'SAN',
            city: 'San Diego',
            time: '5:12pm',
        },
        seat: '-',
        duration: '1h 13m',
        date: 'Sat, 20 Nov 2021',
        airline: airlineData.frontier,
    },
    {
        number: 'NK 788',
        dep: {
            airport: 'SAN',
            city: 'San Diego',
            time: '7:37pm',
            terminal: '-',
            gate: '-',
        },
        arr: {
            airport: 'LAS',
            city: 'Las Vegas',
            time: '8:55pm',
        },
        seat: '-',
        duration: '1h 18m',
        date: 'Tue, 30 Nov 2021',
        airline: airlineData.spirit,
    },
    {
        number: 'NK 566',
        dep: {
            airport: 'LAS',
            city: 'Las Vegas',
            time: '11:50pm',
            terminal: '-',
            gate: '-',
        },
        arr: {
            airport: 'IND',
            city: 'Indianapolis',
            time: '6:11am (+1)',
        },
        seat: '-',
        duration: '6h 21m',
        date: 'Tue, 30 Nov 2021',
        airline: airlineData.cathay,
    },
    // {
    //     airline: {
    //         // cathay
    //         logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.03280508518218994 0.014000000432133675 26.351194381713867 3.6866378784179688"><g fill="#005d63" fill-rule="nonzero"><path d="M.056.014C-.087.76.44 2.168 1.394 2.783a.93.93 0 0 0 .168.088c.014.006.004.016-.003.02L.33 3.68c-.004.002-.013.01-.01.017.004.006.016.003.02.002.987-.347 1.703-.633 2.14-.84.445-.211.594-.332.578-.392-.016-.056-.18-.032-.316-.045a1.926 1.926 0 0 1-.472-.1C1.557 2.072.924 1.75.056.015Zm6.918 1.737-.797 1.67c-.119.229-.25.234-.25.234l-.013.013h.546l-.013-.013s-.153-.03-.055-.234l.142-.294h.684l.138.294c.097.204-.055.234-.055.234l-.012.013h.751l-.013-.013s-.138-.001-.25-.234zm5.745 0-.797 1.67c-.12.229-.25.234-.25.234l-.013.013h.545l-.012-.013s-.153-.03-.056-.234l.143-.294h.683l.139.294c.097.204-.056.234-.056.234l-.012.013h.751l-.012-.013s-.139-.001-.251-.234zm-7.511.063c-.662 0-1.078.408-1.078.956 0 .441.343.928 1.05.928.267 0 .579-.106.579-.106l.143-.489-.016.01s-.232.382-.663.382c-.393 0-.663-.257-.663-.727s.263-.776.677-.776c.43 0 .584.334.584.334l.01.009V1.94s-.257-.126-.623-.126zm2.585.008-.001.364.012-.01s.098-.157.313-.157h.306v1.403c0 .216-.121.234-.121.234l-.013.012h.652l-.012-.012s-.122-.018-.122-.234l.001-1.403h.3c.214 0 .318.157.318.157l.012.01.001-.364s-.03.02-.245.02H8.038c-.215 0-.245-.02-.245-.02zm3.15.02.011.012s.123.016.123.231v.525h-.897v-.525c0-.215.123-.23.123-.23l.012-.012h-.652l.013.012s.121.015.121.23v1.337c0 .216-.121.234-.121.234l-.013.012h.652l-.012-.012s-.123-.018-.123-.234V2.79h.897v.633c0 .216-.121.234-.121.234l-.013.012h.653l-.013-.012s-.122-.018-.122-.234V2.085c0-.215.12-.23.12-.23l.014-.012zm2.416 0 .012.013s.109.018.251.233c.06.091.365.518.53.767v.567c0 .216-.122.234-.122.234l-.013.012h.652l-.012-.012s-.122-.018-.122-.234v-.567c.164-.25.469-.674.53-.765.14-.215.303-.235.303-.235l.012-.012h-.572l.013.012s.161.045.04.235c-.06.092-.24.35-.403.598-.164-.249-.341-.508-.4-.6-.122-.19.04-.233.04-.233l.012-.012zm-6.468.537.257.593h-.539zm5.744 0 .257.593h-.538z"/><path d="m17.92 2.972.282-.593.257.593zm1.168.45-.802-1.671-.797 1.67c-.12.229-.25.234-.25.234l-.013.013h.545l-.012-.013s-.153-.03-.056-.234l.143-.294h.683l.139.294c.097.204-.056.234-.056.234l-.012.013h.75l-.012-.013s-.138-.001-.25-.234z"/><path d="m24.416 1.854.012-.011h-.652l.012.011s.122.019.122.234v1.337c0 .215-.122.233-.122.233l-.012.012h.652l-.012-.012s-.122-.018-.122-.233V2.088c0-.215.122-.234.122-.234"/><path d="M20.352 3.495c-.392 0-.663-.257-.663-.727s.263-.776.678-.776c.429 0 .584.334.584.334l.01.009V1.94s-.258-.126-.624-.126c-.662 0-1.077.408-1.077.956 0 .441.343.928 1.05.928.267 0 .578-.106.578-.106l.143-.49-.016.011s-.232.382-.663.382"/><path d="m22.257 1.843.012.012s.122.018.122.233v1.337c0 .215-.122.233-.122.233l-.012.012h.652l-.013-.012s-.121-.018-.121-.233v-.647h.385c.214 0 .232.094.232.094l.013.013v-.392l-.013.012s-.018.094-.232.094h-.385v-.584h.462c.215 0 .305.123.305.123l.012.01v-.326s-.03.02-.246.02z"/><path d="m21.907 1.854.012-.011h-.653l.013.011s.122.019.122.234v1.337c0 .215-.122.233-.122.233l-.013.012h.653l-.012-.012s-.123-.018-.123-.233V2.088c0-.215.123-.234.123-.234"/><path d="M26.368 3.113s-.231.382-.663.382c-.392 0-.664-.257-.664-.727s.264-.776.678-.776a.64.64 0 0 1 .585.334l.01.009V1.94s-.258-.127-.624-.127c-.662 0-1.078.41-1.078.957 0 .441.343.928 1.051.928.267 0 .578-.106.578-.106l.143-.49z"/><path d="M16.536 2.088v-.07h.086c.105 0 .213 0 .279.02.172.052.259.183.259.39 0 .169-.108.42-.404.42a.573.573 0 0 1-.22-.055zm.347.935c.402 0 .642-.305.642-.6 0-.162-.06-.452-.467-.555a1.34 1.34 0 0 0-.324-.025h-.716l.012.011s.122.019.122.234v1.337c0 .215-.122.233-.122.233l-.012.012h.652l-.012-.012s-.122-.018-.122-.233v-.466a.854.854 0 0 0 .347.064z"/></g></svg>',
    //         color: '',
    //     },
    // },
]




function OLDflightCard(n) {
    const flight = flightData[n]

    var card = document.createElement('div')
    card.classList = 'flight-card-old layer-1 card-shadow'
    card.style.setProperty('--col', `#${flight.airline.color}`)

    card.innerHTML = `
    <div class="bg top" style="color: #${flight.airline.text};">${flight.number}</div>
    <div class="fill-width grow">
        <div class="airline" style="--airline: url(${flight.airline.logo});"></div>
        <div class="vstack fill-height cut">
            <div class="cutout layer-0"></div>
            <div class="perforation"></div>
            <div class="cutout layer-0"></div>
        </div>
        <div class="info">
            <div class="dep-arr fill-width">
                <div class="item">
                    <p class="city">${flight.dep.airport}</p>
                    <p class="time">${flight.dep.time}</p>
                </div>
                <div class="grow"></div>
                <div class="item">
                    <div class="plane">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.535 14.465c-19.569-19.568-51.395-19.241-70.557.726L322.092 124.488 66.131 39.781 12.4 93.513l213.352 131.365-107.956 112.494-69.231-11.366L0 374.571l101.78 35.649L137.429 512l48.565-48.565-11.366-69.231 112.494-107.955L418.487 499.6l53.732-53.732-84.706-255.961L496.808 85.022c19.968-19.162 20.295-50.988.727-70.557z"></path></svg>
                    </div>
                    <p class="time">${flight.duration}</p>
                </div>
                <div class="grow"></div>
                <div class="item">
                <p class="city">${flight.arr.airport}</p>
                <p class="time">${flight.arr.time}</p>
                </div>
            </div>
            <div class="spacer-x" style="--size: 20px;"></div>
            <div class="locations fill-width">
                <div class="item">
                    <p class="text">Terminal</p>
                    <p class="subtext">${flight.dep.terminal}</p>
                </div>
                <div class="grow"></div>
                <div class="item">
                    <p class="text">Gate</p>
                    <p class="subtext">${flight.dep.gate}</p>
                </div>
                <div class="grow"></div>
                <div class="item">
                    <p class="text">Seat</p>
                    <p class="subtext">${flight.seat}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="bg bottom"></div>`

    return card
}


function flightCard(n) {
    const flight = flightData[n]

    var card = document.createElement('div')
    card.classList = 'flight-card layer-1 card-shadow'
    card.style.setProperty('--col', `#${flight.airline.color}`)

    card.innerHTML = `
    <div class="header">
        <div class="left">
            <p class="flight-no">${flight.number}</p>
        </div>
        <div class="airline-logo" style="--darkLogo: #${flight.airline.logo.darkCol}; --lightLogo: #${flight.airline.logo.lightCol};">
            ${flight.airline.logo.svg}
        </div>
        <div class="right">
            <div class="icon image-border" style="fill: #${flight.airline.iconfg}; padding: ${flight.airline.iconPad};">${flight.airline.icon}</div>
        </div>
    </div>
    <div class="spacer-x" style="--size: 2px;"></div>
    <div class="tear fill-width">
        <div class="punch layer-0"></div>
        <div class="perf"></div>
        <div class="punch layer-0"></div>
    </div>
    <div class="spacer-x" style="--size: 10px;"></div>
    <div class="body">
        <div class="vstack org">
            <p class="city">${flight.dep.city}</p>
            <p class="airport">${flight.dep.airport}</p>
            <div class="spacer-x" style="--size: 10px;"></div>
            <p class="deparr">Depart</p>
            <p class="time">${flight.dep.time}</p>
        </div>
        <div class="plane">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 510"><path d="M510 255c0-20.4-17.85-38.25-38.25-38.25H331.5L204 12.75h-51l63.75 204H76.5l-38.25-51H0L25.5 255 0 344.25h38.25l38.25-51h140.25l-63.75 204h51l127.5-204h140.25c20.4 0 38.25-17.85 38.25-38.25z"/></svg>
        </div>
        <div class="vstack des">
            <p class="city">${flight.arr.city}</p>
            <p class="airport">${flight.arr.airport}</p>
            <div class="spacer-x" style="--size: 10px;"></div>
            <p class="deparr">Arrive</p>
            <p class="time">${flight.arr.time}</p>
        </div>
    </div>`

    return card
}