import * as z from 'zod';
export const dictMissRoyExcludeReasonCreateResultSchema = z.object({
  ExcludeReasonID: z.number().int(),
  ExcludeReasonCode: z.string().optional(),
  ExcludeReasonDesc: z.string().optional()
});