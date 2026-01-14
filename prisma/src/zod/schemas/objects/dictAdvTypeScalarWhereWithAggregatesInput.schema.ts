import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const dictadvtypescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictAdvTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictAdvTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictAdvTypeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictAdvTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictAdvTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  AdvTypeId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  AdvTypeDesc: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  AdvTypeDescPL: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable()
}).strict();
export const dictAdvTypeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictAdvTypeScalarWhereWithAggregatesInput> = dictadvtypescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictAdvTypeScalarWhereWithAggregatesInput>;
export const dictAdvTypeScalarWhereWithAggregatesInputObjectZodSchema = dictadvtypescalarwherewithaggregatesinputSchema;
