import cn from 'clsx'
import { Zap } from 'lucide-react'

interface IconLabelProps {
	text: string
	className?: string
}

export function IconLabel({ text, className }: IconLabelProps) {
	return (
		<div
			className={cn(
				'border-grey flex w-fit items-center justify-center gap-2 rounded-lg p-2.5',
				className
			)}
		>
			<span className='bg-muted rounded p-1.5 dark:bg-[#7a7d9b]'>
				<Zap size={16} />
			</span>
			<span>{text}</span>
		</div>
	)
}
