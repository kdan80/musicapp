import React, { Dispatch, SetStateAction } from 'react'
import { Album } from './AlbumCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

interface Props {
    currentTrackNumber: number
    currentAlbum: Album
    setCurrentTrackNumber: Dispatch<SetStateAction<number>>
    setShowTrackList: Dispatch<SetStateAction<boolean>>
}

const TrackList = ({
    currentTrackNumber,
    currentAlbum,
    setCurrentTrackNumber,
    setShowTrackList,
}: Props) => {
    return (
        <div
            className={
                'bg-[rgba(8,8,8,.88)] backdrop-blur w-full h-full flex flex-col items-center pb-[3.2rem] px-8'
            }
        >
            <div className={'bg-[#080808] w-full min-h-[3.2rem] flex items-center mb-8'}>
                <button className={'h-full px-1 text-white text-[1.25rem]'}>
                    <FontAwesomeIcon
                        onClick={() => setShowTrackList(false)}
                        icon={faArrowLeft}
                    />
                </button>
                <div
                    className={
                        'grow py-3 text-center text-[1.1re] font-semibold whitespace-nowrap overflow-hidden text-ellipsis'
                    }
                >
                    {currentAlbum.title}
                </div>
            </div>

            <ul className={'overflow-y-scroll overflow-x-hidden w-full no-scroll-bar'}>
                {currentAlbum.track_list.map((track, index) => (
                    <li
                        onClick={() => setCurrentTrackNumber(index)}
                        className={`flex h-[3.5rem] items-center gap-4 cursor-pointer border-b-[1px] border-[#444] transition-colors duration-200 ease-in-out ${
                            index === currentTrackNumber ? 'text-[#1ab751]' : 'text-[#eee]'
                        }`}
                        key={index}
                    >
                        <div className={'w-4 font-semibold'}>{track.track_number}</div>

                        <div className={'grow whitespace-nowrap overflow-hidden text-ellipsis'}>
                            {track.title}
                        </div>
                        <div className={'w-[2rem]'}>
                            {moment(track.duration * 1000).format('m:ss')}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TrackList
