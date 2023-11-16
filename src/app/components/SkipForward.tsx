import React, { Dispatch, SetStateAction } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForwardStep } from '@fortawesome/free-solid-svg-icons'
import MediaButton from './MediaButton'
import { Track } from '../hooks/useCurrentTrack'

interface Props {
    setCurrentTrack: Dispatch<SetStateAction<Track | null>>
    currentTrack: Track
    trackList: Track[]
}

const SkipForward = ({ currentTrack, setCurrentTrack, trackList }: Props) => {
    const skipTrackForward = () => {
        if (currentTrack.track_number === trackList.length) return setCurrentTrack(currentTrack)
        return setCurrentTrack(trackList[currentTrack.track_number])
    }

    return (
        <MediaButton clickHandler={skipTrackForward}>
            <FontAwesomeIcon
                icon={faForwardStep}
                className='transition-all duration-300 ease-in-out'
            />
        </MediaButton>
    )
}

export default SkipForward
