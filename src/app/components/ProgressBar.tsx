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
        // setWidth(50)
    }, [currentTime, trackDuration])

    return (
        <div className='grow flex items-center relative w-full h-[5px]'>
            <div
                id='track'
                className='absolute  h-[var(--trackHeight)] inset-0 w-full bg-[var(--trackColor)]'
            />
            <div
                id='progress'
                className='absolute  h-[var(--trackHeight)] inset-0 bg-[#1ab751] rounded-r-full'
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
