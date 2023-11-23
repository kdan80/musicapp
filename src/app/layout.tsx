import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    style: ['normal', 'italic'],
    variable: '--font-poppins',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Musicapp',
    description: 'Portfolio music streaming app by Kieran Dansey',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body
                className={`${poppins.variable} ${
                    process.env.ENV === 'development' && 'debug-screens'
                }  font-poppins`}
            >
                {children}
            </body>
        </html>
    )
}
