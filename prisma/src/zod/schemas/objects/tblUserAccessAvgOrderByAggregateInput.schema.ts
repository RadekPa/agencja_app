import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PlaceID: SortOrderSchema.optional()
}).strict();
export const tblUserAccessAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblUserAccessAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessAvgOrderByAggregateInput>;
export const tblUserAccessAvgOrderByAggregateInputObjectZodSchema = makeSchema();
