import * as z from 'zod';
export const lkpPayTypeUpdateResultSchema = z.nullable(z.object({
  PayTypeID: z.number().int(),
  Description: z.string().optional(),
  DescriptionPL: z.string().optional()
}));