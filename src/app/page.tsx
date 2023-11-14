'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Header from './components/Header'
import albums from '../albums'
import AlbumCard from './components/AlbumCard'
import AudioPlayer from './components/AudioPlayer'
import { Album } from './components/AlbumCard'
import MiniPlayer from './components/MiniPlayer'

export type PlayerState = 0 | 1 | 2

export default function Home() {
    const router = useRouter()

    if (!localStorage.loggedIn) return router.push('/login')

    const [playerState, setPlayerState] = React.useState<PlayerState>(0)
    const [currentAlbum, setCurrentAlbum] = React.useState<Album>(albums[0])
    const [currentTrackNumber, setCurrentTrackNumber] = React.useState<number>(0)
    const [isMuted, setIsMuted] = React.useState(false)
    const [volume, setVolume] = React.useState<number>(100)
    const [currentTime, setCurrentTime] = React.useState(0)
    const [skipToTimestamp, setSkipToTimestamp] = React.useState(0)
    const [isPlaying, setIsPlaying] = React.useState(false)
    const showFullPlayer = playerState === 1
    const showMiniPlayer = playerState === 2

    const loadCurrentAlbum = (albumId: string) => {
        const currentAlbum = albums.find(album => album.id === albumId)
        setCurrentAlbum(currentAlbum)
    }

    React.useEffect(() => {
        showFullPlayer
            ? document.body.classList.add('overflow-hidden')
            : document.body.classList.remove('overflow-hidden')
    }, [playerState])

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
                                setPlayerState={setPlayerState}
                                setCurrentTrack={2}
                                priority={index < 30}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div
                className={`fixed  h-full w-full top-0 left-0 bg-[#080808] transition-all duration-300 ease-in-out ${
                    showFullPlayer ? 'translate-y-auto z-20' : 'translate-y-full z-10'
                }`}
            >
                <AudioPlayer
                    currentAlbum={currentAlbum}
                    currentTrackNumber={currentTrackNumber}
                    setCurrentTrackNumber={setCurrentTrackNumber}
                    playerState={playerState}
                    setPlayerState={setPlayerState}
                    currentTime={currentTime}
                    setSkipToTimestamp={setSkipToTimestamp}
                    isMuted={isMuted}
                    setIsMuted={setIsMuted}
                    volume={volume}
                    setVolume={setVolume}
                />
            </div>

            <div
                className={`fixed bottom-0 left-0 w-full transition-all duration-500 ease-in-out ${
                    showMiniPlayer ? 'translate-y-[0%] z-20' : 'translate-y-full z-10'
                }`}
            >
                <MiniPlayer
                    currentAlbum={currentAlbum}
                    currentTrackNumber={currentTrackNumber}
                    setCurrentTrackNumber={setCurrentTrackNumber}
                    currentTime={currentTime}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    isMuted={isMuted}
                    setIsMuted={setIsMuted}
                    volume={volume}
                    setVolume={setVolume}
                    setSkipToTimestamp={setSkipToTimestamp}
                    setPlayerState={setPlayerState}
                />
            </div>

            <audio
                controls={false}
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
