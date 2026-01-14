import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const dicteventsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictEventsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictEventsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictEventsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictEventsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictEventsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  EventCode: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  EventDesc: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(50)]).optional()
}).strict();
export const dictEventsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictEventsScalarWhereWithAggregatesInput> = dicteventsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictEventsScalarWhereWithAggregatesInput>;
export const dictEventsScalarWhereWithAggregatesInputObjectZodSchema = dicteventsscalarwherewithaggregatesinputSchema;
