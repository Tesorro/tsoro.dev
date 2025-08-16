import { Hero } from './hero'
import { Portfolio } from './portfolio'
import { Skills } from './skills'
import { TechStack } from './tech-stack'

export function Main() {
	return (
		<main className='flex flex-col gap-20 px-40'>
			<Hero />
			<TechStack />
			<Skills />
			<Portfolio />
		</main>
	)
}
