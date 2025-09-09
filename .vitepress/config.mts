import { defineConfig } from 'vitepress'
import footnote from "markdown-it-footnote"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "YTMDesktop",
  description: "An unofficial cross platform desktop app for YouTube Music",
  appearance: "force-dark",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Developer', link: '/developer' }
    ],

    sidebar: [
      {
        text: 'Companion Server',
        items: [
          { text: 'Getting Started', link: '/developer/companion-server/getting-started' },
          { text: "API Versions", link: "/developer/companion-server/versions" },
          { 
            text: 'API Reference',
            items: [
              { text: 'GET /metadata', link: '/developer/companion-server/reference/metadata' },
              {
                text: "v1",
                items: [
                  { text: 'POST /auth/requestcode', link: '/developer/companion-server/reference/v1/auth-requestcode' },
                  { text: 'POST /auth/request', link: '/developer/companion-server/reference/v1/auth-request' },
                  { text: 'GET /state', link: '/developer/companion-server/reference/v1/state' },
                  { text: 'GET /playlists', link: '/developer/companion-server/reference/v1/playlists' },
                  { text: 'POST /command', link: '/developer/companion-server/reference/v1/command' },
                ]
              }
            ]
          },
          { 
            text: "Socket.IO Reference",
            items: [
              {
                text: "v1",
                items: [
                  { text: "Connecting", link: '/developer/companion-server/socketio-reference/v1/connecting' },
                  {
                    text: "Events",
                    items: [
                      { text: "state-update", link: '/developer/companion-server/socketio-reference/v1/events/state-update' },
                      { text: "playlist-created", link: '/developer/companion-server/socketio-reference/v1/events/playlist-created' },
                      { text: "playlist-deleted", link: '/developer/companion-server/socketio-reference/v1/events/playlist-deleted' }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ytmdesktop/ytmdesktop' }
    ],

    outline: [2,6]
  },
  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  }
})
