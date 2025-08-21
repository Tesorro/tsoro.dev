interface IProps {
	title: string
	subtitle?: string
}
export function SectionHeading({ title, subtitle }: IProps) {
	return (
		<>
			<h2 className='max-xl2:text-5xl text-center text-6xl font-normal max-xl:text-[40px] max-md:text-4xl'>
				{title}
			</h2>
			{subtitle && <p className='mt-6 max-w-[700px] text-center text-lg font-light'>{subtitle}</p>}
		</>
	)
}
