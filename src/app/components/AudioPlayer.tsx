import React from 'react'

interface Props {
    currentTrackSrc: string
    isMuted: boolean
    isPlaying: boolean
}

const AudioPlayer = ({ currentTrackSrc, isMuted, isPlaying }: Props) => {
    const ref = React.useRef<HTMLAudioElement | null>(null)

    if (ref.current) isPlaying ? ref.current.pause() : ref.current?.play()

    return (
        <>
            <audio
                controls={false}
                src={currentTrackSrc}
                //autoPlay={true}
                ref={ref}
                //onTimeUpdate={(e: any) => setCurrentTime(e.target.currentTime * 1000)}
                //onEnded={playNextTrack}
                muted={isMuted}
            />
        </>
    )
}

export default AudioPlayer
