import React, { Dispatch, SetStateAction } from 'react'
import moment from 'moment'
import Image from 'next/image'
import ProgressBar from './ProgressBar'
import { PlayerState } from '../page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { Album } from '../hooks/useCurrentAlbum'
import SkipBackward from './SkipBackward'
import SkipForward from './SkipForward'
import PlayButton from './PlayButton'
import TrackList from './TrackList'
import MuteButton from './MuteButton'
import VolumeSlider from './VolumeSlider'
import { Track } from '../hooks/useCurrentTrack'

interface Props {
    setPlayerState: Dispatch<SetStateAction<PlayerState>>
    currentAlbum: Album
    currentTrack: Track
    setCurrentTrack: Dispatch<SetStateAction<Track | null>>
    currentTime: number
    setSkipToTimestamp: Dispatch<SetStateAction<number>>
    isMuted: boolean
    setIsMuted: Dispatch<SetStateAction<boolean>>
    volume: number
    setVolume: Dispatch<SetStateAction<number>>
}

const AudioPlayer = ({
    setPlayerState,
    currentAlbum,
    currentTrack,
    setCurrentTrack,
    currentTime,
    setSkipToTimestamp,
    isMuted,
    setIsMuted,
    volume,
    setVolume,
}: Props) => {
    const [showTrackList, setShowTrackList] = React.useState(false)

    return (
        <div className='w-full h-full bg-[#080808] flex flex-col justify-between items-center px-8 md:px-16 md:gap-12 md:overflow-y-scroll'>
            <div
                id='header'
                className='min-h-[3.2rem] w-full flex items-center justify-between'
            >
                <button
                    onClick={() => setPlayerState(2)}
                    className='flex items-center justify-start pr-6 py-6 text-lg'
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button
                    className={'md:hidden py-6 flex justify-end items-center pl-10 text-lg'}
                    onClick={() => setShowTrackList(true)}
                >
                    <FontAwesomeIcon icon={faEllipsisV} />
                </button>
            </div>
            <div className='grow w-full flex flex-col md:flex-row md:items-end md:shrink-0 md:gap-5'>
                <div
                    id='albumArt'
                    className='w-full md:max-w-[15rem] flex items-center justify-center my-auto'
                >
                    <Image
                        width={500}
                        height={500}
                        src={`/albumArt/${currentAlbum.id}/500x500.webp`}
                        alt='album art'
                        placeholder='blur'
                        blurDataURL={`/albumArt/${currentAlbum.id}/blurData.webp`}
                        className='w-full rounded overflow-hidden'
                    />
                </div>
                <div
                    id='playerControls'
                    className='w-full flex flex-col gap-12 pb-12 md:pb-0'
                >
                    <div
                        id='trackInfo'
                        className='text-[#bbb] text-[.9rem]'
                    >
                        <div className='font-semibold text-white mb-[.2rem] text-overflow'>
                            {currentTrack.title}
                        </div>
                        <div className='text-overflow'>{currentAlbum.title}</div>
                        <div className='text-overflow -mt-[.2rem]'>{currentAlbum.artist}</div>
                    </div>
                    <div
                        id='trackProgress'
                        className='flex text-[.9rem] gap-6 w-full items-center'
                    >
                        <div>{moment(currentTime).format('m:ss')}</div>
                        <ProgressBar
                            currentTime={currentTime}
                            trackDuration={currentTrack.duration}
                            setSkipToTimestamp={setSkipToTimestamp}
                        />
                        <div>{moment(currentTrack.duration).format('m:ss')}</div>
                    </div>

                    <div className={'flex items-center md:justify-between md:gap-8 justify-center'}>
                        <div className={'flex items-center justify-center gap-12'}>
                            <SkipBackward
                                currentTrack={currentTrack}
                                setCurrentTrack={setCurrentTrack}
                                trackList={currentAlbum.track_list}
                            />
                            <PlayButton
                                isPlaying={false}
                                setIsPlaying={() => true}
                            />
                            <SkipForward
                                currentTrack={currentTrack}
                                setCurrentTrack={setCurrentTrack}
                                trackList={currentAlbum.track_list}
                            />
                        </div>
                        <div className={'items-center gap-8 hidden md:flex'}>
                            <MuteButton
                                isMuted={isMuted}
                                setIsMuted={setIsMuted}
                            />
                            <VolumeSlider
                                isMuted={isMuted}
                                setIsMuted={setIsMuted}
                                volume={volume}
                                setVolume={setVolume}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='hidden md:flex w-full'>
                <TrackList
                    currentAlbum={currentAlbum}
                    setCurrentTrack={setCurrentTrack}
                    setShowTrackList={setShowTrackList}
                />
            </div>

            {/* Track list for mobile */}
            <div className={`fixed inset-0 ${showTrackList ? 'block' : 'hidden'}`}>
                <TrackList
                    currentAlbum={currentAlbum}
                    setCurrentTrack={setCurrentTrack}
                    setShowTrackList={setShowTrackList}
                />
            </div>
        </div>
    )
}

export default AudioPlayer
