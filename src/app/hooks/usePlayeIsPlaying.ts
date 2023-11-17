import React from 'react'

const usePlayerIsPlaying = () => {
    const [isPlaying, setIsPlaying] = React.useState(false)

    return { isPlaying, setIsPlaying }
}

export default usePlayerIsPlaying
