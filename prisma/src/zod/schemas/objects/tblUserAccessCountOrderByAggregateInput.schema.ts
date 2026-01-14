import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  Login: SortOrderSchema.optional(),
  PlaceID: SortOrderSchema.optional()
}).strict();
export const tblUserAccessCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblUserAccessCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessCountOrderByAggregateInput>;
export const tblUserAccessCountOrderByAggregateInputObjectZodSchema = makeSchema();
