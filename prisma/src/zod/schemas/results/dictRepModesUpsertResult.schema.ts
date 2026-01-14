import * as z from 'zod';
export const dictRepModesUpsertResultSchema = z.object({
  RepModeID: z.number().int(),
  RepModeDesc: z.string(),
  tblClients_obsolete: z.array(z.unknown())
});