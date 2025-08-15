'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'

interface IProps {
	images: string[]
}

export function ImageCarousel({ images }: IProps) {
	const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null)
	const [currentIndex, setCurrentIndex] = useState(0)
	const [totalItems, setTotalItems] = useState(0)

	useEffect(() => {
		if (!carouselApi) return

		const updateCarouselState = () => {
			setCurrentIndex(carouselApi.selectedScrollSnap())
			setTotalItems(carouselApi.scrollSnapList().length)
		}

		updateCarouselState()

		carouselApi.on('select', updateCarouselState)

		return () => {
			carouselApi.off('select', updateCarouselState) // Clean up on unmount
		}
	}, [carouselApi])

	const scrollToIndex = (index: number) => {
		carouselApi?.scrollTo(index)
	}

	return (
		<div className='relative h-80'>
			<Carousel
				setApi={setCarouselApi}
				opts={{ loop: true }}
				className='z-10 h-80 w-full'
			>
				<CarouselContent>
					{images.map((src, index) => (
						<CarouselItem key={index}>
							<Card className='border-none bg-transparent'>
								<CardContent className='flex h-80 items-center justify-center overflow-hidden rounded-lg px-0'>
									<Image
										alt={''} // TODO: Добавить alt
										src={src}
										width={480}
										height={320}
										className='h-full w-auto rounded-lg object-cover transition-transform duration-500 will-change-transform group-hover:scale-[1.1]'
									/>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>

			<div className='pointer-events-none absolute inset-0 z-20 flex items-center justify-between px-1'>
				<Button
					onClick={() => scrollToIndex(currentIndex - 1)}
					className='pointer-events-auto h-10 w-10 cursor-pointer rounded-full bg-transparent p-0 shadow-none hover:bg-transparent'
				>
					<ChevronLeft
						className='size-10'
						strokeWidth={1.5}
					/>
				</Button>
				<Button
					onClick={() => scrollToIndex(currentIndex + 1)}
					className='pointer-events-auto h-10 w-10 cursor-pointer rounded-full bg-transparent p-0 shadow-none hover:bg-transparent'
				>
					<ChevronRight
						className='size-10'
						strokeWidth={1.5}
					/>
				</Button>
			</div>

			<div className='absolute right-0 bottom-3 left-0 z-20 flex justify-center'>
				<div className='flex space-x-2 rounded-lg border-transparent bg-white/10 p-2.5 backdrop-blur-sm'>
					{Array.from({ length: totalItems }).map((_, index) => (
						<button
							key={index}
							onClick={() => scrollToIndex(index)}
							className={`h-1.5 w-1.5 cursor-pointer rounded-full ${
								currentIndex === index ? 'bg-accent' : 'bg-gray-300'
							}`}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
