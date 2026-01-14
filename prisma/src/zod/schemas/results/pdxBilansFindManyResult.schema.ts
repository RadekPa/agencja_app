import * as z from 'zod';
export const pdxBilansFindManyResultSchema = z.object({
  data: z.array(z.object({
  Bil_nr: z.number().int(),
  Waluta: z.string().optional(),
  Wyci_g: z.number().int().optional(),
  Data_wyc: z.date().optional(),
  Nasz_inv: z.number().int().optional(),
  Type: z.string().optional(),
  Kwota_wp_ywu: z.number().optional(),
  PayType: z.string().optional(),
  Graal_perc: z.number().optional(),
  Kwota_wyp_aty: z.number().optional(),
  Kwota_inv: z.number().optional(),
  Tax_10_: z.boolean().optional(),
  TaxPerc: z.number().optional(),
  Tax: z.number().optional(),
  Wyd_Debit: z.number().optional(),
  Extra_Bank: z.number().optional(),
  Transfer: z.number().optional(),
  AGNR: z.number().int().optional(),
  RIGHT: z.number().int().optional(),
  AUTOR: z.string().optional(),
  Title: z.string().optional(),
  WYDAB: z.string().optional(),
  WYD: z.string().optional(),
  OWNAB: z.string().optional(),
  OWNER: z.string().optional(),
  Sum: z.number().optional(),
  SumPLN: z.number().optional(),
  GRAAL_INCOME: z.number().optional(),
  Kurs: z.number().optional(),
  GraalPLN: z.number().optional(),
  Notes: z.string().optional()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});