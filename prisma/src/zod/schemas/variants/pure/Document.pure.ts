import * as z from 'zod';
// prettier-ignore
export const DocumentModelSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    description: z.string().nullable(),
    status: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    clientId: z.number().int(),
    client: z.unknown()
}).strict();

export type DocumentPureType = z.infer<typeof DocumentModelSchema>;
