import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import AlbumCardButton from './AlbumCardButton'
import '../globals.css'
import { PlayerState } from '../page'
import { Album } from '../hooks/useCurrentAlbum'
import { Track } from '../hooks/useCurrentTrack'

interface Props {
    album: Album
    loadCurrentAlbum: (albumId: string) => void
    setPlayerState: Dispatch<SetStateAction<PlayerState>>
    setCurrentTrack: Dispatch<SetStateAction<Track | null>>
    setIsPlaying: Dispatch<SetStateAction<boolean>>
}

const AlbumCard = ({
    album,
    loadCurrentAlbum,
    setPlayerState,
    setCurrentTrack,
    setIsPlaying,
}: Props) => {
    const handleClick = () => {
        loadCurrentAlbum(album.id)
        setCurrentTrack(album.track_list[0])
        setPlayerState(1)
    }

    const buttonClick = () => {
        handleClick()
        setIsPlaying(true)
    }

    return (
        <div className='mb-4 shrink-0 card'>
            <div
                className='group relative block overflow-hidden shrink-0 rounded z-1'
                onClick={handleClick}
            >
                <Image
                    height={250}
                    width={250}
                    src={`/albumArt/${album.id}/250x250.webp`}
                    alt='album art'
                    placeholder='blur'
                    blurDataURL={`/albumArt/${album.id}/blurData.webp`}
                />
                <div className='absolute bg-[rgba(0,0,0,0)] group-hover:bg-[rgba(0,0,0,.6)] inset-0 transition-all duration-200 ease-in-out cursor-pointer' />
                <AlbumCardButton clickHandler={buttonClick} />
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
