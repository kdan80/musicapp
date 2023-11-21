import React, { Dispatch, SetStateAction } from 'react'
import { Album } from '../hooks/useCurrentAlbum'
import { Track } from '../hooks/useCurrentTrack'

interface Props {
    currentAlbum: Album
    currentTrack: Track
    currentTrackSrc: string
    isMuted: boolean
    isPlaying: boolean
    setIsPlaying: Dispatch<SetStateAction<boolean>>
    volume: number
    setTrackProgress: Dispatch<SetStateAction<number>>
    setCurrentTrack: Dispatch<SetStateAction<Track | null>>
    skipToTimestamp: number
    setSkipToTimestamp: number
}

const AudioPlayer = ({
    currentAlbum,
    currentTrack,
    setCurrentTrack,
    setIsPlaying,
    currentTrackSrc,
    isMuted,
    isPlaying,
    volume,
    setTrackProgress,
    skipToTimestamp,
}: Props) => {
    const ref = React.useRef<HTMLAudioElement | null>(null)

    if (ref.current) {
        isPlaying ? ref.current.play() : ref.current?.pause()
        ref.current.volume = volume / 100
    }

    React.useEffect(() => {
        if (ref.current) ref.current.currentTime = skipToTimestamp
    }, [skipToTimestamp])

    const playNextTrack = () => {
        if (currentTrack.track_number === currentAlbum.track_list.length) return setIsPlaying(false)
        const nextTrack = currentAlbum.track_list[currentTrack.track_number]
        setCurrentTrack(nextTrack)
    }

    return (
        <>
            <audio
                controls={false}
                src={currentTrackSrc}
                autoPlay={isPlaying}
                ref={ref}
                onTimeUpdate={(e: any) => setTrackProgress(e.target.currentTime)}
                onEnded={playNextTrack}
                muted={isMuted}
            />
        </>
    )
}

export default AudioPlayer
