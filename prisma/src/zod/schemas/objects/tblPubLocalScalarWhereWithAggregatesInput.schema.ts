import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const tblpublocalscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblPubLocalScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblPubLocalScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblPubLocalScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblPubLocalScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblPubLocalScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  PubLocalID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  AgrID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  LocalTitle: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  PubDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  LocalISBN: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(13)]).optional().nullable(),
  Printrun: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  LocalEdition: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const tblPubLocalScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblPubLocalScalarWhereWithAggregatesInput> = tblpublocalscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblPubLocalScalarWhereWithAggregatesInput>;
export const tblPubLocalScalarWhereWithAggregatesInputObjectZodSchema = tblpublocalscalarwherewithaggregatesinputSchema;
