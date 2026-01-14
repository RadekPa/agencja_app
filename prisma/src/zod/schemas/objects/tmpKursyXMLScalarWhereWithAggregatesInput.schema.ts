import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const tmpkursyxmlscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tmpKursyXMLScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tmpKursyXMLScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tmpKursyXMLScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tmpKursyXMLScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tmpKursyXMLScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  Id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  XMLData: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  LoadedDateTime: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const tmpKursyXMLScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tmpKursyXMLScalarWhereWithAggregatesInput> = tmpkursyxmlscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tmpKursyXMLScalarWhereWithAggregatesInput>;
export const tmpKursyXMLScalarWhereWithAggregatesInputObjectZodSchema = tmpkursyxmlscalarwherewithaggregatesinputSchema;
