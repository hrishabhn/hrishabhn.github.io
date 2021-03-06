const soonMovies = [
    movieDict.dragon,
    movieDict.rehearse,
]

let movieRaw = [
    {
        name: 'Up next',
        data: [
            movieDict.money,
            movieDict.lost,
            movieDict.newgirl,
            // 'primevideo://detail?gti=amzn1.dv.gti.b346f853-671f-431f-82db-4cda8a03fe1f'
            // https://www.primevideo.com/gp/video/detail/B09WV8HF7Q
        ],
    },
    {
        name: 'My list',
        data: [
            movieDict.nathan,
            movieDict.cowboy,
            movieDict.lineofduty,
            movieDict.fargo,
            movieDict.fleabag,
            movieDict.wecrashed,
            movieDict.prehistoric,
            movieDict.clarkson,
            movieDict.attack,
            movieDict.atlanta,
            movieDict.severance,
            movieDict.peaky,
            movieDict.friends,
            movieDict.tintin,
            movieDict.earth,
            movieDict.ozark,
        ],
    },
    {
        name: 'Recent',
        data: [
            movieDict.snowfall,
            movieDict.drive,
            movieDict.dontLookUp,
            movieDict.grandTour,
            movieDict.southpark,
            movieDict.archer,
            movieDict.dopesick,
            movieDict.foundation,
        ],
    },
    {
        name: 'Movies',
        data: [
            movieDict.jurassic6,
            movieDict.kal,
            movieDict.eternals,
            movieDict.knives,
            movieDict.dune,
            movieDict.dil,
            movieDict.loAndBehold,
            movieDict.ghost,
            movieDict.john,
        ],
    },
    {
        name: 'New',
        data: [
            movieDict.yellowstone,
            movieDict.saul,
            movieDict.boba,
            movieDict.killingEve,
            movieDict.joanna,
            movieDict.chernobyl,
            movieDict.sopranos,
            movieDict.spy,
            movieDict.mindhunter,
            movieDict.vikings,
            movieDict.qanon,
            movieDict.witcher,
            movieDict.mankind,
            movieDict.dark,
            movieDict.land,
            movieDict.murdochs,
            movieDict.sixties,
            movieDict.ministry,
            movieDict.phil,
            movieDict.anna,
            movieDict.cowboy2,
            movieDict.finalSpace,
            movieDict.maid,
            movieDict.dexter,
        ],
    },
    {
        name: 'Paused',
        data: [
            movieDict.bling,
            movieDict.noMercy,
            movieDict.elite,
            movieDict.disenchant,
            movieDict.georgina,
            movieDict.ghosts,
            movieDict.arcane,
            movieDict.snowpiercer,
            movieDict.hawkeye,
            movieDict.loveIsland,
            movieDict.you,
            movieDict.solar,
            movieDict.family,
            movieDict.family,
            movieDict.simpsons,
            movieDict.billions,
            movieDict.memories,
            movieDict.midnight,
            movieDict.whatif,
            movieDict.edu,
            movieDict.jojo,
            movieDict.dave,
            movieDict.twinpeaks,
            movieDict.legion,
            movieDict.futurama,
        ],
    },
    {
        name: 'Coming Soon',
        data: [
            movieDict.murders,
            movieDict.shadows,
            movieDict.industry,
            movieDict.abbott,
        ],
    },
    {
        name: 'Up to Date',
        data: [
            movieDict.alice,
            movieDict.always,
            movieDict.boys,
            movieDict.curb,
            movieDict.diabolical,
            movieDict.falcon,
            movieDict.hitMonkey,
            movieDict.himyf,
            movieDict.insideJob,
            movieDict.invincible,
            movieDict.loki,
            movieDict.ldr,
            movieDict.mando,
            movieDict.manifest,
            movieDict.mythic,
            movieDict.narcos,
            movieDict.nine,
            movieDict.kenobi,
            movieDict.paradise,
            movieDict.reacher,
            movieDict.rick,
            movieDict.slow,
            movieDict.succession,
            movieDict.squid,
            movieDict.ted,
            movieDict.yellowjackets,
        ],
    },
    {
        name: 'Classics & Finished',
        data: [
            movieDict.superstore,
            movieDict.expanse,
            movieDict.fisforfam,
            movieDict.newgirl,
            movieDict.league,
            movieDict.bojack,
            movieDict.gameofthrones,
            movieDict.office,
            movieDict['112263'],
            movieDict.bms,
            movieDict.fresh,
            movieDict.lost,
            movieDict.brooklyn,
            movieDict.silicon,
            movieDict.whiteCollar,
            movieDict.himym,
            movieDict.phineas,
        ],
    },
    {
        name: 'Classic Movies',
        data: [
            movieDict.jurassic1,
            movieDict.indiana1,
            movieDict.walle,
            movieDict.saving,
            movieDict.backToTheFuture1,
            movieDict.starwars4,
            movieDict.interstellar,
            movieDict.avatar,
        ],
    },
    {
        name: 'Recent Movies',
        data: [
            //@ dominion
            //@ luca movie
            movieDict.maverick,
            movieDict.supernature,
            movieDict.eurovision,
            movieDict.zohan,
            movieDict.ronnyDestroy,
            movieDict.jimmyGood,
            movieDict.virAbroad,
            movieDict.joking,
            movieDict.vir,
            movieDict.cars2,
            movieDict.cars1,
            movieDict.spiderMan3,
            movieDict.spider_1_3,
            movieDict.peaks,
            movieDict.haroldAndKumar3,
            movieDict.kingsMan,
            movieDict.spider_1_1,
            movieDict.lotr1,
            movieDict.soul,
            movieDict.haroldAndKumar,
            movieDict.scaryMovie,
            movieDict.crazyRich,
            movieDict.closer,
            movieDict.zindagi,
            movieDict.noTime,
            movieDict.free,
            movieDict.theend,
            movieDict.shang,
            movieDict.roadToPerdition,
            movieDict.goodfellas,
            movieDict.social,
        ],
    },
    // {
    //     name: 'Archive',
    //     data: [
    //         movieDict.problem,
    //         movieDict.yourname,
    //         movieDict.fairfax,
    //         movieDict.myname,
    //         movieDict.dear,
    //         movieDict.fringe,
    //         movieDict.lastman,
    //     ],
    // },
]


for (const movie of soonMovies.reverse()) {
    let soon = (new Date(movie.info.date) > new Date)
    if (soon) movieRaw[1].data.unshift(movie)
    else movieRaw[0].data.unshift(movie)
}
