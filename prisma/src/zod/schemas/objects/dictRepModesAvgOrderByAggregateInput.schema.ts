import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  RepModeID: SortOrderSchema.optional()
}).strict();
export const dictRepModesAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictRepModesAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRepModesAvgOrderByAggregateInput>;
export const dictRepModesAvgOrderByAggregateInputObjectZodSchema = makeSchema();
