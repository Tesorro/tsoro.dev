'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'

export function ModeToggle() {
	const { setTheme, resolvedTheme } = useTheme()
	const prefersReduced = useReducedMotion()
	const [mounted, setMounted] = React.useState(false)

	const [size, setSize] = React.useState({ w: 84, h: 40 })
	React.useEffect(() => {
		setMounted(true)
		const mq = window.matchMedia('(min-width: 1024px)')
		const apply = () => setSize(mq.matches ? { w: 100, h: 48 } : { w: 84, h: 40 })
		apply()
		mq.addEventListener?.('change', apply)
		return () => mq.removeEventListener?.('change', apply)
	}, [])

	const PADDING = 5
	const KNOB = size.h - PADDING * 2
	const X = size.w - KNOB - PADDING * 2
	const isDark = resolvedTheme === 'dark'
	const toggle = () => setTheme(isDark ? 'light' : 'dark')

	if (!mounted) {
		return (
			<span
				aria-hidden
				className='inline-block h-10 w-[84px] rounded-full bg-zinc-900/10 lg:h-12 lg:w-[100px] dark:bg-white/10'
			/>
		)
	}

	return (
		<button
			type='button'
			role='switch'
			aria-checked={isDark}
			onClick={toggle}
			className='relative inline-flex cursor-pointer items-center rounded-full bg-zinc-900/10 transition-[background-color] transition-shadow duration-300 outline-none hover:shadow-[0_0_14px_0_rgba(76,81,191,0.65)] focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:bg-white/10'
			style={{ width: size.w, height: size.h }}
			title='Toggle theme'
		>
			<Sun
				className={`pointer-events-none absolute top-1/2 z-10 h-5 w-5 -translate-y-1/2 transition-opacity duration-300 ${
					isDark ? 'opacity-40' : 'opacity-100'
				}`}
				style={{ left: PADDING + KNOB / 2 - 10 }}
			/>
			<Moon
				className={`pointer-events-none absolute top-1/2 z-10 h-5 w-5 -translate-y-1/2 transition-opacity duration-300 ${
					isDark ? 'opacity-100' : 'opacity-40'
				}`}
				style={{ left: PADDING + KNOB / 2 - 10 + X }}
			/>

			<motion.span
				aria-hidden
				className='absolute top-1/2 z-0 -translate-y-1/2 rounded-full bg-white shadow-sm dark:bg-zinc-900'
				style={{ width: KNOB, height: KNOB, left: PADDING }}
				initial={false}
				animate={{ x: isDark ? X : 0, rotate: prefersReduced ? 0 : isDark ? 180 : 0 }}
				transition={
					prefersReduced ? { duration: 0 } : { type: 'spring', stiffness: 300, damping: 24 }
				}
			/>

			<span
				aria-hidden
				className='pointer-events-none absolute inset-0 z-0 rounded-full bg-gradient-to-r from-zinc-100/60 to-zinc-100/0 dark:from-zinc-800/60 dark:to-zinc-800/0'
			/>
			<span className='sr-only'>Toggle theme</span>
		</button>
	)
}
