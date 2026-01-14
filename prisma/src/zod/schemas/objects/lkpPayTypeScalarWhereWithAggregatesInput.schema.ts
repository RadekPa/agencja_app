import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const lkppaytypescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => lkpPayTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => lkpPayTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => lkpPayTypeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => lkpPayTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => lkpPayTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  PayTypeID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  Description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  DescriptionPL: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(100)]).optional().nullable()
}).strict();
export const lkpPayTypeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.lkpPayTypeScalarWhereWithAggregatesInput> = lkppaytypescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.lkpPayTypeScalarWhereWithAggregatesInput>;
export const lkpPayTypeScalarWhereWithAggregatesInputObjectZodSchema = lkppaytypescalarwherewithaggregatesinputSchema;
