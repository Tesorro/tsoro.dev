interface IProps {
	title: string
	subtitle?: string
}
export function SectionHeading({ title, subtitle }: IProps) {
	return (
		<>
			<h2 className='text-center text-6xl font-normal'>{title}</h2>
			{subtitle && <p className='mt-6 max-w-[700px] text-center text-lg font-light'>{subtitle}</p>}
		</>
	)
}
