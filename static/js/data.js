// Boss Mapping ---------------------------------------------------------------
var boss_mapping = {
    karanda: {
        color: '#943126',
        display: {
            short: 'Karanda',
            full: 'Karanda'
        },
        meta: {
            'database': '/us/npc/23060/',
            'location': '/bdo/#worldbosses/karanda',
            'guide': 'http://urzasarchives.com/bdo/guides/harpy-queen-karanda/',
        },
        image: 'karanda.png'
    },
    kzarka: {
        color: '#5B2C6F',
        display: {
            short: 'Kzarka',
            full: 'Kzarka, The Lord of Corruption'
        },
        meta: {
            'database': '/us/npc/23001/',
            'location': '/bdo/#worldbosses/kzarka',
            'guide': 'http://urzasarchives.com/bdo/guides/how-to-world-field-boss-black-desert-online/page_4/',
        },
        image: 'kzarka.png'
    },
    nouver: {
        color: '#21618C',
        display: {
            short: 'Nouver',
            full: 'Shadow of Nouver'
        },
        meta: {
            'database': '/us/npc/23054/',
            'location': '/bdo/#worldbosses/nouver',
            'guide': 'https://www.invenglobal.com/articles/736/bdo-guide-world-boss-nouver',
        },
        image: 'nouver.png'
    },
    kutum: {
        color: '#117864',
        display: {
            short: 'Kutum',
            full: 'Ancient Kutum'
        },
        meta: {
            'database': '/us/npc/23073/',
            'location': '/bdo/#worldbosses/ancient-kutum',
            'guide': 'http://urzasarchives.com/bdo/guides/ancient-kutum-bossfight-guide/',
        },
        image: 'kutum.png'
    },
    offin: {
        color: '#9A7D0A',
        display: {
            short: 'Offin',
            full: 'Watcher Offin Tett'
        },
        meta: {
            'database': '/us/npc/23754/',
            'location': '/bdo/#worldbosses/offin-tett',
            'guide': 'https://www.invenglobal.com/blackdesertonline/articles/1709/in-depth-raid-guide-for-mirumok-watcher-offin-the-awakened-ancient-weapon-in-kamasylvia',
        },
        image: 'offin.png'
    },
    quint: {
        color: '#935116',
        display: {
            short: 'Quint',
            full: 'Quint, The First Troll'
        },
        meta: {
            'database': '/us/npc/23102/',
            'location': '/bdo/#worldbosses/quint',
            'guide': 'https://www.invenglobal.com/articles/3472/guide-on-the-new-world-bosses-muraka-and-quint-things-to-get-locations-patterns-and-rewards',
        },
        image: 'quint.png'
    },
    muraka: {
        color: '#5F6A6A',
        display: {
            short: 'Muraka',
            full: 'Muraka, King of Ogres'
        },
        meta: {
            'database': '/us/npc/23097/',
            'location': '/bdo/#worldbosses/muraka',
            'guide': 'https://www.invenglobal.com/articles/3472/guide-on-the-new-world-bosses-muraka-and-quint-things-to-get-locations-patterns-and-rewards',
        },
        image: 'muraka.png'
    },
    vell: {
        color: '#1C2833',
        display: {
            short: 'Vell',
            full: 'Vell, Heart of the Ocean'
        },
        meta: {
            'database': '/us/npc/23080/',
            'location': '/bdo/#worldbosses/vell',
            'guide': 'https://www.invenglobal.com/blackdesertonline/articles/4063/a-simple-guide-on-vell-the-new-ocean-raid-boss',
        },
        image: 'vell.png'
    },
};

