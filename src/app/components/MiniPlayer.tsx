import React, { Dispatch, SetStateAction } from 'react'
import ProgressBar from './ProgressBar'
import PlayButton from './PlayButton'
import SkipBackward from './SkipBackward'
import SkipForward from './SkipForward'
import Image from 'next/image'
import Mute from './MuteButton'
import VolumeSlider from './VolumeSlider'
import moment from 'moment'
import { Album } from '../hooks/useCurrentAlbum'
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
    trackProgress: number
    setVolume: Dispatch<SetStateAction<number>>
    setSkipToTimestamp: Dispatch<SetStateAction<number>>
    setPlayerState: Dispatch<SetStateAction<PlayerState>>
}

const MiniPlayer = ({
    currentAlbum,
    currentTrack,
    setCurrentTrack,
    trackProgress,
    isPlaying,
    setIsPlaying,
    isMuted,
    setIsMuted,
    volume,
    setVolume,
    setSkipToTimestamp,
    setPlayerState,
}: Props) => {
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
                            'flex items-center px-[.4rem] grow md:shrink-1 md:basis-0 gap-2 h-full cursor-pointer'
                        }
                        onClick={handleClick}
                    >
                        <Image
                            height={50}
                            width={50}
                            src={`/albumArt/${currentAlbum.id}/250x250.webp`}
                            alt='album art'
                            placeholder='blur'
                            blurDataURL={`/albumArt/${currentAlbum.id}/blurData.webp`}
                        />
                        <div className={'text-[.875rem] w-52'}>
                            <div className={'whitespace-nowrap overflow-hidden text-ellipsis'}>
                                {currentTrack.title}
                            </div>
                            <div
                                className={
                                    'mt-[.2rem] text-[rgb(255,255,255,.4)] whitespace-nowrap overflow-hidden text-ellipsis'
                                }
                            >
                                {currentAlbum.artist}
                            </div>
                        </div>
                        <div className={'hidden lg:ml-8 md:flex grow'}>
                            <div className='w-10 text-center'>
                                {moment(trackProgress * 1000).format('m:ss')}
                            </div>
                            <div className='w-5 text-center'>/</div>
                            <div className='w-10 text-start'>
                                {moment(trackDuration * 1000).format('m:ss')}
                            </div>
                        </div>
                    </div>

                    {/* Center panel - play controls */}
                    <div
                        className={
                            'hidden md:flex justify-end md:justify-center md:grow md:shrink-1 md:basis-0 gap-4 items-center h-full w-[4rem]'
                        }
                    >
                        <SkipBackward
                            currentTrack={currentTrack}
                            setCurrentTrack={setCurrentTrack}
                            trackList={currentAlbum.track_list}
                        />
                        <PlayButton
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                        />
                        <SkipForward
                            currentTrack={currentTrack}
                            setCurrentTrack={setCurrentTrack}
                            trackList={currentAlbum.track_list}
                        />
                    </div>

                    {/* Right panel - volume controls */}
                    <div
                        className={
                            'hidden md:flex gap-4 justify-end md:grow md:shrink-1 md:basis-0 items-center'
                        }
                    >
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
                    trackProgress={trackProgress}
                    trackDuration={trackDuration}
                    setSkipToTimestamp={setSkipToTimestamp}
                />
            </div>

            <div className={'md:hidden w-full h-6 bg-[0,0,0,.7] backdrop-blur-md'} />
        </div>
    )
}

export default MiniPlayer
