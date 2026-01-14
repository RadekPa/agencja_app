import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionCreateNestedOneWithoutArApplyInputObjectSchema as ArTransactionCreateNestedOneWithoutArApplyInputObjectSchema } from './ArTransactionCreateNestedOneWithoutArApplyInput.schema'

const makeSchema = () => z.object({
  DebitID: z.number().int(),
  TaxPerc: z.number().optional().nullable(),
  TaxAmt: z.number().optional().nullable(),
  AmtApplied: z.number().optional().nullable(),
  GraalPerc: z.number().optional().nullable(),
  GraalAmt: z.number().optional().nullable(),
  Notes: z.string().optional().nullable(),
  ApplyDate: z.coerce.date().optional().nullable(),
  TaxSet: z.boolean().optional().nullable(),
  ArTransaction: z.lazy(() => ArTransactionCreateNestedOneWithoutArApplyInputObjectSchema)
}).strict();
export const ArApplyCreateInputObjectSchema: z.ZodType<Prisma.ArApplyCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArApplyCreateInput>;
export const ArApplyCreateInputObjectZodSchema = makeSchema();
