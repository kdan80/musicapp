'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Header from './components/Header'
import albums from '../albums'
import AlbumCard from './components/AlbumCard'

export default function Home() {
    const router = useRouter()

    if (!localStorage.loggedIn) return router.push('/login')

    const testAlbums = albums.slice(0, 30)

    return (
        <main className='flex min-h-screen flex-col bg-[#101010] text-white'>
            <Header />
            <div
                id='dashboard'
                className='p-8 md:p-12'
            >
                {albums && (
                    <div
                        id='albumGrid'
                        className='flex flex-wrap gap-6 mb-[5rem] mb-[3.5rem]'
                    >
                        {testAlbums.map((album, index) => (
                            <AlbumCard
                                key={index}
                                album={album}
                                setNowPlaying={1}
                                SetCurrentTrack={2}
                                setShowMiniPlayer={false}
                                priority={index < 30}
                            />
                        ))}
                    </div>
                )}
            </div>
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
