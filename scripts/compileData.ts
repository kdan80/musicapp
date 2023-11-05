// A script for setting up data in lieu of a database

import fs from 'fs'
import util from 'util'
import dotenv from 'dotenv'
import * as data from './albums.json'

dotenv.config() // Load environment variables from .env file

interface track {
    title: string
    duration: number
    track_number: number
    filename: string
    id: string
}

interface album {
    id: string
    title: string
    artist: string
    path: string
    track_list: track[]
}

interface song {
    id: string
    path: string
}

const projectRoot = process.env.PROJECT_DIR
const albumsDir = 'src'
const songsDir = 'src/app/api'

const albumsRaw: album[] = []
const songsRaw: song[] = []

for (let i = 0; i < data.length; i++) {
    const datum = data[i]
    const track_list = [...datum.track_list]
    const newTrackList: track[] = []

    for (let j = 0; j < track_list.length; j++) {
        const track = track_list[j]

        const newTrack = {
            title: track.title,
            duration: track.duration,
            track_number: track.track_number,
            id: track.nano_id,
            filename: track.filename,
        }

        const song = {
            id: newTrack.id,
            path: `${datum.path}/${newTrack.filename}`,
        }

        songsRaw.push(song)
        newTrackList.push(newTrack)
    }

    const album: album = {
        // Get the 12 byte/24 char mongodb _id and discard the rest of the string
        id: util.inspect(datum._id).slice(11, 35),
        title: datum.title,
        artist: datum.artist,
        path: datum.path,
        track_list: newTrackList.sort((a, b) => a.track_number - b.track_number),
    }

    albumsRaw.push(album)
}

// Create the albums "database"
const albums = util.inspect(albumsRaw, { depth: 3, maxArrayLength: albumsRaw.length })
const albumsText = `const albums = ${albums}\n\nexport default albums`
fs.writeFile(`${projectRoot}/${albumsDir}/albums.ts`, albumsText, 'utf8', error => {
    if (error) {
        console.log(error)
    } else {
        console.log('albums file created')
    }
})

// Create the songs "database"
const songs = util.inspect(songsRaw, { depth: 3, maxArrayLength: songsRaw.length })
const songsText = `const songs = ${songs}\n\nexport default songs`
fs.writeFile(`${projectRoot}/${songsDir}/songs.ts`, songsText, 'utf8', error => {
    if (error) {
        console.log(error)
    } else {
        console.log('songs file created')
    }
})
