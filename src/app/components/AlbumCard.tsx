import React from 'react'
import Image from 'next/legacy/image'
import AlbumCardButton from './AlbumCardButton'
import '../globals.css'

export interface TrackList {
    title: string
    duration: number
    track_number: number
    id: string
    filename: string
}

export interface Album {
    title: string
    artist: string
    id: string
    path: string
    track_list: TrackList[]
}

interface Props {
    album: Album
    loadCurrentAlbum: (albumId: string) => void
    setCurrentTrack: any
    setShowMiniPlayer: any
    priority: any
}

const AlbumCard = ({
    album,
    loadCurrentAlbum,
    setCurrentTrack,
    setShowMiniPlayer,
    priority,
}: Props) => {
    const handleClick = () => {
        loadCurrentAlbum(album.id)
    }

    return (
        <div className='mb-4 shrink-0 card'>
            <div
                className='group relative block overflow-hidden shrink-0 rounded z-1'
                onClick={handleClick}
            >
                <Image
                    layout='responsive'
                    height={1}
                    width={1}
                    src={`/albumArt/${album.id}/250x250.webp`}
                    alt='album art'
                    placeholder='blur'
                    blurDataURL={`/albumArt/${album.id}/blurData.webp`}
                />
                <div className='absolute bg-[rgba(0,0,0,0)] group-hover:bg-[rgba(0,0,0,.6)] inset-0 transition-all duration-200 ease-in-out cursor-pointer' />
                <AlbumCardButton />
            </div>

            <div className='flex flex-col justify-center mt-1 text-center overflow-hidden whitespace-nowrap text-ellipsis pointer-events-none'>
                <div
                    className='text-base hover:text-[#1ab751] cursor-pointer text-center overflow-hidden whitespace-nowrap text-ellipsis transition-colors duration-300 ease-in-out'
                    onClick={handleClick}
                >
                    {album.title}
                </div>
                <div className='text-[#a5a5a5] text-[.9rem]'>{album.artist}</div>
            </div>
        </div>
    )
}

export default AlbumCard