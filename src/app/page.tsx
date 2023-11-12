'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Header from './components/Header'
import albums from '../albums'
import AlbumCard from './components/AlbumCard'
import AudioPlayer from './components/AudioPlayer'
import { Album } from './components/AlbumCard'

export type PlayerState = 0 | 1 | 2

export default function Home() {
    const router = useRouter()

    if (!localStorage.loggedIn) return router.push('/login')

    const [playerState, setPlayerState] = React.useState<PlayerState>(1)
    const [currentAlbum, setCurrentAlbum] = React.useState<Album>(albums[0])
    const [currentTrackNumber, setCurrentTrackNumber] = React.useState<number>(0)
    const showPlayer = playerState === 1 || playerState === 2

    const loadCurrentAlbum = (albumId: string) => {
        const currentAlbum = albums.find(album => album.id === albumId)
        setCurrentAlbum(currentAlbum)
    }

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
                        className='flex flex-wrap gap-6 mb-[5rem] md:mb-[3.5rem]'
                    >
                        {albums.map((album, index) => (
                            <AlbumCard
                                key={index}
                                album={album}
                                loadCurrentAlbum={loadCurrentAlbum}
                                setCurrentTrack={2}
                                setShowMiniPlayer={false}
                                priority={index < 30}
                            />
                        ))}
                    </div>
                )}
            </div>

            {showPlayer && (
                <AudioPlayer
                    currentAlbum={currentAlbum}
                    currentTrackNumber={currentTrackNumber}
                    setCurrentTrackNumber={setCurrentTrackNumber}
                    playerState={playerState}
                    setPlayerState={setPlayerState}
                />
            )}

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
