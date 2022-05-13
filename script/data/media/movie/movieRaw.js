const soonMovies = [
]

let movieRaw = [
    {
        name: 'Up next',
        data: [
            allMovies.always,
            allMovies.himyf,
            allMovies.atlanta,
            allMovies.attack,
            allMovies.severance,
        ],
    },
    {
        name: 'My list',
        data: [
            allMovies.noMercy,
            allMovies.ozark,
            allMovies.kal,
            allMovies.tintin,
            allMovies.peaky,
        ],
    },
    {
        name: 'Recent',
        data: [
            allMovies.elite,
            allMovies.snowfall,
            allMovies.wecrashed,
            allMovies.drive,
            allMovies.dontLookUp,
            allMovies.cowboy,
            allMovies.money,
            allMovies.fargo,
            allMovies.disenchant,
            allMovies.grandTour,
        ],
    },
    {
        name: 'Movies',
        data: [
            allMovies.jurassic6,
            allMovies.eternals,
            allMovies.knives,
            allMovies.dune,
            allMovies.dil,
            allMovies.loAndBehold,
            allMovies.ghost,
            allMovies.john,
            allMovies.earth,
        ],
    },
    {
        name: 'New',
        data: [
            allMovies.land,
            allMovies.murdochs,
            allMovies.sixties,
            allMovies.ministry,
            allMovies.killingEve,
            allMovies.phil,
            allMovies.anna,
            allMovies.diabolical,
            allMovies.boba,
            allMovies.clarkson,
            allMovies.cowboy2,
            allMovies.joanna,
            allMovies.chernobyl,
            allMovies.sopranos,
            allMovies.fleabag,
            allMovies.finalSpace,
            allMovies.maid,
            allMovies.spy,
            allMovies.lineofduty,
            allMovies.dexter,
            allMovies.mindhunter,
            allMovies.vikings,
            allMovies.qanon,
            allMovies.witcher,
            allMovies.mankind,
            allMovies.dark,
        ],
    },
    {
        name: 'Paused',
        data: [
            allMovies.georgina,
            allMovies.ghosts,
            allMovies.arcane,
            allMovies.snowpiercer,
            allMovies.hawkeye,
            allMovies.southpark,
            allMovies.archer,
            allMovies.loveIsland,
            allMovies.you,
            allMovies.solar,
            allMovies.dopesick,
            allMovies.family,
            allMovies.foundation,
            allMovies.family,
            allMovies.simpsons,
            allMovies.billions,
            allMovies.memories,
            allMovies.midnight,
            allMovies.whatif,
            allMovies.edu,
            allMovies.jojo,
            allMovies.dave,
            allMovies.twinpeaks,
            allMovies.legion,
            allMovies.futurama,
        ],
    },
    {
        name: 'Coming Soon',
        data: [
            allMovies.boys,
        ],
    },
    {
        name: 'Up to Date',
        data: [
            allMovies.abbott,
            allMovies.alice,
            allMovies.always,
            allMovies.curb,
            allMovies.falcon,
            allMovies.hitMonkey,
            allMovies.himyf,
            allMovies.industry,
            allMovies.insideJob,
            allMovies.invincible,
            allMovies.loki,
            allMovies.ldr,
            allMovies.mando,
            allMovies.manifest,
            allMovies.mythic,
            allMovies.narcos,
            allMovies.nine,
            allMovies.murders,
            allMovies.paradise,
            allMovies.reacher,
            allMovies.rick,
            allMovies.succession,
            allMovies.squid,
            allMovies.ted,
            allMovies.shadows,
            allMovies.yellowjackets,
        ],
    },
    {
        name: 'Finished',
        data: [
            allMovies.superstore,
            allMovies.expanse,
            allMovies.fisforfam,
            allMovies.newgirl,
            allMovies.league,
            allMovies.bojack,
            allMovies.gameofthrones,
            allMovies.office,
            allMovies['112263'],
            allMovies.bms,
            allMovies.fresh,
            allMovies.lost,
            allMovies.brooklyn,
            allMovies.silicon,
            allMovies.whiteCollar,
            allMovies.himym,
        ],
    },
    {
        name: 'Classic Movies',
        data: [
            allMovies.jurassic1,
            allMovies.indiana1,
            allMovies.walle,
            allMovies.saving,
            allMovies.backToTheFuture1,
            allMovies.starwars4,
            allMovies.interstellar,
            allMovies.avatar,
        ],
    },
    {
        name: 'Recent Movies',
        data: [
            allMovies.zohan,
            allMovies.ronnyDestroy,
            allMovies.jimmyGood,
            allMovies.virAbroad,
            allMovies.joking,
            allMovies.vir,
            allMovies.cars2,
            allMovies.cars1,
            allMovies.spiderMan3,
            allMovies.spider_1_3,
            allMovies.peaks,
            allMovies.haroldAndKumar3,
            allMovies.kingsMan,
            allMovies.spider_1_1,
            allMovies.lotr1,
            allMovies.soul,
            allMovies.haroldAndKumar,
            allMovies.scaryMovie,
            allMovies.crazyRich,
            allMovies.closer,
            allMovies.zindagi,
            allMovies.noTime,
            allMovies.free,
            allMovies.theend,
            allMovies.shang,
            allMovies.roadToPerdition,
            allMovies.goodfellas,
            allMovies.social,
        ],
    },
    {
        name: 'Archive',
        data: [
            allMovies.problem,
            allMovies.yourname,
            allMovies.fairfax,
            allMovies.myname,
            allMovies.dear,
            allMovies.fringe,
            allMovies.lastman,
        ],
    },
]


for (const movie of soonMovies.reverse()) {
    let soon = (new Date(movie.info.date) > new Date)
    if (soon) movieRaw[1].data.unshift(movie)
    else movieRaw[0].data.unshift(movie)
}
