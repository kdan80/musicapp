import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

// The animations in this component can be achieved by CSS alone, however it is a mess in CSS and a wasteland in taiwlind
// JS is slower but much easier to achieve the desired effect (a pulse/radiating shadow effect when the button is clicked)
// In this case adding a "clicked" state in order to set up a timer for button click animations is more elegant

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
    outline-[#169b4550]
`

// prettier-ignore
const clickedStyles = `
    max-md:duration-300
    max-md:outline
    max-md:outline-1
    max-md:outline-offset-[12px]
    max-md:shadow-[0_0_24px_#169b45]
`

interface Props {
    clickHandler: any
}

const AlbumCardButton = ({ clickHandler }: Props) => {
    const [clicked, setButtonClicked] = React.useState(false)

    const handleClick = () => {
        clickHandler()
        setButtonClicked(true)
        setTimeout(() => {
            setButtonClicked(false)
        }, 300)
    }

    return (
        <button
            type='button'
            onClick={handleClick}
            className={`${baseStyles} ${dtStyles} ${clicked && clickedStyles}`}
        >
            <FontAwesomeIcon
                className={`ml-[.15rem] w-[.8rem] h-[.8rem] transition-colors duration-300 ease-in-out ${
                    clicked && 'max-md:text-[#169b45]'
                }`}
                icon={faPlay}
            />
        </button>
    )
}

export default AlbumCardButton
