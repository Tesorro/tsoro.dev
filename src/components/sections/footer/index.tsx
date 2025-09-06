export function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className='text-muted-foreground py-6 text-center text-sm'>
			© Zaurbek Tsoroev, {year}
		</footer>
	)
}
