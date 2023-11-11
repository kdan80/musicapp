import React, { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
    setModalIsOpen: Dispatch<SetStateAction<boolean>>
    modalIsOpen: boolean
}

const LogoutModal = ({ setModalIsOpen, modalIsOpen }: Props) => {
    const router = useRouter()
    const logout = () => {
        localStorage.removeItem('loggedIn')
        return router.push('/login')
    }

    return (
        <>
            {modalIsOpen && (
                <div className='absolute top-12 left-0 right-0 z-20 ml-auto mr-auto min-w-[15rem] max-w-[18rem] md:min-w-[18rem] md:top-12 md:right-4 md:left-auto flex flex-col justify-center w-min-[15rem] gap-2 p-6 rounded font-[1.1rem] bg-[#323232] shadow-[0_0_16px_rgba(0,0,0,.6),0_0_32px_rgba(0,0,0,.3)]'>
                    <h1 className='text-lg font-semibold'>Confirm Exit:</h1>
                    <div className='text-[.9rem]'>Are you sure you wish to log out?</div>
                    <div className='flex justify-end items-center gap-6 md:gap-10 mt-2'>
                        <button
                            type='button'
                            className='text-[1.1rem] font-semibold text-[#169b45] hover:text-[#1ab751] transition-colors duration-300 ease-in-out'
                            onClick={() => setModalIsOpen(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type='button'
                            className='text-[1.1rem] font-semibold text-[#169b45] hover:text-[#1ab751] transition-colors duration-300 ease-in-out'
                            onClick={logout}
                        >
                            Yes
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default LogoutModal
