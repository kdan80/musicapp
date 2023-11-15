import React, { Dispatch, SetStateAction } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForwardStep } from '@fortawesome/free-solid-svg-icons'
import MediaButton from './MediaButton'
import { Track } from '../hooks/useCurrentTrack'

interface Props {
    setCurrentTrack: Dispatch<SetStateAction<Track | null>>
    currentTrack: Track
}

const SkipForward = ({ currentTrack, setCurrentTrack }: Props) => {
    const skipTrackBackward = ({ currentTrack, setCurrentTrack }: Props) => {
        if (currentTrack.track_number > 0) return setCurrentTrack(prev => prev)
        return setCurrentTrack(prev => prev)
    }

    return (
        <MediaButton>
            <FontAwesomeIcon
                icon={faForwardStep}
                className='transition-all duration-300 ease-in-out'
            />
        </MediaButton>
    )
}

export default SkipForward
