import type { Config } from './types';

export default {
  id: '/',
  name: 'Terabox Fast',
  shortName: 'TeraboxFast',
  description: 'Watch Terabox videos online, download with ease, and explore smart AI tools — all in one place.',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Shortcut 1',
      shortName: 'Shortcut 1',
      description: 'Shortcut 1 description goes here...',
      url: '/search/label/shortcut-1?utm_source=homescreen',
    },
    {
      name: 'Shortcut 2',
      shortName: 'Shortcut 2',
      description: 'Shortcut 2 description goes here...',
      url: '/search/label/shortcut-2?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: true,
    oneSignalConfig: {
      appId: '81bb0fa0-3a5e-4d1f-9a89-f7c8ffc16632',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://www.teraboxfast.com',
} satisfies Config;
