'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Header from './components/Header'
import albums from '../albums'
import AlbumCard from './components/AlbumCard'
import AudioPlayerControls from './components/AudioPlayerControls'
import MiniPlayer from './components/MiniPlayer'
import { useCurrentAlbum, usePlayerState } from './hooks'
import useCurrentTrack from './hooks/useCurrentTrack'
import usePlayerVolume from './hooks/usePlayerVolume'
import usePlayerIsPlaying from './hooks/usePlayeIsPlaying'
import AudioPlayer from './components/AudioPlayer'
import useTrackProgress from './hooks/useTrackProgress'

export type PlayerState = 0 | 1 | 2

export default function Home() {
    const router = useRouter()

    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const { showFullPlayer, showMiniPlayer, showDashboard, setPlayerState } = usePlayerState()
    const { currentAlbum, loadCurrentAlbum } = useCurrentAlbum(albums)
    const { currentTrack, currentTrackSrc, setCurrentTrack } = useCurrentTrack()
    const { isMuted, setIsMuted, volume, setVolume } = usePlayerVolume()
    const { isPlaying, setIsPlaying } = usePlayerIsPlaying()
    const { trackProgress, setTrackProgress, skipToTimestamp, setSkipToTimestamp } =
        useTrackProgress()

    React.useEffect(() => {
        if (!localStorage.loggedIn) {
            setIsLoggedIn(false)
            return router.push('/login')
        }

        setIsLoggedIn(true)

        showFullPlayer
            ? document.body.classList.add('overflow-hidden')
            : document.body.classList.remove('overflow-hidden')
    }, [showFullPlayer, router, isLoggedIn])

    return (
        <>
            {isLoggedIn && (
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
                                        setCurrentTrack={setCurrentTrack}
                                        setIsPlaying={setIsPlaying}
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
                        {currentAlbum && currentTrack && (
                            <AudioPlayerControls
                                currentAlbum={currentAlbum}
                                currentTrack={currentTrack}
                                setCurrentTrack={setCurrentTrack}
                                setPlayerState={setPlayerState}
                                trackProgress={trackProgress}
                                setSkipToTimestamp={setSkipToTimestamp}
                                isMuted={isMuted}
                                setIsMuted={setIsMuted}
                                volume={volume}
                                setVolume={setVolume}
                                isPlaying={isPlaying}
                                setIsPlaying={setIsPlaying}
                            />
                        )}
                    </div>

                    <div
                        className={`fixed bottom-0 left-0 w-full transition-all duration-500 ease-in-out ${
                            showMiniPlayer ? 'translate-y-[0] z-20' : 'translate-y-full z-10'
                        }`}
                    >
                        {currentAlbum && currentTrack && (
                            <MiniPlayer
                                currentAlbum={currentAlbum}
                                currentTrack={currentTrack}
                                setCurrentTrack={setCurrentTrack}
                                trackProgress={trackProgress}
                                isPlaying={isPlaying}
                                setIsPlaying={setIsPlaying}
                                isMuted={isMuted}
                                setIsMuted={setIsMuted}
                                volume={volume}
                                setVolume={setVolume}
                                setSkipToTimestamp={setSkipToTimestamp}
                                setPlayerState={setPlayerState}
                            />
                        )}
                    </div>

                    {/* This audio player is hidden. The code above is used for the UI */}
                    {currentAlbum && currentTrackSrc && currentTrack && (
                        <AudioPlayer
                            currentTrackSrc={currentTrackSrc}
                            currentAlbum={currentAlbum}
                            currentTrack={currentTrack}
                            setCurrentTrack={setCurrentTrack}
                            setIsPlaying={setIsPlaying}
                            isPlaying={isPlaying}
                            isMuted={isMuted}
                            volume={volume}
                            setTrackProgress={setTrackProgress}
                            skipToTimestamp={skipToTimestamp}
                        />
                    )}
                </main>
            )}
        </>
    )
}
