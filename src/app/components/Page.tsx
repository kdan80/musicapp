import React from 'react'

interface Props {
    children?: React.ReactNode
}

const Page = ({ children }: Props) => {
    return <main className='min-h-screen max-w-screen overflow-x-hidden'>{children}</main>
}

export default Page
