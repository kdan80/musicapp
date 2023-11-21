import React, { Dispatch, SetStateAction } from 'react'

interface Props {
    trackProgress: number
    trackDuration: number
    setSkipToTimestamp: Dispatch<SetStateAction<number>>
}

const ProgressBar = ({ trackProgress, trackDuration, setSkipToTimestamp }: Props) => {
    const [width, setWidth] = React.useState(0)

    React.useEffect(() => {
        setWidth((trackProgress / trackDuration) * 100)
    }, [trackProgress, trackDuration])

    return (
        <div className='grow flex items-center relative w-full h-[5px]'>
            <div
                id='track'
                className='absolute  h-[var(--trackHeight)] inset-0 w-full bg-[var(--trackColor)]'
            />
            <div
                id='progress'
                className='absolute h-[var(--trackHeight)] inset-0 bg-[#1ab751] rounded-r-full'
                style={{ width: `calc(${width}% + 4px)` }}
            />

            <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSkipToTimestamp(parseInt(e.target.value))
                }
                type='range'
                min={0}
                max={trackDuration}
                step={1}
                value={trackProgress}
            />
        </div>
    )
}

export default ProgressBar
