import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const coHocLuongTu = defineCollection({
	loader: glob({ base: './src/content/co-hoc-luong-tu', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

const dienToanLuongTu = defineCollection({
	loader: glob({ base: './src/content/dien-toan-luong-tu', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { 
    'co-hoc-luong-tu': coHocLuongTu,
    'dien-toan-luong-tu': dienToanLuongTu
};
