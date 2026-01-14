import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  Id: SortOrderSchema.optional()
}).strict();
export const tmpKursyXMLAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tmpKursyXMLAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tmpKursyXMLAvgOrderByAggregateInput>;
export const tmpKursyXMLAvgOrderByAggregateInputObjectZodSchema = makeSchema();
