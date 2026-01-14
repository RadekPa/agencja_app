import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  RepModeID: SortOrderSchema.optional(),
  RepModeDesc: SortOrderSchema.optional()
}).strict();
export const dictRepModesCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictRepModesCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRepModesCountOrderByAggregateInput>;
export const dictRepModesCountOrderByAggregateInputObjectZodSchema = makeSchema();
