'use client'

import { cubicBezier, motion, useReducedMotion } from 'framer-motion'

import { ExpandGallery } from '@/components/shared/expand-gallery'
import { IconLabel } from '@/components/shared/icon-label'
import { SectionHeading } from '@/components/shared/section-heading'

import { TechCarousel } from './components/tech-carousel'
import type { IconDto } from '@/lib/api'

const easeOut = cubicBezier(0.16, 1, 0.3, 1)

export function TechStack({ techsIcons }: { techsIcons: IconDto[] }) {
	const prefersReduced = useReducedMotion()

	const headingFromBottom = {
		hidden: { y: prefersReduced ? 0 : 40, opacity: prefersReduced ? 1 : 0 },
		show: { y: 0, opacity: 1, transition: { duration: prefersReduced ? 0 : 0.6, ease: easeOut } }
	}

	const rowFromRight = {
		hidden: { x: prefersReduced ? 0 : 80, opacity: prefersReduced ? 1 : 0 },
		show: { x: 0, opacity: 1, transition: { duration: prefersReduced ? 0 : 0.6, ease: easeOut } }
	}

	const Row = ({
		label,
		items
	}: {
		label: string
		items: { src: string; alt: string; label?: string }[]
	}) => (
		<motion.div
			initial='hidden'
			whileInView='show'
			viewport={{
				once: true,
				amount: 0.25
			}}
			variants={rowFromRight}
			className='will-change-transform'
		>
			<IconLabel
				text={label}
				className='mb-4'
			/>
			<ExpandGallery items={items} />
		</motion.div>
	)

	return (
		<section className="flex w-full flex-col gap-6 bg-[url('/images/backgrounds/Vector-10-1.png')] bg-[length:112%] bg-[55%_55%] bg-no-repeat">
			<motion.div
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.2 }}
				variants={headingFromBottom}
				className='mb-8 flex flex-col items-center max-lg:mb-4'
			>
				<SectionHeading
					title='Tech Stack & Tools I Use'
					subtitle="The tech landscape never stands still, and neither do I. These are the technologies I'm
					currently most excited about and proficient with"
				/>
			</motion.div>

			<Row
				label='Frontend'
				items={[
					{ src: '/images/techs/html5.jpg', alt: 'HTML5', label: 'HTML5' },
					{ src: '/images/techs/react.png', alt: 'ReactJS', label: 'ReactJS' },
					{ src: '/images/techs/nextjs.png', alt: 'NextJS', label: 'NextJS' }
				]}
			/>

			<Row
				label='Backend'
				items={[
					{ src: '/images/techs/nodejs.png', alt: 'NodeJS', label: 'NodeJS' },
					{ src: '/images/techs/postgresql.png', alt: 'PostgreSQL', label: 'PostgreSQL' },
					{ src: '/images/techs/nestjs.jpg', alt: 'NestJS', label: 'NestJS' }
				]}
			/>

			<Row
				label='DevOps'
				items={[
					{ src: '/images/techs/github.png', alt: 'GitHub', label: 'GitHub' },
					{ src: '/images/techs/jenkins.png', alt: 'Jenkins', label: 'Jenkins' },
					{ src: '/images/techs/docker.webp', alt: 'Docker', label: 'Docker' }
				]}
			/>

			<Row
				label='Additional Tools'
				items={[
					{ src: '/images/techs/figma.webp', alt: 'Figma', label: 'Figma' },
					{ src: '/images/techs/photoshop.webp', alt: 'Photoshop', label: 'Photoshop' },
					{ src: '/images/techs/postman.png', alt: 'Postman', label: 'Postman' }
				]}
			/>
			<TechCarousel techsIcons={techsIcons}/>
		</section>
	)
}
