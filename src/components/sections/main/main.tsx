import { Hero } from './hero'
import { TechStack } from './tech-stack'

export function Main() {
	return (
		<main className='flex flex-col gap-10'>
			<Hero />
			<TechStack />
		</main>
	)
}
