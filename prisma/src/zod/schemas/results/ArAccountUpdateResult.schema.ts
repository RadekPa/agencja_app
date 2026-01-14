import * as z from 'zod';
export const ArAccountUpdateResultSchema = z.nullable(z.object({
  AccountID: z.number().int(),
  AccountDescription: z.string()
}));