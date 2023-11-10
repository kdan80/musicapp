import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

// prettier-ignore
const baseStyles = `
    absolute 
    bottom-[.5rem] 
    right-[.5rem] 
    flex 
    justify-center 
    items-center 
    h-[42px] 
    w-[42px] 
    rounded-full 
    cursor-pointer
    bg-[rgba(0,0,0,.8)]
    transition-all 
    ease-in-out
    hover:text-white 
`
// prettier-ignore
const dtStyles = `

    md:m-auto 
    md:left-0 
    md:right-0 
    md:top-0 
    md:bottom-0 
    md:text-[#cacaca]
    md:h-[4.5rem] 
    md:w-[4.5rem]

    md:duration-200
    md:scale-0
    md:group-hover:scale-100
    md:group-hover:hover:scale-125

    md:active:bg-[#169b45]
    md:hover:bg-[rgba(22,155,69,.8)]
`

// prettier-ignore
const mobStyles = `
    max-md:active:text-[#169b45]
`

// prettier-ignore
const clickedStyles = `
    max-md:duration-300
    max-md:outline 
    max-md:outline-1 
    max-md:outline-offset-[12px]
    max-md:outline-[#169b4522]
    max-md:shadow-[0_0_24px_#169b45] 
    max-md:text-[#169b45]
`

const AlbumCardButton = () => {
    const [clicked, setButtonClicked] = React.useState(false)

    const handleClick = () => {
        setButtonClicked(true)
        setTimeout(() => {
            setButtonClicked(false)
        }, 300)
    }

    return (
        <button
            type='button'
            onClick={handleClick}
            className={`${baseStyles} ${dtStyles} ${mobStyles} ${clicked && clickedStyles}`}
        >
            <FontAwesomeIcon
                className='ml-[.15rem] w-[.8rem] h-[.8rem] '
                icon={faPlay}
            />
        </button>
    )
}

export default AlbumCardButton
