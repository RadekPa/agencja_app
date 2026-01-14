import * as z from 'zod';
export const dictAdvWithoutInvExcludeReasonUpdateResultSchema = z.nullable(z.object({
  ExcludeReasonID: z.number().int(),
  ExcludeReasonCode: z.string().optional(),
  ExcludeReasonDesc: z.string().optional()
}));