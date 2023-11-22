import React from 'react'
import LogoutModal from './LogoutModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [modalIsOpen, setModalIsOpen] = React.useState(false)

    return (
        <header className='w-full bg-[#202020] py-4 px-8 md:px-12'>
            <div className='flex items-center justify-between'>
                <div className='text-[1.1rem] font-semibold text-[#169b45]'>MusicApp</div>
                <button
                    className='flex items-center gap-4 '
                    title='user'
                    onClick={() => setModalIsOpen(true)}
                    type='button'
                >
                    <div className='bg-[#169b45] w-[32px] h-[32px] rounded-full flex justify-center items-center hover:bg-[#1ab751] transition-colors duration-300 ease-in-out'>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className='hidden md:block hover:text-[#1ab751] transition-colors duration-300 ease-in-out'>
                        guest
                    </div>
                </button>
            </div>
            <LogoutModal
                setModalIsOpen={setModalIsOpen}
                modalIsOpen={modalIsOpen}
            />
        </header>
    )
}

export default Header
