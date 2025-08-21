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
		</div>
	)
}
