'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'

export function ModeToggle() {
	const { setTheme, resolvedTheme } = useTheme()
	const prefersReduced = useReducedMotion()
	const [mounted, setMounted] = React.useState(false)
	React.useEffect(() => setMounted(true), [])

	// размеры
	const TRACK_W = 100
	const TRACK_H = 48
	const PADDING = 5
	const KNOB = TRACK_H - PADDING * 2
	const X = TRACK_W - KNOB - PADDING * 2

	if (!mounted) {
		return (
			<span
				aria-hidden
				className='inline-block rounded-full bg-zinc-900/10 dark:bg-white/10'
				style={{ width: TRACK_W, height: TRACK_H }}
			/>
		)
	}

	const isDark = resolvedTheme === 'dark'
	const toggle = () => setTheme(isDark ? 'light' : 'dark')

	return (
		<button
			type='button'
			role='switch'
			aria-checked={isDark}
			onClick={toggle}
			className='relative inline-flex cursor-pointer items-center rounded-full bg-zinc-900/10 transition-[background-color] transition-shadow duration-300 outline-none hover:shadow-[0_0_14px_0_rgba(76,81,191,0.65)] focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:bg-white/10'
			style={{ width: TRACK_W, height: TRACK_H }}
			title='Toggle theme'
		>
			{/* Иконки теперь центрируются относительно положения бегунка */}
			<Sun
				className={`pointer-events-none absolute top-1/2 z-10 h-5 w-5 -translate-y-1/2 transition-opacity duration-300 ${isDark ? 'opacity-40' : 'opacity-100'} `}
				style={{
					left: PADDING + KNOB / 2 - 10 // центр иконки (10 = половина 20px)
				}}
			/>
			<Moon
				className={`pointer-events-none absolute top-1/2 z-10 h-5 w-5 -translate-y-1/2 transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-40'} `}
				style={{
					left: PADDING + KNOB / 2 - 10 + X // смещаем вместе с правым положением бегунка
				}}
			/>

			{/* Бегунок */}
			<motion.span
				aria-hidden
				className='absolute top-1/2 z-0 -translate-y-1/2 rounded-full bg-white shadow-sm dark:bg-zinc-900'
				style={{ width: KNOB, height: KNOB, left: PADDING }}
				initial={false}
				animate={{
					x: isDark ? X : 0,
					rotate: prefersReduced ? 0 : isDark ? 180 : 0
				}}
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
