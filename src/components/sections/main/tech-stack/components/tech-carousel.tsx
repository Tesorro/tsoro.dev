'use client'

import Autoplay from 'embla-carousel-autoplay'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { useMemo, useRef } from 'react'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

type Icon = { src: string; alt: string }

const icons: Icon[] = [
	{ src: '/images/techs/icons/docker.svg', alt: 'docker' },
	{ src: '/images/techs/icons/formik.svg', alt: 'formik' },
	{ src: '/images/techs/icons/html5.svg', alt: 'html5' },
	{ src: '/images/techs/icons/js.svg', alt: 'js' },
	{ src: '/images/techs/icons/nextjs.svg', alt: 'nextjs' },
	{ src: '/images/techs/icons/react-router.svg', alt: 'router' },
	{ src: '/images/techs/icons/react.svg', alt: 'react' },
	{ src: '/images/techs/icons/redux-toolkit.svg', alt: 'toolkit' },
	{ src: '/images/techs/icons/tailwindcss.svg', alt: 'tailwindcss' },
	{ src: '/images/techs/icons/typescript.svg', alt: 'typescript' },
	{ src: '/images/techs/icons/webpack.svg', alt: 'webpack' },
	{ src: '/images/techs/icons/yup.svg', alt: 'yup' }
]

const longIcons = [...icons, ...icons]

export function TechCarousel() {
	const prefersReduced = useReducedMotion()
	const fromBottom = {
		hidden: { y: prefersReduced ? 0 : 40, opacity: prefersReduced ? 1 : 0 },
		show: { y: 0, opacity: 1, transition: { duration: prefersReduced ? 0 : 0.6, ease: 'easeOut' } }
	}
	const autoplay = useRef(Autoplay({ delay: 2500, stopOnInteraction: false }))
	const plugins = useMemo(() => (prefersReduced ? [] : [autoplay.current]), [prefersReduced])

	return (
		<motion.div
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.2 }}
			variants={fromBottom}
			className='relative mt-8 rounded-2xl bg-gray-300 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] xl:mt-12 dark:bg-gray-700'
			aria-label='My skills'
		>
			<Carousel
				opts={{ align: 'start', loop: true, slidesToScroll: 1 }}
				plugins={plugins}
				onMouseEnter={() => autoplay.current?.stop?.()}
				onMouseLeave={() => {
					autoplay.current?.reset?.()
					autoplay.current?.play?.()
				}}
				className='w-full px-2 py-1 xl:py-3'
			>
				<CarouselContent className='-ml-2'>
					{longIcons.map((icon, i) => (
						<CarouselItem
							key={`${icon.src}-${i}`}
							className='basis-1/3 pl-2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/8'
						>
							<div
								className='flex h-20 items-center justify-center rounded-xl px-3 backdrop-blur-[2px] transition-transform duration-300'
								title={icon.alt}
								aria-label={icon.alt}
							>
								<Image
									src={icon.src}
									alt={icon.alt}
									width={64}
									height={64}
									className='h-12 w-auto object-contain xl:h-18'
									loading='lazy'
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</motion.div>
	)
}
