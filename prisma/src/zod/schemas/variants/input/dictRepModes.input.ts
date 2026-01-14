import * as z from 'zod';
// prettier-ignore
export const dictRepModesInputSchema = z.object({
    RepModeID: z.number().int(),
    RepModeDesc: z.string(),
    tblClients_obsolete: z.array(z.unknown())
}).strict();

export type dictRepModesInputType = z.infer<typeof dictRepModesInputSchema>;
