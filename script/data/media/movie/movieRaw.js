const soonMovies = [
    allMovies.boys,
    allMovies.peaky,
]

let movieRaw = [
    {
        name: 'Up next',
        data: [
            allMovies.friends,
            allMovies.ldr,
            allMovies.tintin,
            allMovies.boba,
        ],
    },
    {
        name: 'My list',
        data: [
            allMovies.atlanta,
            allMovies.attack,
            allMovies.cowboy,
            allMovies.severance,
            allMovies.earth,
            allMovies.prehistoric,
            allMovies.ozark,
            allMovies.mythic,
            allMovies.kal,
            allMovies.wecrashed,
        ],
    },
    {
        name: 'Recent',
        data: [
            allMovies.snowfall,
            allMovies.drive,
            allMovies.dontLookUp,
            allMovies.money,
            allMovies.fargo,
            allMovies.grandTour,
            allMovies.southpark,
            allMovies.archer,
            allMovies.dopesick,
            allMovies.foundation,
        ],
    },
    {
        name: 'Movies',
        data: [
            allMovies.eternals,
            allMovies.knives,
            allMovies.dune,
            allMovies.dil,
            allMovies.loAndBehold,
            allMovies.ghost,
            allMovies.john,
        ],
    },
    {
        name: 'New',
        data: [
            allMovies.killingEve,
            allMovies.clarkson,
            allMovies.joanna,
            allMovies.chernobyl,
            allMovies.sopranos,
            allMovies.fleabag,
            allMovies.spy,
            allMovies.lineofduty,
            allMovies.mindhunter,
            allMovies.vikings,
            allMovies.qanon,
            allMovies.witcher,
            allMovies.mankind,
            allMovies.dark,
            allMovies.land,
            allMovies.murdochs,
            allMovies.sixties,
            allMovies.ministry,
            allMovies.phil,
            allMovies.anna,
            allMovies.diabolical,
            allMovies.cowboy2,
            allMovies.finalSpace,
            allMovies.maid,
            allMovies.dexter,
        ],
    },
    {
        name: 'Paused',
        data: [
            allMovies.bling,
            allMovies.noMercy,
            allMovies.elite,
            allMovies.disenchant,
            allMovies.georgina,
            allMovies.ghosts,
            allMovies.arcane,
            allMovies.snowpiercer,
            allMovies.hawkeye,
            allMovies.loveIsland,
            allMovies.you,
            allMovies.solar,
            allMovies.family,
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
            allMovies.jurassic6,
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
        name: 'Classics',
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
            allMovies.phineas,
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
            allMovies.supernature,
            allMovies.eurovision,
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
