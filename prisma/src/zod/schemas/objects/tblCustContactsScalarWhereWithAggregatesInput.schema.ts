import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BoolNullableWithAggregatesFilterObjectSchema as BoolNullableWithAggregatesFilterObjectSchema } from './BoolNullableWithAggregatesFilter.schema'

const tblcustcontactsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblCustContactsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblCustContactsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblCustContactsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblCustContactsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblCustContactsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  ContactID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  CustID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  DefaultContact: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  TypeOfContact: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  Phone: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  CellPhone: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  Fax: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  Email: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  IsSameAsClient: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable()
}).strict();
export const tblCustContactsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblCustContactsScalarWhereWithAggregatesInput> = tblcustcontactsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblCustContactsScalarWhereWithAggregatesInput>;
export const tblCustContactsScalarWhereWithAggregatesInputObjectZodSchema = tblcustcontactsscalarwherewithaggregatesinputSchema;
