'use client'

import { motion, useReducedMotion } from 'framer-motion'

import { SectionHeading } from '@/components/shared/section-heading'

import { CareerCard } from './components/career-card'

export function ProfessionalJourney() {
	const prefersReduced = useReducedMotion()

	const fromBottom = {
		hidden: { y: prefersReduced ? 0 : 40, opacity: prefersReduced ? 1 : 0 },
		show: { y: 0, opacity: 1, transition: { duration: prefersReduced ? 0 : 0.6, ease: 'easeOut' } }
	}

	const fromRight = {
		hidden: { x: prefersReduced ? 0 : 80, opacity: prefersReduced ? 1 : 0 },
		show: { x: 0, opacity: 1, transition: { duration: prefersReduced ? 0 : 0.6, ease: 'easeOut' } }
	}
	return (
		<section
			id='career'
			className='max-w-9xl mx-auto flex w-full flex-col gap-6'
		>
			<motion.div
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.2 }}
				variants={fromBottom}
				className='mb-5 flex flex-col items-center'
			>
				<SectionHeading
					title='Professional Journey'
					subtitle='Here’s a timeline of my journey through engineering leadership and development roles — each step strengthening my technical vision, problem-solving, and ability to deliver robust solutions.'
				/>
			</motion.div>
			<motion.div
				initial='hidden'
				whileInView='show'
				viewport={{
					once: true,
					amount: 0.25
				}}
				variants={fromRight}
				className='will-change-transform'
			>
				<CareerCard
					year={2012}
					title='Software Engineer — TechNova Solutions (Mar 2023 – Present)'
					description='Full-time remote developer focusing on scalable React-based applications and CI/CD integration.'
				/>
			</motion.div>
			<motion.div
				initial='hidden'
				whileInView='show'
				viewport={{
					once: true,
					amount: 0.25
				}}
				variants={fromRight}
				className='will-change-transform'
			>
				<CareerCard
					year={2016}
					title='Freelance Full-Stack Developer — Independent Clients (Jan 2022 – Mar 2023)'
					description='Full-time remote developer focusing on scalable React-based applications and CI/CD integration.'
				/>
			</motion.div>
		</section>
	)
}
