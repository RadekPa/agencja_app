import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CTypeID: SortOrderSchema.optional(),
  CTypeDescr: SortOrderSchema.optional()
}).strict();
export const tblPersonContractTypeCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPersonContractTypeCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonContractTypeCountOrderByAggregateInput>;
export const tblPersonContractTypeCountOrderByAggregateInputObjectZodSchema = makeSchema();
