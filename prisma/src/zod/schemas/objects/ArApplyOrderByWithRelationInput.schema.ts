import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ArTransactionOrderByWithRelationInputObjectSchema as ArTransactionOrderByWithRelationInputObjectSchema } from './ArTransactionOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  ApplyID: SortOrderSchema.optional(),
  DebitID: SortOrderSchema.optional(),
  CreditID: SortOrderSchema.optional(),
  TaxPerc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TaxAmt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AmtApplied: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  GraalPerc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  GraalAmt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ApplyDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TaxSet: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ArTransaction: z.lazy(() => ArTransactionOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ArApplyOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ArApplyOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ArApplyOrderByWithRelationInput>;
export const ArApplyOrderByWithRelationInputObjectZodSchema = makeSchema();
