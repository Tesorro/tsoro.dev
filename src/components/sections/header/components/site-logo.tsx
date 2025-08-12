import { Orbit } from 'lucide-react'

interface Props {
	size?: number
	className?: string
}

export function SiteLogo({ size = 38, className = '' }: Props) {
	return (
		<div className='flex items-center gap-4'>
			<Orbit
				size={size}
				className={`text-primary ${className}`}
			/>
			<h1 className='text-primary text-3xl font-semibold'>tsoro.dev</h1>
		</div>
	)
}
