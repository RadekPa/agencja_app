import * as z from 'zod';
// prettier-ignore
export const sysdiagramsInputSchema = z.object({
    name: z.string(),
    principal_id: z.number().int(),
    diagram_id: z.number().int(),
    version: z.number().int().optional().nullable(),
    definition: z.instanceof(Uint8Array).optional().nullable()
}).strict();

export type sysdiagramsInputType = z.infer<typeof sysdiagramsInputSchema>;
