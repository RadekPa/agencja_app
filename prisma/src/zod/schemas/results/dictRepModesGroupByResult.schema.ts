import * as z from 'zod';
export const dictRepModesGroupByResultSchema = z.array(z.object({
  RepModeID: z.number().int(),
  RepModeDesc: z.string(),
  _count: z.object({
    RepModeID: z.number(),
    RepModeDesc: z.number(),
    tblClients_obsolete: z.number()
  }).optional(),
  _sum: z.object({
    RepModeID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    RepModeID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    RepModeID: z.number().int().nullable(),
    RepModeDesc: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    RepModeID: z.number().int().nullable(),
    RepModeDesc: z.string().nullable()
  }).nullable().optional()
}));