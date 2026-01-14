import * as z from 'zod';
export const ArAccountFindUniqueResultSchema = z.nullable(z.object({
  AccountID: z.number().int(),
  AccountDescription: z.string()
}));