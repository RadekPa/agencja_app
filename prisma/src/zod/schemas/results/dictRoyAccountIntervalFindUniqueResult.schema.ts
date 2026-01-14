import * as z from 'zod';
export const dictRoyAccountIntervalFindUniqueResultSchema = z.nullable(z.object({
  RoyAccountIntervalID: z.number().int(),
  RoyAccountIntervalDesc: z.string(),
  IntervalAbb: z.string().optional(),
  tblAgrRights: z.array(z.unknown())
}));