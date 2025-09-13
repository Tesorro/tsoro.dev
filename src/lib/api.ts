const API = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000'

export async function fetchProjects() {
	const r = await fetch(`${API}/api/v1/projects`, { next: { revalidate: 60, tags: ['projects'] } })
	if (!r.ok) throw new Error('Failed to load projects')
	const { data } = await r.json()
	return data as any[]
}

export type IconDto = { src: string; alt: string }

export async function fetchTechIcons(): Promise<IconDto[]> {
	const base = process.env.NEXT_PUBLIC_API_URL
	const res = await fetch(`${base}/api/v1/techs/carousel`, {
		next: { revalidate: 60 }
	})
	if (!res.ok) throw new Error('Failed to load icons')
	const json = await res.json()
	return json.data as IconDto[]
}
