'use client'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { cn } from '@/lib/utils'

const srId = 'resume-a11y-help'

function trackResumeDownload(lang: 'en' | 'ru') {
	;(window as any)?.gtag?.('event', 'resume_download', { lang, value: 1 })
	;(window as any)?.plausible?.('Resume Download', { props: { lang } })
}

export default function ResumeButton() {
	const baseStyles = 'border-grey flex w-fit rounded-2xl px-6 py-4 transition-colors duration-500'

	const variants = {
		primary:
			'dark:bg-accent button-shadow bg-[#4c51be] hover:bg-transparent hover:text-foreground text-accent dark:text-accent-foreground dark:hover:bg-muted dark:hover:text-foreground',
		secondary:
			'dark:bg-muted bg-transparent hover:bg-[#4c51be] text-primary button-shadow hover:text-accent dark:text-foreground dark:hover:bg-accent dark:hover:text-accent-foreground'
	}
	return (
		<div className='flex items-center gap-3'>
			<DropdownMenu modal={false}>
				<DropdownMenuTrigger asChild>
					<Button
						size={'none'}
						aria-describedby={srId}
						className={cn(baseStyles, variants['secondary'])}
					>
						Download Resume
					</Button>
				</DropdownMenuTrigger>

				<DropdownMenuContent
					align='start'
					className='bg-background'
				>
					<DropdownMenuItem asChild>
						<a
							href='/api/resume?lang=en'
							rel='nofollow'
							onClick={() => trackResumeDownload('en')}
						>
							English (PDF)
						</a>
					</DropdownMenuItem>

					<DropdownMenuItem asChild>
						<a
							href='/api/resume?lang=ru'
							rel='nofollow'
							onClick={() => trackResumeDownload('ru')}
						>
							Русский (PDF)
						</a>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>

			<span
				id={srId}
				className='sr-only'
			>
				Opens a menu to choose resume language. Two options: English or Russian.
			</span>
		</div>
	)
}
