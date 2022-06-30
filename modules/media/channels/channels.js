const channels = {
    data: [
        {
            // tv time
            link: 'https://www.tvtime.com/en',
            logo: '<p style="font-size: 30px; font-weight: 700;">TV Time</p>',
            pad: 0,
            bg: '#242424',
            fgCol: 'fbd737',
        },
        {
            // reelgood
            link: 'https://reelgood.com',
            logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111 27"><path d="M36.277 15.755v.814h-8.772a3.07 3.07 0 0 0 3.008 2.28c1.07 0 2.278-.445 2.94-1.082l1.85 2.51c-1.204 1.103-3.076 1.735-5.135 1.735-3.946 0-6.701-2.704-6.701-6.576 0-3.736 2.796-6.552 6.504-6.552 3.713 0 6.306 2.825 6.306 6.87zm-6.306-3.708c-1.497 0-2.265.975-2.517 1.941h5.057c-.197-.963-.944-1.94-2.54-1.94zm19.96 3.708v.814H41.16a3.07 3.07 0 0 0 3.008 2.28c1.07 0 2.279-.445 2.94-1.082l1.85 2.51c-1.204 1.103-3.076 1.735-5.135 1.735-3.945 0-6.701-2.704-6.701-6.576 0-3.736 2.796-6.552 6.504-6.552 3.713 0 6.306 2.825 6.306 6.87zm-6.306-3.708c-1.497 0-2.264.975-2.517 1.941h5.057c-.197-.963-.944-1.94-2.54-1.94zm7.856 9.671h3.817V4.662h-3.817zM76.937 8.884c3.778 0 6.52 2.755 6.52 6.552 0 3.81-2.742 6.576-6.52 6.576-3.764 0-6.496-2.766-6.496-6.576 0-3.797 2.732-6.552 6.496-6.552zm-.02 9.67c1.814 0 2.64-1.616 2.64-3.118 0-1.49-.826-3.094-2.64-3.094-1.806 0-2.614 1.554-2.614 3.094 0 1.552.808 3.118 2.615 3.118zm13.88-9.67c3.778 0 6.52 2.755 6.52 6.552 0 3.81-2.742 6.576-6.52 6.576-3.765 0-6.497-2.766-6.497-6.576 0-3.797 2.732-6.552 6.497-6.552zm-.02 9.67c1.813 0 2.64-1.616 2.64-3.118 0-1.49-.827-3.094-2.64-3.094-1.806 0-2.615 1.554-2.615 3.094 0 1.552.809 3.118 2.615 3.118zm16.277-13.892h3.841v17.056h-3.841v-.983a4.936 4.936 0 0 1-3.328 1.277c-3.359 0-5.616-2.633-5.616-6.552 0-3.933 2.257-6.576 5.616-6.576 1.261 0 2.415.45 3.328 1.282V4.662zm0 8.798c-.507-.662-1.463-1.118-2.367-1.118-1.592 0-2.662 1.253-2.662 3.118 0 1.85 1.07 3.094 2.662 3.094.904 0 1.86-.456 2.367-1.119V13.46zm-87.581 2.268c1.582-.627 3.21-2.242 3.21-4.99 0-3.35-2.36-5.602-5.87-5.602h-1.895v3.866h1.254c.94 0 1.89.58 1.89 1.688 0 1.107-.95 1.687-1.89 1.687h-3.197V9.972l-4.547 2.454v9.388h4.547v-5.547h1.918l2.76 5.547h5.211l-3.391-6.086zM65.674 9.39h3.841v11.386c0 5.382-4.737 5.963-6.774 5.963-.77 0-1.454-.065-2.09-.2l-.271-.058-.021-3.272.415.084c.01.002 1.02.204 1.969.209.88 0 2.93-.258 2.93-2.652v-.329c-.938.866-2.093 1.334-3.327 1.334-3.396 0-5.592-2.504-5.592-6.38s2.196-6.38 5.592-6.38c1.266 0 2.401.442 3.328 1.288V9.39zm0 4.278c-.475-.642-1.46-1.115-2.342-1.115-1.642 0-2.663 1.12-2.663 2.921 0 1.803 1.02 2.923 2.663 2.923.867 0 1.853-.475 2.342-1.118v-3.611zM0 0l11.99 6.896L0 13.79V.001zm1.63 6.355h1.097v2.737l4.845-2.865L1.629 2.81v3.545z"/></svg>',
            pad: 15,
            bg: 'linear-gradient(to bottom right, #1A303D, #19372D)',
            fgCol: '00DC89',
        },
        {
            // imdb
            link: 'https://reelgood.com',
            logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 575 289.83"><path d="M69.35 58.24h45.63v175.65H69.35V58.24Z"/><path d="M201.2 139.15c-3.92-26.77-6.1-41.65-6.53-44.62-1.91-14.33-3.73-26.8-5.47-37.44h-59.16v175.65h39.97l.14-115.98 16.82 115.98h28.47l15.95-118.56.15 118.56h39.84V57.09h-59.61l-10.57 82.06Z"/><path d="M346.71 93.63c.5 2.24.76 7.32.76 15.26v68.1c0 11.69-.76 18.85-2.27 21.49-1.52 2.64-5.56 3.95-12.11 3.95V87.13c4.97 0 8.36.53 10.16 1.57 1.8 1.05 2.96 2.69 3.46 4.93Zm20.61 137.32c5.43-1.19 9.99-3.29 13.69-6.28 3.69-3 6.28-7.15 7.76-12.46 1.49-5.3 2.37-15.83 2.37-31.58v-61.68c0-16.62-.65-27.76-1.66-33.42-1.02-5.67-3.55-10.82-7.6-15.44-4.06-4.62-9.98-7.94-17.76-9.96-7.79-2.02-20.49-3.04-42.58-3.04H287.5v175.65h55.28c12.74-.4 20.92-.99 24.54-1.79Z"/><path d="M464.76 204.7c-.84 2.23-4.52 3.36-7.3 3.36-2.72 0-4.53-1.08-5.45-3.25-.92-2.16-1.37-7.09-1.37-14.81v-46.42c0-8 .4-12.99 1.21-14.98.8-1.97 2.56-2.97 5.28-2.97 2.78 0 6.51 1.13 7.47 3.4.95 2.27 1.43 7.12 1.43 14.55v45.01c-.29 9.25-.71 14.62-1.27 16.11Zm-58.08 26.51h41.08c1.71-6.71 2.65-10.44 2.84-11.19 3.72 4.5 7.81 7.88 12.3 10.12 4.47 2.25 11.16 3.37 16.34 3.37 7.21 0 13.43-1.89 18.68-5.68 5.24-3.78 8.58-8.26 10-13.41 1.42-5.16 2.13-13 2.13-23.54V141.6c0-10.6-.24-17.52-.71-20.77s-1.87-6.56-4.2-9.95c-2.33-3.39-5.72-6.02-10.16-7.9-4.44-1.88-9.68-2.82-15.72-2.82-5.25 0-11.97 1.05-16.45 3.12-4.47 2.07-8.53 5.21-12.17 9.42V55.56h-43.96v175.65Z"/></svg>',
            pad: 20,
            bg: '#f5c518',
            fgCol: '000000',
        },
        {
            // justwatch
            link: 'https://www.justwatch.com/es',
            logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8750 1306"><path d="M941 551l0 245c0,0 -3,36 30,19 33,-17 129,-66 191,-98 89,-45 0,-89 0,-89 0,0 -160,-82 -192,-98 -32,-16 -29,21 -29,21zm-275 426c45,-22 196,-100 229,-118 46,-23 1,-45 1,-45l-229 -119c0,0 -41,-22 -39,24 2,46 0,230 0,230 0,0 -6,49 39,27zm-313 158c45,-22 196,-100 229,-118 46,-23 1,-45 1,-45l-229 -119c0,0 -41,-22 -39,24 2,46 0,230 0,230 0,0 -6,49 39,27zm-314 -164c45,-22 196,-100 229,-118 46,-23 1,-45 1,-45l-229 -119c0,0 -41,-22 -39,24 2,46 0,230 0,230 0,0 -6,49 39,27zm314 -157c45,-22 196,-100 229,-118 46,-23 1,-45 1,-45l-229 -119c0,0 -41,-22 -39,24 2,46 0,230 0,230 0,0 -7,49 39,27zm313 -166c45,-22 196,-100 229,-118 46,-23 1,-45 1,-45l-229 -119c0,0 -41,-22 -39,24 2,46 0,230 0,230 0,0 -6,49 39,27zm-627 6c45,-22 196,-100 229,-118 46,-23 1,-45 1,-45l-229 -119c0,0 -41,-22 -39,24 2,46 0,230 0,230 0,0 -6,49 39,27zm313 -165c45,-22 196,-100 229,-118 46,-23 1,-45 1,-45l-229 -119c0,0 -41,-22 -39,24 2,46 0,230 0,230 0,0 -6,49 39,27zm-352 529l0 200c0,0 6,92 97,44 92,-47 186,-95 186,-95 0,0 26,-15 0,-29 -26,-14 -260,-134 -260,-134 0,0 -24,-10 -24,14zm1 -694l0 -200c0,0 6,-92 97,-44 92,47 186,95 186,95 0,0 26,15 0,29 -26,14 -260,134 -260,134 0,0 -24,10 -24,-14z"/><path d="M1483 1006c9,43 29,79 60,107 31,28 69,43 114,43 36,0 66,-7 89,-20 23,-14 42,-32 55,-55 14,-23 23,-50 29,-82 6,-31 9,-64 9,-100l0 -828 168 0 0 835c0,42 -5,86 -14,133 -9,47 -26,90 -51,129 -25,40 -60,73 -105,99 -45,26 -102,39 -173,39 -92,0 -167,-24 -225,-71 -58,-48 -96,-109 -114,-184l157 -44z"/><path d="M2744 1275c-2,-20 -4,-43 -5,-69 -1,-26 -2,-47 -2,-64l-3 0c-20,43 -55,80 -103,110 -48,30 -102,45 -161,45 -52,0 -97,-9 -135,-26 -38,-17 -69,-41 -94,-71 -24,-30 -43,-65 -54,-105 -12,-40 -18,-82 -18,-128l0 -500 160 0 0 446c0,33 3,64 8,94 5,30 14,56 28,79 14,23 32,41 56,54 24,14 54,20 92,20 65,0 117,-24 157,-72 40,-48 60,-113 60,-193l0 -429 160 0 0 633c0,22 1,49 2,83 1,34 3,64 5,90l-151 0z"/><path d="M3517 673c-18,-29 -44,-54 -77,-72 -33,-19 -70,-28 -111,-28 -18,0 -36,2 -54,6 -18,4 -34,10 -48,19 -14,9 -26,19 -34,32 -9,13 -13,29 -13,48 0,34 15,59 46,76 31,16 77,31 138,45 39,9 74,20 107,32 33,12 61,28 86,47 24,19 43,41 57,67 14,26 20,57 20,92 0,48 -9,88 -27,121 -18,33 -42,60 -72,81 -30,21 -64,36 -103,45 -39,9 -78,14 -119,14 -61,0 -121,-12 -179,-36 -58,-24 -107,-60 -145,-109l114 -97c22,32 51,58 89,80 38,22 80,32 125,32 20,0 40,-2 59,-6 19,-4 36,-10 51,-20 15,-9 27,-21 37,-36 9,-15 14,-33 14,-56 0,-37 -18,-65 -54,-83 -36,-18 -88,-35 -157,-51 -27,-7 -55,-15 -83,-25 -28,-10 -53,-23 -76,-40 -23,-17 -41,-38 -55,-64 -14,-26 -21,-57 -21,-94 0,-43 9,-80 26,-111 18,-31 41,-57 69,-77 28,-20 61,-35 97,-44 36,-10 74,-14 112,-14 58,0 114,11 168,34 54,23 96,56 125,99l-111 94z"/><path d="M4210 600l-214 0 0 419c0,49 9,83 27,104 18,21 47,31 87,31 15,0 31,-2 48,-5 17,-3 32,-8 46,-14l5 131c-19,7 -41,12 -64,16 -23,4 -47,6 -72,6 -76,0 -134,-21 -174,-63 -40,-42 -60,-105 -60,-189l0 -437 -155 0 0 -131 155 0 0 -231 158 0 0 231 214 0 0 131z"/><polygon points="4659,1030 4662,1030 4945,71 5130,71 5411,1030 5414,1030 5680,71 5858,71 5504,1275 5329,1275 5037,307 5033,307 4741,1275 4565,1275 4212,71 4394,71 "/><path d="M6323 890c-40,0 -81,2 -123,5 -43,3 -81,10 -116,20 -35,10 -63,26 -86,46 -23,20 -34,48 -34,82 0,24 5,44 14,60 10,16 22,29 38,39 16,10 33,17 53,21 19,4 39,6 60,6 75,0 132,-22 173,-67 40,-45 60,-101 60,-169l0 -43 -39 0zm39 -138c0,-60 -18,-105 -54,-134 -36,-29 -85,-43 -145,-43 -45,0 -88,9 -128,26 -40,18 -74,40 -101,67l-85 -102c40,-37 88,-67 145,-88 57,-22 119,-32 185,-32 58,0 108,8 151,25 43,16 77,39 105,67 27,28 48,62 61,100 14,39 20,80 20,124l0 352c0,27 1,56 3,86 2,30 5,55 9,74l-145 0c-9,-39 -14,-77 -14,-116l-5 0c-30,43 -67,77 -111,100 -45,24 -98,36 -159,36 -32,0 -65,-4 -100,-13 -35,-9 -66,-22 -94,-42 -28,-19 -52,-45 -71,-77 -19,-32 -28,-71 -28,-117 0,-61 16,-110 49,-145 33,-36 76,-63 129,-82 53,-19 113,-31 180,-37 67,-6 134,-8 202,-8l0 -22z"/><path d="M7118 600l-214 0 0 419c0,49 9,83 27,104 18,21 47,31 87,31 15,0 31,-2 48,-5 17,-3 32,-8 46,-14l5 131c-19,7 -41,12 -64,16 -23,4 -47,6 -72,6 -76,0 -134,-21 -174,-63 -40,-42 -60,-105 -60,-189l0 -437 -155 0 0 -131 155 0 0 -231 158 0 0 231 214 0 0 131z"/><path d="M7805 673c-17,-26 -43,-48 -77,-66 -34,-18 -70,-26 -109,-26 -42,0 -79,8 -111,24 -32,16 -60,37 -83,64 -23,27 -40,58 -52,93 -12,35 -18,72 -18,111 0,39 6,75 18,111 12,35 29,66 52,93 23,27 50,48 83,64 33,16 70,24 112,24 41,0 78,-8 111,-24 33,-16 61,-37 83,-65l107 97c-34,40 -77,71 -128,93 -51,22 -109,33 -174,33 -62,0 -120,-10 -173,-31 -53,-20 -98,-49 -137,-86 -39,-37 -69,-81 -91,-134 -22,-52 -33,-111 -33,-175 0,-64 11,-121 32,-174 22,-52 52,-97 90,-134 39,-37 84,-66 137,-87 53,-20 110,-31 171,-31 57,0 113,11 169,34 56,23 101,56 134,99l-116 94z"/><path d="M8205 591c19,-40 52,-74 99,-102 46,-28 99,-43 156,-43 52,0 97,9 134,26 37,18 69,41 94,71 25,30 43,64 55,104 12,40 18,82 18,128l0 500 -160 0 0 -447c0,-33 -3,-64 -8,-94 -5,-30 -14,-56 -28,-78 -14,-23 -32,-41 -55,-55 -23,-14 -54,-20 -91,-20 -64,0 -116,24 -157,72 -41,48 -61,113 -61,194l0 428 -160 0 0 -1286 160 0 0 602 3 0z"/></svg>',
            pad: 15,
            bg: '#060d17',
            fgCol: 'fbc500',
        },
        {
            // netflix
            link: 'https://netflix.com',
            logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 276.742"><path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"/></svg>',
            pad: 15,
            bg: '#000',
            fgCol: 'e50914',
        },
        {
            // disney
            link: 'https://www.disneyplus.com',
            logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="11.031027793884277 108 507.7690124511719 173.4803009033203"><path d="M241.7 203.4c.3 0 .3 0 .6.1 4.6.6 9.1 1.4 12.5 3 3.2 1.4 5.1 3.2 6.8 6.4 2.6 4.8 2.8 11.5.4 16.6-1.8 3.8-5.6 7-9.1 8.7-3.6 1.8-7.2 2.6-11.3 3.1-7.2.8-15-.7-21.4-3.8-3.8-1.9-8.5-5.1-10.9-9.2-1.7-3-1.7-7 .4-9.9 3.4-4.6 10.6-5.6 16-5.4 4.1.2 11.6 1.4 15.5 2.8 1.1.4 5.1 2 5.8 2.7.5.5.8 1.2.6 1.9-.9 2.7-7.6 4.2-9.5 4.5-5.2.8-7.8-1.2-13.7-3.5-1.5-.6-3.4-1.2-4.9-1.3-2.7-.3-5.9.5-6.4 3.4-.3 1.5 1.5 2.9 2.8 3.5 3.1 1.4 5.7 1.8 8.8 1.9 9.1.1 19.4-1.4 26.9-6.7 1-.7 2-1.8 2-3.1 0-2.7-4.7-4.4-4.7-4.4-5-2.1-14.4-3.1-19.1-3.5-5-.4-13-1.1-14.9-1.4-2-.3-4.1-.7-5.8-1.4-1.7-.8-3.4-2.5-3.9-4.4-.9-3.4.2-7.6 2.1-10.4 5-7.2 16.7-9.9 25.5-11 8.5-1.1 22.2-1 30.5 3.4 1.3.7 1.9 1.3 1.7 2.7-.5 2.6-2.5 4.2-4.8 5-2.5.8-7.6 1.1-9.8 1.2-10 .6-22.1.3-31.7 2.9-.7.2-2 .6-2.5 1-1.5 1.6 2.8 2.1 3.7 2.3.3.1.3.1.6.1l21.2 2.2M182 158.7s1.6-2.4 3-4.3c2.5-3.4 7-8.1 10.4-11 1-.9 2.3-1.9 2.3-1.9s-1.9.2-3 .4c-2.6.5-6.3 3-8.2 4.6-3.1 2.7-6.5 7-5 10.8.2.7.5 1.4.5 1.4m17.3 4.6c4.9-.3 9.5-1.8 13.8-4.1 4.2-2.3 10.4-6.9 9.7-12.3-.2-1.7-1.3-3.1-2.8-3.7-1.9-.8-2.8-.7-5.2 0-1.7.5-2.5.8-4.2 1.8-4.8 2.8-11.7 8.8-15.4 13.6-.9 1.1-1.7 2.4-2.4 3.3-.4.5-.8 1-.7 1.2.2.4 5.3.4 7.2.2m-12.5 9.2c-.5.5-1 1.8-1.6 2.8-.3.5-.8 1.1-1.2 1.4-1.3.9-2.4 1-3.6-.1-1.7-1.5-2.7-3.9-2.8-6.2 0-1 .1-2.1-.1-3-.3-1.4-1.7-2.9-2.5-4.3-.9-1.6-1.6-4.4-1.7-6.2-.3-5.7 2.7-10.9 6.5-15 3.9-4.2 9-7.6 14.6-10 5.2-2.2 12.9-3.7 18.7-1.7 1.9.6 4.5 2.2 5.8 3.9.3.3.5.7.8.9.3.2.9.2 1.5.3 1.8.3 4.5 1.7 5.6 2.6 2.2 1.9 3.4 3.7 3.9 6.3 1.1 5.2-1.9 11-5.3 14.5-5.9 6-11.7 10.2-19.2 13.2-3.3 1.3-8.4 2.5-12.2 2.2-1.2-.1-2.4-.4-3.5-.5-.6-.1-2.7-.6-2.9-.7-.4-.3-.7-.4-.8-.4m6.7 11.6c.2 0 .6.1.9.3 2.6 1 3.7 3.4 4.4 6.1 1.5 6.2 2.1 20 2.4 25.4.2 4 .3 8 .5 12 .1 3.4.4 7.9-.3 11-.3 1.1-1 2.5-2.1 3.1-1.3.8-4.1.9-5.7.5-3.9-.8-5.1-3.3-5.7-7.1-1.3-9.1-.7-27 .1-34.5.3-2.5 1.2-10.5 2.5-13.8.4-1 1.4-3.3 3-3M76.2 199.3s-5.7.4-9.7.8c-5 .5-14.5 2.2-19.9 4.1-1.6.6-5 2-5.2 3.7-.3 1.7.8 3.1 2 4.5.7.8 4.6 4.6 5.7 5.5 4.6 3.9 14 9.8 20.9 12.7 2.4 1 6.3 2.4 6.3 2.4s-.3-11.2-.2-22.2c0-5.8.1-11.5.1-11.5m105.2 4.4c.3 3-.4 8.7-.6 9.4-.2 1.7-1.5 5.7-1.8 6.2-1.1 2.4-2.1 4.4-3.2 6.4-1.9 3.4-6.4 8.8-9 11.1-9.9 8.5-25.2 13.4-38.3 15-8.9 1.1-19.1.9-28.6-.8-3.2-.6-8.1-1.7-8.1-1.7s0 1.9-.1 3.3c-.1.6-.5 2.3-.8 2.8-.7 1.4-1.8 2.1-3.4 2.5-2 .4-4.1.5-5.9-.3-3-1.3-4.1-4.1-4.6-7.3-.4-2.6-.9-7.1-.9-7.1s-2.2-1.1-4.1-2c-5.7-2.8-11.2-6.3-16-9.8-1.3-1-7-5.7-8.3-6.9-3.5-3.3-6.7-6.7-9.1-10.9-1.9-3.3-2.4-6.3-1-9.8 2-4.9 9-8.6 13.8-10.7 3.5-1.6 14.6-5.2 19.1-5.8 2.2-.3 5.5-.9 5.7-1l.2-.2c.1-.1.3-5 .2-6.8 0-1.8 1.3-13.2 1.7-15.7.2-1.3 1.2-6.4 2.2-7.7.7-.9 1.8-.8 2.8-.2 5.2 3.3 6.8 14.6 7.2 20.3.2 3.5.4 8.8.4 8.8s6-.2 9.7-.1c3.6.1 7.6.7 11.3 1.2 4.8.8 14.1 2.8 19.4 5.5 4.4 2.2 8.5 6 9.9 10 1.2 3.6 1.1 6.2-.8 9.5-2.1 3.7-6.1 6.5-10.2 6.7-1.2.1-5.8-.5-7.2-1.6-.5-.4-.5-1.2-.1-1.7.1-.2 2.3-1.3 3.5-2 .6-.3 1.2-.7 1.6-1.2 1-.9 2-1.9 1.9-3.1-.1-1.5-1.8-2.5-3.3-3.1-7.3-2.9-21.9-5.3-28.9-5.7-2.8-.2-6.7-.3-6.7-.3l.8 38.9s3.2.6 5.8 1c1.5.2 7.7.8 9.3.8 12.6.3 26.6-.8 38.1-6.2 5.1-2.4 9.7-5.3 13.2-9.4 4.6-5.3 7.1-12.6 6.4-20.2-.7-8.3-6.5-18.1-11.2-24.1-12.3-15.8-33.4-28.9-52-36.5-19-7.8-37.7-12.3-57.8-13-5.2-.2-16.5.1-22.2 1.7-.8.2-1.6.5-2.4.7-.6.1-1.5.5-1.8.8l-.3.3s.4.2.7.3c.6.3 3.2.4 4.5.7 1.2.2 2.4.8 2.9 1.7.5.8.5 1.5 0 2.2-1.3 1.6-6.2 1.3-8.3 1-2.2-.4-5-1-5.5-3-.6-2.3.5-4.5 1.7-6.6 2.4-4.2 5.7-6.3 10.7-7.7 7-1.9 15.9-3.3 22.5-3.5 15-.6 29.2 2.1 43.8 6.5 8.3 2.5 19.2 6.7 27.2 10.6 5.7 2.8 14.8 7.8 19.8 11.2 1.6 1.1 11 7.9 12.4 9.1 3 2.5 7 6 9.9 8.9 5.6 5.5 12.5 13.9 15.8 20.7.8 1.6 1.4 3.2 2.5 5 .4.6 1.9 4.4 2.1 5.5.3 1.1.6 2.7.7 2.8.5.1 1.2 3.3 1.1 4.6zm188.9-8.6c-7 1.6-25.5 2.5-25.5 2.5l-2.3 7.3s9.2-.8 16-.1c0 0 2.2-.3 2.4 2.5.1 2.5-.2 5.3-.2 5.3s-.1 1.7-2.5 2.1c-2.5.4-19.9 1.1-19.9 1.1l-2.8 9.5s-1 2.2 1.3 1.6c2.2-.6 20.4-4 22.8-3.5 2.5.6 5.4 4 4.5 7.1-1 3.8-19.2 15.4-30.2 14.6 0 0-5.8.4-10.7-7.5-4.6-7.5 1.7-21.7 1.7-21.7s-2.9-6.6-.8-8.9c0 0 1.2-1.1 4.9-1.4l4.5-9.2s-5.1.3-8.1-3.4c-2.8-3.5-3-5.2-.9-6.1 2.3-1.1 23.5-5 38-4.5 0 0 5.1-.5 9.4 8.3-.1 0 2 3.6-1.6 4.4zm-54.7 35.5c-1.9 4.4-6.8 9.1-12.9 6.2-6-2.9-15.7-22.6-15.7-22.6s-3.7-7.3-4.4-7.2c0 0-.8-1.4-1.3 6.6s.1 23.6-3.1 26c-3 2.5-6.7 1.5-8.6-1.4-1.7-2.8-2.4-9.6-1.5-21.4 1.1-11.8 3.9-24.4 7.4-28.3 3.5-3.9 6.3-1.1 7.4 0 0 0 4.7 4.3 12.4 16.7l1.4 2.3s7 11.8 7.8 11.8c0 0 .6.5 1.1.1.7-.2.4-4 .4-4s-1.5-12.9-7.9-34.6c0 0-1-2.7-.3-5.3.7-2.6 3.2-1.4 3.2-1.4s9.9 5 14.8 21.2 1.6 30.9-.2 35.3zm106.9-9.7c-4.5 7.9-17.3 24.4-34.3 20.5-5.6 13.6-10.3 27.4-13 47.9 0 0-.6 4-3.9 2.6-3.3-1.2-8.7-6.6-9.8-14.2-1.2-10 3.3-26.8 12.3-46.1-2.6-4.3-4.4-10.4-2.9-19.2 0 0 2.3-16.2 18.6-30.8 0 0 2-1.7 3.1-1.2 1.2.5.7 5.8-.3 8.4-1 2.6-8.3 15.1-8.3 15.1s-4.5 8.5-3.3 15.2c8.5-13.1 28-39.6 40-31.3 4 2.9 5.9 9.2 5.9 16 0 6-1.4 12.3-4.1 17.1zm-3.5-20.8s-.7-5.2-5.8.5c-4.4 4.9-12.3 14-18.7 26.3 6.7-.8 13.1-4.4 15.1-6.2 3.2-2.8 10.6-10.5 9.4-20.6zm97.1-1.2H485c-.6-10.6-1.9-20.9-3.9-31.5-.2-1.1-1.2-1.9-2.3-1.9h-7.2c-.6 0-1.2.3-1.6.8-.4.5-.6 1.1-.4 1.8 2 10.3 3.3 20.4 4 30.9h-29.9c-1.4 0-2.5 1.1-2.5 2.5v6.5c0 1.4 1.1 2.5 2.5 2.5h30.4v4.4c0 9.3-.4 17-1.3 25.7-.1.7.1 1.3.6 1.8.4.5 1.1.8 1.7.8h6.7c1.3 0 2.4-1 2.5-2.3.9-8.7 1.3-16.5 1.3-26v-4.4h30.7c1.4 0 2.5-1.1 2.5-2.5v-6.5c-.2-1.5-1.3-2.6-2.7-2.6z"></path></svg>',
            pad: 15,
            bg: 'linear-gradient(to bottom, #0C2560, #1458B7)',
            fgCol: 'fff',
        },
        {
            // apple
            link: 'videos://',
            logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.046 17.091"><path d="M9.436 2.742A3.857 3.857 0 0 0 10.316 0a3.769 3.769 0 0 0-2.51 1.311 3.622 3.622 0 0 0-.9 2.631 3.138 3.138 0 0 0 2.53-1.2m.82 1.381c-1.4-.081-2.58.8-3.25.8s-1.69-.756-2.79-.736a4.117 4.117 0 0 0-3.5 2.147c-1.5 2.6-.4 6.473 1.06 8.59.71 1.006 1.56 2.205 2.69 2.166s1.48-.7 2.77-.7 1.67.7 2.79.675 1.9-1.008 2.6-2.1a9.317 9.317 0 0 0 1.17-2.42 3.814 3.814 0 0 1-2.27-3.468 3.9 3.9 0 0 1 1.83-3.256 3.991 3.991 0 0 0-3.1-1.7m8.93-2.016V4.96h2.28v1.885h-2.28V13.6c0 1.008.45 1.522 1.45 1.522a7.482 7.482 0 0 0 .82-.06v1.9a7.823 7.823 0 0 1-1.35.1c-2.36 0-3.27-.917-3.27-3.216V6.89h-1.79V5h1.74V2.107Zm10.25 14.853h-2.5L22.736 5h2.49l2.95 9.608h.06L31.186 5h2.44Zm10.98 0h-2.16v-4.9h-4.64V9.9h4.63V5h2.16v4.9h4.64v2.158h-4.63Z"/></svg>',
            pad: 20,
            bg: '#000',
            fgCol: 'fff',
        },
        {
            // prime
            link: 'primevideo://',
            logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800.3 246.3"><path d="M396.5 246.3v-.4c.4-.5 1.1-.8 1.7-.7 2.9-.1 5.7-.1 8.6 0 .6 0 1.3.2 1.7.7v.4h-12z"/><path d="M408.5 245.9c-4-.1-8-.1-12 0-5.5-.3-11-.5-16.5-.9-14.6-1.1-29.1-3.3-43.3-6.6-49.1-11.4-92.2-34.3-129.8-67.6-3.5-3.1-6.8-6.3-10.2-9.5-.8-.7-1.5-1.7-1.9-2.7-.6-1.4-.3-2.9.7-4s2.6-1.5 4-.9c.9.4 1.8.8 2.6 1.3 35.9 22.2 75.1 38.4 116.2 48 13.8 3.2 27.7 5.7 41.7 7.5 20.1 2.5 40.4 3.4 60.6 2.7 10.9-.3 21.7-1.3 32.5-2.7 25.2-3.2 50.1-8.9 74.2-16.9 12.7-4.2 25.1-9 37.2-14.6 1.8-1 4-1.3 6-.8 3.3.8 5.3 4.2 4.5 7.5-.1.4-.3.9-.5 1.3-.8 1.5-1.9 2.8-3.3 3.8-11.5 9-23.9 16.9-37 23.5-24.7 12.5-51.1 21.4-78.3 26.5-15.7 2.8-31.5 4.5-47.4 5.1z"/><path d="M260.4 43.2c2.5-1.5 5.1-3.1 7.8-4.5 7-3.6 14.8-5.4 22.7-5 5.7.3 10.9 1.9 14.9 6.1 3.8 3.9 5.2 8.7 5.6 13.9.1 1.1.1 2.2.1 3.4v51.8c0 4.5-.6 5.1-5.1 5.1h-12.2c-.8 0-1.6 0-2.4-.1-1.2-.1-2.2-1.1-2.4-2.3-.2-1.1-.2-2.2-.2-3.3V62c.1-1.9-.1-3.7-.6-5.5-.8-3.1-3.6-5.3-6.8-5.5-5.9-.4-11.8.8-17.2 3.3-.8.2-1.3 1-1.2 1.8v52.6c0 1 0 1.9-.2 2.9 0 1.4-1.1 2.4-2.5 2.4-1.5.1-3 .1-4.6.1h-10.6c-3.7 0-4.5-.9-4.5-4.6V62.2c0-1.7-.1-3.5-.5-5.2-.7-3.4-3.6-5.8-7-6-6-.4-12.1.8-17.5 3.4-.8.2-1.3 1.1-1.1 1.9v53.3c0 3.7-.8 4.5-4.5 4.5H197c-3.5 0-4.4-1-4.4-4.4V40.3c0-.8.1-1.6.3-2.4.4-1.2 1.6-1.9 2.8-1.9h12.5c1.8 0 2.9 1.1 3.5 2.8.5 1.4.8 2.7 1.3 4.2 1 0 1.6-.7 2.3-1.1 5.5-3.4 11.3-6.3 17.8-7.5 5-1 10-1 15 0 4.7 1 8.9 3.8 11.6 7.8.2.3.4.5.6.7-.1.1 0 .1.1.3z"/><path d="M467.7 93c.6-2 1.2-3.9 1.8-5.9 4.6-15.5 9.2-30.9 13.8-46.4l.6-1.8c.5-1.8 2.2-2.9 4-2.9h15.2c3.8 0 4.6 1.1 3.3 4.7l-6 15.9c-6.7 17.4-13.4 34.9-20.1 52.3-.2.6-.5 1.2-.7 1.8-.7 2.1-2.8 3.5-5 3.3-4.4-.1-8.8-.1-13.2 0-3.1.1-4.9-1.3-6-4.1-2.5-6.6-5.1-13.3-7.6-19.9-6-15.7-12.1-31.4-18.1-47.2-.6-1.2-1-2.6-1.3-3.9-.3-2 .4-3 2.4-3 5.7-.1 11.4 0 17 0 2.4 0 3.5 1.6 4.1 3.7 1.1 3.8 2.2 7.7 3.4 11.5 4.1 13.9 8.1 27.9 12.2 41.8-.1.1 0 .1.2.1z"/><path d="M112.6 47c.7-.2 1.3-.6 1.7-1.2 1.8-1.8 3.7-3.5 5.7-5.1 5.2-4 11.7-6 18.2-5.5 2.6.1 3.5.9 3.7 3.4.2 3.4.1 6.9.1 10.3.1 1.4 0 2.7-.2 4.1-.4 1.8-1.1 2.5-2.9 2.7-1.4.1-2.7 0-4.1-.1-6.7-.6-13.2.7-19.5 2.8-1.4.5-1.4 1.5-1.4 2.6v48c0 .9 0 1.7-.1 2.6-.1 1.3-1.1 2.3-2.4 2.3-.7.1-1.5.1-2.2.1h-13c-.7 0-1.5 0-2.2-.1-1.3-.1-2.3-1.2-2.4-2.5-.1-.8-.1-1.6-.1-2.4V41c0-4.6.5-5.1 5.1-5.1h9.6c2.6 0 3.8.9 4.5 3.4s1.3 5 1.9 7.7z"/><path d="M580.4 148.4c6.6.2 13.1.6 19.5 2.3 1.8.5 3.5 1.1 5.2 1.9 2.3.9 3.8 3.1 4.1 5.5.4 2.8.5 5.7.3 8.6-1.3 17.1-6.6 33.6-15.4 48.3-3.2 5.3-7.1 10.1-11.6 14.3-.9.9-2 1.6-3.2 2-1.9.5-3.1-.5-3.2-2.4.1-1 .3-2 .7-3 3.5-9.4 6.9-18.7 9.6-28.4 1.6-5.3 2.7-10.7 3.4-16.2.2-2 .3-4 .1-6-.1-3.4-2.3-6.3-5.6-7.3-3.1-1-6.3-1.6-9.6-1.8-9.2-.4-18.4 0-27.5 1.2l-12.1 1.5c-1.3.1-2.5 0-3.2-1.2s-.4-2.4.3-3.6c.8-1.1 1.8-2.1 3-2.8 7.4-5.3 15.7-8.5 24.5-10.6 6.8-1.4 13.7-2.1 20.7-2.3z"/><path d="M538.5 75v36c-.2 2-1.1 2.9-3.1 3-5.4.1-10.7.1-16.1 0-2 0-2.9-1-3.1-2.9-.1-.6-.1-1.3-.1-1.9V40c.1-3.1.9-4 4-4h14.4c3.1 0 4 .9 4 4v35z"/><path d="M151.6 74.8V39.3c.1-2.4 1-3.3 3.4-3.4 5.2-.1 10.4-.1 15.6 0 2.3 0 3 .7 3.2 3 .1.9.1 1.7.1 2.6v66.6c0 1.1-.1 2.2-.2 3.3-.1 1.3-1.1 2.2-2.4 2.3-.6.1-1.1.1-1.7.1h-13.9c-.5 0-.9 0-1.4-.1-1.4-.1-2.6-1.2-2.7-2.6-.1-.8-.1-1.6-.1-2.4.1-11.1.1-22.5.1-33.9z"/><path d="M163.2.1c1.6-.1 3.2.2 4.7.7 5.4 1.8 8.2 6.5 7.7 12.6-.4 5.2-4.3 9.4-9.5 10.2-2.2.4-4.5.4-6.7 0-5.7-1.1-9.9-5.3-9.5-12.5.6-7.1 5.3-11 13.3-11z"/><path d="M527.4.1c2-.2 4 .2 5.9 1 3.9 1.5 6.6 5.1 6.8 9.3.8 9.1-5.3 13.7-13.4 13.5-1.1 0-2.2-.2-3.3-.4-6.2-1.5-9.4-6.3-8.8-13.2.5-5.5 4.8-9.6 10.7-10.1.7-.1 1.4-.2 2.1-.1z"/><path d="M76.7 66.6c-.4-5.2-1.8-10.3-3.9-15-4.1-8.6-10.4-14.9-20-17.1-11-2.4-20.9 0-29.9 6.7-.6.6-1.3 1.1-2.1 1.5-.2-.1-.4-.2-.4-.3-.3-1-.5-2-.8-3-.8-2.5-1.8-3.4-4.5-3.4-3 0-6.1.1-9.1 0-2.3-.1-4.4.2-6 2 0 35 0 70.1.1 105 1.3 2.1 3.3 2.5 5.6 2.4 3.6-.1 7.2 0 10.8 0 6.3 0 6.3 0 6.3-6.2v-28.5c0-.7-.3-1.5.4-2.1 5 3.9 11.1 6.3 17.4 6.9 8.8.9 16.8-1.3 23.5-7.3 4.9-4.5 8.5-10.3 10.4-16.7 2.7-8.2 2.9-16.5 2.2-24.9zM52.8 87.3c-.7 3.1-2.3 5.9-4.6 8-2.6 2.2-5.8 3.5-9.2 3.5-5.1.3-10.1-.8-14.6-3.2-1.1-.5-1.8-1.6-1.7-2.8V74.7c0-6 .1-12 0-18-.1-1.4.7-2.6 2-3.1 5.5-2.6 11.2-3.8 17.2-2.6 4.2.6 7.8 3.3 9.5 7.2 1.5 3.2 2.4 6.7 2.6 10.2.6 6.4.6 12.8-1.2 18.9z"/><path d="M800.1 82.2s0-.1 0 0c0-.1 0-.1 0 0z"/><path d="M800.2 68.8v.4c-.4-.4-.6-1-.4-1.5v-.8s0-.1.1-.1h-.1v-1h.2c0-.1-.1-.1-.1-.2-.2-1.9-.6-3.8-1.1-5.6-3.7-13.2-12-21.9-25.5-25.3-6.3-1.5-12.7-1.7-19.1-.7-13.5 2-23.2 9.2-27.9 22-4.6 12.2-4.5 25.6.1 37.8 4 11.1 12 18.1 23.5 21 6.1 1.5 12.5 1.9 18.8 1 21-2.5 29.7-18.4 31.1-32.2h-.1v-1.4c-.1-.6-.2-1.1.4-1.5v.2c0-.1.1-.3.2-.4V69c0-.1-.1-.1-.1-.2zm-24 19c-.6 2.1-1.5 4-2.8 5.8-2.2 3.1-5.7 5.1-9.5 5.4-1.9.2-3.8.2-5.7-.2-4.2-.8-7.7-3.6-9.4-7.5-1.5-3.1-2.4-6.5-2.7-9.9-.5-5.9-.6-11.8.8-17.6.5-2.3 1.5-4.6 2.7-6.6 2.2-3.6 6-5.9 10.2-6.2 1.9-.2 3.8-.2 5.7.2 4 .8 7.3 3.4 9.1 7.1 1.7 3.5 2.7 7.4 2.9 11.3.1 1.8.2 3.6.1 5.4.3 4.4-.2 8.7-1.4 12.8z"/><path d="M624.9.8H611c-3.8 0-4.5.7-4.5 4.5v32.4c0 .7.3 1.4-.2 2.1-.9-.1-1.4-.7-2.1-1.1-10.4-6.1-21.3-7.2-32.3-2.1-7.7 3.6-12.5 10.1-15.6 17.8-3 7.4-3.7 15.2-3.5 23.1 0 7.4 1.7 14.7 5 21.3 3.8 7.3 9.3 12.9 17.3 15.3 10.9 3.4 21.1 1.7 30.4-5.2.7-.4 1.1-1.1 2-1.3.5 1.1.9 2.3 1.1 3.5.4 1.6 1.8 2.7 3.5 2.7h2.4c3.6 0 7.1.1 10.6 0 2.8 0 3.6-.9 3.7-3.8V4.6c-.1-3.1-.9-3.8-3.9-3.8zm-18.3 73.6v18.2c.2 1.2-.5 2.3-1.6 2.8-4.8 2.7-10.3 3.8-15.7 3-4.6-.5-8.6-3.3-10.7-7.4-1.6-3.2-2.5-6.6-2.8-10.1-.8-6.3-.3-12.7 1.2-18.8.5-1.7 1.1-3.3 2-4.9 2.1-3.9 6.1-6.4 10.5-6.7 5.3-.5 10.6.5 15.4 2.7 1.2.4 1.9 1.6 1.8 2.9-.2 6.2-.1 12.2-.1 18.3z"/><path d="M348 81.3c7.5 1.4 15.2 1.5 22.7.3 4.4-.6 8.6-1.9 12.5-4 4.5-2.6 7.8-6.2 9.2-11.2 3.5-12.6-1.9-25.3-15-30-6.4-2.1-13.2-2.8-19.9-1.9-15.8 1.8-26.1 10.5-30.8 25.6-3.3 10.3-2.9 20.8-.2 31.2 3.5 13.3 12.3 21.2 25.6 24 7.6 1.7 15.3 1.4 22.9.2 4-.7 8-1.7 11.8-3.2 2.3-.9 3.5-2.3 3.4-4.9-.1-2.4 0-4.9 0-7.4 0-3-1.2-3.9-4.1-3.2s-5.7 1.3-8.6 1.9c-6.2 1.3-12.6 1.3-18.8.2-8.5-1.7-14-9-13.5-18 .9.1 1.9.2 2.8.4zM345.5 66c.3-2.4 1-4.7 1.9-6.9 3-7.3 9.3-9.8 15.7-9.4 1.8.1 3.6.5 5.3 1.2 2.6 1.1 4.3 3.5 4.6 6.3.3 1.7.2 3.5-.3 5.2-1.2 3.6-4.1 5.1-7.6 5.8-2.1.5-4.3.7-6.5.5-3.9 0-7.9-.3-11.8-.9-1.5-.2-1.5-.2-1.3-1.8z"/><path d="M685.3 82.3c5.8-.4 11.6-1.5 16.8-4.3 5.3-2.6 9-7.5 10.1-13.3.7-3.6.7-7.4-.1-11-2.1-9-7.8-14.6-16.4-17.5-4.8-1.5-9.9-2.1-14.9-1.9-16.8.4-29.6 8.9-34.8 25.7-3.5 11.1-3 22.4.4 33.5 3.5 11.4 11.5 18.3 22.9 21.4 4.9 1.2 10 1.7 15 1.5 7.3-.1 14.6-1.5 21.5-4.1 2.9-1.1 3.6-2.1 3.6-5.2v-7.2c-.1-2.9-1.3-3.9-4.2-3.2-2.2.6-4.3 1.1-6.5 1.6-6.7 1.6-13.7 1.9-20.5.7-6.8-1.3-11.4-5.2-13.2-12-.5-2-.9-4-1.1-6.1.5 0 1 0 1.4.2 6.6 1.2 13.3 1.7 20 1.2zm-20.9-16c.7-3.9 1.6-7.7 4-10.9 3.7-4.9 8.8-6.3 14.6-5.7.5 0 .9.2 1.4.2 7 1.1 8.7 6.7 7.4 12.1-1 4-4.3 5.5-8 6.2-2 .4-4.1.6-6.2.5-4.1-.1-8.1-.4-12.1-1-.9-.1-1.3-.5-1.1-1.4z"/></svg>',
            pad: 15,
            bg: '#00a8e1',
            fgCol: 'fff',
        },
        {
            // hulu
            link: 'https://hulu.com',
            logo: '<svg viewBox="0 0 1000 328.483" xmlns="http://www.w3.org/2000/svg"><path d="M 157.178 102.503 L 106.249 102.503 C 88.379 102.503 79.393 107.315 79.393 107.315 L 79.393 0 L 0 0 L 0 328.483 L 79.393 328.483 L 79.393 195.939 C 79.393 184.214 88.937 174.72 100.679 174.72 L 146.897 174.72 C 158.657 174.72 168.167 184.214 168.167 195.939 L 168.167 328.483 L 247.594 328.483 L 247.594 185.674 C 247.594 125.611 207.453 102.503 157.178 102.503 Z M 920.572 102.503 L 920.572 235.029 C 920.572 246.773 911.063 256.266 899.304 256.266 L 853.103 256.266 C 841.343 256.266 831.833 246.773 831.833 235.029 L 831.833 102.503 L 752.39 102.503 L 752.39 241.648 C 752.39 298.525 788.883 328.483 842.82 328.483 L 920.589 328.483 L 920.589 328.071 C 970.271 328.071 1000 292.825 1000 241.648 L 1000 102.503 L 920.572 102.503 Z M 472.572 235.029 C 472.572 246.773 463.046 256.266 451.286 256.266 L 405.068 256.266 C 393.308 256.266 383.799 246.773 383.799 235.029 L 383.799 102.503 L 304.371 102.503 L 304.371 241.648 C 304.371 298.525 340.867 328.483 394.803 328.483 L 472.572 328.483 L 472.572 328.071 C 522.255 328.071 551.999 292.825 551.999 241.648 L 551.999 102.503 L 472.572 102.503 L 472.572 235.029 Z M 612.522 328.483 L 691.965 328.483 L 691.965 0 L 612.522 0 L 612.522 328.483 Z"/></svg>',
            pad: 22,
            bg: 'linear-gradient(to bottom left, #040405, #183949)',
            fgCol: '1ce783',
        },
        {
            // youtube
            link: 'https://www.youtube.com',
            logo: '<svg viewBox="31.395 0.786 58.194 17.98" xmlns="http://www.w3.org/2000/svg"><path d="M34.602 13.004 31.395 1.418h2.798l1.124 5.252c.287 1.294.497 2.397.633 3.31h.082c.094-.655.306-1.75.633-3.291l1.164-5.27h2.799L37.38 13.003v5.557H34.6v-5.557h.002ZM41.47 18.194c-.565-.381-.967-.974-1.207-1.778-.237-.805-.357-1.872-.357-3.208V11.39c0-1.348.136-2.432.409-3.248.273-.816.699-1.413 1.277-1.787.579-.374 1.338-.563 2.279-.563.927 0 1.667.191 2.227.572.558.381.967.978 1.225 1.787.26.812.389 1.891.389 3.239v1.818c0 1.336-.128 2.408-.38 3.217-.25.811-.66 1.404-1.224 1.778-.565.374-1.332.562-2.298.562-.997.002-1.776-.19-2.34-.571Zm3.165-1.962c.156-.409.236-1.074.236-2.001v-3.902c0-.898-.078-1.557-.236-1.97-.157-.417-.432-.624-.828-.624-.38 0-.651.207-.806.623-.158.417-.235 1.073-.235 1.971v3.902c0 .927.075 1.594.225 2.001.15.41.421.614.816.614.396 0 .67-.204.828-.614ZM56.815 18.563H54.61l-.244-1.533h-.061c-.6 1.157-1.498 1.736-2.698 1.736-.83 0-1.444-.273-1.839-.816-.395-.546-.593-1.397-.593-2.554V6.037h2.82v9.193c0 .56.061.957.184 1.195.122.237.327.357.613.357.245 0 .48-.075.706-.226.226-.15.39-.34.5-.571v-9.95h2.818v12.527Z"/><path d="M64.475 3.688h-2.798v14.875h-2.759V3.688H56.12V1.42h8.356v2.268Z"/><path d="M71.277 18.563H69.07l-.245-1.533h-.06c-.6 1.157-1.499 1.736-2.699 1.736-.83 0-1.443-.273-1.839-.816-.395-.546-.592-1.397-.592-2.554V6.037h2.82v9.193c0 .56.06.957.183 1.195.122.237.327.357.614.357.244 0 .48-.075.705-.226.226-.15.39-.34.501-.571v-9.95h2.818v12.527ZM80.609 8.039c-.172-.79-.447-1.362-.828-1.717-.38-.355-.905-.532-1.573-.532-.518 0-1.002.146-1.451.44-.45.294-.798.677-1.042 1.155h-.021v-6.6h-2.717v17.776h2.329l.287-1.186h.06c.22.424.546.755.981 1.002.436.245.92.367 1.451.367.953 0 1.656-.44 2.105-1.317.45-.88.675-2.25.675-4.118v-1.982c0-1.4-.087-2.498-.256-3.288Zm-2.585 5.11c0 .913-.037 1.628-.113 2.145-.075.518-.2.887-.378 1.103a.871.871 0 0 1-.715.327c-.233 0-.447-.054-.645-.165a1.232 1.232 0 0 1-.48-.489V8.96c.095-.34.26-.618.492-.837.23-.218.485-.327.755-.327a.76.76 0 0 1 .663.337c.158.226.266.602.327 1.133.061.532.092 1.287.092 2.268v1.615h.002ZM84.866 13.871c0 .804.023 1.407.07 1.809.047.402.146.694.297.88.15.183.38.274.693.274.421 0 .713-.164.868-.491.158-.327.243-.873.257-1.634l2.431.143c.014.108.022.259.022.45 0 1.156-.318 2.022-.95 2.593-.633.572-1.53.859-2.686.859-1.39 0-2.364-.436-2.921-1.308-.56-.873-.838-2.22-.838-4.045v-2.187c0-1.88.29-3.253.868-4.118.579-.866 1.569-1.299 2.973-1.299.966 0 1.71.177 2.227.532.517.355.882.905 1.094 1.656.211.75.317 1.785.317 3.106v2.145h-4.722v.635Zm.357-5.903c-.143.176-.237.466-.287.868-.047.402-.07 1.011-.07 1.83v.898h2.062v-.898c0-.805-.028-1.414-.082-1.83-.054-.416-.153-.708-.296-.88-.144-.169-.365-.256-.664-.256-.3.002-.522.092-.663.268Z"/></svg>',
            pad: 15,
            bg: '#ea4335',
            fgCol: 'fff',
        },
    ],
    bigTray: function () {
        let nodes = []
        for (const x of channels.data) nodes.push(channels.card(x))
        return mediaAll.tray(nodes, 6, null)
    },
    tray: function () {
        let nodes = []
        for (const x of channels.data) nodes.push(channels.card(x))
        return content.tray('Channels', nodes, 40, 8)
    },
    card: function (x) {
        let item = document.createElement('div')
        item.classList = 'channel disney clickable-o'
        item.style.setProperty('padding', `${x.pad * 0.75}% ${x.pad}%`)
        item.style.setProperty('--bg', `${x.bg}`)
        item.style.setProperty('--fg', `#${x.fgCol}`)
        item.onclick = function (e) {
            openApp({
                link: x.link,
                distract: true,
            }, e)
        }

        item.innerHTML = x.logo
        item = addFloatEffect(item, item.firstChild)
        return item
    },
}