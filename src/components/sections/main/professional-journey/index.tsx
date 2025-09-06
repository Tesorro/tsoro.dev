'use client'

import { cubicBezier, motion, useReducedMotion } from 'framer-motion'

import { SectionHeading } from '@/components/shared/section-heading'

import { CareerCard } from './components/career-card'
import type { Job } from '@/lib/data/types'

export const jobs: Job[] = [
	{
		year: 2022,
		title: 'Fullstack Developer — Original Soft',
		period: 'Aug 2022 – Present • Remote • Moscow',
		description:
			'React/TypeScript + Node.js/Express. Support & development of TraceWay, DataScan, iTrack, Time in Status.',
		details: {
			projects: [
				{
					name: 'TraceWay (React + MUI/Styled Components)',
					bullets: [
						'Custom table builder with TypeScript → +25% user efficiency',
						'i18n (i18next) implementation and application theming'
					]
				},
				{
					name: 'DataScan (ReactVis)',
					bullets: ['Interactive charts and visualizations', 'Optimized key scenarios by ≈20%']
				},
				{
					name: 'iTrack (Node 10 + AngularJS)',
					bullets: ['Legacy system support, release stability']
				},
				{
					name: 'Time in Status (React 18 + Express)',
					bullets: ['Jira API integration, full backend development']
				},
				{
					name: 'original-soft.pro',
					bullets: ['Developed and maintain corporate website (+40% traffic)']
				}
			],
			stack: [
				'React',
				'TypeScript',
				'React Router',
				'Context',
				'SASS',
				'Styled Components',
				'Formik',
				'Yup',
				'MUI',
				'React-Bootstrap',
				'i18next',
				'Node.js',
				'Express',
				'React Highcharts'
			],
			achievements: ['Improved UI/UX performance, increased usage metrics, reduced bugs']
		}
	},
	{
		year: 2021,
		title: 'Freelance (Frontend Developer)',
		period: 'Dec 2021 - Aug 2022',
		description: 'Website development. Fixing layout bugs. Writing simple scripts.',
		details: {
			stack: [
				'HTML5/CSS3/JS',
				'ReactJS',
				'Redux (Thunk, Saga)',
				'Jest',
				'PostgreSQL(Sequilize ORM)'
			]
		}
	},
	{
		year: 2015,
		title: 'Chief Engineer, Technical Support Sector — Sberbank Service',
		period: 'Nov 2015 – Apr 2022 • On-site',
		description:
			'Maintenance of >10 centralized systems (99.9% uptime), support for >100 workstations, deployment of server/network equipment.',
		details: {
			achievements: ['Reduced incidents by ~20%', 'Infrastructure and process optimization']
		}
	},
	{
		year: 2012,
		title: 'Lead Engineer — Sberbank',
		period: 'Sep 2012 – Nov 2015 • On-site',
		description:
			'Workstation and POS support, implementation/maintenance of electronic queue systems, server management (AD, security).',
		details: {
			achievements: [
				'Reduced customer waiting time by ≈40%',
				'Enhanced network reliability and security'
			]
		}
	}
]

const easeOut = cubicBezier(0.16, 1, 0.3, 1)

export function ProfessionalJourney() {
	const prefersReduced = useReducedMotion()

	const fromBottom = {
		hidden: { y: prefersReduced ? 0 : 40, opacity: prefersReduced ? 1 : 0 },
		show: { y: 0, opacity: 1, transition: { duration: prefersReduced ? 0 : 0.6, ease: easeOut } }
	}

	const fromRight = {
		hidden: { x: prefersReduced ? 0 : 80, opacity: prefersReduced ? 1 : 0 },
		show: { x: 0, opacity: 1, transition: { duration: prefersReduced ? 0 : 0.6, ease: easeOut } }
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
			{jobs.map((job, idx) => (
				<motion.div
					key={idx}
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
						year={job.year}
						title={job.title}
						period={job.period}
						description={job.description}
						projects={job.details?.projects}
						stack={job.details?.stack}
						achievements={job.details?.achievements}
					/>
				</motion.div>
			))}
		</section>
	)
}
