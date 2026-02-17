const TOKEN = process.env.CANVAS_TOKEN;

export interface Announcement {
    title: string;
    url: string;
    posted_at: string;
    user_can_see_posts: boolean;
    author_image_url: string | null;
}

interface CanvasAnnouncement {
    title: string;
    html_url: string;
    posted_at: string;
    user_can_see_posts: boolean;
    author?: {
        avatar_image_url?: string | null;
    };
}

export async function getAnnouncements(courseId: string | number): Promise<Announcement[]> {
    const res = await fetch(`https://smccd.instructure.com/api/v1/announcements?context_codes[]=course_${courseId}&per_page=50`, {
        headers: {
            "Authorization": `Bearer ${TOKEN}`
        }
    });

    const data = await res.json() as CanvasAnnouncement[];
    return data.map((announcement) => ({
        title: announcement.title,
        url: announcement.html_url,
        posted_at: announcement.posted_at,
        user_can_see_posts: announcement.user_can_see_posts,
        author_image_url: announcement.author?.avatar_image_url ?? null
    }));
}
