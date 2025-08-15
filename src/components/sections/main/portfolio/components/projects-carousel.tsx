'use client'

import { motion } from 'framer-motion'

import { ImageCarousel } from '@/components/shared/image-carousel'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'

const projects = {
	traceway: {
		title: 'TraceWay',
		description: 'Система маркировки продукции для крупных компаний.',
		images: [
			'/images/projects/traceway/1.png',
			'/images/projects/traceway/2.png',
			'/images/projects/traceway/3.png',
			'/images/projects/traceway/4.png'
		],
		techs: ['React', 'TypeScript', 'React Router', 'Formik', 'Styled Components']
	},
	discord: {
		title: 'Discord Clone',
		description: 'Клон Discord с чатом, звонками и стримингом.',
		images: [
			'/images/projects/discord/2.png',
			'/images/projects/discord/3.png',
			'/images/projects/discord/4.png'
		],
		techs: [
			'React',
			'Zustand',
			'TanStack React Query',
			'Socket.io',
			'ShadCn',
			'Axios',
			'React Hook Form',
			'Zod',
			'LiveKit'
		]
	},
	traceway2: {
		title: 'TraceWay',
		description: 'Система маркировки продукции для крупных компаний.',
		images: [
			'/images/projects/traceway/1.png',
			'/images/projects/traceway/2.png',
			'/images/projects/traceway/3.png',
			'/images/projects/traceway/4.png'
		],
		techs: ['React', 'TypeScript', 'React Router', 'Formik', 'Styled Components']
	}
}

export function ProjectsCarousel() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			viewport={{ once: true, amount: 0.2 }} // amount = сколько % блока должно быть видно
		>
			<Carousel className='w-full'>
				<CarouselContent>
					{Object.entries(projects).map(([key, { title, description, images, techs }]) => (
						<CarouselItem
							key={key}
							className='md:basis-1/2 lg:basis-1/3'
						>
							<div className='p-1'>
								<Card className='group card-gradient border-grey relative overflow-hidden rounded-2xl bg-transparent p-5 transition-shadow duration-500 hover:shadow-lg'>
									<ImageCarousel images={images} />

									<CardHeader className='flex flex-col gap-6 px-0'>
										<CardTitle className='text-3xl font-normal'>{title}</CardTitle>
										<CardDescription className='text-base'>{description}</CardDescription>
									</CardHeader>

									<CardFooter className='px-0 pt-4'>
										<ul className="text-accent flex flex-wrap items-center text-sm [&>li:not(:first-child)]:before:mx-2 [&>li:not(:first-child)]:before:opacity-60 [&>li:not(:first-child)]:before:content-['•']">
											{techs.map(t => (
												<li
													key={t}
													className='text-base whitespace-nowrap'
												>
													{t}
												</li>
											))}
										</ul>
									</CardFooter>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>

				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</motion.div>
	)
}
