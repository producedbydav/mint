import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Mint',
  description:
    'An open source internet protocol enabling the creation and collection of digital artifacts on the Ethereum Virtual Machine.',

  lang: 'en-US',

  head: [
    ['link', { rel: 'icon', href: '/icon.svg' }],
    ['meta', { property: 'og:image', content: '/og.png' }],
  ],

  cleanUrls: true,

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: { src: '/icon.svg', width: 24, height: 24 },

    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Ecosystem', link: '/ecosystem/artists' },
      { text: 'Reference', link: '/reference/' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Intro',
          collapsed: false,
          items: [
            { text: 'About Mint', link: '/guide/' },
            { text: "What It Is & Isn't", link: '/guide/what-it-is' },
            { text: 'How It Works', link: '/guide/how-it-works' },
          ],
        },
        {
          text: 'Contracts',
          collapsed: false,
          items: [
            { text: 'Contracts Overview', link: '/guide/contracts/' },
            { text: 'Factory', link: '/guide/contracts/factory' },
            { text: 'Mint', link: '/guide/contracts/mint' },
            { text: 'Renderers', link: '/guide/contracts/renderers' },
          ],
        },
        {
          text: 'App',
          collapsed: false,
          items: [
            { text: 'Base Application', link: '/guide/app/' },
            { text: 'Extend Base App', link: '/guide/app/extend' },
            { text: 'App Development', link: '/guide/app/app-development' },
          ],
        },
        {
          text: 'Themes',
          collapsed: false,
          items: [
            { text: 'About Themes', link: '/guide/themes/' },
            { text: 'Using Themes', link: '/guide/themes/using-themes' },
            { text: 'Build Themes', link: '/guide/themes/build' },
            { text: 'The Zinc Theme', link: '/guide/themes/zinc' },
          ],
        },
        {
          text: 'Indexer',
          collapsed: false,
          items: [
            { text: 'Mint Indexer', link: '/guide/indexer/' },
            { text: 'Setup Guide', link: '/guide/indexer/setup' },
            { text: 'Using the API', link: '/guide/indexer/api-usage' },
          ],
        },
        {
          text: 'FAQ',
          link: '/guide/faq/',
        },
        {
          text: 'Terms and Conditions',
          link: '/terms-and-conditions',
        },
        {
          text: 'Ecosystem',
          link: '/ecosystem/artists',
        },
      ],

      '/ecosystem/': [
        {
          text: 'Ecosystem',
          items: [
            { text: 'Artist Showcase', link: '/ecosystem/artists' },
            { text: 'Theme Showcase', link: '/ecosystem/themes' },
            { text: 'Known Deployments', link: '/ecosystem/deployments' },
          ],
        },
      ],

      '/reference/': [
        {
          text: 'Base App',
          items: [
            { text: 'Components', link: '/reference/app/components' },
            { text: 'CSS Variables', link: '/reference/app/css' },
          ],
        },
        {
          text: 'Contracts',
          items: [
            {
              text: 'Create Mint Collection',
              link: '/reference/contracts/create-collections',
            },
            {
              text: 'Read Creator Collections',
              link: '/reference/contracts/read-creator-collections',
            },
            {
              text: 'Create Artifact',
              link: '/reference/contracts/create-artifacts',
            },
            {
              text: 'Read Artifact',
              link: '/reference/contracts/read-artifacts',
            },
            {
              text: 'Purchase Artifacts',
              link: '/reference/contracts/purchase-artifacts',
            },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/visualizevalue/mint' }],

    search: {
      provider: 'local',
    },

    footer: {
      message:
        'Released under the MIT License. <a href="./terms-and-conditions">Terms and Conditions</a> apply.',
    },
  },
})
