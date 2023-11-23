import React, { Dispatch, SetStateAction } from 'react'

interface Props {
    volume: number
    setVolume: Dispatch<SetStateAction<number>>
    isMuted: boolean
    setIsMuted: Dispatch<SetStateAction<boolean>>
}

const VolumeSlider = ({ volume, setVolume, isMuted, setIsMuted }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(parseInt(e.target.value))
        setIsMuted(volume === 0)
    }

    const width = isMuted ? '0%' : `${volume}%`

    return (
        <div className='volumeSlider'>
            <input
                onChange={handleChange}
                type='range'
                min={0}
                max={100}
                step={1}
                value={isMuted ? 0 : volume}
            />
            <div className='volumeSliderTrack' />
            <div
                className='volumeSliderProgress'
                style={{ width: width }}
            />
        </div>
    )
}

export default VolumeSlider
