import { Contacts } from './contacts'
import { Hero } from './hero'
import { Portfolio } from './portfolio'
import { ProfessionalJourney } from './professional-journey'
import { Skills } from './skills'
import { TechStack } from './tech-stack'

export function Main() {
	return (
		<main className='flex flex-col gap-20 px-40'>
			<Hero />
			<TechStack />
			<Portfolio />
			<ProfessionalJourney />
			<Contacts />
		</main>
	)
}
