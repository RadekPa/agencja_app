import * as z from 'zod';
// prettier-ignore
export const dictAgrTemplatesInputSchema = z.object({
    Name: z.string(),
    FileName: z.string()
}).strict();

export type dictAgrTemplatesInputType = z.infer<typeof dictAgrTemplatesInputSchema>;
