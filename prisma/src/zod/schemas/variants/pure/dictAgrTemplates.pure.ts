import * as z from 'zod';
// prettier-ignore
export const dictAgrTemplatesModelSchema = z.object({
    Name: z.string(),
    FileName: z.string()
}).strict();

export type dictAgrTemplatesPureType = z.infer<typeof dictAgrTemplatesModelSchema>;
