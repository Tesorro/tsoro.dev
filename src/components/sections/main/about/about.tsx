import { IconLabel } from '@/components/shared/icon-label'

export function About() {
	return (
		<section className='max-w-9xl mx-auto flex w-full flex-col gap-6'>
			<IconLabel text='About Me' />
			<p className='text-[40px] font-normal'>
				I’m a software engineer driven by a passion for problem-solving and building high-quality
				web products. What started as an interest in the “why” behind technology became a mission to
				design efficient, impactful solutions.{' '}
				<span className='hover:text-accent text-gray-500 transition-colors duration-500'>
					I’ve worked on applications ranging from productivity tools to large-scale e-commerce
					platforms.
				</span>
			</p>
		</section>
	)
}
