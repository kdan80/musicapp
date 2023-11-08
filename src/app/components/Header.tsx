import React from 'react'

const Header = () => {
    const setModalIsOpen = (bool: boolean) => {
        const mess = bool ? 'modal open' : 'modal closed'
        alert(mess)
    }

    return (
        <header className='w-full bg-[#202020] px-6 py-4'>
            <div className='flex items-center justify-between'>
                <div className='font-[1.1rem] font-semibold text-[#169b45]'>MusicApp</div>
                <button
                    className='flex items-center gap-4'
                    title='user'
                    onClick={() => setModalIsOpen(true)}
                    type='button'
                >
                    <div className='bg-[#169b45] w-[32px] h-[32px] rounded-full flex justify-center items-center'>
                        {/* <FontAwesomeIcon icon={faUser} /> */}xx
                    </div>
                    <div className='hidden md:block hover:text-[#169b45] transition-colors duration-300 ease-in-out'>
                        guest
                    </div>
                </button>
            </div>
        </header>
    )
}

export default Header
