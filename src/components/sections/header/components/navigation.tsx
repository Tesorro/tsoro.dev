interface Props {}

const linkBase =
	'px-4 py-2 text-base transition-colors ' +
	// светлая тема: обычный foreground → hover #4c51bf
	'text-foreground hover:text-[#4c51bf] ' +
	// тёмная тема: foreground → hover primary
	'dark:text-foreground dark:hover:text-primary'

export function Navigation({}: Props) {
	return (
		<nav>
			<ul className='flex gap-2'>
				<li>
					<a
						href='#about'
						className={linkBase}
					>
						About
					</a>
				</li>
				<li>
					<a
						href='#portfolio'
						className={linkBase}
					>
						Portfolio
					</a>
				</li>
				<li>
					<a
						href='#career'
						className={linkBase}
					>
						Work Experience
					</a>
				</li>
				<li>
					<a
						href='#contacts'
						className={linkBase}
					>
						Contacts
					</a>
				</li>
			</ul>
		</nav>
	)
}
