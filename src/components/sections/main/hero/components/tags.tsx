'use client'

import {
	type MotionValue,
	type Variants,
	cubicBezier,
	motion,
	useMotionValue,
	useReducedMotion,
	useTransform
} from 'framer-motion'
import { useEffect, useRef } from 'react'

import type { Tag } from '@/lib/data/types'
import { cn } from '@/lib/utils'

type Direction = 'left' | 'right' | 'top' | 'bottom'
const easeOut = cubicBezier(0.16, 1, 0.3, 1)

function TagBubble({
	label,
	pos,
	scale,
	dir = 'left',
	depth,
	mouseX,
	mouseY,
	variants
}: {
	label: string
	pos: string
	scale?: string
	dir?: Direction
	depth: number
	mouseX: MotionValue<number>
	mouseY: MotionValue<number>
	variants: Record<Direction, Variants>
}) {
	const offsetX = useTransform(mouseX, v => v * depth * 20)
	const offsetY = useTransform(mouseY, v => v * depth * 20)

	return (
		<motion.span
			variants={variants[dir]}
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
}

export function Tags({ elements, className }: { elements: Tag[]; className?: string }) {
	const prefersReduced = useReducedMotion()
	const containerRef = useRef<HTMLDivElement>(null)
	const mouseX = useMotionValue(0)
	const mouseY = useMotionValue(0)

	useEffect(() => {
		const el = containerRef.current
		if (!el) return
		const onMove = (e: PointerEvent) => {
			const r = el.getBoundingClientRect()
			mouseX.set((e.clientX - r.left) / r.width - 0.5)
			mouseY.set((e.clientY - r.top) / r.height - 0.5)
		}
		const onLeave = () => {
			mouseX.set(0)
			mouseY.set(0)
		}
		el.addEventListener('pointermove', onMove, { passive: true })
		el.addEventListener('pointerleave', onLeave)
		return () => {
			el.removeEventListener('pointermove', onMove)
			el.removeEventListener('pointerleave', onLeave)
		}
	}, [mouseX, mouseY])

	const tr = prefersReduced ? { duration: 0 } : { duration: 0.5, ease: easeOut }
	const itemLeft: Variants = {
		hidden: { x: prefersReduced ? 0 : -60, opacity: prefersReduced ? 1 : 0 },
		show: { x: 0, opacity: 1, transition: tr }
	}
	const itemRight: Variants = {
		hidden: { x: prefersReduced ? 0 : 60, opacity: prefersReduced ? 1 : 0 },
		show: { x: 0, opacity: 1, transition: tr }
	}
	const itemTop: Variants = {
		hidden: { y: prefersReduced ? 0 : -60, opacity: prefersReduced ? 1 : 0 },
		show: { y: 0, opacity: 1, transition: tr }
	}
	const itemBottom: Variants = {
		hidden: { y: prefersReduced ? 0 : 60, opacity: prefersReduced ? 1 : 0 },
		show: { y: 0, opacity: 1, transition: tr }
	}

	const variantsMap: Record<Direction, Variants> = {
		left: itemLeft,
		right: itemRight,
		top: itemTop,
		bottom: itemBottom
	}

	return (
		<motion.div
			ref={containerRef}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.3 }}
			className={cn('relative will-change-transform', className)}
		>
			{elements.map(({ label, pos, scale, dir = 'left' }, i) => (
				<TagBubble
					key={label}
					label={label}
					pos={pos}
					scale={scale}
					dir={dir as Direction}
					depth={(i % 3) + 1}
					mouseX={mouseX}
					mouseY={mouseY}
					variants={variantsMap}
				/>
			))}
		</motion.div>
	)
}
