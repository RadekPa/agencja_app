import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const tblauthorsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblAuthorsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblAuthorsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblAuthorsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblAuthorsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblAuthorsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  AuthorID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  FullName: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  FirstName: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  MiddleName: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  LastName: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  Suffix: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  PenName: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  UserMod: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(30)]).optional(),
  DateMod: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  Remarks: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(1000)]).optional().nullable()
}).strict();
export const tblAuthorsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblAuthorsScalarWhereWithAggregatesInput> = tblauthorsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblAuthorsScalarWhereWithAggregatesInput>;
export const tblAuthorsScalarWhereWithAggregatesInputObjectZodSchema = tblauthorsscalarwherewithaggregatesinputSchema;
