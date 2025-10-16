import { NextResponse } from 'next/server';
import { getAnnouncements } from '@/lib/Canvas/server';

export const runtime = 'nodejs';        // ensure Node runtime
export const dynamic = 'force-dynamic'; // avoid static caching in dev

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const courseId = searchParams.get('courseId') ?? '64824';

    const announcements = await getAnnouncements(courseId);
    return NextResponse.json(announcements);
  } catch (error: any) {
    console.error('Error fetching announcements:', error?.message || error);
    return NextResponse.json(
      { error: 'Failed to fetch announcements' },
      { status: 500 }
    );
  }
}
