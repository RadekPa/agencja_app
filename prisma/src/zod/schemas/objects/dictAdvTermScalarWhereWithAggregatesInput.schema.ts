import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const dictadvtermscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictAdvTermScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictAdvTermScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictAdvTermScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictAdvTermScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictAdvTermScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  AdvTermId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  AdvTermDesc: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  AdvTermPL: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable()
}).strict();
export const dictAdvTermScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictAdvTermScalarWhereWithAggregatesInput> = dictadvtermscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictAdvTermScalarWhereWithAggregatesInput>;
export const dictAdvTermScalarWhereWithAggregatesInputObjectZodSchema = dictadvtermscalarwherewithaggregatesinputSchema;
