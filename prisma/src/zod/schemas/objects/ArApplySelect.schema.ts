import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionArgsObjectSchema as ArTransactionArgsObjectSchema } from './ArTransactionArgs.schema'

const makeSchema = () => z.object({
  ApplyID: z.boolean().optional(),
  DebitID: z.boolean().optional(),
  CreditID: z.boolean().optional(),
  TaxPerc: z.boolean().optional(),
  TaxAmt: z.boolean().optional(),
  AmtApplied: z.boolean().optional(),
  GraalPerc: z.boolean().optional(),
  GraalAmt: z.boolean().optional(),
  Notes: z.boolean().optional(),
  ApplyDate: z.boolean().optional(),
  TaxSet: z.boolean().optional(),
  ArTransaction: z.union([z.boolean(), z.lazy(() => ArTransactionArgsObjectSchema)]).optional()
}).strict();
export const ArApplySelectObjectSchema: z.ZodType<Prisma.ArApplySelect> = makeSchema() as unknown as z.ZodType<Prisma.ArApplySelect>;
export const ArApplySelectObjectZodSchema = makeSchema();
