import React, { Dispatch, SetStateAction } from 'react'
import ProgressBar from './ProgressBar'
import PlayButton from './PlayButton'
import SkipBackward from './SkipBackward'
import SkipForward from './SkipForward'
import Image from 'next/image'
import Mute from './MuteButton'
import VolumeSlider from './VolumeSlider'
import moment from 'moment'
import { Album } from './AlbumCard'
import { PlayerState } from '../page'
import { Track } from '../hooks/useCurrentTrack'

interface Props {
    currentAlbum: Album
    currentTrack: Track
    setCurrentTrack: Dispatch<SetStateAction<Track | null>>
    isPlaying: boolean
    setIsPlaying: Dispatch<SetStateAction<boolean>>
    isMuted: boolean
    setIsMuted: Dispatch<SetStateAction<boolean>>
    volume: number
    currentTime: number
    setVolume: Dispatch<SetStateAction<number>>
    setSkipToTimestamp: Dispatch<SetStateAction<number>>
    setPlayerState: Dispatch<SetStateAction<PlayerState>>
}

const MiniPlayer: React.FC<Props> = ({
    currentAlbum,
    currentTrack,
    setCurrentTrack,
    currentTime,
    isPlaying,
    setIsPlaying,
    isMuted,
    setIsMuted,
    volume,
    setVolume,
    setSkipToTimestamp,
    setPlayerState,
}) => {
    const handleClick = (e: any) => {
        return setPlayerState(1)
    }

    const trackDuration = currentTrack.duration

    return (
        <div className={'w-full'}>
            <div className={'h-full flex flex-col md:flex-col-reverse bg-[#202020] '}>
                <div className={'flex items-center h-full py-3 px-6'}>
                    {/* Left panel - img & info */}
                    <div
                        className={
                            'flex items-center grow px-[.4rem] md:grow gap-2 h-full cursor-pointer'
                        }
                        onClick={handleClick}
                    >
                        <Image
                            className={'h-full'}
                            layout='fixed'
                            height={50}
                            width={50}
                            src={`/albumArt/${currentAlbum.id}/250x250.webp`}
                            alt='album art'
                        />
                        <div className={'text-[.875rem]'}>
                            <div className={'styles.nowPlayingSongTitle'}>{currentTrack.title}</div>
                            <div className={'mt-[.2rem] text-[rgb(255,255,255,.4)]'}>
                                {currentAlbum.artist}
                            </div>
                        </div>
                        <div className={'hidden lg:block lg:ml-8'}>
                            {moment(currentTime).format('m:ss')} /{' '}
                            {moment(trackDuration).format('m:ss')}
                        </div>
                    </div>

                    {/* Center panel - play controls */}
                    <div
                        className={
                            'hidden md:flex justify-end md:justify-center md:grow gap-4 items-center h-full w-[4rem]'
                        }
                    >
                        <SkipBackward
                            currentTrack={currentTrack}
                            setCurrentTrack={setCurrentTrack}
                            // numberOfTracks={'track_list.length'}
                        />
                        <PlayButton
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                        />
                        <SkipForward
                            currentTrack={currentTrack}
                            setCurrentTrack={setCurrentTrack}
                        />
                    </div>

                    {/* Right panel - volume controls */}
                    <div className={'hidden md:flex gap-4 justify-end md:grow items-center'}>
                        <Mute
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

                    <div className='md:hidden'>
                        <PlayButton
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                        />
                    </div>
                </div>
                <ProgressBar
                    currentTime={currentTime}
                    trackDuration={trackDuration}
                    setSkipToTimestamp={setSkipToTimestamp}
                />
            </div>

            <div className={'md:hidden w-full h-6 bg-[0,0,0,.7] backdrop-blur-md'} />
        </div>
    )
}

export default MiniPlayer
