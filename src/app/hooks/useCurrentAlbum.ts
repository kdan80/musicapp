import React from 'react'
import { Track } from './useCurrentTrack'

export interface Album {
    title: string
    artist: string
    id: string
    path: string
    track_list: Track[]
}

const useCurrentAlbum = (albums: Album[]) => {
    const [currentAlbum, setCurrentAlbum] = React.useState<Album | null>(null)

    const loadCurrentAlbum = (albumId: string) => {
        const currentAlbum = albums.find(album => album.id === albumId)
        if (currentAlbum) return setCurrentAlbum(currentAlbum)
        setCurrentAlbum(null)
    }

    return { currentAlbum, loadCurrentAlbum }
}

export default useCurrentAlbum
