import * as z from 'zod';
export const tblPersonContractTypeCreateResultSchema = z.object({
  CTypeID: z.number().int(),
  CTypeDescr: z.string().optional()
});