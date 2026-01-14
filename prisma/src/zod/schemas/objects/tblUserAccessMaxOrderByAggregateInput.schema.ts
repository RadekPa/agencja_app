import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  Login: SortOrderSchema.optional(),
  PlaceID: SortOrderSchema.optional()
}).strict();
export const tblUserAccessMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblUserAccessMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessMaxOrderByAggregateInput>;
export const tblUserAccessMaxOrderByAggregateInputObjectZodSchema = makeSchema();
