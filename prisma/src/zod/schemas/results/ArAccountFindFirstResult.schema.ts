import * as z from 'zod';
export const ArAccountFindFirstResultSchema = z.nullable(z.object({
  AccountID: z.number().int(),
  AccountDescription: z.string()
}));