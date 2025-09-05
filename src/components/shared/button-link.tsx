import { cn } from '@/lib/utils'

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode
	variant?: 'primary' | 'secondary'
}

export function ButtonLink({
	children,
	className,
	variant = 'primary',
	...props
}: ButtonLinkProps) {
	const baseStyles = 'border-grey flex w-fit rounded-2xl px-6 py-3.5 transition-colors duration-500'

	const variants = {
		primary:
			'dark:bg-accent button-shadow bg-[#4c51be] hover:bg-transparent hover:text-foreground text-accent dark:text-accent-foreground dark:hover:bg-muted dark:hover:text-foreground',
		secondary:
			'dark:bg-muted hover:bg-[#4c51be] button-shadow hover:text-accent dark:text-foreground dark:hover:bg-accent dark:hover:text-accent-foreground'
	}

	return (
		<a
			{...props}
			className={cn(baseStyles, variants[variant], className)}
		>
			{children}
		</a>
	)
}
