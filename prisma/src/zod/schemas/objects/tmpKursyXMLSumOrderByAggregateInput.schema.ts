import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  Id: SortOrderSchema.optional()
}).strict();
export const tmpKursyXMLSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tmpKursyXMLSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tmpKursyXMLSumOrderByAggregateInput>;
export const tmpKursyXMLSumOrderByAggregateInputObjectZodSchema = makeSchema();
