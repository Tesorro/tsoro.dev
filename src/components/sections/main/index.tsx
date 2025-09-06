import { Contacts } from './contacts'
import { Hero } from './hero'
import { Portfolio } from './portfolio'
import { ProfessionalJourney } from './professional-journey'
import { TechStack } from './tech-stack'
import { fetchProjects, fetchTechIcons } from '@/lib/api'

export default async function Main() {
	const projects = await fetchProjects()
	const techsIcons = await fetchTechIcons()
	return (
		<main className='max-w-9xl mx-auto flex flex-col gap-10 px-40 max-lg:px-7 xl:gap-20'>
			<Hero />
			<TechStack techsIcons={techsIcons} />
			<Portfolio projects={projects} />
			<ProfessionalJourney />
			<Contacts />
		</main>
	)
}
