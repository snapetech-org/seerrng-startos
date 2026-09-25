import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'seerrng',
  title: 'SeerrNG',
  license: 'MIT',
  packageRepo: 'https://github.com/snapetech/seerrng-startos',
  upstreamRepo: 'https://github.com/snapetech/seerrng',
  marketingUrl: 'https://github.com/snapetech/seerrng',
  donationUrl: 'https://ko-fi.com/snapetech',
  description: { short, long },
  volumes: ['main'],
  images: {
    'seerrng': {
      source: { dockerTag: 'docker.io/snapetech/seerrng:v3.27.1' },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {},
})
