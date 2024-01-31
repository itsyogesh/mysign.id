import { SiteConfig } from '@/types'

import { env } from '@/config/environment'

const site_url = env.url

export const siteConfig: SiteConfig = {
  name: 'Mysign',
  description:
    'Discover hassle-free domain management with The Domain Collective: - a single, intuitive platform to manage, track, and secure your domain names from various registrars with ease.',
  url: site_url,
  keywords: ['domain collective', 'domain management'],
  ogImage: `${site_url}/og.jpg`,
  links: {
    twitter: 'https://twitter.com/collective.domains',
    github: 'https://github.com/droidsize',
  },
  mailSupport: 'support@collective.domains',
}
