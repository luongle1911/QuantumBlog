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

const hocMayLuongTu = defineCollection({
	loader: glob({ base: './src/content/hoc-may-luong-tu', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

const enCoHocLuongTu = defineCollection({
	loader: glob({ base: './src/content/en/co-hoc-luong-tu', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

const enDienToanLuongTu = defineCollection({
	loader: glob({ base: './src/content/en/dien-toan-luong-tu', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

const enHocMayLuongTu = defineCollection({
	loader: glob({ base: './src/content/en/hoc-may-luong-tu', pattern: '**/*.{md,mdx}' }),
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
    'dien-toan-luong-tu': dienToanLuongTu,
    'hoc-may-luong-tu': hocMayLuongTu,
    'en-co-hoc-luong-tu': enCoHocLuongTu,
    'en-dien-toan-luong-tu': enDienToanLuongTu,
    'en-hoc-may-luong-tu': enHocMayLuongTu
};
