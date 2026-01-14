import * as z from 'zod';
export const ArAccountUpsertResultSchema = z.object({
  AccountID: z.number().int(),
  AccountDescription: z.string()
});