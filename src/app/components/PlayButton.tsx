import React, { Dispatch, SetStateAction } from 'react'
import MediaButton from './MediaButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

interface Props {
    isPlaying: boolean
    setIsPlaying: Dispatch<SetStateAction<boolean>>
}

const PlayButton: React.FC<Props> = ({ isPlaying, setIsPlaying }) => {
    const handleClick = () => {
        setIsPlaying(prev => !prev)
    }

    return (
        <MediaButton clickHandler={handleClick}>
            <FontAwesomeIcon
                className={'transition-all duration-300 ease-in-out'}
                icon={isPlaying ? faPause : faPlay}
            />
        </MediaButton>
    )
}

export default PlayButton
