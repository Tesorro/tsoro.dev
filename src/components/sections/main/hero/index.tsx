'use client'

import { motion, useReducedMotion } from 'framer-motion'

import { ButtonLink } from '@/components/shared/button-link'
import { IconLabel } from '@/components/shared/icon-label'

import { Tags } from './components/tags'
import { Typewriter } from './components/typewriter'
import type { Tag } from '@/lib/data/types'

const techs: Tag[] = [
	{
		label: 'Frontend',
		pos: 'top-[10%] left-[8%] md:top-[10%] md:left-[10%]',
		scale: 'scale-115 z-20',
		dir: 'left'
	},
	{
		label: 'Backend',
		pos: 'top-[20%] left-[70%] md:top-[15%] md:left-[65%]',
		scale: 'scale-100 opacity-90 z-10',
		dir: 'right'
	},
	{
		label: 'Perfomance',
		pos: 'top-[35%] left-[25%] md:top-[35%] md:left-[40%]',
		scale: 'scale-110 z-30',
		dir: 'left'
	},
	{
		label: 'UX/UI',
		pos: 'top-[55%] left-[15%] md:top-[70%] md:left-[20%]',
		scale: 'scale-95 opacity-80 z-10',
		dir: 'left'
	},
	{
		label: 'Testing',
		pos: 'top-[70%] left-[60%] md:top-[90%] md:left-[55%]',
		scale: 'scale-105 z-20',
		dir: 'right'
	},
	{
		label: 'CI/CD',
		pos: 'top-[35%] left-[85%] md:top-[60%] md:left-[80%]',
		scale: 'scale-90 opacity-85 z-10',
		dir: 'right'
	}
]

export function Hero() {
	const prefersReduced = useReducedMotion()
	const fromBottom = {
		hidden: { y: prefersReduced ? 0 : 40, opacity: prefersReduced ? 1 : 0 },
		show: { y: 0, opacity: 1, transition: { duration: prefersReduced ? 0 : 0.6, ease: 'easeOut' } }
	}
	const container = {
		hidden: {},
		show: { transition: { staggerChildren: prefersReduced ? 0 : 0.08 } }
	}

	return (
		<motion.section
			variants={container}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.35 }}
			className='max-w-9xl mx-auto flex w-full flex-col gap-20 will-change-transform'
		>
			<motion.div
				variants={fromBottom}
				className='mx-auto'
			>
				<IconLabel text='Build Better Software, Seamlessly Together' />
			</motion.div>
			<div className='flex'>
				<Typewriter
					base={`Hi, I'm Zaur — a Full-Stack Engineer who builds`}
					words={['thoughtful', 'scalable', 'impactful solutions for the web.']}
					className='mx-auto w-[75%] max-w-full text-[4rem] leading-[1.25] font-light'
				/>

				<Tags
					elements={techs}
					className='mx-auto h-60 w-[57%]'
				/>
			</div>
			<motion.p
				variants={fromBottom}
				className='mx-auto w-fit rounded-md bg-[#FFFFFF1A] px-4 py-1 text-lg text-emerald-400'
			>
				const me = "Full-stack Engineer | JavaScript Enthusiast | React(Next.js) & Node.js Dev"
			</motion.p>
			<motion.div
				variants={fromBottom}
				className='flex justify-center gap-4'
			>
				<ButtonLink
					variant='secondary'
					href='#'
					download
				>
					Download Resume
				</ButtonLink>
				<ButtonLink href='#projects'>View My Work</ButtonLink>
			</motion.div>
		</motion.section>
	)
}
