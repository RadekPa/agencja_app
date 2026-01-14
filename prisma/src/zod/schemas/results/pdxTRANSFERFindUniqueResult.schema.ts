import * as z from 'zod';
export const pdxTRANSFERFindUniqueResultSchema = z.nullable(z.object({
  Bil_nr: z.number().int(),
  Date: z.date().optional(),
  PayType: z.string().optional(),
  Nasz_inv: z.number().int().optional(),
  Waluta: z.string().optional(),
  Kwota_wp_ywu: z.number().optional(),
  Kwota_inv: z.number().optional(),
  Tax_10_: z.boolean().optional(),
  Tax: z.number().optional(),
  AgrID: z.number().int().optional(),
  AUTOR: z.string().optional(),
  Title: z.string().optional(),
  WYD: z.string().optional(),
  OWNAB: z.string().optional(),
  GRAAL_INCOME: z.number().optional(),
  Transfer: z.number().optional()
}));