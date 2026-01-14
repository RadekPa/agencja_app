import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const dictrepmodesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictRepModesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictRepModesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictRepModesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictRepModesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictRepModesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  RepModeID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  RepModeDesc: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(30)]).optional()
}).strict();
export const dictRepModesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictRepModesScalarWhereWithAggregatesInput> = dictrepmodesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictRepModesScalarWhereWithAggregatesInput>;
export const dictRepModesScalarWhereWithAggregatesInputObjectZodSchema = dictrepmodesscalarwherewithaggregatesinputSchema;
