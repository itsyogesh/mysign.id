import { SiteConfig } from '@/types'

import { env } from '@/config/environment'

const site_url = env.url

export const siteConfig: SiteConfig = {
  name: 'Mysign.id',
  description:
    'A new era of digital signatures - secure, verified, and uniquely yours. Sign anywhere with your "real" signature, powered by ML, NFT and Aleph Zero',
  url: site_url,
  keywords: ['digital signatures', 'NFT signatures'],
  ogImage: `${site_url}/og.png`,
  links: {
    twitter: 'https://twitter.com/itsyogesh18',
    github: 'https://github.com/itsyogesh',
  },
  mailSupport: 'support@mysign.id',
}
