const songs = [
  {
    id: 'RnFyf2HtbpxepAkwJKycQ',
    path: 'Aim/Cold Water Music/12 - From Here To Fame (Feat YZ).mp3'
  },
  {
    id: '-4UJadcydyItNwpHrXv7R',
    path: 'Aim/Hinterland/13 - Hinterland.mp3'
  },
  {
    id: 'Y1OXtlhAK32qrncPlv6Jk',
    path: 'Air/10 000 Hz Legend/11 - Caramel Prisoner.mp3'
  },
  {
    id: 'G-Iy7hxQhTn1IGhjCS2da',
    path: 'Air/Love 2/12 - Air - African Velvet.mp3'
  },
  {
    id: 'cfk3gjScvR3eU1LkLRtME',
    path: 'Air/Moon Safari/10 - Le Voyage de Penelope.mp3'
  },
  {
    id: '9n4tLaTZiCM9tAesSHtUO',
    path: "Air/Premiers Symptomes/7 - Alex Gopher 'Gordini Mix' (Brakes On Mix By Air).mp3"
  },
  {
    id: 's1UkM1tln3-S2kMYxys1V',
    path: 'Air/Pocket Symphony/12 - Night Sight.mp3'
  },
  {
    id: 'dlI97gQ7oRybrGIL5MzCc',
    path: 'Air/The Virgin Suicides/13 - Suicide Underground.mp3'
  },
  {
    id: 'k1mMgrdAR-eHW0AMzzF1k',
    path: 'Air/Talkie Walkie/10 - Alone In Kyoto.mp3'
  },
  {
    id: 'rhFJHp6rMegAhDE5b4PwI',
    path: 'Alan Walker/Different World/15 - Faded.mp3'
  },
  {
    id: 'ffJ-p5tR6ylbkUtVDoyml',
    path: 'Alanis Morissette/Jagged Little Pill/12 - Wake Up.mp3'
  },
  {
    id: 'J9TYj7qZc58htK22qhkzd',
    path: 'Ash/Trailer/07 -  Obscure Thing.mp3'
  },
  {
    id: '_0msVak-2G6mOcCyM63IO',
    path: 'Ash/1977/12 - Darkside Lightside.mp3'
  },
  {
    id: 'mMuBDCqSMmRy8_kgAptpN',
    path: 'Athlete/Vehicles & Animals/12 - Le Casio.mp3'
  },
  {
    id: '1690TMe2dmju0T9ROkdzn',
    path: 'Blur/The Best of Blur/18 - Music Is My Radar.mp3'
  },
  {
    id: '0He3oaqW5N7gt17oBgg0W',
    path: 'Calvin Harris/I Created Disco/14 - Electro Man.mp3'
  },
  {
    id: 'QI34CNKHvAWnsvoLtAslA',
    path: "Coldplay/Parachutes/10. Everything's Not Lost.mp3"
  },
  {
    id: 'dYurI61izgjcYUafJNgXf',
    path: 'Daft Punk/Discovery/14 - Daft Punk - Too Long.mp3'
  },
  {
    id: 'V5CX2pkg4yB_X6wUJqJCi',
    path: 'David Bowie/Hunky Dory/15.The Bewlay Brothers (2).mp3'
  },
  {
    id: 'WqjDevogDYE8-sD0B8Sf-',
    path: "Franz Ferdinand/Franz Ferdinand/11 - 40'.mp3"
  },
  {
    id: '7x11dL7a_uuw0WZ9j_0-S',
    path: 'Elastica/Elastica/16. Elastica - Vaseline.mp3'
  },
  {
    id: 'W-C5n3k8--C0PCwx3n39l',
    path: 'Frou Frou/Details/Frou Frou - 11 - The Dumbing Down Of Love.mp3'
  },
  {
    id: 'jUIxbxBgbZTvLFm-m_mWd',
    path: 'Garbage/Garbage/12 - Garbage - Milk.mp3'
  },
  {
    id: 'Vek75uSyFfUbt-Czv5Ww9',
    path: 'Idlewild/Hope Is important/Low Light.mp3'
  },
  {
    id: 'MNvq5etFfoqx7cpDpfsMv',
    path: 'Incubus/Make Yourself/13 - Incubus - Out From Under.mp3'
  },
  {
    id: '76_i4TJ5WuHkIRbEm-JVw',
    path: 'Jimi Hendrix/Experience Hendrix The Best Of Jimi Hendrix/20 - Jimi Hendrix - Star Spangled Banner.mp3'
  },
  {
    id: 'nR3wtpI192tt6wbceshRf',
    path: 'John Lennon/Imagine/10 - John Lennon a - Oh Yoko!.mp3'
  },
  {
    id: 'Uq_oyal-vupy9W8LptZwK',
    path: 'Kasabian/Kasabian (2004)/14 U Boat.mp3'
  },
  {
    id: 'ZgUstP8tBgSCW_2bjrSqt',
    path: 'Leftfield/Leftism/11 - 21st Century Poem.mp3'
  },
  {
    id: '38hHcQSpwsRVbXQ5IfGlc',
    path: 'Manic Street Preachers/Everything Must Go/12 - Manic Street Preachers - No Surface All Feeling.mp3'
  },
  {
    id: 'MuJ6wr1EZYP5obLiMp6K1',
    path: "Muse/Showbiz/12. Hate This And I'll Love You.mp3"
  },
  {
    id: 'Vv7-bXIFLxn4xztg5mV3n',
    path: 'Nirvana/Nevermind/12 - Nirvana - Something In The Way.mp3'
  },
  {
    id: 'zhJ77szq1jnD5yJPyCAUe',
    path: 'Oasis/Definitely Maybe/11. Oasis - Married with Children.mp3'
  },
  {
    id: 'koUgQicTX13Vo51Fxbxrb',
    path: 'Ocean Colour Scene/Moseley Shoals/12 - Get Away.mp3'
  },
  {
    id: 'T5aGJgbNCQRFmNXSllEGr',
    path: 'Pulp/Different Class/12. Pulp - Bar Italia.mp3'
  },
  {
    id: 'Y3Ta36yCG7S5bhs_Ejz_G',
    path: 'Queen/News Of The World/11 - My Melancholy Blues.mp3'
  },
  {
    id: 'yExX8UPv8XXxVNuBnRuhc',
    path: 'Radiohead/The Bends/12 - Radiohead - Street Spirit (Fade Out).mp3'
  },
  {
    id: 'cS4_78D3N6dgDB5Bs06DO',
    path: "Red Hot Chili Peppers/Californication/15 - Road Trippin'.mp3"
  },
  {
    id: 'aibQbCkgO_dfZTbDJtdAs',
    path: 'Rilo Kiley/Under the Blacklight/11. Give a Little Love.mp3'
  },
  {
    id: 'R6uPug6Yuff7aVMcpP0Je',
    path: "Saint Etienne/Foxbase Alpha/15-Dilworth's Theme.mp3"
  },
  {
    id: 'ZcX052oE32k4QF59OebeI',
    path: "Stereophonics/Word Gets Around/12 - Stereophonics - Billy Davey's Daughter.mp3"
  },
  {
    id: 's43LqaP1SP-0jDFh-assN',
    path: 'Supertramp/Breakfast in America/10 Child of Vision.mp3'
  },
  {
    id: 'kafWXuZZgvP48fBnhuewo',
    path: 'The Beatles/Rubber Soul/14 Run For Your Life.mp3'
  },
  {
    id: '6Fn6CqhX1lrDWSLq4Gw6i',
    path: 'The Chemical Brothers/Dig Your Own Hole/11 - Chemical Brothers - The Private Psychedelic Reel.mp3'
  },
  {
    id: 'EV7ilyOvzzDdQbrLGhHDj',
    path: 'The Cranberries/No Need To Arque/13. No Need To Argue.mp3'
  },
  {
    id: 'G0zzq8AlO96uaaWOgjD6S',
    path: 'The Prodigy/The Fat Of The Land/10 - The Prodigy - Fuel My Fire.mp3'
  },
  {
    id: 'LEy7WMhiMjeEaIRbBf6LV',
    path: 'The Strokes/Is This It/11 - Strokes - Take It Or Leave It.mp3'
  },
  {
    id: 'TLyDMMwXUFOGh7rzsNFOW',
    path: 'Stone Roses/The Stone Roses/11 - Stone Roses - I Am The Resurrection.mp3'
  },
  {
    id: 'L05lH1akkDmQxyHsdQ58-',
    path: 'The Verve/Urban Hymns/13 - The Verve - Come On.mp3'
  },
  {
    id: 'dbrolNwE8k-at9SthzZiY',
    path: 'Travis/The Man Who/10 - Travis - Slide Show.mp3'
  },
  {
    id: 'eixFA97qJg6d-V7uyvUuO',
    path: 'Zero 7/Simple Things/12 - Zero 7 - End Theme.mp3'
  }
]

export default songs