import * as z from 'zod';
export const tblPersonContractTypeFindFirstResultSchema = z.nullable(z.object({
  CTypeID: z.number().int(),
  CTypeDescr: z.string().optional()
}));