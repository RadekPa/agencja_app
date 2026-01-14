import * as z from 'zod';
// prettier-ignore
export const HelionLocalInputSchema = z.object({
    ISBNORG: z.string(),
    ISBNHELION: z.string(),
    TYTULORG: z.string().optional().nullable(),
    TYTULHELION: z.string().optional().nullable()
}).strict();

export type HelionLocalInputType = z.infer<typeof HelionLocalInputSchema>;
