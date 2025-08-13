import { ButtonLink } from '@/components/shared/button-link'
import { IconLabel } from '@/components/shared/icon-label'

import { Tags } from './components/tags'

const techs = [
	{
		label: 'Frontend',
		pos: 'top-[10%] left-[8%] md:top-[10%] md:left-[10%]',
		scale: 'scale-115 z-20'
	},
	{
		label: 'Backend',
		pos: 'top-[20%] left-[70%] md:top-[15%] md:left-[65%]',
		scale: 'scale-100 opacity-90 z-10'
	},
	{
		label: 'Perfomance',
		pos: 'top-[35%] left-[25%] md:top-[35%] md:left-[40%]',
		scale: 'scale-110 z-30'
	},
	{
		label: 'UX/UI',
		pos: 'top-[55%] left-[15%] md:top-[70%] md:left-[20%]',
		scale: 'scale-95 opacity-80 z-10'
	},
	{
		label: 'Testing',
		pos: 'top-[70%] left-[60%] md:top-[90%] md:left-[55%]',
		scale: 'scale-105 z-20'
	},
	{
		label: 'CI/CD',
		pos: 'top-[35%] left-[85%] md:top-[60%] md:left-[80%]',
		scale: 'scale-90 opacity-85 z-10'
	}
]

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
			<Tags
				elements={techs}
				className='mx-auto h-60 w-[57%]'
			/>
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
