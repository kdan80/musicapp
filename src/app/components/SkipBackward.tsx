import React, { Dispatch, SetStateAction } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons'
import MediaButton from './MediaButton'
import { Track } from '../hooks/useCurrentTrack'

interface Props {
    setCurrentTrack: Dispatch<SetStateAction<Track | null>>
    currentTrack: Track
    trackList: Track[]
}

const SkipBackward = ({ currentTrack, setCurrentTrack, trackList }: Props) => {
    const skipTrackBackward = () => {
        if (currentTrack.track_number === 1) return setCurrentTrack(currentTrack)
        return setCurrentTrack(trackList[currentTrack.track_number - 2])
    }

    return (
        <MediaButton clickHandler={skipTrackBackward}>
            <FontAwesomeIcon
                icon={faBackwardStep}
                className='transition-all duration-300 ease-in-out'
            />
        </MediaButton>
    )
}

export default SkipBackward
