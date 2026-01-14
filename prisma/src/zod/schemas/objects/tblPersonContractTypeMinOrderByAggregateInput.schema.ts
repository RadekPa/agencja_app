import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CTypeID: SortOrderSchema.optional(),
  CTypeDescr: SortOrderSchema.optional()
}).strict();
export const tblPersonContractTypeMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPersonContractTypeMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonContractTypeMinOrderByAggregateInput>;
export const tblPersonContractTypeMinOrderByAggregateInputObjectZodSchema = makeSchema();
