import React, { Dispatch, SetStateAction } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons'
import MediaButton from './MediaButton'
import { Track } from '../hooks/useCurrentTrack'

interface Props {
    setCurrentTrack: Dispatch<SetStateAction<Track | null>>
    currentTrack: Track
}

const SkipBackward = ({ currentTrack, setCurrentTrack }: Props) => {
    return (
        <MediaButton>
            <FontAwesomeIcon
                icon={faBackwardStep}
                className='transition-all duration-300 ease-in-out'
            />
        </MediaButton>
    )
}

export default SkipBackward
