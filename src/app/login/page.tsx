'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
    const router = useRouter()

    if (sessionStorage.loggedIn) return router.push('/')

    const username = 'guest'
    const password = 'password'

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!username || !password) return

        if (username === 'guest' && password === 'password')
            sessionStorage.setItem('loggedIn', 'true')
        return router.push('/')
    }

    return (
        <div className=''>
            <div className='' />
            <div className=''>
                <h1>Sign In</h1>

                <form
                    action=''
                    onSubmit={handleSubmit}
                >
                    <input
                        value={username}
                        autoComplete={username}
                        name='username'
                        type='text'
                        placeholder='Username'
                        disabled={true}
                        required
                    />

                    <input
                        value={password}
                        autoComplete={password}
                        name='password'
                        type='password'
                        placeholder='Password'
                        disabled={true}
                        required
                    />

                    <button type='submit'>
                        <div>Sign in as guest</div>
                    </button>
                </form>

                <div className=''>
                    <div className=''>
                        <div>Don&apos;t have an account?</div>
                        <div>Sign in as a</div>
                    </div>

                    <div className=''>
                        <div>
                            Return to the standard <span>login</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
