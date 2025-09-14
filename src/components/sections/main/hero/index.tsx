'use client'

import { cubicBezier, motion, useReducedMotion } from 'framer-motion'

import { ButtonLink } from '@/components/shared/button-link'
import { IconLabel } from '@/components/shared/icon-label'
import ResumeButton from '@/components/shared/resume-button'

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
		label: 'Performance',
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

const easeOut = cubicBezier(0.16, 1, 0.3, 1)

export function Hero() {
	const prefersReduced = useReducedMotion()
	const fromBottom = {
		hidden: { y: prefersReduced ? 0 : 40, opacity: prefersReduced ? 1 : 0 },
		show: { y: 0, opacity: 1, transition: { duration: prefersReduced ? 0 : 0.6, ease: easeOut } }
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
			className='max-w-9xl mx-auto flex w-full flex-col gap-20 will-change-transform max-md:gap-10'
			id='about'
		>
			<motion.div
				variants={fromBottom}
				className='mx-auto'
			>
				<IconLabel text='Build Better Software, Seamlessly Together' />
			</motion.div>
			<div className='flex gap-8 max-[389px]:gap-20 max-md:flex-col'>
				<Typewriter
					base={`Hi, I'm Zaur — a Full-Stack Engineer who builds`}
					words={['thoughtful', 'scalable', 'impactful solutions for the web.']}
					className='max-xl2:text-[50px] max-sm2:h-48 mx-auto h-80 w-[75%] max-w-full text-[4rem] leading-[1.25] font-light max-xl:text-[40px] max-md:h-33 max-md:w-[95%] max-md:text-4xl max-sm:h-38'
				/>

				<Tags
					elements={techs}
					className='mx-auto h-70 w-[57%]'
				/>
			</div>
			<motion.p
				variants={fromBottom}
				className='bg-muted mx-auto w-fit rounded-md px-4 py-1 text-lg text-emerald-400 max-md:text-base dark:bg-[#FFFFFF1A]'
			>
				const me = &quot;Full-stack Engineer | JavaScript Enthusiast | React(Next.js) & Node.js
				Dev&quot;
			</motion.p>
			<motion.div
				variants={fromBottom}
				className='flex justify-center gap-4 max-[389px]:flex-col max-[389px]:items-center'
			>
				<ResumeButton />
				<ButtonLink href='#portfolio'>View My Work</ButtonLink>
			</motion.div>
		</motion.section>
	)
}