// Events ---------------------------------------------------------------------
var raw_events = [
    // ========== Day 0 : Sunday ==========
    // 00:00
    {
        type: 'kzarka',
        start: {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        },
    },
    // 03:00
    {
        type: 'kutum',
        start: {
            days: 0,
            hours: 3,
            minutes: 0,
            seconds: 0
        },
    },
    // 07:00
    {
        type: 'nouver',
        start: {
            days: 0,
            hours: 7,
            minutes: 0,
            seconds: 0
        },
    },
    // 10:00
    {
        type: 'kzarka',
        start: {
            days: 0,
            hours: 10,
            minutes: 0,
            seconds: 0
        },
    },
    // 14:00
    {
        type: 'vell',
        start: {
            days: 0,
            hours: 14,
            minutes: 0,
            seconds: 0
        },
    },
    // 17:00
    {
        type: 'karanda',
        start: {
            days: 0,
            hours: 17,
            minutes: 0,
            seconds: 0
        },
    },
    // 20:15
    {
        type: 'kzarka',
        start: {
            days: 0,
            hours: 20,
            minutes: 15,
            seconds: 0
        },
    },
    {
        type: 'nouver',
        start: {
            days: 0,
            hours: 20,
            minutes: 15,
            seconds: 0
        },
    },
    // 22:15
    {
        type: 'kutum',
        start: {
            days: 0,
            hours: 22,
            minutes: 15,
            seconds: 0
        },
    },
    // ========== Day 1 : Monday ==========
    // 00:00
    {
        type: 'karanda',
        start: {
            days: 1,
            hours: 0,
            minutes: 0,
            seconds: 0
        },
    },
    // 03:00
    {
        type: 'kzarka',
        start: {
            days: 1,
            hours: 3,
            minutes: 0,
            seconds: 0
        },
    },
    // 07:00
    {
        type: 'kzarka',
        start: {
            days: 1,
            hours: 7,
            minutes: 0,
            seconds: 0
        },
    },
    // 10:00
    {
        type: 'nouver',
        start: {
            days: 1,
            hours: 10,
            minutes: 0,
            seconds: 0
        },
    },
    // 14:00
    {
        type: 'kutum',
        start: {
            days: 1,
            hours: 14,
            minutes: 0,
            seconds: 0
        },
    },
    // 17:00
    {
        type: 'nouver',
        start: {
            days: 1,
            hours: 17,
            minutes: 0,
            seconds: 0
        },
    },
    // 20:15
    {
        type: 'kzarka',
        start: {
            days: 1,
            hours: 20,
            minutes: 15,
            seconds: 0
        },
    },
    // 22:15
    {
        type: 'karanda',
        start: {
            days: 1,
            hours: 22,
            minutes: 15,
            seconds: 0
        },
    },
    // ========== Day 2 : Tuesday ==========
    // 00:00
    {
        type: 'kutum',
        start: {
            days: 2,
            hours: 0,
            minutes: 0,
            seconds: 0
        },
    },
    // 03:00
    {
        type: 'kzarka',
        start: {
            days: 2,
            hours: 3,
            minutes: 0,
            seconds: 0
        },
    },
    // 07:00
    {
        type: 'kutum',
        start: {
            days: 2,
            hours: 7,
            minutes: 0,
            seconds: 0
        },
    },
    // 10:00
    {
        type: 'offin',
        start: {
            days: 2,
            hours: 10,
            minutes: 0,
            seconds: 0
        },
    },
    // 14:00
    {
        type: 'nouver',
        start: {
            days: 2,
            hours: 14,
            minutes: 0,
            seconds: 0
        },
    },
    // 17:00
    {
        type: 'karanda',
        start: {
            days: 2,
            hours: 17,
            minutes: 0,
            seconds: 0
        },
    },
    // 20:15
    {
        type: 'nouver',
        start: {
            days: 2,
            hours: 20,
            minutes: 15,
            seconds: 0
        },
    },
    {
        type: 'kzarka',
        start: {
            days: 2,
            hours: 20,
            minutes: 15,
            seconds: 0
        },
    },
    // 22:15
    {
        type: 'kutum',
        start: {
            days: 2,
            hours: 22,
            minutes: 15,
            seconds: 0
        },
    },
    // ========== Day 3 : Wednesday ==========
    // 00:00
    {
        type: 'karanda',
        start: {
            days: 3,
            hours: 0,
            minutes: 0,
            seconds: 0
        },
    },
    // 03:00
    // Maintenance
    // 07:00
    {
        type: 'karanda',
        start: {
            days: 3,
            hours: 7,
            minutes: 0,
            seconds: 0
        },
    },
    // 10:00
    {
        type: 'nouver',
        start: {
            days: 3,
            hours: 10,
            minutes: 0,
            seconds: 0
        },
    },
    // 14:00
    {
        type: 'kzarka',
        start: {
            days: 3,
            hours: 14,
            minutes: 0,
            seconds: 0
        },
    },
    // 17:00
    {
        type: 'kutum',
        start: {
            days: 3,
            hours: 17,
            minutes: 0,
            seconds: 0
        },
    },
    // 20:15
    {
        type: 'karanda',
        start: {
            days: 3,
            hours: 20,
            minutes: 15,
            seconds: 0
        },
    },
    {
        type: 'kzarka',
        start: {
            days: 3,
            hours: 20,
            minutes: 15,
            seconds: 0
        },
    },
    // 22:15
    {
        type: 'nouver',
        start: {
            days: 3,
            hours: 22,
            minutes: 15,
            seconds: 0
        },
    },
    // ========== Day 4 : Thursday ==========
    // 00:00
    {
        type: 'kutum',
        start: {
            days: 4,
            hours: 0,
            minutes: 0,
            seconds: 0
        },
    },
    // 03:00
    {
        type: 'kzarka',
        start: {
            days: 4,
            hours: 3,
            minutes: 0,
            seconds: 0
        },
    },
    // 07:00
    {
        type: 'kutum',
        start: {
            days: 4,
            hours: 7,
            minutes: 0,
            seconds: 0
        },
    },
    // 10:00
    {
        type: 'nouver',
        start: {
            days: 4,
            hours: 10,
            minutes: 0,
            seconds: 0
        },
    },
    // 14:00
    {
        type: 'kutum',
        start: {
            days: 4,
            hours: 14,
            minutes: 0,
            seconds: 0
        },
    },
    // 17:00
    {
        type: 'offin',
        start: {
            days: 4,
            hours: 17,
            minutes: 0,
            seconds: 0
        },
    },
    // 20:15
    {
        type: 'karanda',
        start: {
            days: 4,
            hours: 20,
            minutes: 15,
            seconds: 0
        },
    },
    // 22:15
    {
        type: 'kzarka',
        start: {
            days: 4,
            hours: 22,
            minutes: 15,
            seconds: 0
        },
    },
    // ========== Day 5 : Friday ==========
    // 00:00
    {
        type: 'nouver',
        start: {
            days: 5,
            hours: 0,
            minutes: 0,
            seconds: 0
        },
    },
    // 03:00
    {
        type: 'karanda',
        start: {
            days: 5,
            hours: 3,
            minutes: 0,
            seconds: 0
        },
    },
    // 07:00
    {
        type: 'kutum',
        start: {
            days: 5,
            hours: 7,
            minutes: 0,
            seconds: 0
        },
    },
    // 10:00
    {
        type: 'karanda',
        start: {
            days: 5,
            hours: 10,
            minutes: 0,
            seconds: 0
        },
    },
    // 14:00
    {
        type: 'nouver',
        start: {
            days: 5,
            hours: 14,
            minutes: 0,
            seconds: 0
        },
    },
    // 17:00
    {
        type: 'kzarka',
        start: {
            days: 5,
            hours: 17,
            minutes: 0,
            seconds: 0
        },
    },
    // 20:15
    {
        type: 'kutum',
        start: {
            days: 5,
            hours: 20,
            minutes: 15,
            seconds: 0
        },
    },
    {
        type: 'kzarka',
        start: {
            days: 5,
            hours: 20,
            minutes: 15,
            seconds: 0
        },
    },
    // 22:15
    {
        type: 'karanda',
        start: {
            days: 5,
            hours: 22,
            minutes: 15,
            seconds: 0
        },
    },
    // ========== Day 6 : Saturday ==========
    // 00:00
    {
        type: 'offin',
        start: {
            days: 6,
            hours: 0,
            minutes: 0,
            seconds: 0
        },
    },
    // 03:00
    {
        type: 'nouver',
        start: {
            days: 6,
            hours: 3,
            minutes: 0,
            seconds: 0
        },
    },
    // 07:00
    {
        type: 'kutum',
        start: {
            days: 6,
            hours: 7,
            minutes: 0,
            seconds: 0
        },
    },
    // 10:00
    {
        type: 'nouver',
        start: {
            days: 6,
            hours: 10,
            minutes: 0,
            seconds: 0
        },
    },
    // 14:00
    {
        type: 'quint',
        start: {
            days: 6,
            hours: 14,
            minutes: 0,
            seconds: 0
        },
    },
    {
        type: 'muraka',
        start: {
            days: 6,
            hours: 14,
            minutes: 0,
            seconds: 0
        },
    },
    // 17:00
    {
        type: 'kzarka',
        start: {
            days: 6,
            hours: 17,
            minutes: 0,
            seconds: 0
        },
    },
    {
        type: 'karanda',
        start: {
            days: 6,
            hours: 17,
            minutes: 0,
            seconds: 0
        },
    },
    // 20:15
    // Conquest War
    // 22:15
    {
        type: 'nouver',
        start: {
            days: 6,
            hours: 22,
            minutes: 15,
            seconds: 0
        },
    },
    {
        type: 'kutum',
        start: {
            days: 6,
            hours: 22,
            minutes: 15,
            seconds: 0
        },
    },
];