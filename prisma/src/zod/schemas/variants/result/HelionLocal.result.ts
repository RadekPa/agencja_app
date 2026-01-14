import * as z from 'zod';
// prettier-ignore
export const HelionLocalResultSchema = z.object({
    ISBNORG: z.string(),
    ISBNHELION: z.string(),
    TYTULORG: z.string().nullable(),
    TYTULHELION: z.string().nullable()
}).strict();

export type HelionLocalResultType = z.infer<typeof HelionLocalResultSchema>;
