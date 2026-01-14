import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Bil_nr: z.number().int(),
  Date: z.coerce.date().optional().nullable(),
  PayType: z.string().max(10).optional().nullable(),
  Nasz_inv: z.number().int().optional().nullable(),
  Waluta: z.string().max(4).optional().nullable(),
  Kwota_wp_ywu: z.number().optional().nullable(),
  Kwota_inv: z.number().optional().nullable(),
  Tax_10_: z.boolean().optional().nullable(),
  Tax: z.number().optional().nullable(),
  AgrID: z.number().int().optional().nullable(),
  AUTOR: z.string().max(50).optional().nullable(),
  Title: z.string().max(50).optional().nullable(),
  WYD: z.string().max(50).optional().nullable(),
  OWNAB: z.string().max(5).optional().nullable(),
  GRAAL_INCOME: z.number().optional().nullable(),
  Transfer: z.number().optional().nullable()
}).strict();
export const pdxTRANSFERCreateInputObjectSchema: z.ZodType<Prisma.pdxTRANSFERCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.pdxTRANSFERCreateInput>;
export const pdxTRANSFERCreateInputObjectZodSchema = makeSchema();
