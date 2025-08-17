'use client'

import cn from 'clsx'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { ModeToggle } from '@/components/mode-toggle'

import { Navigation } from './components/navigation'
import { SiteLogo } from './components/site-logo'

const HEADER_BIG = 96 // h-24
const HEADER_SMALL = 64 // h-16

export function Header() {
	const [scrolled, setScrolled] = useState(false)
	const prefersReduced = useReducedMotion()

	useEffect(() => {
		const ENTER = 24
		const EXIT = 8
		let ticking = false

		const onScroll = () => {
			if (ticking) return
			ticking = true
			requestAnimationFrame(() => {
				const y = window.scrollY || 0
				setScrolled(prev => (prev ? y > EXIT : y > ENTER))
				ticking = false
			})
		}

		onScroll()
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<>
			<motion.header
				className={cn(
					'fixed inset-x-0 top-0 z-50 w-full',
					'bg-background/70 backdrop-blur supports-[backdrop-filter]:backdrop-blur',
					'transition-[box-shadow,background-color] duration-300',
					scrolled ? 'shadow-[0_4px_12px_rgba(0,0,0,0.2)]' : 'shadow-none'
				)}
				animate={{ height: scrolled ? HEADER_SMALL : HEADER_BIG }}
				initial={false}
				transition={
					prefersReduced ? { duration: 0 } : { type: 'tween', duration: 0.35, ease: 'easeOut' }
				}
			>
				<div className='max-w-9xl mx-auto flex h-full items-center justify-between px-40'>
					<SiteLogo />
					<Navigation />
					<div className='flex items-center gap-4'>
						<ModeToggle />
					</div>
				</div>
			</motion.header>

			{/* Spacer под хедер */}
			<div
				aria-hidden
				className='h-24'
			/>
		</>
	)
}
