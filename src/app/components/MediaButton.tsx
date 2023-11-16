import React from 'react'

interface Props {
    children: React.ReactNode
    clickHandler?: () => void
}

// prettier-ignore
const baseStyles = `
    transition-all
    duration-300
    ease-in-out
    outline-[#169b4555]
`

// prettier-ignore
const clickedStyles = `
    outline
    outline-1
    outline-offset-[12px]
    shadow-[0_0_24px_#169b45]
    bg-[#169b4590]
    text-white
`

const MediaButton = ({ children, clickHandler }: Props) => {
    const [buttonClicked, setButtonClicked] = React.useState<boolean>(false)

    const handleClick = () => {
        setButtonClicked(true)
        setTimeout(() => {
            setButtonClicked(false)
        }, 300)
        if (clickHandler) return clickHandler()
    }

    return (
        <button
            type='button'
            onClick={handleClick}
            className={`${baseStyles} text-[#cecece] relative flex justify-center items-center rounded-full text-xl w-10 h-10 transition-all duration-300 ease-in-out ${
                buttonClicked && clickedStyles
            }`}
        >
            {children}
        </button>
    )
}

export default MediaButton
