export interface Skill {
	name: string
	level?: 'basic' | 'mid' | 'pro'
	years?: number
}
export interface Project {
	id: string
	title: string
	description: string
	techs: Array<{ tech: { name: string } }>
	repo?: string
	demo?: string
	images: string[]
}
export interface Tag {
	label: string
	pos: string
	scale?: string
	dir?: 'left' | 'right' | 'top' | 'bottom'
}
export interface Job {
	year: number
	title: string
	period: string
	description: string
	details?: {
		projects?: Array<{
			name: string
			bullets: string[]
		}>
		stack?: string[]
		achievements?: string[]
	}
}
