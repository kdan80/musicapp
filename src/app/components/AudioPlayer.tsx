import React, { Dispatch, SetStateAction } from 'react'
import moment from 'moment'
import Image from 'next/image'
import ProgressBar from './ProgressBar'
import { PlayerState } from '../page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { Album } from './AlbumCard'
import SkipBackward from './SkipBackward'
import SkipForward from './SkipForward'

interface Props {
    playerState: PlayerState
    setPlayerState: Dispatch<SetStateAction<PlayerState>>
    currentAlbum: Album
    currentTrackNumber: number
    setCurrentTrackNumber: Dispatch<SetStateAction<number>>
}

const AudioPlayer = ({
    playerState,
    setPlayerState,
    currentAlbum,
    currentTrackNumber,
    setCurrentTrackNumber,
}: Props) => {
    const [currentTime, setCurrentTime] = React.useState(0)
    const [skipToTimestamp, setSkipToTimestamp] = React.useState(0)
    const hidePlayer = playerState === 0
    const showFullPlayer = playerState === 1
    const showMiniPlayer = playerState === 2
    const trackList = currentAlbum.track_list
    const trackDuration = trackList[currentTrackNumber].duration

    return (
        <div className='absolute inset-0 bg-[#080808] flex flex-col items-center px-12'>
            <div
                id='header'
                className='min-h-[3.2rem] w-full flex items-center justify-between'
            >
                <button
                    onClick={() => setPlayerState(0)}
                    className='{styles.headerButton}'
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button className={'${styles.headerButton} ${styles.trackListButton}'}>
                    <FontAwesomeIcon
                        //onClick={() => setShowTrackList(true)}
                        icon={faEllipsisV}
                    />
                </button>
            </div>
            <div
                id='albumArt'
                className='grow w-full flex items-center justify-center'
            >
                <Image
                    width={500}
                    height={500}
                    src={`/albumArt/${currentAlbum.id}/500x500.webp`}
                    alt='album art'
                    placeholder='blur'
                    blurDataURL={`/albumArt/${currentAlbum.id}/blurData.webp`}
                />
            </div>
            <div
                id='playerControls'
                className='w-full flex flex-col '
            >
                <div
                    id='trackInfo'
                    className='text-[#bbb] text-[.9rem] mb-6'
                >
                    <div className='font-semibold text-white mb-[.2rem] text-overflow'>
                        {currentAlbum.track_list[currentTrackNumber].title}
                    </div>
                    <div className='text-overflow'>{currentAlbum.title}</div>
                    <div className='text-overflow -mt-[.2rem]'>{currentAlbum.artist}</div>
                </div>
                <div
                    id='trackProgress'
                    className='flex text-[.9rem] gap-6 mb-6 w-full items-center'
                >
                    <div>{moment(currentTime).format('m:ss')}</div>
                    <ProgressBar
                        currentTime={currentTime}
                        trackDuration={trackDuration}
                        setSkipToTimestamp={setSkipToTimestamp}
                    />
                    <div>{moment(trackDuration).format('m:ss')}</div>
                </div>

                <div className={'mb-10'}>
                    <div className={'flex'}>
                        <SkipBackward
                            currentTrackNumber={currentTrackNumber}
                            setCurrentTrackNumber={setCurrentTrackNumber}
                            // numberOfTracks={'track_list.length'}
                        />
                        {/* <PlayButton 
                                            isPlaying={"isPlaying"} 
                                            setIsPlaying={"setIsPlaying"} />
                                    <SkipButton 
                                        skipBackward={false}
                                        currentTrack={"currentTrack"}
                                        setCurrentTrack={"setCurrentTrack"}
                                        numberOfTracks={"track_list.length"} /> */}
                        <SkipForward
                            currentTrackNumber={currentTrackNumber}
                            setCurrentTrackNumber={setCurrentTrackNumber}
                        />
                    </div>
                    <div className={'styles.buttonsVol'}>
                        {/* <Mute
                                        isMuted={"isMuted"}
                                        setIsMuted={"setIsMuted"}/>
                                    <VolumeSlider
                                        isMuted={"isMuted"}
                                        setIsMuted={"setIsMuted"}
                                        volume={"volume"}
                                        setVolume={"setVolume"} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AudioPlayer
