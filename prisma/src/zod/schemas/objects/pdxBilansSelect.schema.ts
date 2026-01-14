import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Bil_nr: z.boolean().optional(),
  Waluta: z.boolean().optional(),
  Wyci_g: z.boolean().optional(),
  Data_wyc: z.boolean().optional(),
  Nasz_inv: z.boolean().optional(),
  Type: z.boolean().optional(),
  Kwota_wp_ywu: z.boolean().optional(),
  PayType: z.boolean().optional(),
  Graal_perc: z.boolean().optional(),
  Kwota_wyp_aty: z.boolean().optional(),
  Kwota_inv: z.boolean().optional(),
  Tax_10_: z.boolean().optional(),
  TaxPerc: z.boolean().optional(),
  Tax: z.boolean().optional(),
  Wyd_Debit: z.boolean().optional(),
  Extra_Bank: z.boolean().optional(),
  Transfer: z.boolean().optional(),
  AGNR: z.boolean().optional(),
  RIGHT: z.boolean().optional(),
  AUTOR: z.boolean().optional(),
  Title: z.boolean().optional(),
  WYDAB: z.boolean().optional(),
  WYD: z.boolean().optional(),
  OWNAB: z.boolean().optional(),
  OWNER: z.boolean().optional(),
  Sum: z.boolean().optional(),
  SumPLN: z.boolean().optional(),
  GRAAL_INCOME: z.boolean().optional(),
  Kurs: z.boolean().optional(),
  GraalPLN: z.boolean().optional(),
  Notes: z.boolean().optional()
}).strict();
export const pdxBilansSelectObjectSchema: z.ZodType<Prisma.pdxBilansSelect> = makeSchema() as unknown as z.ZodType<Prisma.pdxBilansSelect>;
export const pdxBilansSelectObjectZodSchema = makeSchema();
