const techTags = [
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

export function TechTags() {
	return (
		<div className='relative mx-auto h-60 w-[57%]'>
			{techTags.map(({ label, pos, scale }) => (
				<span
					key={label}
					className={`absolute ${pos} ${scale} border-grey bg-muted -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-lg px-4 py-1.5 text-sm transition-all duration-300 hover:shadow-[0_4px_14px_0_rgba(76,81,191,0.65)]`}
				>
					{label}
				</span>
			))}
		</div>
	)
}
