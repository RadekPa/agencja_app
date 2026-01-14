import * as z from 'zod';
export const ArAccountCreateResultSchema = z.object({
  AccountID: z.number().int(),
  AccountDescription: z.string()
});