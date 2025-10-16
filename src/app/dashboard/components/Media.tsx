'use client';

import { InstagramEmbed } from 'react-social-media-embed';

export default function Media() {
    return (
        <div className='bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8'>
            <InstagramEmbed url='https://www.instagram.com/skyline.promise' />
        </div>
    );
}