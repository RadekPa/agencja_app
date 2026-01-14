import * as z from 'zod';
export const tblPdoxInvMatDeleteResultSchema = z.nullable(z.object({
  Invoice_Nr: z.number().int(),
  Title: z.string().optional(),
  ISBN: z.string().optional()
}));