'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

import { SectionHeading } from '@/components/shared/section-heading'

const socials = [
	{
		name: 'Gmail',
		href: 'mailto:ts.zaur@gmail.com',
		icon: '/images/social/gmail.svg'
	},
	{
		name: 'Telegram',
		href: 'https://t.me/Zaur_Tsoro',
		icon: '/images/social/telegram.svg'
	},
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/zaurbek-tsoroev/',
		icon: '/images/social/linkedin.svg'
	}
]

export function Contacts() {
	const prefersReduced = useReducedMotion()

	const fromBottom = {
		hidden: { y: prefersReduced ? 0 : 40, opacity: prefersReduced ? 1 : 0 },
		show: { y: 0, opacity: 1, transition: { duration: prefersReduced ? 0 : 0.6, ease: 'easeOut' } }
	}

	const item = {
		hidden: { y: prefersReduced ? 0 : 20, opacity: prefersReduced ? 1 : 0 },
		show: { y: 0, opacity: 1, transition: { duration: prefersReduced ? 0 : 0.4, ease: 'easeOut' } }
	}

	return (
		<section
			className="border-grey max-w-9xl mx-auto flex w-full flex-col gap-6 rounded-3xl bg-[url('/images/backgrounds/cta.png')] bg-center bg-top bg-no-repeat p-6 xl:p-18"
			id='contacts'
		>
			<motion.div
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.2 }}
				variants={fromBottom}
				className='mb-5 flex flex-col items-center'
			>
				<SectionHeading
					title="Let's build something great together."
					subtitle='Whether you’re looking to collaborate, hire, or just say hello — feel free to reach out.'
				/>
			</motion.div>

			{/* Иконки */}
			<motion.ul
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.2 }}
				variants={{
					hidden: {},
					show: { transition: { staggerChildren: prefersReduced ? 0 : 0.08 } }
				}}
				className='mx-auto mb-6 flex items-center gap-5'
				aria-label='Contact links'
			>
				{socials.map(s => (
					<motion.li
						key={s.name}
						variants={item}
					>
						<a
							href={s.href}
							target={s.href.startsWith('http') ? '_blank' : undefined}
							rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
							className='group border-grey inline-flex h-14 w-14 items-center justify-center rounded-full bg-transparent transition-shadow transition-transform duration-300 hover:scale-[1.06] hover:shadow-[0_4px_14px_0_rgba(76,81,191,0.65)] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:bg-transparent dark:focus-visible:ring-indigo-400'
							aria-label={s.name}
							title={s.name}
						>
							<Image
								src={s.icon}
								alt={s.name}
								width={24}
								height={24}
								className='h-7 w-7 object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100'
							/>
						</a>
					</motion.li>
				))}
			</motion.ul>
		</section>
	)
}
