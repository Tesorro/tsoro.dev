import { Contacts } from './contacts'
import { Hero } from './hero'
import { Portfolio } from './portfolio'
import { ProfessionalJourney } from './professional-journey'
import { TechStack } from './tech-stack'

export function Main() {
	return (
		<main className='max-w-9xl mx-auto flex flex-col gap-10 px-40 max-lg:px-7 xl:gap-20'>
			<Hero />
			<TechStack />
			<Portfolio />
			<ProfessionalJourney />
			<Contacts />
		</main>
	)
}
