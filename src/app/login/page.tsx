'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Page from '../components/Page'

const Login = () => {
    const router = useRouter()

    React.useEffect(() => {
        if (localStorage.loggedIn) return router.push('/')
    }, [router])

    const username = 'guest'
    const password = 'password'

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!username || !password) return

        if (username === 'guest' && password === 'password')
            localStorage.setItem('loggedIn', 'true')
        return router.push('/')
    }

    return (
        <Page>
            <div className='h-screen min-h-screen flex justify-center items-center overflow-hidden'>
                <div className='h-full w-full fixed top-0 left-0 bg-[#181818] -z-10 background' />
                <div className='w-full md:w-[500px] px-12 py-16 overflow-clip text-white md:bg-[rgba(15,15,15,.9)] md:backdrop-blur-sm md:rounded-lg md:shadow-[0_1px_16px_rgba(0,0,0,.2),0_2px_32px_rgba(0,0,0,.1)]'>
                    <h1 className='text-3xl mb-8 font-semibold'>Sign In</h1>

                    <form
                        action=''
                        className='flex flex-col gap-8'
                        onSubmit={handleSubmit}
                    >
                        <input
                            className='py-3 px-5 bg-[#2a2a2a] border-2 border-[#444444] rounded-md text-[#727272] italic cursor-no-drop'
                            value={username}
                            autoComplete={username}
                            name='username'
                            type='text'
                            placeholder='Username'
                            disabled={true}
                            required
                        />

                        <input
                            className='py-3 px-5 bg-[#2a2a2a] border-2 border-[#444444] rounded-md text-[#727272] cursor-no-drop'
                            value={password}
                            autoComplete={password}
                            name='password'
                            type='password'
                            placeholder='Password'
                            disabled={true}
                            required
                        />

                        <button
                            className='py-3 px-5 bg-[#169b45] hover:bg-[#1ab751] border border-[#169b45] hover:border-[#1ab751] rounded-md font-semibold text-[1.1rem] mb-[2rem] transition-all duration-500 ease-in-out'
                            type='submit'
                        >
                            <div>Sign in as guest</div>
                        </button>
                    </form>

                    <div className='text-center'>
                        <div>Guest sign in only</div>
                    </div>
                </div>
            </div>
        </Page>
    )
}

export default Login
