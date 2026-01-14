import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Waluta: z.string().max(4).optional().nullable(),
  Wyci_g: z.number().int().optional().nullable(),
  Data_wyc: z.coerce.date().optional().nullable(),
  Nasz_inv: z.number().int().optional().nullable(),
  Type: z.string().max(20).optional().nullable(),
  Kwota_wp_ywu: z.number().optional().nullable(),
  PayType: z.string().max(10).optional().nullable(),
  Graal_perc: z.number().optional().nullable(),
  Kwota_wyp_aty: z.number().optional().nullable(),
  Kwota_inv: z.number().optional().nullable(),
  Tax_10_: z.boolean().optional().nullable(),
  TaxPerc: z.number().optional().nullable(),
  Tax: z.number().optional().nullable(),
  Wyd_Debit: z.number().optional().nullable(),
  Extra_Bank: z.number().optional().nullable(),
  Transfer: z.number().optional().nullable(),
  AGNR: z.number().int().optional().nullable(),
  RIGHT: z.number().int().optional().nullable(),
  AUTOR: z.string().max(35).optional().nullable(),
  Title: z.string().max(50).optional().nullable(),
  WYDAB: z.string().max(5).optional().nullable(),
  WYD: z.string().max(50).optional().nullable(),
  OWNAB: z.string().max(5).optional().nullable(),
  OWNER: z.string().max(50).optional().nullable(),
  Sum: z.number().optional().nullable(),
  SumPLN: z.number().optional().nullable(),
  GRAAL_INCOME: z.number().optional().nullable(),
  Kurs: z.number().optional().nullable(),
  GraalPLN: z.number().optional().nullable(),
  Notes: z.string().optional().nullable()
}).strict();
export const pdxBilansCreateManyInputObjectSchema: z.ZodType<Prisma.pdxBilansCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.pdxBilansCreateManyInput>;
export const pdxBilansCreateManyInputObjectZodSchema = makeSchema();
