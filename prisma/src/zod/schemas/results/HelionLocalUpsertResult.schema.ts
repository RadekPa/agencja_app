import * as z from 'zod';
export const HelionLocalUpsertResultSchema = z.object({
  ISBNORG: z.string(),
  ISBNHELION: z.string(),
  TYTULORG: z.string().optional(),
  TYTULHELION: z.string().optional()
});