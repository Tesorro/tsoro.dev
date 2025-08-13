import cn from 'clsx'

import type { Tag } from '@/lib/data/types'

interface IProps {
	elements: Tag[]
	className?: string
}

export function Tags({ elements, className }: IProps) {
	return (
		<div className={cn('relative', className)}>
			{elements.map(({ label, pos, scale }) => (
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
