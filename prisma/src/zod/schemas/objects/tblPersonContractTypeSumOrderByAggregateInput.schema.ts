import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CTypeID: SortOrderSchema.optional()
}).strict();
export const tblPersonContractTypeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPersonContractTypeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonContractTypeSumOrderByAggregateInput>;
export const tblPersonContractTypeSumOrderByAggregateInputObjectZodSchema = makeSchema();
