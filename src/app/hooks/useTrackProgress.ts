import React from 'react'

const usePlayerVolume = () => {
    const [trackProgress, setTrackProgress] = React.useState(0)
    const [skipToTimestamp, setSkipToTimestamp] = React.useState(0)

    return { trackProgress, setTrackProgress, skipToTimestamp, setSkipToTimestamp }
}

export default usePlayerVolume
