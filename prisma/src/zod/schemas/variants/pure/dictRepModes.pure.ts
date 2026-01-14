import * as z from 'zod';
// prettier-ignore
export const dictRepModesModelSchema = z.object({
    RepModeID: z.number().int(),
    RepModeDesc: z.string(),
    tblClients_obsolete: z.array(z.unknown())
}).strict();

export type dictRepModesPureType = z.infer<typeof dictRepModesModelSchema>;
