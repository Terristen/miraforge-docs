import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://docs.miraforge.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    starlight({
      title: 'Miraforge Studio',
      description:
        'Handbook for Miraforge Studio, a desktop authoring environment. Getting started, then everyday tasks.',
      favicon: '/favicon.jpg',
      lastUpdated: false,
      pagination: true,
      credits: false,
      expressiveCode: false,
      customCss: ['./src/styles/brand.css', './src/styles/starlight.css'],
      components: {
        SiteTitle: './src/components/SiteTitle.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
        ThemeProvider: './src/components/ThemeProvider.astro',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Welcome to Studio', link: '/' },
            { label: 'Install Studio', slug: 'getting-started/install' },
            { label: 'Create an archive', slug: 'getting-started/create-an-archive' },
            { label: 'Find your way around', slug: 'getting-started/find-your-way-around' },
            { label: 'Write, save, and come back', slug: 'getting-started/write-save-and-come-back' },
          ],
        },
        {
          label: 'Everyday Tasks',
          items: [
            { label: 'Create your first character', slug: 'everyday/create-your-first-character' },
            { label: 'Organize a novel', slug: 'everyday/organize-a-novel' },
            { label: 'Revise what you wrote', slug: 'everyday/revise-what-you-wrote' },
            { label: 'Rename and rearrange', slug: 'everyday/rename-and-rearrange' },
          ],
        },
      ],
    }),
  ],
});
