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
		techs: ['React', 'TypeScript', 'React Router', 'Formik', 'Sass', 'Styled Components']
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
			'NextJS',
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
	datascan: {
		title: 'DataScan',
		description:
			'Система обработки и хранения данных о движении лекарств по товаропроводящей сети.',
		images: [
			'/images/projects/datascan/1.png',
			'/images/projects/datascan/2.png',
			'/images/projects/datascan/3.png',
			'/images/projects/datascan/4.png'
		],
		techs: ['React', 'TypeScript', 'React Router', 'React Highcharts', 'Sass', 'Styled Components']
	},
	'personal-site': {
		title: 'Personal Site',
		description: 'My website',
		images: [
			'/images/projects/personal-site/1.png',
			'/images/projects/personal-site/2.png',
			'/images/projects/personal-site/3.png'
		],
		techs: ['NextJS', 'TypeScript', 'Tailwind', 'Framer Motion']
	}
}

const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15
		}
	}
}

const cardVariants = {
	hidden: { opacity: 0, y: 40 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

export function ProjectsCarousel() {
	return (
		<motion.div
			variants={containerVariants}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.2 }}
		>
			<Carousel
				className='w-full'
				opts={{ loop: true, align: 'start' }}
			>
				<CarouselContent className='-mr-1 -ml-1 pb-2'>
					{Object.entries(projects).map(([key, p]) => (
						<CarouselItem
							key={key}
							className='xl2:basis-1/3 basis-full pr-2 pl-2 lg:basis-1/2'
						>
							<motion.div
								variants={cardVariants}
								className='h-full'
							>
								<Card className='group card-gradient border-grey relative flex h-full flex-col overflow-hidden rounded-2xl bg-transparent p-5 transition-shadow duration-500 hover:shadow-lg'>
									<ImageCarousel images={p.images} />

									<CardHeader className='flex min-h-[120px] flex-col gap-4 px-0 max-lg:min-h-20'>
										<CardTitle className='text-3xl font-normal'>{p.title}</CardTitle>
										<CardDescription className='line-clamp-2 text-base'>
											{p.description}
										</CardDescription>
									</CardHeader>

									<CardFooter className='mt-auto px-0 pt-4'>
										<ul className="dark:text-accent flex flex-wrap items-center text-sm [&>li:not(:first-child)]:before:mx-2 [&>li:not(:first-child)]:before:opacity-60 [&>li:not(:first-child)]:before:content-['•']">
											{p.techs.map(t => (
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
							</motion.div>
						</CarouselItem>
					))}
				</CarouselContent>

				<CarouselPrevious className='top-1/2 -left-4 size-9 -translate-y-1/2 lg:size-10' />
				<CarouselNext className='top-1/2 -right-4 size-9 -translate-y-1/2 lg:size-10' />
			</Carousel>
		</motion.div>
	)
}
