'use server';

import { createClient } from '@/lib/supabase/server';
import type { Provider } from '@supabase/supabase-js';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const FALLBACK_SITE_URL = 'http://localhost:3000';

const resolveRedirectHost = async () => {
    const headerStore = await headers();
    return headerStore.get('origin') ?? process.env.SITE_URL ?? FALLBACK_SITE_URL;
};

const signInWith = (provider: Provider) => async () => {
    const supabase = await createClient();

    const origin = await resolveRedirectHost();
    const authCallbackUrl = new URL('/auth/callback', origin).toString();

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider as 'google',
        options: {
            redirectTo: authCallbackUrl,
        },
    });

    if (error || !data?.url) {
        redirect('/login?error=oauth_error');
    }

    redirect(data.url);
};

const signinWithGoogle = signInWith('google');

export { signinWithGoogle };
