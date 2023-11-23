import React from 'react'
import axios from 'axios'

export interface Track {
    title: string
    duration: number
    track_number: number
    id: string
    filename: string
}

const useCurrentTrack = () => {
    const [currentTrack, setCurrentTrack] = React.useState<Track | null>(null)
    const [currentTrackSrc, setCurrentTrackSrc] = React.useState<string | null>(null)

    React.useEffect(() => {
        // prettier - ignore
        ;(async () => {
            try {
                if (!currentTrack) return
                const response = await axios.get(`/api/${currentTrack.id}`)
                setCurrentTrackSrc(response.data.url)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [currentTrack])

    return { currentTrack, currentTrackSrc, setCurrentTrack }
}

export default useCurrentTrack
