import * as z from 'zod';
// prettier-ignore
export const sysdiagramsResultSchema = z.object({
    name: z.string(),
    principal_id: z.number().int(),
    diagram_id: z.number().int(),
    version: z.number().int().nullable(),
    definition: z.instanceof(Uint8Array).nullable()
}).strict();

export type sysdiagramsResultType = z.infer<typeof sysdiagramsResultSchema>;
