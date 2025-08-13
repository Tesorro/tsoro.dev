import { About } from './about/about'
import { Hero } from './hero/hero'

export function Main() {
	return (
		<main className='flex flex-col gap-10'>
			<Hero />
			<About />
		</main>
	)
}
