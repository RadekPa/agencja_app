import * as z from 'zod';
export const tblPersonContractTypeUpsertResultSchema = z.object({
  CTypeID: z.number().int(),
  CTypeDescr: z.string().optional()
});