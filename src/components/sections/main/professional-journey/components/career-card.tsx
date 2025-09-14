'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/ui/card'

type ProjectBlock = { name: string; bullets?: string[] }

interface IProps {
	year: number
	title: string
	description: string
	period?: string
	projects?: ProjectBlock[]
	stack?: string[]
	achievements?: string[]
}

export function CareerCard({
	year,
	title,
	description,
	period,
	projects,
	stack,
	achievements
}: IProps) {
	const [open, setOpen] = useState(false)
	const prefersReduced = useReducedMotion()

	const hasDetails =
		!!period ||
		(projects && projects.length) ||
		(stack && stack.length) ||
		(achievements && achievements.length)

	return (
		<Card className='group border-grey hover:border-border relative overflow-x-clip rounded-xl border !bg-transparent py-8 shadow-md transition-all duration-500 ease-in-out hover:shadow-sm dark:shadow-sm'>
			<div className='polka relative overflow-x-clip rounded-lg p-8'>
				<div className='pointer-events-none absolute inset-0 overflow-x-clip'>
					<span className='year-number block origin-right text-8xl leading-none transition-all duration-700 select-none group-hover:scale-[1.03] group-hover:opacity-20 md:text-9xl'>
						{year}
					</span>
				</div>
				<CardHeader className='relative z-20 mb-4 p-0'>
					<CardTitle className='max-xl2:text-[27px] text-3xl font-normal max-xl:text-[24px]'>
						{title}
					</CardTitle>
					{period && <p className='text-muted-foreground mt-1 text-sm'>{period}</p>}
				</CardHeader>

				<CardContent className='relative z-20 p-0'>
					<p className='text-lg'>{description}</p>
				</CardContent>

				{hasDetails && (
					<CardFooter className='relative z-20 mt-6 p-0'>
						<button
							type='button'
							onClick={() => setOpen(v => !v)}
							aria-expanded={open}
							className='dark:text-accent hover:border-accent/30 focus:ring-ring inline-flex cursor-pointer items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm text-[var(--color-ring)] transition hover:underline focus:ring-2 focus:outline-none'
						>
							<span>{open ? 'Hide details' : 'View details'}</span>
							<ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
						</button>
					</CardFooter>
				)}

				<AnimatePresence initial={false}>
					{open && hasDetails && (
						<motion.div
							key='details'
							initial={{ height: 0, opacity: prefersReduced ? 1 : 0 }}
							animate={{ height: 'auto', opacity: 1 }}
							exit={{ height: 0, opacity: prefersReduced ? 1 : 0 }}
							transition={prefersReduced ? { duration: 0 } : { duration: 0.35, ease: 'easeOut' }}
							className='relative z-20 overflow-hidden'
						>
							<div className='mt-4 space-y-5'>
								{!!projects?.length && (
									<section>
										<h4 className='text-accent-foreground mb-2 text-sm font-semibold tracking-wide'>
											Projects
										</h4>
										<ul className='space-y-2'>
											{projects.map(p => (
												<li key={p.name}>
													<div className='font-medium'>{p.name}</div>
													{!!p.bullets?.length && (
														<ul className='text-muted-foreground ml-4 list-disc text-sm'>
															{p.bullets.map((b, i) => (
																<li key={i}>{b}</li>
															))}
														</ul>
													)}
												</li>
											))}
										</ul>
									</section>
								)}

								{!!stack?.length && (
									<section>
										<h4 className='text-accent-foreground mb-2 text-sm font-semibold tracking-wide'>
											Tech Stack
										</h4>
										<div className='flex flex-wrap gap-2'>
											{stack.map(s => (
												<span
													key={s}
													className='border-grey rounded-md px-2 py-1 text-xs'
												>
													{s}
												</span>
											))}
										</div>
									</section>
								)}

								{!!achievements?.length && (
									<section>
										<h4 className='text-accent-foreground mb-2 text-sm font-semibold tracking-wide'>
											Achievements
										</h4>
										<ul className='text-muted-foreground ml-4 list-disc text-sm'>
											{achievements.map((a, i) => (
												<li key={i}>{a}</li>
											))}
										</ul>
									</section>
								)}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</Card>
	)
}
