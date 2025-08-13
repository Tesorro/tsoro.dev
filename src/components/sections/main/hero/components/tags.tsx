'use client'

import cn from 'clsx'
import { motion, useReducedMotion } from 'framer-motion'

import type { Tag } from '@/lib/data/types'

interface IProps {
	elements: Tag[]
	className?: string
}

export function Tags({ elements, className }: IProps) {
	const prefersReduced = useReducedMotion()
	const itemLeft = {
		hidden: { x: prefersReduced ? 0 : -60, opacity: prefersReduced ? 1 : 0 },
		show: { x: 0, opacity: 1, transition: { duration: prefersReduced ? 0 : 0.5, ease: 'easeOut' } }
	}
	const itemRight = {
		hidden: { x: prefersReduced ? 0 : 60, opacity: prefersReduced ? 1 : 0 },
		show: { x: 0, opacity: 1, transition: { duration: prefersReduced ? 0 : 0.5, ease: 'easeOut' } }
	}

	return (
		<motion.div
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.3 }}
			className={cn('relative will-change-transform', className)}
		>
			{elements.map(({ label, pos, scale, dir = 'left' }) => (
				<motion.span
					key={label}
					//@ts-ignore
					variants={dir === 'left' ? itemLeft : itemRight}
					className={cn(
						'border-grey bg-muted absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-lg px-4 py-1.5 text-sm transition-shadow duration-300 hover:shadow-[0_4px_14px_0_rgba(76,81,191,0.65)]',
						pos,
						scale
					)}
				>
					{label}
				</motion.span>
			))}
		</motion.div>
	)
}
