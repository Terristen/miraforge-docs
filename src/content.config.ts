import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  // Present so Starlight can read UI strings. src/content/i18n/en.json is empty,
  // which leaves the built-in English labels in place.
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
