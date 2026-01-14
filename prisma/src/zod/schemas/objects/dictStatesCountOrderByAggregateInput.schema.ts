import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  StateID: SortOrderSchema.optional(),
  CountryID: SortOrderSchema.optional(),
  StateAbb: SortOrderSchema.optional(),
  StateName: SortOrderSchema.optional()
}).strict();
export const dictStatesCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictStatesCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesCountOrderByAggregateInput>;
export const dictStatesCountOrderByAggregateInputObjectZodSchema = makeSchema();
