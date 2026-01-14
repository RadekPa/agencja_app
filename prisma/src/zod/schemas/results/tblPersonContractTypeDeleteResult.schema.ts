import * as z from 'zod';
export const tblPersonContractTypeDeleteResultSchema = z.nullable(z.object({
  CTypeID: z.number().int(),
  CTypeDescr: z.string().optional()
}));