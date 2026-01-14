import * as z from 'zod';
export const tblContactsDeleteManyResultSchema = z.object({
  count: z.number()
});