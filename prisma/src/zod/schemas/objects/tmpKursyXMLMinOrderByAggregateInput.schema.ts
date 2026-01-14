import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  Id: SortOrderSchema.optional(),
  XMLData: SortOrderSchema.optional(),
  LoadedDateTime: SortOrderSchema.optional()
}).strict();
export const tmpKursyXMLMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tmpKursyXMLMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tmpKursyXMLMinOrderByAggregateInput>;
export const tmpKursyXMLMinOrderByAggregateInputObjectZodSchema = makeSchema();
