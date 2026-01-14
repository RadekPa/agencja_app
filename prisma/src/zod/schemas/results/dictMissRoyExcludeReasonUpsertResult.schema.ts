import * as z from 'zod';
export const dictMissRoyExcludeReasonUpsertResultSchema = z.object({
  ExcludeReasonID: z.number().int(),
  ExcludeReasonCode: z.string().optional(),
  ExcludeReasonDesc: z.string().optional()
});