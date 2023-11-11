import React, { Dispatch, SetStateAction } from 'react'

interface Props {
    currentTime: number
    trackDuration: number
    setSkipToTimestamp: Dispatch<SetStateAction<number>>
}

const ProgressBar = ({ currentTime, trackDuration, setSkipToTimestamp }: Props) => {
    const [width, setWidth] = React.useState(0)

    React.useEffect(() => {
        setWidth((currentTime / trackDuration) * 100)
    }, [currentTime, trackDuration])

    // .track,
    // .progress {
    //     height: $trackHeight;
    //     position: absolute;
    //     left: 0;
    //     top: 0;
    //     bottom: 0;
    //     margin: auto;
    // }

    // .track {
    //     width: 100%;
    //     background-color: $trackColor;
    // }

    // .progress {
    //     background-color: colors.$hero;
    //     border-radius: 0 calc($trackHeight / 2) calc($trackHeight / 2) 0;
    // }

    return (
        <div className='grow flex items-center relative w-full h-[5px]'>
            <div className='absolute m-auto h-[var(--trackHeight)] inset-0 w-full bg-[var(--trackColor)]' />
            <div
                className='absolute m-auto h-[var(--trackHeight)] inset-0 bg-[#1ab751] rounded-r-full'
                style={{ width: `calc(${width}% + 4px)` }}
            />

            <input
                onChange={(e: any) => setSkipToTimestamp(e.target.value)}
                type='range'
                min={0}
                max={trackDuration}
                step={1}
                value={100}
            />
        </div>
    )
}

export default ProgressBar
