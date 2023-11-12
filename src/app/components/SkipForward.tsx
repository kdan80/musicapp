import React, { Dispatch, SetStateAction } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForwardStep } from '@fortawesome/free-solid-svg-icons'
import MediaButton from './MediaButton'

interface Props {
    setCurrentTrackNumber: Dispatch<SetStateAction<number>>
    currentTrackNumber: number
}

const SkipForward = ({}: Props) => {
    const skipTrackBackward = ({ currentTrackNumber, setCurrentTrackNumber }: Props) => {
        if (currentTrackNumber > 0) return setCurrentTrackNumber(prev => prev - 1)
        return setCurrentTrackNumber(numberOfTracks - 1)
    }

    return (
        <MediaButton>
            <FontAwesomeIcon
                icon={faForwardStep}
                className='text-[#cecece] transition-all duration-300 ease-in-out'
            />
        </MediaButton>
    )
}

export default SkipForward