import * as z from 'zod';
// prettier-ignore
export const HelionLocalModelSchema = z.object({
    ISBNORG: z.string(),
    ISBNHELION: z.string(),
    TYTULORG: z.string().nullable(),
    TYTULHELION: z.string().nullable()
}).strict();

export type HelionLocalPureType = z.infer<typeof HelionLocalModelSchema>;
