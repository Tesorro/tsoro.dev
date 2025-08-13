'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type Props = {
	base: string
	words: string[]
	className?: string
	typeDelay?: number
	deleteDelay?: number
	holdDelay?: number
}

export function Typewriter({
	base,
	words,
	className,
	typeDelay = 70,
	deleteDelay = 50,
	holdDelay = 800
}: Props) {
	const prefersReduced = useReducedMotion()
	const [text, setText] = useState('')
	const [phase, setPhase] = useState<'typingBase' | 'typingWord' | 'deletingWord' | 'done'>(
		'typingBase'
	)
	const [wordIndex, setWordIndex] = useState(0)
	const timers = useRef<number[]>([])

	useEffect(() => () => timers.current.forEach(id => clearTimeout(id)), [])

	useEffect(() => {
		if (prefersReduced) {
			setText(`${base} ${words[words.length - 1]}`)
			setPhase('done')
			return
		}

		if (phase === 'typingBase') {
			if (text.length < base.length) {
				const id = window.setTimeout(() => {
					setText(prev => prev + base[prev.length])
				}, typeDelay)
				timers.current.push(id)
			} else {
				setPhase('typingWord')
			}
		}

		if (phase === 'typingWord') {
			const currentWord = words[wordIndex]
			const baseWithSpace = base.endsWith(' ') ? base : base + ' '
			const typedPart = text.slice(baseWithSpace.length)

			if (typedPart.length < currentWord.length) {
				const id = window.setTimeout(() => {
					setText(prev => {
						if (prev.length < baseWithSpace.length) {
							return baseWithSpace
						}
						return prev + currentWord[typedPart.length]
					})
				}, typeDelay)
				timers.current.push(id)
			} else {
				if (wordIndex === words.length - 1) {
					setPhase('done')
				} else {
					const id = window.setTimeout(() => setPhase('deletingWord'), holdDelay)
					timers.current.push(id)
				}
			}
		}

		if (phase === 'deletingWord') {
			const baseWithSpace = base.endsWith(' ') ? base : base + ' '
			const typedPart = text.slice(baseWithSpace.length)

			if (typedPart.length > 0) {
				const id = window.setTimeout(() => {
					setText(prev => prev.slice(0, -1))
				}, deleteDelay)
				timers.current.push(id)
			} else {
				setWordIndex(i => i + 1)
				setPhase('typingWord')
			}
		}
	}, [text, phase, base, words, typeDelay, deleteDelay, holdDelay, wordIndex, prefersReduced])

	return (
		<motion.h2
			className={className}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.3 }}
		>
			{text}
			{phase !== 'done' && (
				<motion.span
					className='ml-1 inline-block h-[1.1em] w-1 bg-current align-[-0.2em]'
					animate={{ opacity: [1, 0] }}
					transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
				/>
			)}
		</motion.h2>
	)
}
