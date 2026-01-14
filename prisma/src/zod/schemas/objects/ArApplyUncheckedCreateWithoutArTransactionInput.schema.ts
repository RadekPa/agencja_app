import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ApplyID: z.number().int().optional(),
  DebitID: z.number().int(),
  TaxPerc: z.number().optional().nullable(),
  TaxAmt: z.number().optional().nullable(),
  AmtApplied: z.number().optional().nullable(),
  GraalPerc: z.number().optional().nullable(),
  GraalAmt: z.number().optional().nullable(),
  Notes: z.string().optional().nullable(),
  ApplyDate: z.coerce.date().optional().nullable(),
  TaxSet: z.boolean().optional().nullable()
}).strict();
export const ArApplyUncheckedCreateWithoutArTransactionInputObjectSchema: z.ZodType<Prisma.ArApplyUncheckedCreateWithoutArTransactionInput> = makeSchema() as unknown as z.ZodType<Prisma.ArApplyUncheckedCreateWithoutArTransactionInput>;
export const ArApplyUncheckedCreateWithoutArTransactionInputObjectZodSchema = makeSchema();
