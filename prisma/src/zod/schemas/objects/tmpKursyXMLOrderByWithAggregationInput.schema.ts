import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tmpKursyXMLCountOrderByAggregateInputObjectSchema as tmpKursyXMLCountOrderByAggregateInputObjectSchema } from './tmpKursyXMLCountOrderByAggregateInput.schema';
import { tmpKursyXMLAvgOrderByAggregateInputObjectSchema as tmpKursyXMLAvgOrderByAggregateInputObjectSchema } from './tmpKursyXMLAvgOrderByAggregateInput.schema';
import { tmpKursyXMLMaxOrderByAggregateInputObjectSchema as tmpKursyXMLMaxOrderByAggregateInputObjectSchema } from './tmpKursyXMLMaxOrderByAggregateInput.schema';
import { tmpKursyXMLMinOrderByAggregateInputObjectSchema as tmpKursyXMLMinOrderByAggregateInputObjectSchema } from './tmpKursyXMLMinOrderByAggregateInput.schema';
import { tmpKursyXMLSumOrderByAggregateInputObjectSchema as tmpKursyXMLSumOrderByAggregateInputObjectSchema } from './tmpKursyXMLSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  Id: SortOrderSchema.optional(),
  XMLData: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LoadedDateTime: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tmpKursyXMLCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tmpKursyXMLAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tmpKursyXMLMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tmpKursyXMLMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tmpKursyXMLSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tmpKursyXMLOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tmpKursyXMLOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tmpKursyXMLOrderByWithAggregationInput>;
export const tmpKursyXMLOrderByWithAggregationInputObjectZodSchema = makeSchema();
