import * as z from 'zod';
// prettier-ignore
export const dictRepModesResultSchema = z.object({
    RepModeID: z.number().int(),
    RepModeDesc: z.string(),
    tblClients_obsolete: z.array(z.unknown())
}).strict();

export type dictRepModesResultType = z.infer<typeof dictRepModesResultSchema>;
