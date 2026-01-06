import * as z from 'zod';
// prettier-ignore
export const DocumentInputSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    description: z.string().optional().nullable(),
    status: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    clientId: z.number().int(),
    client: z.unknown()
}).strict();

export type DocumentInputType = z.infer<typeof DocumentInputSchema>;
