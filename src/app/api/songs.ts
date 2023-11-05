const songs = [
  {
    id: '22cah0YgOjHq0c5CAsEDc',
    path: 'Aim/Cold Water Music/04 - Sail (Feat Kate Rogers).mp3'
  },
  {
    id: 'lxaYGyk5itejcqAG4fwVn',
    path: 'Aim/Cold Water Music/08 - True To Hip Hop (Feat AG).mp3'
  },
  {
    id: 'PK8729khHqFyjrs3eY9nd',
    path: "Aim/Cold Water Music/06 - Ain't Got Time To Waste (Feat YZ).mp3"
  },
  {
    id: 'TnVbR60aucwiVoXxlKGxj',
    path: 'Aim/Cold Water Music/09 - Demonique.mp3'
  },
  {
    id: 'xLCW68dacO8WR9dAkzZyK',
    path: 'Aim/Cold Water Music/05 - Downstate.mp3'
  },
  {
    id: 'UzsAqDbeqHVfrNtwJWmmj',
    path: 'Aim/Cold Water Music/10 - A Tree, A Rock And A Cloud.mp3'
  },
  {
    id: 'g6ttq0zIuwL4rx8VeeqkX',
    path: "Aim/Cold Water Music/03 - The Force (Feat Q 'n' C).mp3"
  },
  {
    id: '9TBxTCkcckIS7abvOsBqS',
    path: 'Aim/Cold Water Music/12 - From Here To Fame (Feat YZ).mp3'
  },
  {
    id: 'dSpfUCIP8CkgPzFpOUiOU',
    path: 'Aim/Cold Water Music/01 - Intro.mp3'
  },
  {
    id: 'rufRVxpQB6BuTd2ZZmva3',
    path: 'Aim/Cold Water Music/02 - Cold Water Music.mp3'
  },
  {
    id: 's2BELebXvqgBy7aq10T6f',
    path: 'Aim/Cold Water Music/11 - Journey To The End Of The Night.mp3'
  },
  {
    id: '3Skn2BoIMw41rifmsYsqc',
    path: 'Aim/Cold Water Music/07 - Fat City (Interlude).mp3'
  },
  {
    id: '6J3ATznfzc7tzGHKc5QB2',
    path: 'Aim/Hinterland/05 - Fall Break.mp3'
  },
  {
    id: '7RVe7bfTyjuyey8nrtrGE',
    path: 'Aim/Hinterland/02 - The Girl Who Fell Through The Ice (Feat Kate Rogers).mp3'
  },
  {
    id: 'kiuJwdfkUx6vPE3m14zB5',
    path: 'Aim/Hinterland/03 - What Do People Do All Day.mp3'
  },
  {
    id: 'n8nFz2zQwVlb1YIGJ6sc7',
    path: 'Aim/Hinterland/08 - The Omen (Feat Diamond D).mp3'
  },
  {
    id: 'wBGdVDk6uW4IKmBla1vtw',
    path: 'Aim/Hinterland/06 - Guimar.mp3'
  },
  {
    id: 'hgnXr646lhcEPXoI5ZfHK',
    path: 'Aim/Hinterland/11 - A Twilight Zone.mp3'
  },
  {
    id: 'zdo2zk8nu9HWU7yOoCjvI',
    path: 'Aim/Hinterland/01 - Intro.mp3'
  },
  {
    id: 'z6GPPacfekd7VPkDYahln',
    path: 'Aim/Hinterland/09 - Linctus.mp3'
  },
  {
    id: 'gAmNZuCG3ornHptFPac66',
    path: 'Aim/Hinterland/12 - From A Seaside Town.mp3'
  },
  {
    id: '3jhCOCrsxVP3R3ZvoqziF',
    path: 'Aim/Hinterland/10 - Vipco.mp3'
  },
  {
    id: 'TQtI6qu3YVQRQ2AM03Sxj',
    path: 'Aim/Hinterland/07 - Good Disease (Feat Stephen Jones).mp3'
  },
  {
    id: 'ZvnJIFRiqonPrTnnjdy0b',
    path: 'Aim/Hinterland/13 - Hinterland.mp3'
  },
  {
    id: 'XlYI9x9aRiYUnToIXwtaS',
    path: 'Aim/Hinterland/04 - No Restriction (Feat Souls Of Mischief).mp3'
  },
  {
    id: '70opJh1epcjwxYgw07tes',
    path: 'Air/10 000 Hz Legend/09 - Wonder Milky Bitch.mp3'
  },
  {
    id: 'f9PvaJiLCyOfHSr1OlmQE',
    path: "Air/10 000 Hz Legend/10 - Don't Be Light.mp3"
  },
  {
    id: '0mA9xebzJglh2jbUtjTzg',
    path: 'Air/10 000 Hz Legend/04 - The Vagabond (feat. Beck).mp3'
  },
  {
    id: 'B5xepFKGaiJbjiT0TaYrt',
    path: 'Air/10 000 Hz Legend/07 - Sex Born Poison (feat. Buffalo Daughter).mp3'
  },
  {
    id: 'rBgCmzkq8cPjvZwMypP9S',
    path: 'Air/10 000 Hz Legend/01 - Electronic Performers.mp3'
  },
  {
    id: 'BXg1vmtGBsnRqz0Z1QYux',
    path: 'Air/10 000 Hz Legend/06 - Lucky and Unhappy.mp3'
  },
  {
    id: 'rm5Sq2Aj1iIJnhmmYvPHg',
    path: 'Air/10 000 Hz Legend/11 - Caramel Prisoner.mp3'
  },
  {
    id: '3HSQyphXHAeK0EWU1nV0D',
    path: 'Air/10 000 Hz Legend/02 - How Does It Make You Feel_.mp3'
  },
  {
    id: 'DZvnfpY579rzM4dWo5V2J',
    path: 'Air/10 000 Hz Legend/05 - Radian.mp3'
  },
  {
    id: 'ZTZHYrPIizxxdORvXCbPu',
    path: 'Air/10 000 Hz Legend/08 - People in the City.mp3'
  },
  {
    id: '3YPAEHPWsTjj5DbXKofv0',
    path: 'Air/10 000 Hz Legend/03 - Radio #1.mp3'
  },
  {
    id: 'dFklttibjx9dxduZpEk0R',
    path: 'Air/Love 2/12 - Air - African Velvet.mp3'
  },
  {
    id: '3IeSkUrZlieVjWjFCv4ae',
    path: 'Air/Love 2/09 - Air - Sing Sang Sung.mp3'
  },
  {
    id: 'HT9oaLjvZSrJJwMw9iqY4',
    path: 'Air/Love 2/03 - Air - So Light Is Her Footfall.mp3'
  },
  {
    id: 'ZDUXIy7WhchdXgBi6Fo2c',
    path: 'Air/Love 2/01 - Air - Do The Joy.mp3'
  },
  {
    id: 'TKXWOA7ImLBMQsvJFNUuW',
    path: 'Air/Love 2/08 - Air - Night Hunter.mp3'
  },
  {
    id: 'vRNznOqNgyXEgcrE19aMx',
    path: 'Air/Love 2/02 - Air - Love.mp3'
  },
  {
    id: 'nBQUgrik9BoTouPBJoFF7',
    path: 'Air/Love 2/10 - Air - Eat My Beat.mp3'
  },
  {
    id: '2f3YNKP87CVRqAIAkURIV',
    path: 'Air/Love 2/05 - Air - Missing The Light Of The Day.mp3'
  },
  {
    id: 'yooGRNaeCCxwoG9N8VsGo',
    path: "Air/Love 2/07 - Air - Heaven's Light.mp3"
  },
  {
    id: 'DdHABB7PE2aGia48fcObh',
    path: 'Air/Love 2/04 - Air - Be A Bee.mp3'
  },
  {
    id: 'LfXFUKai424FINWjSror1',
    path: 'Air/Love 2/11 - Air - You Can Tell.mp3'
  },
  {
    id: 'Stt01p8Bh3jHNWW1HsoYy',
    path: 'Air/Love 2/06 - Air - Tropical Disease.mp3'
  },
  {
    id: 'aYtMp3VZP8SkKzdahQQtU',
    path: 'Air/Moon Safari/04 - Kelly Watch The Stars.mp3'
  },
  {
    id: 'Ehm9WFRrdn805s77vyP9f',
    path: "Air/Moon Safari/01 - La Femme d'Argent.mp3"
  },
  {
    id: 'Yvv8k94ADpp07NXFhSe6D',
    path: 'Air/Moon Safari/08 - Ce Matin La.mp3'
  },
  {
    id: 'EI9Z3USQEmMzKGZ5vbFBE',
    path: 'Air/Moon Safari/02 - Sexy Boy.mp3'
  },
  {
    id: 'VayzU5GMH6Almi9yYtO2q',
    path: 'Air/Moon Safari/10 - Le Voyage de Penelope.mp3'
  },
  {
    id: 'QVpiI9phf7JIflY1xBAEZ',
    path: 'Air/Moon Safari/05 - Talisman.mp3'
  },
  {
    id: 'SfG3o8rkDKo83Osx7zzOY',
    path: 'Air/Moon Safari/07 - You Make It Easy.mp3'
  },
  {
    id: 'v80zkKSCyOqWVpcMwsjZx',
    path: 'Air/Moon Safari/09 - New Star In The Sky.mp3'
  },
  {
    id: 'zk09sx6zueApZTo1SsyKr',
    path: 'Air/Moon Safari/06 - Remember.mp3'
  },
  {
    id: 'q8cn1Bh9nj1mBOZ4Fil7s',
    path: 'Air/Moon Safari/03 - All I Need.mp3'
  },
  {
    id: 'EWSOud9okG3nsHIimH3iY',
    path: "Air/Premiers Symptomes/7 - Alex Gopher 'Gordini Mix' (Brakes On Mix By Air).mp3"
  },
  {
    id: 'nVTiT9DnVonci9rHv8CJH',
    path: "Air/Premiers Symptomes/4 - J'ai Dormi Sous L'eau.mp3"
  },
  {
    id: 'haiThgG4xdYBia08IhfMu',
    path: 'Air/Premiers Symptomes/3 - Les Professionnels.mp3'
  },
  {
    id: 'MiDyipd9pZO2762GUuvPS',
    path: 'Air/Premiers Symptomes/5 - Le Soleil Est Pres De Moi.mp3'
  },
  {
    id: 'YHyQ4Xyaquzl7BnPegfh5',
    path: 'Air/Premiers Symptomes/6 - Californie.mp3'
  },
  {
    id: 'kNvNEClyRUcjM8wTB4VEq',
    path: 'Air/Premiers Symptomes/1 - Modular Mix.mp3'
  },
  {
    id: 'Gd59LDQ4DG4Ju4rALdBDM',
    path: 'Air/Premiers Symptomes/2 - Casanova 70.mp3'
  },
  {
    id: 'z3CDKcLxniBfa6eanpQNG',
    path: 'Air/Pocket Symphony/10 - Somewhere Between Waking And Sleeping.mp3'
  },
  {
    id: 'MoEqNtO4864ASrEEuV6N7',
    path: 'Air/Pocket Symphony/05 - Mayfair Song.mp3'
  },
  {
    id: 'JOz3qRa9agXH7JgTUusoO',
    path: 'Air/Pocket Symphony/04 - Napalm Love.mp3'
  },
  {
    id: 'OvVfzb041uAN6n3fo6xQA',
    path: 'Air/Pocket Symphony/12 - Night Sight.mp3'
  },
  {
    id: 'HO83BmxZ1RvqTlWwjx6VD',
    path: 'Air/Pocket Symphony/06 - Left Bank.mp3'
  },
  {
    id: 'LqyOETilDYSsroUv44TuL',
    path: 'Air/Pocket Symphony/02 - Once Upon A Time.mp3'
  },
  {
    id: 'xKZ0ZstpdG4QpF9vbJYRK',
    path: 'Air/Pocket Symphony/03 - One Hell Of A Party.mp3'
  },
  {
    id: 'FEfEBcoiO8i5fgVO0juZo',
    path: 'Air/Pocket Symphony/11 - Redhead Girl.mp3'
  },
  {
    id: 'bRJFdIWEPiMPBsVrcDxBv',
    path: 'Air/Pocket Symphony/09 - Lost Message.mp3'
  },
  {
    id: '8uVB1spP1TUgYGFRlNYHa',
    path: 'Air/Pocket Symphony/07 - Photograph.mp3'
  },
  {
    id: '5t1nO9qPteF0JeSTJQfIF',
    path: 'Air/Pocket Symphony/08 - Mer Du Japon.mp3'
  },
  {
    id: '58q97YQBfalVZQNssRdmA',
    path: 'Air/Pocket Symphony/01 - Space Maker.mp3'
  },
  {
    id: 'MEmcxsNRWh9q9rdCRInJ5',
    path: 'Air/The Virgin Suicides/12 - Dead Bodies.mp3'
  },
  {
    id: 'UsvZ3GXsylP3Z0N9DTofa',
    path: 'Air/The Virgin Suicides/02 - Clouds Up.mp3'
  },
  {
    id: 'Kk3vTsRnlA8sSlrVvG3y7',
    path: 'Air/The Virgin Suicides/03 - Bathroom Girl.mp3'
  },
  {
    id: 'Gjds0RvkSMLnzjFVNUJC8',
    path: 'Air/The Virgin Suicides/08 - Highschool Lover.mp3'
  },
  {
    id: 'UN7ovS3rfZ9OjDNQ6Vozl',
    path: 'Air/The Virgin Suicides/04 - Cemetary Party.mp3'
  },
  {
    id: 'uoKn48JbtV0kWiXq91vyv',
    path: 'Air/The Virgin Suicides/09 - Afternoon Sister.mp3'
  },
  {
    id: 'nTiH0cLrqZBEOHm2fkq43',
    path: 'Air/The Virgin Suicides/11 - Empty House.mp3'
  },
  {
    id: 'PQlpPB7X1dcxwkWeScCbq',
    path: 'Air/The Virgin Suicides/10 - Ghost Song.mp3'
  },
  {
    id: 'oTKGJAuJX0T7xBHfshi3c',
    path: 'Air/The Virgin Suicides/07 - Dirty Trip.mp3'
  },
  {
    id: 'dasncCh3imCiR38JE66Q8',
    path: "Air/The Virgin Suicides/06 - The Word 'Hurricane'.mp3"
  },
  {
    id: 'WBWCmJ9UJS1vP75sOcbLy',
    path: 'Air/The Virgin Suicides/05 - Dark Messages.mp3'
  },
  {
    id: '4Nl7SUNbUbFprAucMzlyv',
    path: 'Air/The Virgin Suicides/13 - Suicide Underground.mp3'
  },
  {
    id: '1OinUlFMcsRCuoXnezgdm',
    path: 'Air/The Virgin Suicides/01 - Playground Love.mp3'
  },
  {
    id: 'Ej4u6RTLelxaQYbaIew0O',
    path: 'Air/Talkie Walkie/09 - Biological.mp3'
  },
  {
    id: 'qeCMaNHj2Ty08r2x9Hxbb',
    path: 'Air/Talkie Walkie/01 - Venus.mp3'
  },
  {
    id: 'NUxLQQszCW4Ly7IFyqkRp',
    path: 'Air/Talkie Walkie/08 - Alpha Beta Gaga.mp3'
  },
  {
    id: 'XRyRw0WthKfGuebUKfd5Q',
    path: 'Air/Talkie Walkie/04 - Universal Traveler.mp3'
  },
  {
    id: 'aP3T1a5aPZUxM7zAJCoqy',
    path: 'Air/Talkie Walkie/05 - Mike Mills.mp3'
  },
  {
    id: 'wzKvE47od157kZFKCvJuL',
    path: 'Air/Talkie Walkie/02 - Cherry Blossom Girl.mp3'
  },
  {
    id: 'eB7N8z8aQWEB7DIHhZi2u',
    path: 'Air/Talkie Walkie/10 - Alone In Kyoto.mp3'
  },
  {
    id: 'd6MCVHdnk68wkTf23k5VV',
    path: 'Air/Talkie Walkie/07 - Another Day.mp3'
  },
  {
    id: '0JyXRhrjp11LNC8hnkGNj',
    path: 'Air/Talkie Walkie/03 - Run.mp3'
  },
  {
    id: 'hcZviCO9mk1hW3eZpeVrA',
    path: 'Air/Talkie Walkie/06 - Surfing On A Rocket.mp3'
  },
  {
    id: 'WoMo0B6mQFSJjIHF9ggDB',
    path: 'Alanis Morissette/Jagged Little Pill/08 - Head Over Feet.mp3'
  },
  {
    id: 'Zkdf9HNa3LprJwsEHVYhJ',
    path: 'Alanis Morissette/Jagged Little Pill/03 - Perfect.mp3'
  },
  {
    id: 'ZaDwNJEPSWsplNysFUrWz',
    path: 'Alanis Morissette/Jagged Little Pill/04 - Hand in My Pocket.mp3'
  },
  {
    id: 'bM7rWLl2O3syATs9CdtEo',
    path: 'Alanis Morissette/Jagged Little Pill/11 - Not the Doctor.mp3'
  },
  {
    id: '7wt19gGexcuHuHYUlPBA0',
    path: 'Alanis Morissette/Jagged Little Pill/06 - Forgiven.mp3'
  },
  {
    id: 'pAkP73jhukWvwCR0dfX4C',
    path: 'Alanis Morissette/Jagged Little Pill/10 - Ironic.mp3'
  },
  {
    id: 'vUa3FiZXbbHxWWoM0dDj5',
    path: 'Alanis Morissette/Jagged Little Pill/02 - You Oughta Know.mp3'
  },
  {
    id: 'qSWKaJaZ7SPxRPXdqs2rv',
    path: 'Alanis Morissette/Jagged Little Pill/09 - Mary Jane.mp3'
  },
  {
    id: 'beCnrAeAYEhJFOGI4pJW5',
    path: 'Alanis Morissette/Jagged Little Pill/07 - You Learn.mp3'
  },
  {
    id: 'wEZAN3Rq7Psrl932DxYXR',
    path: 'Alanis Morissette/Jagged Little Pill/05 - Right Through You.mp3'
  },
  {
    id: 'dfKNVN6goGKlKhcf0Atww',
    path: 'Alanis Morissette/Jagged Little Pill/01 - All I Really Want.mp3'
  },
  {
    id: 'zSdzPT2xpsA7Ce2ayMP9h',
    path: 'Alanis Morissette/Jagged Little Pill/12 - Wake Up.mp3'
  },
  {
    id: 'BAc3grSeOPHm57BeZIhlv',
    path: 'Ash/Trailer/07 -  Obscure Thing.mp3'
  },
  {
    id: '5t5nM65VV2uNLKekEvcUz',
    path: 'Ash/Trailer/02 - (Message From Oscar Wilde And Patrick The Brewer) Jack Names The Planets.mp3'
  },
  {
    id: 'S4UOIPn8nMfZV3WL2qodZ',
    path: 'Ash/Trailer/04 -  Uncle Pat.mp3'
  },
  {
    id: 'vNjB99ssZDVu8rZz7Sm04',
    path: 'Ash/Trailer/03 -  Intense Thing.mp3'
  },
  { id: 'cMnu6pH485Tx07Rkm7OTa', path: 'Ash/Trailer/01 - Season.mp3' },
  { id: '7DLqOHf90l5uoMszotuiC', path: 'Ash/Trailer/06 - Petrol.mp3' },
  {
    id: 'oMakT14CbMHQvjczF1Gzg',
    path: 'Ash/Trailer/05 -  (Message From Mr Water Man) Get Out.mp3'
  },
  {
    id: 'DQ5SKHSQJ0kMq3d3IWHjs',
    path: 'Alan Walker/Different World/06 - Do It All for You.mp3'
  },
  {
    id: 'SbAE6Fiz3tiRveXBfmbIu',
    path: 'Alan Walker/Different World/04 - Lily.mp3'
  },
  {
    id: 'hRBqMVXYUKI2IzcNp8g8Q',
    path: 'Alan Walker/Different World/13 - Diamond Heart.mp3'
  },
  {
    id: 'FDmvmYTW8pQEhK8taVv7a',
    path: 'Alan Walker/Different World/07 - Different World.mp3'
  },
  {
    id: 'KZwyB3wJxJ89rZK1824rt',
    path: "Alan Walker/Different World/03 - I Don't Wanna Go.mp3"
  },
  {
    id: 'dllzbCHt3ekzk9NuMpsr1',
    path: 'Alan Walker/Different World/12 - Alone.mp3'
  },
  {
    id: 'R3TZOcfjeb9dmzxvmjOAF',
    path: 'Alan Walker/Different World/10 - All Falls Down.mp3'
  },
  {
    id: 'CuZ5gXTUEdRC8JgQEu5Yr',
    path: 'Alan Walker/Different World/08 - Interlude.mp3'
  },
  {
    id: 'gka6DSCoodRF3LruvVMWK',
    path: 'Alan Walker/Different World/09 - Sing Me to Sleep.mp3'
  },
  {
    id: 'r1fbtXBeekMJCwCONsbvp',
    path: 'Alan Walker/Different World/01 - Intro.mp3'
  },
  {
    id: 'stMKd6gMzfzx03kPqMAkG',
    path: 'Alan Walker/Different World/05 - Lonely.mp3'
  },
  {
    id: 'WU1Q6YzKbjQsaTmriNEQL',
    path: 'Alan Walker/Different World/11 - Darkside.mp3'
  },
  {
    id: '5Ah4G95hVSX7GGZYbGbGo',
    path: 'Alan Walker/Different World/14 - Faded (Interlude).mp3'
  },
  {
    id: 'QPTGE5x1tJQWEbex2t4tJ',
    path: 'Alan Walker/Different World/02 - Lost Control.mp3'
  },
  {
    id: '2Z7xMHPU8vFd85sybNLtT',
    path: 'Alan Walker/Different World/15 - Faded.mp3'
  },
  {
    id: 'we8yCaMb78KRRBQrJlwPD',
    path: 'Athlete/Vehicles & Animals/11 - You Know.mp3'
  },
  {
    id: 'rsE4eAMhJl20lvPm6gZjD',
    path: 'Athlete/Vehicles & Animals/07 - You Got The Style.mp3'
  },
  {
    id: 'CGcd93EZLe9hcxPfJk1yC',
    path: 'Athlete/Vehicles & Animals/01 -  El Salvador.mp3'
  },
  {
    id: 'cO0D0oM3B3MKue0WFhtGK',
    path: 'Athlete/Vehicles & Animals/12 - Le Casio.mp3'
  },
  {
    id: 't5j9X3eNyL59AbpKTC5ae',
    path: 'Athlete/Vehicles & Animals/04 - Shake Those Windows.mp3'
  },
  {
    id: '3r8hrGLI3oGrtXK5E1snm',
    path: 'Athlete/Vehicles & Animals/02 -  Westside.mp3'
  },
  {
    id: 'EE9OHY1Ni9trIZDNRDkfq',
    path: 'Athlete/Vehicles & Animals/08 - Vehicles & Animals.mp3'
  },
  {
    id: 'ljyviQhswrEZdxrVg6D0D',
    path: 'Athlete/Vehicles & Animals/05 - Beautiful.mp3'
  },
  {
    id: 'XvKx7tPy8bnnvEdN4as3Q',
    path: 'Athlete/Vehicles & Animals/10 - Dungeness.mp3'
  },
  {
    id: '9EbTaCeBcAwla6FBbeayW',
    path: 'Athlete/Vehicles & Animals/03 - One Million.mp3'
  },
  {
    id: 'NjMuV8S4kBF5xAZJTM0lL',
    path: 'Athlete/Vehicles & Animals/09 - Out Of Nowhere.mp3'
  },
  {
    id: 'kNelUqG2LQh7YRXil5mS8',
    path: 'Athlete/Vehicles & Animals/06 - New Project.mp3'
  },
  { id: 'AaxM5dqkiPLdFM72Mnq3S', path: 'Ash/1977/06 - Kung Fu.mp3' },
  {
    id: 'eN910Hq9lgZwRxpeTuK5A',
    path: 'Ash/1977/10 - Angel Interceptor.mp3'
  },
  {
    id: 'ODdGp0Odqsgg7LBslhVb8',
    path: 'Ash/1977/11 - Lost In You.mp3'
  },
  {
    id: 'HQDz5DThnLupr38amDpX7',
    path: 'Ash/1977/09 - Innocent Smile.mp3'
  },
  {
    id: 'gzy7lghbKTJmyjzabIlWR',
    path: 'Ash/1977/01 - Lose Control.mp3'
  },
  {
    id: 'r8i73xOQxDbWDqKedZdb3',
    path: 'Ash/1977/05 - Gone The Dream.mp3'
  },
  {
    id: 'YIRBP51diHLwA1zAGy7fa',
    path: 'Ash/1977/12 - Darkside Lightside.mp3'
  },
  { id: '90U5tHKYGGw1HaGqkxarL', path: 'Ash/1977/02 - Goldfinger.mp3' },
  {
    id: 'V7aPdZGZtyZ0dfb4Klmql',
    path: 'Ash/1977/03 - Girl From Mars.mp3'
  },
  {
    id: 'EbTd3JwcZoeyVpKOYgSNO',
    path: 'Ash/1977/08 - Let It Flow.mp3'
  },
  { id: 'Ga9G1paqtcgNYpz2CZYpk', path: 'Ash/1977/07 - Oh Yeah.mp3' },
  {
    id: 'Oq2VHr8ZurZB3m5MYhTNM',
    path: "Ash/1977/04 - I'd Give You Anything.mp3"
  },
  {
    id: 'jCe3rGtKDB3gyubtp2O2m',
    path: 'Calvin Harris/I Created Disco/11 - Vault Character.mp3'
  },
  {
    id: '39LVODw6Ok2QDTDMKAmjW',
    path: 'Calvin Harris/I Created Disco/02 - Colours.mp3'
  },
  {
    id: 'i7sfRDj9Y4GiorVWiS3dl',
    path: 'Calvin Harris/I Created Disco/03 - This Is The Industry.mp3'
  },
  {
    id: 'nEypxqJPxZOUBeDuqhJ8j',
    path: 'Calvin Harris/I Created Disco/09 - I Created Disco.mp3'
  },
  {
    id: 'T3L0K2jA9xsBDCmvLvxA6',
    path: 'Calvin Harris/I Created Disco/04 - The Girls.mp3'
  },
  {
    id: '4gQkrioRmgidm0wcIjRR2',
    path: 'Calvin Harris/I Created Disco/13 - Love Souvenir.mp3'
  },
  {
    id: '5PNrPLRqcS1nf3Sw6PcB0',
    path: 'Calvin Harris/I Created Disco/14 - Electro Man.mp3'
  },
  {
    id: 'fBW0tsupVGWtveJcCIGIk',
    path: "Calvin Harris/I Created Disco/05 - Acceptable In The 80's.mp3"
  },
  {
    id: 'zEJob2ZztZMdfs2xTAicJ',
    path: 'Calvin Harris/I Created Disco/01 - Merrymaking At My Place.mp3'
  },
  {
    id: 'GJwPcAFf3vW2WwARXcFHk',
    path: 'Calvin Harris/I Created Disco/08 - Vegas.mp3'
  },
  {
    id: 'X1q0gAQZhd3YCufpYQJzz',
    path: 'Calvin Harris/I Created Disco/12 - Certified.mp3'
  },
  {
    id: 'rlmZH845WvS1hHwR48vfN',
    path: 'Calvin Harris/I Created Disco/07 - Traffic Cops.mp3'
  },
  {
    id: 'bmGkG3FpXQd6BO3oUBsLJ',
    path: 'Calvin Harris/I Created Disco/06 - Neon Rocks.mp3'
  },
  {
    id: 'DSGOsOhTuwIu6PfPgtcyF',
    path: 'Calvin Harris/I Created Disco/10 - Disco Heat.mp3'
  },
  {
    id: 'uijRoBiv4WkLSBWNGrhn6',
    path: 'Calvin Harris/Motion/03 - Blame (feat. John Newman).mp3'
  },
  {
    id: 'hkMxgvz4blurLFXoCdQse',
    path: 'Calvin Harris/Motion/15 - Dollar Signs (feat. Tinashe).mp3'
  },
  {
    id: 'GUhNBJkooKVgRMUeUs7px',
    path: 'Calvin Harris/Motion/08 - Summer.mp3'
  },
  {
    id: 'fNrZGXAe05qDz6Q5ZnTkf',
    path: 'Calvin Harris/Motion/02 - Under Control (feat. Hurts).mp3'
  },
  {
    id: '0srYqtK3GOdWgmpcCQchi',
    path: 'Calvin Harris/Motion/06 - Outside (feat. Ellie Goulding).mp3'
  },
  {
    id: 'KCiiVVKG5ZBcRqDPe6hnw',
    path: 'Calvin Harris/Motion/05 - Slow Acid.mp3'
  },
  {
    id: 'TxAb5idO7jsJEPcdsmZvz',
    path: 'Calvin Harris/Motion/04 - Love Now (feat. All About She).mp3'
  },
  {
    id: '3AZgSZrNZFol0gvNh58NT',
    path: 'Calvin Harris/Motion/10 - Ecstasy (feat. Hurts).mp3'
  },
  {
    id: 'QrcAtW3RlRy9nJtx4XljK',
    path: 'Calvin Harris/Motion/14 - Burnin.mp3'
  },
  {
    id: 'GdhXSjYwu2BYcboJjer5J',
    path: 'Calvin Harris/Motion/13 - Together (feat. Gwen Stefani).mp3'
  },
  {
    id: 'WBDQq9HGMVy2XJV3AAX0D',
    path: 'Calvin Harris/Motion/07 - It Was You.mp3'
  },
  {
    id: 'T3joyBWjN1ceNC5zCYyk1',
    path: 'Calvin Harris/Motion/01 - Faith.mp3'
  },
  {
    id: 'UZgJTiXkwboPx8gf7SMDC',
    path: 'Calvin Harris/Motion/11 - Pray to God (feat. HAIM).mp3'
  },
  {
    id: 'NhLXoZTi1OwCIxn5cBNI8',
    path: 'Calvin Harris/Motion/12 - Open Wide (feat. Big Sean).mp3'
  },
  {
    id: '93xSSsBD328rVBKcCt22w',
    path: 'Calvin Harris/Motion/09 - Overdrive.mp3'
  },
  {
    id: 'S42bgbyxbdsCAUCIEAgWi',
    path: 'Coldplay/A Rush of Blood to the Head/04 - The Scientist.mp3'
  },
  {
    id: '9MbUuZafFwQL8RGi8LjMX',
    path: 'Coldplay/A Rush of Blood to the Head/11 - Amsterdam.mp3'
  },
  {
    id: 'UqxWha3TdoepomQcikXig',
    path: 'Coldplay/A Rush of Blood to the Head/02 - In My Place.mp3'
  },
  {
    id: 'VYumFPF8RsueNNPhTsFsv',
    path: 'Coldplay/A Rush of Blood to the Head/07 - Green Eyes.mp3'
  },
  {
    id: 'qB34bukf4kTpte5x7EEv1',
    path: 'Coldplay/A Rush of Blood to the Head/06 - Daylight.mp3'
  },
  {
    id: 'nOGlqmoRZfAZo6LzSniPm',
    path: 'Coldplay/A Rush of Blood to the Head/08 - Warning Sign.mp3'
  },
  {
    id: 'WA9Y8XkixhvQprVn3u2WI',
    path: 'Coldplay/A Rush of Blood to the Head/05 - Clocks.mp3'
  },
  {
    id: 'hHOUJ4j4FCjrF8niTW9L7',
    path: 'Coldplay/A Rush of Blood to the Head/03 - God Put A Smile Upon Your Face.mp3'
  },
  {
    id: 'IDRH4XeuEfZFjMBmh1Ib1',
    path: 'Coldplay/A Rush of Blood to the Head/01 - Politik.mp3'
  },
  {
    id: 'va7efIiko7e6CEQM7mUJ6',
    path: 'Coldplay/A Rush of Blood to the Head/10 - A Rush Of Blood To The Head.mp3'
  },
  {
    id: '9Xm9N8RamrIIPWyzMgwmY',
    path: 'Coldplay/A Rush of Blood to the Head/09 - A Whisper.mp3'
  },
  {
    id: 'w38qHY56oE7BYSiJ4xKTf',
    path: 'Calvin Harris/Ready for the Weekend/13 - Dance Wiv Me.mp3'
  },
  {
    id: 'BlgmIxwMtI5jo7dBTwtwx',
    path: 'Calvin Harris/Ready for the Weekend/12 - Yeah Yeah Yeah La La La.mp3'
  },
  {
    id: 'JrKwmbmZJZfUHNYe80aUa',
    path: 'Calvin Harris/Ready for the Weekend/03 - Stars Come Out.mp3'
  },
  {
    id: 'x4MbtzWA91Zvqy8UZBYGq',
    path: 'Calvin Harris/Ready for the Weekend/14 - 5iliconeater.mp3'
  },
  {
    id: 'wqZtLGsEqpg8xcXlRRjiQ',
    path: 'Calvin Harris/Ready for the Weekend/02 - Ready For The Weekend.mp3'
  },
  {
    id: 'uNI2bTO45GQsR61K9VDY9',
    path: 'Calvin Harris/Ready for the Weekend/01 - The Rain.mp3'
  },
  {
    id: 'GjIDeLAICJ9wftVsIBbuZ',
    path: 'Calvin Harris/Ready for the Weekend/10 - Limits.mp3'
  },
  {
    id: 'ikqVKazLWpRNY8VbAZz8t',
    path: "Calvin Harris/Ready for the Weekend/06 - I'm Not Alone.mp3"
  },
  {
    id: 'TQP6nVSb1wg3Xk2OKcGq4',
    path: 'Calvin Harris/Ready for the Weekend/07 - Flashback.mp3'
  },
  {
    id: 'JwNHen1bng0Br5vxKzVQX',
    path: 'Calvin Harris/Ready for the Weekend/04 - You Used To Hold Me.mp3'
  },
  {
    id: 'HNZRkWxIb01vHG5pMxZfV',
    path: 'Calvin Harris/Ready for the Weekend/08 - Worst Day feat Izza Kizza.mp3'
  },
  {
    id: 'wH34QfmcQg2WdTRyj0HsK',
    path: 'Calvin Harris/Ready for the Weekend/11 - Burns Night.mp3'
  },
  {
    id: 'PRDBXR8ezWS3mAEtMAiNa',
    path: 'Calvin Harris/Ready for the Weekend/09 - Relax.mp3'
  },
  {
    id: 'I3ip0V0NoYSr34av135t2',
    path: 'Calvin Harris/Ready for the Weekend/05 - Blue.mp3'
  },
  {
    id: 'DtyjsXZiUk7Ut1eZiLgwC',
    path: 'Coldplay/Ghost Stories/08. A Sky Full Of Stars.mp3'
  },
  {
    id: 'hg3EZYrPp5pZhAtb3KL0U',
    path: 'Coldplay/Ghost Stories/07. Oceans.mp3'
  },
  {
    id: 'bp1i3yzBY3fvkz70VVhQu',
    path: 'Coldplay/Ghost Stories/11. Ghost Story (Bonus Track).mp3'
  },
  {
    id: 'wajeG3lrJUEiIS8YIYcFg',
    path: 'Coldplay/Ghost Stories/10. All Your Friends (Bonus Track).mp3'
  },
  {
    id: 'GEcpIrZomCA7GK9PUoSJ6',
    path: 'Coldplay/Ghost Stories/01. Always In My Head.mp3'
  },
  {
    id: 'sI9VDtS602t1uB2VRgREf',
    path: 'Coldplay/Ghost Stories/02. Magic.mp3'
  },
  {
    id: 'gfBo5xCfD4kbxwXH8OILh',
    path: 'Coldplay/Ghost Stories/12. O (Reprise) (Bonus Track).mp3'
  },
  {
    id: 'beHyzQlgFjybmicF0sTxa',
    path: "Coldplay/Ghost Stories/06. Another's Arms.mp3"
  },
  {
    id: 'MunJOIN4rULt1pjX0gA36',
    path: 'Coldplay/Ghost Stories/04. True Love.mp3'
  },
  {
    id: 'EOvIlChtR6yA7l64SUlW2',
    path: 'Coldplay/Ghost Stories/05. Midnight.mp3'
  },
  {
    id: '08GiuaJLD5ck87akU4h65',
    path: 'Coldplay/Ghost Stories/09. O.mp3'
  },
  {
    id: 'ENoqGbYEitY2gfpOdR1MQ',
    path: 'Coldplay/Ghost Stories/03. Ink.mp3'
  },
  {
    id: 'SH8VWTPZNRDLc6ZsIP59t',
    path: 'Coldplay/Parachutes/05. Yellow.mp3'
  },
  {
    id: 'NMnWv1NncxWGgaoE0A5BP',
    path: "Coldplay/Parachutes/10. Everything's Not Lost.mp3"
  },
  {
    id: 'lF2j4IgsQ24GIxYMslAmf',
    path: 'Coldplay/Parachutes/06. Trouble.mp3'
  },
  {
    id: 'XtgfSrfEyHySo5TM6oJZ0',
    path: "Coldplay/Parachutes/01. Don't Panic.mp3"
  },
  {
    id: 'UexxqzzftNeacpEOeBJcq',
    path: 'Coldplay/Parachutes/08. High Speed.mp3'
  },
  {
    id: '1dy27O7d9H2D66Mp5Qw8n',
    path: 'Coldplay/Parachutes/07. Parachutes.mp3'
  },
  {
    id: 'wZkRRnw8faDpBpTXdHGEY',
    path: 'Coldplay/Parachutes/04. Sparks.mp3'
  },
  {
    id: 'dTAs8XLAxqubCuo5vlw5E',
    path: 'Coldplay/Parachutes/09. We Never Change.mp3'
  },
  {
    id: 'hZMK7DCfc0EWkVJBuyMAr',
    path: 'Coldplay/Parachutes/02. Shiver.mp3'
  },
  {
    id: 'taVlmcfQrPdiuCBhsSlLC',
    path: 'Coldplay/Parachutes/03. Spies.mp3'
  },
  {
    id: 'D5RJCRSYZaE5bPZAfSaWO',
    path: 'Calvin Harris/18 Months/02 - Bounce (feat. Kelis) [Radio Edit].mp3'
  },
  {
    id: 'uor8eCpSkEC1gDZWoHAId',
    path: 'Calvin Harris/18 Months/08 - I Need Your Love (feat. Ellie Goulding).mp3'
  },
  {
    id: 'mhFf333rHBCU6LyqGZcKh',
    path: 'Calvin Harris/18 Months/11 - School.mp3'
  },
  {
    id: '0tA6PHJKffwX8uCPMfAmt',
    path: 'Calvin Harris/18 Months/06 - Mansion.mp3'
  },
  {
    id: '6D3COorRJBwNrlGoDgcct',
    path: 'Calvin Harris/18 Months/10 - Sweet Nothing (feat. Florence Welch).mp3'
  },
  {
    id: 'WvFmJ71VcYnNmB3GvljsF',
    path: 'Calvin Harris/18 Months/01 - Green Valley.mp3'
  },
  {
    id: 'zWviubyKiUJLrOm445s8B',
    path: "Calvin Harris/18 Months/18 - We'll Be Coming Back  (feat. Example) [Original Extended Mix].mp3"
  },
  {
    id: 'Oq3zvZokedIdS4nz8iMoY',
    path: "Calvin Harris/18 Months/13 - Let's Go (feat. Ne-Yo).mp3"
  },
  {
    id: 'iWBE52xNdSHpTPAbDUyWK',
    path: 'Calvin Harris/18 Months/22 - Awooga (Extended Mix).mp3'
  },
  {
    id: 'vp4jS85D8rNAGIw7jCUJZ',
    path: 'Calvin Harris/18 Months/17 - We Found Love (Rhianna feat. Calvin Harris) [Extended Mix].mp3'
  },
  {
    id: 'hSsiTFMtoavd45GFilF8L',
    path: 'Calvin Harris/18 Months/03 - Feel So Close (Radio Edit).mp3'
  },
  {
    id: 'cy3SOAxBole9jGPqDRs9v',
    path: 'Calvin Harris/18 Months/16 - Bounce (feat. Kelis) [R3hab Remix].mp3'
  },
  {
    id: 'b2BtaCoHwTXmRAKa5vRbv',
    path: 'Calvin Harris/18 Months/09 - Drinking from the Bottle (feat. Tinie Tempah).mp3'
  },
  {
    id: 'IBGwyBFE9grw39v22QO2U',
    path: 'Calvin Harris/18 Months/14 - Awooga.mp3'
  },
  {
    id: 'hsikAhQd36KVTvyJygS80',
    path: 'Calvin Harris/18 Months/12 - Here 2 China (feat. Dizzee Rascal).mp3'
  },
  {
    id: 'rRUQtGH7npuI5Cx25drGd',
    path: 'Calvin Harris/18 Months/20 - Sweet Nothing (feat. Florence Welch) [Extended Mix].mp3'
  },
  {
    id: 'CwlA38kOAniyfkgbHn6sC',
    path: 'Calvin Harris/18 Months/04 - We Found Love (feat. Rihanna).mp3'
  },
  {
    id: 'Lc5lbYtVWEUy9HcIlgLS4',
    path: "Calvin Harris/18 Months/19 - We'll Be Coming Back  (feat. Example) [Michael Woods Remix].mp3"
  },
  {
    id: '2gLM2MRaIP6yXb7DuKn7b',
    path: 'Calvin Harris/18 Months/15 - Thinking About You (feat. Ayah Marar).mp3'
  },
  {
    id: 'RMlLqsR1tuNCkBiuY9q0r',
    path: "Calvin Harris/18 Months/21 - Let's Go (feat. Ne-Yo) [Extended Mix].mp3"
  },
  {
    id: 'I3RrMQkedZCaow0OI6hYl',
    path: 'Calvin Harris/18 Months/07 - Iron.mp3'
  },
  {
    id: '7cLl8c8ah8J3CQMkfJhMI',
    path: "Calvin Harris/18 Months/05 - We'll Be Coming Back (feat. Example).mp3"
  },
  {
    id: 'kj76WAFKu6imTz9O2rB7I',
    path: 'Coldplay/Viva la Vida or Death and All His Friends/04. 42.mp3'
  },
  {
    id: 'm7OXY2eSFjJkk1hhjoIck',
    path: 'Coldplay/Viva la Vida or Death and All His Friends/09. Strawberry Swing.mp3'
  },
  {
    id: 'bxkhj3edmAOoo4hpRwBI9',
    path: 'Coldplay/Viva la Vida or Death and All His Friends/07. Viva La Vida.mp3'
  },
  {
    id: '0DwIBzc1TaqaCR7B4wdbe',
    path: 'Coldplay/Viva la Vida or Death and All His Friends/03. Lost!.mp3'
  },
  {
    id: 'dOHt1iSRrAM30DdMOWbGM',
    path: 'Coldplay/Viva la Vida or Death and All His Friends/02. Cemeteries Of London.mp3'
  },
  {
    id: 'TIrxQYO5KsB3jSXNT03t0',
    path: 'Coldplay/Viva la Vida or Death and All His Friends/08. Violet Hill.mp3'
  },
  {
    id: '6HKDwjP1LIjNJrDqZTh1A',
    path: 'Coldplay/Viva la Vida or Death and All His Friends/06. Yes.mp3'
  },
  {
    id: 'jRVnx3j7kEBKLGvdAZy90',
    path: 'Coldplay/Viva la Vida or Death and All His Friends/10. Death And All His Friends.mp3'
  },
  {
    id: 'AbSMUpphfg4uRpVXlWw2l',
    path: 'Coldplay/Viva la Vida or Death and All His Friends/05. Lovers In Japan - Reign Of Love.mp3'
  },
  {
    id: 'EhnB8mhMlXbx9p44U8O7S',
    path: 'Coldplay/Viva la Vida or Death and All His Friends/01. Life In Technicolor.mp3'
  },
  {
    id: '94qmko4uKBwANbCHf1zRr',
    path: 'Daft Punk/Discovery/13 - Daft Punk - Face To Face.mp3'
  },
  {
    id: 'Anm8SQZvQC79NfA3ip9PO',
    path: 'Daft Punk/Discovery/12 - Daft Punk - Short Circuit.mp3'
  },
  {
    id: 'sFaP4pjmZf7aGjvYVzFIt',
    path: 'Daft Punk/Discovery/09 - Daft Punk - Something About Us.mp3'
  },
  {
    id: 'TwLRPDfDrA8FPjl7k4Ir4',
    path: 'Daft Punk/Discovery/10 - Daft Punk - Voyager.mp3'
  },
  {
    id: '9CoMNI2YdvpODZLJPNdmj',
    path: 'Daft Punk/Discovery/07 - Daft Punk - Superheroes.mp3'
  },
  {
    id: 'nmiTZIvS1pNsDmVSGUVhw',
    path: 'Daft Punk/Discovery/06 - Daft Punk - Nightvision.mp3'
  },
  {
    id: 'UTmUWDcDyxG6OXD36l8A1',
    path: 'Daft Punk/Discovery/08 - Daft Punk - High Life.mp3'
  },
  {
    id: '9wLetxUQkAIYZCVzHgNhG',
    path: 'Daft Punk/Discovery/11 - Daft Punk - Veridis Quo.mp3'
  },
  {
    id: 'q0TxgBXLcFliCAvKX7u99',
    path: 'Daft Punk/Discovery/05 - Daft Punk - Crescendolls.mp3'
  },
  {
    id: 'zY1bSBrNC5W725ul9CMPK',
    path: 'Daft Punk/Discovery/14 - Daft Punk - Too Long.mp3'
  },
  {
    id: 'AY4saJBB1ORj4WLAYejHi',
    path: 'Daft Punk/Discovery/04 - Daft Punk - Harder, Better, Faster, Stronger.mp3'
  },
  {
    id: 'omz88TGIuDdP7KDlOLAVt',
    path: 'Daft Punk/Discovery/03 - Daft Punk - Digital Love.mp3'
  },
  {
    id: 'C6bhPlaq8T4NAzTnSoMnf',
    path: 'Daft Punk/Discovery/02 - Daft Punk - Aerodynamic.mp3'
  },
  {
    id: 'mZ7lTBIyIu31s3fsL8pnp',
    path: 'Daft Punk/Discovery/01 - Daft Punk - One More Time.mp3'
  },
  {
    id: '65SKxAtvSrohtvPPOcQJB',
    path: "Daft Punk/Homework/08 - Daft Punk - Rollin' & Scratchin'.mp3"
  },
  {
    id: 'gJPBdHToZGbi16lmg6bFt',
    path: "Daft Punk/Homework/13 - Daft Punk - Burnin'.mp3"
  },
  {
    id: 'CSkRkABKTy3S65znd6dH7',
    path: 'Daft Punk/Homework/10 - Daft Punk - High Fidelity.mp3'
  },
  {
    id: 'GuGHUEUatfLYVieTvTQcj',
    path: 'Daft Punk/Homework/14 - Daft Punk - Indo Silver Club.mp3'
  },
  {
    id: 'OrGBvjFRAQ8poUxdotIZH',
    path: 'Daft Punk/Homework/16 - Daft Punk - Funk Ad.mp3'
  },
  {
    id: '2A8qQLdc13OTePv8AwSMR',
    path: 'Daft Punk/Homework/06 - Daft Punk - Fresh.mp3'
  },
  {
    id: 'PDHb4bgcqz9Hx6pAB0GY1',
    path: 'Daft Punk/Homework/02 - Daft Punk - WDPK 837 FM.mp3'
  },
  {
    id: 'dxOlKH634iyIGS6jtjcfq',
    path: 'Daft Punk/Homework/09 - Daft Punk - Teachers.mp3'
  },
  {
    id: 'rxyYbWENJdmsNRAmydaia',
    path: "Daft Punk/Homework/11 - Daft Punk - Rock'n Roll.mp3"
  },
  {
    id: 'zC6CXgS7rLWnfzhLpd6pY',
    path: 'Daft Punk/Homework/01 - Daft Punk - Daftendirekt.mp3'
  },
  {
    id: 'Vm9K8EKsFUQEnRAl48sPz',
    path: 'Daft Punk/Homework/07 - Daft Punk - Around The World.mp3'
  },
  {
    id: 'BxYQTTX6J25uIAMKGQLuB',
    path: 'Daft Punk/Homework/03 - Daft Punk - Revolution 909.mp3'
  },
  {
    id: '4rQRjTrpjMkds914EF2mz',
    path: 'Daft Punk/Homework/05 - Daft Punk - Phoenix.mp3'
  },
  {
    id: 'ypnQRT9HMS7z11ImUZrZD',
    path: 'Daft Punk/Homework/12 - Daft Punk - Oh Yeah.mp3'
  },
  {
    id: 'zOI39q6PdF8TebOHZTUJK',
    path: 'Daft Punk/Homework/15 - Daft Punk - Alive.mp3'
  },
  {
    id: '7s2Y8Hg1D21YOj2pFimyj',
    path: 'Daft Punk/Homework/04 - Daft Punk - Da Funk.mp3'
  },
  {
    id: 'xBASBlze5zDsLdOBTmXM1',
    path: 'Coldplay/Mylo Xyloto/14. Up With The Birds.mp3'
  },
  {
    id: 'sa0HPuxmRSJkksCl7t8Cs',
    path: 'Coldplay/Mylo Xyloto/07. Every Teardrop Is A Waterfall.mp3'
  },
  {
    id: 'nyHmvkl3SJeIn6W8fXLLq',
    path: 'Coldplay/Mylo Xyloto/11. Up In Flames.mp3'
  },
  {
    id: 'w2rSaBYG4gHd3DIz6z0UD',
    path: 'Coldplay/Mylo Xyloto/03. Paradise.mp3'
  },
  {
    id: '8O2C5UFrxruUFKBgeO8Ds',
    path: "Coldplay/Mylo Xyloto/13. Don't Let It Break Your Heart.mp3"
  },
  {
    id: 'i4Ts5PooyJKd1MoJ7HiQh',
    path: 'Coldplay/Mylo Xyloto/10. Princess Of China.mp3'
  },
  {
    id: 'TpEwrfUE1bZwAnr2roknm',
    path: 'Coldplay/Mylo Xyloto/06. M.M.I.X.mp3'
  },
  {
    id: 'y4T7fA9eaLoAbdQhMI1Hc',
    path: 'Coldplay/Mylo Xyloto/05. Us Against The World.mp3'
  },
  {
    id: 'pimSqb3r1bxrn7a8qAKrV',
    path: 'Coldplay/Mylo Xyloto/08. Major Minus.mp3'
  },
  {
    id: 'yXH30EaDyqDRqB72ctNWM',
    path: 'Coldplay/Mylo Xyloto/04. Charlie Brown.mp3'
  },
  {
    id: 'T1rgXYsMeUSvbRMU8Hyw0',
    path: 'Coldplay/Mylo Xyloto/09. U.F.O.mp3'
  },
  {
    id: '2j4NRCunHTXc2wzV5t60x',
    path: 'Coldplay/Mylo Xyloto/02. Hurts Like Heaven.mp3'
  },
  {
    id: 'nuQOOm40nHPPHwxs4hlKJ',
    path: 'Coldplay/Mylo Xyloto/12. A Hopeful Transmission.mp3'
  },
  {
    id: 'IWlMCPFCMekqok1LORGbg',
    path: 'Coldplay/Mylo Xyloto/01. Mylo Xyloto.mp3'
  },
  {
    id: 'P5jnaFpWmIS38I9AcC1Lr',
    path: 'David Bowie/Heroes/05.Blackout.mp3'
  },
  {
    id: '8U18npw6SCcfo3rF47awC',
    path: 'David Bowie/Heroes/09.Neuköln.mp3'
  },
  {
    id: 'vSYm2MIuOwP0Wx8EMRT6o',
    path: 'David Bowie/Heroes/10.The Secret Life of Arabia.mp3'
  },
  {
    id: '4kfhaQZF9dolArApsgEV4',
    path: 'David Bowie/Heroes/11.Abdulmajid (Previously unreleased, 1976-79).mp3'
  },
  {
    id: 'p7yU1Nl8bUrhSFi4gbesk',
    path: 'David Bowie/Heroes/07.Sense of Doubt.mp3'
  },
  {
    id: 'cUnmUbLr0Ctq1fErHJCyU',
    path: 'David Bowie/Heroes/01.Beauty and the Beast.mp3'
  },
  {
    id: 'Iz2Js6IBykKJ3L6fjYZTP',
    path: 'David Bowie/Heroes/04.Sons of the Silent Age.mp3'
  },
  {
    id: '8tS4SGJVdMcFKz84I0Bvx',
    path: 'David Bowie/Heroes/02.Joe the Lion.mp3'
  },
  {
    id: 'sMwDmtPieBpeWgOSBz9pM',
    path: 'David Bowie/Heroes/12.Joe the Lion (Remix version, 1991).mp3'
  },
  {
    id: '2iIXIJ74mvrM6OrkR2XK6',
    path: "David Bowie/Heroes/03.'Heroes'.mp3"
  },
  {
    id: 'W4KmgV5cNj2WCOcD3WMVN',
    path: 'David Bowie/Heroes/06.V-2 Schneider.mp3'
  },
  {
    id: 'JX975VHMowj82ZZsFPmMc',
    path: 'David Bowie/Heroes/08.Moss Garden.mp3'
  },
  {
    id: '9IBdfkIMa7GDMge3kfsBK',
    path: 'David Bowie/Hunky Dory/08.Andy Warhol.mp3'
  },
  {
    id: 'yNiUdZG9Uz2WD6UReGnBw',
    path: 'David Bowie/Hunky Dory/05.Kooks.mp3'
  },
  {
    id: 'keNrEKxOd6VpBuWuxXdLW',
    path: 'David Bowie/Hunky Dory/11.The Bewlay Brothers.mp3'
  },
  {
    id: '32hxwKKkQz2VVyjs6lniI',
    path: 'David Bowie/Hunky Dory/09.Song For Bob Dylan.mp3'
  },
  {
    id: 'GCndyYzsyMXeSu1DzlY08',
    path: 'David Bowie/Hunky Dory/03.Eight Line Poem.mp3'
  },
  {
    id: 'rRVv6up4Qzzl5F6jRpruc',
    path: 'David Bowie/Hunky Dory/04.Life On Mars.mp3'
  },
  {
    id: '78aIiGId4ZdmFPPjBFNui',
    path: 'David Bowie/Hunky Dory/07.Fill Your Heart.mp3'
  },
  {
    id: 'Sh4zdmRKR53oU7gj1XOS1',
    path: 'David Bowie/Hunky Dory/12.Bombers.mp3'
  },
  {
    id: 'dSTCXmx5lU5PP8xTW2WuU',
    path: 'David Bowie/Hunky Dory/10.Queen Bitch.mp3'
  },
  {
    id: 'cth9GTqDeyP1GLwwTUyRx',
    path: 'David Bowie/Hunky Dory/02.Oh! You Pretty Things.mp3'
  },
  {
    id: '4hA8kZFYzEf9VDyPAecaM',
    path: 'David Bowie/Hunky Dory/14.Quicksand (2).mp3'
  },
  {
    id: 'cavocRAFj2MDbCeNQLBFS',
    path: 'David Bowie/Hunky Dory/01.Changes.mp3'
  },
  {
    id: 'VqPRvAYzluAJGkHxAVA6O',
    path: 'David Bowie/Hunky Dory/15.The Bewlay Brothers (2).mp3'
  },
  {
    id: 'YOrQQA2T5VmrA0ydKJfVM',
    path: 'David Bowie/Hunky Dory/13.The Supermen.mp3'
  },
  {
    id: '9Q44VTzWUeLTATRm5deV0',
    path: 'David Bowie/Hunky Dory/06.Quicksand.mp3'
  },
  {
    id: '7BO19J2XNQHcHIbgiVtgy',
    path: "Crowded House/The Very Very Best Of Crowded House/1. Now We're Getting Somewhere.mp3"
  },
  {
    id: 'qXIMyofYI0ScnmWGmRVam',
    path: 'Crowded House/The Very Very Best Of Crowded House/2. World Where You Live.mp3'
  },
  {
    id: 'l2AvL9kfWQ2zxQqDn7hQR',
    path: 'Crowded House/The Very Very Best Of Crowded House/3. Weather With You.mp3'
  },
  {
    id: 'qFaOKU8CgTOCJ9j8bzmR6',
    path: 'Crowded House/The Very Very Best Of Crowded House/4. Something So Strong.mp3'
  },
  {
    id: 'IFKFx68luDLVu4zBQBY4A',
    path: 'Crowded House/The Very Very Best Of Crowded House/5. When You Come.mp3'
  },
  {
    id: 'xKJ0pRl06n5B8g2JZ29od',
    path: 'Crowded House/The Very Very Best Of Crowded House/6. Fingers of Love.mp3'
  },
  {
    id: 'alBz2Kw6RdQYfYgEHbufg',
    path: 'Crowded House/The Very Very Best Of Crowded House/7. Four Seasons in One Day.mp3'
  },
  {
    id: 'DhnXL55QG06jdedqtjQ2L',
    path: 'Crowded House/The Very Very Best Of Crowded House/8. Distant Sun.mp3'
  },
  {
    id: 'r1kTloH2QBxHqzyueFTPL',
    path: "Crowded House/The Very Very Best Of Crowded House/9. Don't Stop Now.mp3"
  },
  {
    id: '0cFKuvuMqGDFiPK587tGE',
    path: 'Crowded House/The Very Very Best Of Crowded House/10. Sister Madly.mp3'
  },
  {
    id: 'Mhokqr1BtmjhhxVwNE6CF',
    path: 'Crowded House/The Very Very Best Of Crowded House/11. Chocolate Cake.mp3'
  },
  {
    id: 'loUAveJxYw5U0BQr7aZNC',
    path: 'Crowded House/The Very Very Best Of Crowded House/12. Locked Out.mp3'
  },
  {
    id: 'WCioBv5jYe7PO5iz4ZfUe',
    path: 'Crowded House/The Very Very Best Of Crowded House/13. Never Be the Same.mp3'
  },
  {
    id: 'CQKMdjslvZek9i44GIQ9u',
    path: 'Crowded House/The Very Very Best Of Crowded House/14. Hole in the River.mp3'
  },
  {
    id: 'SKEBUeqKzfDGoK9LydohP',
    path: 'Crowded House/The Very Very Best Of Crowded House/15. Not the Girl You Think You Are.mp3'
  },
  {
    id: '4CdcrjTR28K2wu8sQNCKw',
    path: 'Crowded House/The Very Very Best Of Crowded House/16. Better Be Home.mp3'
  },
  {
    id: 'OirmIsNAFGCj82VbutdTG',
    path: 'Crowded House/The Very Very Best Of Crowded House/1. Mean to Me.mp3'
  },
  {
    id: '3po4mWQbK2VcF1JGDFFtw',
    path: "Crowded House/The Very Very Best Of Crowded House/2. It's Only Natural.mp3"
  },
  {
    id: 'lwFhNVyK3er7OiHLRsfrk',
    path: 'Crowded House/The Very Very Best Of Crowded House/3. Fall at Your Feet.mp3'
  },
  {
    id: 'PLTA8h5BY1mfQxuoH75IT',
    path: 'Crowded House/The Very Very Best Of Crowded House/4. Recurring Dream.mp3'
  },
  {
    id: 'yS3UKL6Sgc2AlYGTKE9Ev',
    path: 'Crowded House/The Very Very Best Of Crowded House/5. Private Universe.mp3'
  },
  {
    id: 'DvilCgStswXg2HPyc2aKS',
    path: 'Crowded House/The Very Very Best Of Crowded House/6. Pineapple Head.mp3'
  },
  {
    id: 'k2Z9CYSAecRlTLpZEU751',
    path: 'Crowded House/The Very Very Best Of Crowded House/7. She Called Up.mp3'
  },
  {
    id: '9W4bxdXakNNUZMOBScaEv',
    path: 'Crowded House/The Very Very Best Of Crowded House/8. I Feel Possessed.mp3'
  },
  {
    id: 'MMqhXenzAZkZhTdP7ABlQ',
    path: 'Crowded House/The Very Very Best Of Crowded House/9. Instinct.mp3'
  },
  {
    id: 'yh3SxY4KsVWxagy0uVryw',
    path: 'Crowded House/The Very Very Best Of Crowded House/10. Everything is Good for You.mp3'
  },
  {
    id: 'E6MFHPPODrjQy3NLMfLxx',
    path: 'Crowded House/The Very Very Best Of Crowded House/11. Into Temptation.mp3'
  },
  {
    id: 'k5QftBw0hGTJNSQbiGL28',
    path: 'Crowded House/The Very Very Best Of Crowded House/12. Nails in My Feet.mp3'
  },
  {
    id: 'Ts2SyiN8nJfM2JXDIJPaZ',
    path: "Crowded House/The Very Very Best Of Crowded House/13. Don't Dream its Over.mp3"
  },
  {
    id: 'PyGwh3yy14pW8OfCFyxR7',
    path: 'Crowded House/The Very Very Best Of Crowded House/14. Pour le Monde.mp3'
  },
  {
    id: 'azCg8AK9nzpnvBwec3Jt3',
    path: 'Crowded House/The Very Very Best Of Crowded House/15. Whispers and Moans.mp3'
  },
  {
    id: 'ov330SFcQ4g4jhKORncN4',
    path: 'Crowded House/The Very Very Best Of Crowded House/16. Throw Your Arms Around Me.mp3'
  },
  {
    id: '3w7rlkupIHZk1ngcTqgpK',
    path: "Dubstar/Disgraceful/10. St. Swithin's Day.mp3"
  },
  {
    id: 'ga2snDQTyYTe83opQ5zhv',
    path: 'Dubstar/Disgraceful/03. Just A Girl She Said.mp3'
  },
  {
    id: 'T9IJvIcRLcNQrVBca1BqP',
    path: 'Dubstar/Disgraceful/07. Not So Manic Now.mp3'
  },
  {
    id: 'c2L1a9zY11CIBb1LtuovQ',
    path: 'Dubstar/Disgraceful/09. Not Once, Not Ever.mp3'
  },
  {
    id: 'MUaF43vVB6h80kXntmrMm',
    path: 'Dubstar/Disgraceful/11. Disgraceful.mp3'
  },
  {
    id: 'NPtwgdDxe72dnGEp6p0ei',
    path: 'Dubstar/Disgraceful/02. Anywhere.mp3'
  },
  {
    id: 'Qc0nEuai7SRaHKXdGPwSn',
    path: 'Dubstar/Disgraceful/04. Elevator Song.mp3'
  },
  {
    id: 'LIVbGizzbYFAsgT3bCKSP',
    path: 'Dubstar/Disgraceful/08. Popdorian.mp3'
  },
  {
    id: 'iBVv0S9Q8bxqwa5FGKdQI',
    path: 'Dubstar/Disgraceful/01. Stars.mp3'
  },
  {
    id: 'KJNwFi8eIZhV8tR6dRn6s',
    path: 'Dubstar/Disgraceful/06. Week In Week Out.mp3'
  },
  {
    id: 'ieSCBXy9GMeLcRl88pNyk',
    path: 'Dubstar/Disgraceful/05. The Day I See You Again.mp3'
  },
  {
    id: 'FIWZqBI0ZSONmSmQFiYFo',
    path: 'Coldplay/X&Y/13. Til Kingdom Come.mp3'
  },
  { id: 'J9CnYXNXBBIkMYt4D3dDl', path: 'Coldplay/X&Y/04. Fix You.mp3' },
  { id: 'TIO2AI9UvNiUismkHv7wy', path: 'Coldplay/X&Y/06. X&Y.mp3' },
  {
    id: '9dXvq5bVUvjwgkYAoJ9p8',
    path: 'Coldplay/X&Y/07. Speed Of Sound.mp3'
  },
  { id: 'HEAoFJX2K0ZrF4Eh3Phyi', path: 'Coldplay/X&Y/09. Low.mp3' },
  {
    id: 'c95BDoYZcd3wY3Xkbkmqk',
    path: 'Coldplay/X&Y/03. White Shadows.mp3'
  },
  { id: 'I6r6t7WQcSpZdQZ8UMMFc', path: 'Coldplay/X&Y/02. What If.mp3' },
  {
    id: 'MpbcDl2kpMQuK0R4QdJGD',
    path: 'Coldplay/X&Y/08. A Message.mp3'
  },
  {
    id: 'Gn002sEWlgHxzdRMtEiUt',
    path: 'Coldplay/X&Y/10. The Hardest Part.mp3'
  },
  { id: 'jhoHlxPDQK6BOidpmnJb0', path: 'Coldplay/X&Y/05. Talk.mp3' },
  {
    id: '5NKkTjVAWfwU7u7rVO7mu',
    path: 'Coldplay/X&Y/01. Square One.mp3'
  },
  {
    id: 'gqD2V9OHtEr6vruSsIeYp',
    path: 'Coldplay/X&Y/12. Twisted Logic.mp3'
  },
  {
    id: 'g1jEyu3baUoCTrSr1O6z2',
    path: 'Coldplay/X&Y/11. Swallowed In The Sea.mp3'
  },
  {
    id: 'V7W7xQLYUtUR9XA1fj3AM',
    path: 'David Bowie/Aladdin Sane/01.Watch That Man.mp3'
  },
  {
    id: '2EJWnShB4no8iGqj7lbnA',
    path: 'David Bowie/Aladdin Sane/02.Aladdin Sane.mp3'
  },
  {
    id: 'kJUXzLt3egwriQODjWXfQ',
    path: 'David Bowie/Aladdin Sane/09.The Jean Genie.mp3'
  },
  {
    id: '947CG1og7HAiRIlBVfzBZ',
    path: 'David Bowie/Aladdin Sane/06.Time.mp3'
  },
  {
    id: 'OYexdiVG50YIDH8zEWpaU',
    path: 'David Bowie/Aladdin Sane/04.Panic In Detroit.mp3'
  },
  {
    id: 'kQp1PvhvCtcjktjTlLWrh',
    path: 'David Bowie/Aladdin Sane/07.The Prettiest Star.mp3'
  },
  {
    id: 'WUZgyQuq24ReTCgygmtf0',
    path: "David Bowie/Aladdin Sane/08.Let's Spend the Night Together.mp3"
  },
  {
    id: 'BTn2uWtKmIWyvDDSBmSFR',
    path: 'David Bowie/Aladdin Sane/03.Drive In Saturday.mp3'
  },
  {
    id: 'ewL6EDPLsDg991mtiJY0p',
    path: 'David Bowie/Aladdin Sane/05.Cracked Actor.mp3'
  },
  {
    id: 'ZrfXbpxTh7p9B6ciq4KOb',
    path: 'David Bowie/Aladdin Sane/10.Lady Grinning Soul.mp3'
  },
  {
    id: 'G2voGFWjXGvneAWGwFnFh',
    path: 'Elastica/Elastica/14. Elastica - Stutter.mp3'
  },
  {
    id: 'X0QjSrojhUEzJPiUcxORl',
    path: 'Elastica/Elastica/09. Elastica - Blue.mp3'
  },
  {
    id: 'NVKyoVVl8AEG1bS8I9nqW',
    path: 'Elastica/Elastica/04. Elastica - Car Song.mp3'
  },
  {
    id: 'HUT4XMq0Fbq1upRF7BAnL',
    path: 'Elastica/Elastica/03. Elastica - Connection.mp3'
  },
  {
    id: 'RF7jTbL08NNq80V4Ktn77',
    path: 'Elastica/Elastica/07. Elastica - S.O.F.T..mp3'
  },
  {
    id: 'qFuQCP4ZF1lvy1nLy9TIh',
    path: 'Elastica/Elastica/08. Elastica - Indian Song.mp3'
  },
  {
    id: 'sKYEtcOxdfwAgax9LF6cc',
    path: 'Elastica/Elastica/06. Elastica - Hold Me Now.mp3'
  },
  {
    id: '7B6EiWQd1nxnJk5nFp9AT',
    path: 'Elastica/Elastica/05. Elastica - Smile.mp3'
  },
  {
    id: 'BKQ99WtLQgX5KMy8rJT7I',
    path: 'Elastica/Elastica/11. Elastica - Waking Up.mp3'
  },
  {
    id: 'jvwcRO9a5CwtKlfkKclT4',
    path: 'Elastica/Elastica/15. Elastica - Never Here.mp3'
  },
  {
    id: 'CANWhsHAWHsonpsTj4vHC',
    path: 'Elastica/Elastica/02. Elastica - Annie.mp3'
  },
  {
    id: 'FW7qKQjsfMaePMJJoXLIz',
    path: 'Elastica/Elastica/13. Elastica - See That Animal.mp3'
  },
  {
    id: 'wxtsCe3A68Mud19eD1yiP',
    path: 'Elastica/Elastica/12. Elastica - 2-1.mp3'
  },
  {
    id: 'q8ZLD28eQDSs5gC8ZBmCK',
    path: 'Elastica/Elastica/10. Elastica - All-Nighter.mp3'
  },
  {
    id: 'DTNJ199gv13qYWn2UQmzi',
    path: 'Elastica/Elastica/16. Elastica - Vaseline.mp3'
  },
  {
    id: '2R4dshBmITFiJZpJw5txa',
    path: 'Elastica/Elastica/01. Elastica - Line Up.mp3'
  },
  {
    id: 'SJgfDgILzIrw2yYYIBvs6',
    path: 'Feeder/Polythene/13 - Feeder - 20th Century Trip.mp3'
  },
  {
    id: 'KKxdnlU3Sgbf0o2t7n5Of',
    path: 'Feeder/Polythene/09 - Feeder - Stereo World.mp3'
  },
  {
    id: 'o4LYP6MTRYSeZHGQyF6gF',
    path: 'Feeder/Polythene/01 - Feeder - Polythene Girl.mp3'
  },
  {
    id: 'yxZ1GqT3VI0qg674yvpi5',
    path: 'Feeder/Polythene/08 - Feeder - Descend.mp3'
  },
  {
    id: 'VGffvtT893l46ASXdzWph',
    path: 'Feeder/Polythene/03 - Feeder - Cement.mp3'
  },
  {
    id: 'qdy8onWBZ5eQLaScFv6FF',
    path: 'Feeder/Polythene/06 - Feeder - Radiation.mp3'
  },
  {
    id: 'YFsG1Mz4C2T9ZYwWGacXo',
    path: 'Feeder/Polythene/07 - Feeder - Suffocate.mp3'
  },
  {
    id: 'SOeulYrmvAI3SNcAihH0Y',
    path: 'Feeder/Polythene/10 - Feeder - Change.mp3'
  },
  {
    id: 'zxycV3dtOcLsjbPx9H56M',
    path: 'Feeder/Polythene/05 - Feeder - Crash.mp3'
  },
  {
    id: 'wuhtmR3LgXTAAQdRFnEEW',
    path: 'Feeder/Polythene/02 - Feeder - My Perfect Day.mp3'
  },
  {
    id: '1SPJCQB6xHOApOrBFLdAR',
    path: 'Feeder/Polythene/12 - Feeder - Forgive.mp3'
  },
  {
    id: 'JZTtLnHiehtWYsH6AcJGG',
    path: 'Feeder/Polythene/04 - Feeder - High.mp3'
  },
  {
    id: 'Cbdn6WcD6h4VkYN0zdDk0',
    path: 'Feeder/Polythene/11 - Feeder - Tangerine.mp3'
  },
  {
    id: '8kNYO7QcSp31pT3Ur4aTF',
    path: 'Franz Ferdinand/Franz Ferdinand/01 - Jacqueline.mp3'
  },
  {
    id: 'e9zleIVQkTI9SXnmtvuK6',
    path: 'Franz Ferdinand/Franz Ferdinand/02 - Tell Her Tonight.mp3'
  },
  {
    id: 'ENOTBGNs51qnzbqmTwZDz',
    path: 'Franz Ferdinand/Franz Ferdinand/03 - Take Me Out.mp3'
  },
  {
    id: 'NnVkcuOOzfTaMsgHGBpEi',
    path: 'Franz Ferdinand/Franz Ferdinand/04 - The Dark Of The Matinee.mp3'
  },
  {
    id: 'n8WTEEcH68uowT1DEB30R',
    path: 'Franz Ferdinand/Franz Ferdinand/05 - Auf Achse.mp3'
  },
  {
    id: 'nrpbBWqrPJCwTOL3NWBfk',
    path: 'Franz Ferdinand/Franz Ferdinand/06 - Cheating On You.mp3'
  },
  {
    id: 'p3LEgEpmaFNb3NpDjWUw9',
    path: 'Franz Ferdinand/Franz Ferdinand/07 - This Fire.mp3'
  },
  {
    id: '6SMIIdvyoLU7nzCNkkP7J',
    path: 'Franz Ferdinand/Franz Ferdinand/09 - Michael.mp3'
  },
  {
    id: 'Q07jAOXMjWb2StCvRKMqM',
    path: 'Franz Ferdinand/Franz Ferdinand/10 - Come On Home.mp3'
  },
  {
    id: 'b1lZmWZ6UazCJm0zBjVli',
    path: "Franz Ferdinand/Franz Ferdinand/11 - 40'.mp3"
  },
  {
    id: 'W1acvYXN7WIyxisv1QXBZ',
    path: 'Franz Ferdinand/You Could Have It So Much Better/12 - Fade Together.mp3'
  },
  {
    id: 'yzlU9uWBSp4WsMx8Zkruk',
    path: 'Franz Ferdinand/You Could Have It So Much Better/13 - Outsiders.mp3'
  },
  {
    id: 'TroEXom0lOw2xMB5MmjoU',
    path: "Franz Ferdinand/You Could Have It So Much Better/10 - I'm Your Villain.mp3"
  },
  {
    id: 'MPrpRDZlhzJC0aciCM3BK',
    path: 'Franz Ferdinand/You Could Have It So Much Better/05 - Evil and a Heathen.mp3'
  },
  {
    id: 'LcXt9YQoVVj5JbNYg2NIt',
    path: 'Franz Ferdinand/You Could Have It So Much Better/08 - Well That Was Easy.mp3'
  },
  {
    id: 'qkZvSvQniCLbuyfkT6FyR',
    path: 'Franz Ferdinand/You Could Have It So Much Better/03 - This Boy.mp3'
  },
  {
    id: 'g8gmL8L90jbUMKkxRD4OQ',
    path: 'Franz Ferdinand/You Could Have It So Much Better/07 - Eleanor Put Your Boots On.mp3'
  },
  {
    id: '9VmTDUin3XYEJc7kh9bdn',
    path: 'Franz Ferdinand/You Could Have It So Much Better/04 - Walk Away.mp3'
  },
  {
    id: 'YT47JLwXxxKqKs7d9oDV7',
    path: 'Franz Ferdinand/You Could Have It So Much Better/09 - What You Meant.mp3'
  },
  {
    id: 'ITgwktL5sVB2uOUnRTWVJ',
    path: 'Franz Ferdinand/You Could Have It So Much Better/11 - You Could Have It So Much Better.mp3'
  },
  {
    id: '2giEP0sLoDSWlXCTGiY9P',
    path: 'Franz Ferdinand/You Could Have It So Much Better/01 - The Fallen.mp3'
  },
  {
    id: 'sgDVNlKBNZZIEAx2TctKW',
    path: "Franz Ferdinand/You Could Have It So Much Better/06 - You're the Reason I'm Leaving.mp3"
  },
  {
    id: 'PYWbkIfIJU3mR1Wvo6Kz7',
    path: 'Franz Ferdinand/You Could Have It So Much Better/02 - Do You Want To.mp3'
  },
  {
    id: 'FCL0tkyUpJsSxkouT3Wll',
    path: 'Garbage/Garbage/05 - Garbage - Not My Idea.mp3'
  },
  {
    id: 'IYbonY0AS5tIj0gH3C8VX',
    path: 'Garbage/Garbage/04 - Garbage - As Heaven Is Wide.mp3'
  },
  {
    id: 'ydT14cePOTTDPywaXonyQ',
    path: 'Garbage/Garbage/01 - Garbage - Supervixen.mp3'
  },
  {
    id: '2MOs78BXG4dPRWWrCa7zC',
    path: 'Garbage/Garbage/06 - Garbage - A Stroke Of Luck.mp3'
  },
  {
    id: 'VCires92vZHDAlBANvTQT',
    path: 'Garbage/Garbage/03 - Garbage - Only Happy When It Rains.mp3'
  },
  {
    id: 'wr4XNsufV6bXQf1xPZMOY',
    path: 'Garbage/Garbage/11 - Garbage - Fix Me Now.mp3'
  },
  {
    id: 'aOwJBFM4crB9N14RyWRQk',
    path: 'Garbage/Garbage/07 - Garbage - Vow.mp3'
  },
  {
    id: 'ZX3l3AArZdp9UeaKn1IDW',
    path: "Garbage/Garbage/10 - Garbage - My Lover's Box.mp3"
  },
  {
    id: 'xTbAPUFtWQKx6mvudRWns',
    path: 'Garbage/Garbage/08 - Garbage - Stupid Girl.mp3'
  },
  {
    id: 's1bRhHNPGzEwIQPKNsMnY',
    path: 'Garbage/Garbage/12 - Garbage - Milk.mp3'
  },
  {
    id: 'S2uWTB81B2wfuk1poruI9',
    path: 'Garbage/Garbage/09 - Garbage - Dog New Tricks.mp3'
  },
  {
    id: 'XFuQ7Azkou4cwnlyYKTKo',
    path: 'Garbage/Garbage/02 - Garbage - Queer.mp3'
  },
  {
    id: 'Xbf4bZkOTjk8eOz2Klo7c',
    path: 'Frou Frou/Details/Frou Frou - 05 - Psychobabble.mp3'
  },
  {
    id: 'vVOME51s5GNkhDrsN2j93',
    path: 'Frou Frou/Details/Frou Frou - 07 - Shh.mp3'
  },
  {
    id: 'Dgz3ueLEx78B9nwflNKjN',
    path: 'Frou Frou/Details/Frou Frou - 09 - Maddening Shroud.mp3'
  },
  {
    id: '0dSIPCZPBF2d4zlxsCXbi',
    path: "Frou Frou/Details/Frou Frou - 03 - It's Good To Be In Love.mp3"
  },
  {
    id: 'uQJb1jyTemAKCplaxEf9Q',
    path: 'Frou Frou/Details/Frou Frou - 01 - Let Go.mp3'
  },
  {
    id: '9Aw8MhOMf3wwQWbsBZYwa',
    path: 'Frou Frou/Details/Frou Frou - 10 - Flicks.mp3'
  },
  {
    id: 'SqwFl0GjKXoEhaFFQnZtw',
    path: 'Frou Frou/Details/Frou Frou - 02 - Breathe In.mp3'
  },
  {
    id: 'Y7yfoeycVgc1WliBZKYqG',
    path: 'Frou Frou/Details/Frou Frou - 06 - Only Got One.mp3'
  },
  {
    id: '6tK1fHRAyx7wvaT58GonO',
    path: 'Frou Frou/Details/Frou Frou - 08 - Hear Me Out.mp3'
  },
  {
    id: 'v93tIP8aNQu4BEyOKZE4l',
    path: 'Frou Frou/Details/Frou Frou - 11 - The Dumbing Down Of Love.mp3'
  },
  {
    id: 'wsIlflKFXto6a49TeFSwg',
    path: 'Frou Frou/Details/Frou Frou - 04 - Must Be Dreaming.mp3'
  },
  {
    id: 'JLoREhDaHnLNx2j42HSFC',
    path: "Dubstar/Goodbye/15. Let's Go.mp3"
  },
  {
    id: 'aJBthNYs5nBbU9VMzToq5',
    path: 'Dubstar/Goodbye/01. I Will Be Your Girlfriend.mp3'
  },
  {
    id: '73MjzUTlI4tIQ7rfnA00E',
    path: 'Dubstar/Goodbye/13. Wearchest.mp3'
  },
  {
    id: 'MdKBF8NPcOjnvdfhSOEnF',
    path: 'Dubstar/Goodbye/02. Inside.mp3'
  },
  {
    id: 'IRuymPHFO5qdP1uNX6o4s',
    path: 'Dubstar/Goodbye/05. Say The Worst Thing First.mp3'
  },
  {
    id: 'DwhCp0U7SFcPjAQ0NsVXn',
    path: "Dubstar/Goodbye/10. It's Clear.mp3"
  },
  {
    id: '8IBeRp5QLrPacu7DDjYnK',
    path: 'Dubstar/Goodbye/09. My Start In Wallsend.mp3'
  },
  {
    id: '6ict0dwiEvsqako5y7zkS',
    path: "Dubstar/Goodbye/07. It's Over.mp3"
  },
  {
    id: 'GsVq89Ebrqj0bukBOoiGi',
    path: 'Dubstar/Goodbye/08. The View From Here.mp3'
  },
  {
    id: 'qWDMhc9Vh0wG2PA2Q4xZV',
    path: "Dubstar/Goodbye/12. Can't Tell Me.mp3"
  },
  {
    id: '4LQpo0LrGB0XI7iTqbO2f',
    path: 'Dubstar/Goodbye/11. Ghost.mp3'
  },
  {
    id: 'gLcQFqQgAAcUlTf43cZPK',
    path: 'Dubstar/Goodbye/06. Cathedral Park.mp3'
  },
  {
    id: 'JaAWvgjYKDnHb3rEFjasR',
    path: 'Dubstar/Goodbye/04. Polestar.mp3'
  },
  {
    id: 'hDPNQlr3AROOutfR28jvC',
    path: 'Dubstar/Goodbye/14. When You Say Goodbye.mp3'
  },
  {
    id: 'F70S0vNk28Z4EtH8oDzFF',
    path: 'Dubstar/Goodbye/03. No More Talk.mp3'
  },
  {
    id: 'UDsFEQAQbh3En8YfSMA1z',
    path: 'Harry Styles/Harry Styles/01. Meet Me In The Hallway.mp3'
  },
  {
    id: 'ZTTnA6oBXoTuMaNWLzaNK',
    path: 'Harry Styles/Harry Styles/05. Sweet Creature.mp3'
  },
  {
    id: 'NZERVzmn0jX0awATr2Eef',
    path: 'Harry Styles/Harry Styles/03. Carolina.mp3'
  },
  {
    id: 'KzeHAcDrDETXKiMtjBEZy',
    path: 'Harry Styles/Harry Styles/06. Only Angel.mp3'
  },
  {
    id: '5WLEUDkXc3W46TGCke9Mz',
    path: 'Harry Styles/Harry Styles/08. Ever Since New York.mp3'
  },
  {
    id: 'yJmedhBsBhVavMjXJg0O8',
    path: 'Harry Styles/Harry Styles/10. From The Dining Table.mp3'
  },
  {
    id: 'uQzIhT1zewHPaJ2zYfWBT',
    path: 'Harry Styles/Harry Styles/02. Sign Of The Times.mp3'
  },
  {
    id: '2TSWRHV3CfZHsT1og6r8L',
    path: 'Harry Styles/Harry Styles/09. Woman.mp3'
  },
  {
    id: 'cvVIq7b0tsKOL72F4yhJq',
    path: 'Harry Styles/Harry Styles/04. Two Ghosts.mp3'
  },
  {
    id: 'E82dMr3ojTmcqzwQXvLll',
    path: 'Harry Styles/Harry Styles/07. Kiwi.mp3'
  },
  {
    id: 'K2iv7MMXxG7kWJJYdys9j',
    path: 'Goldfrapp/Black Cherry/03 - Goldfrapp - Black Cherry.mp3'
  },
  {
    id: 'IxbYkIFvYIBqVDgp84Sup',
    path: 'Goldfrapp/Black Cherry/06 - Goldfrapp - Hairy Trees.mp3'
  },
  {
    id: 'sV0o8nwYo7LStHNocF23c',
    path: 'Goldfrapp/Black Cherry/07 - Goldfrapp - Twist.mp3'
  },
  {
    id: 'qqTtk2pjVXGpYo9sIEAWO',
    path: 'Goldfrapp/Black Cherry/08 - Goldfrapp - Strict Machine.mp3'
  },
  {
    id: '2jtFTuHsnOoUQg32anB7o',
    path: 'Goldfrapp/Black Cherry/04 - Goldfrapp - Tiptoe.mp3'
  },
  {
    id: '6TKM5FbGkwqaJdTKcb5ZW',
    path: 'Goldfrapp/Black Cherry/01 - Goldfrapp - Crystalline Green.mp3'
  },
  {
    id: 'jbPhjmEam7vVR6rvsUWif',
    path: 'Goldfrapp/Black Cherry/10 - Goldfrapp - Slippage.mp3'
  },
  {
    id: '9ClaNQBWuPevOcwnS4E4P',
    path: 'Goldfrapp/Black Cherry/02 - Goldfrapp - Train.mp3'
  },
  {
    id: 'ONcbkhVolfUOZ529C2kem',
    path: 'Goldfrapp/Black Cherry/05 - Goldfrapp - Deep Honey.mp3'
  },
  {
    id: 'kCxTF4jEWHWMSswcXBRej',
    path: 'Goldfrapp/Black Cherry/09 - Goldfrapp - Forever.mp3'
  },
  {
    id: 'Vgf6JKFypRBrooDAi2AjW',
    path: 'George Ezra/Wanted on Voyage/06 - Leaving It Up to You.mp3'
  },
  {
    id: '5FHeKdnBUxq5dqcpz9Ufg',
    path: "George Ezra/Wanted on Voyage/03 - Cassy O'.mp3"
  },
  {
    id: 'u1GDOaOBgYkim9SEow5bZ',
    path: 'George Ezra/Wanted on Voyage/16 - Blind Man in Amsterdam.mp3'
  },
  {
    id: 'r2wdbkV6p4waP5QWDmyF3',
    path: 'George Ezra/Wanted on Voyage/10 - Breakaway.mp3'
  },
  {
    id: 'NA8c9MulvJ6rEz23Wg94m',
    path: "George Ezra/Wanted on Voyage/14 - It's Just My Skin.mp3"
  },
  {
    id: '801h0QDpJYNZxV8Vjuakv',
    path: 'George Ezra/Wanted on Voyage/07 - Did You Hear the Rain.mp3'
  },
  {
    id: 'jcR63NKdlc2azaO8v2qfl',
    path: 'George Ezra/Wanted on Voyage/09 - Stand by Your Gun.mp3'
  },
  {
    id: 'gVAQr38aAWaAtqEE9i5JF',
    path: 'George Ezra/Wanted on Voyage/08 - Drawing Board.mp3'
  },
  {
    id: 'MpvPwMACMErQtYQSocGm3',
    path: 'George Ezra/Wanted on Voyage/11 - Over the Creek.mp3'
  },
  {
    id: 'We4cuTh7VnqNFnPGztp88',
    path: 'George Ezra/Wanted on Voyage/02 - Budapest.mp3'
  },
  {
    id: '63z9SO5iUYHR95zJ7gpwT',
    path: 'George Ezra/Wanted on Voyage/01 - Blame It on Me.mp3'
  },
  {
    id: 'Fs48WhO9GO6gasWHgqOkg',
    path: 'George Ezra/Wanted on Voyage/04 - Barcelona.mp3'
  },
  {
    id: 'XmQH3V5eUR2iETc7x8WgE',
    path: 'George Ezra/Wanted on Voyage/12 - Spectacular Rival.mp3'
  },
  {
    id: '2LQpll4FXX7BU3qtEJ4WG',
    path: 'George Ezra/Wanted on Voyage/05 - Listen to the Man.mp3'
  },
  {
    id: 'csKw9SMITTaANhB92CRFT',
    path: 'George Ezra/Wanted on Voyage/15 - Da Vinci Riot Police.mp3'
  },
  {
    id: 'suRkKuSCL6JAVD0Z10tOo',
    path: 'George Ezra/Wanted on Voyage/13 - Song 6.mp3'
  },
  {
    id: 'erwjMw01XaAq1Qp4rwMIZ',
    path: 'Housemartins/Best Of The Housemartins/12 The Housemartins - I Smell Winter.mp3'
  },
  {
    id: '6IF6Hw5QJarmGhhWQyckS',
    path: 'Housemartins/Best Of The Housemartins/02 The Housemartins - Five Get Over Excited.mp3'
  },
  {
    id: 'NaVZstEJMBPdVtWt7tNYP',
    path: 'Housemartins/Best Of The Housemartins/09 The Housemartins - There Is Always Something There To Remind Me.mp3'
  },
  {
    id: 'bFXy6nXGxxoqljFJuavrc',
    path: 'Housemartins/Best Of The Housemartins/10 The Housemartins - Anxious.mp3'
  },
  {
    id: '34vlVpyohvXJoXs2xzHDp',
    path: 'Housemartins/Best Of The Housemartins/08 The Housemartins - Build.mp3'
  },
  {
    id: 'LrYAGhXFcem7T05YptRct',
    path: 'Housemartins/Best Of The Housemartins/06 The Housemartins - Flag Day (Single Version).mp3'
  },
  {
    id: 'Wuq5rHZGqVJRZESa73gG1',
    path: 'Housemartins/Best Of The Housemartins/05 The Housemartins - Me and The Farmer.mp3'
  },
  {
    id: 'Dy21bGnMBs8bV0fNG0j3P',
    path: 'Housemartins/Best Of The Housemartins/01 The Housemartins - Happy Hour.mp3'
  },
  {
    id: 'nBk4HpPT4Of63tHSQsBJs',
    path: 'Housemartins/Best Of The Housemartins/13 The Housemartins - The People Who Grinned Themselves To Death.mp3'
  },
  {
    id: 'iGwgfK4jJGFLoEoELJfRC',
    path: "Housemartins/Best Of The Housemartins/14 The Housemartins - I'll Be Your Shelter (Just Like A Shelter).mp3"
  },
  {
    id: 'V0FL5qhHxAggHw1PH1AMH',
    path: 'Housemartins/Best Of The Housemartins/11 The Housemartins - Hopelessly Devoted To Them.mp3'
  },
  {
    id: 'r6XushVSA1eDgKPOWnsDs',
    path: 'Housemartins/Best Of The Housemartins/07 The Housemartins - Sheep.mp3'
  },
  {
    id: 'nZVzAaPYfviHHvdnr9j9k',
    path: 'Housemartins/Best Of The Housemartins/03 The Housemartins - Caravan Of Love.mp3'
  },
  {
    id: 'j0rG3HICaK8y86o1H1fAD',
    path: 'Housemartins/Best Of The Housemartins/04 The Housemartins - Think For A Minute.mp3'
  },
  {
    id: 'UpluPsk4Ri7hXbLEXYBI2',
    path: 'Idlewild/100 Broken Windows/Little Discourage.mp3'
  },
  {
    id: 'FfYS99I4ec0hBGUZYtLUe',
    path: 'Idlewild/100 Broken Windows/Mistake Pageant.mp3'
  },
  {
    id: 'lLLeBCetJVQAgemYbVFeB',
    path: 'Idlewild/100 Broken Windows/Bronze Medal.mp3'
  },
  {
    id: 'tH1RXGArZ9IehpEgxm2fH',
    path: 'Idlewild/100 Broken Windows/Rusty.mp3'
  },
  {
    id: 'jiDbmTJcC6u5MRS05MYsU',
    path: 'Idlewild/100 Broken Windows/Let Me Sleep (Next To The Mirror).mp3'
  },
  {
    id: 'qvWzQSNsUf7eq0JwKXihr',
    path: 'Idlewild/100 Broken Windows/These Wooden Ideas.mp3'
  },
  {
    id: 'FbRYVvzj2ljEfAfokqrzU',
    path: "Idlewild/100 Broken Windows/Actually It's Darkness.mp3"
  },
  {
    id: 'wNEALG9Bx6G6mAeVAK1zM',
    path: "Idlewild/100 Broken Windows/Listen To What You've Got.mp3"
  },
  {
    id: 'zDdoT1vnWR13iEUNl0Kz7',
    path: "Idlewild/100 Broken Windows/I Don't Have The Map.mp3"
  },
  {
    id: 'e4A9TXIZUceiIJJyAIZo3',
    path: 'Idlewild/100 Broken Windows/Roseability.mp3'
  },
  {
    id: 'MArktoQdFAyEsppRQe8EU',
    path: 'Idlewild/100 Broken Windows/Quiet Crown.mp3'
  },
  {
    id: 'RZSkTzOcyBCuEWZQW5KaA',
    path: "Heart/These Dreams Heart's Greatest Hits/16 Heart - These Dreams.mp3"
  },
  {
    id: 'ZhGYjqSHu4eJLZq5eMZa9',
    path: "Heart/These Dreams Heart's Greatest Hits/14 Heart - Stranded.mp3"
  },
  {
    id: '63jJ186PQ1ZsYcRbdqw7E',
    path: "Heart/These Dreams Heart's Greatest Hits/05 Heart - Alone.mp3"
  },
  {
    id: 'e13JeVBRXEHBWM3B56JIH',
    path: "Heart/These Dreams Heart's Greatest Hits/15 Heart - Will You Be There (In The Morning).mp3"
  },
  {
    id: 'ioIEd78ZQgqR0EW7mfZCT',
    path: "Heart/These Dreams Heart's Greatest Hits/02 Heart - All I Wanna Do Is Make Love To You.mp3"
  },
  {
    id: 'lurX9GMlMaBKUyAud2KOO',
    path: "Heart/These Dreams Heart's Greatest Hits/09 Heart - What About Love.mp3"
  },
  {
    id: '7CxUqKa9MAgCxnmsrQuCb',
    path: "Heart/These Dreams Heart's Greatest Hits/08 Heart - Magic Man.mp3"
  },
  {
    id: 'egy0IxH9pmfoogaZU8eA6',
    path: "Heart/These Dreams Heart's Greatest Hits/10 Heart - Dreamboat Annie.mp3"
  },
  {
    id: 'PpXDNM2lfxf1qRCgzxda4',
    path: "Heart/These Dreams Heart's Greatest Hits/07 Heart - Straight On (Acoustic).mp3"
  },
  {
    id: 'aDr2MKKyq22lsGWqxbPQD',
    path: "Heart/These Dreams Heart's Greatest Hits/03 Heart - If Looks Could Kill.mp3"
  },
  {
    id: 'jAfxQwLApZQRSiGGtpvGA',
    path: "Heart/These Dreams Heart's Greatest Hits/06 Heart - Who Will You Run To.mp3"
  },
  {
    id: 'OAuLmBRqj4gCdtNQXOPoa',
    path: "Heart/These Dreams Heart's Greatest Hits/12 Heart - Nothin' At All.mp3"
  },
  {
    id: 'rjWyB9Zo9MbqYjZrChoPC',
    path: "Heart/These Dreams Heart's Greatest Hits/11 Heart - Dog and Butterfly (Acoustic).mp3"
  },
  {
    id: 'GAIdhT1S9eP3fPIImdxpf',
    path: "Heart/These Dreams Heart's Greatest Hits/17 Heart - Barracuda (Live).mp3"
  },
  {
    id: 'EC23urJ5GVwQ9lDzbGjBA',
    path: "Heart/These Dreams Heart's Greatest Hits/13 Heart - Heartless.mp3"
  },
  {
    id: 'k97Qj11YSk1a3K4qsX7ox',
    path: "Heart/These Dreams Heart's Greatest Hits/01 Heart - Crazy On You.mp3"
  },
  {
    id: '96gXgZ2ZZ1HWWzeHtGYmU',
    path: "Heart/These Dreams Heart's Greatest Hits/04 Heart - Never.mp3"
  },
  {
    id: 'RUALTOiaAOk4eZgmBl8G2',
    path: 'Idlewild/Hope Is important/Safe And Sound.mp3'
  },
  {
    id: 'vKtuCC0xiZZxMYftZgAy9',
    path: 'Idlewild/Hope Is important/Low Light.mp3'
  },
  {
    id: 'T7FuPf0Ot4hM8X6gDNWfW',
    path: 'Idlewild/Hope Is important/Paint Nothing.mp3'
  },
  {
    id: 'Wzb0aktH8bRCGpagd3UWS',
    path: "Idlewild/Hope Is important/You Don't Have The Heart.mp3"
  },
  {
    id: 'FpJxF8gcV4PWJmESqHs02',
    path: 'Idlewild/Hope Is important/4 People Do Good.mp3'
  },
  {
    id: 'fnXhbFhjpq5VpuB0gvDlt',
    path: 'Idlewild/Hope Is important/A Film For The Future.mp3'
  },
  {
    id: 'N3SvsVr62W1YTFHfnCDPh',
    path: 'Idlewild/Hope Is important/Close The Door.mp3'
  },
  {
    id: '1VPsFi8bucoaItXN8hSMR',
    path: 'Idlewild/Hope Is important/When I Argue I See Shapes.mp3'
  },
  {
    id: 'JJdB0wG97JQQmU588q07l',
    path: "Idlewild/Hope Is important/You've Lost Your Way.mp3"
  },
  {
    id: 'FWRPWATNwWoQ0L36ryVn0',
    path: "Idlewild/Hope Is important/I'm A Message.mp3"
  },
  {
    id: '2UmqWk1Zwx4xIpVEMjSje',
    path: "Idlewild/Hope Is important/Everyone Says You're So Fragile.mp3"
  },
  {
    id: 'f4TSDHk0gs0ilBxYeAH1J',
    path: "Idlewild/Hope Is important/I'm Happy To Be Here Tonight.mp3"
  },
  {
    id: 'ID30xMCxRSb1uSsKcpVUV',
    path: 'Incubus/Make Yourself/13 - Incubus - Out From Under.mp3'
  },
  {
    id: 'ClJvjoIpXJVtG7NHjjq2M',
    path: 'Incubus/Make Yourself/10 - Incubus - Battlestar Scralatchtica.mp3'
  },
  {
    id: 'Ipo3BndNclVrjAk5TBbWM',
    path: 'Incubus/Make Yourself/12 - Incubus - Pardon Me.mp3'
  },
  {
    id: 'iCOraUl0BEvpYXCHH9g2d',
    path: 'Incubus/Make Yourself/04 - Incubus - The Warmth.mp3'
  },
  {
    id: '6NhcN7eGRfq2PCtl1WZSO',
    path: 'Incubus/Make Yourself/11 - Incubus - I Miss You.mp3'
  },
  {
    id: 'JtQAzFM7u201L6St9TVCz',
    path: 'Incubus/Make Yourself/07 - Incubus - Make Yourself.mp3'
  },
  {
    id: '3LnxoS0MiGwlYwLJgs20X',
    path: 'Incubus/Make Yourself/06 - Incubus - Stellar.mp3'
  },
  {
    id: '65gwrd86edW8XwgG3GfAv',
    path: 'Incubus/Make Yourself/08 - Incubus - Drive.mp3'
  },
  {
    id: 'c5jGOXP4aVzpTytqJAY7a',
    path: 'Incubus/Make Yourself/01 - Incubus - Privilege.mp3'
  },
  {
    id: 'Mq3qF2TrYcRW1hosldjFi',
    path: 'Incubus/Make Yourself/03 - Incubus - Consequence.mp3'
  },
  {
    id: 'ZwwtRDYYIrNJZvekXvm45',
    path: 'Incubus/Make Yourself/05 - Incubus - When It Comes.mp3'
  },
  {
    id: 'Zj4RfEPYaBDxTc7Kw3BxU',
    path: 'Incubus/Make Yourself/02 - Incubus - Nowhere Fast.mp3'
  },
  {
    id: 'lL8o3l9LBaG5SZIf1NYct',
    path: 'Incubus/Make Yourself/09 - Incubus - Clean.mp3'
  },
  {
    id: 'pKIDThRvhxk8dhyeIUseQ',
    path: "James/The Best of James/03. James - She's A Star.mp3"
  },
  {
    id: 'Zx908jYhYqaEKMq9pjmaH',
    path: 'James/The Best of James/18. James - Hymn From A Village.mp3'
  },
  {
    id: 'C3NxhxqKg4syT9WIsezww',
    path: 'James/The Best of James/08. James - Tomorrow.mp3'
  },
  {
    id: 'hDC9LGXx1KuHKL94dRPpp',
    path: 'James/The Best of James/13. James - Sometimes.mp3'
  },
  {
    id: '7owPtymv7bNZpjKifBngu',
    path: 'James/The Best of James/17. James - Ring the Bells.mp3'
  },
  {
    id: '2gEtwXGf1C3IzmQsol3uj',
    path: 'James/The Best of James/07. James - Born Of Frustration.mp3'
  },
  {
    id: 'C5wFZ9slNvNKDcDXoZaLV',
    path: 'James/The Best of James/02. James - Sit Down.mp3'
  },
  {
    id: 'zkZUUdqntcK1igoVoIqVu',
    path: 'James/The Best of James/04. James - Laid.mp3'
  },
  {
    id: 'wQE1Rog2hybXepIPP1VrA',
    path: 'James/The Best of James/06. James - Say Something.mp3'
  },
  {
    id: '9FbuKz4XdHhqaoFpEfRkW',
    path: 'James/The Best of James/15. James - Seven.mp3'
  },
  {
    id: 'XGbY1nmQpRgXucRkuiuxX',
    path: 'James/The Best of James/10. James - Out To Get You.mp3'
  },
  {
    id: 'WeKL8NxhA0NKIxeGscm9x',
    path: 'James/The Best of James/11. James - Runaground.mp3'
  },
  {
    id: 'U2NaW9KPY3jWkXbhM7t0I',
    path: 'James/The Best of James/05. James - Waltzing Along (Single Version).mp3'
  },
  {
    id: '8RCbE3WdcepTskPYnJNwK',
    path: 'James/The Best of James/16. James - Sound.mp3'
  },
  {
    id: 'ZAKhblHpb4uv92NdHoILa',
    path: 'James/The Best of James/09. James - Destiny Calling.mp3'
  },
  {
    id: 'NVgGTKYug8dDygM4CxwkO',
    path: 'James/The Best of James/01. James - Come Home.mp3'
  },
  {
    id: 'ddyorSM3viuS1YtoJapFb',
    path: 'James/The Best of James/14. James - How Was It For You  .mp3'
  },
  {
    id: 'H3ByZvlicoFmiVQppaa1N',
    path: 'James/The Best of James/12. James - Lose Control.mp3'
  },
  {
    id: 'QKxun2ZHLj8OHkHPdLj8u',
    path: "John Lennon/Imagine/05 - John Lennon a - I Don't Wanna Be A Soldier Mama.mp3"
  },
  {
    id: 'EskOX3EuwaPrNqzL1CCyM',
    path: 'John Lennon/Imagine/06 - John Lennon a - Gimme Some Truth.mp3'
  },
  {
    id: 'LipddaDNcsj1OQovgMyvc',
    path: 'John Lennon/Imagine/08 - John Lennon a - How Do You Sleep.mp3'
  },
  {
    id: 'yPWxcoZNRQtGbpM6bmDTd',
    path: "John Lennon/Imagine/04 - John Lennon a - It's So Hard.mp3"
  },
  {
    id: 'mVNKz5mZ5Lz8piS3biUvx',
    path: 'John Lennon/Imagine/03 - John Lennon a - Jealous Guy.mp3'
  },
  {
    id: 'AkdXsNa4T1OKPx14koAH2',
    path: 'John Lennon/Imagine/09 - John Lennon a - How.mp3'
  },
  {
    id: 'fbzwhH7oh31AtOoBzP0Rg',
    path: 'John Lennon/Imagine/01 - John Lennon a - Imagine.mp3'
  },
  {
    id: 'TwSAYEGHeTQpGvTBaZxH7',
    path: 'John Lennon/Imagine/02 - John Lennon a - Crippled Inside.mp3'
  },
  {
    id: '0yvFL4RHtXwsha8c7Fms6',
    path: 'John Lennon/Imagine/07 - John Lennon a - Oh My Love.mp3'
  },
  {
    id: 'ajEBlwvfVhozplFVAgM7K',
    path: 'John Lennon/Imagine/10 - John Lennon a - Oh Yoko!.mp3'
  },
  {
    id: '0JUti4dArwJiT862KXr8G',
    path: 'Jess Glynne/I Cry When I Laugh/12 No Rights No Wrongs.mp3'
  },
  {
    id: 'DqxSe3qI3SUQqAuC9mSxz',
    path: "Jess Glynne/I Cry When I Laugh/11 It Ain't Right.mp3"
  },
  {
    id: 'lbQprOFvdGmSbSM03xXcn',
    path: 'Jess Glynne/I Cry When I Laugh/15 Home.mp3'
  },
  {
    id: 'n2XkCFY1QS8oIIzKqAmWG',
    path: 'Jess Glynne/I Cry When I Laugh/10 Love Me.mp3'
  },
  {
    id: 'Mmw1vr88DfCD1StAUmjU4',
    path: 'Jess Glynne/I Cry When I Laugh/18 Not Letting Go (Feat.Jess Glynne).mp3'
  },
  {
    id: 'lTLpD1G23qX5bsSdLyhck',
    path: 'Jess Glynne/I Cry When I Laugh/13 Saddest Vanilla (Feat.Emeli Sandé).mp3'
  },
  {
    id: 'O720e7tzmZtpaMj8xnNl8',
    path: 'Jess Glynne/I Cry When I Laugh/09 Why Me.mp3'
  },
  {
    id: 'aCus5rIZCMM310I7LlaNq',
    path: 'Jess Glynne/I Cry When I Laugh/14 Right Here.mp3'
  },
  {
    id: 'Njwl1lGzgwU5jsjJprKeK',
    path: 'Jess Glynne/I Cry When I Laugh/06 Take Me Home.mp3'
  },
  {
    id: 'U0eaOivBwqIPpyb4UjvDw',
    path: 'Jess Glynne/I Cry When I Laugh/19 Rather Be (Feat.Jess Glynne).mp3'
  },
  {
    id: 'tUtRsA6dr9im9AqGwBf34',
    path: 'Jess Glynne/I Cry When I Laugh/20 My Love (Feat.Jess Glynne).mp3'
  },
  {
    id: 'IX5RYShM9NMpdLEWwL5tA',
    path: 'Jess Glynne/I Cry When I Laugh/04 Real Love.mp3'
  },
  {
    id: 'Dy76FkenPyOoqWx9oPQr5',
    path: 'Jess Glynne/I Cry When I Laugh/08 You Can Find Me.mp3'
  },
  {
    id: 'VwZABxPOWkYwyTdKI7RlQ',
    path: 'Jess Glynne/I Cry When I Laugh/16 Bad Blood.mp3'
  },
  {
    id: '3W2VhFxBJOEw8Hme3ATZI',
    path: 'Jess Glynne/I Cry When I Laugh/03 Hold My Hand.mp3'
  },
  {
    id: 'g9oqts3Idcv9z5OkqDYLN',
    path: 'Jess Glynne/I Cry When I Laugh/17 My Love (Acoustic).mp3'
  },
  {
    id: '9v9UVsTmrOta3RNpUWRyu',
    path: 'Jess Glynne/I Cry When I Laugh/01 Strawberry Fields.mp3'
  },
  {
    id: 'FrDGfhd2rEthe2fEnEZ5g',
    path: "Jess Glynne/I Cry When I Laugh/05 Ain't Got Far To Go.mp3"
  },
  {
    id: '506pdHFaDBwffqlt6dDqW',
    path: 'Jess Glynne/I Cry When I Laugh/02 Gave Me Something.mp3'
  },
  {
    id: 'JOzF78xl8yjquumf8pTgR',
    path: "Jess Glynne/I Cry When I Laugh/07 Don't Be So Hard On Yourself.mp3"
  },
  {
    id: 'YkxQpyrcDG6Ohcux0KSht',
    path: 'Kasabian/Empire (2006)/05 Sun Rise Light Flies.mp3'
  },
  {
    id: 'GTdekSpDFdZ5wTYy5B4lC',
    path: 'Kasabian/Empire (2006)/07 By My Side.mp3'
  },
  {
    id: 'zyvoviCW7rHKKfNywbNSf',
    path: 'Kasabian/Empire (2006)/06 Apnoea.mp3'
  },
  {
    id: 'TXo8snTGB9yh7rWHCv50h',
    path: 'Kasabian/Empire (2006)/10 British Legion.mp3'
  },
  {
    id: 'G7MMqknpEqgZQ9ARt28iu',
    path: 'Kasabian/Empire (2006)/03 Last Trip (In Flight).mp3'
  },
  {
    id: 'bGySTCZBJdzrAqLVybHte',
    path: 'Kasabian/Empire (2006)/13 Heroes.mp3'
  },
  {
    id: 'PE4qQUGT2kh2A167G481c',
    path: 'Kasabian/Empire (2006)/11 The Doberman.mp3'
  },
  {
    id: 'QMwY3CasHpYfKBlyq7hYj',
    path: 'Kasabian/Empire (2006)/12 Ketang.mp3'
  },
  {
    id: 'aEIiqOLMoU7PEpPpT82eE',
    path: 'Kasabian/Empire (2006)/09 Seek & Destroy.mp3'
  },
  {
    id: 'o7sbH1DpWMB1OJnR6P58m',
    path: 'Kasabian/Empire (2006)/02 Shoot The Runner.mp3'
  },
  {
    id: 'bH3Yd1DPzakaQZ62a9Is1',
    path: 'Kasabian/Empire (2006)/08 Stuntman.mp3'
  },
  {
    id: 'oqvjYn1tII5Uxg5XqFPih',
    path: 'Kasabian/Empire (2006)/01 Empire.mp3'
  },
  {
    id: 'SltfKL4emlBsA70fkPOBi',
    path: 'Kasabian/Empire (2006)/04 Me Plus One.mp3'
  },
  {
    id: 'uJWnubfyKDxGNYufpWu4N',
    path: 'Jimi Hendrix/Experience Hendrix The Best Of Jimi Hendrix/09 - Jimi Hendrix - Little Wing.mp3'
  },
  {
    id: 'OoH0wgQnwEuW1cKgc9ijd',
    path: 'Jimi Hendrix/Experience Hendrix The Best Of Jimi Hendrix/11 - Jimi Hendrix - Foxy Lady.mp3'
  },
  {
    id: 'v9lO33EHc97ntUphyI3dC',
    path: 'Jimi Hendrix/Experience Hendrix The Best Of Jimi Hendrix/08 - Jimi Hendrix - Manic Depression.mp3'
  },
  {
    id: 'y6cVkS8YRK82nkrD0Y0i5',
    path: 'Jimi Hendrix/Experience Hendrix The Best Of Jimi Hendrix/04 - Jimi Hendrix - Hey Joe.mp3'
  },
  {
    id: 'OnipeqMSxC5ze1RglZerF',
    path: 'Jimi Hendrix/Experience Hendrix The Best Of Jimi Hendrix/15 - Jimi Hendrix - Voodoo Child (Slight Return).mp3'
  },
  {
    id: 'FurUyXit2Ps0ggcQ2aRzw',
    path: 'Jimi Hendrix/Experience Hendrix The Best Of Jimi Hendrix/03 - Jimi Hendrix - The Wind Cries Mary.mp3'
  },
  {
    id: 'D58Hdgf5RQ5IP95vR5Itr',
    path: 'Jimi Hendrix/Experience Hendrix The Best Of Jimi Hendrix/12 - Jimi Hendrix - Bold As Love.mp3'
  },
  {
    id: 'ZbJ9pfwIIaWsNVyW7iQy8',
    path: 'Jimi Hendrix/Experience Hendrix The Best Of Jimi Hendrix/19 - Jimi Hendrix - Dolly Dagger.mp3'
  },
  {
    id: 'EYptCMlan14xzT6EhaMMN',
    path: 'Jimi Hendrix/Experience Hendrix The Best Of Jimi Hendrix/17 - Jimi Hendrix - Night Bird Flying.mp3'
  },
  {
    id: 'XBgm2wpXNLy1hv13YlJfr',
    path: 'Jimi Hendrix/Experience Hendrix The Best Of Jimi Hendrix/06 - Jimi Hendrix - Stone Free.mp3'
  },
  {
    id: 'IwhkZgk0AKJ9hKxuE1wMB',
    path: 'Jimi Hendrix/Experience Hendrix The Best Of Jimi Hendrix/01 - Jimi Hendrix - Purple Haze.mp3'
  },
  {
    id: 'Kyv4ueMRN3uqAREOiMeEx',
    path: 'Jimi Hendrix/Experience Hendrix The Best Of Jimi Hendrix/20 - Jimi Hendrix - Star Spangled Banner.mp3'
  },
  {
    id: 'ixPEj8MQKJXGMpwLbN4Uf',
    path: 'Jimi Hendrix/Experience Hendrix The Best Of Jimi Hendrix/13 - Jimi Hendrix - Castles Made Of Sand.mp3'
  },
  {
    id: 'CPApJXtnpB2hQeauiT3Hq',
    path: 'Jimi Hendrix/Experience Hendrix The Best Of Jimi Hendrix/10 - Jimi Hendrix - If 6 Was 9.mp3'
  },
  {
    id: 'TZYpC1p20uQ5k8mFKEbmG',
    path: 'Jimi Hendrix/Experience Hendrix The Best Of Jimi Hendrix/18 - Jimi Hendrix - Angel.mp3'
  },
  {
    id: 'jU4OkdAGpPmPCaeDngZce',
    path: 'Jimi Hendrix/Experience Hendrix The Best Of Jimi Hendrix/07 - Jimi Hendrix - Crosstown Traffic.mp3'
  },
  {
    id: 'bgVxMyoRuSFKvU0kxLNgb',
    path: 'Jimi Hendrix/Experience Hendrix The Best Of Jimi Hendrix/14 - Jimi Hendrix - Red House.mp3'
  },
  {
    id: 'pSzM5R1sY4ZCP7YQsvHRT',
    path: 'Jimi Hendrix/Experience Hendrix The Best Of Jimi Hendrix/05 - Jimi Hendrix - All Along The Watchtower.mp3'
  },
  {
    id: 'v1brqywPfeskiMqUVnjSO',
    path: 'Jimi Hendrix/Experience Hendrix The Best Of Jimi Hendrix/02 - Jimi Hendrix - Fire.mp3'
  },
  {
    id: 'AiWnQhBFDgfQzbT936P8u',
    path: 'Jimi Hendrix/Experience Hendrix The Best Of Jimi Hendrix/16 - Jimi Hendrix - Freedom.mp3'
  },
  {
    id: 'DJQRRAx0tvV9jz2DPqpGv',
    path: 'John Lennon/Lennon Legend/09 - John Lennon - Whatever Gets You Thru The Night.mp3'
  },
  {
    id: 'vE9k8prqP7qOnfMSpEhPp',
    path: 'John Lennon/Lennon Legend/04 - John Lennon - Jealous Guy.mp3'
  },
  {
    id: 'ZMuhEHQds9Uy2e7EZ91De',
    path: 'John Lennon/Lennon Legend/01 - John Lennon - Imagine.mp3'
  },
  {
    id: '6CMHAvRYSARIoC0zRAZ8P',
    path: 'John Lennon/Lennon Legend/10 - John Lennon - #9 Dream.mp3'
  },
  {
    id: 'miyyW2HI2odBGJcSPIK8w',
    path: 'John Lennon/Lennon Legend/19 - John Lennon - Happy Xmas (War Is Over).mp3'
  },
  {
    id: 'XSnWCj6SamxB1Cl3B0MPE',
    path: 'John Lennon/Lennon Legend/20 - John Lennon - Give Peace A Chance.mp3'
  },
  {
    id: 'hMmgwrDis0BI7LFq1df3g',
    path: 'John Lennon/Lennon Legend/15 - John Lennon - Watching The Wheels.mp3'
  },
  {
    id: 'AzhpP1toQi9SlEhPGIqMy',
    path: 'John Lennon/Lennon Legend/05 - John Lennon - Power To The People.mp3'
  },
  {
    id: 'PRPXxntsEN4y5pbytQ94A',
    path: 'John Lennon/Lennon Legend/18 - John Lennon - Working Class Hero.mp3'
  },
  {
    id: 'LxV7akQbrnXoz9ljrXPKo',
    path: 'John Lennon/Lennon Legend/11 - John Lennon - Stand By Me.mp3'
  },
  {
    id: 'rjTRhtWLODZHknTasTgZ7',
    path: 'John Lennon/Lennon Legend/16 - John Lennon - Nobody Told Me.mp3'
  },
  {
    id: 'zvvUA579m9UOw8RQH2Mro',
    path: 'John Lennon/Lennon Legend/13 - John Lennon - Woman.mp3'
  },
  {
    id: 'MuULxkMNBRnf7LPVKROpw',
    path: 'John Lennon/Lennon Legend/12 - John Lennon - (Just Like) Starting Over.mp3'
  },
  {
    id: 'uXcCoJ8dVpjgkGXKQXgVd',
    path: 'John Lennon/Lennon Legend/06 - John Lennon - Cold Turkey.mp3'
  },
  {
    id: 'SwL1eQDb9fvYLaBWdMCyn',
    path: 'John Lennon/Lennon Legend/14 - John Lennon - Beautiful Boy (Darling Boy).mp3'
  },
  {
    id: 'dTUrBu9mv6fHatxoKpttu',
    path: 'John Lennon/Lennon Legend/08 - John Lennon - Mind Games.mp3'
  },
  {
    id: 'vGPYyyoVJRK8hc4oMQTHG',
    path: 'John Lennon/Lennon Legend/03 - John Lennon - Mother (single edit).mp3'
  },
  {
    id: 'eWwok5YDAmBBi7hIfyLL9',
    path: 'John Lennon/Lennon Legend/07 - John Lennon - Love.mp3'
  },
  {
    id: 'AAgQSDtCL3WMIVDLWK14Z',
    path: 'John Lennon/Lennon Legend/17 - John Lennon - Borrowed Time.mp3'
  },
  {
    id: 'jxDBqxPW6qalvp4wp5rRj',
    path: 'John Lennon/Lennon Legend/02 - John Lennon - Instant Karma!.mp3'
  },
  {
    id: '390y1v5a1zH5HCLdLIKUY',
    path: 'Kasabian/Kasabian (2004)/12 Ovary Stripe.mp3'
  },
  {
    id: 'ArkXbrOX6cdyIkxQ5tNfl',
    path: 'Kasabian/Kasabian (2004)/05 Orange (Interlude).mp3'
  },
  {
    id: 'PM208U8tdj2eCHb0Cr8eI',
    path: 'Kasabian/Kasabian (2004)/01 Club Foot.mp3'
  },
  {
    id: 'CvdqPRsr6GkH6QACYtOhh',
    path: 'Kasabian/Kasabian (2004)/08 Test Transmission.mp3'
  },
  {
    id: 'J41s06X0CpQgSvudVJLoJ',
    path: 'Kasabian/Kasabian (2004)/10 Cutt Off.mp3'
  },
  {
    id: '2DmfD1uj8yzyM8uPHOkjr',
    path: 'Kasabian/Kasabian (2004)/02 Processed Beats.mp3'
  },
  {
    id: 'cC5K2aTl7yLV2jihJTBrF',
    path: 'Kasabian/Kasabian (2004)/07 Running Battle.mp3'
  },
  {
    id: 'f6yKf1XuZEJG7MYyqGpRy',
    path: 'Kasabian/Kasabian (2004)/13 Reason Is Treason (Jacknife Lee V.mp3'
  },
  {
    id: 'giWNIl2TpAJgtOhfyICWi',
    path: 'Kasabian/Kasabian (2004)/09 Pinch Roller (Interlude).mp3'
  },
  {
    id: 'tiNxwjmUPjMaiJqF7KKw3',
    path: 'Kasabian/Kasabian (2004)/11 Butcher Blues.mp3'
  },
  {
    id: 'Lu6hGlanmm3H4Z97aLsKt',
    path: 'Kasabian/Kasabian (2004)/14 U Boat.mp3'
  },
  {
    id: 'L8hPg9Lv7LhQaQHsejpUl',
    path: 'Kasabian/Kasabian (2004)/06 L.S.F..mp3'
  },
  {
    id: 'MqOOCjQY2CXv2iLhKx65B',
    path: 'Kasabian/Kasabian (2004)/04 I.D..mp3'
  },
  {
    id: 'fo9jBt8r4zUCrRJN8z0RO',
    path: 'Kasabian/Kasabian (2004)/03 Reason Is Treason.mp3'
  },
  {
    id: 'jZyIJ35nwidNH6rtocizE',
    path: 'Leftfield/Leftism/04 - Song Of Life.mp3'
  },
  {
    id: 'ajNHG2thBT58h5MPUh4rU',
    path: 'Leftfield/Leftism/01 - Release The Pressure.mp3'
  },
  {
    id: 'Pz6SJrxkCEU0JHfTywc3Q',
    path: 'Leftfield/Leftism/03 - Melt.mp3'
  },
  {
    id: '0VUQx264IFakF730d4nbx',
    path: 'Leftfield/Leftism/11 - 21st Century Poem.mp3'
  },
  {
    id: 'oeH3xhFfWtf5wAboSV3fI',
    path: 'Leftfield/Leftism/02 - Afro-Left.mp3'
  },
  {
    id: 'tSJ40jI0km5uvcC7K8rE0',
    path: 'Leftfield/Leftism/05 - Original.mp3'
  },
  {
    id: 'O94CTXayel0LYx2ZEMo44',
    path: 'Leftfield/Leftism/07 - Space Shanty.mp3'
  },
  {
    id: 'mdJCIbCQWHasjgWJMuuQF',
    path: 'Leftfield/Leftism/08 - Inspection [Check One].mp3'
  },
  {
    id: 'feEjRIMjkN7F14jY7eCHy',
    path: 'Leftfield/Leftism/09 - Storm 3000.mp3'
  },
  {
    id: 'CeFvqnCJJW4qq3Y9M8i0m',
    path: 'Leftfield/Leftism/06 - Black Flute.mp3'
  },
  {
    id: 'zyBUNg0lCXJWHBKn44VPj',
    path: 'Leftfield/Leftism/10 - Open Up.mp3'
  },
  {
    id: 'ItDQuJ8LGi72KREzpSanX',
    path: 'Madonna/Ray of light/06 - Madonna - Nothing really matters.mp3'
  },
  {
    id: '9Owp57UdGZ1MG4SxMn7Qx',
    path: 'Madonna/Ray of light/13 - Madonna - Mer girl.mp3'
  },
  {
    id: 'y9UfugMw1JySUfqIiGzWA',
    path: 'Madonna/Ray of light/10 - Madonna - The power of good-bye.mp3'
  },
  {
    id: 'LYN2ov2MIhIboHqkekoFQ',
    path: 'Madonna/Ray of light/11 - Madonna - To have and not to hold.mp3'
  },
  {
    id: 'qfwq91Nkrd0EGuPJVyphS',
    path: 'Madonna/Ray of light/02 - Madonna - Swim.mp3'
  },
  {
    id: 'H0BbGJNC1yk0zqmYGGO5L',
    path: 'Madonna/Ray of light/12 - Madonna - Little star.mp3'
  },
  {
    id: 'AbTCBkVZdSlUNmT8oT97g',
    path: 'Madonna/Ray of light/01 - Madonna - Drowned world - Substitute for love.mp3'
  },
  {
    id: 'sneIadZNXKfiQ5I1jy1dN',
    path: 'Madonna/Ray of light/07 - Madonna - Sky fits heaven.mp3'
  },
  {
    id: 'bhcPSO893WASXF8Qz60gG',
    path: 'Madonna/Ray of light/05 - Madonna - Skin.mp3'
  },
  {
    id: 'kFWnoyzU6T7LhZuaTbOP8',
    path: 'Madonna/Ray of light/09 - Madonna - Frozen.mp3'
  },
  {
    id: 'QwwerwE303lvZTw7vTgC2',
    path: 'Madonna/Ray of light/04 - Madonna - Candy perfume girl.mp3'
  },
  {
    id: '9phTGwtkJMUpxmxw3MpMs',
    path: 'Madonna/Ray of light/03 - Madonna - Ray of light.mp3'
  },
  {
    id: '90jzlRVghKvcE4poKBlm5',
    path: 'Madonna/Ray of light/08 - Madonna - Shanti - Ashtangi.mp3'
  },
  {
    id: 'soDq0bVXnQep5pOSULpWg',
    path: 'Manic Street Preachers/Gold Against The Soul/09 - Manic Street Preachers - Symphony Of Tourette.mp3'
  },
  {
    id: 'fyobh2VwN60GbFmlBr1Ix',
    path: 'Manic Street Preachers/Gold Against The Soul/02 - Manic Street Preachers - From Despair To Where.mp3'
  },
  {
    id: 'eLEF6CaKNtFwD7FNeVHzq',
    path: 'Manic Street Preachers/Gold Against The Soul/05 - Manic Street Preachers - Life Becoming A Landslide.mp3'
  },
  {
    id: 'y9fl9QeJYaEkY5Vs80Mp8',
    path: 'Manic Street Preachers/Gold Against The Soul/03 - Manic Street Preachers - La Tristesse Durera (Scream To A Sigh).mp3'
  },
  {
    id: '2ZDDkhGy2XBNSkA1F4mIW',
    path: 'Manic Street Preachers/Gold Against The Soul/04 - Manic Street Preachers - Yourself.mp3'
  },
  {
    id: '1q7CL7TCBj5KmJS4i1Vhg',
    path: 'Manic Street Preachers/Gold Against The Soul/10 - Manic Street Preachers - Gold Against The Soul.mp3'
  },
  {
    id: 'HoxqiwfpqSXRPeyeBiG8T',
    path: 'Manic Street Preachers/Gold Against The Soul/08 - Manic Street Preachers - Nostalgic Pushead.mp3'
  },
  {
    id: 'O3FjNI75xxdXR5PNtiaMi',
    path: 'Manic Street Preachers/Gold Against The Soul/06 - Manic Street Preachers - Drug Drug Druggy.mp3'
  },
  {
    id: '0oFvuuxHIKiM0kCjPqTeD',
    path: 'Manic Street Preachers/Gold Against The Soul/07 - Manic Street Preachers - Roses In The Hospital.mp3'
  },
  {
    id: 'XG4aCpzIaH2Q879bDEbO1',
    path: 'Manic Street Preachers/Gold Against The Soul/01 - Manic Street Preachers - Sleepflower.mp3'
  },
  {
    id: 'qL8DNDaUo0lYTLT73Grof',
    path: 'Manic Street Preachers/Everything Must Go/03 - Manic Street Preachers - Kevin Carter.mp3'
  },
  {
    id: '6mpaPVbERse9pTocQ3QYP',
    path: 'Manic Street Preachers/Everything Must Go/12 - Manic Street Preachers - No Surface All Feeling.mp3'
  },
  {
    id: 'xk9IyPmg8vb0087bl8PRj',
    path: 'Manic Street Preachers/Everything Must Go/06 - Manic Street Preachers - Small Black Flowers That Grow In The Sky.mp3'
  },
  {
    id: 'hVxeosCu6wS1u1pTL2Y3j',
    path: 'Manic Street Preachers/Everything Must Go/07 - Manic Street Preachers - The Girl Who Wanted To Be God.mp3'
  },
  {
    id: 'kTVFfxOfixP6MZYh7pqlF',
    path: 'Manic Street Preachers/Everything Must Go/04 - Manic Street Preachers - EnolaAlone.mp3'
  },
  {
    id: 'gT3i8oWt7bzazdY8mySgO',
    path: 'Manic Street Preachers/Everything Must Go/02 - Manic Street Preachers - A Design For Life.mp3'
  },
  {
    id: '8qH2cLeyPcmoicKMUFUpl',
    path: 'Manic Street Preachers/Everything Must Go/11 - Manic Street Preachers - Further Away.mp3'
  },
  {
    id: '4QB3smKHL7R88PYCiqbaU',
    path: 'Manic Street Preachers/Everything Must Go/10 - Manic Street Preachers - Interiors (Song For Willem De Kooning).mp3'
  },
  {
    id: 'ARpaQ61CCmiQuj7QLWvWC',
    path: 'Manic Street Preachers/Everything Must Go/08 - Manic Street Preachers - Removables.mp3'
  },
  {
    id: 'zDbtyHS0HsDaepbuS6Frp',
    path: 'Manic Street Preachers/Everything Must Go/05 - Manic Street Preachers - Everything Must Go.mp3'
  },
  {
    id: 'D2m8WxcLfB4ocyPqlSHyR',
    path: 'Manic Street Preachers/Everything Must Go/09 - Manic Street Preachers - Australia.mp3'
  },
  {
    id: '8OnIn35ufYDsH8VqMx7SE',
    path: 'Manic Street Preachers/Everything Must Go/01 - Manic Street Preachers - Elvis Impersonator Blackpool Pier.mp3'
  },
  {
    id: 'qqJcY7GxWyOItgtJP1wZs',
    path: 'Madness/The Heavy Heavy Hits/03 - Madness - My Girl.mp3'
  },
  {
    id: '6zLutYYXX3BjNgcvBIV21',
    path: 'Madness/The Heavy Heavy Hits/23 - Madness - Waiting For The Ghost Train.mp3'
  },
  {
    id: '7Oo1Z25hvxaxax8I8Qo2l',
    path: 'Madness/The Heavy Heavy Hits/04 - Madness - Night Boat To Cairo.mp3'
  },
  {
    id: 'wsjVNr6TlOeUfH8IKxUrx',
    path: 'Madness/The Heavy Heavy Hits/06 - Madness - Embarrassment.mp3'
  },
  {
    id: 'ubfhdjWzqkcNo7HjTvrMR',
    path: 'Madness/The Heavy Heavy Hits/18 - Madness - Michael Caine.mp3'
  },
  {
    id: 'Q4sFoqsjPPc0lRmsO4FEN',
    path: 'Madness/The Heavy Heavy Hits/11 - Madness - Cardiac Arrest.mp3'
  },
  {
    id: 'ZvZdhtERMtdn5HBpYKr4E',
    path: 'Madness/The Heavy Heavy Hits/19 - Madness - One Better Day.mp3'
  },
  {
    id: 'DYximw0G9DvqlL27NbSWB',
    path: 'Madness/The Heavy Heavy Hits/09 - Madness - Shut Up.mp3'
  },
  {
    id: 'RRwbgnE0bl15rbzogOqTw',
    path: "Madness/The Heavy Heavy Hits/20 - Madness - Yesterday's Men.mp3"
  },
  {
    id: 'DlkPuH0H5jeCRx4vBFCry',
    path: 'Madness/The Heavy Heavy Hits/14 - Madness - Our House.mp3'
  },
  {
    id: 'DcPSANinbpjgR96V7aNbt',
    path: 'Madness/The Heavy Heavy Hits/13 - Madness - Driving In My Car.mp3'
  },
  {
    id: 'BLnRkmyy5uruCaCdSk83q',
    path: 'Madness/The Heavy Heavy Hits/22 - Madness - Sweetest Girl.mp3'
  },
  {
    id: 'ADM0P9Tg6FAxtz3fCtAWr',
    path: 'Madness/The Heavy Heavy Hits/02 - Madness - One Step Beyond.mp3'
  },
  {
    id: 'vgQSBnWURIy2zlSfWsqvm',
    path: 'Madness/The Heavy Heavy Hits/12 - Madness - House Of Fun.mp3'
  },
  {
    id: 'TA7F5lOmymOEZHPzmSROm',
    path: 'Madness/The Heavy Heavy Hits/01 - Madness - The Prince.mp3'
  },
  {
    id: 'YFwRJ7wXOZEl9McAqS61E',
    path: 'Madness/The Heavy Heavy Hits/08 - Madness - Grey Day.mp3'
  },
  {
    id: 'DRWQfu4kBDcSbwduRgvv1',
    path: 'Madness/The Heavy Heavy Hits/21 - Madness - Uncle Sam.mp3'
  },
  {
    id: '8rhp494DJSqnFcUuc3t43',
    path: 'Madness/The Heavy Heavy Hits/07 - Madness - Los Palmas 7.mp3'
  },
  {
    id: 'tU0EfGnfffc3JguZVgiHe',
    path: 'Madness/The Heavy Heavy Hits/10 - Madness - It Must Be Love.mp3'
  },
  {
    id: '5r0vBFbGJOrepdk7VKkdT',
    path: 'Madness/The Heavy Heavy Hits/16 - Madness - Wings Of A Dove.mp3'
  },
  {
    id: 'KovNrdAnxcd6oWy8os1sd',
    path: 'Madness/The Heavy Heavy Hits/17 - Madness - The Sun And The Rain.mp3'
  },
  {
    id: 'EskwaJM4dfStu6u37hUhy',
    path: "Madness/The Heavy Heavy Hits/15 - Madness - Tomorrow's Just Another Day.mp3"
  },
  {
    id: 'MHAZnBhgLtmuwjFuTDVHk',
    path: 'Madness/The Heavy Heavy Hits/05 - Madness - Baggy Trousers.mp3'
  },
  {
    id: '4NnYm2iUXIvAJSqSE1cNl',
    path: "Keane/The Best Of Keane/01 - Keane - Everybody's Changing.mp3"
  },
  {
    id: 'Qnl2eCdBccd4kyaWIOqer',
    path: 'Keane/The Best Of Keane/02 - Keane - Somewhere Only We Know.mp3'
  },
  {
    id: 'vRkWc4leIFh583I0K7Yl9',
    path: 'Keane/The Best Of Keane/03 - Keane - Bend and Break.mp3'
  },
  {
    id: 'ylHytTs7lByPIpcHFZsBV',
    path: 'Keane/The Best Of Keane/04 - Keane - Bedshaped.mp3'
  },
  {
    id: '3H1GfcLmRauQgiOKWc7AV',
    path: 'Keane/The Best Of Keane/05 - Keane - This Is The Last Time.mp3'
  },
  {
    id: 'qnmx0FeA0wpO5dcVnZKMW',
    path: 'Keane/The Best Of Keane/06 - Keane - Atlantic.mp3'
  },
  {
    id: 'EdPvulWMyTSQnrT1DDwG7',
    path: 'Keane/The Best Of Keane/07 - Keane - Is It Any Wonder-.mp3'
  },
  {
    id: 'b1k8vYUbM7ewWmMdSxGbd',
    path: 'Keane/The Best Of Keane/08 - Keane - Nothing In My Way.mp3'
  },
  {
    id: 'oqFLyqHzPpS0V1c4GDQcy',
    path: 'Keane/The Best Of Keane/09 - Keane - Hamburg Song.mp3'
  },
  {
    id: 'wjVutQ7lhwROY1GlEIYRX',
    path: 'Keane/The Best Of Keane/10 - Keane - Crystal Ball.mp3'
  },
  {
    id: 'WlHRCSV3l40zPui1vLHJj',
    path: 'Keane/The Best Of Keane/11 - Keane - A Bad Dream.mp3'
  },
  {
    id: 'tjhZLjiMUB1AmuOETsbw2',
    path: 'Keane/The Best Of Keane/12 - Keane - Try Again.mp3'
  },
  {
    id: 'VZQhJnUgfJ0DjKOLGzHQT',
    path: 'Keane/The Best Of Keane/13 - Keane - Spiralling.mp3'
  },
  {
    id: 'aZnQSdNBnwgNtCUjVHvnX',
    path: 'Keane/The Best Of Keane/14 - Keane - Perfect Symmetry.mp3'
  },
  {
    id: 'ZtsMMm6awMfspq0ksKPPj',
    path: 'Keane/The Best Of Keane/15 - Keane - My Shadow.mp3'
  },
  {
    id: '8WB4d04K0fCqIuDfvE4PE',
    path: 'Keane/The Best Of Keane/16 - Keane - Silenced By The Night.mp3'
  },
  {
    id: 'Fzk4sKhjEUBYFwIeJEz7N',
    path: 'Keane/The Best Of Keane/17 - Keane - Disconnected.mp3'
  },
  {
    id: 'U5wyYs4q9ZaeLq2laQ7XR',
    path: 'Keane/The Best Of Keane/18 - Keane - Sovereign Light Cafe.mp3'
  },
  {
    id: 'P1KZ4wUsmqOQwNFDRrgGQ',
    path: 'Keane/The Best Of Keane/19 - Keane - Higher Than the Sun.mp3'
  },
  {
    id: '73aqPafUutCwpV1oPQDCT',
    path: "Keane/The Best Of Keane/20 - Keane - Won't Be Broken.mp3"
  },
  {
    id: 'O4oaGI21CXKirYCxQRQJ5',
    path: 'Manic Street Preachers/Generation Terrorists/14 - Manic Street Preachers - Spectators Of Suicide.mp3'
  },
  {
    id: 't1rVA5mRs83wYJVPHF40e',
    path: 'Manic Street Preachers/Generation Terrorists/04 - Manic Street Preachers - Motorcycle Emptiness.mp3'
  },
  {
    id: 'wasnUJQcCrZOd6GzrkZnU',
    path: 'Manic Street Preachers/Generation Terrorists/15 - Manic Street Preachers - Damn Dog.mp3'
  },
  {
    id: 'evWjmGXl9fL8VPiRfsQaM',
    path: 'Manic Street Preachers/Generation Terrorists/13 - Manic Street Preachers - Repeat (UK).mp3'
  },
  {
    id: 'XgvsVoEKLUsNV9FMH7hqD',
    path: 'Manic Street Preachers/Generation Terrorists/18 - Manic Street Preachers - Condemned To Rock & Roll.mp3'
  },
  {
    id: 'GKSith2pgtYTIy0eDXfUr',
    path: 'Manic Street Preachers/Generation Terrorists/01 - Manic Street Preachers - Slash & Burn.mp3'
  },
  {
    id: 'quF452QGlemtQv7Md9Pkz',
    path: "Manic Street Preachers/Generation Terrorists/06 - Manic Street Preachers - Love's Sweet Exile.mp3"
  },
  {
    id: 's3e5jwOF6yHSiMKTB09YH',
    path: 'Manic Street Preachers/Generation Terrorists/07 - Manic Street Preachers - Little Baby Nothing.mp3'
  },
  {
    id: 'LCnzBag5P905zQUeqn9a3',
    path: 'Manic Street Preachers/Generation Terrorists/09 - Manic Street Preachers - Tennessee.mp3'
  },
  {
    id: 'F5SlpyRoNAwMrQr8PImpS',
    path: 'Manic Street Preachers/Generation Terrorists/02 - Manic Street Preachers - NatWest Barclays Midlands Lloyds.mp3'
  },
  {
    id: 'ArUoiC6zgUKDs3IX5NKkL',
    path: 'Manic Street Preachers/Generation Terrorists/17 - Manic Street Preachers - Methadone Pretty.mp3'
  },
  {
    id: 'KXgrx1eRkkjvESr1p65Hq',
    path: 'Manic Street Preachers/Generation Terrorists/05 - Manic Street Preachers - You Love Us.mp3'
  },
  {
    id: 's8MmqyAgIHaCHweCgnV1F',
    path: 'Manic Street Preachers/Generation Terrorists/08 - Manic Street Preachers - Repeat (Stars & Stripes).mp3'
  },
  {
    id: 'uezp2PrsbR3AetfvQSRU3',
    path: 'Manic Street Preachers/Generation Terrorists/11 - Manic Street Preachers - Stay Beautiful.mp3'
  },
  {
    id: 'kEEmMssZyFzc8ydCsan6V',
    path: 'Manic Street Preachers/Generation Terrorists/12 - Manic Street Preachers - So Dead.mp3'
  },
  {
    id: 'OoExVksbtXboyPkesBBM5',
    path: 'Manic Street Preachers/Generation Terrorists/10 - Manic Street Preachers - Another Invented Disease.mp3'
  },
  {
    id: 'sqB1LQOyIjTTrwTR42dAl',
    path: 'Manic Street Preachers/Generation Terrorists/03 - Manic Street Preachers - Born To End.mp3'
  },
  {
    id: 'mhG9cmYGvjSFhF0wPwiZr',
    path: 'Manic Street Preachers/Generation Terrorists/16 - Manic Street Preachers - Crucifix Kiss.mp3'
  },
  {
    id: '3MvdTxPIuL59SC3o4WqxG',
    path: "Manic Street Preachers/The Holy Bible/02 - Manic Street Preachers - IfWhiteAmericaToldTheTruthForOneDayIt'sWorldWouldFallApart.mp3"
  },
  {
    id: '5nlhQkpQc1YMcrxBOohHC',
    path: 'Manic Street Preachers/The Holy Bible/11 - Manic Street Preachers - Die In The Summertime.mp3'
  },
  {
    id: 'vku8brwmF3muys9LE66FJ',
    path: 'Manic Street Preachers/The Holy Bible/06 - Manic Street Preachers - Revol.mp3'
  },
  {
    id: 'WJGAk0ZoFHbfccFKnSuRi',
    path: 'Manic Street Preachers/The Holy Bible/07 - Manic Street Preachers - 4st 7lb.mp3'
  },
  {
    id: 'STZlUDVytFjLiCye3un06',
    path: 'Manic Street Preachers/The Holy Bible/04 - Manic Street Preachers - She Is Suffering.mp3'
  },
  {
    id: 'PFC6UF8PDdoMViNQSClrR',
    path: 'Manic Street Preachers/The Holy Bible/08 - Manic Street Preachers - Mausoleum.mp3'
  },
  {
    id: 'E1GKDHMXKnDn2t3BABXEy',
    path: 'Manic Street Preachers/The Holy Bible/03 - Manic Street Preachers - Of Walking Abortion.mp3'
  },
  {
    id: 'Ua6VTVUxFuqW6XP4oJd0f',
    path: 'Manic Street Preachers/The Holy Bible/09 - Manic Street Preachers - Faster.mp3'
  },
  {
    id: 'xo2FGwVatTs4KQUVLBtlX',
    path: 'Manic Street Preachers/The Holy Bible/10 - Manic Street Preachers - This Is Yesterday.mp3'
  },
  {
    id: 'sNIACLFJ97U4oUPIeoXLA',
    path: 'Manic Street Preachers/The Holy Bible/01 - Manic Street Preachers - Yes.mp3'
  },
  {
    id: 'to5TPeuaZwquFiUg43xWF',
    path: 'Manic Street Preachers/The Holy Bible/12 - Manic Street Preachers - The Intense Humming Of Evil.mp3'
  },
  {
    id: 'IX8HRCLkkLcNqrkZEaseH',
    path: 'Manic Street Preachers/The Holy Bible/13 - Manic Street Preachers - PCP.mp3'
  },
  {
    id: 'p1hbcZT9BT5pKmIjGAegc',
    path: 'Manic Street Preachers/The Holy Bible/05 - Manic Street Preachers - Archives Of Pain.mp3'
  },
  {
    id: 'NQnSgF4pna6X5IsRE0gZR',
    path: 'Muse/Black Holes And Revelations/09. City Of Delusion.mp3'
  },
  {
    id: 'HsJsXQbWIekbEL5kMmrSs',
    path: 'Muse/Black Holes And Revelations/02. Starlight.mp3'
  },
  {
    id: 'U3jDWBN2MmohYDPOCLxFk',
    path: 'Muse/Black Holes And Revelations/04. Map Of The Problematique.mp3'
  },
  {
    id: '2DYBwqb1GUyaptY7SFaMf',
    path: "Muse/Black Holes And Revelations/05. Soldier's Poem.mp3"
  },
  {
    id: 's84PoBH2jaWoGk4cC5AI0',
    path: 'Muse/Black Holes And Revelations/07. Assassin.mp3'
  },
  {
    id: 'hDvkMFMW7oxaDfIs0ijsj',
    path: 'Muse/Black Holes And Revelations/10. Hoodoo.mp3'
  },
  {
    id: '3PrenFg3B14PoIts2aMts',
    path: 'Muse/Black Holes And Revelations/08. Exo-Politics.mp3'
  },
  {
    id: 'hKKbCnU7bt8WPMTMbiYeq',
    path: 'Muse/Black Holes And Revelations/03. Supermassive Black Hole.mp3'
  },
  {
    id: 'SOiAI4EuaSIY5XD2HIu03',
    path: 'Muse/Black Holes And Revelations/01. Take A Bow.mp3'
  },
  {
    id: 'eaVljMtwoFBynBLQixt8k',
    path: 'Muse/Black Holes And Revelations/06. Invincible.mp3'
  },
  {
    id: 'HQGxygItd8PbwXNaooVY4',
    path: 'Muse/Black Holes And Revelations/11. Knights Of Cydonia.mp3'
  },
  { id: 'Z4pgXmQ2jF2kwaTJIm9BZ', path: 'Muse/Showbiz/09. Sober.mp3' },
  {
    id: 'v7nL5j5OUySwFtwFFpnx5',
    path: 'Muse/Showbiz/04. Falling Down.mp3'
  },
  { id: 'mBinAyga4Wy2IoJB4gmbn', path: 'Muse/Showbiz/01. Sunburn.mp3' },
  { id: 'zXhfMgK8qmxtTBbudBX4N', path: 'Muse/Showbiz/08. Uno.mp3' },
  { id: 'T5Ot3W6zvgfUrRVgwoJnv', path: 'Muse/Showbiz/06. Showbiz.mp3' },
  {
    id: 'Hqt7sdEJmCB11XQd8P4IP',
    path: 'Muse/Showbiz/07. Unintended.mp3'
  },
  { id: 'KrjwyeiFoYnTYgyo3gNXq', path: 'Muse/Showbiz/11. Overdue.mp3' },
  {
    id: '0hBOTDCHoZq81VacCYkcm',
    path: 'Muse/Showbiz/02. Muscle Museum.mp3'
  },
  { id: 'JkIp4OiiPOyo3Xi39XLoy', path: 'Muse/Showbiz/10. Escape.mp3' },
  {
    id: 'aSavOomXdJNIG98vzmPoK',
    path: "Muse/Showbiz/12. Hate This And I'll Love You.mp3"
  },
  { id: 'NFkwtpxSDNY63uMkAdcEY', path: 'Muse/Showbiz/03. Fillip.mp3' },
  { id: 'Ich0Q7Bgc9pQZC3Rzbh5N', path: 'Muse/Showbiz/05. Cave.mp3' },
  {
    id: '6RCG2DnafYmz0QvzqkXva',
    path: 'Muse/Absolution/11. The Small Print.mp3'
  },
  {
    id: '92JTE4HGYvp3C0b2zYOIY',
    path: 'Muse/Absolution/14. Ruled By Secrecy.mp3'
  },
  {
    id: 'AJiaLLCWQAmrVKGrdKjfJ',
    path: 'Muse/Absolution/01. Intro.mp3'
  },
  {
    id: '4KwFCMjbaxBkCvdrGK8eY',
    path: 'Muse/Absolution/10. Butterflies & Hurricanes.mp3'
  },
  {
    id: 'RNNBSnrofZUpL0gTeHVzt',
    path: 'Muse/Absolution/04. Sing For Absolution.mp3'
  },
  {
    id: 'RqKkJlaD3woM99f8BeBKp',
    path: 'Muse/Absolution/03. Time Is Running Out.mp3'
  },
  {
    id: 'IUsev3K6qlFuFE6qy17OM',
    path: 'Muse/Absolution/09. Blackout.mp3'
  },
  {
    id: 'GgQ4zjP85fgIb3Us2aNMg',
    path: 'Muse/Absolution/05. Stockholm Syndrome.mp3'
  },
  {
    id: 'iTqnQkyAjc7QnpfVzAHZL',
    path: 'Muse/Absolution/02. Apocalypse Please.mp3'
  },
  {
    id: 'pCCRH8sRDcPGgswFxjGS6',
    path: 'Muse/Absolution/07. Interlude.mp3'
  },
  {
    id: '1g2k5SwDh51a20mhLtxKS',
    path: 'Muse/Absolution/13. Thoughts Of A Dying Atheist.mp3'
  },
  {
    id: 'rTi1XRLafmn4u3DX3JRF0',
    path: 'Muse/Absolution/08. Hysteria.mp3'
  },
  {
    id: 'MDLd11s1Z2vQqaCD1CRQp',
    path: 'Muse/Absolution/12. Endlessly.mp3'
  },
  {
    id: '23oewlZtBydeO8cpRsSsk',
    path: 'Muse/Absolution/06. Falling Away With You.mp3'
  },
  {
    id: 'a6RZB7iuqveYGn1KYkzxm',
    path: 'Nirvana/In Utero/01 - Nirvana - Serve The Servants.mp3'
  },
  {
    id: 'SYMy9AQoHtHgilDXRswb6',
    path: 'Nirvana/In Utero/04 - Nirvana - Rape Me.mp3'
  },
  {
    id: 'iQtQ3mLyYMsTRsrtHUB08',
    path: 'Nirvana/In Utero/02 - Nirvana - Scentless Apprentice.mp3'
  },
  {
    id: 'MFtgkESOZ2kGz0TNoEhgU',
    path: 'Nirvana/In Utero/07 - Nirvana - Very Ape.mp3'
  },
  {
    id: 'pjeEZPcHBqOogbo3tl7Ec',
    path: 'Nirvana/In Utero/03 - Nirvana - Heart Shaped Box.mp3'
  },
  {
    id: 'xP9JK9XGlqNqhWE4oQuBF',
    path: "Nirvana/In Utero/11 - Nirvana - Tourette's.mp3"
  },
  {
    id: '9QA0V5VT44GavMS1aD7z2',
    path: 'Nirvana/In Utero/12 - Nirvana - All Apologies.mp3'
  },
  {
    id: '918yFhCbbwsk2GimWb2Ap',
    path: 'Nirvana/In Utero/10 - Nirvana - Radio Friendly Unit Shifter.mp3'
  },
  {
    id: '9yDxX8GUhvu4oyJtLqsOy',
    path: 'Nirvana/In Utero/06 - Nirvana - Dumb.mp3'
  },
  {
    id: 'FB6fNilxhQakYoowbXNtA',
    path: 'Nirvana/In Utero/08 - Nirvana - Milk It.mp3'
  },
  {
    id: 'UfoX2S0jZ9KYvFSPfYrN9',
    path: 'Nirvana/In Utero/05 - Nirvana - Frances Farmer Will Have Her Revenge On Seattle.mp3'
  },
  {
    id: 'UVSmrh5qGLKL3Ne4lvPnA',
    path: 'Nirvana/In Utero/09 - Nirvana - Pennyroyal Tea.mp3'
  },
  {
    id: 'ALRr1xxTnKzyROcYnk1Tq',
    path: 'Nirvana/Nevermind/09 - Nirvana - Lounge Act.mp3'
  },
  {
    id: 'dPbUN6nBUFVMKxoXyRMPs',
    path: 'Nirvana/Nevermind/07 - Nirvana - Territorial Pissings.mp3'
  },
  {
    id: 'UeopDyoP54VGaK8AWtFsF',
    path: 'Nirvana/Nevermind/04 - Nirvana - Breed.mp3'
  },
  {
    id: 'jZimSpG1icqYyeRX9ls6I',
    path: 'Nirvana/Nevermind/08 - Nirvana - Drain You.mp3'
  },
  {
    id: 'aoB85j1045W3AtiqSNj9W',
    path: 'Nirvana/Nevermind/12 - Nirvana - Something In The Way.mp3'
  },
  {
    id: 'xPyz0M2jJIflCTUYh6H8b',
    path: 'Nirvana/Nevermind/06 - Nirvana - Polly.mp3'
  },
  {
    id: 'BB6WRbBt40jeWfN8CWkR4',
    path: 'Nirvana/Nevermind/03 - Nirvana - Come As You Are.mp3'
  },
  {
    id: 'IERYBFICGZj5jFpnD9BKv',
    path: 'Nirvana/Nevermind/11 - Nirvana - On A Plain.mp3'
  },
  {
    id: 'JRiifp3LEz9VoFQ5UAu9J',
    path: 'Nirvana/Nevermind/01 - Nirvana - Smells Like Teen Spirit.mp3'
  },
  {
    id: 'Sn9Pm09UIuOTYvHheZv1z',
    path: 'Nirvana/Nevermind/10 - Nirvana - Stay Away.mp3'
  },
  {
    id: 'dE7KQ9VzzBwkaXed3wZO0',
    path: 'Nirvana/Nevermind/02 - Nirvana - In Bloom.mp3'
  },
  {
    id: 'QImoZOTN3sn5uRWkab7am',
    path: 'Nirvana/Nevermind/05 - Nirvana - Lithium.mp3'
  },
  {
    id: 'VUmsYTtWvSQgHgp04LKem',
    path: 'Manic Street Preachers/This Is My Truth Tell Me Yours/09 Manic Street Preachers - Born A Girl.mp3'
  },
  {
    id: '8PDrOxGySzVe7mxHfuEu3',
    path: 'Manic Street Preachers/This Is My Truth Tell Me Yours/04 Manic Street Preachers - Ready For Drowning.mp3'
  },
  {
    id: 'EOrQlKKKL3Kqck75dpN29',
    path: "Manic Street Preachers/This Is My Truth Tell Me Yours/08 Manic Street Preachers - You're Tender And You're Tired.mp3"
  },
  {
    id: 'TTSYWwaYsoMWqoad5wKO7',
    path: 'Manic Street Preachers/This Is My Truth Tell Me Yours/05 Manic Street Preachers - Tsunami.mp3'
  },
  {
    id: 'e1eBNAJfix12C4gROLRl7',
    path: 'Manic Street Preachers/This Is My Truth Tell Me Yours/06 Manic Street Preachers - My Little Empire.mp3'
  },
  {
    id: 'lQb0jjQpacc8LJxDqASC8',
    path: 'Manic Street Preachers/This Is My Truth Tell Me Yours/03 Manic Street Preachers - You Stole The Sun From My Heart.mp3'
  },
  {
    id: 'nna451nEpHZX59nJGowZh',
    path: 'Manic Street Preachers/This Is My Truth Tell Me Yours/14 Manic Street Preachers - Socialist Serenade.mp3'
  },
  {
    id: 'RupcjlL3HUugsdnul2W0X',
    path: 'Manic Street Preachers/This Is My Truth Tell Me Yours/11 Manic Street Preachers - Black Dog On My Shoulder.mp3'
  },
  {
    id: 'aZw1rr7SgN1JMfuIfHkFm',
    path: 'Manic Street Preachers/This Is My Truth Tell Me Yours/13 Manic Street Preachers - S.Y.M.M..mp3'
  },
  {
    id: 'MTObXMHnfG5RStq3YTerQ',
    path: 'Manic Street Preachers/This Is My Truth Tell Me Yours/10 Manic Street Preachers - Be Natural.mp3'
  },
  {
    id: 'b8a28z1Djf83RqeqbQns7',
    path: 'Manic Street Preachers/This Is My Truth Tell Me Yours/02 Manic Street Preachers - If You Tolerate This Your Children Will Be Next.mp3'
  },
  {
    id: 'NXD3YjL617pH4z9QgAGPr',
    path: 'Manic Street Preachers/This Is My Truth Tell Me Yours/01 Manic Street Preachers - The Everlasting.mp3'
  },
  {
    id: 'Kd238NevENzioIJ8CmllT',
    path: 'Manic Street Preachers/This Is My Truth Tell Me Yours/12 Manic Street Preachers - Nobody Loved You.mp3'
  },
  {
    id: 'zTQHonxurVV9bZgalIIAR',
    path: 'Manic Street Preachers/This Is My Truth Tell Me Yours/15 Manic Street Preachers - Black Holes For The Young.mp3'
  },
  {
    id: 'GsohyphSr4f3ZqctvZUIE',
    path: "Manic Street Preachers/This Is My Truth Tell Me Yours/07 Manic Street Preachers - I'm Not Working.mp3"
  },
  {
    id: '0DmPTUCseSAKsX7ifDcsj',
    path: "Oasis/Be Here Now/01  Oasis - D'you Know What I Mean.mp3"
  },
  {
    id: 'ODftmuAYBObsCVhZVRhdV',
    path: 'Oasis/Be Here Now/04  Oasis - Stand By Me.mp3'
  },
  {
    id: 'qNNneLtqvVulp4pTw3BBH',
    path: 'Oasis/Be Here Now/09  Oasis - Be Here Now.mp3'
  },
  {
    id: 'RJssUOYV8qpQVLM2dMc6T',
    path: 'Oasis/Be Here Now/05  Oasis - I Hope, I Think, I Know.mp3'
  },
  {
    id: 'RasSNL07rCO76nMkkHIEA',
    path: 'Oasis/Be Here Now/02  Oasis - My Big Mouth.mp3'
  },
  {
    id: 'CxxFTEhRjl0za8HHKBTR5',
    path: "Oasis/Be Here Now/11  Oasis - It's Gettin' Better.mp3"
  },
  {
    id: 'Lf4t2xIzGCQtAJZt0aYwf',
    path: "Oasis/Be Here Now/08  Oasis - Don't Go Away.mp3"
  },
  {
    id: 'qn8RyuJ2eTJ8ws3rYs6nn',
    path: 'Oasis/Be Here Now/10  Oasis - All Around The World.mp3'
  },
  {
    id: 'hotz57Mo7TKYVzbpHbyY6',
    path: 'Oasis/Be Here Now/06  Oasis - The Girl In The Dirty Shirt.mp3'
  },
  {
    id: 'eF9fxGSDrbX8rcTUvzgLp',
    path: 'Oasis/Be Here Now/03  Oasis - Magic Pie.mp3'
  },
  {
    id: 'oERijmtxeFxzzhgk6VuzO',
    path: 'Oasis/Be Here Now/07  Oasis - Fade In-Out.mp3'
  },
  {
    id: 'ntRIGbhilyJ0ganLMFktN',
    path: 'Oasis/Be Here Now/12  Oasis - All Around The World [Reprise].mp3'
  },
  {
    id: 'qQETSSvsCSqOQSx4lgkd4',
    path: "Oasis/Definitely Maybe/01. Oasis - Rock 'N' Roll Star.mp3"
  },
  {
    id: 'RjpTbGE4rC1ajsLav34fv',
    path: 'Oasis/Definitely Maybe/02. Oasis - Shakermaker.mp3'
  },
  {
    id: '7HvZo2gpqm5iHIV9Ple9d',
    path: 'Oasis/Definitely Maybe/03. Oasis - Live Forever.mp3'
  },
  {
    id: 'ZR6kG9kknsUG1iBKc4Tc9',
    path: 'Oasis/Definitely Maybe/04. Oasis - Up in the Sky.mp3'
  },
  {
    id: 'on0CZtUCnPZAmmBvIe0WT',
    path: 'Oasis/Definitely Maybe/10. Oasis - Slide Away.mp3'
  },
  {
    id: 'AgiqVN3SsG1CmzOuD5JVd',
    path: 'Oasis/Definitely Maybe/08. Oasis - Cigarettes & Alcohol.mp3'
  },
  {
    id: 'HJlzUO4kqKDHbMgcwSP7R',
    path: 'Oasis/Definitely Maybe/07. Oasis - Bring It on Down.mp3'
  },
  {
    id: 'eVkcfHeK50Q5qPuQKEDYZ',
    path: 'Oasis/Definitely Maybe/11. Oasis - Married with Children.mp3'
  },
  {
    id: 's3dvGuFJimuEw2J0KAHyE',
    path: "Oasis/Definitely Maybe/09. Oasis - Digsy's Dinner.mp3"
  },
  {
    id: 'uSzh13gZdgfOiWI344gqI',
    path: 'Oasis/Definitely Maybe/05. Oasis - Columbia.mp3'
  },
  {
    id: 'Rd70IccUwjS8wPCajxWEX',
    path: 'Oasis/Definitely Maybe/06. Oasis - Supersonic.mp3'
  },
  {
    id: 'A2YqTcoC1AAObRsH2al7Y',
    path: 'Oasis/The Masterplan/02  Oasis - Underneath The Sky.mp3'
  },
  {
    id: 'SXmqFnOuKs7XsLBfYnMRy',
    path: 'Oasis/The Masterplan/07  Oasis - I Am the Walrus [Live].mp3'
  },
  {
    id: 'iN8ZSaOUfseQRCuzXOqgr',
    path: 'Oasis/The Masterplan/03  Oasis - Talk Tonight.mp3'
  },
  {
    id: 'LwgMMNUydfpYn1qEOJxsu',
    path: 'Oasis/The Masterplan/01  Oasis - Aquiesce.mp3'
  },
  {
    id: 'wyIQ4WO0xFG9STxOkbOXl',
    path: "Oasis/The Masterplan/09  Oasis - Rockin' Chair.mp3"
  },
  {
    id: 'Z5N6YjMBSjMpGLdNLRMCV',
    path: 'Oasis/The Masterplan/08  Oasis - Listen Up.mp3'
  },
  {
    id: 'r5fpcaohEDzEdrrpIsU7P',
    path: 'Oasis/The Masterplan/10  Oasis - Half The World Away.mp3'
  },
  {
    id: 'EftWDvQoxzQzQFLBowKK0',
    path: 'Oasis/The Masterplan/14  Oasis - The Masterplan.mp3'
  },
  {
    id: 'ObKQcHKDtIQsvZoFn1mUY',
    path: "Oasis/The Masterplan/11  Oasis - [It's Good] To Be Free.mp3"
  },
  {
    id: '2nYDtujBhaQBECQNzd2Xj',
    path: 'Oasis/The Masterplan/13  Oasis - Headshrinker.mp3'
  },
  {
    id: 'cAhVy7cQrEArKpsnhV2sO',
    path: 'Oasis/The Masterplan/04  Oasis - Going Nowhere.mp3'
  },
  {
    id: 'Jn5Xo3dvBzdJjS4oNRsV1',
    path: 'Oasis/The Masterplan/05  Oasis - Fade Away.mp3'
  },
  {
    id: 'iVcqknqysk1k6zKLiqbu2',
    path: 'Oasis/The Masterplan/06  Oasis - The Swamp Song.mp3'
  },
  {
    id: 'ioC3OfcZq7SbdRaltBp6j',
    path: 'Oasis/The Masterplan/12  Oasis - Stay Young.mp3'
  },
  {
    id: 'aZMU74BD5n8SnIJkk0HCw',
    path: 'Muse/Origin Of Symmetry/06. Citizen Erased.mp3'
  },
  {
    id: 'QXeYjOd8TnvLEMt2csmxM',
    path: 'Muse/Origin Of Symmetry/05. Plug In Baby.mp3'
  },
  {
    id: '6IXXIKm3tRyvw9VMcuKqP',
    path: 'Muse/Origin Of Symmetry/01. New Born.mp3'
  },
  {
    id: 'GPQynGK9VJwzDDiU1D2M8',
    path: 'Muse/Origin Of Symmetry/03. Space Dementia.mp3'
  },
  {
    id: 'MO5XAZo6nFTaSWWfFZTsd',
    path: 'Muse/Origin Of Symmetry/08. Screenager.mp3'
  },
  {
    id: 'E4aFy3NpYKOaEhbc8jOpv',
    path: 'Muse/Origin Of Symmetry/04. Hyper Music.mp3'
  },
  {
    id: 'JgUFn6nQ1tJbElqxm0kXE',
    path: 'Muse/Origin Of Symmetry/11. Megalomania.mp3'
  },
  {
    id: 'TfW0refidwKpPSmwdslLL',
    path: 'Muse/Origin Of Symmetry/07. Micro Cuts.mp3'
  },
  {
    id: 'o00KlzzqoapzJfKsuN9GI',
    path: 'Muse/Origin Of Symmetry/09. Darkshines.mp3'
  },
  {
    id: 'ESph2W3HOI9mEIDPXPr0O',
    path: 'Muse/Origin Of Symmetry/10. Feeling Good.mp3'
  },
  {
    id: 'y7ggNkRDU7rd9g7whian2',
    path: 'Muse/Origin Of Symmetry/02. Bliss.mp3'
  },
  {
    id: 'X5FuvaalfktDUECdMBsB1',
    path: 'Pulp/Different Class/07. Pulp - Something Changed.mp3'
  },
  {
    id: 'w17qgOLKy5DRT74GRb0I6',
    path: 'Pulp/Different Class/10. Pulp - Underwear.mp3'
  },
  {
    id: 'uxRcJKlTYU2I6qOxqnCBH',
    path: 'Pulp/Different Class/01. Pulp - Mis-Shapes.mp3'
  },
  {
    id: 'nz6nxxFE8kGjCUmMPQnPc',
    path: 'Pulp/Different Class/06. Pulp - Live Bed Show.mp3'
  },
  {
    id: 'yaYmTVBF67F0O0jZqrWSU',
    path: 'Pulp/Different Class/02. Pulp - Pencil Skirt.mp3'
  },
  {
    id: 'RhlHzZbnpIa1V0QawdgZZ',
    path: 'Pulp/Different Class/11. Pulp - Monday Morning.mp3'
  },
  {
    id: '9igJtgVhnDD27WfQZbeIn',
    path: "Pulp/Different Class/08. Pulp - Sorted for E's & Wizz.mp3"
  },
  {
    id: 'Wxqw7A0hhQWbnW8Ef5SWB',
    path: 'Pulp/Different Class/04. Pulp - I Spy.mp3'
  },
  {
    id: '4Iol9oJI88E5Ht43wIpHg',
    path: 'Pulp/Different Class/05. Pulp - Disco 2000.mp3'
  },
  {
    id: 'oqtjt1vSiKulkNUQNUsym',
    path: 'Pulp/Different Class/09. Pulp - F.E.E.L.I.N.G.C.A.L.L.E.D.L.O.V.E.mp3'
  },
  {
    id: 'iHqaM9OSPnxNPL00M7ATt',
    path: 'Pulp/Different Class/03. Pulp - Common People.mp3'
  },
  {
    id: 'FHvqKUn5VIWP9pmV8HnAd',
    path: 'Pulp/Different Class/12. Pulp - Bar Italia.mp3'
  },
  {
    id: 'QvUZM9NYngJEKVcNhm4Gp',
    path: 'Queen/A Day at the Races/09 - Drowse.mp3'
  },
  {
    id: 'LVYnl6PM4JYG7Y9iG19bp',
    path: 'Queen/A Day at the Races/07 - White Man.mp3'
  },
  {
    id: '5jPOwcTFTMZ5XK8J7wZeO',
    path: 'Queen/A Day at the Races/05 - You And I.mp3'
  },
  {
    id: 'rTr3esSzsV4NKP4pF5gAH',
    path: 'Queen/A Day at the Races/01 - Tie Your Mother Down.mp3'
  },
  {
    id: 'VIS4JkBkXdF2EKZMK1HL0',
    path: 'Queen/A Day at the Races/08 - Good Old-Fashioned Lover Boy.mp3'
  },
  {
    id: '7v6wRJQe01sejWKxvOWVq',
    path: 'Queen/A Day at the Races/03 - Long Away.mp3'
  },
  {
    id: 'h7GIqfaCwyHdfH83kDVhu',
    path: 'Queen/A Day at the Races/06 - Somebody To Love.mp3'
  },
  {
    id: 'OCNn9Rcagiq6HEnwNFZwl',
    path: 'Queen/A Day at the Races/02 - You Take My Breath Away.mp3'
  },
  {
    id: 'wSOSiWB9OZJuySRGmG6PA',
    path: 'Queen/A Day at the Races/04 - The Millionaire Waltz.mp3'
  },
  {
    id: 'Wc4kOljyCZhPe8ofBBdOM',
    path: 'Queen/A Day at the Races/10 - Teo Torriatte (Let Us Cling Together).mp3'
  },
  {
    id: 'oL9Ms7f39ouUZEdWC4GbL',
    path: 'Ocean Colour Scene/Moseley Shoals/02 - The Day We Caught The Train.mp3'
  },
  {
    id: '3D0rqlAoz99dKf2Hxmnp0',
    path: 'Ocean Colour Scene/Moseley Shoals/04 - Lining Your Pockets.mp3'
  },
  {
    id: 'DLE3LAsP2alaaIyLJVr80',
    path: 'Ocean Colour Scene/Moseley Shoals/07 - One For The Road.mp3'
  },
  {
    id: 'wabaZdqzXe1lTv4gY34NL',
    path: "Ocean Colour Scene/Moseley Shoals/08 - It's My Shadow.mp3"
  },
  {
    id: 'hGQJQbQ6H8CiI92h5G0QW',
    path: 'Ocean Colour Scene/Moseley Shoals/09 - Policemen & Pirates.mp3'
  },
  {
    id: 'r1Wom2Vf5oHilSs0ZOHNG',
    path: 'Ocean Colour Scene/Moseley Shoals/01 - The Riverboat Song.mp3'
  },
  {
    id: 'Ffb4GozES7IeQi7EZL8VR',
    path: 'Ocean Colour Scene/Moseley Shoals/03 - The Circle.mp3'
  },
  {
    id: 'Ic8CbAseCvRaVHHTyWgyA',
    path: 'Ocean Colour Scene/Moseley Shoals/06 - 40 Past Midnight.mp3'
  },
  {
    id: 'Yyw8z4qU3aiDAwXqebDMp',
    path: 'Ocean Colour Scene/Moseley Shoals/05 - Fleeting Mind.mp3'
  },
  {
    id: 'uBbstrwwoPrC9UiK5i7WR',
    path: "Ocean Colour Scene/Moseley Shoals/11 - You've Got It Bad.mp3"
  },
  {
    id: 'iQOHt7VjpZ7IiOnd0GWSY',
    path: 'Ocean Colour Scene/Moseley Shoals/12 - Get Away.mp3'
  },
  {
    id: 'BHfE6xTioWFp2ZZkYLfqg',
    path: 'Ocean Colour Scene/Moseley Shoals/10 - The Downstream.mp3'
  },
  {
    id: 'forlK39yPtLESi5xjbljN',
    path: "Queen/A Kind Of Magic/07 - Gimme The Prize (Kurgan's Theme).mp3"
  },
  {
    id: '6QPNP8QSw1wy339EFUrsb',
    path: 'Queen/A Kind Of Magic/06 - Who Wants To Live Forever.mp3'
  },
  {
    id: 'azBNib8wGoRCDeVboBsBG',
    path: 'Queen/A Kind Of Magic/03 - One Year Of Love.mp3'
  },
  {
    id: 'glgeDCr6HnmcAyEkf6edE',
    path: 'Queen/A Kind Of Magic/02 - A Kind Of Magic.mp3'
  },
  {
    id: 'UzngWr5h0aVaODpydQWUF',
    path: 'Queen/A Kind Of Magic/05 - Friends Will Be Friends.mp3'
  },
  {
    id: 'CVBH2LrQKTleAq6iEQd6z',
    path: "Queen/A Kind Of Magic/10 - A Kind Of 'A Kind Of Magic'.mp3"
  },
  {
    id: '0XFTti00UDGSIkhaeV26q',
    path: 'Queen/A Kind Of Magic/11 - Friends Will Be Friends Will Be Friends ....mp3'
  },
  {
    id: '6zRQ2TN2kjHNsLhAzDCeh',
    path: "Queen/A Kind Of Magic/08 - Don't Lose Your Head.mp3"
  },
  {
    id: 'CvhRhhZC0unXAPG4Gv8CD',
    path: 'Queen/A Kind Of Magic/12 - Forever.mp3'
  },
  {
    id: 'kv7O5kF49agZxFz2Zc9TV',
    path: 'Queen/A Kind Of Magic/01 - One Vision.mp3'
  },
  {
    id: 'iqPNUS6OSjXiwFkbrCC3y',
    path: 'Queen/A Kind Of Magic/04 - Pain Is So Close To Pleasure.mp3'
  },
  {
    id: 'qrqygA2Oo5cV3gTxudMyQ',
    path: 'Queen/A Kind Of Magic/09 - Princes Of The Universe.mp3'
  },
  {
    id: 'JON1B1v7atNJSCEfJ0uGo',
    path: 'Ocean Colour Scene/One From The Modern/05 - Families.mp3'
  },
  {
    id: 'Pc7JgS9ADZW6Exk1ilZI0',
    path: 'Ocean Colour Scene/One From The Modern/04 - No One At All.mp3'
  },
  {
    id: 'cf1nhp6gDA52avCPz0r4p',
    path: 'Ocean Colour Scene/One From The Modern/09 - Soul Driver.mp3'
  },
  {
    id: 'MRw1b7xK7AGUBlon3vTUb',
    path: 'Ocean Colour Scene/One From The Modern/07 - Jane She Got Excavated.mp3'
  },
  {
    id: 'X95Ot0jn22UTaCU4J26eg',
    path: 'Ocean Colour Scene/One From The Modern/08 - Emily Chambers.mp3'
  },
  {
    id: 'cYs64gLRzFljDpxtiu3dm',
    path: 'Ocean Colour Scene/One From The Modern/01 - Profit In Peace.mp3'
  },
  {
    id: 'zospahEVfVWbKrDxtGu3C',
    path: 'Ocean Colour Scene/One From The Modern/11 - I Won´t Get Grazed.mp3'
  },
  {
    id: 'ha01W7WtwjO2HVuszJsKo',
    path: 'Ocean Colour Scene/One From The Modern/06 - July.mp3'
  },
  {
    id: 'gcQuhD0O6pGyRaqRvNjKS',
    path: 'Ocean Colour Scene/One From The Modern/10 - The Waves.mp3'
  },
  {
    id: 'soAymhEkXoYDFVlqmU1I9',
    path: 'Ocean Colour Scene/One From The Modern/12 - Step By Step (bonus).mp3'
  },
  {
    id: 'xiE7RVy8dO1c9Jw13bETl',
    path: 'Ocean Colour Scene/One From The Modern/03 - I Am The News.mp3'
  },
  {
    id: 'mGFYAjjTIA8kzgkdQfvgO',
    path: 'Ocean Colour Scene/One From The Modern/02 - So Low.mp3'
  },
  {
    id: 'PMSByWBVTV5rRhNlsCOT0',
    path: "Queen/Jazz/12 - Don't Stop Me Now.mp3"
  },
  {
    id: 'F569JqhphISpr621UiZiP',
    path: 'Queen/Jazz/04 - Bicycle Race.mp3'
  },
  {
    id: '3Vm073q6C0tYVF3p6hlgU',
    path: 'Queen/Jazz/07 - Dead On Time.mp3'
  },
  {
    id: 'lDLJcMAbql95XhhrXBNvl',
    path: 'Queen/Jazz/02 - Fat Bottomed Girls.mp3'
  },
  {
    id: 'QzEAt29GsF4RoWWrDVese',
    path: 'Queen/Jazz/06 - Let Me Entertain You.mp3'
  },
  {
    id: 'pUADEq67Xg7o66X7lCnRh',
    path: "Queen/Jazz/11 - Leaving Home Ain't Easy.mp3"
  },
  {
    id: 'di2RsgPAqMdfYDCwmECNP',
    path: "Queen/Jazz/05 - If You Can't Beat Them.mp3"
  },
  { id: '9dNwwDw03L5HizxVTNGUJ', path: 'Queen/Jazz/01 - Mustapha.mp3' },
  {
    id: '9CO6WOceaNajQc7PGfMoU',
    path: "Queen/Jazz/09 - Dreamer's Ball.mp3"
  },
  { id: 'gemxXxwVchfVlDJ82rPj7', path: 'Queen/Jazz/03 - Jealousy.mp3' },
  {
    id: 'q59mOlvdf5gKrzzMqmPpX',
    path: 'Queen/Jazz/13 - More Of That Jazz.mp3'
  },
  {
    id: '9V8YOaQBklJOFL8FV6zRe',
    path: 'Queen/Jazz/08 - In Only Seven Days.mp3'
  },
  { id: '1bPwIgEm9KHkLjWHM8WXU', path: 'Queen/Jazz/10 - Fun It.mp3' },
  {
    id: 'iPTzuC1wkeZD86lIxnQot',
    path: 'Queen/A Night at the Opera/09 - Love Of My Life.mp3'
  },
  {
    id: 'UpEdUMnI0L0iivb9nkEga',
    path: 'Queen/A Night at the Opera/06 - Sweet Lady.mp3'
  },
  {
    id: 'UNWFjNLMS3Oe167RV8csS',
    path: "Queen/A Night at the Opera/03 - I'm In Love With My Car.mp3"
  },
  {
    id: 'INpTPt5TW7vMe2N9Bmz9F',
    path: 'Queen/A Night at the Opera/01 - Death On Two Legs (Dedicated To....mp3'
  },
  {
    id: 'tAx8btbOsCIiF0q1rw1Kk',
    path: 'Queen/A Night at the Opera/07 - Seaside Rendezvous.mp3'
  },
  {
    id: 'RZZm8j73Wnbn7Yd94wIDZ',
    path: 'Queen/A Night at the Opera/11 - Bohemian Rhapsody.mp3'
  },
  {
    id: 'oJB48zhvR94C1RAl4Vrge',
    path: "Queen/A Night at the Opera/04 - You're My Best Friend.mp3"
  },
  {
    id: 'gzX6rfFpqNxEDSpVS9OuJ',
    path: 'Queen/A Night at the Opera/12 - God Save The Queen.mp3'
  },
  {
    id: 'AMwMrV5hWXT7VWEQ2pyEv',
    path: "Queen/A Night at the Opera/08 - The Prophet's Song.mp3"
  },
  {
    id: '9ze2WHTPJSBvEC71DXDEO',
    path: "Queen/A Night at the Opera/05 - '39.mp3"
  },
  {
    id: 'RGtR8cNJ1tsVE6odxpUUx',
    path: 'Queen/A Night at the Opera/02 - Lazing On A Sunday Afternoon.mp3'
  },
  {
    id: 'g8VjFTPp4DILnVTGVnpWK',
    path: 'Queen/A Night at the Opera/10 - Good Company.mp3'
  },
  {
    id: '6Znjz5kzE6lcsZ8wiWvt5',
    path: 'Queen/News Of The World/02 - We Are The Champions.mp3'
  },
  {
    id: '9pEnMsuXVYM9RqNNUfL3v',
    path: 'Queen/News Of The World/03 - Sheer Heart Attack.mp3'
  },
  {
    id: 'meGXsCrwCTGKSDkQOloDH',
    path: 'Queen/News Of The World/04 - All Dead, All Dead.mp3'
  },
  {
    id: 'rmmrpLeNkG6zK33ZJnnou',
    path: 'Queen/News Of The World/06 - Fight From The Inside.mp3'
  },
  {
    id: 'rGN7nBY3sEsuVvKtXWh6c',
    path: 'Queen/News Of The World/09 - Who Needs You.mp3'
  },
  {
    id: 'j8O7pRZFaXfhosPcnjw6u',
    path: 'Queen/News Of The World/08 - Sleeping On The Sidewalk.mp3'
  },
  {
    id: '7pwL1zpBzXMbWuwvwm0Ts',
    path: 'Queen/News Of The World/11 - My Melancholy Blues.mp3'
  },
  {
    id: 'oEJUwjHQIjkKFDLzzUA2u',
    path: 'Queen/News Of The World/01 - We Will Rock You.mp3'
  },
  {
    id: 'FrYQ3qL9qd3SPFjMcY2Qb',
    path: 'Queen/News Of The World/05 - Spread Your Wings.mp3'
  },
  {
    id: 'jqaQDChBMJcCCpTmGw3kv',
    path: "Queen/News Of The World/10 - It's Late.mp3"
  },
  {
    id: 'xaLHDIXmYAsUDLxeBuVfh',
    path: 'Queen/News Of The World/07 - Get Down, Make Love.mp3'
  },
  {
    id: 'njqNStI9wvWq2O5eKF6U2',
    path: 'Radiohead/Kid A/03 - The National Anthem.mp3'
  },
  {
    id: '0225nozxFSZBbtWi5p0yU',
    path: 'Radiohead/Kid A/07 - In Limbo.mp3'
  },
  {
    id: 'erpOz07R07AyYiOiQLSFc',
    path: 'Radiohead/Kid A/10 - Motion Picture Soundtrack.mp3'
  },
  {
    id: 'LaGAnaLuZC610oJ8bk6aw',
    path: 'Radiohead/Kid A/05 - Treefingers.mp3'
  },
  {
    id: 'PusB57iHZDbSpn08EJA8J',
    path: 'Radiohead/Kid A/06 - Optimistic.mp3'
  },
  {
    id: 'mzBSU64tPTeJc2ExlDg44',
    path: 'Radiohead/Kid A/11 - Hidden Track.mp3'
  },
  {
    id: 'WK4cUd0LQUTJualYwQRzb',
    path: 'Radiohead/Kid A/09 - Morning Bell.mp3'
  },
  {
    id: '8DYZGrsx0NszylWEAHYVK',
    path: 'Radiohead/Kid A/01 - Everything In Its Right Place.mp3'
  },
  {
    id: 'DuNGWFPIE1GXDkFHa7BPv',
    path: 'Radiohead/Kid A/08 - Idioteque.mp3'
  },
  {
    id: 'hZPMmL3wJSL8yRVfcU6i1',
    path: 'Radiohead/Kid A/04 - How To Disappear Completely.mp3'
  },
  {
    id: '3cLQbfdgkWfuFGF5ke2Ap',
    path: 'Radiohead/Kid A/02 - Kid A.mp3'
  },
  {
    id: 'WR9qKvdXhkfZ7O3F3xLZu',
    path: 'Radiohead/Pablo Honey/05 - Radiohead - Thinking About You.mp3'
  },
  {
    id: 'DbkFwYiPdCjczpDI1b9UR',
    path: 'Radiohead/Pablo Honey/01 - Radiohead - You.mp3'
  },
  {
    id: 'f9caPcMTzXlFrF4vsAkxt',
    path: 'Radiohead/Pablo Honey/06 - Radiohead - Anyone Can Play Guitar.mp3'
  },
  {
    id: 'ViWtkuvosdi6sYDPqsOgC',
    path: 'Radiohead/Pablo Honey/03 - Radiohead - How Do You.mp3'
  },
  {
    id: 'EPGhbVVIiZIrVsCi6NmxU',
    path: 'Radiohead/Pablo Honey/08 - Radiohead - Vegetable.mp3'
  },
  {
    id: 'X39JpC2rTZieNNgTsoDt3',
    path: 'Radiohead/Pablo Honey/07 - Radiohead - Ripcord.mp3'
  },
  {
    id: 'FSW9hqgMjrH5dBMjp6lDA',
    path: 'Radiohead/Pablo Honey/04 - Radiohead - Stop Whispering.mp3'
  },
  {
    id: '6b9BKm6auY7QdO5JNDMkl',
    path: 'Radiohead/Pablo Honey/11 - Radiohead - Lurgee.mp3'
  },
  {
    id: 'vkdUUf490eT1fdNEd8im0',
    path: "Radiohead/Pablo Honey/10 - Radiohead - I Can't.mp3"
  },
  {
    id: 'edWEMuBf8flo3LskcPR1M',
    path: 'Radiohead/Pablo Honey/12 - Radiohead - Blow Out.mp3'
  },
  {
    id: 'L6noulfslGiIgRfyJiaVT',
    path: 'Radiohead/Pablo Honey/09 - Radiohead - Prove Yourself.mp3'
  },
  {
    id: 'bmT1meTHdPlme4mEZBTni',
    path: 'Radiohead/Pablo Honey/02 - Radiohead - Creep.mp3'
  },
  {
    id: 'H5p3Voa13AOsjrgUACaFF',
    path: 'Radiohead/The Bends/01 - Radiohead - Planet Telex.mp3'
  },
  {
    id: '1g3lMoCFpPZQnjgTTkwyV',
    path: 'Radiohead/The Bends/07 - Radiohead - Just.mp3'
  },
  {
    id: 'RQldIkr6SoJvaPgxWqzcp',
    path: 'Radiohead/The Bends/02 - Radiohead - The Bends.mp3'
  },
  {
    id: 'CU6u8SPr8nPbbwzwURSxP',
    path: 'Radiohead/The Bends/05 - Radiohead - Bones.mp3'
  },
  {
    id: 'E40COCySXEga812R1AEOb',
    path: 'Radiohead/The Bends/03 - Radiohead - High And Dry.mp3'
  },
  {
    id: 'zUUtpzo2UlRfQesAxqrdE',
    path: 'Radiohead/The Bends/08 - Radiohead - My Iron Lung.mp3'
  },
  {
    id: 'MgZddKH3m60Tu5QkxvehB',
    path: 'Radiohead/The Bends/12 - Radiohead - Street Spirit (Fade Out).mp3'
  },
  {
    id: 'ZShCfpMSADdzTUw1cETEQ',
    path: 'Radiohead/The Bends/11 - Radiohead - Sulk.mp3'
  },
  {
    id: 'Mjhk4zJK8GuoneCMhnhre',
    path: 'Radiohead/The Bends/06 - Radiohead - (Nice Dream).mp3'
  },
  {
    id: 'nVLU6q4PrCXv1VV1sVEWQ',
    path: 'Radiohead/The Bends/04 - Radiohead - Fake Plastic Trees.mp3'
  },
  {
    id: 'BvdMTo0Q1ynIFddH2Mxvi',
    path: 'Radiohead/The Bends/09 - Radiohead - Bullet ProofI Wish I Was.mp3'
  },
  {
    id: '9m87gaXUZ8kkqnp9itu8S',
    path: 'Radiohead/The Bends/10 - Radiohead - Black Star.mp3'
  },
  {
    id: 'mSM9VtVllmfe0S1amhnj8',
    path: 'Richard Ashcroft/Alone with Everybody/11 - Richard Ashcroft - Everybody.mp3'
  },
  {
    id: '2vrT21nzFnaTH3zxB0mCN',
    path: 'Richard Ashcroft/Alone with Everybody/07 - Richard Ashcroft - On a Beach.mp3'
  },
  {
    id: '3YfJCRDm3hzmtrrwklDXn',
    path: 'Richard Ashcroft/Alone with Everybody/02 - Richard Ashcroft - I Get My Beat.mp3'
  },
  {
    id: '3UrGghk0PFT6CsWvmR828',
    path: 'Richard Ashcroft/Alone with Everybody/05 - Richard Ashcroft - You on My Mind in My Sleep.mp3'
  },
  {
    id: 'EgFL7U5eW2CW5ewKt5GC6',
    path: 'Richard Ashcroft/Alone with Everybody/01 - Richard Ashcroft - A Song for the Lovers.mp3'
  },
  {
    id: 'WW0VEjkeBzFsKZY8LQQkm',
    path: 'Richard Ashcroft/Alone with Everybody/04 - Richard Ashcroft - New York.mp3'
  },
  {
    id: '2HOk4LsY11JCJjIhc9tT2',
    path: 'Richard Ashcroft/Alone with Everybody/09 - Richard Ashcroft - Slow Was My Heart.mp3'
  },
  {
    id: '3iNXMCSl4Ndv5fny1cgqs',
    path: 'Richard Ashcroft/Alone with Everybody/06 - Richard Ashcroft - Crazy World.mp3'
  },
  {
    id: '60BO8bWBoB8zrnwjoSxsT',
    path: 'Richard Ashcroft/Alone with Everybody/08 - Richard Ashcroft - Money to Burn.mp3'
  },
  {
    id: '6j75eD7TARkyftuQIPJIw',
    path: "Richard Ashcroft/Alone with Everybody/10 - Richard Ashcroft - C'mon People (We're Making It Now).mp3"
  },
  {
    id: 'feCzE6ZAXXPsD4ZiqHj3z',
    path: 'Richard Ashcroft/Alone with Everybody/03 - Richard Ashcroft - Brave New World.mp3'
  },
  {
    id: 'UG30nmsaoYqG4iJ4X2CYj',
    path: 'Red Hot Chili Peppers/Californication/04 - Otherside.mp3'
  },
  {
    id: 'uOTS6L2DHxKzMND03PuIX',
    path: 'Red Hot Chili Peppers/Californication/10 - I Like Dirt.mp3'
  },
  {
    id: 'wJtxrNzVZRQVAqj7VXhGs',
    path: 'Red Hot Chili Peppers/Californication/01 - Around The World.mp3'
  },
  {
    id: 'cFQrgYxY3WSlHqVArXo8I',
    path: 'Red Hot Chili Peppers/Californication/08 - Porcelain.mp3'
  },
  {
    id: 'x7F1B6wm9gOk6gyIF6pv2',
    path: 'Red Hot Chili Peppers/Californication/12 - Savior.mp3'
  },
  {
    id: 'tcJwDRo7MbFUwRD5TPtfP',
    path: 'Red Hot Chili Peppers/Californication/11 - This Velvet Glove.mp3'
  },
  {
    id: 'MzMI3VLOm3vshJMIVy5WU',
    path: 'Red Hot Chili Peppers/Californication/14 - Right On Time.mp3'
  },
  {
    id: 'uCOyXSgUa9EuauZaAOLoY',
    path: 'Red Hot Chili Peppers/Californication/02 - Parallel Universe.mp3'
  },
  {
    id: 'VbUGs0MPRbCsyBGVoI30C',
    path: 'Red Hot Chili Peppers/Californication/05 - Get On Top.mp3'
  },
  {
    id: '9uWHdhpFz57m7k1JHxQ5E',
    path: 'Red Hot Chili Peppers/Californication/06 - Californication.mp3'
  },
  {
    id: 'BYK6kqBu4A8D7LyUeRQok',
    path: 'Red Hot Chili Peppers/Californication/13 - Purple Stain.mp3'
  },
  {
    id: 'z9D99InsVQcXoMjZdYDSH',
    path: 'Red Hot Chili Peppers/Californication/09 - Emit Remmus.mp3'
  },
  {
    id: 'kZNOfNPLhuZ5mUQ6A0B2N',
    path: 'Red Hot Chili Peppers/Californication/03 - Scar Tissue.mp3'
  },
  {
    id: 'EkXemH3pStlwomMf2crgS',
    path: "Red Hot Chili Peppers/Californication/15 - Road Trippin'.mp3"
  },
  {
    id: 'AmXhBEng1MbWcv6mFijZs',
    path: 'Red Hot Chili Peppers/Californication/07 - Easily.mp3'
  },
  {
    id: 'PKwEdpM3oKF6eSFWxLmYq',
    path: 'Radiohead/OK Computer/5 Let Down.mp3'
  },
  {
    id: 'TaAhMb9rQq4fYAwOBWuVY',
    path: 'Radiohead/OK Computer/2 Paranoid Android.mp3'
  },
  {
    id: 'LoE1gqjJkWMvv1QGbXmNS',
    path: 'Radiohead/OK Computer/11 Lucky.mp3'
  },
  {
    id: 'XSPxkNmoKoz68242FpYMd',
    path: 'Radiohead/OK Computer/8 Electioneering.mp3'
  },
  {
    id: '7yS9dfaH2sXMIfrx5P0qV',
    path: 'Radiohead/OK Computer/12 The Tourist.mp3'
  },
  {
    id: 'ZgvoYiuGg65MRE1bDEuMJ',
    path: 'Radiohead/OK Computer/1 Airbag.mp3'
  },
  {
    id: 'y8QvSJaMfeI3kubO9pEjq',
    path: 'Radiohead/OK Computer/9 Climbing Up The Walls.mp3'
  },
  {
    id: 'njhD7q7OZfNO37eMPPfBS',
    path: 'Radiohead/OK Computer/6 Karma Police.mp3'
  },
  {
    id: 'MNSurb0BpgHLombyh5lzI',
    path: 'Radiohead/OK Computer/7 Fitter Happier.mp3'
  },
  {
    id: 'dOEjpfCP2vuMnoejMryKh',
    path: 'Radiohead/OK Computer/4 Exit Music (For A Film).mp3'
  },
  {
    id: 'JxML6s3I5LiP1S3jRSdVN',
    path: 'Radiohead/OK Computer/3 Subterranean Homesick Alien.mp3'
  },
  {
    id: 'u25EVz3kJwngymTSyolXK',
    path: 'Radiohead/OK Computer/10 No Surprises.mp3'
  },
  {
    id: 'wVrjLVbL3zqXf03dHC4CD',
    path: "Saint Etienne/Foxbase Alpha/07-She's The One.mp3"
  },
  {
    id: 'HMgXDu0Pld94RpCdbQrry',
    path: 'Saint Etienne/Foxbase Alpha/03-Wilson.mp3'
  },
  {
    id: 'w1LoMTOYN8jUjnAF7Tuld',
    path: 'Saint Etienne/Foxbase Alpha/04-Carnt Sleep.mp3'
  },
  {
    id: 'H3hT6jtahOWswcrW0clMp',
    path: 'Saint Etienne/Foxbase Alpha/02-Only Love Can Break Your Heart.mp3'
  },
  {
    id: 'hCQWVEdk0ufqeeIqrOGCS',
    path: 'Saint Etienne/Foxbase Alpha/14-Like The Swallow.mp3'
  },
  {
    id: 'TkwGQ7OqQam3vO9dMJf18',
    path: 'Saint Etienne/Foxbase Alpha/01-This Is Radio Etienne.mp3'
  },
  {
    id: 'ePQf8f7BrVLbniCsUNzjF',
    path: 'Saint Etienne/Foxbase Alpha/11-Etienne Gonna Die.mp3'
  },
  {
    id: 'Ves2xDHyfVxeN4KacqIjQ',
    path: 'Saint Etienne/Foxbase Alpha/08-People Get Real.mp3'
  },
  {
    id: '1aDBwEReSEMmEnW07Rowv',
    path: "Saint Etienne/Foxbase Alpha/15-Dilworth's Theme.mp3"
  },
  {
    id: '8Ajw0GTHla59SznbyrrXN',
    path: 'Saint Etienne/Foxbase Alpha/05-Girl VII.mp3'
  },
  {
    id: '0ZXXZP4lt8isL16dfnVJt',
    path: 'Saint Etienne/Foxbase Alpha/06-Spring.mp3'
  },
  {
    id: 'uDAEyOp06f6FGu9Ktbuf0',
    path: "Saint Etienne/Foxbase Alpha/10-Nothing Can't Stop Us.mp3"
  },
  {
    id: 'SFT21BMepukVeAuzKFVd5',
    path: 'Saint Etienne/Foxbase Alpha/12-London Belongs To Me.mp3'
  },
  {
    id: 'JNhc3lbeYj2G5ka7H99Vu',
    path: 'Saint Etienne/Foxbase Alpha/13-Kiss And Make Up.mp3'
  },
  {
    id: '0FfrYcBpnLIsKkq6ufFk5',
    path: 'Saint Etienne/Foxbase Alpha/09-Stoned To Say The Least.mp3'
  },
  {
    id: 'qMI9Vx8rvZFnPyLRA5fiD',
    path: 'Rilo Kiley/Under the Blacklight/03. The Moneymaker.mp3'
  },
  {
    id: 'swk7DTWsHkpi92o00EOPT',
    path: 'Rilo Kiley/Under the Blacklight/02. Close Call.mp3'
  },
  {
    id: 'mAj1rrDXbnBcxGfCUJI4X',
    path: 'Rilo Kiley/Under the Blacklight/09. Smoke Detector.mp3'
  },
  {
    id: '7hadd1n94IykdoCHQ6VnK',
    path: 'Rilo Kiley/Under the Blacklight/05. Under the Blacklight.mp3'
  },
  {
    id: 'FGlABNEHO1j3uZIiqqAZs',
    path: 'Rilo Kiley/Under the Blacklight/01. Silver Lining.mp3'
  },
  {
    id: '0usX0HpJNMbbJYytz54FY',
    path: 'Rilo Kiley/Under the Blacklight/10. The Angels Hung Around.mp3'
  },
  {
    id: '3fcA4EI1LaM1rfNd7UaoI',
    path: 'Rilo Kiley/Under the Blacklight/11. Give a Little Love.mp3'
  },
  {
    id: 'Uq12RFD5Tneq9tDEYrP1v',
    path: "Rilo Kiley/Under the Blacklight/04. Breakin' Up.mp3"
  },
  {
    id: 'gG1eKMIWj5uPHyCIalutx',
    path: 'Rilo Kiley/Under the Blacklight/06. Dreamworld.mp3'
  },
  {
    id: 'JWfxoy6WGr73J29Ihhbo4',
    path: 'Rilo Kiley/Under the Blacklight/08. 15.mp3'
  },
  {
    id: 'QLjZNBdQgIf5QI4w3nwA8',
    path: 'Rilo Kiley/Under the Blacklight/07. Dejalo.mp3'
  },
  {
    id: 'z4nEfofeC7AMZbfVivu2V',
    path: 'Shania Twain/Come On Over/07 - Shania Twain - Come On Over.mp3'
  },
  {
    id: 'HXPJqfLm3mbx72tOwO4nM',
    path: "Shania Twain/Come On Over/01 - Shania Twain - You're Still The One.mp3"
  },
  {
    id: 'ezpVyx3OWDRgumWog7Hlq',
    path: "Shania Twain/Come On Over/06 - Shania Twain - I'm Holdin' On To Love (To Save My Life).mp3"
  },
  {
    id: 'F6DI24kQgs7TVuLweJPkq',
    path: "Shania Twain/Come On Over/13 - Shania Twain - That Don't Inpress Me Much (UK Dance Mix).mp3"
  },
  {
    id: 'W2Uz9IFrvBJVVACU85CmG',
    path: 'Shania Twain/Come On Over/02 - Shania Twain - When.mp3'
  },
  {
    id: '4bipJ8c27xhGHQa8LP8vv',
    path: "Shania Twain/Come On Over/09 - Shania Twain - Whatever You Do! Don't!.mp3"
  },
  {
    id: 'p0adPygdvrpr02lp9pvR8',
    path: "Shania Twain/Come On Over/05 - Shania Twain - I Won't  Leave You Lonely.mp3"
  },
  {
    id: '4mV96jqjhW28glF5I0ezF',
    path: "Shania Twain/Come On Over/12 - Shania Twain - Don't Be Stupid (You Know I Love You).mp3"
  },
  {
    id: 'W1uCR61X57G55jzcvTj18',
    path: 'Shania Twain/Come On Over/15 - Shania Twain - If You Wanna Touch Her, Ask!.mp3'
  },
  {
    id: 'zcB1D66EMtQnRFIf81kcU',
    path: 'Shania Twain/Come On Over/10 - Shania Twain - Man! I Feel Like A Woman!.mp3'
  },
  {
    id: '6DKMljMbVArcrqeO0ppGj',
    path: 'Shania Twain/Come On Over/04 - Shania Twain - Black Eyes, Blue Tears.mp3'
  },
  {
    id: 'eWZSGBXDVAqGcRCkMinBx',
    path: 'Shania Twain/Come On Over/11 - Shania Twain - Love Gets Me Every Time.mp3'
  },
  {
    id: 'GCPDkgyHn4a6harhITQTX',
    path: 'Shania Twain/Come On Over/16 - Shania Twain - Rock This Country!.mp3'
  },
  {
    id: 'ERT63r2oGwS6l0M2RsesN',
    path: "Shania Twain/Come On Over/14 - Shania Twain - Honey, I'm Home.mp3"
  },
  {
    id: 'k0VAu1H8u1lqdvxL78TYF',
    path: "Shania Twain/Come On Over/08 - Shania Twain - You've Got Away.mp3"
  },
  {
    id: 'um5P1w7YegcTIJKzVjIj2',
    path: 'Shania Twain/Come On Over/03 - Shania Twain - From This Moment On.mp3'
  },
  {
    id: 'YbP7qb5phCElCCBL5egyz',
    path: 'Snow Patrol/Final Straw/12 - Snow Patrol - Same.mp3'
  },
  {
    id: 'ebkHd8hyWh2hAXodnC2FS',
    path: 'Snow Patrol/Final Straw/09 - Snow Patrol - Ways & Means.mp3'
  },
  {
    id: 'ZA97JNSFL5JHb0VUZkANI',
    path: "Snow Patrol/Final Straw/13 - Snow Patrol - We Can Run Away Now They're All Dead and Gone.mp3"
  },
  {
    id: 'LBVpp5p1z0aQECDd5Ybo1',
    path: 'Snow Patrol/Final Straw/08 - Snow Patrol - Grazed Knees.mp3'
  },
  {
    id: 'S8l0UOQZecvR2bCqV5ZgT',
    path: 'Snow Patrol/Final Straw/07 - Snow Patrol - Run.mp3'
  },
  {
    id: 'OVpVHizoWoZdBQji34e3J',
    path: "Snow Patrol/Final Straw/04 - Snow Patrol - Whatever's Left.mp3"
  },
  {
    id: 'LRTE8JFPU5xI3XDuY55wA',
    path: 'Snow Patrol/Final Straw/14 - Snow Patrol - Half the Fun.mp3'
  },
  {
    id: 'bIk854tBaRbLczPELGQ2D',
    path: 'Snow Patrol/Final Straw/03 - Snow Patrol - Gleaming Auction.mp3'
  },
  {
    id: 'gSIZr2fBFrpYzKQTZFDJ1',
    path: 'Snow Patrol/Final Straw/02 - Snow Patrol - Wow.mp3'
  },
  {
    id: 'oJOMBfASFLs8Kq3RR6OQb',
    path: 'Snow Patrol/Final Straw/10 - Snow Patrol - Tiny Little Fractures.mp3'
  },
  {
    id: 'EgOlqtikX3j3iiAqIisaG',
    path: 'Snow Patrol/Final Straw/06 - Snow Patrol - Chocolate.mp3'
  },
  {
    id: 'hZoIKkMZZ3HQ4EU2assW9',
    path: 'Snow Patrol/Final Straw/01 - Snow Patrol - How to Be Dead.mp3'
  },
  {
    id: 'rwejahkM0akYMm4h3hE2Z',
    path: 'Snow Patrol/Final Straw/11 - Snow Patrol - Somewhere a Clock Is Ticking.mp3'
  },
  {
    id: 'fVnURC82YNyokZjJ9J8lg',
    path: 'Snow Patrol/Final Straw/05 - Snow Patrol - Spitting Games.mp3'
  },
  {
    id: 'lhRSMbBA5fUPTTUHYUuhV',
    path: "Simply Red/Greatest Hits/10 - You've Got It.mp3"
  },
  {
    id: 'luAc8QX0EoMT3XnAXBL0A',
    path: 'Simply Red/Greatest Hits/18 - Fairground.mp3'
  },
  {
    id: 'CiwTpYYce285pWSkEPDQm',
    path: 'Simply Red/Greatest Hits/02 - Stars.mp3'
  },
  {
    id: 'degPg6ddAXloEBSUtWgJX',
    path: "Simply Red/Greatest Hits/05 - It's Only Love.mp3"
  },
  {
    id: 'Pzavrm9FEgUpiF8XldGTC',
    path: 'Simply Red/Greatest Hits/06 - The Right Thing.mp3'
  },
  {
    id: 'e8RDxkgm6VtJfG1KpXxZH',
    path: 'Simply Red/Greatest Hits/14 - Never Never Love.mp3'
  },
  {
    id: 'sxOIf1nZDgnCToJY3on08',
    path: 'Simply Red/Greatest Hits/07 - Your Mirror.mp3'
  },
  {
    id: 'vJx4A84aubOkbyC4DTrou',
    path: 'Simply Red/Greatest Hits/15 - You Make Me Feel Brand New.mp3'
  },
  {
    id: 'meCEBuiCzR2o8givZHCON',
    path: 'Simply Red/Greatest Hits/13 - Angel.mp3'
  },
  {
    id: '90HMPQC0wbpeSwLJ3odqm',
    path: "Simply Red/Greatest Hits/19 - If You Don't Know Me By Now.mp3"
  },
  {
    id: 'SfdpfJU9LqJHuu3sxut58',
    path: 'Simply Red/Greatest Hits/09 - Fake.mp3'
  },
  {
    id: 'HHzjdJVgWl9dNb9BPEpkw',
    path: 'Simply Red/Greatest Hits/12 - So Not Over You.mp3'
  },
  {
    id: '7DGAhe5FvCdyAMbDX22sR',
    path: 'Simply Red/Greatest Hits/08 - For Your Babies.mp3'
  },
  {
    id: 'bnNMvwcJJKQ4M6dIWbtt0',
    path: 'Simply Red/Greatest Hits/01 - Sunrise.mp3'
  },
  {
    id: 'g0bvTB8nBKbVLrWBW0dOQ',
    path: 'Simply Red/Greatest Hits/16 - Something Got Me Started.mp3'
  },
  {
    id: 'a6tRQXryeTltXNI3HdSR5',
    path: "Simply Red/Greatest Hits/17 - Money's Too Tight To Mention.mp3"
  },
  {
    id: '97OgquqE1JxfYQjaZhus9',
    path: 'Simply Red/Greatest Hits/03 - A New Flame.mp3'
  },
  {
    id: 'z6t0oo3clonjeThZFduaL',
    path: 'Simply Red/Greatest Hits/11 - Say You Love Me.mp3'
  },
  {
    id: 'mpXbcJh8y1JplTJr3eWXl',
    path: 'Simply Red/Greatest Hits/04 - Holding Back The Years.mp3'
  },
  {
    id: 'ZSNc6LtzskTkPqC98TvfV',
    path: "Stereophonics/Performance and Cocktails/6. Half The Lies You Tell Ain't True.mp3"
  },
  {
    id: 'jkT6tZFhuFGWIVWmkejYD',
    path: 'Stereophonics/Performance and Cocktails/11. She Takes Her Clothes Off.mp3'
  },
  {
    id: 'J41TGR94fZvq3Cezf0fYx',
    path: "Stereophonics/Performance and Cocktails/7. I Wouldn't Believe Your Radio.mp3"
  },
  {
    id: 'yBSn5bUHfO5wCNo6Jpop6',
    path: 'Stereophonics/Performance and Cocktails/13. I Stopped To Fill My Car Up.mp3'
  },
  {
    id: 'MDXbelC7jPzEDYSTe6NKf',
    path: "Stereophonics/Performance and Cocktails/4. Pick A Part That's New.mp3"
  },
  {
    id: 'JcB4M14XT4Gc57dIX8Vgb',
    path: 'Stereophonics/Performance and Cocktails/3. Hurry Up And Wait.mp3'
  },
  {
    id: '6O2g89FAMBedPJqZ14pzP',
    path: 'Stereophonics/Performance and Cocktails/1. The Bartender And The Thief.mp3'
  },
  {
    id: '3RujXDQSBB0qKEZOMj3qN',
    path: 'Stereophonics/Performance and Cocktails/5. Just Looking.mp3'
  },
  {
    id: 'HjkxPUoKjgc9RpZZHEfdi',
    path: 'Stereophonics/Performance and Cocktails/9. Is Yesterday, Tomorrow, Today.mp3'
  },
  {
    id: 'pv3Hn5NGUHnwHSbTi39Bi',
    path: 'Stereophonics/Performance and Cocktails/8. T-Shirt Sun Tan.mp3'
  },
  {
    id: 'uVenFeI7mn3LwFMCNG5gK',
    path: 'Stereophonics/Performance and Cocktails/10. A Minute Longer.mp3'
  },
  {
    id: 'OXcPuizrMFToTPNat8Ren',
    path: 'Stereophonics/Performance and Cocktails/2. Roll Up And Shine.mp3'
  },
  {
    id: 'fSXePGLxP4VellyyqLdbb',
    path: 'Stereophonics/Performance and Cocktails/12. Plastic California.mp3'
  },
  {
    id: 'l8CXPbHp1YMCasqrKhvNT',
    path: 'Stereophonics/Word Gets Around/06 - Stereophonics - Not Up To You.mp3'
  },
  {
    id: 'HgESxZPzKv1eP39rkr8p2',
    path: 'Stereophonics/Word Gets Around/08 - Stereophonics - Same Size Feet.mp3'
  },
  {
    id: 'DPS0wpwohSmuEd2RPoIKU',
    path: 'Stereophonics/Word Gets Around/11 - Stereophonics - Too Many Sandwiches.mp3'
  },
  {
    id: 'cqvdBhHP56SwbdM6xqH3d',
    path: 'Stereophonics/Word Gets Around/07 - Stereophonics - Check My Eyelids For Holes.mp3'
  },
  {
    id: 'tYhFd9kqCTgH4gMaOEogl',
    path: 'Stereophonics/Word Gets Around/01 - Stereophonics - A Thousand Trees.mp3'
  },
  {
    id: 'VfViNwKfIkx9YeoIKQIH1',
    path: "Stereophonics/Word Gets Around/12 - Stereophonics - Billy Davey's Daughter.mp3"
  },
  {
    id: 'yHklOMdLCETG6qtrPKwpj',
    path: "Stereophonics/Word Gets Around/03 - Stereophonics - More Life In A Tramp's Vest.mp3"
  },
  {
    id: 'La4bkLDN5E7LttcXeQnbc',
    path: 'Stereophonics/Word Gets Around/04 - Stereophonics - Local Boy In the Photograph.mp3'
  },
  {
    id: 'FlNqkvYlLxN79JQdafz7q',
    path: 'Stereophonics/Word Gets Around/02 - Stereophonics - Looks Like Chaplin.mp3'
  },
  {
    id: 'iXoyWgfJk6YkuFxwZNqRi',
    path: 'Stereophonics/Word Gets Around/10 - Stereophonics - Goldfish Bowl.mp3'
  },
  {
    id: 'HYPzJrt4AH9oMEQqqYKMS',
    path: 'Stereophonics/Word Gets Around/05 - Stereophonics - Traffic.mp3'
  },
  {
    id: 'hCsdBZcxWGSzgzrXY4kVe',
    path: 'Stereophonics/Word Gets Around/09 - Stereophonics - Last Of The Big Time Drinkers.mp3'
  },
  {
    id: 'jZNTGJG7Mg4uu0WYiKsov',
    path: 'Stone Roses/The Stone Roses/08 - Stone Roses - Made Of Stone.mp3'
  },
  {
    id: 'DNUY6r74pNbuW5DZLyxLN',
    path: 'Stone Roses/The Stone Roses/11 - Stone Roses - I Am The Resurrection.mp3'
  },
  {
    id: 'jVQ7u2by8MDkMc3EtDpVp',
    path: 'Stone Roses/The Stone Roses/05 - Stone Roses - Bye Bye Badman.mp3'
  },
  {
    id: 'UL2hpoui3110nTgfhvvzH',
    path: 'Stone Roses/The Stone Roses/06 - Stone Roses - Elizabeth My Dear.mp3'
  },
  {
    id: '4iM49AtoklVygxUIs1xXF',
    path: 'Stone Roses/The Stone Roses/02 - Stone Roses - She Bangs The Drums.mp3'
  },
  {
    id: 'VKml87dmGnkN78yHBhOZF',
    path: 'Stone Roses/The Stone Roses/03 - Stone Roses - Waterfall.mp3'
  },
  {
    id: 'md4Mn3ZINmTUR2e11lAYU',
    path: "Stone Roses/The Stone Roses/04 - Stone Roses - Don't Stop.mp3"
  },
  {
    id: 'TMGRaJl8BvQtCUcVPLpmo',
    path: 'Stone Roses/The Stone Roses/07 - Stone Roses - (Song For My) Sugar Spun Sister.mp3'
  },
  {
    id: 'ETRgu3W08n4FYKtGTRRah',
    path: 'Stone Roses/The Stone Roses/01 - Stone Roses - I Wanna Be Adored.mp3'
  },
  {
    id: 'R66Kuq2qUddRE4FRei1L3',
    path: 'Stone Roses/The Stone Roses/09 - Stone Roses - Shoot You Down.mp3'
  },
  {
    id: '53LBE6x8aGMWfVHLZe3pT',
    path: 'Stone Roses/The Stone Roses/10 - Stone Roses - This Is The One.mp3'
  },
  {
    id: '9y5fYuYXMBDuaQ7EwX19a',
    path: 'Supertramp/Crime of the Century/02 Bloody Well Right.mp3'
  },
  {
    id: '4h7tWclOwT8gOpuC0UD8O',
    path: 'Supertramp/Crime of the Century/03 Hide in Your Shell.mp3'
  },
  {
    id: '5QSIFKy7EYoWeWIulGITt',
    path: 'Supertramp/Crime of the Century/06 Rudy.mp3'
  },
  {
    id: 'u8IEZn3YzpYtNVHUq4VLo',
    path: 'Supertramp/Crime of the Century/04 Asylum.mp3'
  },
  {
    id: 'yKjF9ChMXuxtytc2dHKpw',
    path: 'Supertramp/Crime of the Century/05 Dreamer.mp3'
  },
  {
    id: 'eMQaE7P9yOJUfE6spTfj2',
    path: 'Supertramp/Crime of the Century/07 If Everyone Was Listening.mp3'
  },
  {
    id: 'c9MWTPNH6zzwxsxFJgu1u',
    path: 'Supertramp/Crime of the Century/08 Crime of the Century.mp3'
  },
  {
    id: 'Fo0lAoS2LVbkWG9wRzYeh',
    path: 'Supertramp/Crime of the Century/01 School.mp3'
  },
  {
    id: '3Mrnj5Pxn77Wkfm2fpm3I',
    path: 'Supertramp/Breakfast in America/08 Just Another Nervous Wreck.mp3'
  },
  {
    id: 'oHQ05mr9bO59YyenMUJB2',
    path: 'Supertramp/Breakfast in America/09 Casual Conversations.mp3'
  },
  {
    id: 'kjgNF67Xqn75r1qVqhITW',
    path: 'Supertramp/Breakfast in America/03 Goodbye Stranger.mp3'
  },
  {
    id: 'hwHwVZxwhZFZzSsZ4tDAm',
    path: 'Supertramp/Breakfast in America/01 Gone Hollywood.mp3'
  },
  {
    id: 'kp8dmYz0ZsR9kb8kHBMRv',
    path: 'Supertramp/Breakfast in America/07 Lord is it Mine.mp3'
  },
  {
    id: 'G586p57XJrKQUv2sTYzD9',
    path: 'Supertramp/Breakfast in America/06 Take The Long Way Home.mp3'
  },
  {
    id: 'c5Mxuz0bUzThHDChtUk5J',
    path: 'Supertramp/Breakfast in America/02 The Logical Song.mp3'
  },
  {
    id: 'KjbTaTziLqL0Edk9Y3w27',
    path: 'Supertramp/Breakfast in America/05 Oh Darling.mp3'
  },
  {
    id: 'nXb8qzOKLsjwSoFpEwyhT',
    path: 'Supertramp/Breakfast in America/10 Child of Vision.mp3'
  },
  {
    id: 'aLWSts4cynY6D4xDFpy6O',
    path: 'Supertramp/Breakfast in America/04 Breakfast in America.mp3'
  },
  {
    id: 'U0SqZKlxop4FuF1qVElb5',
    path: 'Stone Roses/Second Coming/09 - The Stone Roses - Good Times.mp3'
  },
  {
    id: 'D6xFgHdKENaF1dtqKUuXg',
    path: 'Stone Roses/Second Coming/07 - The Stone Roses - Begging You.mp3'
  },
  {
    id: 'bEhcClbkprQ1YNGDicXiU',
    path: 'Stone Roses/Second Coming/05 - The Stone Roses - Your Star Will Shine.mp3'
  },
  {
    id: 'LUkMyIAjaHIl2iMyHJ7n0',
    path: 'Stone Roses/Second Coming/11 - The Stone Roses - How Do You Sleep.mp3'
  },
  {
    id: 'zdM05hiU1j32znh8jzNlM',
    path: 'Stone Roses/Second Coming/08 - The Stone Roses - Tightrope.mp3'
  },
  {
    id: 'bvKpMQODNhE7zxzNjSns4',
    path: 'Stone Roses/Second Coming/10 - The Stone Roses - Tears.mp3'
  },
  {
    id: 'U8insiFWshZ5qriiE4cP1',
    path: 'Stone Roses/Second Coming/04 - The Stone Roses - Daybreak.mp3'
  },
  {
    id: 'NMKh7xti1BCIxduRcw5Yq',
    path: 'Stone Roses/Second Coming/06 - The Stone Roses - Straight To The Man.mp3'
  },
  {
    id: 'T9ugu9fvXCjfekwAuNty1',
    path: 'Stone Roses/Second Coming/01 - The Stone Roses - Breaking Into Heaven.mp3'
  },
  {
    id: 'kMmDSP5YUXgIOGNTOfYh4',
    path: 'Stone Roses/Second Coming/02 - The Stone Roses - Driving South.mp3'
  },
  {
    id: 'r5B2FUM2hLaIoXVliIxmh',
    path: 'Stone Roses/Second Coming/03 - The Stone Roses - Ten Storey Love Song.mp3'
  },
  {
    id: 'AA4pPVcbtXtnCMtfmlLaH',
    path: 'Stone Roses/Second Coming/12 - The Stone Roses - Love Spreads.mp3'
  },
  {
    id: '4WmLdALz9XBJHAojboebH',
    path: 'T Rex/The Essential Collection/11 - T Rex - The Groover.mp3'
  },
  {
    id: 'USKFXZwse5ENMcqpGv3Iq',
    path: 'T Rex/The Essential Collection/08 - T Rex - Metal Guru.mp3'
  },
  {
    id: 'FneSsQnXK9K1JIXeb3QNQ',
    path: 'T Rex/The Essential Collection/02 - T Rex - Get It On.mp3'
  },
  {
    id: 'c1bH5k1NwFqrOdAa5KEyd',
    path: 'T Rex/The Essential Collection/01 - T Rex - 20th Century Boy.mp3'
  },
  {
    id: '6WMNH7ImPovwS94rvlJFH',
    path: 'T Rex/The Essential Collection/17 - T Rex - Summertime Blues.mp3'
  },
  {
    id: 'ND6ZMCSOnp3TZRB2t4ls1',
    path: 'T Rex/The Essential Collection/10 - T Rex - Debora [Original Full Length Version].mp3'
  },
  {
    id: 'uxWBDhzNpK35DAhje8DyB',
    path: 'T Rex/The Essential Collection/05 - T Rex - Jeepster.mp3'
  },
  {
    id: 'NqNV8wKasC0HkyuaqzDmM',
    path: 'T Rex/The Essential Collection/13 - T Rex - Teenage Dream.mp3'
  },
  {
    id: 'k8ZKR0ZSabpNjQ6dRsPhR',
    path: 'T Rex/The Essential Collection/04 - T Rex - Ride A White Swan.mp3'
  },
  {
    id: 'jPEw21Rie5NGxCCaKpjkB',
    path: 'T Rex/The Essential Collection/15 - T Rex - King Of The Rumbling Spires.mp3'
  },
  {
    id: 'ae3olCGL9YIMa6egqCnTC',
    path: 'T Rex/The Essential Collection/16 - T Rex - By The Light Of The Magical Moon.mp3'
  },
  {
    id: 'NkbxPnfIf8pYN7RbUYEtN',
    path: 'T Rex/The Essential Collection/06 - T Rex - Hot Love.mp3'
  },
  {
    id: 'cudvCUeEU7CsXDlpWnZRq',
    path: 'T Rex/The Essential Collection/09 - T Rex - I Love To Boogie.mp3'
  },
  {
    id: 'XwNV6gv8ipUHI9sNpMPxk',
    path: 'T Rex/The Essential Collection/07 - T Rex - Children Of The Revolution.mp3'
  },
  {
    id: 'drko7BtX5itHTSiNZDC8R',
    path: 'T Rex/The Essential Collection/12 - T Rex - Truck On (Tyke).mp3'
  },
  {
    id: '4aXEBm9tOPicWGN6vZc3x',
    path: 'T Rex/The Essential Collection/03 - T Rex - Telegram Sam.mp3'
  },
  {
    id: '5tJsIsgw19I6F5ihYuKwV',
    path: 'T Rex/The Essential Collection/14 - T Rex - New York City.mp3'
  },
  {
    id: 'YGU8XrdUf8x26oA1Qna7B',
    path: 'The Avalanches/Since I Left You/18 - The Avalanches - Extra Kings.mp3'
  },
  {
    id: 'nzroAI9bvqEnUNV9xHX9X',
    path: 'The Avalanches/Since I Left You/16 - The Avalanches - Little Journey.mp3'
  },
  {
    id: 's6SWLItXLoISF22m9FuqR',
    path: 'The Avalanches/Since I Left You/08 - The Avalanches - Diners Only.mp3'
  },
  {
    id: 'lRo3zMXDkTtEny9SoLqpU',
    path: 'The Avalanches/Since I Left You/04 - Two Hearts In 3 - 4 Time.mp3'
  },
  {
    id: 'LZpmv4WZDNo7m2KzemjU0',
    path: 'The Avalanches/Since I Left You/05 - The Avalanches - Avalanche Rock.mp3'
  },
  {
    id: 'kuALXS9bBfl2HkJUJaZT9',
    path: 'The Avalanches/Since I Left You/15 - The Avalanches - Summer Crane.mp3'
  },
  {
    id: 'hE0zxj3zoBzt6so6W88Pa',
    path: "The Avalanches/Since I Left You/12 - The Avalanches - Pablo's Cruise.mp3"
  },
  {
    id: 'ZU8DyTSHGqI8F1zLe3f2i',
    path: 'The Avalanches/Since I Left You/17 - The Avalanches - Live At Dominoes.mp3'
  },
  {
    id: 'w7hWU4N1mYfarIriadpHV',
    path: 'The Avalanches/Since I Left You/07 - The Avalanches - Close To You.mp3'
  },
  {
    id: 'Cdhy2xSawqkmizSU7OVdo',
    path: 'The Avalanches/Since I Left You/02 - The Avalanches - Stay Another Season.mp3'
  },
  {
    id: 'yON0yzzB774MigFayJKOG',
    path: 'The Avalanches/Since I Left You/09 - The Avalanches - A Different Feeling.mp3'
  },
  {
    id: 'Q4SXtlYNSOJ6HmAkSw5rd',
    path: 'The Avalanches/Since I Left You/03 - The Avalanches - Radio.mp3'
  },
  {
    id: 'xyxfEorir6ajvmllMuLIP',
    path: 'The Avalanches/Since I Left You/06 - The Avalanches - Flight Tonight.mp3'
  },
  {
    id: 'Bc5ZtPzvayMMwLDwb0GWR',
    path: 'The Avalanches/Since I Left You/10 - The Avalanches - Electricity.mp3'
  },
  {
    id: 'ukCtpRreBUNnW2gQVCTt0',
    path: 'The Avalanches/Since I Left You/01 - The Avalanches - Since I Left You.mp3'
  },
  {
    id: 'Iz0O4OArJw2SWj1evejSH',
    path: 'The Avalanches/Since I Left You/11 - The Avalanches - Tonight.mp3'
  },
  {
    id: '0iTWpP5iVz530ajY9nU1U',
    path: 'The Avalanches/Since I Left You/13 - The Avalanches - Frontier Psychiatrist.mp3'
  },
  {
    id: 'zF9ogF4qWh0SZEjr7XtJK',
    path: 'The Avalanches/Since I Left You/14 - The Avalanches - Etoh.mp3'
  },
  {
    id: '7BEye1zlX4jw30cnorxfl',
    path: "The Beatles/Beatles For Sale/13 What You're Doing.mp3"
  },
  {
    id: 'cRLcuaX07awkD38X7Ccaj',
    path: 'The Beatles/Beatles For Sale/01 No Reply.mp3'
  },
  {
    id: '1SoaWmtNu8KGkeq3wwJxW',
    path: "The Beatles/Beatles For Sale/05 I'll Follow The Sun.mp3"
  },
  {
    id: 'WPGFUaFPK9meXv68BJLIC',
    path: "The Beatles/Beatles For Sale/03 Baby's In Black.mp3"
  },
  {
    id: 'QNNYNP63hNS4mS7isY2bg',
    path: "The Beatles/Beatles For Sale/14 Everybody's Trying To Be My Baby.mp3"
  },
  {
    id: '7Mk6k9zxmwDCVc9FDSLNU',
    path: "The Beatles/Beatles For Sale/10 Honey Don't.mp3"
  },
  {
    id: 'I6uc1L6o5GNc1HZUSVX3m',
    path: 'The Beatles/Beatles For Sale/11 Every Little Thing.mp3'
  },
  {
    id: 'zvn5syNJBVDH4eZUaiPx9',
    path: 'The Beatles/Beatles For Sale/09 Words Of Love.mp3'
  },
  {
    id: 'YEIs5ZQAxi1vEZGTbkBi9',
    path: 'The Beatles/Beatles For Sale/06 Mr. Moonlight.mp3'
  },
  {
    id: 'cJPy6UwwNbehza87xikqj',
    path: 'The Beatles/Beatles For Sale/07 Medley_ A. Kansas City B. Hey, Hey, Hey, Hey.mp3'
  },
  {
    id: '1bnNbYoiJH4A4I5aYRn0v',
    path: 'The Beatles/Beatles For Sale/08 Eight Days A Week.mp3'
  },
  {
    id: 'WUaGllNRTnPe3oGUCkFCp',
    path: "The Beatles/Beatles For Sale/02 I'm A Loser.mp3"
  },
  {
    id: 'W5bACaCg2ox2SL1KuNCCm',
    path: 'The Beatles/Beatles For Sale/04 Rock And Roll Music.mp3'
  },
  {
    id: 'JmdDbbw2zopAeOZRWndrJ',
    path: "The Beatles/Beatles For Sale/12 I Don't Want To Spoil The Party.mp3"
  },
  {
    id: 'GCaumUtEAXMQoF3rTlsSs',
    path: 'The Beatles/Help!/02 The Night Before.mp3'
  },
  {
    id: '1HOeOoL2Vydz8eyXwopNl',
    path: 'The Beatles/Help!/12 I`ve Just Seen A Face.mp3'
  },
  {
    id: 'w5frJO5mpwVLJfI6yzPUt',
    path: 'The Beatles/Help!/01 Help!.mp3'
  },
  {
    id: 'iVEhOP7GfDyOwuLr9HwJI',
    path: 'The Beatles/Help!/14 Dizzy Miss Lizzy.mp3'
  },
  {
    id: 'adubaJPShGAt0C8OIHMqR',
    path: "The Beatles/Help!/03 You've Got To Hide Your Love Away.mp3"
  },
  {
    id: 'A5fiukR32AwXN1IPNiKeg',
    path: 'The Beatles/Help!/05 Another Girl.mp3'
  },
  {
    id: 'HNBSgycNnVJg6dWINJfU3',
    path: 'The Beatles/Help!/04 I Need You.mp3'
  },
  {
    id: 'rdZa32WSX7yGaWojYyhpm',
    path: 'The Beatles/Help!/11 Tell Me What You See.mp3'
  },
  {
    id: 'jrIrF1m35VCN3JQeOXmox',
    path: 'The Beatles/Help!/08 Act Naturally.mp3'
  },
  {
    id: 'sdhVDHLHdZXNMCyRxyMON',
    path: 'The Beatles/Help!/13 Yesterday.mp3'
  },
  {
    id: 'S1U6v2YoSlzBtxwLnOGG4',
    path: 'The Beatles/Help!/07 Ticket To Ride.mp3'
  },
  {
    id: 'eTJcu3dByYV4tfN21ampg',
    path: 'The Beatles/Help!/10 You Like Me Too Much.mp3'
  },
  {
    id: 'nYOXyk8UyYwY4YZQ1svFh',
    path: "The Beatles/Help!/09 It's Only Love.mp3"
  },
  {
    id: 'eOhVPalv15KQRNVIcb8nA',
    path: "The Beatles/Help!/06 You're Going To Lose That Girl.mp3"
  },
  {
    id: '09DQL8dh9M855gsrxd06S',
    path: 'The Beatles/Abbey Road/01 Come Together.mp3'
  },
  {
    id: 'pMxb9XBEVUwJh6m61GxhD',
    path: 'The Beatles/Abbey Road/11 Mean Mr. Mustard.mp3'
  },
  {
    id: 'X8PvnhfnfQ2lgCH1BQ1ZK',
    path: 'The Beatles/Abbey Road/07 Here Comes The Sun.mp3'
  },
  {
    id: 'd527jZKXVYk4At8gT8KE9',
    path: 'The Beatles/Abbey Road/02 Something.mp3'
  },
  {
    id: 'Lt1CS5H736DZswdU20XYz',
    path: "The Beatles/Abbey Road/05 Octopus's Garden.mp3"
  },
  {
    id: 'GjE1bVgYEo9Ix38IUTAeM',
    path: 'The Beatles/Abbey Road/16 The End.mp3'
  },
  {
    id: 'kE1oemyOnkUe0bF5i6YQt',
    path: 'The Beatles/Abbey Road/13 She Came In Through The Bathroom Window.mp3'
  },
  {
    id: 'QUv91oSnmllndqhZwt5sF',
    path: 'The Beatles/Abbey Road/10 Sun King.mp3'
  },
  {
    id: 'sWi7bTFKSEvUfoKY14OM5',
    path: 'The Beatles/Abbey Road/04 Oh! Darling.mp3'
  },
  {
    id: 'zEfxzVivYO9mfPTiXBvP7',
    path: 'The Beatles/Abbey Road/12 Polythene Pam.mp3'
  },
  {
    id: 'B6eI7hYT0sZbTcLocERIW',
    path: 'The Beatles/Abbey Road/09 You Never Give Me Your Money.mp3'
  },
  {
    id: 'hzaSLso6eXXgmphO5y1Ed',
    path: 'The Beatles/Abbey Road/08 Because.mp3'
  },
  {
    id: 'Ow9vlaKW7idAtfsNqcK8u',
    path: 'The Beatles/Abbey Road/17 Her Majesty.mp3'
  },
  {
    id: 'aGc6DVXOtXsP7YbtzpYsA',
    path: 'The Beatles/Abbey Road/14 Golden Slumbers.mp3'
  },
  {
    id: 'ghludLF923GXznHzWQPdm',
    path: "The Beatles/Abbey Road/03 Maxwell's Silver Hammer.mp3"
  },
  {
    id: 'gNerIFe7XuJ4mqZ7JuZCx',
    path: 'The Beatles/Abbey Road/15 Carry That Weight.mp3'
  },
  {
    id: 'n77Y0kE6KIlZ9M7wLdR5s',
    path: "The Beatles/Abbey Road/06 I Want You (She's So Heavy).mp3"
  },
  {
    id: 'sCgPZzK3WkAYBrxlhY40o',
    path: 'The Beatles/Please Please Me/07 Please Please Me.mp3'
  },
  {
    id: 's62jXYbvbAc8Sf1ascHxI',
    path: 'The Beatles/Please Please Me/06 Ask Me Why.mp3'
  },
  {
    id: 'lySqmU3MJ8I6UadRkgFD3',
    path: 'The Beatles/Please Please Me/08 Love Me Do.mp3'
  },
  {
    id: 'H1I94KfwZb5Zi5SwIu7tn',
    path: "The Beatles/Please Please Me/13 There's A Place.mp3"
  },
  {
    id: 'U2SrP8eq7Q0wdvuK4xluP',
    path: 'The Beatles/Please Please Me/05 Boys.mp3'
  },
  {
    id: 'reRIRHSoleBiHnB1yuktF',
    path: 'The Beatles/Please Please Me/12 A Taste Of Honey.mp3'
  },
  {
    id: 'itERNCD8styggGvcVZTI4',
    path: 'The Beatles/Please Please Me/03 Anna (Go To Him).mp3'
  },
  {
    id: 'Gt5TMdG9wAPGbtvsXaXSG',
    path: 'The Beatles/Please Please Me/02 Misery.mp3'
  },
  {
    id: 'ZRGDc2EqQiRyjybHzEfiA',
    path: 'The Beatles/Please Please Me/11 Do You Want To Know A Secret.mp3'
  },
  {
    id: 'idWGThpXzw3TTjjxKzJar',
    path: 'The Beatles/Please Please Me/04 Chains.mp3'
  },
  {
    id: 'tbTq7Zvn9Cg3FrcJhrNYs',
    path: 'The Beatles/Please Please Me/14 Twist And Shout.mp3'
  },
  {
    id: 'STxUxzskGzMR7HIhWAM3r',
    path: 'The Beatles/Please Please Me/01 I Saw Her Standing There.mp3'
  },
  {
    id: 'RQqeBfQais0HYKi39rDdc',
    path: "The Beatles/Please Please Me/10 Baby It's You.mp3"
  },
  {
    id: 'Km9AXD6JWzCU2vNdjwmAS',
    path: 'The Beatles/Please Please Me/09 P.S. I Love You.mp3'
  },
  {
    id: 'elQBzhHiymVxStb1SpiWP',
    path: 'The Beatles/Let It Be/04 I Me Mine.mp3'
  },
  {
    id: '7Um6j9LqY8ivyEWkQo54j',
    path: 'The Beatles/Let It Be/03 Across The Universe.mp3'
  },
  {
    id: 'beRosWnulFLYDAZpHey1s',
    path: 'The Beatles/Let It Be/10 The Long And Winding Road.mp3'
  },
  {
    id: 'lC5MU8dbfbtD8bIy9Vpgr',
    path: 'The Beatles/Let It Be/07 Maggie Mae.mp3'
  },
  {
    id: 'Gyt1Xd1MSxtmB07AqGpx1',
    path: 'The Beatles/Let It Be/02 Dig A Pony.mp3'
  },
  {
    id: 'OALLgDJqKobBj3Xog1SKi',
    path: "The Beatles/Let It Be/08 I've Got A Feeling.mp3"
  },
  {
    id: 'ai89ss3Kx6oqHPpTi91VK',
    path: 'The Beatles/Let It Be/12 Get Back.mp3'
  },
  {
    id: 'jrE8TFX56Scl5b20CgnlC',
    path: 'The Beatles/Let It Be/11 For You Blue.mp3'
  },
  {
    id: '0QbY7wBJqYLRt7HGdgeLC',
    path: 'The Beatles/Let It Be/05 Dig It.mp3'
  },
  {
    id: 'Ms7hGd3L3MVnro2vOeRNN',
    path: 'The Beatles/Let It Be/06 Let It Be.mp3'
  },
  {
    id: 'iunhsosieC4jCPTELiXfC',
    path: 'The Beatles/Let It Be/09 One After 909.mp3'
  },
  {
    id: 'M7cRoOAqwSM5LcUXd7UNf',
    path: 'The Beatles/Let It Be/01 Two Of Us.mp3'
  },
  {
    id: 'F9DS9RQGor3mY9PIAmLaw',
    path: 'The Beatles/Revolver/05 Here, There And Everywhere.mp3'
  },
  {
    id: 'NwI9Z3pr8S6B0U7Dno5OB',
    path: 'The Beatles/Revolver/06 Yellow Submarine.mp3'
  },
  {
    id: 'bkcqS5FSsGOuGHJepTaQl',
    path: 'The Beatles/Revolver/08 Good Day Sunshine.mp3'
  },
  {
    id: '4SqSPa3W9usGBs4Lnlf47',
    path: 'The Beatles/Revolver/02 Eleanor Rigby.mp3'
  },
  {
    id: '16V2rUs95Jkr39AaenDKq',
    path: 'The Beatles/Revolver/13 Got To Get You Into My Life.mp3'
  },
  {
    id: 'oG86KK7a7Gi5axl4yJX7m',
    path: 'The Beatles/Revolver/01 Taxman.mp3'
  },
  {
    id: 'GcJ4zRs37S9nskByqMQ22',
    path: 'The Beatles/Revolver/04 Love You To.mp3'
  },
  {
    id: 'Gnvyh2DpPyImEYjk45f8I',
    path: 'The Beatles/Revolver/14 Tomorrow Never Knows.mp3'
  },
  {
    id: 'OEsYCrweUS5IVX81QBLeH',
    path: 'The Beatles/Revolver/09 And Your Bird Can Sing.mp3'
  },
  {
    id: 'fcYQqP52oIRI6XmXmiatg',
    path: 'The Beatles/Revolver/10 For No One.mp3'
  },
  {
    id: '7VVw0pLLrkDexKhK6zbWh',
    path: 'The Beatles/Revolver/11 Doctor Robert.mp3'
  },
  {
    id: '2tz75QJYxLzzxaMQFwlPR',
    path: "The Beatles/Revolver/03 I'm Only Sleeping.mp3"
  },
  {
    id: 'G0zZCRcdElVlJ1BHhLgR3',
    path: 'The Beatles/Revolver/12 I Want To Tell You.mp3'
  },
  {
    id: '6Bz3lxDyRKkarbW7sZxGP',
    path: 'The Beatles/Revolver/07 She Said She Said.mp3'
  },
  {
    id: 'UeXHqyRGHlTom4JaF90HJ',
    path: 'The Beatles/A Hard Days Night/02 I Should Have Known Better.mp3'
  },
  {
    id: 'OKO9kuKd2kkk0ZRYN05vD',
    path: 'The Beatles/A Hard Days Night/03 If I Fell.mp3'
  },
  {
    id: '9LxsnpvRoVgaMOjB6UowS',
    path: 'The Beatles/A Hard Days Night/11 When I Get Home.mp3'
  },
  {
    id: 'FFfYo8dMIaMWR0qHnOEOd',
    path: "The Beatles/A Hard Days Night/01 A Hard Day's Night.mp3"
  },
  {
    id: 'L8GvxhEWqXD5o8309LYBj',
    path: "The Beatles/A Hard Days Night/07 Can't Buy Me Love.mp3"
  },
  {
    id: 'XTO3MOCD1v98tQ5NYnrpR',
    path: 'The Beatles/A Hard Days Night/06 Tell Me Why.mp3'
  },
  {
    id: 'Ac3TU1RBErVUxEBnHedA4',
    path: 'The Beatles/A Hard Days Night/10 Things We Said Today.mp3'
  },
  {
    id: 'uHIsuOLtGchkOwDH695Tz',
    path: "The Beatles/A Hard Days Night/09 I'll Cry Instead.mp3"
  },
  {
    id: 'ETiYm1HRWedRplNFm3yuA',
    path: "The Beatles/A Hard Days Night/04 I'm Happy Just To Dance With You.mp3"
  },
  {
    id: 's55tC0KNYoKsstTM6lCWx',
    path: 'The Beatles/A Hard Days Night/08 Any Time At All.mp3'
  },
  {
    id: 'c09eG35ac1myCFcsBmgTJ',
    path: "The Beatles/A Hard Days Night/12 You Can't Do That.mp3"
  },
  {
    id: 'OqbhF7zQygKVAc4TClsek',
    path: "The Beatles/A Hard Days Night/13 I'll Be Back.mp3"
  },
  {
    id: 'hfrq7lECOITtrSxdglJII',
    path: 'The Beatles/A Hard Days Night/05 And I Love Her.mp3'
  },
  {
    id: 'j5HTzNHnDEhLAFucBChV4',
    path: 'The Beatles/Yellow Submarine/11 March Of The Meanies.mp3'
  },
  {
    id: 'jy4T9jLeyAtwtbL6mLmfo',
    path: 'The Beatles/Yellow Submarine/09 Sea Of Holes.mp3'
  },
  {
    id: '3OqIxJhaQLz4S6DkMhDAD',
    path: 'The Beatles/Yellow Submarine/04 Hey Bulldog.mp3'
  },
  {
    id: 'oVMCLqjgFx9AqHqGRICyM',
    path: 'The Beatles/Yellow Submarine/06 All You Need Is Love.mp3'
  },
  {
    id: 'VrFiRm0S0lyzLX80Z19G7',
    path: 'The Beatles/Yellow Submarine/01 Yellow Submarine.mp3'
  },
  {
    id: 'Dd6NjnclqqTiM5dVlRp0B',
    path: 'The Beatles/Yellow Submarine/03 All Together Now.mp3'
  },
  {
    id: 'jYzzZneCkWvHPnQAUivwg',
    path: 'The Beatles/Yellow Submarine/12 Pepperland Laid Waste.mp3'
  },
  {
    id: 'mdKEqMLH7dYafIuqJYQmN',
    path: 'The Beatles/Yellow Submarine/13 Yellow Submarine In Pepperland.mp3'
  },
  {
    id: 'hTl3iht4XGdv1pXx0db6M',
    path: "The Beatles/Yellow Submarine/05 It's All Too Much.mp3"
  },
  {
    id: 'YVpDzaDmq3NsKqwRMcZx1',
    path: 'The Beatles/Yellow Submarine/08 Sea Of Time.mp3'
  },
  {
    id: '05g35kn3Bl4JiOvhKNo9X',
    path: 'The Beatles/Yellow Submarine/07 Pepperland.mp3'
  },
  {
    id: 'XvQTjSlvZHpk0xYFko0Tp',
    path: 'The Beatles/Yellow Submarine/02 Only A Northern Song.mp3'
  },
  {
    id: 'L8usF9I9EENik8hfoQj8X',
    path: 'The Beatles/Yellow Submarine/10 Sea Of Monsters.mp3'
  },
  {
    id: '0BF7nG8w8QKzwyvUpXd4U',
    path: 'The Chemical Brothers/Surrender/10 - The Chemical Brothers - Surrender.mp3'
  },
  {
    id: 'pcmmLvs9XYnQKYooFe8lk',
    path: 'The Chemical Brothers/Surrender/09 - The Chemical Brothers - Hey Boy Hey Girl.mp3'
  },
  {
    id: 'XpT812PRANFrJIXzptKSK',
    path: 'The Chemical Brothers/Surrender/11 - The Chemical Brothers - Dream On.mp3'
  },
  {
    id: 'J4hWLDRsU4k1DwnIf6th5',
    path: 'The Chemical Brothers/Surrender/02 - The Chemical Brothers - Under the Influence.mp3'
  },
  {
    id: 'RBqYtMM204uGhPDQxk0Hm',
    path: 'The Chemical Brothers/Surrender/05 - The Chemical Brothers - Let Forever Be.mp3'
  },
  {
    id: 'PYSC7oXs6dMYHAB5Jc4kk',
    path: 'The Chemical Brothers/Surrender/06 - The Chemical Brothers - The Sunshine Underground.mp3'
  },
  {
    id: 'U46RlxUyuD1cPff9jOeDY',
    path: 'The Chemical Brothers/Surrender/04 - The Chemical Brothers - Orange Wedge.mp3'
  },
  {
    id: 'ed3m2HHFHk9UaS0Saiccz',
    path: 'The Chemical Brothers/Surrender/03 - The Chemical Brothers - Out of Control.mp3'
  },
  {
    id: 'nLUMQKG1FM0cWTsx2HSH6',
    path: 'The Chemical Brothers/Surrender/08 - The Chemical Brothers - Got Glint.mp3'
  },
  {
    id: 'Ej6x5VFCBCLdgf2Z6EXST',
    path: 'The Chemical Brothers/Surrender/01 - The Chemical Brothers - Music Response.mp3'
  },
  {
    id: 'qud8JGriLKVBa8yQmeztU',
    path: 'The Chemical Brothers/Surrender/07 - The Chemical Brothers - Asleep from Day.mp3'
  },
  {
    id: 'xFeaTfyzqaqdvZ2l52isN',
    path: 'The Beatles/With The Beatles/10 You Really Got A Hold On Me.mp3'
  },
  {
    id: 'zPPRDU0fHvNRhtpRv3n0o',
    path: 'The Beatles/With The Beatles/09 Hold Me Tight.mp3'
  },
  {
    id: 'FQPhoj3zcpSMefyTsUh8Q',
    path: "The Beatles/With The Beatles/01 It Won't Be Long.mp3"
  },
  {
    id: 'XKZIUbnTIEFnIxEA3b6fp',
    path: 'The Beatles/With The Beatles/05 Little Me.mp3'
  },
  {
    id: 'BFrUk2tUQwwy1VKop317Q',
    path: 'The Beatles/With The Beatles/12 Devil In Her Heart.mp3'
  },
  {
    id: '7QzxawmPd2p0KA0aIJFA1',
    path: 'The Beatles/With The Beatles/07 Please Mister Postman.mp3'
  },
  {
    id: 'Ty5wOlEphVEunhpGjdWaA',
    path: 'The Beatles/With The Beatles/11 I Wanna Be Your Man.mp3'
  },
  {
    id: 'ih0vhFQblLUsmdwETwKf1',
    path: "The Beatles/With The Beatles/02 All I've Got To Do.mp3"
  },
  {
    id: 'hb8jsJbLBxpNEUwEXLmRq',
    path: 'The Beatles/With The Beatles/13 Not A Second Time.mp3'
  },
  {
    id: 'XWfMksi3K7aY3cT1fhgsW',
    path: "The Beatles/With The Beatles/14 Money (That's What I Want).mp3"
  },
  {
    id: 'rFjREsKz3N62tqPCCb3eF',
    path: 'The Beatles/With The Beatles/03 All My Loving.mp3'
  },
  {
    id: 'iXYm1XDvb62YaIVW6Kyxq',
    path: "The Beatles/With The Beatles/04 Don't Bother Me.mp3"
  },
  {
    id: 'Calzci4pEj5vcCW8iZaJk',
    path: 'The Beatles/With The Beatles/06 Till There Was You.mp3'
  },
  {
    id: 'dVfT9Bn4NICmUtDgyMdWx',
    path: 'The Beatles/With The Beatles/08 Roll Over Beethoven.mp3'
  },
  {
    id: '1gtDdC3XEh0x6us5NIp6d',
    path: 'The Chemical Brothers/Dig Your Own Hole/09 - Chemical Brothers - Lost in the K-Hole.mp3'
  },
  {
    id: 'PVjvgZrVjEFKdx7Gcunoe',
    path: 'The Chemical Brothers/Dig Your Own Hole/03 - Chemical Brothers - Elektrobank.mp3'
  },
  {
    id: 'ngG10nJhsDFg3OldRUL1N',
    path: 'The Chemical Brothers/Dig Your Own Hole/11 - Chemical Brothers - The Private Psychedelic Reel.mp3'
  },
  {
    id: 'wcqGSD9I4nbMlVwrDMJnd',
    path: 'The Chemical Brothers/Dig Your Own Hole/02 - Chemical Brothers - Dig Your Own Hole.mp3'
  },
  {
    id: 'u5ZoVjDG5Y2vw7JdoAdtB',
    path: "The Chemical Brothers/Dig Your Own Hole/01 - Chemical Brothers - Block Rockin' Beats.mp3"
  },
  {
    id: 'iqRhddOTGBHTOyUAMBzWv',
    path: 'The Chemical Brothers/Dig Your Own Hole/08 - Chemical Brothers - Get Up On It Like This.mp3'
  },
  {
    id: 'mybjHktaZd3Gbe6j1PERD',
    path: 'The Chemical Brothers/Dig Your Own Hole/05 - Chemical Brothers - Setting Sun.mp3'
  },
  {
    id: 'EyxiEtWLxxFfgnJHHhiyz',
    path: "The Chemical Brothers/Dig Your Own Hole/06 - Chemical Brothers - It Doesn't Matter.mp3"
  },
  {
    id: 'llwtLLSPRU65bk1RTq8TU',
    path: 'The Chemical Brothers/Dig Your Own Hole/04 - Chemical Brothers - Piku.mp3'
  },
  {
    id: 'nBo941NFyElBpu1vhWQ9s',
    path: "The Chemical Brothers/Dig Your Own Hole/07 - Chemical Brothers - Don't Stop the Rock.mp3"
  },
  {
    id: 'SvL9RcAlHwe5aBk8D3tUg',
    path: 'The Chemical Brothers/Dig Your Own Hole/10 - Chemical Brothers - Where Do I Begin.mp3'
  },
  {
    id: 'KuMUL5wSMJoSqd5u2gGwn',
    path: 'The Corrs/Forgiven, Not Forgotten/05 - Someday.mp3'
  },
  {
    id: 'VtXHwGUPuNRfBG9R8pzVr',
    path: 'The Corrs/Forgiven, Not Forgotten/10 - Love To Love You.mp3'
  },
  {
    id: 'tpWdiXmvKAI163stzoiLt',
    path: 'The Corrs/Forgiven, Not Forgotten/04 - Along With The Girls  (instrumental).mp3'
  },
  {
    id: 'ChlaDM5zJhlGkCUXkFnST',
    path: 'The Corrs/Forgiven, Not Forgotten/02 - Forgiven Not Forgotten.mp3'
  },
  {
    id: 'nFKixlH89v3Ko98uKq7Rt',
    path: 'The Corrs/Forgiven, Not Forgotten/09 - Toss The Feathers  (instrumental).mp3'
  },
  {
    id: 'VpESXLnigm6aW7pufGRfh',
    path: 'The Corrs/Forgiven, Not Forgotten/07 - The Right Time.mp3'
  },
  {
    id: 'RaolDjAeTMboGF9mGsn3i',
    path: 'The Corrs/Forgiven, Not Forgotten/01 - Erin Shore  (instrumental, traditional intro).mp3'
  },
  {
    id: 's9WUOYB0jcKj75mB0HhHR',
    path: 'The Corrs/Forgiven, Not Forgotten/15 - Erin Shore  (instrumental).mp3'
  },
  {
    id: 'MKrncgSqtIlp2ot0cfNTD',
    path: 'The Corrs/Forgiven, Not Forgotten/06 - Runaway.mp3'
  },
  {
    id: '4iSK5YN8nNAbdV8Skl3cn',
    path: 'The Corrs/Forgiven, Not Forgotten/03 - Heaven Knows.mp3'
  },
  {
    id: 'MUUMIwEBP3CQa9GRNiITO',
    path: 'The Corrs/Forgiven, Not Forgotten/13 - Closer.mp3'
  },
  {
    id: 'HcDDh8YprNUTWxbFVyywB',
    path: 'The Corrs/Forgiven, Not Forgotten/12 - Carraroe Jig  (instrumental).mp3'
  },
  {
    id: 'tTZOEroaSGMZdag0B2xo2',
    path: 'The Corrs/Forgiven, Not Forgotten/08 - The Minstrel Boy  (instrumental).mp3'
  },
  {
    id: '7VIDH3rFEso9lLkpL2Dms',
    path: 'The Corrs/Forgiven, Not Forgotten/11 - Secret Life.mp3'
  },
  {
    id: 'm6mgy5pGRwhJJzkfy2p1F',
    path: 'The Corrs/Forgiven, Not Forgotten/14 - Leave Me Alone.mp3'
  },
  {
    id: 'fps0jDmsqAsbCC6zu0vKp',
    path: 'The Beatles/Rubber Soul/04 Nowhere Man.mp3'
  },
  {
    id: 'kAU7JwGfxGW1S9Csk9o2S',
    path: 'The Beatles/Rubber Soul/12 Wait.mp3'
  },
  {
    id: 'yvUrCHBNnfjpQBJYtfjpD',
    path: 'The Beatles/Rubber Soul/01 Drive My Car.mp3'
  },
  {
    id: 'QhOFrBaqsHmbHtmoAoFLq',
    path: 'The Beatles/Rubber Soul/02 Norwegian Wood (The Bird Has Flown).mp3'
  },
  {
    id: 'XtmEhqnl0IQ7keGgNbmlw',
    path: 'The Beatles/Rubber Soul/06 The Word.mp3'
  },
  {
    id: 'tbOil9rPDedlIeGLOMERO',
    path: 'The Beatles/Rubber Soul/13 If I Needed Someone.mp3'
  },
  {
    id: '1eB9PFALIHGR0NuEy4xhj',
    path: 'The Beatles/Rubber Soul/14 Run For Your Life.mp3'
  },
  {
    id: 'HCS3fZTGkFNqealL1yy8t',
    path: 'The Beatles/Rubber Soul/05 Think For Yourself.mp3'
  },
  {
    id: 'B3BlJ2AvEqxIGLSmbEQgA',
    path: 'The Beatles/Rubber Soul/09 Girl.mp3'
  },
  {
    id: '8X5iFhw9zJAKEGlmZSxl9',
    path: 'The Beatles/Rubber Soul/08 What Goes On.mp3'
  },
  {
    id: '0SAbRP0cTKMh5ZeEIh9Kb',
    path: 'The Beatles/Rubber Soul/11 In My Life.mp3'
  },
  {
    id: 'nTMKIoZwJYWTtkQ5kX4YQ',
    path: "The Beatles/Rubber Soul/10 I'm Looking Through You.mp3"
  },
  {
    id: 'aM3WqbyPnPlB0TqlPcEhW',
    path: 'The Beatles/Rubber Soul/07 Michelle.mp3'
  },
  {
    id: 'XEOWJaCI4otY0yw44gBlS',
    path: "The Beatles/Rubber Soul/03 You Won't See Me.mp3"
  },
  {
    id: '67h4Sq2sXE5ypyZQXhs3l',
    path: 'The Corrs/Talk on Corners/14 - No Good for Me.mp3'
  },
  {
    id: 'VNH4p0Mam9GrrnsYfJYIm',
    path: 'The Corrs/Talk on Corners/12 - Intimacy.mp3'
  },
  {
    id: 'rvxEE8DnlcpRG3NRzA7uF',
    path: "The Corrs/Talk on Corners/07 - Don't Say You Love Me.mp3"
  },
  {
    id: '1aYxKLDqWcg5MY2fmtzYF',
    path: 'The Corrs/Talk on Corners/11 - Paddy McCarthy.mp3'
  },
  {
    id: 'r33vEVrSCsXTigfA3DgiH',
    path: 'The Corrs/Talk on Corners/02 - So Young (K-Klass Remix).mp3'
  },
  {
    id: 'jAoBcXtP3wvWWeGNj0cNi',
    path: 'The Corrs/Talk on Corners/01 - What Can I Do (Tin Tin Out Remix).mp3'
  },
  {
    id: 'iW32MhzIhdjxMQQpPUvhl',
    path: 'The Corrs/Talk on Corners/09 - Runaway (Tin Tin Out Remix).mp3'
  },
  {
    id: 'q8gQ6N3ybyWWQRiM9jpNt',
    path: 'The Corrs/Talk on Corners/03 - Only When I Sleep.mp3'
  },
  {
    id: 'GFAn5YEuTWH6PBO1gfng9',
    path: 'The Corrs/Talk on Corners/10 - Hopelessly Addicted.mp3'
  },
  {
    id: 'IEKAJnOKdmgaa832eHfR5',
    path: "The Corrs/Talk on Corners/05 - Dreams (Tee's Radio).mp3"
  },
  {
    id: '4eBQJutOzIqjvWITzZ5ub',
    path: "The Corrs/Talk on Corners/04 - When He's Not Around.mp3"
  },
  {
    id: '8MPwb60ueAHSTsuOrzFLb',
    path: 'The Corrs/Talk on Corners/06 - I Never Loved You Anyway.mp3'
  },
  {
    id: 'TC4MS2COIE2eov8GpPxxc',
    path: 'The Corrs/Talk on Corners/08 - Love Gives, Love Takes.mp3'
  },
  {
    id: 'QnwEkttcAmW4pbVIwtbS4',
    path: 'The Corrs/Talk on Corners/15 - Little Wing.mp3'
  },
  {
    id: 'ia71DT7bJQ1HHuRoUQ0jL',
    path: 'The Corrs/Talk on Corners/13 - Queen Of Hollywood.mp3'
  },
  {
    id: '1Ldhk5Zb9wuYo7h1j9ftt',
    path: "The Cranberries/No Need To Arque/11. Yeat's Grave.mp3"
  },
  {
    id: 'eCqwOAmoZPLDPU8TCDfEp',
    path: 'The Cranberries/No Need To Arque/07. The Icicle Melts.mp3'
  },
  {
    id: 'mxAE1t9NHSzpiFRyh6af0',
    path: 'The Cranberries/No Need To Arque/09. Ridiculous Thoughts.mp3'
  },
  {
    id: 'hNT1DXTKiEOVwlhzA7YFB',
    path: "The Cranberries/No Need To Arque/02. I Can't Be With You.mp3"
  },
  {
    id: 'FzTDy61ndiUAbSpWgMgQS',
    path: 'The Cranberries/No Need To Arque/04. Zombie.mp3'
  },
  {
    id: 'LnZsZeRYRhLaOBMlaFSX3',
    path: 'The Cranberries/No Need To Arque/12. Daffodil Lament.mp3'
  },
  {
    id: 'faock3Gq00Fk1sY8d6ItL',
    path: 'The Cranberries/No Need To Arque/05. Empty.mp3'
  },
  {
    id: 'GrsMy83FaEofS7Bnok1y3',
    path: 'The Cranberries/No Need To Arque/03. Twenty One.mp3'
  },
  {
    id: 'mNTum9ZUNOkEk9UHTnkL4',
    path: 'The Cranberries/No Need To Arque/08. Disappointment.mp3'
  },
  {
    id: 'D8dMiUuKgByYptBZxkboB',
    path: 'The Cranberries/No Need To Arque/01. Ode To My Family.mp3'
  },
  {
    id: 'YiyAqnNg9J1R1xsLPAMZZ',
    path: 'The Cranberries/No Need To Arque/06. Everything I Said.mp3'
  },
  {
    id: 'sR2Rwpbu6Zhg7xIQUWxtT',
    path: 'The Cranberries/No Need To Arque/13. No Need To Argue.mp3'
  },
  {
    id: '5Y4ezpq2AKDhoeteO1ie1',
    path: 'The Cranberries/No Need To Arque/10. Dreaming My Dreams.mp3'
  },
  {
    id: 'AJPKbTevpjYyWDhVL1bRt',
    path: 'The Cranberries/To the Faithful Departed/13. Bosnia.mp3'
  },
  {
    id: 'cvB5lqXxEueIuItioaRK1',
    path: 'The Cranberries/To the Faithful Departed/12. Joe.mp3'
  },
  {
    id: 'SoFzm28JteXesDJtMtm08',
    path: "The Cranberries/To the Faithful Departed/10. I'm Still Remembering.mp3"
  },
  {
    id: 'RWsCndJSCCTMxNtYYLEXg',
    path: 'The Cranberries/To the Faithful Departed/02. Salvation.mp3'
  },
  {
    id: 'PfXveFxNAfefDCpmU0N3a',
    path: 'The Cranberries/To the Faithful Departed/01. Hollywood.mp3'
  },
  {
    id: 'Bz3NZBiCpiRjtWVufq3If',
    path: 'The Cranberries/To the Faithful Departed/04. Free To Decide.mp3'
  },
  {
    id: '1KqhQMCcbxXHBjnGJqWDh',
    path: 'The Cranberries/To the Faithful Departed/08. I Just Shot John Lennon.mp3'
  },
  {
    id: 'hJBn6Skrej88ikr5v5LAt',
    path: 'The Cranberries/To the Faithful Departed/09. Electric Blue.mp3'
  },
  {
    id: 'yx4KHEoZquJn6831rD9qt',
    path: 'The Cranberries/To the Faithful Departed/05. War Child.mp3'
  },
  {
    id: 'TzFA5vyjMSeuZYpSvdYlZ',
    path: "The Cranberries/To the Faithful Departed/03. When You're Gone.mp3"
  },
  {
    id: 'XUv3f8lgyvJkUi5rmdOKz',
    path: 'The Cranberries/To the Faithful Departed/06. Forever Yellow Skies.mp3'
  },
  {
    id: 'lVSxGz31FjywDBgkmhthP',
    path: 'The Cranberries/To the Faithful Departed/07. The Rebels.mp3'
  },
  {
    id: 'EFHnANrZKAzpMxnJ488U1',
    path: 'The Cranberries/To the Faithful Departed/11. Will You Remember .mp3'
  },
  {
    id: 'fjsDSU0aYdFMwrTX2PC5i',
    path: 'The Kills/Keep On Your Mean Side/05 - Fried My Little Brains.mp3'
  },
  {
    id: 'bYAyLJgvYbPzM0ap7AA1B',
    path: 'The Kills/Keep On Your Mean Side/06 - Hand.mp3'
  },
  {
    id: 'CN59eVKa1xAalnhcUaLKb',
    path: 'The Kills/Keep On Your Mean Side/07 - Hitched.mp3'
  },
  {
    id: 'He2sEvzYkK7gAcq8MRDxb',
    path: 'The Kills/Keep On Your Mean Side/08 - Black Rooster.mp3'
  },
  {
    id: 'zwUgwNDoVFlUmtetOwdL1',
    path: 'The Kills/Keep On Your Mean Side/02 - Cat Claw.mp3'
  },
  {
    id: 'V7WITrK1E4vcAuBNGuU2H',
    path: 'The Kills/Keep On Your Mean Side/04 - Kissy Kissy.mp3'
  },
  {
    id: 'ZmkEcR7ujc3woumfUW1Eo',
    path: 'The Kills/Keep On Your Mean Side/12 - Gypsy Death and You.mp3'
  },
  {
    id: 'yK2jfjS3Faa7jmXd9vs4m',
    path: 'The Kills/Keep On Your Mean Side/10 - Fuck the People.mp3'
  },
  {
    id: 'vQWUf9L8mLA2Mafm88Cyc',
    path: 'The Kills/Keep On Your Mean Side/03 - Pull a U.mp3'
  },
  {
    id: 'n0Ai65aumDLg4mcfsUfja',
    path: 'The Kills/Keep On Your Mean Side/09 - Wait.mp3'
  },
  {
    id: 'N4pzGI5z8AmiJGK90fEQ9',
    path: 'The Kills/Keep On Your Mean Side/01- Superstition.mp3'
  },
  {
    id: 'UigyufG3EwytWNx4AsxG2',
    path: 'The Kills/Keep On Your Mean Side/11 - Monkey 23.mp3'
  },
  {
    id: 'OZnWnMgr3KqPqcZ8MmvnM',
    path: 'The Kills/Blood Pressures/02 - Satellite.mp3'
  },
  {
    id: 'ZAcfezg61DvTkTvh4eemy',
    path: 'The Kills/Blood Pressures/11 - Pots And Pans.mp3'
  },
  {
    id: 'vSm25mx4xZtS61Y60pdxv',
    path: 'The Kills/Blood Pressures/03 - Heart Is A Beating Drum.mp3'
  },
  {
    id: 'rguGKSd8jq6mFfduM0PWw',
    path: 'The Kills/Blood Pressures/07 - Baby Says.mp3'
  },
  {
    id: 't0AZjRd9C3ZeUyHVGrTXI',
    path: 'The Kills/Blood Pressures/08 - The Last Goodbye.mp3'
  },
  {
    id: 'r2Gx13PLBZO9pVdohIuI0',
    path: 'The Kills/Blood Pressures/06 - DNA.mp3'
  },
  {
    id: '1vWVqFUHiFbBIMHd4GIzM',
    path: 'The Kills/Blood Pressures/05 - Wild Charms.mp3'
  },
  {
    id: 'I8qzqSn8a7gsitZJg9RGN',
    path: 'The Kills/Blood Pressures/01 - Future Starts Slow.mp3'
  },
  {
    id: '7uIzdNDOapTzYGb0HGyxC',
    path: 'The Kills/Blood Pressures/04 - Nail In My Coffin.mp3'
  },
  {
    id: 'ztDWpNHfc5UVTxtax5cep',
    path: 'The Kills/Blood Pressures/09 - Damned If She Do.mp3'
  },
  {
    id: 'KZpJtHIwx65wkt08KWTvL',
    path: "The Kills/Blood Pressures/10 - You Don't Own The Road.mp3"
  },
  {
    id: 'fQrpLVC0dtuU3ODSR6BDT',
    path: 'The Kills/Midnight Boom/11 - What New York Used to Be.mp3'
  },
  {
    id: 'T9G1HS0soLfkO1hDUNvNr',
    path: 'The Kills/Midnight Boom/07 - Black Balloon.mp3'
  },
  {
    id: 'QIVEEpvYxdw7wIDgoLtIB',
    path: 'The Kills/Midnight Boom/03 - Tape Song.mp3'
  },
  {
    id: 'wdmzcofmmtdQDq2sw037A',
    path: 'The Kills/Midnight Boom/10 - Alphabet Pony.mp3'
  },
  {
    id: '3b9cGAbZ5xLUt8MmMLwn8',
    path: 'The Kills/Midnight Boom/06 - Hook and Line.mp3'
  },
  {
    id: 'AlzEaUBgSR7pVUvylsI9k',
    path: 'The Kills/Midnight Boom/01 - U.R.A. Fever.mp3'
  },
  {
    id: 'd0FHuoiwcoFxIejIPfvtg',
    path: 'The Kills/Midnight Boom/12 - Goodnight Bad Morning.mp3'
  },
  {
    id: 'kQE60Pywsv8aiJkmGvnXS',
    path: 'The Kills/Midnight Boom/05 - Last Day of Magic.mp3'
  },
  {
    id: 'u7ZNWjwzHIVW2lwfeXmwb',
    path: 'The Kills/Midnight Boom/04 - Getting Down.mp3'
  },
  {
    id: 'radCZVmfmStxbCHV58qZ9',
    path: 'The Kills/Midnight Boom/09 - Sour Cherry.mp3'
  },
  {
    id: 'A7DpycBxiwzPLH8UpNtir',
    path: 'The Kills/Midnight Boom/02 - Cheap and Cheerful.mp3'
  },
  {
    id: '3itdRfMQLnUlUA2PI9ZIV',
    path: 'The Kills/Midnight Boom/08 - M.E.X.I.C.O..mp3'
  },
  {
    id: '3WIiHVcdbtBgbd2SlU5kE',
    path: 'The Cranberries/Everybody Else Is Doing It So Why Cant We/11. How.mp3'
  },
  {
    id: 'ZgYtIxEHppsRer95RzPiZ',
    path: 'The Cranberries/Everybody Else Is Doing It So Why Cant We/01. I Still Do.mp3'
  },
  {
    id: 'JZkRDSkfnOX3Eutv6rT8U',
    path: 'The Cranberries/Everybody Else Is Doing It So Why Cant We/08. Wanted.mp3'
  },
  {
    id: 'dhNWVUkuG2qvBFdoZqxH9',
    path: 'The Cranberries/Everybody Else Is Doing It So Why Cant We/06. Not Sorry.mp3'
  },
  {
    id: 'uCQVvwijRm4F8G0jwEIll',
    path: 'The Cranberries/Everybody Else Is Doing It So Why Cant We/12. Put Me Down.mp3'
  },
  {
    id: 'yYwt5DlLtCUpgzfQ7BbtS',
    path: 'The Cranberries/Everybody Else Is Doing It So Why Cant We/10. I Will Always.mp3'
  },
  {
    id: 'VVR98SAeZDTrGen91b236',
    path: 'The Cranberries/Everybody Else Is Doing It So Why Cant We/07. Linger.mp3'
  },
  {
    id: 'zXSK3MoSn00u6mX7JDOcO',
    path: 'The Cranberries/Everybody Else Is Doing It So Why Cant We/02. Dreams.mp3'
  },
  {
    id: '029ihWyuEkE729ia7erjD',
    path: "The Cranberries/Everybody Else Is Doing It So Why Cant We/09. Still Can't....mp3"
  },
  {
    id: 'DiTGj40NL1l4k3DErrFyD',
    path: 'The Cranberries/Everybody Else Is Doing It So Why Cant We/04. Pretty.mp3'
  },
  {
    id: 'EHaHKyS15o36GlmltByyT',
    path: 'The Cranberries/Everybody Else Is Doing It So Why Cant We/05. Waltzing Back.mp3'
  },
  {
    id: 'GHFAgOB5Fy0tSCfSMoloK',
    path: 'The Cranberries/Everybody Else Is Doing It So Why Cant We/03. Sunday.mp3'
  },
  {
    id: 'qc9fdhjQ8V0tWyHQwKPO3',
    path: 'The Kills/No Wow/11 - Ticket Man.mp3'
  },
  {
    id: 'E5WF8eK1opKvFbRv5E85i',
    path: 'The Kills/No Wow/05 - I Hate The Way You Love.mp3'
  },
  {
    id: '8T9F0HcgTnKhABQPhM7wb',
    path: 'The Kills/No Wow/04 - The Good Ones.mp3'
  },
  {
    id: '55QqFaMjH02IjRZ6C5dGi',
    path: 'The Kills/No Wow/10 - Murdermile.mp3'
  },
  {
    id: '1Yok8GlfWp7bmOULVkXo1',
    path: 'The Kills/No Wow/09 - Rodeo Town.mp3'
  },
  {
    id: 'vegfbyOruUSh64xnUSM8r',
    path: 'The Kills/No Wow/03 - Dead Road 7.mp3'
  },
  {
    id: '7sraPeueZ5i7PSD0I0o9B',
    path: 'The Kills/No Wow/07 - At The Back Of The She.mp3'
  },
  {
    id: 'edO1JHepSxS9v6acVZCRx',
    path: 'The Kills/No Wow/01 - No Wow.mp3'
  },
  {
    id: 'gSgGfd7x32jA07DPy5MFd',
    path: 'The Kills/No Wow/02 - Love Is A Deserter.mp3'
  },
  {
    id: 'x7dd3zxOACevwkFRzV29X',
    path: 'The Kills/No Wow/08 - Sweet Cloud.mp3'
  },
  {
    id: '4vYpKxirevXctV9EkFWAA',
    path: 'The Kills/No Wow/06 - I Hate The Way You Love Part 2.mp3'
  },
  {
    id: 'asxJndZP5S2vixfQDQ2Wd',
    path: 'The Prodigy/The Fat Of The Land/05 - The Prodigy - Serial Thrilla.mp3'
  },
  {
    id: 'M8X327rStWkHSs47ehdlI',
    path: 'The Prodigy/The Fat Of The Land/02 - The Prodigy - Breathe.mp3'
  },
  {
    id: 'w62ZQJuxCmmBaY2gJ7V8h',
    path: 'The Prodigy/The Fat Of The Land/04 - The Prodigy - Funky Shit.mp3'
  },
  {
    id: 'yUNTeY3ZBPINPtzwDGxKf',
    path: 'The Prodigy/The Fat Of The Land/07 - The Prodigy - Narayan.mp3'
  },
  {
    id: 'ipsZUb4ptWyypc6razdl5',
    path: 'The Prodigy/The Fat Of The Land/08 - The Prodigy - Firestarter.mp3'
  },
  {
    id: 'Y1qwzjXnZgUcvXxRDAKz4',
    path: 'The Prodigy/The Fat Of The Land/06 - The Prodigy - Mindfields.mp3'
  },
  {
    id: 'TGHZe0QtitliZeG86anLY',
    path: 'The Prodigy/The Fat Of The Land/10 - The Prodigy - Fuel My Fire.mp3'
  },
  {
    id: 'iUqGzdZ1cA5eoAHr5kRiP',
    path: 'The Prodigy/The Fat Of The Land/01 - The Prodigy - Smack My Bitch Up.mp3'
  },
  {
    id: 'vp6JdCIUx9Kn6r0eCvV8E',
    path: 'The Prodigy/The Fat Of The Land/09 - The Prodigy - Climbatize.mp3'
  },
  {
    id: 'SyiRUlEBvHduEYnW46XnB',
    path: 'The Prodigy/The Fat Of The Land/03 - The Prodigy - Diesel Power.mp3'
  },
  {
    id: 'lesPabN7eT0txGJlx50OV',
    path: 'The Rolling Stones/Let It Bleed/01 Gimme Shelter.mp3'
  },
  {
    id: 'WwqGt2PHER0L2pm2MVnJB',
    path: 'The Rolling Stones/Let It Bleed/02 Love In Vain.mp3'
  },
  {
    id: 'HLRpPvcVSnxXusGm7EBES',
    path: 'The Rolling Stones/Let It Bleed/08 Monkey Man.mp3'
  },
  {
    id: 'qykaxrjoGw29k2A0aWoBB',
    path: 'The Rolling Stones/Let It Bleed/07 You Got The Silver.mp3'
  },
  {
    id: 'G03VJW43a5YAsDvpE59yQ',
    path: "The Rolling Stones/Let It Bleed/09 You Can't Always Get What You Want.mp3"
  },
  {
    id: '7sYAduvFhIF2ORsmgZHs0',
    path: 'The Rolling Stones/Let It Bleed/06 Midnight Rambler.mp3'
  },
  {
    id: 'Bk6fmm9x14C1kLu2rBEvM',
    path: 'The Rolling Stones/Let It Bleed/04 Live With Me.mp3'
  },
  {
    id: 'QLOzbU8cnT0MB42VpL8ns',
    path: 'The Rolling Stones/Let It Bleed/03 Country Honk.mp3'
  },
  {
    id: 'A4jfOabbP8IwaAHZCiFJE',
    path: 'The Rolling Stones/Let It Bleed/05 Let It Bleed.mp3'
  },
  {
    id: 'sE5muVzTQ1yvFj1SsTOdA',
    path: 'The Rolling Stones/Tattoo You/10 No use in crying.mp3'
  },
  {
    id: 'uXgexw63t22fN9LDpLzJO',
    path: 'The Rolling Stones/Tattoo You/04 Little t&a.mp3'
  },
  {
    id: 'bw9fQx5pEgxGRXMCNCGh4',
    path: 'The Rolling Stones/Tattoo You/01 Start me up.mp3'
  },
  {
    id: 'W3iIie8lQnoz5qWi1fo94',
    path: 'The Rolling Stones/Tattoo You/06 Neighbours.mp3'
  },
  {
    id: 'hCx3rr9bIbMj80YVb1MZB',
    path: 'The Rolling Stones/Tattoo You/03 Slave.mp3'
  },
  {
    id: 'yGTlf4Can8BXVkrnthpbd',
    path: 'The Rolling Stones/Tattoo You/09 Heaven.mp3'
  },
  {
    id: 'wByW0QxNlkmme6XQMqIEZ',
    path: 'The Rolling Stones/Tattoo You/11 Waiting on a friend.mp3'
  },
  {
    id: 'UuZzrG9qOzI5lbcl8ktFm',
    path: 'The Rolling Stones/Tattoo You/05 Black limousine.mp3'
  },
  {
    id: 'XrmtjsbDsDMyBFc9IkdTk',
    path: 'The Rolling Stones/Tattoo You/08 Tops.mp3'
  },
  {
    id: 'SRiU95JpEelNuGKaZxJVx',
    path: 'The Rolling Stones/Tattoo You/02 Hang fire.mp3'
  },
  {
    id: 'uZVxJRNpAeHKKxbl3hWsh',
    path: 'The Rolling Stones/Tattoo You/07 Worried about you.mp3'
  },
  {
    id: 'QEW0DnBU9L7lb5tOx7vzo',
    path: 'The Strokes/Is This It/11 - Strokes - Take It Or Leave It.mp3'
  },
  {
    id: 'RU9PGH3V5rBhjlwGN1NM5',
    path: 'The Strokes/Is This It/08 - Strokes - Hard To Explain.mp3'
  },
  {
    id: 'ouaZ0CtE2LUvtQUxV6jdF',
    path: 'The Strokes/Is This It/10 - Strokes - Trying Your Luck.mp3'
  },
  {
    id: 'YDFS9XojzaLVZZzrtSQHo',
    path: 'The Strokes/Is This It/04 - Strokes - Barely Legal.mp3'
  },
  {
    id: 'Jze1X1aF4KnJKFZ4fzjax',
    path: 'The Strokes/Is This It/02 - Strokes - The Modern Age.mp3'
  },
  {
    id: 'eXw98967oZkHQT7TU4oIi',
    path: 'The Strokes/Is This It/06 - Strokes - Alone, Together.mp3'
  },
  {
    id: 'oduY5lMBlKVxIvvE6wRAC',
    path: 'The Strokes/Is This It/05 - Strokes - Someday.mp3'
  },
  {
    id: 'dF3xwEg6D7SIuVbkTVMax',
    path: 'The Strokes/Is This It/09 - Strokes - New York City Cops.mp3'
  },
  {
    id: '4nM0rlHdxP92dLYBF0tzn',
    path: 'The Strokes/Is This It/03 - Strokes - Soma.mp3'
  },
  {
    id: 'rLAXJT464B970XYVifLPj',
    path: 'The Strokes/Is This It/07 - Strokes - Last Nite.mp3'
  },
  {
    id: 'R49dniF1nMnjpFVBR0Btz',
    path: 'The Strokes/Is This It/01 - Strokes - Is This It.mp3'
  },
  {
    id: '6XRRV8I2iUkHjZ7ySJj74',
    path: 'The Rolling Stones/Sticky Fingers/15 Brown Sugar (Different Guitar Part).mp3'
  },
  {
    id: 'XV9xkJtZpbIGC4JkkFqQo',
    path: "The Rolling Stones/Sticky Fingers/12 Bitch (Original 7'' Mono Mix).mp3"
  },
  {
    id: '6N1GTWVAglkjLT4mVv6qt',
    path: 'The Rolling Stones/Sticky Fingers/01 Brown Sugar.mp3'
  },
  {
    id: '1zu5C5E8QPDE7XMBPVq5D',
    path: 'The Rolling Stones/Sticky Fingers/10 Moonlight Mile.mp3'
  },
  {
    id: 'MBFN20iat9DADCgAAut95',
    path: 'The Rolling Stones/Sticky Fingers/05 You Gotta Move.mp3'
  },
  {
    id: 'rHMh1vAk8sTbSU2uj72JA',
    path: 'The Rolling Stones/Sticky Fingers/02 Sway.mp3'
  },
  {
    id: '0KrAjVKJANwaSZM7EU4xj',
    path: 'The Rolling Stones/Sticky Fingers/06 Bitch.mp3'
  },
  {
    id: 'umAqTTPiFnFkfgGdLDhSF',
    path: 'The Rolling Stones/Sticky Fingers/03 Wild Horses.mp3'
  },
  {
    id: 'hVsp6Hv9DwPGP8Bik54JI',
    path: 'The Rolling Stones/Sticky Fingers/08 Sister Morphine.mp3'
  },
  {
    id: '9dXRhsQf8emPG5Erbgpop',
    path: "The Rolling Stones/Sticky Fingers/14 Travellin' Man (Unreleased).mp3"
  },
  {
    id: 'kutPSzOVZXGfW0iN1Vw8T',
    path: 'The Rolling Stones/Sticky Fingers/13 Sister Morphine (Basic Stereo Mix).mp3'
  },
  {
    id: 'IFIVNkNCDZRCb4NMu2C6m',
    path: 'The Rolling Stones/Sticky Fingers/11 Wild Horses (Unplugged Stereo Mix, No Overdubs).mp3'
  },
  {
    id: 'MT3olFytE2b9oxlD6lXiV',
    path: 'The Rolling Stones/Sticky Fingers/09 Dead Flowers.mp3'
  },
  {
    id: '9Er9BJcv8YPI9ZSnlCmZ9',
    path: 'The Rolling Stones/Sticky Fingers/16 Brown Sugar (Another Different Mix).mp3'
  },
  {
    id: 'M2hVJnKMFbW0MVYj6Ma2o',
    path: "The Rolling Stones/Sticky Fingers/04 Can't You Hear Me Knocking.mp3"
  },
  {
    id: 'eg7OaoyMNRJSWYSGQoVzu',
    path: 'The Rolling Stones/Sticky Fingers/07 I Got The Blues.mp3'
  },
  {
    id: 'I5CuvMXYPkUKHDN102AbV',
    path: 'The Rolling Stones/Sticky Fingers/17 Let It Rock (Brown Sugar B-Side, Original Mono Mix).mp3'
  },
  {
    id: 'kyyGmpxEa5x94sxPNquq7',
    path: 'Travis/The Invisible Band/12 - Travis - The Humpty Dumpty Love Song.mp3'
  },
  {
    id: 'KMfFIeO9V6s6FWJcUPxzP',
    path: 'Travis/The Invisible Band/07 - Travis - Safe.mp3'
  },
  {
    id: 'pTKgEIfZmG4x8MSJoUXNC',
    path: 'Travis/The Invisible Band/05 - Travis - Flowers In The Window.mp3'
  },
  {
    id: '2kjXI5Noh6Drckv0gGqMs',
    path: 'Travis/The Invisible Band/11 - Travis - Indefinitely.mp3'
  },
  {
    id: '1bL5mNoCpBnHxG5RrzU5J',
    path: 'Travis/The Invisible Band/01 - Travis - Sing.mp3'
  },
  {
    id: 'uO5F56uPxraN3khLSHIoF',
    path: 'Travis/The Invisible Band/02 - Travis - Dear Diary.mp3'
  },
  {
    id: '0rYpKG1YLRYMd311S92FW',
    path: 'Travis/The Invisible Band/09 - Travis - Last Train.mp3'
  },
  {
    id: '9XDQERmHwsuWMtCUJWRSO',
    path: 'Travis/The Invisible Band/06 - Travis - The Cage.mp3'
  },
  {
    id: 'IsILWawMs4OJbjm8MoALL',
    path: 'Travis/The Invisible Band/04 - Travis - Pipe Dreams.mp3'
  },
  {
    id: '89LZJcBcOsVyB1hd9CPJR',
    path: 'Travis/The Invisible Band/08 - Travis - Follow The Light.mp3'
  },
  {
    id: 'FvM90KU5F6SzM17pHO23U',
    path: 'Travis/The Invisible Band/10 - Travis - Afterglow.mp3'
  },
  {
    id: 'sAVQ27tgcnCfgs7TP7DGY',
    path: 'Travis/The Invisible Band/03 - Travis - Side.mp3'
  },
  {
    id: '6AvyN69csJi7yA7O40GCD',
    path: 'The Smiths/Best I/12 - The Smiths - Some Girls Are Bigger Than Others.mp3'
  },
  {
    id: 'Ohtto2eXa3aygZpHsJqBe',
    path: 'The Smiths/Best I/03 - The Smiths - What Difference Does It Make.mp3'
  },
  {
    id: 'LJu84BQ8d1YHGY20Yh2lJ',
    path: 'The Smiths/Best I/02 - The Smiths - William, It Was Really Nothing.mp3'
  },
  {
    id: 'nQU2hq3RFIFRB02oNn3id',
    path: 'The Smiths/Best I/11 - The Smiths - Sheila Take A Bow.mp3'
  },
  {
    id: 'W7W9uTLs74FsT3w08lHNM',
    path: 'The Smiths/Best I/14 - The Smiths - Please, Please, Please, Let Me Get What I Want.mp3'
  },
  {
    id: 'DAWDgPYGXqTfnV2KXRdYF',
    path: 'The Smiths/Best I/01 - The Smiths - This Charming Man.mp3'
  },
  {
    id: '96D5vdEU7jTIvLlyF3d2w',
    path: 'The Smiths/Best I/09 - The Smiths - Hand In Glove.mp3'
  },
  {
    id: 'k9LGAHGfQRuSfbHxtMpee',
    path: 'The Smiths/Best I/06 - The Smiths - Half A Person.mp3'
  },
  {
    id: '7Ynp4v6DrMj5jVyqElrqF',
    path: 'The Smiths/Best I/13 - The Smiths - Panic.mp3'
  },
  {
    id: 'jZWekj4eNyVGqYXGsgQ9G',
    path: 'The Smiths/Best I/08 - The Smiths - How Soon Is Now.mp3'
  },
  {
    id: 'wXVYeVkYMQjCKi1xpCpuZ',
    path: "The Smiths/Best I/04 - The Smiths - Stop Me If You Think You've Heard This One Before.mp3"
  },
  {
    id: 'XWOvRW2ydbsFEJES5P3Lp',
    path: 'The Smiths/Best I/05 - The Smiths - Girlfriend In A Coma.mp3'
  },
  {
    id: 'Z845Aun9KqhEvXmFFox9n',
    path: 'The Smiths/Best I/07 - The Smiths - Rubber Ring.mp3'
  },
  {
    id: 'LszzTcL0HVbgATHrVd0Qi',
    path: 'The Smiths/Best I/10 - The Smiths - Shoplifters Of The World Unite.mp3'
  },
  {
    id: 'l1ZTKlEPJkDgaOo2hGYpT',
    path: 'The Killers/Direct Hits/02 - Somebody Told Me.mp3'
  },
  {
    id: 'MyOrEvURVgawXAFxCx5Qp',
    path: 'The Killers/Direct Hits/14 - Shot At The Night.mp3'
  },
  {
    id: 'GwYzYNfJERY4qMiS6cwlJ',
    path: 'The Killers/Direct Hits/11 - Runaways.mp3'
  },
  {
    id: '4w0Aziuf9cjmeZpaIU4rd',
    path: 'The Killers/Direct Hits/18 - Be Still.mp3'
  },
  {
    id: '2QaxzfFwVbpX7MXhmSfT8',
    path: 'The Killers/Direct Hits/09 - Spaceman.mp3'
  },
  {
    id: 'VJ74G4ltFrgWqcGRKlH7E',
    path: 'The Killers/Direct Hits/01 - Mr. Brightside.mp3'
  },
  {
    id: 'yNZifm89PmvYQwySlxtZX',
    path: 'The Killers/Direct Hits/16 - Mr. Brightside (Demo).mp3'
  },
  {
    id: 'rQsC8fF4rh13oIsQr8IOR',
    path: 'The Killers/Direct Hits/03 - Smile Like You Mean It.mp3'
  },
  {
    id: 'prOctrfeMnRDycPUAMpvb',
    path: 'The Killers/Direct Hits/15 - Just Another Girl.mp3'
  },
  {
    id: 'HuclY6KTEj0IuGljJjAuJ',
    path: 'The Killers/Direct Hits/05 - When You Were Young.mp3'
  },
  {
    id: 'B0BNIXI6n0YRZn7JjCA7c',
    path: 'The Killers/Direct Hits/13 - The Way It Was.mp3'
  },
  {
    id: 'Gdp50WOf3R4arVzkhjN0n',
    path: 'The Killers/Direct Hits/17 - When You Were Young (Calvin Harris Remix).mp3'
  },
  {
    id: 'Rgdxcl2A17bhFu82kAFRm',
    path: 'The Killers/Direct Hits/06 - Read My Mind.mp3'
  },
  {
    id: '6Y8Y4clcxE3hfANU3pNnr',
    path: 'The Killers/Direct Hits/08 - Human.mp3'
  },
  {
    id: '3G9prLmDZM3beEPyIfhXQ',
    path: 'The Killers/Direct Hits/12 - Miss Atomic Bomb.mp3'
  },
  {
    id: '1dZvYkPTOBfnh1R57QOWg',
    path: 'The Killers/Direct Hits/07 - For Reasons Unknown.mp3'
  },
  {
    id: 'DzMvm3wdBWnJrnwrZiTfH',
    path: "The Killers/Direct Hits/04 - All These Things That I've Done.mp3"
  },
  {
    id: 'CcbmM8MEZHCo9gEHZjeGx',
    path: 'The Killers/Direct Hits/10 - A Dustland Fairytale.mp3'
  },
  {
    id: 'J1Fu7QJQmekzRpwYAGzMM',
    path: 'Travis/The Man Who/05 - Travis - The Last Laugh Of The Laughter.mp3'
  },
  {
    id: 'ts274sI6MNwPNr3ad8043',
    path: 'Travis/The Man Who/06 - Travis - Turn.mp3'
  },
  {
    id: 'nz5GIWHUhyNClZBhvoTW9',
    path: 'Travis/The Man Who/02 - Travis - The Fear.mp3'
  },
  {
    id: 'GLRa7t0HlbGlB5sH9wn13',
    path: 'Travis/The Man Who/03 - Travis - As You Are.mp3'
  },
  {
    id: 'M4nZNJY2m9ZkU6dufK9uM',
    path: 'Travis/The Man Who/01 - Travis - Writing To Reach You.mp3'
  },
  {
    id: 'd0101puYbmgd3qHMSUhki',
    path: 'Travis/The Man Who/04 - Travis - Driftwood.mp3'
  },
  {
    id: 'DrkQqUrwq5DKCvOv0z5HY',
    path: 'Travis/The Man Who/08 - Travis - Luv.mp3'
  },
  {
    id: '9EmccSQyG9d8GY3TZITWe',
    path: 'Travis/The Man Who/10 - Travis - Slide Show.mp3'
  },
  {
    id: 'PmBvOL05MHciNNfUWZ7zU',
    path: "Travis/The Man Who/09 - Travis - She's So Strange.mp3"
  },
  {
    id: 'FFyCgShtXQyZOWPQV7oAL',
    path: 'Travis/The Man Who/07 - Travis - Why Does It Always Rain On Me.mp3'
  },
  {
    id: 'jkGMzM4Upuar9kMukqC7I',
    path: 'The Verve/Urban Hymns/03 - The Verve - The Rolling People.mp3'
  },
  {
    id: '9hjlttOqsFgJqPg9XdN6C',
    path: 'The Verve/Urban Hymns/02 - The Verve - Sonnet.mp3'
  },
  {
    id: '1DjtYB62AJoEU57PSC6qC',
    path: 'The Verve/Urban Hymns/06 - The Verve - Neon Wilderness.mp3'
  },
  {
    id: 'hTP9Vf3jb6iOepvSxfm10',
    path: 'The Verve/Urban Hymns/09 - The Verve - Lucky Man.mp3'
  },
  {
    id: 'hko2qqOKkIcfSQGvm0gjE',
    path: 'The Verve/Urban Hymns/07 - The Verve - Space and Time.mp3'
  },
  {
    id: 'dlUNJemt3b3dnAHnOEP2b',
    path: 'The Verve/Urban Hymns/11 - The Verve - This Time.mp3'
  },
  {
    id: 'GpaJNKy3UYJ1fhmDnrgDO',
    path: "The Verve/Urban Hymns/04 - The Verve - The Drugs Don't Work.mp3"
  },
  {
    id: '50TCRLCu8qkqlD9yHoTrr',
    path: 'The Verve/Urban Hymns/01 - The Verve - Bitter Sweet Symphony.mp3'
  },
  {
    id: 'QKzMuiekXhLBFeW4En6c9',
    path: 'The Verve/Urban Hymns/12 - The Verve - Velvet Morning.mp3'
  },
  {
    id: 'xlt7xHcu0N0DntAmwmRPl',
    path: 'The Verve/Urban Hymns/08 - The Verve - Weeping Willow.mp3'
  },
  {
    id: 'dTjcG6U4dug1OBSdLwgSN',
    path: 'The Verve/Urban Hymns/05 - The Verve - Catching the Butterfly.mp3'
  },
  {
    id: 'YOAEc6OqCkAwU7NT1q5zH',
    path: 'The Verve/Urban Hymns/13 - The Verve - Come On.mp3'
  },
  {
    id: 'iAiwk1IU8IyA9YrYIXA2y',
    path: 'The Verve/Urban Hymns/10 - The Verve - One Day.mp3'
  },
  {
    id: 'dneqFvmeR14oXic32w1WE',
    path: 'The Rolling Stones/Voodoo Lounge/13 Baby Break It Down.mp3'
  },
  {
    id: 'gxgb2yCGullmFZjGN7v8E',
    path: 'The Rolling Stones/Voodoo Lounge/09 Brand New Car.mp3'
  },
  {
    id: '6K810UqmBfyOcniJXGWxn',
    path: 'The Rolling Stones/Voodoo Lounge/15 Mean Disposition.mp3'
  },
  {
    id: '59pmzIbK7WNn2TLKdTGX4',
    path: 'The Rolling Stones/Voodoo Lounge/02 You Got Me Rocking.mp3'
  },
  {
    id: 'ydx6vxTlpSlW4MdrClU7f',
    path: 'The Rolling Stones/Voodoo Lounge/08 I Go Wild.mp3'
  },
  {
    id: 'H4H1YrDsR4OqUJqcCoIil',
    path: 'The Rolling Stones/Voodoo Lounge/06 Moon Is Up.mp3'
  },
  {
    id: '6xGxTWTWLPUUEEz3zV7Rq',
    path: 'The Rolling Stones/Voodoo Lounge/12 Blinded By Rainbows.mp3'
  },
  {
    id: '7Aksx05jxxwDtx4qQ2qCP',
    path: 'The Rolling Stones/Voodoo Lounge/03 Sparks Will Fly.mp3'
  },
  {
    id: 'S7KMFBOBVwmgeApZkPben',
    path: 'The Rolling Stones/Voodoo Lounge/10 Sweethearts Together.mp3'
  },
  {
    id: 'tYqWW06x5Y71bfApYy8bx',
    path: 'The Rolling Stones/Voodoo Lounge/11 Suck On The Jugular.mp3'
  },
  {
    id: 'U9j9h4I05FFPXoL3gnV3L',
    path: 'The Rolling Stones/Voodoo Lounge/07 Out Of Tears.mp3'
  },
  {
    id: 'IFeu4lEE8ZNjlxoMejz9O',
    path: 'The Rolling Stones/Voodoo Lounge/04 The Worst.mp3'
  },
  {
    id: '5B5RE5B7k1uaWDECEE0PW',
    path: 'The Rolling Stones/Voodoo Lounge/01 Love Is Strong.mp3'
  },
  {
    id: 'nltQ0tsI4vG9xduTpKX9v',
    path: 'The Rolling Stones/Voodoo Lounge/05 New Faces.mp3'
  },
  {
    id: 'Wm3oxZKymWIjdx93qTuwy',
    path: 'The Rolling Stones/Voodoo Lounge/14 Thru And Thru.mp3'
  },
  {
    id: 'gYDwy1NYgo09dEOmJsDKq',
    path: 'Zero 7/Simple Things/04 - Zero 7 - Give It Away.mp3'
  },
  {
    id: 'kB70cYSm0eY90ozB0BNWc',
    path: 'Zero 7/Simple Things/05 - Zero 7 - Simple Things.mp3'
  },
  {
    id: 'oXO2EHvVUfWxrqt9a0ItD',
    path: 'Zero 7/Simple Things/06 - Zero 7 - Red Dust.mp3'
  },
  {
    id: 'pL07cm8Gk9nXexbe3KEwp',
    path: 'Zero 7/Simple Things/01 - Zero 7 - I Have Seen.mp3'
  },
  {
    id: 'H74tcW28d4BWDuvkKQCVU',
    path: 'Zero 7/Simple Things/10 - Zero 7 - This World.mp3'
  },
  {
    id: 'VqQFlzsodrI1noS9wE1mc',
    path: 'Zero 7/Simple Things/09 - Zero 7 - Out Of Town.mp3'
  },
  {
    id: 'JW3IjIiKJ6KIVcZqnLM5q',
    path: 'Zero 7/Simple Things/07 - Zero 7 - Distractions.mp3'
  },
  {
    id: 'KWpVWXEVbOddGLKI2QFzg',
    path: 'Zero 7/Simple Things/03 - Zero 7 - Destiny.mp3'
  },
  {
    id: 'QqGWQ8o8GvXQXSpQD8R4P',
    path: 'Zero 7/Simple Things/08 - Zero 7 - In The Waiting Line.mp3'
  },
  {
    id: 'DIoHBybwG7rJsIPtA24Fh',
    path: 'Zero 7/Simple Things/11 - Zero 7 - Likufanele.mp3'
  },
  {
    id: 'HwJFKQVfKPrkYnHPYpZcu',
    path: 'Zero 7/Simple Things/02 - Zero 7 - Polaris.mp3'
  },
  {
    id: '1KpFDhd5QyUWF0M8irU1V',
    path: 'Zero 7/Simple Things/12 - Zero 7 - End Theme.mp3'
  },
  {
    id: 'KQXtCZKINwQqrLjFMfSQm',
    path: 'Blur/The Best of Blur/01 - Beetlebum.mp3'
  },
  {
    id: 'bOsCJeWX44jgy13OKgGne',
    path: 'Blur/The Best of Blur/02 - Song 2.mp3'
  },
  {
    id: 'aUHd8jhoCPxXaLNvIpXFd',
    path: "Blur/The Best of Blur/03 - There's No Other Way.mp3"
  },
  {
    id: 'esQV6iIqw6yHXldk9CIe1',
    path: 'Blur/The Best of Blur/04 - The Universal.mp3'
  },
  {
    id: 'Cfbzxfg2nXuYESkQPgiq6',
    path: 'Blur/The Best of Blur/05 - Coffee and TV.mp3'
  },
  {
    id: '8pokGCxZWA0RSNlCULLMN',
    path: 'Blur/The Best of Blur/06 - Parklife.mp3'
  },
  {
    id: 'CTclvU9xYg6P5VYTEgsr6',
    path: 'Blur/The Best of Blur/07 - End of a Century.mp3'
  },
  {
    id: 'LSxl1K7bQVseuJ7GYXbYG',
    path: 'Blur/The Best of Blur/08 - No Distance Left to Run.mp3'
  },
  {
    id: 'rO8SvtUZflNbP0zV1g57k',
    path: 'Blur/The Best of Blur/09 - Tender.mp3'
  },
  {
    id: 'ifo3lIhkvwZABkcDLs0RV',
    path: 'Blur/The Best of Blur/10 - Girls and Boys.mp3'
  },
  {
    id: 'PoeYPcCNzyut0UbGjmxL1',
    path: 'Blur/The Best of Blur/11 - Charmless Man.mp3'
  },
  {
    id: 'sDFgQdnNb7tgzRBwi8ZRP',
    path: "Blur/The Best of Blur/12 - She's So High.mp3"
  },
  {
    id: 'P3wXTT6d20CK6ikRNfvde',
    path: 'Blur/The Best of Blur/13 - Country House.mp3'
  },
  {
    id: 'tIX10wRoaKOX77CZkxPZ2',
    path: 'Blur/The Best of Blur/14 - To the End.mp3'
  },
  {
    id: 'ihE6RuSOkuvXfilZ7P99Z',
    path: 'Blur/The Best of Blur/15 - On Your Own.mp3'
  },
  {
    id: '2LKEkEbmJi7oXbmndZzkw',
    path: 'Blur/The Best of Blur/16 - This Is a Low.mp3'
  },
  {
    id: 'o4yfKXbgJKzC3yadJ8BPd',
    path: 'Blur/The Best of Blur/17 - For Tomorrow [Visit To Primrose Extended mix].mp3'
  },
  {
    id: 'zk4sdAeLxECxfy3v2vFye',
    path: 'Blur/The Best of Blur/18 - Music Is My Radar.mp3'
  },
  {
    id: 'icr6TZ8A9AkiE6H1h7bqm',
    path: 'Sheryl Crow/The Very Best Of Sheryl Crow/16. I Shall Believe.mp3'
  },
  {
    id: 'Upq4cPakcp6zynwnEIomc',
    path: 'Sheryl Crow/The Very Best Of Sheryl Crow/07. Strong Enough.mp3'
  },
  {
    id: '4MoxFovQ0EfO5HoRT952W',
    path: 'Sheryl Crow/The Very Best Of Sheryl Crow/09. If It Makes You Happy.mp3'
  },
  {
    id: 'tbpbit7PXzfxzjutpCy2S',
    path: 'Sheryl Crow/The Very Best Of Sheryl Crow/14. Home.mp3'
  },
  {
    id: 'psMznf8UZzoZcuoNJlU0U',
    path: "Sheryl Crow/The Very Best Of Sheryl Crow/12. C'mon, C'mon (Feat. The Coors).mp3"
  },
  {
    id: '1dhep0h5fG1pbFTGaVby3',
    path: 'Sheryl Crow/The Very Best Of Sheryl Crow/03. My Favorite Mistake.mp3'
  },
  {
    id: 'B7NjkypXC2mIFZQB467SZ',
    path: 'Sheryl Crow/The Very Best Of Sheryl Crow/08. Light In Your Eyes.mp3'
  },
  {
    id: 'O4ZnZ4IwrKIbFgUzDFg45',
    path: 'Sheryl Crow/The Very Best Of Sheryl Crow/13. A Change Would Do You Good.mp3'
  },
  {
    id: 'CcsTEWfKUx0MX9iz4XKt8',
    path: 'Sheryl Crow/The Very Best Of Sheryl Crow/05. Everyday Is A Winding Road.mp3'
  },
  {
    id: 'YGFFYIR7mjbHTx9KnLdKK',
    path: 'Sheryl Crow/The Very Best Of Sheryl Crow/10. Run Baby Run.mp3'
  },
  {
    id: 'MDP4XWzSuzshyANPGsVaG',
    path: 'Sheryl Crow/The Very Best Of Sheryl Crow/15. There Goes The Neighborhood.mp3'
  },
  {
    id: 'zW6GrA6P61cnm0n1Bzjx7',
    path: 'Sheryl Crow/The Very Best Of Sheryl Crow/01. All I Wanna Do.mp3'
  },
  {
    id: 'bRRSEgv8DN6cdwvFWacgj',
    path: 'Sheryl Crow/The Very Best Of Sheryl Crow/04. The First Cut Is The Deepest.mp3'
  },
  {
    id: 'Ki0jkGY0sJGBkElZ6uh0u',
    path: 'Sheryl Crow/The Very Best Of Sheryl Crow/02. Soak Up The Sun.mp3'
  },
  {
    id: '9ANeCkRVCF0ukhEAr7kmv',
    path: 'Sheryl Crow/The Very Best Of Sheryl Crow/06. Leaving Las Vegas.mp3'
  },
  {
    id: 'IiHgpkAMHRlLpTwmk6kK6',
    path: 'Sheryl Crow/The Very Best Of Sheryl Crow/11. Picture (Kid Rock Feat. Sheryl Crow).mp3'
  }
]

export default songs