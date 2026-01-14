import * as z from 'zod';
export const HelionLocalDeleteResultSchema = z.nullable(z.object({
  ISBNORG: z.string(),
  ISBNHELION: z.string(),
  TYTULORG: z.string().optional(),
  TYTULHELION: z.string().optional()
}));