import * as z from 'zod';
export const dictRepModesDeleteResultSchema = z.nullable(z.object({
  RepModeID: z.number().int(),
  RepModeDesc: z.string(),
  tblClients_obsolete: z.array(z.unknown())
}));