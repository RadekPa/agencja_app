import * as z from 'zod';
export const HelionLocalGroupByResultSchema = z.array(z.object({
  ISBNORG: z.string(),
  ISBNHELION: z.string(),
  TYTULORG: z.string(),
  TYTULHELION: z.string(),
  _count: z.object({
    ISBNORG: z.number(),
    ISBNHELION: z.number(),
    TYTULORG: z.number(),
    TYTULHELION: z.number()
  }).optional(),
  _min: z.object({
    ISBNORG: z.string().nullable(),
    ISBNHELION: z.string().nullable(),
    TYTULORG: z.string().nullable(),
    TYTULHELION: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    ISBNORG: z.string().nullable(),
    ISBNHELION: z.string().nullable(),
    TYTULORG: z.string().nullable(),
    TYTULHELION: z.string().nullable()
  }).nullable().optional()
}));