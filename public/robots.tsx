import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/admin/', '/api/'],
            },
        ],
        sitemap: 'https://www.sinas-schmetterlinge.de/sitemap.xml',
    };
}
