import cn from 'clsx'

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
		primary: 'bg-accent button-shadow text-accent-foreground hover:bg-muted hover:text-foreground',
		secondary: 'bg-muted text-foreground hover:bg-accent hover:text-accent-foreground'
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
