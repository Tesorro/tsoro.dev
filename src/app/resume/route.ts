import { promises as fs } from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import path from 'path'

export async function GET(req: NextRequest) {
	const langParam = req.nextUrl.searchParams.get('lang')
	const lang: 'ru' | 'en' = langParam === 'ru' ? 'ru' : 'en'

	const fileDir = path.join(process.cwd(), 'public', 'resume')
	const fileName = lang === 'ru' ? 'tsoroev-zaur-resume-ru.pdf' : 'tsoroev-zaur-resume-en.pdf'
	const absPath = path.join(fileDir, fileName)

	const downloadName = lang === 'ru' ? 'Заур_Цороев_Резюме.pdf' : 'Zaur_Tsoroev_Resume.pdf'

	const file = await fs.readFile(absPath)
	const encodedName = encodeURIComponent(downloadName).replace(/'/g, '%27')

	return new NextResponse(new Uint8Array(file), {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': `attachment; filename="resume.pdf"; filename*=UTF-8''${encodedName}`,
			'Cache-Control': 'public, max-age=31536000, immutable',
			'X-Content-Type-Options': 'nosniff',
			'Content-Length': String(file.length)
		}
	})
}
