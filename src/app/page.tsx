'use client'
import React from 'react'
import albums from './data'

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            Hello
            {albums.map(album => (
                <div>{album.title}</div>
            ))}
            <audio
                controls={true}
                src=''
                autoPlay={true}
                //ref={audioPlayerRef}
                //onTimeUpdate={(e: any) => setCurrentTime(e.target.currentTime * 1000)}
                //onPlay={() => setIsPlaying(true)}
                //onPause={() => setIsPlaying(false)}
                //onEnded={playNextTrack}
                //muted={isMuted}
            />
        </main>
    )
}
