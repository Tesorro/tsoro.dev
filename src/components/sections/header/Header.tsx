import { ModeToggle } from '@/components/mode-toggle'

import { Navigation } from './components/navigation'
import { SiteLogo } from './components/site-logo'

interface Props {}

export function Header({}: Props) {
	return (
		<header className='max-w-9xl mx-auto w-full px-20 pt-8 pb-19'>
			<div className='flex items-center justify-between'>
				<SiteLogo />
				<Navigation />
				<div className='flex items-center gap-4'>
					<ModeToggle />
				</div>
			</div>
		</header>
	)
}
