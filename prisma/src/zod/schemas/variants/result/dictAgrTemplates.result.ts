import * as z from 'zod';
// prettier-ignore
export const dictAgrTemplatesResultSchema = z.object({
    Name: z.string(),
    FileName: z.string()
}).strict();

export type dictAgrTemplatesResultType = z.infer<typeof dictAgrTemplatesResultSchema>;
