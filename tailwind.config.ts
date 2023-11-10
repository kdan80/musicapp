import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                poppins: ['var(--font-poppins)'],
            },
            spacing: {
                'card-mob': 'calc((1 / 2 * 100%) - (1.5rem * 1 / 2))',
                'card-500': 'calc((1 / 3 * 100%) - (1.5rem * 2 / 3))',
                'card-700': 'calc((1 / 4 * 100%) - (1.5rem * 3 / 4))',
                'card-800': 'calc((1 / 5 * 100%) - (1.5rem * 4 / 5))',
                'card-1200': 'calc((1 / 6 * 100%) - (1.5rem * 5 / 6))',
                'card-1400': 'calc((1 / 7 * 100%) - (1.5rem * 6 / 7))',
                'card-1600': 'calc((1 / 8 * 100%) - (1.5rem * 7 / 8))',
                'card-1920': 'calc((1 / 9 * 100%) - (1.5rem * 8 / 9))',
            },
        },
    },
    plugins: [],
}
export default config
