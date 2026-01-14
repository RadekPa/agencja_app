import * as z from 'zod';
export const tblPersonContractTypeUpdateResultSchema = z.nullable(z.object({
  CTypeID: z.number().int(),
  CTypeDescr: z.string().optional()
}));