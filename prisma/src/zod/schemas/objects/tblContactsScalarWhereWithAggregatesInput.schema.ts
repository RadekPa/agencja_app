import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema'

const tblcontactsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblContactsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblContactsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblContactsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblContactsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblContactsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  ContactID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  PhoneNumber: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  FirstName: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(30)]).optional().nullable(),
  MiddleName: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(30)]).optional().nullable(),
  LastName: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  Informal: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  Fax: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  Email: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  UserMod: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(30)]).optional(),
  DateMod: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  ContactPosition: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  Accountant: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const tblContactsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblContactsScalarWhereWithAggregatesInput> = tblcontactsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblContactsScalarWhereWithAggregatesInput>;
export const tblContactsScalarWhereWithAggregatesInputObjectZodSchema = tblcontactsscalarwherewithaggregatesinputSchema;
