import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const dictcurrenciesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictCurrenciesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictCurrenciesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictCurrenciesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictCurrenciesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictCurrenciesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  CurrID: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(3)]).optional(),
  CurrDesc: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(50)]).optional()
}).strict();
export const dictCurrenciesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictCurrenciesScalarWhereWithAggregatesInput> = dictcurrenciesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictCurrenciesScalarWhereWithAggregatesInput>;
export const dictCurrenciesScalarWhereWithAggregatesInputObjectZodSchema = dictcurrenciesscalarwherewithaggregatesinputSchema;
