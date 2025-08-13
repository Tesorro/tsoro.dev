'use client'

import { motion, useReducedMotion } from 'framer-motion'

import { IconLabel } from '@/components/shared/icon-label'

import { Tags } from '../hero/components/tags'

import type { Tag } from '@/lib/data/types'

const techs: Tag[] = [
	{ label: 'Developer', pos: 'top-[20%] left-[15%] md:top-[20%] md:left-[30%] scale-120' },
	{ label: 'Engineer', pos: 'top-[80%] left-[28%] md:top-[70%] md:left-[85%] scale-120' }
]

export function About() {
	const prefersReduced = useReducedMotion()

	const container = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: prefersReduced ? 0 : 0.09
			}
		}
	}

	const item = {
		hidden: { x: prefersReduced ? 0 : 80, opacity: prefersReduced ? 1 : 0 },
		show: { x: 0, opacity: 1, transition: { duration: prefersReduced ? 0 : 0.6, ease: 'easeOut' } }
	}

	return (
		<div
			id='about'
			className='bg-[url("/images/backgrounds/Vector-7-1.png")] bg-top bg-no-repeat'
		>
			<motion.section
				variants={container}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.3 }}
				className='max-w-9xl mx-auto flex w-full flex-col gap-6 will-change-transform'
			>
				<motion.div variants={item}>
					<IconLabel text='About Me' />
				</motion.div>

				<motion.div
					variants={item}
					className='flex gap-6'
				>
					<motion.p
						variants={item}
						className='flex-6/8 text-[40px] font-normal will-change-transform'
					>
						I’m a software engineer driven by a passion for problem-solving and building
						high-quality web products. What started as an interest in the “why” behind technology
						became a mission to design efficient, impactful solutions.{` `}
						<span className='hover:text-accent text-gray-500 transition-colors duration-500'>
							I’ve worked on applications ranging from productivity tools to large-scale e-commerce
							platforms.
						</span>
					</motion.p>

					<motion.div
						variants={item}
						className='flex-2/8 will-change-transform'
					>
						<Tags
							elements={techs}
							className='min-h-[320px]'
						/>
					</motion.div>
				</motion.div>
			</motion.section>
		</div>
	)
}
