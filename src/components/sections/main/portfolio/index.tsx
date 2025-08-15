'use client'

import { motion, useReducedMotion } from 'framer-motion'

import { SectionHeading } from '@/components/shared/section-heading'

import { ProjectsCarousel } from './components/projects-carousel'

export function Portfolio() {
	const prefersReduced = useReducedMotion()

	const fromBottom = {
		hidden: { y: prefersReduced ? 0 : 40, opacity: prefersReduced ? 1 : 0 },
		show: { y: 0, opacity: 1, transition: { duration: prefersReduced ? 0 : 0.6, ease: 'easeOut' } }
	}
	return (
		<section
			id='portfolio'
			className="max-w-9xl mx-auto flex w-full flex-col gap-6 bg-[url('/images/backgrounds/Vector-10-1.png')] bg-[length:120%] bg-[190%_12%] bg-no-repeat"
		>
			<motion.div
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.2 }}
				variants={fromBottom}
				className='mb-5 flex flex-col items-center'
			>
				<SectionHeading
					title='My Portfolio'
					subtitle='Projects where I applied my skills'
				/>
			</motion.div>
			<ProjectsCarousel />
		</section>
	)
}
