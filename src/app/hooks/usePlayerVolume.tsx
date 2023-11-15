import React from 'react'

const usePlayerVolume = () => {
    const [isMuted, setIsMuted] = React.useState(false)
    const [volume, setVolume] = React.useState(100)

    return { isMuted, setIsMuted, volume, setVolume }
}

export default usePlayerVolume
