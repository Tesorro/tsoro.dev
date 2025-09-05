import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  const langParam = req.nextUrl.searchParams.get('lang');
  const lang: 'ru' | 'en' = langParam === 'ru' ? 'ru' : 'en';

  const fileDir = path.join(process.cwd(), 'public', 'resume');
  const fileName = lang === 'ru' ? 'zaur-resume-ru.pdf' : 'zaur-resume-en.pdf';
  const absPath = path.join(fileDir, fileName);

  const downloadName =
    lang === 'ru' ? 'Заур_Цороев_Резюме_RU.pdf' : 'Zaur_Tsoroev_Resume_EN.pdf';

  const file = await fs.readFile(absPath);
  const encodedName = encodeURIComponent(downloadName).replace(/'/g, '%27');

  return new NextResponse(file, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition':
        `attachment; filename="resume.pdf"; filename*=UTF-8''${encodedName}`,
      'Cache-Control': 'public, max-age=31536000, immutable',
      'X-Content-Type-Options': 'nosniff',
      'Content-Length': String(file.length),
    },
  });
}
