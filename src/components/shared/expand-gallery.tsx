'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Card, CardTitle } from '@/ui/card'

type Item = { src: string; alt: string; label?: string }

export function ExpandGallery({ items }: { items: Item[] }) {
	const [active, setActive] = useState(0)

	return (
		<div
			className='flex gap-4 rounded-3xl bg-[#0f1419]/40'
			onMouseLeave={() => setActive(0)}
			role='list'
			aria-label='Technology gallery'
		>
			{items.map((it, i) => {
				const isActive = i === active
				const widthPx = isActive ? 936 : 312

				return (
					<Card
						key={it.src}
						role='listitem'
						onMouseEnter={() => setActive(i)}
						onFocus={() => setActive(i)}
						className='group relative overflow-hidden rounded-2xl border-none transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus:ring-2 focus:ring-indigo-500/60 focus:outline-none'
						style={{ width: widthPx, height: 400 }}
					>
						<Image
							src={it.src}
							alt={it.alt}
							fill
							className='object-cover'
							priority={i === 0}
							sizes='(min-width: 1536px) 936px, (min-width: 1024px) 33vw, 100vw'
						/>

						<div
							className={`pointer-events-none absolute inset-0 transition-opacity duration-1000 ${isActive ? 'opacity-40' : 'opacity-0'} bg-black`}
						/>

						{it.label && (
							<CardTitle
								className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-all duration-800 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} `}
							>
								<span className='rounded-lg text-[48px] font-normal text-white'>{it.label}</span>
							</CardTitle>
						)}
					</Card>
				)
			})}
		</div>
	)
}
