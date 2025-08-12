import { Zap } from 'lucide-react'

import { ButtonLink } from '@/components/shared/button-link'
import { IconLabel } from '@/components/shared/icon-label'

import { TechTags } from './components/tech-tags'

interface Props {}

export function Hero({}: Props) {
	return (
		<div className='max-w-9xl mx-auto flex w-full flex-col gap-6'>
			<IconLabel
				text='Build Better Software, Seamlessly Together'
				className='mx-auto'
			/>
			<h2 className='mx-auto w-[74%] max-w-full text-center text-[5rem] leading-none font-medium'>
				Hi, I’m Zaur — a Full-Stack Engineer who builds thoughtful, scalable, and impactful
				solutions for the web.
			</h2>
			<TechTags />
			<p className='mx-auto w-fit rounded-md bg-[#FFFFFF1A] px-4 py-1 text-lg text-emerald-400'>
				const me = “Full-stack Engineer | JavaScript Enthusiast | React(Next.js) & Node.js Dev”
			</p>
			<div className='flex justify-center gap-4'>
				<ButtonLink
					variant='secondary'
					href='#'
					download
				>
					Download Resume
				</ButtonLink>
				<ButtonLink href='#projects'>View My Work</ButtonLink>
			</div>
		</div>
	)
}
