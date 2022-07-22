const actors = {
    search: function (q) {
        let results = []
        for (const tray of movieData) for (const movie of tray) if (movie.cast) for (const actor of movie.cast) if (results.length < len)
            // if actor exists in some cast
            if (actor.actor.toUpperCase().includes(q)) {
                // check if already there
                let already = false
                for (const result of results)
                    if (JSON.stringify(result) == JSON.stringify({ actor: actor.actor }))
                        already = true
                if (!already) results.push({ actor: actor.actor })
            }
        // if (!results.includes(actor))
        return results
    },
    resultCard: function (data) {
        let card = resultCard.base({
            name: 'Actors',
            type: 'hstack',
            gap: 10,
        })
        for (const x of data) card.lastChild.append(actors.card(x.actor, null))
        return card
    },
    card: function (actor, char) {
        let card = document.createElement('a')
        card.classList = 'actor-card clickable-o'
        card.onclick = function () { modal.add(actors.detail(actor)) }

        let image = document.createElement('div')
        image.classList = 'image layer-1'

        if (actors.data[actor]) image.style.setProperty('background-image', `url(${actors.data[actor]})`)
        else {
            let str = ''
            for (const word of actor.split(' ')) str = str.concat(word[0])
            image.textContent = str
        }

        card.append(image)
        card.append(elems.textbox(actor, char ?? null))

        return card
    },
    row: function (results, title) {
        let nodes = []
        for (const item of results) nodes.push(actors.card(item.actor, item.char))
        return content.tray(title ?? 'Actors', nodes, 40, 20)
    },
    detail: function (name) {
        let card = document.createElement('div')
        card.classList = 'actor-detail layer-0 card-shadow'

        let actor = actors.card(name, null)
        actor.onclick = function () { }
        actor.href = googleSearch(name)
        actor.target = '_blank'

        card.append(actor)
        card.append(mediaElems.movie.row(actors.actorMatch(name), 'TV & Movies', 'small'))
        return card
    },
    data: {
        'Jason Sudeikis': 'https://is2-ssl.mzstatic.com/image/thumb/AgXPsy2GlFurBYHRquyjeQ/492x492ve.webp',
        'Olivia Munn': 'https://celebmafia.com/wp-content/uploads/2019/09/olivia-munn-2019-creative-arts-emmy-awards-in-la-17.jpg',
        'Charlotte Ritchie': 'https://images.mubicdn.net/images/cast_member/562435/cache-635452-1611181278/image-w856.jpg',
        'Kiell Smith-Bynoe': 'https://i.guim.co.uk/img/media/e95bb7a992d5b17c209a47dd27f7f6fa6c203bc0/1678_445_3832_2299/master/3832.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e6a9a7cb8ff5a39bbf8c6422c9b624dd',
        'Hailee Steinfeld': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Hailee_Steinfeld_by_Gage_Skidmore.jpg/1200px-Hailee_Steinfeld_by_Gage_Skidmore.jpg',
        'Kevin Alejandro': 'https://arealnews.com/wp-content/uploads/2021/10/kevin3-1.jpg',
        'Harry Lloyd': 'https://musicimage.xboxlive.com/catalog/video.contributor.90371b00-0200-11db-89ca-0019b92a3933/image?locale=en-us&target=circle',
        'Katie Leung': 'https://static.wikia.nocookie.net/harrypotter/images/b/b3/Katie_Leung_by_Faye_Thomas_2014.jpg',
        'Shohreh Aghdashloo': 'https://m.media-amazon.com/images/M/MV5BZDI0M2Q1NzYtYzIxNy00MWE4LTg4NDgtOWRhZDdkYTAxZTBhXkEyXkFqcGdeQXVyNTY3MzA5MzA@._V1_.jpg',
        'Jeremy Renner': 'https://static.wikia.nocookie.net/marvelmovies/images/2/24/Jeremy_Renner.jpg',
        'H. Jon Benjamin': 'https://static.wikia.nocookie.net/wordgirl/images/7/7a/IMG_0630.JPG',
        'Aisha Tyler': 'https://static.wikia.nocookie.net/modernfamily/images/d/d5/Aisha-Tyler.jpg',
        'Jessica Walter': 'https://i.guim.co.uk/img/media/2210d59881f244fafa78bffd007fa65eb016fc05/0_88_3000_1801/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c1328f0a445403ca26fb753cd33bf947',
        'Chris Parnell': 'https://static.wikia.nocookie.net/adam-ruins-everything/images/9/96/Chris_Parnell.jpg',
        'Judy Greer': 'https://m.media-amazon.com/images/M/MV5BMTg5MTAyMzMzMl5BMl5BanBnXkFtZTcwMDY2Mzc2NQ@@._V1_.jpg',
        'Penn Badgley': 'https://media1.popsugar-assets.com/files/thumbor/5hs8f5F2K3qAi5JiZn4XoBIJUAE/0x150:3648x3798/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/10/28/859/n/1922398/d130310f5f99c8a0122de3.83461725_/i/Penn-Badgley.jpg',
        'Elizabeth Lail': 'https://www.thewikifeed.com/wp-content/uploads/2021/06/elizabeth-lail-1.jpg',
        'Shay Mitchell': 'https://media.self.com/photos/603d499db090d0bf156c1013/1:1/w_2332,h_2332,c_limit/1205249363',
        'Justin Roiland': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Justin_Roiland_%2836434635662%29.jpg/1200px-Justin_Roiland_%2836434635662%29.jpg',
        'Thomas Middleditch': 'https://m.media-amazon.com/images/M/MV5BMTkwNjMwMDAzN15BMl5BanBnXkFtZTgwOTU3NjMwMTE@._V1_.jpg',
        'Sean Giambrone': 'https://pbs.twimg.com/profile_images/1058413246015631360/R87z0r6T.jpg',
        'Mary Mack': 'https://m.media-amazon.com/images/M/MV5BNzE3ZWM5MDgtMDY0NC00NTZiLTk1YjYtNDg1ZmM1MzM1YTMyXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg',
        'John Cho': 'https://m.media-amazon.com/images/M/MV5BMjM4Nzk2NjUxNF5BMl5BanBnXkFtZTgwMzY3NDI2MTI@._V1_.jpg',
        'Daniella Pineda': 'https://upload.wikimedia.org/wikipedia/commons/6/68/Daniella-Pineda_%28cropped%29.jpg',
        'Mustafa Shakir': 'https://m.media-amazon.com/images/M/MV5BODAyN2U5MTYtNWRlNi00MDAwLWJjNTctZGVhMDg2MzQ1MWUwXkEyXkFqcGdeQXVyMTcwNDQyNDk@._V1_.jpg',
        'Elena Satine': 'https://upload.wikimedia.org/wikipedia/commons/9/92/Actress_Elena_Satine_%28cropped_-_Medium_shot%29.jpg',
        'Alex Hassell': 'https://www.thewikifeed.com/wp-content/uploads/2021/08/alex-hassell-1.jpg',
        'Margaret Qualley': 'https://m.media-amazon.com/images/M/MV5BYWZmMDFlMDYtYzk3My00YTg1LTllZWUtYzY2Y2QyNjk2NTZmXkEyXkFqcGdeQXVyMzcxMTAwMDM@._V1_.jpg',
        'Nick Robinson': 'https://m.media-amazon.com/images/M/MV5BNzViMjQ4NzQtZDBhNC00ZTlhLTk4NzktYTYyYzE4NjFiZjQ1XkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg',
        'Charlie Day': 'https://static.wikia.nocookie.net/itsalwayssunny/images/b/bc/Charlie_Day.jpg',
        'Glenn Howerton': 'https://ntvb.tmsimg.com/assets/assets/239200_v3_bb.jpg',
        'Kaitlin Olson': 'https://static.wikia.nocookie.net/disney/images/d/dc/Kaitlin_Olson.jpg',
        'Danny DeVito': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
        'Larry David': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Larry_David_at_the_2009_Tribeca_Film_Festival_2.jpg/1280px-Larry_David_at_the_2009_Tribeca_Film_Festival_2.jpg',
        'Jeff Garlin': 'https://static.wikia.nocookie.net/disney/images/2/27/Jeff_Garlin.jpg',
        'Cheryl Hines': 'https://deadline.com/wp-content/uploads/2019/03/cheryl-hines-e1553018614527.jpg',
        'Susie Essman': 'https://upload.wikimedia.org/wikipedia/commons/1/16/Susie_Essman_at_the_2009_Tribeca_Film_Festival.jpg',
        'Richard Lewis': 'https://m.media-amazon.com/images/M/MV5BMTA5NDIzMzk0ODJeQTJeQWpwZ15BbWU2MDA3OTI0Mw@@._V1_UX178_CR0,0,178,264_AL_.jpg',
        'J.B. Smoove': 'https://static.wikia.nocookie.net/harleyquinntv/images/d/d0/J._B._Smoove.jpg',
        'Justin Roiland': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Justin_Roiland_%2836434635662%29.jpg/1200px-Justin_Roiland_%2836434635662%29.jpg',
        'Chris Parnell': 'https://static.wikia.nocookie.net/adam-ruins-everything/images/9/96/Chris_Parnell.jpg',
        'Sarah Chalke': 'https://www.northernstars.ca/wp-content/uploads/2017/08/Sarah_Chalke-500-640x800.jpg',
        'Brian Cox': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCskxSLQJuuUMd17lJgBxYuOsEv8yk1mCm-UK1Pz6U_B8eXgad',
        'Jeremy Strong': 'https://upload.wikimedia.org/wikipedia/commons/7/75/Jeremy_Strong_2014.jpg',
        'Sarah Snook': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsCbLwd8jRGCMOF2czavGhVXHGPG0DsLIxKBTjMqP_w-JqgiKwZzFfmRwHeb_ABBpAp3s&usqp=CAU',
        'Matthew Macfadyen': 'https://m.media-amazon.com/images/M/MV5BMjQ1ODY2ODA5MV5BMl5BanBnXkFtZTgwNDA3MzkxNzM@._V1_.jpg',
        'Kieran Culkin': 'https://m.media-amazon.com/images/M/MV5BYzZkNzYyNTYtMDY2ZS00YmI4LWI5YzctZjBiN2FkY2NkNWMyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
        'Nicholas Braun': 'https://upload.wikimedia.org/wikipedia/commons/3/33/Nicholas_Braun_2017.jpg',
        'Alan Ruck': 'https://static.wikia.nocookie.net/theloudhouse/images/1/17/Alan_Ruck.png',
        'Hannah Waddingham': 'https://is3-ssl.mzstatic.com/image/thumb/U6GiaSTux3G9QH9TlhMRZg/492x492ve.webp',
        'Juno Temple': 'https://is1-ssl.mzstatic.com/image/thumb/yuUiq_Yf9rwApABQwQ2Puw/492x492ve.webp',
        'Jeremy Swift': 'https://is4-ssl.mzstatic.com/image/thumb/37A2yAcEOqpu6sMk6of4Dg/492x492ve.webp',
        'Phil Dunster': 'https://is3-ssl.mzstatic.com/image/thumb/r7YVz00Gfg-4PCrlnBj4jA/492x492ve.webp',
        'Brett Goldstein': 'https://is3-ssl.mzstatic.com/image/thumb/nxwtHIicKZUbrQQ_0GlISA/492x492ve.webp',
        'Brendan Hunt': 'https://is3-ssl.mzstatic.com/image/thumb/tjFBadTW13u_cEJJXNjH9A/492x492ve.webp',
        'Nick Mohammed': 'https://is2-ssl.mzstatic.com/image/thumb/3oivPHwZya0T-EKJHJXSvA/492x492ve.webp',
        'Kayvan Novak': 'https://hairstyles.thehairstyler.com/hairstyle_views/front_view_images/6201/original/Kayvan-Novak.jpg',
        'Matt Berry': 'https://m.media-amazon.com/images/M/MV5BMTgzMjQ0NTc5Nl5BMl5BanBnXkFtZTcwMDc0MDYwOA@@._V1_.jpg',
        'Natasia Demetriou': 'https://www.unitedagents.co.uk/sites/default/files/thumbnails/image/natasia-demetriou-headshot.jpg',
        'Harvey Guillen': 'https://m.media-amazon.com/images/M/MV5BNjUxYjViMTYtZWZkOS00MzVjLTk4MmYtNTcyMzdjYzQ3NWNhXkEyXkFqcGdeQXVyNzY4MDEyMDI@._V1_.jpg',
        'Mark Proksch': 'https://cps-static.rovicorp.com/2/Open/Getty_Images_406/Person/1177610/_derived_jpg_q90_310x470_m0/Mark_Proksch_C_V01.jpg',
        'Bill Burr': 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Bill_Burr_by_Gage_Skidmore.jpg',
        'Laura Dern': 'https://m.media-amazon.com/images/M/MV5BMjI3NzY0MDQxMF5BMl5BanBnXkFtZTcwNzMwMzcyNw@@._V1_.jpg',
        'Justin Long': 'https://m.media-amazon.com/images/M/MV5BMjIwNTEwODY4NF5BMl5BanBnXkFtZTgwMzg0ODMwMjE@._V1_.jpg',
        'Zooey Deschanel': 'https://static.wikia.nocookie.net/disney/images/7/79/Zooey_Deschanel.jpg',
        'Jake Johnson': 'https://static.wikia.nocookie.net/smurfs/images/8/8c/Jake-johnson-paleyfest-2012-02.jpg',
        'Max Greenfield': 'https://wwwimage-tve.cbsstatic.com/thumbnails/photos/w425-q80/cast/neighborhood_max_800x1000.jpg',
        'Hannah Simone': 'https://media.glamour.com/photos/5695a50d16d0dc3747ed0549/master/pass/beauty-2014-07-hannah-simone-without-bangs-hair-main.jpg',
        'Lamorne Morris': 'https://static.wikia.nocookie.net/newgirl/images/7/76/Morris.jpg',
        'Damon Wayans Jr.': 'https://i.ticketweb.com/i/00/09/10/86/11/Original.jpg?v=2?v=3',
        'Nasim Pedrad': 'https://m.media-amazon.com/images/M/MV5BMjI2NTY1NzEzM15BMl5BanBnXkFtZTgwNzExMjg1NTM@._V1_.jpg',
        'Nelson Franklin': 'https://static.wikia.nocookie.net/marvelmovies/images/5/59/Nelson_Franklin.jpg',
        'Megan Fox': 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwMTU4NzU4OTc3MDIxMDUw/gettyimages-843456920.jpg',
        'Darin Brooks': 'https://wwwimage-tve.cbsstatic.com/thumbnails/photos/w425-q80/cast/bb_cast_darin_brooks_800x1000.jpg',
        'Alan Ritchson': 'https://static.wikia.nocookie.net/tmnt/images/5/50/Alan-ritchson-premiere-steam-01.jpg',
        'Chris Romano': 'https://www.themoviedb.org/t/p/w235_and_h235_face/qaUN5cJYHWBwDBn40yEuWXQwMfg.jpg',
        'Ed Marino': 'https://playersbio.com/wp-content/uploads/2020/06/ed-003.jpg',
        'Denise Richards': 'https://upload.wikimedia.org/wikipedia/commons/7/70/Denise_Richards_2009.jpg',
        'Frankie Shaw': 'https://m.media-amazon.com/images/M/MV5BNzliMWQ1OTItMjhiNy00YzExLWE3NzEtZDgwYTM0ODA2NTYzXkEyXkFqcGdeQXVyNzMzNzYzNg@@._V1_.jpg',
        'Sam Jones III': 'https://static.wikia.nocookie.net/tvdatabase/images/7/74/Sam_Jones%2C_III.jpg',
        'Page Kennedy': 'https://parlemag.com/wp-content/uploads/2016/06/Page-Kennedy.jpg',
        'Josh Radnor': 'https://m.media-amazon.com/images/M/MV5BMjAwNTUxMTM4OF5BMl5BanBnXkFtZTcwNjUyNzc4Mg@@._V1_UY264_CR4,0,178,264_AL_.jpg',
        'Jason Segel': 'https://m.media-amazon.com/images/M/MV5BMTUwNzcxNzM1Nl5BMl5BanBnXkFtZTgwNzA5NzU4MjE@._V1_.jpg',
        'Cobie Smulders': 'https://static.wikia.nocookie.net/snicket/images/d/d7/Cobiesmulders5.jpg',
        'Neil Patrick Harris': 'https://m.media-amazon.com/images/M/MV5BMTUxNjQ4MjU5Ml5BMl5BanBnXkFtZTcwMTY5NzAzNw@@._V1_.jpg',
        'Alyson Hannigan': 'https://m.media-amazon.com/images/M/MV5BMTkxODc5ODI5OV5BMl5BanBnXkFtZTcwNzExOTUyNw@@._V1_.jpg',
        'Constance Wu': 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3NDc1NzUxNDE3ODgyMjc4/gettyimages-632702568.jpg',
        'Henry Golding': 'https://m.media-amazon.com/images/M/MV5BMTEzNzcwODU0ODJeQTJeQWpwZ15BbWU4MDQ5MzE4MDYz._V1_.jpg',
        ' Michelle Yeoh': 'https://m.media-amazon.com/images/M/MV5BMTg0NTI0NDkzOF5BMl5BanBnXkFtZTcwMjYwMTIwNw@@._V1_.jpg',
        'Gemma Chan': 'https://m.media-amazon.com/images/M/MV5BYTI3ZDEwYjktZjVhYS00NTlhLTkwOWEtNjM1MzEyMWU5M2QyXkEyXkFqcGdeQXVyMTE3ODY2Nzk@._V1_.jpg',
        'Jimmy O. Yang': 'https://static.wikia.nocookie.net/criminalminds/images/0/0e/Jimmy_O._Yang.jpg',
        'Hilary Duff': 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Hilary_Duff_Vogue_2019_2.png',
        'Christopher Lowell': 'https://celebindia.com/wp-content/uploads/2021/11/chris.jpg',
        'Francia Raisa': 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR8Lxul17eBdozr8GjyCJW5B2aIG5EZ_B32B5D3G8sssiiTAQAh',
        'Suraj Sharma': 'https://media1.popsugar-assets.com/files/thumbor/ESTER5vopkgjVlNDSef1Wz5BS3g/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/08/11/660/n/1922283/e81b0f7e3dea726b_GettyImages-959930836/i/Suraj-Sharma-as-Sid.jpg',
        'Tom Ainsley': 'https://m.media-amazon.com/images/M/MV5BMjU4YWRlY2ItZDM4NS00MmUxLTkyYzItYmJhOTQ5MDY1OGYwXkEyXkFqcGdeQXVyMTA0Nzk2MTM5._V1_.jpg',
        'Tien Tran': 'https://mx.web.img2.acsta.net/pictures/21/11/26/03/02/1742152.jpg',
        'Ben Feldman': 'https://static.wikia.nocookie.net/doblaje/images/a/ac/Ben_Feldman_2014-06.jpg/revision/latest/top-crop/width/360/height/450?cb=20140710030936&path-prefix=es',
        'America Ferrera': 'https://es.web.img3.acsta.net/pictures/16/01/26/11/12/335396.jpg',
        'Mark McKinney': 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRdekt2C0DfHH3BUhLj22jNNmku0Jxp5dGEKo2GjlWxpm72FbAT',
        'Lauren Ash': 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQFrREYu3k7yDy7_bzV_dON1kGWYhJPp3I1J3kNNyMs1tfX54qv',
        'Colton Dunn': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTymDpOuLsBek6CVMbt4kIfRbsSOvcOW3qwlzD2pHDS5bKTWj_U',
        'Nichole Sakura': 'https://m.media-amazon.com/images/M/MV5BZDY1ZTRiMjAtZTdhZi00NzgxLThkYzYtMmVhZmZkN2JjN2JlXkEyXkFqcGdeQXVyMjAzMzg4NzA@._V1_.jpg',
        'Nico Santos': 'https://mx.web.img3.acsta.net/pictures/17/04/10/17/44/161323.jpg',
        'Quinta Brunson': 'https://variety.com/wp-content/uploads/2021/02/Quinta-Brunson-Photo-Credit-Sela-Shiloni-e1613510769150.jpg',
        'Tyler James Williams': 'https://m.media-amazon.com/images/M/MV5BODYzNTQyMDk3N15BMl5BanBnXkFtZTgwMDEwMDIxNzM@._V1_.jpg',
        'Janelle James': 'https://pbs.twimg.com/profile_images/1487083562675412998/f6MU2WmD_400x400.jpg',
        'Lisa Ann Walter': 'https://m.media-amazon.com/images/M/MV5BYmJjYThlYjctYzlkNC00MjdmLTg2NzItNWEyNDlmZDUxNDA4XkEyXkFqcGdeQXVyNTgwNzc2MjE@._V1_.jpg',
        'Sheryl Lee Ralph': 'https://m.media-amazon.com/images/M/MV5BMjIxMTUzNjcwM15BMl5BanBnXkFtZTcwNzM1MTU0Nw@@._V1_.jpg',
        'Chris Perfetti': 'https://ntvb.tmsimg.com/assets/assets/775318_v9_bb.jpg',
        'Adam Scott': 'https://static.wikia.nocookie.net/memoryalpha/images/3/36/Adam_Scott.jpg/revision/latest?cb=20200603120918&path-prefix=es',
        'Britt Lower': 'https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/performer%20images/p786449/BrittLower.jpg',
        'Zach Cherry': 'https://m.media-amazon.com/images/M/MV5BODEyN2Y4YjEtNjUyOC00N2QzLTk0NmEtMDMxYjY3YjI1YWJiXkEyXkFqcGdeQXVyNTg0ODkzOTA@._V1_.jpg',
        'John Turturro': 'https://medias.unifrance.org/medias/116/172/175220/format_page/media.jpg',
        'Christopher Walken': 'https://m.media-amazon.com/images/M/MV5BMjA4ODUyNDQ2NV5BMl5BanBnXkFtZTYwODk2MTYz._V1_UY264_CR2,0,178,264_AL_.jpg',
        'Dichen Lachman': 'https://static.wikia.nocookie.net/marvelmovies/images/8/84/Dichen_Lachman.jpg',
        'Itzan Escamilla': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5JOBhJM2PnCIWnXFIbB5TxX5-dNgX7RPkk64huusYyvbcexp',
        'Omar Ayuso': 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRI8hAOrz2Oza7P3bL7vUvo29y6NhBjZHAsFVe3hzHxk7t84KWW2a-j1oZW8MfD',
        'Miguel Bernardeau': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPmiVMT-ZlhJL7DjYvtq57m_4gus5SQDGBOBN2aCR-2wgSbvyi',
        'Arón Piper': 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRCtzLOGW8UI-O_GBG1HO5JihIw-TVlXTvs5LEPpHQBzPT6v44Ijle9Qz7f2cEE',
        'Mina El Hammani': 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQjxZWZ07GWHjbNgqr6EytV6DJ6IL1AWmInM4wi3Fqv4eJmzzaZCCOAwdFBxAqO',
        'Álvaro Rico': 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ-k0MDBwupIIf91Cz33cfpj5LuBz9A6bOxpmWabEl8vZcF5ieE9HM8qfyfSzY0',
        'Ester Expósito': 'https://m.media-amazon.com/images/M/MV5BZWEzZDczZTAtMzM1MC00YWQ5LTg0OWUtMGQ5NTMzNzA5YzJiXkEyXkFqcGdeQXVyNjYzNDE4ODA@._V1_.jpg',
        'Danna Paola': 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTsScW3a6XoHHL4jEWGL5tVoREDdl8FC2mQMIeDs-SO-fVSEJ_58ymXWMG9fSMU',
        'Anna Chlumsky': 'data:image/jpeg;base64,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',
        'Julia Garner': 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSax75pnvVEYNVKkxEy6XPZkUi1leGuwWvtCfFSLj5VqHz94Ll',
        'Arian Moayed': 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3WFnTYjfjgQv2suk-bbw1xdFXJuscoieuIs4QiSVANqSII5ik',
        'Jason Bateman': 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQW2fJ5ISNv4KYsnUn6YQENNKRAeeSE5nJB6gA6JIjOyE0gHh3F',
        'Laura Linney': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpqg5F3mkT5xDP-kVQRpPQgN1MzFQ0aArkt1rutcVMe0eYMbyt',
        'Jared Leto': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Jared_Leto%2C_San_Diego_Comic_Con_2016_%282%29.jpg/640px-Jared_Leto%2C_San_Diego_Comic_Con_2016_%282%29.jpg',
        'Anne Hathaway': 'https://m.media-amazon.com/images/M/MV5BMTRhNzQ3NGMtZmQ1Mi00ZTViLTk3OTgtOTk0YzE2YTgwMmFjXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg',
        'Jodie Comer': 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Jodie_Comer_during_an_interview%2C_August_2021_%28cropped%29.png',
        'Sandra Oh': 'https://m.media-amazon.com/images/M/MV5BMTMyNzYyNDE4MV5BMl5BanBnXkFtZTcwOTkxMDQ2NA@@._V1_.jpg',
        'Ronny Chieng': 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSb4_TepzpGcI2seUBE4tgSZY0p5XTl05x9-kSMIrUpCRLQIffB',
        'Kumail Nanjiani': 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQSm8xXbItvumi6jp_cVYqLVZ7KshGtNW8ABe0jgWZKBezJP84u',
        'Donald Glover': 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSsL0HYpJcplREqdpUoJ3C3L-Ff9fMMWaWynybeBCUTmH6aPh5L0KZKrkIplOzn',
        'Brian Tyree Henry': 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJ12lJ1Ps-997m4yQIylq8CdAvYtKRxGaaJ8SZLf4A5isGkoWt',
        'LaKeith Stanfield': 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlGh0H2NueR0ct4SIu0l8poi9jjluJ9QqHMq4Cwc7RO3VRlq4L',
        'Zazie Beetz': 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSWeCQF7i8dyY4e1FgOxmXKJAYvGj0e0qQxYHzfsfZAgbjVRCqc',
        'Steve Carell': 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQPGIP1J3wxQWmwNWbm_NY7LAAIRclbWyJrb_k7XagMT-_9GolW',
        'John Krasinski': 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSfTj3qmziB5CSxjVSdmPwAUm_UDeygz696AWifnjtIoA6QPqXT',
        'Jenna Fischer': 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSvCQIusgrF1gHmtyjy7WYWnrXYQvux73ScAvD4_l-1tT1YsKZG',
        'Rainn Wilson': 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTfvukQF_wrO0XRF9YKbaTR74ItiI3ZsMlFTKnJXLYpAf8vuwd1',
        'Adam Sandler': 'https://m.media-amazon.com/images/M/MV5BMjQyNzM2MjM1Ml5BMl5BanBnXkFtZTcwMDE5NjI3Mg@@._V1_UY264_CR6,0,178,264_AL_.jpg',
        'Will Ferrell': 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQz4iEoL_gX0SopFnBEv7B05jjT9BGD7Sr-PbtL9CRMTIR2NTvj',
        'Rachel McAdams': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRLxUjyXid9N1eyE69VHd5HA-ZWturx2Pgr_aguEZlXVHLJQ8',
        'Rob McElhenney': 'https://is2-ssl.mzstatic.com/image/thumb/OQ-ulShr0s85oS6oh_78AA/492x492ve.webp',
        'Charlotte Nicdao': 'https://is3-ssl.mzstatic.com/image/thumb/v2UFbOlamYpimPtcAd1Vgw/492x492ve.webp',
        'David Hornsby': 'https://is2-ssl.mzstatic.com/image/thumb/qDtMRumc6RJX8e_gBHRmCg/492x492ve.webp',
        'Danny Pudi': 'https://is5-ssl.mzstatic.com/image/thumb/gkAuvuvLp6DJlaNKgwUdpQ/492x492ve.webp',
        'F. Murray Abraham': 'https://is4-ssl.mzstatic.com/image/thumb/gteLdf3rrRL8jHO-lpibgQ/492x492ve.webp',
        'David Attenborough': 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlNa5Q3GeI0vZM4-FOnqItgdLXbUjf35yk6gfGCV2n3EthZTvX',
        'Nathan Fielder': 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQUA8tkqkhdQDXrRJg9gtZWKRjwbGVpNaP8epvI-WHcy7JJpae7',
    },
    actorMatch: function (name) {
        let results = []
        for (const row of movies.rows) for (const movie of row.data) {
            let match = false
            if (movie.cast) for (const actor of movie.cast) if (actor.actor.toUpperCase().includes(name.toUpperCase())) match = true
            if ((match) && !results.includes(movie.id)) results.push(movie.id)
        }
        return results
    },
    castSTR: function (key) {
        const movie = movieDict[key]
        console.log(movie)

        let str = ''

        for (const item of movie.cast) {
            str = str.concat(`'${item.actor}': '',\n`)
        }

        console.log(str)
    },
    repeatedNoImg: function () {
        let all = {}
        for (const key in movieDict) if (movieDict[key].cast) for (const member of movieDict[key].cast) {
            if (!all[member.actor]) all[member.actor] = 1
            else all[member.actor]++
        }
        for (const actor in all) if (all[actor] > 1) if (!actors.data[actor]) alert(actor)
    },
}