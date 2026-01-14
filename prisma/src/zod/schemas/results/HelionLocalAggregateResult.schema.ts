import * as z from 'zod';
export const HelionLocalAggregateResultSchema = z.object({  _count: z.object({
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
  }).nullable().optional()});