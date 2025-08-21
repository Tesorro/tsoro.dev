import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/ui/card'

interface IProps {
	year: number
	title: string
	description: string
}

export function CareerCard({ description, title, year }: IProps) {
	return (
		<Card className='group border-grey hover:border-border rounded-xl border !bg-transparent py-8 shadow-md transition-all duration-500 ease-in-out hover:shadow-sm dark:shadow-sm'>
			<div className='polka relative rounded-lg p-8'>
				<span className='year-number text-8xl transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-20 md:text-9xl'>
					{year}
				</span>

				<CardHeader className='relative z-20 mb-4 p-0'>
					<CardTitle className='max-xl2:text-[27px] text-3xl font-normal max-xl:text-[24px]'>
						{title}
					</CardTitle>
				</CardHeader>

				<CardContent className='relative z-20 p-0'>
					<p className='text-lg'>{description}</p>
				</CardContent>

				<CardFooter className='relative z-20 mt-6 p-0'>
					<a
						href='#'
						className='text-accent hover:underline'
					>
						Learn More
					</a>
				</CardFooter>
			</div>
		</Card>
	)
}
