'use client'

import { motion, useReducedMotion } from 'framer-motion'

import { SectionHeading } from '@/components/shared/section-heading'

import { ProjectsCarousel } from './components/projects-carousel'
import type { Project } from '@/lib/data/types'

export interface IPortfolio {
	projects: Project[]
}

export function Portfolio({ projects }: IPortfolio) {
	const prefersReduced = useReducedMotion()

	const fromBottom = {
		hidden: { y: prefersReduced ? 0 : 40, opacity: prefersReduced ? 1 : 0 },
		show: { y: 0, opacity: 1, transition: { duration: prefersReduced ? 0 : 0.6, ease: 'easeOut' } }
	}
	return (
		<section
			id='portfolio'
			className="max-w-9xl mx-auto flex w-full flex-col gap-6 bg-[url('/images/backgrounds/Vector-10-1.png')] bg-[length:65%] bg-[50%_50%] bg-no-repeat"
		>
			<motion.div
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.2 }}
				variants={fromBottom}
				className='mb-5 flex flex-col items-center max-lg:mb-2'
			>
				<SectionHeading
					title='Projects'
					subtitle='What I did instead of sleeping'
				/>
			</motion.div>
			<ProjectsCarousel projects={projects} />
		</section>
	)
}
