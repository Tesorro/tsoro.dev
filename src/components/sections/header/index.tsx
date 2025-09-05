'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { ModeToggle } from '@/components/mode-toggle'

import { Navigation } from './components/navigation'
import { SiteLogo } from './components/site-logo'
import { cn } from '@/lib/utils'

const HEADER_BIG = 96 // h-24
const HEADER_SMALL = 64 // h-16

export function Header() {
	const [scrolled, setScrolled] = useState(false)
	const [open, setOpen] = useState(false)
	const prefersReduced = useReducedMotion()

	// shrink-on-scroll
	useEffect(() => {
		const ENTER = 24,
			EXIT = 8
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

	// закрывать меню при ресайзе на десктоп
	useEffect(() => {
		const mq = window.matchMedia('(min-width: 768px)')
		const close = () => mq.matches && setOpen(false)
		mq.addEventListener?.('change', close)
		return () => mq.removeEventListener?.('change', close)
	}, [])

	// опционально: не скроллить боди при открытом меню
	useEffect(() => {
		if (open) document.body.style.overflow = 'hidden'
		else document.body.style.overflow = ''
		return () => {
			document.body.style.overflow = ''
		}
	}, [open])

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
				<div className='max-w-9xl relative mx-auto flex h-full items-center justify-between px-40 max-lg:px-7'>
					<SiteLogo />

					<div className='hidden md:block'>
						<Navigation />
					</div>

					<div className='flex items-center gap-2'>
						<ModeToggle />
						<button
							type='button'
							aria-label='Open menu'
							aria-expanded={open}
							aria-controls='mobile-nav'
							onClick={() => setOpen(o => !o)}
							className='bg-foreground/10 inline-flex h-10 w-10 items-center justify-center rounded-full md:hidden dark:bg-white/10'
						>
							{open ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
						</button>
					</div>

					<AnimatePresence>
						{open && (
							<>
								<motion.button
									aria-hidden
									onClick={() => setOpen(false)}
									className='fixed inset-0 z-[-1] bg-black/20 md:hidden'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								/>
								<motion.nav
									id='mobile-nav'
									initial={{ opacity: 0, y: -8 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -8 }}
									transition={{ duration: prefersReduced ? 0 : 0.2, ease: 'easeOut' }}
									className='border-border bg-background/95 absolute top-full right-0 left-0 border-t backdrop-blur md:hidden'
								>
									<ul className='flex flex-col py-2'>
										{[
											{ href: '#about', label: 'About' },
											{ href: '#portfolio', label: 'Portfolio' },
											{ href: '#career', label: 'Work Experience' },
											{ href: '#contacts', label: 'Contacts' }
										].map(i => (
											<li key={i.href}>
												<a
													href={i.href}
													onClick={() => setOpen(false)}
													className='hover:text-primary block px-6 py-3 text-lg transition-colors'
												>
													{i.label}
												</a>
											</li>
										))}
									</ul>
								</motion.nav>
							</>
						)}
					</AnimatePresence>
				</div>
			</motion.header>

			{/* spacer под хедер */}
			<div
				aria-hidden
				className='h-24'
			/>
		</>
	)
}
