import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import React from 'react'

import { ThemeProvider } from '@/components/providers/theme-provider'

import './globals.css'

const rubik = Rubik({
	subsets: ['latin'],
	variable: '--font-rubik'
})

export const metadata: Metadata = {
	metadataBase: new URL('https://tsoroev.pro'),
	title: {
		default: 'Zaur Tsoroev — Full-Stack Engineer',
		template: '%s | tsoroev.pro'
	},
	description: 'Portfolio of Zaur Tsoroev: React/Next.js & Node.js.',
	icons: {
		icon: '/favicon.svg'
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body
				className={`${rubik.className} min-h-screen bg-[url('/images/backgrounds/Vector-12-1.png')] bg-[60%_2%] bg-no-repeat`}
			>
				<ThemeProvider
					attribute={'class'}
					defaultTheme='dark'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
