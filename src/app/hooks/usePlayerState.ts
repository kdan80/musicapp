import React from 'react'

export type PlayerState = 0 | 1 | 2

const usePlayerState = () => {
    const [playerState, setPlayerState] = React.useState<PlayerState>(0)
    const showDashboard = playerState === 0
    const showFullPlayer = playerState === 1
    const showMiniPlayer = playerState === 2

    return { setPlayerState, showDashboard, showFullPlayer, showMiniPlayer }
}

export default usePlayerState
