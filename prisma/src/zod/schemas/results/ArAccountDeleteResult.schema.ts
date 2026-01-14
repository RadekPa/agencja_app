import * as z from 'zod';
export const ArAccountDeleteResultSchema = z.nullable(z.object({
  AccountID: z.number().int(),
  AccountDescription: z.string()
}));