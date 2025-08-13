import { Header } from '@/components/sections/header/Header'
import { Main } from '@/components/sections/main/main'

export default function Home() {
	return (
		<>
			<Header />
			<Main />
			<footer className='bg-amber-950'>Footer</footer>
		</>
	)
}
