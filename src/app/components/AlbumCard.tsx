import React from 'react'
import Image from 'next/legacy/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import '../globals.css'

interface Props {
    album: any
    setNowPlaying: any
    SetCurrentTrack: any
    setShowMiniPlayer: any
    priority: any
}

const AlbumCard = ({
    album,
    setNowPlaying,
    setCurrentTrack,
    setShowMiniPlayer,
    priority,
}: Props) => {
    return (
        <div className='mb-4 shrink-0 card'>
            <div className='relative block overflow-hidden shrink-0 rounded border-2 border-red-500'>
                <Image
                    layout='responsive'
                    height={1}
                    width={1}
                    src={`/albumArt/${album.id}/250x250.webp`}
                    alt='album art'
                    placeholder='blur'
                    blurDataURL={`/albumArt/${album.id}/blurData.webp`}
                />

                {/* button {
        position: absolute;
        bottom: .5rem;
        right: .5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        height: 42px;
        width: 42px;
        border-radius: 50%;
        background-color: rgba(0,0,0,.8);

        @media screen and (min-width: 600px) {
            height: 4.5rem;
            width: 4.5rem;
            margin: auto;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            color: #cacaca;
        }
    } */}

                <div className='absolute bg-[rgba(0,0,0,0)] hover:bg-[rgba(0,0,0,.5)] top-0 left-0 right-0 bottom-0 transition-all duration-150 ease-in-out cursor-pointer' />
                <button
                    type='button'
                    //className='{buttonClicked ? styles.clicked : undefined}'
                    className={`md:scale-0 md:hover:scale-1 md:h-[4.5rem] md:w-[4.5rem] md:m-auto md:left-0 md:right-0 md:top-0 md:bottom-0 md:text-[#cacaca] absolute bottom-[.5rem] right-[.5rem] flex justify-center items-center h-[42px] w-[42px] rounded-full bg-[rgba(0,0,0,.8)]`}
                    //onClick={handleClick}
                >
                    <FontAwesomeIcon
                        className='ml-[.15rem] w-[.8rem] h-[.8rem]'
                        icon={faPlay}
                    />
                </button>
            </div>

            <div className='flex flex-col justify-center items-center mt-1 overflow-hidden whitespace-nowrap text-ellipsis'>
                <div
                    className='text-base cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis'
                    //onClick={handleClick}
                >
                    {album.title}
                </div>
                <div className='text-[#a5a5a5] text-[.9rem]'>{album.artist}</div>
            </div>
        </div>
    )
}

export default AlbumCard
