'use client'

import cn from 'clsx'
import { motion, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

import type { Tag } from '@/lib/data/types'

interface IProps {
	elements: Tag[]
	className?: string
}

export function Tags({ elements, className }: IProps) {
	const prefersReduced = useReducedMotion()
	const containerRef = useRef<HTMLDivElement>(null)

	const mouseX = useMotionValue(0)
	const mouseY = useMotionValue(0)

	useEffect(() => {
		const container = containerRef.current
		if (!container) return

		const handleMouseMove = (e: MouseEvent) => {
			const rect = container.getBoundingClientRect()
			const x = (e.clientX - rect.left) / rect.width - 0.5 // -0.5 .. 0.5
			const y = (e.clientY - rect.top) / rect.height - 0.5
			mouseX.set(x)
			mouseY.set(y)
		}

		const handleMouseLeave = () => {
			mouseX.set(0)
			mouseY.set(0)
		}

		container.addEventListener('mousemove', handleMouseMove)
		container.addEventListener('mouseleave', handleMouseLeave)

		return () => {
			container.removeEventListener('mousemove', handleMouseMove)
			container.removeEventListener('mouseleave', handleMouseLeave)
		}
	}, [mouseX, mouseY])

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
			ref={containerRef}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.3 }}
			className={cn('relative will-change-transform', className)}
		>
			{elements.map(({ label, pos, scale, dir = 'left' }, i) => {
				const depth = (i % 3) + 1 // разные "слои"
				const offsetX = useTransform(mouseX, v => v * depth * 20)
				const offsetY = useTransform(mouseY, v => v * depth * 20)

				return (
					<motion.span
						key={label}
						//@ts-ignore
						variants={dir === 'left' ? itemLeft : itemRight}
						style={{ x: offsetX, y: offsetY }}
						className={cn(
							'border-grey bg-muted absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-lg px-4 py-1.5 text-sm transition-shadow duration-300 hover:shadow-[0_4px_14px_0_rgba(76,81,191,0.65)]',
							pos,
							scale
						)}
					>
						{label}
					</motion.span>
				)
			})}
		</motion.div>
	)
}
