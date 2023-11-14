import React, { SetStateAction, Dispatch } from 'react'
import MediaButton from './MediaButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'

interface Props {
    isMuted: boolean
    setIsMuted: Dispatch<SetStateAction<boolean>>
}

const Mute = ({ isMuted, setIsMuted }: Props) => {
    const handleClick = () => {
        setIsMuted(prev => !prev)
    }

    return (
        <MediaButton clickHandler={handleClick}>
            <FontAwesomeIcon
                className={'transition-all duration-300 ease-in-out'}
                icon={isMuted ? faVolumeMute : faVolumeUp}
            />
        </MediaButton>
    )
}

export default Mute
